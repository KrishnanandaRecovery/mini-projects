import { useEffect } from 'react';
import './style.css';

function HeartTrails() {
    useEffect(() => {
        const layoutEl = document.querySelector('.heart-trail-layout');

        const trailHearts = (e: MouseEvent) => {
            const posX = e.offsetX;
            const posY = e.offsetY;
            const size = Math.random() * 100;

            const spanEl = document.createElement('span');
            spanEl.style.left = posX+'px';
            spanEl.style.top = posY+'px';
            spanEl.style.width = size+'px';
            spanEl.style.height = size+'px';
            layoutEl?.append(spanEl);

            setTimeout(() => spanEl.remove(), 300)
        }
        addEventListener('mousemove', trailHearts);

        return () => {
            removeEventListener('mousemove', trailHearts)
        }
    }, []);

    return <div className="heart-trail-layout bg-black h-screen">
    </div>
}

export default HeartTrails;