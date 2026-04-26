import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Layout, Globe, Code, Quote, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileMockup } from '../components/MobileMockup';

export default function OmanArabBankCaseStudy() {
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
              Oman Arab Bank:<br />
              <span className="text-ink/60 font-light">Digital Rebirth</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <p className="text-2xl text-ink/70 leading-tight font-light">
                Re-architecting a decade-old legacy system into a human-centric digital ecosystem for the modern Omani audience.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-2 font-bold">Role</p>
                  <p className="text-lg font-medium text-ink">Lead UI/UX Designer</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-2 font-bold">Timeline</p>
                  <p className="text-lg font-medium text-ink">6 Months</p>
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
                Oman Arab Bank (OAB) is one of the leading financial institutions in the Sultanate. Our mission was to transform their fragmented digital presence into a unified, omnichannel experience that bridges the gap between complex banking and intuitive design.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white/60 border border-ink/10 shadow-sm">
                <p className="text-4xl font-bold text-blue-600 mb-2">60%</p>
                <p className="text-ink/60 text-xs uppercase tracking-widest font-bold">Faster Transfers</p>
              </div>
              <div className="p-8 rounded-3xl bg-white/60 border border-ink/10 shadow-sm">
                <p className="text-4xl font-bold text-blue-600 mb-2">4.8</p>
                <p className="text-ink/60 text-xs uppercase tracking-widest font-bold">App Store Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge & Solution */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid lg:grid-cols-2 gap-1 border-t border-ink/10">
            <div className="py-20 pr-10 border-r border-ink/10">
              <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-bold mb-10">The Challenge</h2>
              <h3 className="text-4xl font-bold text-ink mb-8 tracking-tight">Fragmented utility over user empathy.</h3>
              <p className="text-lg text-ink/70 leading-relaxed font-light">
                The legacy system had grown organically over a decade, resulting in a disjointed experience across mobile and web. Users felt overwhelmed by complexity, leading to high drop-off rates for even the simplest banking tasks.
              </p>
            </div>
            <div className="py-20 pl-10">
              <h2 className="text-sm uppercase tracking-[0.3em] text-moss font-bold mb-10">The Solution</h2>
              <h3 className="text-4xl font-bold text-ink mb-8 tracking-tight">A unified, card-based ecosystem.</h3>
              <p className="text-lg text-ink/70 leading-relaxed font-light">
                We re-architected the entire journey using a modular design system. By focusing on "Golden Paths" and surfacing proactive financial insights, we transformed the app from a mere calculator into a helpful banking companion.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Showcase Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
            <div className="space-y-6 group">
              <MobileMockup src="/oman-prelogin.png" alt="Authentication" fallbackSeed="oman1" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Authentication</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Dynamic entry point with secure biometric access.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/oman-home.png" alt="Dashboard" fallbackSeed="oman2" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Core Dashboard</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Fluid, card-based layout for financial health at a glance.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/oman-home-side%20nav.png" alt="Navigation" fallbackSeed="oman3" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Smart Navigation</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Contextual side menu for rapid feature access.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/oman-accounts.png" alt="Accounts" fallbackSeed="oman4" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Smart Accounts</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Visualizing spending patterns with intuitive charts.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/oman-cards.png" alt="Cards" fallbackSeed="oman5" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Card Management</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Instant card freezing and limit setting.</p>
              </div>
            </div>
            <div className="space-y-6 group">
              <MobileMockup src="/oman-loans.png" alt="Loans" fallbackSeed="oman6" />
              <div className="px-4 text-center">
                <h4 className="text-lg font-bold text-ink">Loan Calculator</h4>
                <p className="text-ink/70 text-sm leading-relaxed mt-2">Transparent applications with real-time calculations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Engine: Design System */}
        <section className="max-w-7xl mx-auto px-6 mb-40">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-5xl font-bold text-ink tracking-tighter leading-none">The Engine</h2>
              <p className="text-xl text-ink/70 leading-relaxed">
                A robust design system was the backbone of this transformation, ensuring consistency across bilingual interfaces and legacy integrations.
              </p>
              <div className="pt-8 border-t border-ink/10">
                <p className="text-ink font-bold mb-2">Design Tools</p>
                <p className="text-ink/60">Figma, Adobe Creative Suite, ZeroHeight</p>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
              {[
                { icon: Globe, title: "Bilingual Scalability", desc: "Meticulous RTL support that flips flawlessly without breaking visual hierarchy or typography rhythm." },
                { icon: Code, title: "Legacy Integration", desc: "Modular components designed to adapt to older backend constraints without sacrificing modern UX." },
                { icon: Layout, title: "Omnichannel Unity", desc: "Strict design tokens for typography, spacing, and color synced across mobile, web, and ATM interfaces." },
                { icon: Shield, title: "Security Patterns", desc: "Design patterns that prioritize user trust, clear biometric feedback, and secure transaction states." }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white/60 border border-ink/10 hover:border-blue-600/50 transition-all duration-300 group hover:-translate-y-2 shadow-sm">
                  <item.icon className="text-blue-600 mb-8 group-hover:scale-110 transition-transform" size={40} />
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
            <Quote className="text-blue-600/10" size={120} />
            <blockquote className="text-4xl md:text-6xl font-medium text-ink leading-[1.1] tracking-tighter">
              "Vignesh's ability to navigate complex banking requirements while delivering a seamless, user-centric design system was instrumental to our success."
            </blockquote>
            <div className="flex items-center gap-8 p-6 rounded-3xl bg-white/50 border border-ink/10 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-ink/[0.04] flex items-center justify-center text-ink/60 font-bold text-3xl border border-ink/10">
                WQ
              </div>
              <div className="text-left">
                <div className="text-ink font-bold text-2xl">Waleed Qaffaf</div>
                <div className="text-ink/60 text-lg">Mobile Dev lead, Arab Bank</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Next / Prev Navigation */}
        <section className="max-w-5xl mx-auto px-6 pb-20 mt-12">
          <div className="border-t border-ink/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-8">
            <Link 
              to="/case-study/helios" 
              className="flex items-center gap-4 text-ink/50 hover:text-ink transition-colors group w-full sm:w-auto overflow-hidden"
            >
              <div className="w-12 h-12 shrink-0 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink/5 transition-colors">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Previous</div>
                <div className="font-medium text-lg leading-none truncate max-w-[200px] text-ink">Helios</div>
              </div>
            </Link>

            <Link 
              to="/#projects"
              className="hidden sm:block text-xs font-bold tracking-[0.2em] uppercase text-ink/40 hover:text-ink transition-colors shrink-0"
            >
              All Projects
            </Link>

            <Link 
              to="/case-study/arabi-next" 
              className="flex items-center sm:text-right gap-4 text-ink/50 hover:text-ink transition-colors group w-full sm:w-auto justify-end overflow-hidden"
            >
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Next</div>
                <div className="font-medium text-lg leading-none truncate max-w-[200px] text-ink">Arabi Next</div>
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
