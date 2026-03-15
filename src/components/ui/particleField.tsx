'use client';

import { motion } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    color: string;
    shapeIndex: number;
    rotation: number;
}

const COLORS = [
    '#6DD5C4', // Primary
    '#7EB8F0', // Secondary
    '#9B8FE6', // Accent
    '#F5C87A', // Warning/Yellow
    '#F06D5B', // Error/Red
];

const SHAPES = [
    // Circle
    (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>,
    // Plus
    (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>,
    // Triangle
    (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l10 18H2L12 2z" /></svg>,
    // Square
    (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" ry="4" /></svg>,
    // Code Brackets
    (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    // Slash
    (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="16" y1="4" x2="8" y2="20" /></svg>,
    // Hash
    (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" /></svg>,
    // Asterisk
    (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v12M17.196 9l-10.392 6M6.804 9l10.392 6" /></svg>
];

/* ====== Enhanced Particle Field ====== */
export default function ParticleField({ count = 25 }: { count?: number }) {
    const [mounted, setMounted] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Skip rendering particles entirely on mobile for performance
    if (isMobile) {
        return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />;
    }

    const particles: Particle[] = useMemo(() => {
        if (!mounted) return [];
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 16 + 12, // Sizes between 12px and 28px
            delay: Math.random() * 5,
            duration: Math.random() * 20 + 20, // Gentle drift between 20s and 40s
            color: COLORS[i % COLORS.length],
            shapeIndex: Math.floor(Math.random() * SHAPES.length),
            rotation: Math.random() * 360,
        }));
    }, [count, mounted]);

    if (!mounted) {
        return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />;
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {particles.map((p) => {
                const Shape = SHAPES[p.shapeIndex];
                return (
                    <motion.div
                        key={p.id}
                        className="absolute"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            color: p.color,
                            opacity: 0.18, // Subtle opacity for floating aesthetic
                        }}
                        initial={{
                            y: 0,
                            x: 0,
                            rotate: p.rotation,
                        }}
                        animate={{
                            y: [0, -40, 20, 0], // Float up and down
                            x: [0, 20, -20, 0], // Drift left and right sideways
                            rotate: [p.rotation, p.rotation + 180, p.rotation + 360],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: p.delay,
                        }}
                    >
                        <Shape style={{ width: p.size, height: p.size }} />
                    </motion.div>
                );
            })}
        </div>
    );
}
