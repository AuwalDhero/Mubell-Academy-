import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Services', path: '/services' },
  { label: 'Media', path: '/media' },
  { label: 'EI Audit', path: '/audit' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-brand-darker/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="z-50">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                location.pathname === item.path ? 'text-brand-accent' : 'text-brand-muted'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" to="/contact" className="ml-4 py-2 px-5 text-sm">
            Book a Call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-darker flex flex-col items-center justify-center gap-6 transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-xl font-serif transition-colors hover:text-brand-accent ${
                location.pathname === item.path ? 'text-brand-accent' : 'text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button variant="primary" to="/contact" className="mt-4">
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
