import React from 'react';
import { ScrollingSocialProof } from '@/components/ui/social-proof';
import Image from 'next/image';

function SocialProofDemo() {
  const logos = [
    { name: 'Google', src: 'https://pngimg.com/d/google_PNG19644.png' },
    { name: 'Microsoft', src: 'https://cdn.freebiesupply.com/logos/large/2x/microsoft-centered-logo-png-transparent.png' },
    { name: 'Apple', src: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png' },
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
    { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
    { name: 'Netflix', src: 'https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png' },
    { name: 'NVIDIA', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/1024px-NVIDIA_logo.svg.png' },
    { name: 'OpenAI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png' },
  ];

  return (
    <div className="w-full py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-xl font-semibold bg-gradient-to-r text-green-100 from-sky-600 via-violet-500 to-indigo-600 text-transparent bg-clip-text mb-8">
          TRUSTED BY LEADING COMPANIES
        </h2>
        <ScrollingSocialProof 
          className="py-4"
        >
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center px-6"
            >
              <div className="rounded-lg p-2">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={100}
                  height={100}
                  className="object-contain transition-all dark:brightness-0 dark:invert"
                />
              </div>
            </div>
          ))}
        </ScrollingSocialProof>
      </div>
    </div>
  );
};

export default SocialProofDemo;