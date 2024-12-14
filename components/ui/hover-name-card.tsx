'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SponsorCardProps {
    src: string;
    name: string;
    href: string;
    className?: string;
}

export function SponserCard({
    src,
    name,
    href,
    className,
}: SponsorCardProps) {
    return (
        <motion.a
            className={`relative w-72 h-48 rounded-xl overflow-hidden ${className}`}
            whileHover="hover"
            initial="initial"
            animate="initial"
            href={href}
            target="_blank" 
            rel="noopener noreferrer"
        >
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                variants={{
                    initial: {
                        scale: 1,
                        filter: "blur(0px)",
                        opacity: 1,
                        transition: {
                            duration: 0.9,
                            type: "spring", 
                            bounce: 0.25
                        }
                    },
                    hover: {
                        scale: 0.7,
                        filter: "blur(5px)",
                        opacity: 0.6,
                        transition: {
                            duration: 0.9,
                            type: "spring", 
                            bounce: 0.25
                        }
                    }
                }}
            >
                <Image
                    src={src}
                    alt={`${name} logo`}
                    width={100}
                    height={100}
                    className="w-36 h-auto grayscale"
                />
            </motion.div>
            <motion.div
                className="absolute inset-0 flex items-center justify-center text-white"
                variants={{
                    initial: {
                        opacity: 0,
                        scale: 1.5,
                        transition: {
                            opacity: { duration: 0.2, ease: "easeOut" },
                            scale: { duration: 0.9, type: "spring", bounce: 0.25 }
                        }
                    },
                    hover: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.9,
                            type: "spring", 
                            bounce: 0.25
                        }
                    }
                }}
            >
                <span className="text-xl font-bold">{name}</span>
            </motion.div>
        </motion.a>
    );
};