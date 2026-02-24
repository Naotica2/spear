'use client';

import React from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import AppShell from '@/components/layout/AppShell';
import PageTransition from '@/components/layout/PageTransition';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AnimatedBackground />
            <AppShell>
                <PageTransition>
                    {children}
                </PageTransition>
            </AppShell>
        </>
    );
}
