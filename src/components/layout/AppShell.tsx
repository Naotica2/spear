'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

/* ===== SVG Nav Icons ===== */
function HomeIcon({ active }: { active: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
        </svg>
    );
}

function AboutIcon({ active }: { active: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <circle cx="12" cy="8" r="0.5" fill={active ? 'var(--color-primary)' : 'currentColor'} />
        </svg>
    );
}

function ProfileIcon({ active }: { active: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21v-1a6 6 0 0112 0v1" />
        </svg>
    );
}

/* ===== Logo Icon ===== */
function LogoIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="12" fill="var(--color-primary)" />
            <path d="M12 14L18 20L12 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 26H28" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

const navItems = [
    { href: '/', label: 'Home', Icon: HomeIcon },
    { href: '/about', label: 'About', Icon: AboutIcon },
    { href: '/profile', label: 'Profile', Icon: ProfileIcon },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <div className="min-h-[100dvh] flex flex-col lg:flex-row relative">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col w-[240px] fixed left-0 top-0 bottom-0 glass-strong p-4 gap-2 z-50">
                <div className="flex items-center gap-3 p-4 mb-4">
                    <LogoIcon />
                    <div>
                        <h1 className="text-xl font-bold text-gradient">CodeCraft</h1>
                        <p className="text-[10px] text-text-secondary">Learn to code, beautifully</p>
                    </div>
                </div>

                <nav className="flex flex-col gap-1 flex-1">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <motion.div
                                className={`
                  flex items-center gap-3 px-4 py-3 rounded-[var(--radius-button)]
                  font-medium transition-colors duration-200
                  ${isActive(item.href)
                                        ? 'bg-primary/15 text-primary'
                                        : 'text-text-secondary hover:bg-white/50 hover:text-text'
                                    }
                `}
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <item.Icon active={isActive(item.href)} />
                                <span>{item.label}</span>
                                {isActive(item.href) && (
                                    <motion.div
                                        className="ml-auto w-2 h-2 rounded-full bg-primary"
                                        layoutId="sidebar-active"
                                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                    />
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 glass rounded-[var(--radius-button)] text-center">
                    <p className="text-xs text-text-secondary">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="#F06D5B" className="inline mr-1 -mt-0.5">
                            <path d="M8 2 Q10 0 12 2 Q14 4 8 9 Q2 4 4 2 Q6 0 8 2Z" />
                        </svg>
                        Made with love
                    </p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-[240px] pb-24 lg:pb-8 relative z-10">
                <div className="max-w-4xl mx-auto px-4 py-6 lg:px-8 lg:py-8">
                    {children}
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 glass-strong border-t border-white/20 z-50 safe-area-bottom">
                <div className="flex items-center justify-around px-2 py-2">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="relative">
                            <motion.div
                                className={`
                  flex flex-col items-center gap-0.5 px-5 py-2 rounded-2xl
                  transition-colors duration-200 min-w-[64px]
                  ${isActive(item.href)
                                        ? 'text-primary'
                                        : 'text-text-secondary'
                                    }
                `}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isActive(item.href) && (
                                    <motion.div
                                        className="absolute inset-0 bg-primary/10 rounded-2xl"
                                        layoutId="mobile-nav-active"
                                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                    />
                                )}
                                <div className="relative z-10">
                                    <item.Icon active={isActive(item.href)} />
                                </div>
                                <span className="text-[10px] font-medium relative z-10">{item.label}</span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
