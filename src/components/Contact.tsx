import { motion } from 'motion/react';
import { portfolioData } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto border-t border-ink/10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 border border-white/50 backdrop-blur-md rounded-[3rem] p-12 md:p-20 text-center"
        >
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-ink">
              Let's build something meaningful together.
            </h2>
            <p className="text-xl text-ink/60">
              Open for design leadership or challenging individual contributor roles.
            </p>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href={`mailto:${portfolioData.personal.email}`}
              className="bg-ink hover:bg-moss text-white text-lg font-medium px-8 py-4 rounded-full transition-colors w-full md:w-auto"
            >
              Email Me &rarr;
            </a>
            <a 
              href={portfolioData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white hover:bg-ink/5 text-ink text-lg font-medium px-8 py-4 rounded-full border border-ink/10 transition-colors w-full md:w-auto"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-ink/50 font-mono">
          <div>
            Built with React & Vite
          </div>
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}
          </div>
        </div>
      </div>
    </section>
  );
}
