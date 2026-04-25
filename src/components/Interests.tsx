import { motion } from 'motion/react';
import { Gamepad2, Plane } from 'lucide-react';

export default function Interests() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="interests" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink tracking-tighter mb-4">
              Beyond the Pixels
            </h2>
            <p className="text-xl text-ink/60 font-light max-w-2xl">
              When I'm not designing interfaces, I'm immersing myself in virtual worlds or exploring new ones in reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Gaming Card */}
            <motion.div 
              variants={cardVariants}
              className="group relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden bg-ink"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Gaming setup playing video games"
                  className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 text-white group-hover:bg-moss group-hover:border-moss transition-colors duration-500">
                    <Gamepad2 size={24} />
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-3">Gaming</h3>
                  <p className="text-white/70 font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Immersing in rich narratives and competitive arenas. It's where I find inspiration for interactive storytelling and complex problem-solving.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Traveling Card */}
            <motion.div 
              variants={cardVariants}
              className="group relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden bg-ink"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Exploring new places and traveling"
                  className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              
              <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 text-white group-hover:bg-moss group-hover:border-moss transition-colors duration-500">
                    <Plane size={24} />
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-3">Exploring</h3>
                  <p className="text-white/70 font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Traveling to new places, experiencing different cultures, and finding fresh perspectives outside of the digital canvas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
