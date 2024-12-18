'use client';
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface OutlineTextProps {
    children: ReactNode;
    from?: string;
    to?: string;
    top?: number;
}

export function OutlineText({
    children,
    from = '#000',
    to = '#000',
    top = 15
}: OutlineTextProps) {
    return (
        <span className="relative inline-block">
            {children}
            <svg 
                className="absolute"
                style={{ 
                    left: '-1.25rem',
                    right: '-1.25rem',
                    top: `-${top}px`,
                    bottom: '0',
                    transform: 'translateY(4px)'
                }}
                viewBox="0 0 3200 1471" 
                fill="none" 
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={from} />
                        <stop offset="100%" stopColor={to} />
                    </linearGradient>
                </defs>
                <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                        duration: 1.25,
                        ease: "easeInOut",
                    }}
                    stroke="url(#strokeGradient)"
                    d="M114.7 734.525C107.722 670.149 138.787 603.494 206.993 537.564C275.068 471.76 378.167 408.748 509.491 352.327C771.973 239.557 1143.45 154.715 1561.57 125.188C1979.69 95.6618 2363.78 127.149 2646.53 201.416C2788 238.574 2903.09 286.178 2984.29 341.441C3065.64 396.809 3110.57 458.098 3117.55 522.474C3124.53 586.85 3093.46 653.505 3025.26 719.435C2957.18 785.239 2854.08 848.251 2722.76 904.672C2460.28 1017.44 2088.8 1102.28 1670.68 1131.81C1252.56 1161.34 868.473 1129.85 585.718 1055.58C444.251 1018.43 329.162 970.821 247.964 915.558C166.611 860.19 121.678 798.901 114.7 734.525Z" 
                    strokeWidth="36" 
                />
                <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                        duration: 1.25,
                        ease: "easeInOut",
                    }}
                    stroke="url(#strokeGradient)"
                    d="M3077.3 734.526C3070.32 798.902 3025.39 860.191 2944.04 915.559C2862.84 970.822 2747.75 1018.43 2606.28 1055.58C2323.53 1129.85 1939.44 1161.34 1521.32 1131.81C1103.2 1102.28 731.722 1017.44 469.241 904.672C337.916 848.251 234.818 785.239 166.742 719.435C98.5366 653.506 67.4718 586.851 74.4496 522.475C81.4275 458.098 126.36 396.81 207.714 341.442C288.912 286.179 404 238.574 545.468 201.417C828.222 127.15 1212.31 95.6626 1630.43 125.189C2048.55 154.716 2420.03 239.558 2682.51 352.328C2813.83 408.749 2916.93 471.761 2985.01 537.565C3053.21 603.494 3084.28 670.15 3077.3 734.526Z" 
                    strokeWidth="36"
                />
            </svg>
        </span>
    )
}