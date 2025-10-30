import { createContext } from 'react';
import { ThemeInterface, ThemeType } from './type';

export const ThemeContext = createContext<ThemeInterface>({
  theme: JSON.parse(localStorage.getItem('theme') ?? '"light"') as ThemeType,
  toggleTheme: () => {},
});
