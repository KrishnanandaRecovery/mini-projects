import { useEffect } from 'react';
import { roles } from './data';

function TextEffect() {
  useEffect(() => {
    const spanEl = document.querySelector<HTMLSpanElement>('.title-block span');
    if (!spanEl) return;

    let roleIndex = 0;
    let characterIndex = 0;

    const updateText = () => {
      characterIndex++;
      spanEl.innerText = roles[roleIndex].slice(0, characterIndex);
      if (characterIndex === roles[roleIndex].length) {
        roleIndex++;
        characterIndex = 0;
      }
      if (roleIndex === roles.length) roleIndex = 0;
      setTimeout(updateText, 200);
    };
    updateText();
  }, []);

  return (
    <div className="h-screen bg-cyan-700 flex items-center pl-16">
      <h1 className="title-block text-6xl text-cyan-950">
        I am <span>Krishnananda</span>
      </h1>
    </div>
  );
}

export default TextEffect;
