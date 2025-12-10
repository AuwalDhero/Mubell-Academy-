import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted', formData);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-12">
      <section className="container mx-auto px-6 md:px-12 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Start Your Journey</h1>
        <p className="text-brand-muted max-w-xl mx-auto text-lg">
          Whether you have a question or are ready to book a session, we are here to listen.
        </p>
      </section>

      <section className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Side */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-serif text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-accent/10 rounded-full text-brand-accent">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-brand-muted mb-1">WhatsApp</span>
                    <a 
                      href="https://wa.me/2348025776657"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-brand-accent transition-colors font-medium"
                    >
                      +2348025776657
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-accent/10 rounded-full text-brand-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-brand-muted mb-1">Email</span>
                    <a href="mailto:hello@mubelleympathy.com" className="text-white hover:text-brand-accent transition-colors">
                      Lead Coach Bello Musa (Sodium)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-accent/10 rounded-full text-brand-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-sm text-brand-muted mb-1">Location</span>
                    <span className="text-white">Abuja, Nigeria</span>
                  </div>
                </div>

              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                 <a 
                   href="https://wa.me/2348025776657"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full hover:bg-[#128C7E] transition-colors font-medium"
                 >
                   <MessageCircle size={18} />
                   Message on WhatsApp
                 </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center bg-white/5 rounded-2xl p-12 text-center border border-brand-accent/30">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">Message Sent</h3>
                <p className="text-brand-muted mb-6">Thank you for reaching out. A member of our team will respond within 24 hours.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/5">
                <h3 className="text-xl font-serif text-white mb-6">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-brand-muted mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors placeholder-white/20"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm text-brand-muted mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors placeholder-white/20"
                      placeholder="+234..."
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm text-brand-muted mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors placeholder-white/20"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm text-brand-muted mb-2">Interested Service</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                  >
                    <option value="" className="text-gray-500">Select a service...</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm text-brand-muted mb-2">Message / Notes</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors placeholder-white/20"
                    placeholder="Tell us a bit about what you're looking for..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Submit Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
