import React, { useState, useRef } from 'react';
import { imageData } from './imageData';

function Gallery() {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [images, setImages] = useState<number[]>(imageData);

  const loadMore = () => {
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * 2000);
      setImages((prevImages) => [...prevImages, index]);
    }
  };
  const scrollToBottom = () => {
    const gallery = galleryRef.current;
    if (gallery) {
      gallery.scrollTo({
        top: gallery.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="h-screen bg-orange-900 flex flex-col pt-9">
      <div
        ref={galleryRef}
        className="gallery-container flex justify-center items-top flex-wrap gap-3 grow overflow-auto"
      >
        {images?.map((imageIndex) => (
          <img
            key={imageIndex}
            src={`https://picsum.photos/300?random=${imageIndex}`}
            alt="gallery"
            className="rounded shadow-2xl"
            onLoad={scrollToBottom}
          />
        ))}
      </div>

      <button
        className="block mx-auto bg-amber-200 px-3 py-2 my-5 rounded shadow cursor-pointer"
        onClick={loadMore}
      >
        Load More
      </button>
    </div>
  );
}

export default Gallery;
