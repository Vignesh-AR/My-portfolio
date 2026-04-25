import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function FigmaPractice() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-ink rounded-[3rem] overflow-hidden group"
        >
          {/* Subtle noise/texture background over ink */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center">
            <div className="space-y-8 max-w-2xl">
              <div className="mx-auto inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-moss animate-pulse" />
                <span className="text-white/80 text-sm font-mono tracking-wide">Live UI Practice</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                Behind the scenes of this portfolio.
              </h2>
              
              <p className="text-xl text-white/60 leading-relaxed font-light">
                Curious about my process? Explore the raw UI explorations, components, and layout systems I used to build this exact portfolio.
              </p>
              
              <div className="pt-4">
                <a 
                  href="https://www.figma.com/design/ONpIdFFsxBxWw6RSPtdAnl/MY-portfoilo?node-id=0-1&p=f&t=EnNE2SgGBXevSRVP-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-ink hover:bg-moss hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
                >
                  Inspect Figma File <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
            
            <div className="mt-16 sm:mt-20">
              <motion.div 
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 sm:w-32 sm:h-32 bg-[#fefefe] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center p-4 sm:p-6 border border-white/10 backdrop-blur-xl mx-auto"
              >
                <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19C14.7467 19 19 23.2533 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 52.7467 4.25329 57 9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.2533 33.7467 0 28.5 0H19Z" fill="#F24E1E"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.2533 0 9.5Z" fill="#FF7262"/>
                  <path d="M19 19V38H28.5C33.7467 38 38 33.7467 38 28.5C38 23.2533 33.7467 19 28.5 19H19Z" fill="#A259FF"/>
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
