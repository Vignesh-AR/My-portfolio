import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { Sparkles, ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const textReveal = {
    hidden: { y: "120%", opacity: 0, rotate: 2 },
    show: { 
      y: "0%", 
      opacity: 1, 
      rotate: 0,
      transition: { type: "spring", damping: 20, stiffness: 60 } 
    }
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden" id="home">
      
      {/* Decorative ambient gradients */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-moss/20 rounded-full blur-[120px] -z-10 mix-blend-multiply" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-yellow-500/10 rounded-full blur-[100px] -z-10 mix-blend-multiply" 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Status Badge */}
          <motion.div 
            variants={fadeItem} 
            className="mb-10 lg:mb-12 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-ink/10 bg-white/60 backdrop-blur-md shadow-sm hover:bg-white/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default self-start"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-moss"></span>
            </span>
            <span className="text-ink text-sm font-medium tracking-wide">
              Available for full-time roles & leadership
            </span>
          </motion.div>

          <h1 className="text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-bold tracking-tight text-ink flex flex-col gap-1 md:gap-3 lg:pr-8">
            <div className="overflow-hidden pb-2">
              <motion.span variants={textReveal} className="block origin-bottom-left">Designing digital</motion.span>
            </div>
            
            <div className="overflow-hidden pb-2">
              <motion.span variants={textReveal} className="block origin-bottom-left">
                experiences
              </motion.span>
            </div>
            
            <div className="overflow-hidden pb-2">
              <motion.span variants={textReveal} className="flex flex-wrap items-center gap-4 origin-bottom-left">
                <span>people <span className="text-moss font-serif">love</span> to use.</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="hidden lg:block shrink-0"
                >
                  <Sparkles className="w-12 h-12 lg:w-16 lg:h-16 text-moss" strokeWidth={1.5} />
                </motion.div>
              </motion.span>
            </div>
          </h1>

          <motion.div variants={fadeItem} className="mt-8 md:mt-10 text-xl md:text-2xl text-ink/60 font-light max-w-2xl leading-relaxed pr-8">
            Hi, I'm <span className="font-medium text-ink">Vignesh AR</span>. As a UX Designer, I turn complex ideas into simple, beautiful, and user-friendly designs.
          </motion.div>

          <motion.div variants={fadeItem} className="flex flex-wrap items-center gap-4 md:gap-6 mt-10 md:mt-12 font-mono text-sm md:text-base text-ink/70">
            <a 
              href="#projects"
              className="px-8 py-4 rounded-full bg-ink text-white font-sans font-medium hover:bg-moss transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-ink/20 hover:shadow-moss/30 hover:-translate-y-1"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <Link
              to="/resume"
              className="px-8 py-4 rounded-full border border-ink/20 text-ink font-sans font-medium hover:bg-ink/5 transition-all duration-300 flex items-center gap-2 group hover:-translate-y-1"
            >
              View Resume
              <FileText size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: CUTOUT IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", bounce: 0.3 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-full aspect-[4/5] group">
            
            {/* Spinning decorative amorphous blob backing */}
            <div className="absolute inset-0 bg-gradient-to-br from-moss/20 to-moss/5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[spin_15s_linear_infinite]" />
            
            {/* Cutout Mask Container (Trendy Arch) */}
            <div className="absolute inset-4 overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-2xl border-4 border-white backdrop-blur-sm transition-all duration-700 ease-out group-hover:shadow-[0_20px_40px_-15px_rgba(90,143,34,0.3)] group-hover:inset-2">
              <img 
                src="/profile.jpg" 
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>

            {/* Floating Context Badge */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 sm:-right-8 lg:-left-12 lg:right-auto bg-white/90 p-4 lg:p-5 rounded-3xl shadow-xl border border-ink/10 backdrop-blur-xl z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-moss/10 rounded-full flex items-center justify-center text-moss">
                <Sparkles size={24} />
              </div>
              <div className="pr-2">
                <div className="text-sm font-semibold text-ink">Senior</div>
                <div className="text-xs text-ink/60 font-mono tracking-wide uppercase mt-0.5">Designer</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
