import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';

const Programs: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Programs</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Specialized pathways to emotional mastery for every aspect of your life and leadership.
        </p>
      </section>

      {/* Programs Grid */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all hover:-translate-y-1 flex flex-col group">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{program.title}</h3>
              <p className="text-brand-muted leading-relaxed mb-6 flex-grow">
                {program.shortSummary}
              </p>
              <Link 
                to={`/programs/${program.id}`}
                className="inline-flex items-center gap-2 text-brand-accent font-medium hover:text-white transition-colors mt-auto"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
