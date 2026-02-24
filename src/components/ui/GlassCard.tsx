'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
    delay?: number;
}

export default function GlassCard({
    children,
    className = '',
    onClick,
    hoverable = false,
    delay = 0,
}: GlassCardProps) {
    return (
        <motion.div
            onClick={onClick}
            className={`
        glass rounded-[var(--radius-card)] p-6 soft-shadow
        ${hoverable ? 'cursor-pointer' : ''}
        ${className}
      `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 24,
                delay,
            }}
            whileHover={hoverable ? {
                scale: 1.02,
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.08)',
            } : undefined}
            whileTap={hoverable ? { scale: 0.98 } : undefined}
        >
            {children}
        </motion.div>
    );
}
