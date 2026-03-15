'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'success' | 'error' | 'ghost' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
}

const variantStyles: Record<string, string> = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    success: 'bg-success text-white',
    error: 'bg-error text-white',
    ghost: 'bg-white/60 border border-white/40 text-text hover:bg-white/80',
    accent: 'bg-accent text-white hover:bg-accent-dark',
};

const sizeStyles: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export default function MagneticButton({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    fullWidth = false,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current || disabled) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = (e.clientX - centerX) * 0.15;
        const distY = (e.clientY - centerY) * 0.15;
        x.set(distX);
        y.set(distY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onClick={onClick}
            disabled={disabled}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className={`
        relative overflow-hidden rounded-[var(--radius-button)]
        font-semibold cursor-pointer select-none
        transition-colors duration-200
        soft-shadow active:soft-shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
        >
            {children}
        </motion.button>
    );
}
