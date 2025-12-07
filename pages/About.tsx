import React from 'react';
import { Target, Users, HeartHandshake } from 'lucide-react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Core Essence</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          Mubell Empathy Academy was born from a simple yet radical idea: Emotions are data, not distractions.
        </p>
      </section>

      {/* Founder Story */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="w-full lg:w-2/5">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Founder of MEA" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <h3 className="text-brand-accent uppercase tracking-widest text-sm font-semibold mb-2">The Origin</h3>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Why I Started MEA</h2>
            <div className="space-y-6 text-brand-muted leading-relaxed">
              <p>
                "For years, I operated under the assumption that success required suppressing my humanity. I was a high-performing leader, but internally, I was crumbling. I realized that my inability to process emotions wasn't just hurting me—it was capping my potential and hurting the people I led."
              </p>
              <p>
                Mubell Empathy Academy bridges the gap between soft skills and hard results. We aren't here to just make you 'feel better.' We are here to make you better at feeling.
              </p>
              <p>
                Our mission is to equip 10,000 leaders and families with the tools to transmute emotional chaos into clarity.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <span className="block font-serif text-xl text-white">Alex Mubell</span>
              <span className="text-sm text-brand-accent">Founder & Lead Coach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Our Philosophy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Precision, Not Platitudes",
              text: "We don't use vague affirmations. We use specific, actionable frameworks to dismantle triggers."
            },
            {
              icon: HeartHandshake,
              title: "Compassionate Accountability",
              text: "Empathy doesn't mean letting people off the hook. It means holding standards with love and understanding."
            },
            {
              icon: Users,
              title: "Systemic Healing",
              text: "When one person in a family or team changes, the whole system shifts. Your growth lifts everyone around you."
            }
          ].map((item, i) => (
            <div key={i} className="text-center p-8">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-brand-accent mx-auto mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-serif text-white mb-4">{item.title}</h3>
              <p className="text-brand-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-12 text-center">
        <div className="border border-brand-accent/30 rounded-2xl p-12 bg-gradient-to-br from-transparent to-brand-accent/5">
          <h2 className="text-3xl font-serif text-white mb-6">Experience the Difference</h2>
          <Button to="/services" variant="primary">View Services</Button>
        </div>
      </section>
    </div>
  );
};

export default About;