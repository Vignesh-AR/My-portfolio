import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold tracking-tight text-ink mb-4">About Me</h2>
          <p className="text-lg text-ink/60">The person behind the portoflio.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-ink/5"
          >
            <img 
              src="/profile.jpg" 
              alt={portfolioData.personal.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-10 lg:pt-8"
          >
            <h3 className="text-4xl md:text-5xl font-semibold leading-tight text-ink">
              Design Systems to <br /> Enterprise Workflows
            </h3>
            
            <div className="space-y-6 text-lg text-ink/70 leading-relaxed font-normal">
              <p>{portfolioData.personal.about}</p>
              <p>
                My approach blends deep user research with systematic visual design, ensuring that products are not only beautiful but highly functional and accessible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-ink/10">
              <div>
                <span className="text-sm font-mono text-ink/50 block mb-2">Experience</span>
                <span className="text-xl font-semibold text-ink">5+ Years</span>
              </div>
              <div>
                <span className="text-sm font-mono text-ink/50 block mb-2">Specialization</span>
                <span className="text-xl font-semibold text-ink">Fintech & SaaS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
