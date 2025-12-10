import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import { PROGRAMS } from '../constants';
import Button from '../components/Button';

const ProgramDetail: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const program = PROGRAMS.find(p => p.id === programId);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/programs" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-accent transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Back to Programs
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-8">{program.title}</h1>
          
          <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/5 mb-12">
             <div className="space-y-6 text-lg text-brand-muted leading-relaxed mb-10">
               {program.description.map((para, i) => (
                 <p key={i}>{para}</p>
               ))}
             </div>

             <h3 className="text-2xl font-serif text-white mb-6">Key Outcomes</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
               {program.benefits.map((benefit, idx) => (
                 <div key={idx} className="flex items-start gap-3">
                   <div className="mt-1 bg-brand-accent/20 rounded-full p-1 text-brand-accent shrink-0">
                     <Check size={14} />
                   </div>
                   <span className="text-brand-muted">{benefit}</span>
                 </div>
               ))}
             </div>

             <div className="flex flex-col sm:flex-row gap-4">
               <a 
                 href="https://wa.me/2348025776657" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide bg-brand-accent text-brand-darker hover:bg-brand-accentHover hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
               >
                 Inquire on WhatsApp
               </a>
               <Button to="/contact" variant="outline">
                 Book a Consultation
               </Button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
