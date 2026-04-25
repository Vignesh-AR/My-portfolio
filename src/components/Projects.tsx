import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Iphone16Pro from './Iphone16Pro';

const projectImages: Record<string, string> = {
  'arabi-next': '/new-dashboard.png',
  'helios': '/helios-dashbaord.png',
  'oman-arab-bank': '/oman-home.png',
  'collectibles': 'https://picsum.photos/seed/collectibles/400/800'
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-semibold tracking-tight text-ink mb-4">Case Studies</h2>
          <p className="text-lg text-ink/60 max-w-2xl">
            Selected works demonstrating product thinking, system design, and measuarable impact.
          </p>
        </div>
        
        <div className="grid gap-20">
          {portfolioData.projects.map((project, idx) => {
            const hasCaseStudy = !!project.slug;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer flex flex-col md:flex-row gap-10 items-stretch bg-white/40 border border-white/50 backdrop-blur-sm rounded-[2.5rem] p-4 md:p-6 hover:shadow-2xl hover:shadow-ink/5 transition-all duration-300"
                onClick={() => hasCaseStudy && navigate(`/case-study/${project.slug}`)}
              >
                <div className="relative w-full md:w-[55%] rounded-[2rem] bg-ink/5 flex items-center justify-center p-12 overflow-hidden transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-moss/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative group-hover:-translate-y-2 transition-transform duration-700 ease-out w-full flex justify-center">
                    <Iphone16Pro 
                      src={projectImages[project.slug] || 'https://picsum.photos/seed/project/400/800'} 
                      alt={project.title}
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-[45%] flex flex-col justify-center space-y-6 px-4 md:px-8 py-8">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono px-3 py-1 bg-ink/5 text-ink/70 rounded-full border border-ink/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-semibold leading-snug text-ink">{project.title}</h3>
                  <p className="text-ink/60 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-moss font-medium">
                    View Case Study <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
