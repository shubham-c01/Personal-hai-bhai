import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';

const Intro = ({ refprop }) => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <section
      ref={refprop}
      className={`min-h-screen pt-10 pb-20 px-4 flex items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-[#242424] text-white' : 'bg-[#f9f9f9] text-black'
      }`}
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row gap-10 items-center justify-between">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-[1.05rem] leading-relaxed tracking-wide indent-4">
            I'm <strong>Shubham Chauhan</strong>, a passionate 21-year-old software developer who loves creating digital experiences that are not only functional but also meaningful. I specialize in front-end development, and I'm constantly exploring new tools and techniques to enhance user experiences.
            <br /><br />
            After earning my degree, I dived deep into coding and design principles — not just writing code but understanding the <em>why</em> behind clean architecture and scalable systems.
            <br /><br />
            Outside of tech, I enjoy trekking and exploring. These challenges — both on the trail and in code — help me grow and push my boundaries.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/me_no_bg.png"
            alt="Shubham Chauhan"
            className="w-[280px] sm:w-[360px] md:w-[480px] max-w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
