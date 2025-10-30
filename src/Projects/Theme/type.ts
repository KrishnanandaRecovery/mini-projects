export type ThemeType = 'light' | 'dark';

export interface ThemeInterface {
  theme: ThemeType;
  toggleTheme: () => void;
}
