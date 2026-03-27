"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

type Photo = {
  src: string;
  alt: string;
};

type PhotoCarouselProps = {
  photos: Photo[];
};

export function PhotoCarousel({ photos }: PhotoCarouselProps) {
  const [idx, setIdx] = useState(0);

  const prev = useCallback(
    () => setIdx((i) => (i === 0 ? photos.length - 1 : i - 1)),
    [photos.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i === photos.length - 1 ? 0 : i + 1)),
    [photos.length]
  );

  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-4xl border border-warm-200">
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          className={`object-cover object-top transition-opacity duration-500 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Photo ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === idx ? "w-5 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
