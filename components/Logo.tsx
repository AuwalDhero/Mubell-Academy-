import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Abstract representation of Heart (Cyan) and Brain (White/Outline) */}
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="4" className="opacity-20" />
          {/* Heart Side (Left) - Filled Cyan */}
          <path d="M50 20C35 5 10 20 10 45C10 70 50 90 50 90" fill="#22d3ee" stroke="#22d3ee" strokeWidth="2" />
          {/* Brain Side (Right) - White Outline */}
          <path d="M50 90C50 90 90 70 90 45C90 30 80 20 70 20C60 20 55 30 50 20" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <path d="M60 35C65 30 75 30 80 35" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 50C65 50 75 45 80 50" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M65 65C70 65 75 60 75 65" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-xl leading-none text-white tracking-wide">Mubell</span>
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-accent font-semibold">Empathy Academy</span>
      </div>
    </div>
  );
};

export default Logo;