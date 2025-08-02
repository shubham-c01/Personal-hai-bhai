import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from '../../Context/ThemeContext';

function Footer() {
  const { theme } = useTheme();
  const iconColor = theme === 'light' ? 'text-black' : 'text-white';
  const bgColor = theme === 'light' ? 'bg-[#f9f9f9]' : 'bg-[#242424]';

  return (
    <div className={`flex justify-center gap-10 items-center py-6 ${iconColor} ${bgColor}`}>
      <a
        href="https://github.com/shubham-c01"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition hover:text-red-500"
      >
        <Github size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/shubham-chauhan-35b603376/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition"
      >
        <Linkedin size={28} />
      </a>
      <a
        href="https://www.instagram.com/shxbhmm_/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition"
      >
        <Instagram size={28} />
      </a>
    </div>
  );
}

export default Footer;
