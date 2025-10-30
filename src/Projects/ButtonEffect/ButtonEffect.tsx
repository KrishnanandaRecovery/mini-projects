import { useEffect } from 'react';
import './style.css';

function ButtonEffect() {
  useEffect(() => {
    const buttonEl = document.querySelector('button');
    if (!buttonEl) return;

    const updatePos = (e: MouseEvent) => {
      const posX = e.pageX - buttonEl.offsetLeft;
      const posY = e.pageY - buttonEl.offsetTop;

      buttonEl.style.setProperty('--posX', posX + 'px');
      buttonEl.style.setProperty('--posY', posY + 'px');
    };
    buttonEl.addEventListener('mouseover', updatePos);
  }, []);

  return (
    <div className="h-screen bg-blue-500 flex justify-center items-center">
      <button className="btn-ripple py-2 px-4 rounded text-2xl bg-pink-600 text-white cursor-pointer">
        <span>Button</span>
      </button>
    </div>
  );
}

export default ButtonEffect;
