import { useState } from 'react';
import { ThemeContext } from './themeContext';
import { ThemeType } from './type';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const stored = localStorage.getItem('theme');
  const initialTheme: ThemeType = stored ? (JSON.parse(stored) as ThemeType) : 'light';
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const toggleTheme = () => {
    const updatedTheme: ThemeType = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
    localStorage.setItem('theme', JSON.stringify(updatedTheme));
  };

  const contextValue = { theme, toggleTheme };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
