import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function CollectiblesCaseStudy() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] font-sans selection:bg-[#FFD1DC] selection:text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xs font-bold tracking-[0.3em] uppercase text-[#1A1A1A]">
            vignesh
          </Link>
          <Link 
            to="/#projects" 
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
          >
            <ArrowLeft size={14} />
            Back
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/40 mb-6 block">
              Case Study — 2023
            </span>
            <h1 className="text-7xl md:text-[10rem] font-serif text-[#1A1A1A] mb-8 tracking-tighter leading-[0.8]">
              Collectibles
            </h1>
            <p className="text-xl md:text-2xl text-[#1A1A1A]/60 max-w-2xl mx-auto font-light leading-relaxed">
              Product & partnership led growth + Product Designer for Swiggy's gamified engagement platform.
            </p>
          </motion.div>
        </section>

        {/* Featured Image */}
        <section className="px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-7xl mx-auto aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#E8E6E1]"
          >
            <img 
              src="https://picsum.photos/seed/collectibles/1920/1080" 
              alt="Collectibles Hero"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Overview Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid md:grid-cols-4 gap-12 border-y border-[#1A1A1A]/10 py-24">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 block">01 / Role</span>
              <p className="text-xl font-serif">Lead Product Designer</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 block">02 / Timeline</span>
              <p className="text-xl font-serif">Aug — Oct 2023</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 block">03 / Client</span>
              <p className="text-xl font-serif">Swiggy India</p>
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/30 block">04 / Focus</span>
              <p className="text-xl font-serif">Gamification & Growth</p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-6 space-y-60">
          {/* Section 1 - The Context */}
          <section className="space-y-20">
            <div className="max-w-3xl">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/40 mb-8 block">The Context</span>
              <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] mb-12">
                India loves <br /> cricket.
              </h2>
              <p className="text-2xl text-[#1A1A1A]/70 leading-relaxed font-light">
                Cricket is more than a sport in India; it's a religion. We saw an opportunity to bring fans closer to the game through Swiggy, creating a reason to open the app beyond just ordering food.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8 aspect-video rounded-[2rem] overflow-hidden bg-[#E8E6E1]">
                <img 
                  src="https://picsum.photos/seed/cricket-1/1200/800" 
                  alt="Cricket Context 1"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="col-span-4 aspect-square rounded-[2rem] overflow-hidden bg-[#F0E6D2]">
                <img 
                  src="https://picsum.photos/seed/cricket-2/800/800" 
                  alt="Cricket Context 2"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </section>

          {/* Section 2 - The Great Dilemma */}
          <section className="relative py-40 flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 bg-[#FFD1DC]/10 -skew-y-3 scale-110" />
            <div className="relative z-10 text-center max-w-4xl space-y-12">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/40">The Challenge</span>
              <h2 className="text-5xl md:text-8xl font-serif leading-[0.9]">
                The great <br /> dilemma.
              </h2>
              <div className="p-16 bg-white rounded-[3rem] shadow-xl shadow-[#1A1A1A]/5 border border-[#1A1A1A]/5">
                <p className="text-3xl md:text-4xl font-light leading-snug text-[#1A1A1A]/80">
                  "How do we make it feel like Swiggy, but also like a game that people actually want to play?"
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - Visual Exploration */}
          <section className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif">Visual direction explorations.</h2>
              <p className="text-xl text-[#1A1A1A]/70 leading-relaxed font-light max-w-2xl">
                We explored over 50+ innovative ideas, ranging from simple badges to complex trump card systems. The goal was to find a balance between scalability and visual delight.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[3/4] rounded-2xl bg-[#E8E6E1] overflow-hidden group">
                  <img 
                    src={`https://picsum.photos/seed/card-${i}/600/800`} 
                    alt={`Exploration ${i}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 - Impact */}
          <section className="bg-[#1A1A1A] text-[#FDFCF8] rounded-[4rem] p-16 md:p-32 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#FDFCF8]/40">Impact</span>
              <h2 className="text-5xl md:text-8xl font-serif leading-none">
                Beyond the numbers.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 pt-12 border-t border-[#FDFCF8]/10">
              <div className="space-y-2">
                <span className="text-4xl md:text-6xl font-serif">40%</span>
                <p className="text-sm uppercase tracking-widest text-[#FDFCF8]/60">Increase in DAU</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl md:text-6xl font-serif">2.5M+</span>
                <p className="text-sm uppercase tracking-widest text-[#FDFCF8]/60">Cards Collected</p>
              </div>
              <div className="space-y-2">
                <span className="text-4xl md:text-6xl font-serif">15min</span>
                <p className="text-sm uppercase tracking-widest text-[#FDFCF8]/60">Avg. Session Time</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <section className="max-w-7xl mx-auto px-6 mt-40 pt-20 border-t border-[#1A1A1A]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              to="/case-study/arabi-next"
              className="group flex flex-col items-start gap-4"
            >
              <span className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/40">Next Project</span>
              <h3 className="text-4xl md:text-6xl font-serif group-hover:translate-x-4 transition-transform duration-500">
                Arabi Next
              </h3>
            </Link>
            <Link 
              to="/#projects"
              className="text-[10px] uppercase tracking-[0.3em] font-bold hover:text-[#1A1A1A]/60 transition-colors"
            >
              Back to Work
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
