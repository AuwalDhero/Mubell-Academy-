import React from 'react';
import { Target, Users, HeartHandshake, ShieldCheck, Cpu, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Restoring Human Intelligence</h1>
        <p className="text-brand-muted max-w-2xl mx-auto text-lg">
          In a world driven by Artificial Intelligence, we are reclaiming the power of the human heart.
        </p>
      </section>

      {/* Mission & Essence */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="space-y-6 text-brand-muted leading-relaxed">
               <p className="text-lg text-white font-serif">
                 "Technology can analyze emotions; only humans can transform them."
               </p>
               <p>
                 At Mubell Empathy Academy, we deliver practical emotional mastery tools rooted in neuroscience, trauma-informed practices, psychological self-awareness, empathy, and relational intelligence.
               </p>
               <p>
                 We help individuals stop people-pleasing and start living with emotional authority. Our mission is to make emotional intelligence the most valuable currency in a world overflowing with information.
               </p>
               <div className="p-6 bg-brand-accent/5 rounded-xl border-l-4 border-brand-accent my-6">
                 <h4 className="text-white font-serif mb-2">Who We Serve</h4>
                 <p className="text-sm">Individuals, Couples, Leaders, Parents, and Working Professionals seeking deeper clarity and control.</p>
               </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden relative border border-white/5">
               <img 
                 src="https://picsum.photos/800/800?grayscale" 
                 alt="Human Connection" 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Different */}
      <section className="bg-white/5 py-24 mb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">What Makes Us Different</h2>
            <p className="text-brand-muted">Beyond theory. Into transformation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Trauma-Informed", text: "We create emotionally safe spaces to process deep wounds." },
              { icon: Cpu, title: "Proven EI Frameworks", text: "Integrating NLP, CBT, and established Emotional Intelligence models." },
              { icon: Users, title: "Culturally Sensitive", text: "Rooted in global best practices, tailored for the African context." },
              { icon: Target, title: "Results-Driven", text: "We focus on tangible behavioral changes, not just 'feeling better'." },
              { icon: HeartHandshake, title: "Emotionally Safe", text: "A judgment-free zone where vulnerability is strength." },
              { icon: Sparkles, title: "Personalized Tools", text: "Practical strategies designed for your specific life situation." }
            ].map((item, i) => (
              <div key={i} className="bg-brand-dark p-8 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors">
                <item.icon className="text-brand-accent mb-4" size={32} />
                <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-brand-muted text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-brand-darker rounded-3xl p-8 md:p-12 border border-white/5">
          <div className="w-full lg:w-2/5">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Bello Musa (Sodium)" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay"></div>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <h3 className="text-brand-accent uppercase tracking-widest text-sm font-semibold mb-2">Lead Coach</h3>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Bello Musa (Sodium)</h2>
            <div className="space-y-6 text-brand-muted leading-relaxed">
              <p>
                As the Lead Coach at Mubell Empathy Academy, my journey has been one of turning pain into power. I realized that the greatest barrier to human potential isn't lack of skill—it's lack of emotional regulation.
              </p>
              <p>
                "Restoring Human Intelligence" is not just a tagline; it is a mandate. We are here to help you navigate the complexities of modern life without losing your soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 md:px-12 text-center">
        <div className="border border-brand-accent/30 rounded-2xl p-12 bg-gradient-to-br from-transparent to-brand-accent/5">
          <h2 className="text-3xl font-serif text-white mb-6">Ready to transform?</h2>
          <Button to="/programs" variant="primary">Explore Programs</Button>
        </div>
      </section>
    </div>
  );
};

export default About;
