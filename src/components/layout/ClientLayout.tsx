'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import FloatingPet from '@/components/pet/FloatingPet';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLanding = pathname === '/';
    const isAuth = pathname === '/auth';
    const isPlayground = pathname === '/playground';
    const isEducation = pathname.startsWith('/education') || pathname.startsWith('/learn') || pathname === '/profile' || pathname === '/pet';
    const isPetPage = pathname === '/pet';

    // Playground: full-width, no navbar/footer (its own header)
    if (isPlayground) {
        return (
            <>
                <AnimatedBackground />
                <div className="relative z-10">
                    {children}
                </div>
                <FloatingPet />
            </>
        );
    }

    // Education/learn pages: clean, no navbar, no footer (focused mode)
    if (isEducation) {
        return (
            <>
                <AnimatedBackground />
                <div className="relative z-10 pb-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </div>
                </div>
                {!isPetPage && <FloatingPet />}
            </>
        );
    }

    // Landing page: full width, navbar, no extra padding
    if (isLanding) {
        return (
            <>
                <AnimatedBackground />
                <Navbar />
                <div className="relative z-10">
                    {children}
                </div>
                <FloatingPet />
            </>
        );
    }

    // Auth page: no navbar, no footer
    if (isAuth) {
        return (
            <>
                <AnimatedBackground />
                <div className="relative z-10">
                    {children}
                </div>
                <FloatingPet />
            </>
        );
    }

    const isDocs = pathname.startsWith('/docs');

    // Docs pages: wider container for sidebar layout
    if (isDocs) {
        return (
            <>
                <AnimatedBackground />
                <Navbar />
                <div className="relative z-10 pt-20 pb-8">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </div>
                </div>
                <Footer />
                <FloatingPet />
            </>
        );
    }

    // Other pages (about, profile): navbar + footer
    return (
        <>
            <AnimatedBackground />
            <Navbar />
            <div className="relative z-10 pt-20 pb-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </div>
            </div>
            <Footer />
            <FloatingPet />
        </>
    );
}

