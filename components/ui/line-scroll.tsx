'use client';
import React, { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface LineScrollProps {
    children: ReactNode;
    from?: string;
    to?: string;
}

export function LineScroll({
    children,
    from = '#000',
    to = '#000',
}: LineScrollProps) {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end start"]
    });
    const pathLength = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 0.4, 0.8, 1]);

    return (
        <div className="relative" ref={targetRef}>
            <div className='absolute w-full h-full flex items-center justify-center m-0 p-0'>
                {children}
            </div>
            <motion.svg className={`w-full h-full`} viewBox="0 0 1248 1843" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                    <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={from} />
                        <stop offset="100%" stopColor={to} />
                    </linearGradient>
                </defs>
                <motion.path
                    style={{ pathLength }}
                    stroke="url(#strokeGradient)"
                    d="M1236 11.4976C-119.921 408.329 1115 2169 12.0026 1773" strokeWidth="23" strokeLinecap="round" />
            </motion.svg>

        </div>
    );
}