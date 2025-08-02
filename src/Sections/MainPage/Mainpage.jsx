import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import background from '/background.jpeg';
import { useTheme } from '../../Context/ThemeContext';
export const Mainpage = ({ Getstartedprop, Contactprop }) => {
    const {DarkTheme,LightTheme,theme}=useTheme()
    const handlechange=(e)=>{
      const isLight=e.target.checked

      isLight ? DarkTheme():LightTheme()

    }
    useEffect(()=>{
        document.documentElement.classList.remove('light','dark')
        document.documentElement.classList.add(theme)
    },[theme])

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shubham_Chauhan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={background}
        alt="background"
        className="absolute w-full h-full object-cover"
      />

      {/* Navigation */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 flex flex-wrap gap-6 px-4">
        <button
          onClick={Getstartedprop}
          className="text-base sm:text-xl text-white hover:text-white/80 font-semibold"
        >
          About
        </button>
        <button
          onClick={Getstartedprop}
          className="text-base sm:text-xl text-white hover:text-white/80 font-semibold"
        >
          Projects
        </button>
        <button
          onClick={Contactprop}
          className="text-base sm:text-xl text-white hover:text-white/80 font-semibold"
        >
          Contact
        </button>
      </div>

      {/* Toggle Button */}
      <div className="absolute top-4 right-4 z-30">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={theme==='dark'}
            onChange={handlechange}
            className="sr-only peer"
          />
          <div className="w-20 h-10 bg-white rounded-full peer-checked:bg-zinc-700 transition-colors duration-300"></div>
          <div className="absolute left-1 top-1 w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full peer-checked:left-[calc(100%-2.5rem)] peer-checked:bg-zinc-900 transition-all duration-300 shadow-md"></div>

          {/* Sun Icon */}
          <svg
            className="absolute w-5 h-5 left-3 fill-white peer-checked:opacity-50 transition-opacity duration-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17ZM13,0H11V5h2V0Zm0,19H11v5h2V19ZM5,11H0v2H5V11Zm19,0H19v2h5V11ZM19.19,4.22l-1.41-1.41L14.24,6.35l1.41,1.41,3.54-3.54ZM6.24,17.66l-1.41-1.41L1.29,19.79l1.41,1.41,3.54-3.54Zm0-11.31L2.7,2.81,1.29,4.22l3.54,3.54,1.41-1.41ZM22.49,19.79,18.95,16.25l-1.41,1.41,3.54,3.54Z" />
          </svg>

          {/* Moon Icon */}
          <svg
            className="absolute w-5 h-5 right-3 fill-black opacity-60 peer-checked:fill-white peer-checked:opacity-70 transition-all duration-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Z" />
          </svg>
        </label>
      </div>

      {/* Center Content */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 max-w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="mt-3 text-base sm:text-xl text-white drop-shadow-sm">
          I'm a React Developer based in India 🚀
        </p>
        <button
          onClick={handleDownload}
          className="mt-5 px-4 py-2 sm:px-6 sm:py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition cursor-pointer"
        >
          Resume
        </button>
      </motion.div>
    </div>
  );
};

export default Mainpage;
