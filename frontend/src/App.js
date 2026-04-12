import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-quart', once: true });
    document.documentElement.classList.add('loaded');
    return () => {
      document.documentElement.classList.remove('loaded');
    };
  }, []);

  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

