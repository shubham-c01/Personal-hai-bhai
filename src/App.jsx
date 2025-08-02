import React, { useRef, useCallback } from 'react';
import { motion, useScroll } from 'framer-motion';
import Footer from './Sections/Footer/Footer';
import Mainpage from './Sections/MainPage/Mainpage';
import Intro from './Sections/Intro/Intro';
import Contact from './Sections/Contact/Contact';
import Project from './Sections/Project/Project';
import { useTheme } from './Context/ThemeContext'; // Add this line

function App() {
  const { theme } = useTheme(); // Get theme from context

  const projectref = useRef(null);
  const contactref = useRef(null);
  const introref = useRef(null);

  const handleProject = useCallback(() => {
    projectref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleContact = useCallback(() => {
    contactref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleClick = useCallback(() => {
    introref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme ? 'bg-[#f9f9f9]' : 'bg-[#121212]'}`}>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          zIndex: 50,
        }}
      />
      
      <Mainpage Getstartedprop={handleClick} Contactprop={handleContact} projectprop={handleProject} />
      <Intro refprop={introref} />
      <Project projectref={projectref} />
      <Contact contactprop={contactref} />
      <Footer />
    </div>
  );
}

export default App;
