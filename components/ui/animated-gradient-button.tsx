'use client';
import { motion } from "framer-motion";
import React from "react";

type GradientButtonProps = {
  children?: React.ReactNode;
  initialGradient?: string
  hoverGradient?: string
  className?: string;
  duration?: number;
};

export function GradientButton({
  children,
  initialGradient = "bg-gradient-to-r from-purple-500 to-blue-500",
  hoverGradient = "bg-gradient-to-r from-purple-500 to-orange-500",
  className = "",
  duration = 0.3
}: GradientButtonProps) {
  return (
    <motion.button
      className={`relative px-8 py-4 rounded-lg overflow-hidden group ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <div
        className={`absolute inset-0 ${initialGradient}`}
      />
      <motion.div
        className={`absolute inset-0 ${hoverGradient}`}
        initial={{ scale: 1.5, opacity: 0 }}
        variants={{
          hover: { scale: 1, opacity: 1 },
          initial: { scale: 1.5, opacity: 0 }
        }}
        transition={{ 
          duration,
          ease: "easeInOut"
        }}
      />
      {children}
    </motion.button>
  );
}