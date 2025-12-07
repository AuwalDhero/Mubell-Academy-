import React from 'react';
import { ArrowRight, Brain, Wind, ShieldCheck, Activity } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Welcome to the Academy
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
              Emotional Intelligence Is Not a Luxury.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">It Is Life.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted mb-10 leading-relaxed max-w-2xl">
              Become the calm, confident, emotionally grounded leader your world needs. 
              We bridge the gap between thinking and feeling for high-performers, partners, and parents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary">
                Start Your Transformation
              </Button>
              <Button to="/services" variant="outline">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-brand-muted/50">
           <ArrowRight className="transform rotate-90" size={24} />
        </div>
      </section>

      {/* What We Solve (Pain Points) */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">The Silent Struggle</h2>
            <p className="text-brand-muted">
              You've mastered your career, but does your emotional world feel like it's lagging behind?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: "Overthinking Loop", 
                desc: "Paralysis by analysis. Replaying conversations at 3 AM and unable to switch off the mental noise." 
              },
              { 
                icon: Activity, 
                title: "Emotional Overwhelm", 
                desc: "Feeling intense waves of emotion without the tools to surf them, leading to reactive outbursts or shutdowns." 
              },
              { 
                icon: Wind, 
                title: "Disconnected Relationships", 
                desc: "Loving people deeply but struggling to communicate that love without friction or misunderstanding." 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-brand-accent/30 transition-colors group">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology / About Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
               <img 
                 src="https://picsum.photos/600/800?grayscale" 
                 alt="Calm abstract nature" 
                 className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-brand-darker/20"></div>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-brand-accent/50 rounded-br-3xl"></div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Practical Science. <br/>Real Mastery.</h2>
            <p className="text-brand-muted text-lg mb-6 leading-relaxed">
              We don't do "fluff." At MEA, we combine neuroscience-backed techniques with deep compassionate inquiry. 
            </p>
            <p className="text-brand-muted text-lg mb-8 leading-relaxed">
              Our approach isn't about suppressing emotions—it's about regulating them. We teach you the physics of your feelings so you can navigate high-pressure boardrooms and delicate living room conversations with equal grace.
            </p>
            <ul className="space-y-4 mb-8">
              {['Trauma-Informed Coaching', 'Somatic Awareness', 'Cognitive Reframing'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <ShieldCheck size={20} className="text-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/about" variant="outline">Learn Our Philosophy</Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-darker">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Our Programs</h2>
              <p className="text-brand-muted">Tailored pathways to emotional freedom.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-2 text-brand-accent hover:text-white transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link to="/services" key={service.id} className="group block bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-all hover:-translate-y-1">
                <div className="mb-4 text-brand-accent">
                   {service.icon && <service.icon size={28} />}
                </div>
                <h3 className="text-lg font-serif text-white mb-2 group-hover:text-brand-accent transition-colors">{service.title}</h3>
                <p className="text-brand-muted text-sm line-clamp-3 mb-4">{service.description}</p>
                <span className="text-xs text-brand-accent uppercase tracking-wider font-semibold group-hover:underline">
                  Learn More
                </span>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/services" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors">
              View All Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Snippet */}
      <section className="py-24 bg-gradient-to-b from-brand-darker to-brand-dark border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12 text-center">
           <div className="max-w-3xl mx-auto">
             <div className="mb-8 text-brand-accent opacity-50">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M14.017 21L14.017 18C14.017 16.896 14.913 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V11C14.017 11.552 13.569 12 13.017 12H12.017V5H22.017V15C22.017 18.314 19.331 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.91297 16 7.01697 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.01697C5.46497 8 5.01697 8.448 5.01697 9V11C5.01697 11.552 4.56897 12 4.01697 12H3.01697V5H13.017V15C13.017 18.314 10.331 21 7.01697 21H5.01697Z" />
               </svg>
             </div>
             <blockquote className="text-2xl md:text-3xl font-serif text-white mb-8 italic">
               "{TESTIMONIALS[0].quote}"
             </blockquote>
             <cite className="not-italic text-brand-muted font-medium">
               — {TESTIMONIALS[0].author}, <span className="text-brand-accent">{TESTIMONIALS[0].role}</span>
             </cite>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
         <div className="container mx-auto px-6 md:px-12">
            <div className="bg-brand-accent rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
               {/* Pattern overlay */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
               
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-serif text-brand-darker mb-6">Ready to Rewrite Your Emotional Script?</h2>
                 <p className="text-brand-darker/80 text-lg mb-8 max-w-2xl mx-auto">
                   Book your free 15-minute discovery call. No pressure, just a conversation about where you are and where you want to be.
                 </p>
                 <Button to="/contact" className="bg-brand-darker text-white hover:bg-white hover:text-brand-darker shadow-2xl">
                   Book Your Discovery Call
                 </Button>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

export default Home;