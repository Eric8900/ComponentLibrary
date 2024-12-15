'use client';
import { motion } from 'framer-motion';
import React, { Children, isValidElement, ReactNode, cloneElement } from 'react';

interface StaggeredFlipProps {
  children: ReactNode;
  href?: string;
  duration?: number;
  stagger?: number;
}

export function StaggeredFlip ({
  children,
  href,
  duration = 0.2,
  stagger = 0.03,
}: StaggeredFlipProps) {
  const childrenArray = Children.toArray(children).map((child, index) => {
    if (typeof child === 'string') {
      return child.split('').map((char, charIndex) => (
        <span key={`${index}-${charIndex}`}>{char}</span>
      ));
    }
    if (isValidElement(child)) {
      return cloneElement(child, { key: index });
    }
    return child;
  }).flat();

  const WrapperComponent = href ? motion.a : motion.div;
  const wrapperProps = href ? { href } : {};

  return (
    <WrapperComponent
      initial="initial"
      whileHover="hovered"
      {...wrapperProps}
      className={`relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl`}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {childrenArray.map((child, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={`top-${i}`}
          >
            {child}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {childrenArray.map((child, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={`bottom-${i}`}
          >
            {child}
          </motion.span>
        ))}
      </div>
    </WrapperComponent>
  );
};