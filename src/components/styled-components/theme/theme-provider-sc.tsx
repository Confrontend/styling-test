
// src/ThemeProvider.tsx

import React, { createContext, useContext, useState } from 'react';
import { darkTheme, lightTheme } from './theme';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    console.log('toggle', isDarkTheme);
    
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div style={{ backgroundColor: theme.palette.background, color: theme.palette.text, minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useScTheme = () => useContext(ThemeContext);
