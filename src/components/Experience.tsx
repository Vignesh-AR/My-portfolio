import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold tracking-tight text-ink mb-4">Experience</h2>
          <p className="text-lg text-ink/60 max-w-2xl">
            My professional journey scaling digital products and teams.
          </p>
        </div>
        
        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-4 gap-6 md:gap-12 pb-12 border-b border-ink/5 last:border-0"
            >
              <div className="text-ink/50 pt-1 border-t-2 border-transparent">
                <span className="text-sm font-mono">{exp.period}</span>
              </div>
              
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <h4 className="text-lg text-moss mt-1">{exp.company}</h4>
                </div>
                
                <ul className="space-y-3 pt-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-4 text-ink/70 leading-relaxed">
                      <span className="text-moss mt-2 w-1.5 h-1.5 rounded-full shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
