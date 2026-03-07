'use client';

import { motion } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    color: string;
}

const COLORS = [
    'rgba(109, 213, 196, 0.35)',
    'rgba(126, 184, 240, 0.3)',
    'rgba(155, 143, 230, 0.25)',
    'rgba(245, 200, 122, 0.3)',
];

/* ====== Fixed Hydration Error ====== */
export default function ParticleField({ count = 20 }: { count?: number }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const particles: Particle[] = useMemo(() => {
        if (!mounted) return [];
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 2,
            delay: Math.random() * 8,
            duration: Math.random() * 12 + 10,
            color: COLORS[i % COLORS.length],
        }));
    }, [count, mounted]);

    if (!mounted) {
        return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />;
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        background: p.color,
                        animation: `particle-drift ${p.duration}s infinite ease-in-out ${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
