import React, { useRef, useCallback } from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from './Sections/Header/Header';
// import Footer from './Sections/Footer/Footer'
import Mainpage from './Sections/MainPage/Mainpage';
import Intro from './Sections/Intro/Intro';
import Contact from './Sections/Contact/Contact';

function App() {
  const contactref = useRef(null);
  const introref = useRef(null);

  const handlecontact = useCallback(() => {
    contactref.current?.scrollIntoView({ behavior: 'smooth' });
  });

  const handleClick = useCallback(() => {
    introref.current?.scrollIntoView({ behavior: 'smooth' });
  });

  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col min-h-screen">
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
      
      <Mainpage Getstartedprop={handleClick} Contactprop={handlecontact} />
      <Intro refprop={introref} />
      <Contact contactprop={contactref} />
    </div>
  );
}

export default App;
