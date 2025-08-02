import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme:'light',
  LightTheme:()=>{},
  DarkTheme:()=>{},
});

export const ThemeProvider = ({ children }) => {
  const [theme,settheme]=useState('light')
  const LightTheme=()=>
    settheme('light')
  
  const DarkTheme=()=>
    settheme('dark')
  

 

  return (
    <ThemeContext.Provider value={{ theme, DarkTheme,LightTheme }}>
      <div className={theme}>{children}</div> {/* This adds the class to the root */}
    </ThemeContext.Provider>
  );
};

export function useTheme(){
  return useContext(ThemeContext)
}