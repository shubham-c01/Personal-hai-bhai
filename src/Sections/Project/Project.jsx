import React from 'react';
import { useTheme } from '../../Context/ThemeContext';
import AppLogo from '/AppLogo.png';

function Project({ projectref }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const handlesocializeclick=()=>{
   const link= document.createElement('a')
   link.href='https://social-eyez.vercel.app/'
   document.body.appendChild(link)
   link.click()

  }
  const handleclick=()=>{
    const link=document.createElement('a')
    link.href='https://github.com/shubham-c01/CyberRecon'
    document.body.appendChild(link)
    link.click()
  }

  return (
    <div
      ref={projectref}
      className={`flex flex-col items-center gap-10 py-12 px-4 ${
        isDark ? 'bg-[#242424] text-white' : 'bg-[#f9f9f9] text-black'
      }`}
    >
      <p className="text-3xl font-bold font-sans">Projects</p>

      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
        {/* Card 1 - Social-Eyes */}
        <div className="group relative w-72 h-96 perspective">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-x-180">
            {/* Front Side */}
            <div className="absolute w-full h-full rounded-xl bg-white/10 px-6 py-8 backdrop-blur-md [backface-visibility:hidden] border border-white/20 shadow-md flex flex-col items-center justify-center">
              <img height="200" width="3000" src={AppLogo} alt="Applogo" />
            </div>

            {/* Back Side */}
            <div className="absolute w-full h-full rounded-xl bg-white/10 px-6 py-8 backdrop-blur-md rotate-x-180 [backface-visibility:hidden] border border-white/20 shadow-md flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-center font-sans">Let's get Social</h2>
                <p className="text-md opacity-80 mb-4 text-center p-8 text">
                  Social-Eyes is a platform that gives you freedom to explore your friends online and have a 1-on-1 chat with them.
                </p>
              </div>
              <div className="flex justify-center">
                <button
                onClick={handlesocializeclick}
                 className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition cursor-pointer">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - Resume Builder */}
    <div className="group relative w-72 h-96 perspective">
  <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-x-180">

    {/* Front Side */}
    <div className="absolute w-full h-full rounded-xl bg-white/10 px-3 py-4 backdrop-blur-md [backface-visibility:hidden] border border-white/20 shadow-md flex items-center justify-center">
      <pre className="text-red-600 font-mono text-[10px] leading-tight scale-[0.95]">
{`
   ____      _               ____                      
 / ___|   _| |__   ___ _ __|  _ \\ ___  ___ ___  _ __  
| |  | | | | '_ \\ / _ \\ '__| |_) / _ \\/ __/ _ \\| '_ \\ 
| |__| |_| | |_) |  __/ |  |  _ <  __/ (_| (_) | | | |
 \\____\\__, |_.__/ \\___|_|  |_| \\_\\___|\\___\\___/|_| |_|
      |___/                                           

  🔍 Advanced Reconnaissance Tool | Version 1.0
`}
      </pre>
    </div>

    {/* Back Side */}
    <div className="absolute w-full h-full rounded-xl bg-white/10 px-6 py-8 backdrop-blur-md rotate-x-180 [backface-visibility:hidden] border border-white/20 shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-2 text-center font-sans">CyberRecon</h2>
        <p className="text-sm opacity-80 mb-4 text-center p-3 font-sans">
            CyberRecon is an advanced reconnaissance tool designed for security researchers and penetration testers. It helps gather crucial information about a target domain, including subdomains, directories, open ports, and IP accessibility.
        </p>
      </div>
      <div className="flex justify-center">
        <button onClick={handleclick}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition cursor-pointer">
          Try Now
        </button>
      </div>
    </div>

  </div>
</div>


      </div>
    </div>
  );
}

export default Project;
