import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../Context/ThemeContext';
export const Contact = ({ contactprop }) => {
  const [data, setdata] = useState({ name: '', message: '' });
  const [send, setsend] = useState(false);
  const { theme } = useTheme();

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handlesend = useCallback((e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${data.name}`);
    const body = encodeURIComponent(data.message);
    window.location.href = `mailto:shubhi.c01@gmail.com?subject=${subject}&body=${body}`;
    setsend(true);
    const interval = setTimeout(() => setsend(false), 1500);
    return () => clearTimeout(interval);
  }, [data]);

  return (
    <div
      ref={contactprop}
      className={`min-h-screen flex justify-center items-center px-4 py-10 transition-all duration-300 ${
        theme === 'dark' ? 'bg-[#242424]' : 'bg-white'
      }`}
    >
      <motion.div
        className={`w-full max-w-md rounded-md p-6 shadow text-center transition-colors duration-300 ${
          theme === 'dark' ? 'bg-white/20 text-white' : 'bg-black/10 text-black'
        }`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-2xl font-bold mb-4">Contact Me</p>
        <form>
          <label className="block text-left text-base mb-1">Name:</label>
          <input
            className={`w-full mb-4 px-3 py-2 rounded-md border outline-none ${
              theme === 'dark'
                ? 'border-white bg-white/90 text-black'
                : 'border-black bg-white text-black'
            }`}
            placeholder="Enter your name"
            name="name"
            type="text"
            value={data.name}
            onChange={handlechange}
          />

          <label className="block text-left text-base mb-1">Message:</label>
          <textarea
            className={`w-full mb-4 px-3 py-2 rounded-md border outline-none h-32 resize-none ${
              theme === 'dark'
                ? 'border-white bg-white/90 text-black'
                : 'border-black bg-white text-black'
            }`}
            placeholder="Enter your message"
            name="message"
            value={data.message}
            onChange={handlechange}
          />

          <button
            type="submit"
            onClick={handlesend}
            className={`rounded-md px-5 py-2 transition w-full font-semibold ${
              theme === 'dark'
                ? 'bg-white text-black hover:bg-black hover:text-white'
                : 'bg-black text-white hover:bg-white hover:text-black'
            }`}
          >
            {send ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
