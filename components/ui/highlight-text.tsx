'use client';
import React, { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

const HighlightText = ({
  children,
  duration = 2,
  delay = 0.5,
  className = 'bg-yellow-300',
}: HighlightTextProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={isInView ? {
        backgroundSize: "100% 100%",
      } : {
        backgroundSize: "0% 100%",
      }}
      transition={{
        duration,
        ease: "linear",
        delay,
      }}
      className={cn(
        "relative pb-1 px-1 inline-block rounded-lg whitespace-nowrap",
        className
      )}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
    >
      {children}
    </motion.span>
  );
};

export default HighlightText;