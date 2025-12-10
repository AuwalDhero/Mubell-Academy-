import React from 'react';
import { Play, Mic, FileText, ExternalLink } from 'lucide-react';
import { MEDIA_LINKS } from '../constants';

const Media: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Media & Press</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Interviews, podcasts, and features sharing the message of emotional restoration.
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MEDIA_LINKS.map((item) => (
            <a 
              key={item.id} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-all hover:-translate-y-1 group block"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                   {item.type === 'video' && <Play size={20} />}
                   {item.type === 'podcast' && <Mic size={20} />}
                   {item.type === 'article' && <FileText size={20} />}
                </div>
                <ExternalLink size={20} className="text-brand-muted group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2 leading-tight group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-brand-muted uppercase tracking-wider font-semibold">
                {item.source}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;
