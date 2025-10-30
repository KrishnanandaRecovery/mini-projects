import { useContext } from 'react';
import { ThemeContext } from './themeContext';

function Page() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => toggleTheme();

  const bg = theme === 'light' ? 'bg-white' : 'bg-black';
  const color = theme === 'light' ? 'text-black' : 'text-white';
  const btnStyle = theme === 'light' ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`h-screen flex flex-col justify-center items-center ${bg}`}>
      <h2 className={`text-5xl mb-1 ${color}`}>Light & Dark Theme</h2>
      <p className={`text-2xl ${color}`}>Click the toggle button to swicth theme</p>
      <button
        className={`py-2 px-4 mt-5 rounded cursor-pointer ${btnStyle}`}
        onClick={handleToggle}
      >
        Toogle theme to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
}

export default Page;
