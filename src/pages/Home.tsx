import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import FigmaPractice from '../components/FigmaPractice';
import Interests from '../components/Interests';
import Contact from '../components/Contact';
import DotGridBackground from '../components/DotGridBackground';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas">
      <DotGridBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          {/* Re-ordering based on the new flow */}
          <Experience />
          <FigmaPractice />
          <Interests />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
