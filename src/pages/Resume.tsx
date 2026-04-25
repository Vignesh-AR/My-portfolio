import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-canvas font-sans selection:bg-moss/20 selection:text-ink print:bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:py-32 print:py-0 print:px-0 print:max-w-none">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          {/* Top Actions - Hidden on Print */}
          <div className="flex items-center justify-between mb-12 lg:mb-20 print:hidden">
            <Link to="/" className="inline-flex items-center gap-2 text-ink/60 hover:text-ink transition-colors group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <button 
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-white rounded-full hover:bg-moss transition-all duration-300 shadow-lg shadow-ink/10"
            >
              <Printer size={18} />
              <span className="font-medium">Download PDF</span>
            </button>
          </div>

          <div className="space-y-12 lg:space-y-16 print:space-y-8">
            {/* Header Info */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-serif text-[#1e3a8a] tracking-tight print:text-4xl">Vignesh AR</h1>
              <p className="text-lg md:text-xl text-[#3b82f6] font-medium uppercase tracking-[0.3em] print:text-base">
                Senior UI/UX Designer & Technical Specialist
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono text-ink/60 border-b-2 border-[#1e3a8a] pb-6 print:pb-4 print:text-xs">
                <span>+91 6381337627</span>
                <span className="hidden md:inline text-ink/20">•</span>
                <a href="mailto:vignesh.arvs@gmail.com" className="hover:text-moss transition-colors">vignesh.arvs@gmail.com</a>
                <span className="hidden md:inline text-ink/20">•</span>
                <a href="https://linkedin.com/in/vignesh-ar-807204180" target="_blank" rel="noopener noreferrer" className="hover:text-moss transition-colors">linkedin.com/in/vignesh-ar-807204180</a>
              </div>
            </div>

            {/* Summary */}
            <section className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1e3a8a] border-b border-ink/10 pb-2 print:text-xs">Summary</h3>
              <p className="text-ink/80 leading-relaxed font-light print:text-sm">
                Senior UI/UX Designer and Technical Specialist with 5+ years of experience delivering end-to-end customer experiences across mobile apps, enterprise SaaS, and banking platforms. Proven track record in journey mapping, service blueprinting, and cross-functional design leadership. Experienced setting AI experience strategy, translating vision into sequenced outcomes and value narratives, and collaborating with AI prompt engineers to deliver data-driven experiences. Deep expertise in accessible, inclusive design (WCAG 2.1 AA), experience-led metrics, and Arabic RTL interfaces.
              </p>
            </section>

            {/* Experience */}
            <section className="space-y-8 print:space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1e3a8a] border-b border-ink/10 pb-2 print:text-xs">Experience</h3>
              
              <div className="space-y-12 print:space-y-8">
                {/* Role 1 */}
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                    <div>
                      <h4 className="text-xl font-bold text-ink">Senior UI/UX Designer → Technical Specialist</h4>
                      <p className="text-[#3b82f6] font-medium">Acabes International | India</p>
                    </div>
                    <p className="text-ink/50 font-mono text-sm">Jul 2022 – Present</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-ink/80 font-light leading-relaxed print:text-sm">
                    <li>Led end-to-end UI/UX design for enterprise SaaS products serving 100,000+ active users across multiple platforms.</li>
                    <li>Developed and maintained experience maps and user journey documentation to align product strategy with customer needs.</li>
                    <li>Built and maintained a cross-product design system; conducted iterative usability testing to drive continuous refinement.</li>
                    <li>Mentored junior designers and participated in the internal leadership programme; reviewed design outputs for quality and consistency.</li>
                    <li>Promoted to Technical Specialist (Nov 2025): coordinated design, engineering, and product teams; developed reusable UI components and dashboards to deliver data-driven experiences for operational reporting.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                    <div>
                      <h4 className="text-xl font-bold text-ink">UI/UX Designer & UI Developer</h4>
                      <p className="text-[#3b82f6] font-medium">Arab Bank | Middle East</p>
                    </div>
                    <p className="text-ink/50 font-mono text-sm">Feb 2021 – Jul 2022</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-ink/80 font-light leading-relaxed print:text-sm">
                    <li>Designed end-to-end UI/UX for mobile and web banking products — including Arabi Next, Helios (in collaboration with ustwo studio), Arabi Pass, and Oman Arab Bank.</li>
                    <li>Created service blueprints, storyboards, and user flows for core banking functions including onboarding, payments, and account management.</li>
                    <li>Conducted AI UX evaluation and user research with 50+ participants to validate design decisions and drive iterative improvements.</li>
                    <li>Developed front-end components using HTML, CSS, and JavaScript; implemented Arabic UI with full RTL layout support.</li>
                    <li>Applied inclusive design principles and WCAG 2.1 AA accessibility standards across all products.</li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
                    <div>
                      <h4 className="text-xl font-bold text-ink">UI/UX Designer</h4>
                      <p className="text-[#3b82f6] font-medium">blackNgreen | Gurugram, India</p>
                    </div>
                    <p className="text-ink/50 font-mono text-sm">Aug 2020 – Feb 2021</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-ink/80 font-light leading-relaxed print:text-sm">
                    <li>Designed UI/UX for mobile and web applications in the gaming sector; produced wireframes, user flows, and prototypes across sprint cycles.</li>
                    <li>Conducted usability tests, iterated designs based on findings, and collaborated with developers in an Agile environment.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Core Competencies */}
            <section className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#1e3a8a] border-b border-ink/10 pb-2 print:text-xs">Core Competencies</h3>
              <div className="grid grid-cols-[1fr_2.5fr] gap-x-8 gap-y-4 text-sm print:gap-x-4 print:gap-y-2">
                <div className="font-bold text-ink">Experience Design</div>
                <div className="text-ink/70 leading-relaxed font-light">Journey Mapping · Service Blueprinting · Storyboarding · Experience Maps · Inclusive Design</div>
                
                <div className="font-bold text-ink">UX Design</div>
                <div className="text-ink/70 leading-relaxed font-light">End-to-End Product Design · Information Architecture · Wireframing · Prototyping · Interaction Design</div>
                
                <div className="font-bold text-ink">Research</div>
                <div className="text-ink/70 leading-relaxed font-light">Usability Testing · User Interviews · A/B Testing · JTBD Frameworks</div>
                
                <div className="font-bold text-ink">AI & Strategy</div>
                <div className="text-ink/70 leading-relaxed font-light">AI Experience Strategy · AI UX Evaluation · Collaborating with AI Prompt Engineers · Value Narratives · Data-Driven Experiences · Experience-Led Metrics</div>
                
                <div className="font-bold text-ink">Accessibility</div>
                <div className="text-ink/70 leading-relaxed font-light">WCAG 2.1 AA · Arabic UI / RTL · Accessible & Inclusive Design</div>
              </div>
            </section>

            {/* Secondary Skills / Info */}
            <div className="grid md:grid-cols-2 gap-12 print:gap-8 border-t border-ink/10 pt-8 print:pt-6">
              <div className="space-y-6">
                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a]">Leadership & Tools</h3>
                  <div className="space-y-2 text-sm text-ink/70 font-light">
                    <p><strong className="font-bold text-ink">Leadership:</strong> Cross-functional Collaboration · Design Mentorship · Agile / Scrum</p>
                    <p><strong className="font-bold text-ink">Tools:</strong> Figma · Adobe XD · Sketch · Miro · Framer · Jira · Confluence · HTML / CSS / JS</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a]">Education & Certs</h3>
                  <div className="space-y-3 text-sm text-ink/70 font-light">
                    <div>
                      <p className="font-bold text-ink">B.E. — Mechanical Engineering</p>
                      <p>Vins Christian College of Engineering | 2014 – 2018</p>
                    </div>
                    <div>
                      <p className="font-bold text-ink">Certifications</p>
                      <p>UI/UX Design Certification · Programming with Python</p>
                    </div>
                  </div>
                </section>
              </div>
              
              <div className="space-y-6">
                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a]">Languages</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-ink/80">
                    <p><span className="font-bold">English</span> (Fluent)</p>
                    <p><span className="font-bold">Malayalam</span> (Native)</p>
                    <p><span className="font-bold">Tamil</span> (Fluent)</p>
                    <p><span className="font-bold">Hindi</span> (Conversational)</p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a]">Key Achievements</h3>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-ink/70 font-light">
                    <li>Led full redesign of flagship SaaS with 100k+ users</li>
                    <li>Delivered 15+ major projects on time/budget</li>
                    <li>Recognised for Helios and EAB projects</li>
                    <li>Collaborated with ustwo studio on banking UX</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
