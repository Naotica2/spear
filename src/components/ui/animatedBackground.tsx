'use client';

import React from 'react';

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
            {/* Subtle premium grid pattern replacing the laggy blurs */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Soft radial gradient mask to fade the grid out gracefully towards the edges */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent_0%,var(--color-bg)_100%)]"></div>
        </div>
    );
}
