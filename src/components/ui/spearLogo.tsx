import React from 'react';
import Image from 'next/image';

interface SpearLogoProps {
    size?: number;
    className?: string;
    gradientId?: string;
}

/**
 * Spear Logo — Uses the spear warrior silhouette image, no background.
 */
export default function SpearLogo({ size = 36, className = '' }: SpearLogoProps) {
    return (
        <Image
            src="/spear-logo.png"
            alt="Spear Logo"
            width={size}
            height={size}
            className={className}
            style={{ objectFit: 'contain' }}
        />
    );
}
