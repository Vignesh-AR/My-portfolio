export default function Iphone16Pro({ src, alt, className = "" }: { src: string, alt?: string, className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[260px] md:max-w-[300px] aspect-[1179/2556] ${className}`}>
      <div className="absolute inset-0 bg-[#0f0f0f] rounded-[3.5rem] shadow-[0_0_1px_1px_#2a2a2a,0_25px_50px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center p-[8px]">
        {/* Buttons */}
        <div className="absolute top-[18%] -left-[2px] w-[2px] h-[4%] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute top-[28%] -left-[2px] w-[2px] h-[8%] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute top-[38%] -left-[2px] w-[2px] h-[8%] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute top-[30%] -right-[2px] w-[2px] h-[12%] bg-[#2a2a2a] rounded-r-sm" />

        <div className="relative w-full h-full bg-black rounded-[3rem] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[32%] h-[4%] bg-black rounded-full z-20 flex items-center justify-end px-2">
            <div className="w-3 h-3 rounded-full bg-[#111111] shadow-[inset_0_0_2px_#333]"></div>
          </div>
          
          <img 
            src={src} 
            alt={alt || "Screen"} 
            className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
