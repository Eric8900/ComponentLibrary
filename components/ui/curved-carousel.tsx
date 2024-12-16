'use client';
import Image from 'next/image';
import React from 'react';

type CurvedCarouselProps = {
  imageSrcs: string[];
  repeat?: number;
}

export function CurvedCarousel ({ 
    imageSrcs, 
    repeat = 3 
}: CurvedCarouselProps) {
  const images = Array(repeat).fill(imageSrcs).flat();

  return (
    <div className="w-full h-full flex justify-center items-center bg-background">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute z-10 left-1/2 w-[500%] h-[500%] bg-background rounded-[50%] -translate-x-1/2 -top-[490%]" />
        
        <div className="absolute left-0 top-0 w-32 h-full z-20 backdrop-blur-[1px] dark:bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full z-20 backdrop-blur-[1px] dark:bg-gradient-to-l from-background to-transparent pointer-events-none" />
        
        <div className="flex [--duration:40s] [--gap:0px] [gap:var(--gap)]">
          <div className="flex animate-socialproof">
            {images.map((src, index) => (
              <div key={`slide-${index}`} className="relative flex-none w-1/3">
                <div className="w-full h-full border-8 border-background">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={400}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute z-10 left-1/2 w-[500%] h-[500%] bg-background rounded-[50%] -translate-x-1/2 -bottom-[490%]" />
      </div>
    </div>
  );
};