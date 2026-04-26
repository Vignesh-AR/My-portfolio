import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileMockup } from '../components/MobileMockup';

export default function ArabiNextCaseStudy() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-moss selection:text-white pb-24">
      {/* Sticky Nav */}
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

      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-ink/50 block mb-8">
            Mobile Banking App
          </span>
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter mb-8 text-ink">
            Arabi Next <br /> Redesign
          </h1>
          <p className="text-lg md:text-xl text-ink/70 max-w-3xl mx-auto leading-relaxed font-light">
            A complete UX/UI overhaul of the Arabi Next mobile banking application, designed to empower SME clients with a modern, intuitive, and efficient financial management experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Bento Grid Metadata */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-white/50 border border-ink/10 p-6 rounded-3xl flex flex-col justify-center shadow-sm">
            <h4 className="text-ink/60 text-sm font-medium mb-2">Role</h4>
            <p className="text-ink font-semibold text-lg">Lead UI/UX Designer</p>
          </div>
          <div className="bg-white/50 border border-ink/10 p-6 rounded-3xl flex flex-col justify-center shadow-sm">
            <h4 className="text-ink/60 text-sm font-medium mb-2">Timeline</h4>
            <div className="space-y-1">
              <p className="text-ink font-semibold text-base">2021 - 2022 <span className="text-ink/50 text-sm font-normal ml-1">Initial</span></p>
              <p className="text-ink font-semibold text-base">2024 - 2025 <span className="text-moss text-sm font-normal ml-1">Revamp</span></p>
            </div>
          </div>
          <div className="bg-white/50 border border-ink/10 p-6 rounded-3xl flex flex-col justify-center shadow-sm">
            <h4 className="text-ink/60 text-sm font-medium mb-2">Platform</h4>
            <p className="text-ink font-semibold text-lg">iOS & Android</p>
          </div>
          <div className="bg-white/50 border border-ink/10 p-6 rounded-3xl flex flex-col justify-center shadow-sm">
            <h4 className="text-ink/60 text-sm font-medium mb-2">Client</h4>
            <p className="text-ink font-semibold text-lg">Arab Bank</p>
          </div>
        </motion.div>
      </section>

      {/* The Challenge & Solution */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-ink">The Challenge</h2>
            <p className="text-ink/70 leading-relaxed text-lg">
              The legacy Arabi Next application suffered from a cluttered interface, confusing navigation, and an outdated visual identity. SME clients found it difficult to perform essential tasks like bill payments and account management quickly, leading to increased support tickets and user frustration.
            </p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-ink">The Solution</h2>
            <p className="text-ink/70 leading-relaxed text-lg">
              We completely reimagined the user journey, introducing a sleek, dark-themed interface that prioritizes visual hierarchy and ease of use. By streamlining complex workflows, introducing biometric authentication, and organizing data into digestible cards, we drastically reduced cognitive load.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Improvements List */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="bg-white/60 border border-ink/10 rounded-[2.5rem] p-8 md:p-16 shadow-sm"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-ink mb-10 text-center">Key Enhancements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Modernized UI with a clean, dark-themed dashboard.",
              "Introduced biometric login for faster, secure access.",
              "Improved information architecture for quick transfers.",
              "Enhanced visual hierarchy with distinct card layouts.",
              "Added quick action buttons and a notification system.",
              "Streamlined bill payments with saved bills and quick pay."
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="p-2 bg-moss/10 rounded-xl shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-moss" />
                </div>
                <p className="text-ink/80 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Before & After Showcase */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto space-y-40">
        
        {/* 1. Login Experience */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-moss font-mono text-sm tracking-wider uppercase mb-4 block">01 / Authentication</span>
            <h3 className="text-4xl font-bold text-ink mb-6">Login Experience</h3>
            <p className="text-ink/70 text-lg">Transforming a basic, unengaging interface into an immersive, brand-aligned gateway with seamless biometric authentication.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <div className="group relative bg-ink/[0.02] border border-ink/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center overflow-hidden transition-colors hover:bg-ink/[0.04]">
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-red-100 text-red-600 text-sm font-medium rounded-full backdrop-blur-md border border-red-200 z-30">
                Before
              </div>
              <MobileMockup src="/old-login.png" alt="Old Login Screen" fallbackSeed="loginold" className="group-hover:-translate-y-2" />
              <div className="mt-8 text-center max-w-sm relative z-30">
                <p className="text-ink/60">Basic white background with simple buttons. Lacked modern authentication methods.</p>
              </div>
            </div>
            
            {/* After */}
            <div className="group relative bg-gradient-to-b from-moss/10 to-ink/[0.02] border border-moss/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center overflow-hidden transition-colors hover:from-moss/20">
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-moss/20 text-moss-dark text-sm font-medium rounded-full backdrop-blur-md border border-moss/30 z-30 text-moss">
                After (Revamped)
              </div>
              <MobileMockup src="/new-login.png" alt="New Login Screen" fallbackSeed="loginnew" className="group-hover:-translate-y-2" />
              <div className="mt-8 text-center max-w-sm relative z-30">
                <p className="text-ink/80">Immersive background image, clean input fields, and seamless biometric (fingerprint) authentication.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Dashboard */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-moss font-mono text-sm tracking-wider uppercase mb-4 block">02 / Overview</span>
            <h3 className="text-4xl font-bold text-ink mb-6">Dashboard & Accounts</h3>
            <p className="text-ink/70 text-lg">Decluttering the main hub to provide immediate clarity on financial health, with quick access to essential actions.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <div className="group relative bg-ink/[0.02] border border-ink/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center overflow-hidden transition-colors hover:bg-ink/[0.04]">
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-red-100 text-red-600 text-sm font-medium rounded-full backdrop-blur-md border border-red-200 z-30">
                Before
              </div>
              <MobileMockup src="/old-dashboard.png" alt="Old Dashboard Screen" fallbackSeed="dashold" className="group-hover:-translate-y-2" />
              <div className="mt-8 text-center max-w-sm relative z-30">
                <p className="text-ink/60">Cluttered layout with a heavy blue header. Accounts and bills were stacked without clear visual separation.</p>
              </div>
            </div>
            
            {/* After */}
            <div className="group relative bg-gradient-to-b from-moss/10 to-ink/[0.02] border border-moss/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center overflow-hidden transition-colors hover:from-moss/20">
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-moss/20 text-moss text-sm font-medium rounded-full backdrop-blur-md border border-moss/30 z-30">
                After (Revamped)
              </div>
              <MobileMockup src="/new-dashboard.png" alt="New Dashboard Screen" fallbackSeed="dashnew" className="group-hover:-translate-y-2" />
              <div className="mt-8 text-center max-w-sm relative z-30">
                <p className="text-ink/80">Modern dark-themed cards for Accounts, Loans, and Cards. Added "Hide balances" toggle and prominent quick action buttons.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Bill Payments */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-moss font-mono text-sm tracking-wider uppercase mb-4 block">03 / Transactions</span>
            <h3 className="text-4xl font-bold text-ink mb-6">Bill Payments (eFAWATEERcom)</h3>
            <p className="text-ink/70 text-lg">Simplifying the complex bill payment process into a clean, organized, and easily filterable list.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <div className="group relative bg-ink/[0.02] border border-ink/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center overflow-hidden transition-colors hover:bg-ink/[0.04]">
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-red-100 text-red-600 text-sm font-medium rounded-full backdrop-blur-md border border-red-200 z-30">
                Before
              </div>
              <MobileMockup src="/old-bills.png" alt="Old Bills Screen" fallbackSeed="billsold" className="group-hover:-translate-y-2" />
              <div className="mt-8 text-center max-w-sm relative z-30">
                <p className="text-ink/60">Confusing tab structure (Postpaid/Prepaid/History) and overwhelming list of outstanding bills.</p>
              </div>
            </div>
            
            {/* After */}
            <div className="group relative bg-gradient-to-b from-moss/10 to-ink/[0.02] border border-moss/20 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center overflow-hidden transition-colors hover:from-moss/20">
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-moss/20 text-moss text-sm font-medium rounded-full backdrop-blur-md border border-moss/30 z-30">
                After (Revamped)
              </div>
              <MobileMockup src="/new-bills.png" alt="New Bills Screen" fallbackSeed="billsnew" className="group-hover:-translate-y-2" />
              <div className="mt-8 text-center max-w-sm relative z-30">
                <p className="text-ink/80">Clean, organized list with saved bills, clear filtering (All/Prepaid/Postpaid), and sticky action buttons at the bottom.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Conclusion / Next Steps */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mt-40 text-center mb-20"
      >
        <div className="bg-white/60 border border-ink/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-t from-moss/5 to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-ink mb-8 relative z-10">The Impact</h2>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed relative z-10">
            The revamped Arabi Next application resulted in a significant increase in user engagement and a reduction in support tickets. The modern interface, combined with streamlined workflows, empowered SME clients to manage their finances more efficiently and securely.
          </p>
        </div>
      </motion.section>

      {/* Next / Prev Navigation */}
      <section className="max-w-5xl mx-auto px-6 pb-20 mt-12">
        <div className="border-t border-ink/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-8">
          <Link 
            to="/case-study/oman-arab-bank" 
            className="flex items-center gap-4 text-ink/50 hover:text-ink transition-colors group w-full sm:w-auto overflow-hidden"
          >
            <div className="w-12 h-12 shrink-0 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink/5 transition-colors">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Previous</div>
              <div className="font-medium text-lg leading-none truncate max-w-[200px] text-ink">Oman Arab Bank</div>
            </div>
          </Link>

          <Link 
            to="/#projects"
            className="hidden sm:block text-xs font-bold tracking-[0.2em] uppercase text-ink/40 hover:text-ink transition-colors shrink-0"
          >
            All Projects
          </Link>

          <Link 
            to="/case-study/helios" 
            className="flex items-center sm:text-right gap-4 text-ink/50 hover:text-ink transition-colors group w-full sm:w-auto justify-end overflow-hidden"
          >
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-1">Next</div>
              <div className="font-medium text-lg leading-none truncate max-w-[200px] text-ink">Helios</div>
            </div>
            <div className="w-12 h-12 shrink-0 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink/5 transition-colors">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
