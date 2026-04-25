import { motion } from 'motion/react';
import { portfolioData } from '../data';

const toolIcons: Record<string, string> = {
  "Figma": "figma/F24E1E",
  "Adobe XD": "adobexd/FF61F6",
  "Sketch": "sketch/F7B500",
  "InVision": "invision/FF3366",
  "Miro": "miro/050038",
  "Framer": "framer/0055FF",
  "Adobe Illustrator": "adobeillustrator/FF9A00",
  "Adobe Photoshop": "adobephotoshop/31A8FF",
  "After Effects": "adobeaftereffects/9999FF",
  "Zeplin": "zeplin/FCCD34",
  "Jira & Confluence": "jira/0052CC",
  "HTML / CSS / JS": "html5/E34F26",
  "Python": "python/3776AB"
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold tracking-tight text-ink mb-4">How I Build Products</h2>
          <p className="text-lg text-ink/60">My core process and competencies.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {portfolioData.skills.categories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 border-b border-ink/5 pb-4">
                <span className="text-moss font-mono text-sm leading-none">{(idx + 1).toString().padStart(2, '0')}</span>
                <h3 className="text-2xl font-semibold text-ink leading-none">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-ink/70 flex items-center gap-3 text-lg font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/20 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-20 border-t border-ink/5">
          <h3 className="text-sm font-mono text-ink/50 mb-12 uppercase tracking-widest text-center">Tools & Tech</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {portfolioData.skills.tools.map((tool, i) => {
              const iconPath = toolIcons[tool];
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-ink/10 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-ink/20 transition-all cursor-default"
                >
                  {iconPath && (
                    <img 
                      src={`https://cdn.simpleicons.org/${iconPath}`} 
                      alt={tool} 
                      className="w-5 h-5 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  )}
                  <span className="font-medium text-sm text-ink/70 group-hover:text-ink transition-colors">{tool}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
