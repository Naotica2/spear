'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
    progress: number; // 0-100
    color?: string;
    height?: number;
    showLabel?: boolean;
    className?: string;
}

export default function ProgressBar({
    progress,
    color = 'var(--color-primary)',
    height = 12,
    showLabel = false,
    className = '',
}: ProgressBarProps) {
    const clampedProgress = Math.min(100, Math.max(0, progress));

    return (
        <div className={`w-full ${className}`}>
            <div
                className="w-full rounded-full overflow-hidden"
                style={{
                    height: `${height}px`,
                    background: 'rgba(0, 0, 0, 0.06)',
                }}
            >
                <motion.div
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${color}, ${color}dd)`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${clampedProgress}%` }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                />
            </div>
            {showLabel && (
                <motion.span
                    className="text-xs text-text-secondary mt-1 block text-right font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {clampedProgress}%
                </motion.span>
            )}
        </div>
    );
}
