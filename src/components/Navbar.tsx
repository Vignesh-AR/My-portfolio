import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Case Studies', href: '/#projects' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-md bg-canvas/80 shadow-sm' : 'py-6'}`}>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/#home" className="text-xl font-bold tracking-tight text-ink hover:text-moss transition-colors">
            vignesh<span className="text-moss">.</span>
          </a>
          
          <nav key={scrolled ? 'sticky' : 'top'} className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/80">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={scrolled ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: scrolled ? 0.1 + i * 0.1 : 0, ease: "easeOut" }}
                className="hover:text-moss transition-colors block"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </div>
        
        <a 
          href="/#contact"
          className="bg-ink hover:bg-moss text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
