import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CursorGlow from './components/CursorGlow';
import useLocoScrollSections from './hooks/useLocoScrollSections';

const App = () => {
  const { activeSection, scrollRef } = useLocoScrollSections();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <CursorGlow />
      <Navbar activeSection={activeSection} setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />
      <div id="main-container" data-scroll-container ref={scrollRef}>
        <Home scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;