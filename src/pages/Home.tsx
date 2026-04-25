import { useEffect, useRef } from 'react';
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
  const hasRestoredScroll = useRef(false);

  useEffect(() => {
    // 1. Try to restore exact pixel scroll position only on initial mount
    const savedScrollPos = sessionStorage.getItem('homeScrollPos');
    
    if (savedScrollPos && !hasRestoredScroll.current) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedScrollPos, 10), behavior: 'instant' });
      }, 50);
      hasRestoredScroll.current = true;
    } else if (hash) {
      // 2. Fallback to hash element if no exact position is saved, or if navigating via navbar
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  useEffect(() => {
    // Save scroll position
    const handleScroll = () => {
      // Add a small threshold so we don't accidentally overwrite with 0 on abrupt unmounts
      if (window.scrollY > 10) {
        sessionStorage.setItem('homeScrollPos', window.scrollY.toString());
      }
    };

    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
