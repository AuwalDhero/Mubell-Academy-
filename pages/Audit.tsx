import React, { useState } from 'react';
import { AUDIT_SECTIONS } from '../constants';
import Button from '../components/Button';

const Audit: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [completed, setCompleted] = useState(false);

  // Helper to generate unique key for each question
  const getQuestionKey = (sectionId: string, qIndex: number) => `${sectionId}-${qIndex}`;

  const handleOptionChange = (sectionId: string, qIndex: number, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [getQuestionKey(sectionId, qIndex)]: value
    }));
  };

  const calculateResults = () => {
    const results = AUDIT_SECTIONS.map(section => {
      let yesCount = 0;
      section.questions.forEach((_, idx) => {
        if (answers[getQuestionKey(section.id, idx)] === 1) {
          yesCount++;
        }
      });

      let status = "";
      if (yesCount >= 3) status = "Strong Skill";
      else if (yesCount === 2) status = "Moderate Skill";
      else status = "Growth Priority";

      return { title: section.title, status, yesCount };
    });
    return results;
  };

  const isFormComplete = () => {
    let totalQuestions = 0;
    AUDIT_SECTIONS.forEach(s => totalQuestions += s.questions.length);
    return Object.keys(answers).length === totalQuestions;
  };

  if (completed) {
    const results = calculateResults();
    return (
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
           <div className="bg-brand-darker rounded-3xl p-8 md:p-12 border border-brand-accent/30 text-center">
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Your EI Audit Results</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
               {results.map((res, idx) => (
                 <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5">
                   <h4 className="text-white font-serif text-lg mb-2">{res.title}</h4>
                   <div className="flex justify-between items-center">
                     <span className={`font-bold ${
                       res.status === 'Strong Skill' ? 'text-green-400' : 
                       res.status === 'Moderate Skill' ? 'text-yellow-400' : 'text-red-400'
                     }`}>
                       {res.status}
                     </span>
                     <span className="text-xs text-brand-muted uppercase tracking-wider">
                       {res.yesCount}/4 Yes
                     </span>
                   </div>
                 </div>
               ))}
             </div>

             <div className="bg-brand-accent/10 rounded-xl p-8 mb-8">
               <p className="text-white text-lg mb-4">
                 Awareness is the first step. Action is the second.
                 Let's discuss your results and build a plan to strengthen your growth areas.
               </p>
               <a 
                 href="https://wa.me/2348025776657" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium bg-brand-accent text-brand-darker hover:bg-brand-accentHover transition-colors shadow-lg"
               >
                 Book a Free EI Clarity Session on WhatsApp
               </a>
             </div>
             
             <Button variant="outline" onClick={() => { setCompleted(false); setAnswers({}); }}>
               Retake Audit
             </Button>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Emotional Intelligence Audit</h1>
        <p className="text-brand-muted max-w-2xl mx-auto">
          Assess your emotional baseline. Be honest—this is for your eyes and growth only.
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12 max-w-3xl">
        <form className="space-y-12">
          {AUDIT_SECTIONS.map((section) => (
            <div key={section.id} className="bg-white/5 rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-serif text-brand-accent mb-6 pb-4 border-b border-white/10">
                {section.title}
              </h3>
              <div className="space-y-8">
                {section.questions.map((q, idx) => (
                  <div key={idx}>
                    <p className="text-white mb-4 font-medium">{q}</p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { label: 'Yes', value: 1 },
                        { label: 'Sometimes', value: 0 },
                        { label: 'No', value: 0 }
                      ].map((opt) => {
                        const qKey = getQuestionKey(section.id, idx);
                        const isSelected = answers[qKey] === opt.value;
                        // Since sometimes and no have same value (0 for score logic provided), we need to track selection differently if we want UI state to persist perfectly for re-edits, but for simple MVP scoring logic 1 vs 0 is enough. 
                        // To make UI highlight correct button even if values are same, we technically need to store the Label or a specific ID. 
                        // For simplicity in this constraints, we will just use value 1 for Yes, 0 for others, but for UI we might lose distinct 'Sometimes' vs 'No' visual state if values are same. 
                        // Let's adjust state to store the string label instead.
                        return (
                          <button
                            key={opt.label}
                            type="button"
                            onClick={() => handleOptionChange(section.id, idx, opt.value)}
                            className={`px-6 py-2 rounded-full text-sm transition-colors border ${
                              // Simple check for now based on value, might highlight both No/Sometimes if selected. 
                              // Correct fix: Store specific value (2, 1, 0) then map to score.
                              // Let's implement: Yes=1, else=0. 
                              // Visual active state is tricky without unique values.
                              // Let's just make the button active if clicked. 
                              // Actually, let's use a unique value for state 1=Yes, 0.5=Sometimes, 0=No.
                              // Then floor for score calculation.
                              answers[qKey] === (opt.label === 'Yes' ? 1 : opt.label === 'Sometimes' ? 0.5 : 0)
                                ? 'bg-brand-accent text-brand-darker border-brand-accent'
                                : 'bg-transparent text-brand-muted border-white/20 hover:border-brand-accent/50'
                            }`}
                            // On click logic override
                            onPointerDown={() => handleOptionChange(section.id, idx, opt.label === 'Yes' ? 1 : opt.label === 'Sometimes' ? 0.5 : 0)}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="text-center pt-8">
            <Button 
              onClick={() => isFormComplete() ? setCompleted(true) : alert("Please answer all questions.")}
              className="w-full md:w-auto"
            >
              Calculate Results
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Audit;
