'use client';

import React from 'react';

export default function AnimatedBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
        </div>
    );
}
