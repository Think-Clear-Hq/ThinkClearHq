"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function LiquidBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor follower
    // Smooth spring animation for the cursor follower & Repulsion
    const springConfig = { damping: 20, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Inverted springs for parallax - "Antigravity"
    const initialX = useTransform(springX, (value) => value * -0.15);
    const initialY = useTransform(springY, (value) => value * -0.15);

    // Stronger repel for core
    const coreX = useTransform(springX, (value) => value * -0.25);
    const coreY = useTransform(springY, (value) => value * -0.25);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Center the coordinate system
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 -z-10 bg-[#000502] overflow-hidden pointer-events-none">

            {/* Ambient Background Glow - Emerald/Teal */}
            <motion.div
                className="absolute w-[300px] h-[300px] md:w-[1200px] md:h-[1200px] bg-emerald-900/10 rounded-full blur-[60px] md:blur-[150px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform transform-gpu"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* REACTIVE CURSOR WAVE: Electric Cyan/Blue - Higher Opacity + Repel */}
            <motion.div
                className="hidden md:block absolute w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] opacity-40 mix-blend-screen left-1/2 top-1/2 will-change-transform"
                style={{
                    x: initialX,
                    y: initialY,
                }}
            />

            {/* REACTIVE CURSOR CORE: Bright White/Mint Highlight - Strongest Parallax + Opacity */}
            <motion.div
                className="hidden md:block absolute w-[200px] h-[200px] bg-white/10 rounded-full blur-[50px] opacity-60 mix-blend-overlay left-1/2 top-1/2 will-change-transform"
                style={{
                    x: coreX,
                    y: coreY,
                }}
            />

            {/* Constant Background Waves - "Always Going On" */}
            <motion.div
                className="absolute w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-emerald-600/20 rounded-full blur-[50px] md:blur-[120px] opacity-25 top-[-20%] left-[-10%] mix-blend-screen will-change-transform transform-gpu"
                animate={{
                    x: [0, 80, -20, 0],
                    y: [0, 50, -30, 0],
                    scale: [1, 1.15, 0.95, 1],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-teal-600/20 rounded-full blur-[50px] md:blur-[100px] opacity-25 bottom-[-10%] right-[-10%] mix-blend-screen will-change-transform transform-gpu"
                animate={{
                    x: [0, -60, 20, 0],
                    y: [0, -80, 40, 0],
                    scale: [1, 1.25, 1],
                }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Deep Violet/Indigo Contrast Wave - Slow & Deep */}
            <motion.div
                className="absolute w-[400px] h-[300px] md:w-[1000px] md:h-[600px] bg-indigo-800/20 rounded-[100%] blur-[60px] md:blur-[130px] opacity-20 bottom-[-30%] left-[20%] mix-blend-color-dodge will-change-transform transform-gpu"
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, -30, 30, 0],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.svg')] pointer-events-none mix-blend-overlay"></div>
        </div>
    );
}
