'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FooterProps {
    children?: React.ReactNode;
    height?: string;
    className?: string;
}

export function Footer({
    children,
    height = "100vh",
    className
}: FooterProps) {
    const footerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start center", "end end"]
    });

    const borderRadius = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 24, 24, 24]
    );

    const marginX = useTransform(
        scrollYProgress,
        [0, 0.1, 0.2, 0.3, 0.7, 0.8, 0.9, 1],
        ["0%", "1%", "2%", "4%", "6%", "7%", "7.5%", "8%"]
    );

    return (
        <div 
        ref={footerRef}
        className={`bottom-0 w-full relative h-[${height}]`}>
            <motion.footer
                style={{
                    borderRadius,
                    marginLeft: marginX,
                    marginRight: marginX,
                    marginBottom: marginX
                }}
                className={`bottom-0 left-0 right-0 sticky bg-neutral-800 transition-all p-8 ${className}`}
            >
                {children}
            </motion.footer>
        </div>
    );
};

export default Footer;