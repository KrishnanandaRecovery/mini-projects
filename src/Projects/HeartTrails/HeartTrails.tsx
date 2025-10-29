import { useEffect } from 'react';
import './style.css';

function HeartTrails() {
    useEffect(() => {
        const layoutEl = document.querySelector('.layout');

        addEventListener('mousemove', (e) => {
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
        });

        return () => {
            removeEventListener('mousemove', () => {})
        }
    }, []);

    return <div className="layout bg-black h-screen">
    </div>
}

export default HeartTrails;