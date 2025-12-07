import React from 'react';
import { SERVICES } from '../constants';
import Button from '../components/Button';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Services</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Designed for depth. Structured for results. Choose the path that fits your journey.
        </p>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 md:px-12 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {/* Visual Side */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                 <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                 <img 
                   src={`https://picsum.photos/seed/${service.id}/800/600`} 
                   alt={service.title} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                 />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4 text-brand-accent">
                {service.icon && <service.icon size={24} />}
                <span className="uppercase tracking-widest text-xs font-bold">{service.format}</span>
              </div>
              <h2 className="text-3xl font-serif text-white mb-4">{service.title}</h2>
              <p className="text-brand-muted text-lg mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-8 p-4 bg-white/5 rounded-lg border-l-2 border-brand-accent">
                <span className="text-sm text-brand-muted block mb-1">Perfect For:</span>
                <span className="text-white font-medium">{service.targetAudience}</span>
              </div>

              <div className="space-y-2 mb-8">
                 <div className="flex items-center gap-2 text-brand-muted text-sm">
                    <CheckCircle2 size={16} className="text-brand-accent" />
                    <span>Personalized Curriculum</span>
                 </div>
                 <div className="flex items-center gap-2 text-brand-muted text-sm">
                    <CheckCircle2 size={16} className="text-brand-accent" />
                    <span>Direct Access to Coach</span>
                 </div>
                 <div className="flex items-center gap-2 text-brand-muted text-sm">
                    <CheckCircle2 size={16} className="text-brand-accent" />
                    <span>Post-Session Resources</span>
                 </div>
              </div>

              <Button to="/contact" variant="primary">
                Book This Service
              </Button>
            </div>
          </div>
        ))}
      </section>

      {/* Corporate / Custom */}
      <section className="container mx-auto px-6 md:px-12 mt-24">
        <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-center border border-dashed border-white/20">
          <h3 className="text-2xl font-serif text-white mb-4">Looking for Corporate Workshops?</h3>
          <p className="text-brand-muted mb-6 max-w-2xl mx-auto">
            We offer bespoke emotional intelligence training for teams, focusing on psychological safety, conflict resolution, and leadership embodiment.
          </p>
          <Button to="/contact" variant="outline">Inquire About Corporate Packages</Button>
        </div>
      </section>
    </div>
  );
};

export default Services;