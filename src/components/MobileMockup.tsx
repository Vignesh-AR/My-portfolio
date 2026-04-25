import React from 'react';

interface MobileMockupProps {
  src: string;
  alt: string;
  fallbackSeed?: string;
  className?: string;
}

export function MobileMockup({ src, alt, fallbackSeed = 'app', className = '' }: MobileMockupProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] aspect-[9/19] transition-transform duration-700 z-10 flex-shrink-0 ${className}`}>
      {/* Hardware Buttons */}
      <div className="absolute -right-[6px] top-32 w-[6px] h-14 bg-zinc-800 rounded-r-md z-0"></div>
      <div className="absolute -left-[6px] top-24 w-[6px] h-10 bg-zinc-800 rounded-l-md z-0"></div>
      <div className="absolute -left-[6px] top-36 w-[6px] h-12 bg-zinc-800 rounded-l-md z-0"></div>
      
      {/* Phone Body */}
      <div className="absolute inset-0 rounded-[2.25rem] md:rounded-[2.75rem] border-[8px] md:border-[12px] border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden z-20">
        
        {/* Dynamic Island */}
        <div className="absolute top-2 inset-x-0 mx-auto w-[35%] h-6 bg-black rounded-full z-30 shadow-sm border border-white/5"></div>
        
        {/* Screen Content */}
        <div className="relative w-full h-full bg-canvas rounded-[1.75rem] md:rounded-[2rem] overflow-hidden">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            onError={(e) => { 
              e.currentTarget.src = `https://picsum.photos/seed/${fallbackSeed}/600/1200`; 
            }} 
          />
        </div>
      </div>
    </div>
  );
}
