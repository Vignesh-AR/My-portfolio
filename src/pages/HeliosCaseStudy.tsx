import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Layers, Target, Zap, ShieldCheck, Quote, Palette, Type, Component } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileMockup } from '../components/MobileMockup';

export default function HeliosCaseStudy() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-moss selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-xs font-bold tracking-[0.3em] uppercase text-ink">
            vignesh
          </Link>
          <Link 
            to="/#projects" 
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-ink/60 hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl"
          >
            <h1 className="text-6xl md:text-9xl font-serif text-ink mb-10 tracking-tighter leading-[0.85]">
              Helios Banking:<br />
              <span className="text-ink/60 font-light">The Personal Assistant</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <p className="text-2xl text-ink/70 leading-tight font-light">
                Collaborating with USTWO London to redefine digital finance as a human-centric, proactive companion.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-2 font-bold">Role</p>
                  <p className="text-lg font-medium text-ink">UI/UX Designer</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-2 font-bold">Timeline</p>
                  <p className="text-lg font-medium text-ink">2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About the Project */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6 tracking-tight">About the project</h2>
              <p className="text-xl text-ink/70 leading-relaxed font-light">
                Helios is a next-generation mobile banking experience designed for Arab Bank. Working alongside the world-renowned USTWO agency, we aimed to strip away the clinical nature of traditional banking and replace it with a warm, intuitive, and highly personalized interface.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/60 border border-ink/10 shadow-sm">
                <p className="text-4xl font-bold text-moss mb-2">40%</p>
                <p className="text-ink/60 text-xs uppercase tracking-widest font-bold">Reduced Task Time</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/60 border border-ink/10 shadow-sm">
                <p className="text-4xl font-bold text-moss mb-2">150+</p>
                <p className="text-ink/60 text-xs uppercase tracking-widest font-bold">Design Tokens</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge & Solution */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid lg:grid-cols-2 gap-1 border-t border-ink/10">
            <div className="py-20 pr-10 border-r border-ink/10">
              <h2 className="text-sm uppercase tracking-[0.3em] text-moss font-bold mb-10">The Challenge</h2>
              <h3 className="text-4xl font-bold text-ink mb-8 tracking-tight">Spreadsheets in a pocket.</h3>
              <p className="text-lg text-ink/70 leading-relaxed font-light">
                Legacy banking apps often feel like data entry tools. Users struggled with cognitive overload, buried features, and a lack of emotional connection to their financial health. The goal was to humanize the data.
              </p>
            </div>
            <div className="py-20 pl-10">
              <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-10">The Solution</h2>
              <h3 className="text-4xl font-bold text-ink mb-8 tracking-tight">A proactive financial assistant.</h3>
              <p className="text-lg text-ink/70 leading-relaxed font-light">
                We introduced a dynamic, greeting-led dashboard that prioritizes contextual actions. By utilizing visual analytics and a unified account view, we made complex financial data digestible and actionable.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Showcase Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
            <div className="space-y-6 group">
              <MobileMockup src="/helios-dashbaord.png" alt="Dashboard" fallbackSeed="helios1" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Personalized Dashboard</h4>
                <p className="text-ink/70 text-sm leading-relaxed">A warm, greeting-led interface that surfaces your total wealth and daily actions.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/helios-analytics.png" alt="Analytics" fallbackSeed="helios2" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Visual Analytics</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Interactive spending breakdowns that replace complex spreadsheets with clarity.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/helios-accounts.png" alt="Accounts" fallbackSeed="helios3" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Unified Accounts</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">A bird's-eye view of all your financial buckets in one cohesive screen.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/helios-cards.png" alt="Cards" fallbackSeed="helios4" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Card Control</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Granular management of credit cards with real-time balance and payment tracking.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/helios-reward.png" alt="Rewards" fallbackSeed="helios5" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Rewards Hub</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Making loyalty tangible with clear point tracking and redemption paths.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Engine: Design System */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-5xl font-bold text-ink tracking-tighter leading-none">The Design System</h2>
              <p className="text-xl text-ink/70 leading-relaxed">
                A robust library of 150+ components built with USTWO, ensuring a unified experience across iOS and Android.
              </p>
              <div className="pt-8 border-t border-ink/10">
                <p className="text-ink font-bold mb-2">Design Tools</p>
                <p className="text-ink/60">Figma, ZeroHeight, Storybook</p>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
              {[
                { icon: Component, title: "Atomic Components", desc: "From buttons to complex cards, every element is built with strict auto-layout and variants." },
                { icon: Palette, title: "Tokenized Styling", desc: "Design tokens for color, spacing, and elevation ensure pixel-perfect handoff to developers." },
                { icon: Type, title: "Semantic Typography", desc: "A clear hierarchy of styles that adapts fluidly to different screen densities and languages." },
                { icon: ShieldCheck, title: "Accessibility Built-in", desc: "WCAG 2.1 AA compliance baked into the system, ensuring high contrast and readable scales." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white/60 border border-ink/10 hover:border-moss/50 transition-all duration-300 group hover:-translate-y-2 shadow-sm">
                  <item.icon className="text-moss mb-8 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-2xl font-bold text-ink mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-ink/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Verdict */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-16"
          >
            <Quote className="text-moss/20" size={120} />
            <blockquote className="text-4xl md:text-6xl font-medium text-ink leading-[1.1] tracking-tighter">
              "Working with USTWO and Arab Bank on Helios was a masterclass in combining strategic vision with meticulous execution."
            </blockquote>
            <div className="flex items-center gap-8 p-6 rounded-3xl bg-white/50 border border-ink/10 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-ink/[0.04] flex items-center justify-center text-ink/60 font-bold text-3xl border border-ink/10">
                VA
              </div>
              <div className="text-left">
                <div className="text-ink font-bold text-2xl">Vignesh</div>
                <div className="text-ink/60 text-lg">Lead UI/UX Designer</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Next / Prev Navigation */}
        <section className="max-w-5xl mx-auto px-6 pb-20 mt-12">
          <div className="border-t border-ink/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-8">
            <Link 
              to="/case-study/arabi-next" 
              className="flex items-center gap-4 text-ink/50 hover:text-ink transition-colors group w-full sm:w-auto overflow-hidden"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink/5 transition-colors">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Previous</div>
                <div className="font-medium text-lg leading-none truncate max-w-[200px] text-ink">Arabi Next</div>
              </div>
            </Link>

            <Link 
              to="/#projects"
              className="hidden sm:block text-xs font-bold tracking-[0.2em] uppercase text-ink/40 hover:text-ink transition-colors shrink-0"
            >
              All Projects
            </Link>

            <Link 
              to="/case-study/oman-arab-bank" 
              className="flex items-center sm:text-right gap-4 text-ink/50 hover:text-ink transition-colors group w-full sm:w-auto justify-end overflow-hidden"
            >
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Next</div>
                <div className="font-medium text-lg leading-none truncate max-w-[200px] text-ink">Oman Arab Bank</div>
              </div>
              <div className="w-12 h-12 shrink-0 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink/5 transition-colors">
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
