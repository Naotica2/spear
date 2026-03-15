'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SpearLogo from '@/components/ui/spearLogo';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/useAuthStore';
import { ThemeToggle } from '@/components/ui/themeToggle';

/* ===== SVG Nav Icons ===== */
function HomeIcon({ active }: { active: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
            <path d="M9 21V12h6v9" />
        </svg>
    );
}

function EducationIcon({ active }: { active: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
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

function PlaygroundIcon({ active }: { active: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    );
}

function DocsIcon({ active }: { active: boolean }) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? 'var(--color-primary)' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
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
    return <SpearLogo size={32} gradientId="sidebarLogo" />;
}

const navItems = [
    { href: '/education', label: 'Education', Icon: EducationIcon },
    { href: '/playground', label: 'Playground', Icon: PlaygroundIcon },
    { href: '/docs', label: 'Docs', Icon: DocsIcon },
    { href: '/about', label: 'About', Icon: AboutIcon },
    { href: '/profile', label: 'Profile', Icon: ProfileIcon },
];

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { isLoggedIn, user, logout } = useAuthStore();

    const isActive = (href: string) => {
        if (href === '/education') return pathname === '/education' || pathname.startsWith('/learn');
        if (href === '/docs') return pathname.startsWith('/docs');
        if (href === '/playground') return pathname === '/playground';
        return pathname.startsWith(href);
    };

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    return (
        <div className="min-h-[100dvh] flex flex-col lg:flex-row relative">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col w-[240px] fixed left-0 top-0 bottom-0 glass-strong p-4 gap-2 z-50">
                <Link href="/" className="flex items-center gap-3 p-4 mb-4">
                    <LogoIcon />
                    <div>
                        <h1 className="text-xl font-bold text-gradient">Spear</h1>
                        <p className="text-[10px] text-text-secondary">Learn to code, beautifully</p>
                    </div>
                </Link>

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

                {/* User / Auth info */}
                {isLoggedIn && user ? (
                    <div className="p-3 glass rounded-[var(--radius-button)]">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-text truncate">{user.name}</p>
                                <p className="text-[10px] text-text-secondary truncate">{user.email}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full text-xs text-text-secondary hover:text-error py-1.5 rounded-lg hover:bg-error/5 transition-colors cursor-pointer font-medium"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link href="/auth" className="block p-4 glass rounded-[var(--radius-button)] text-center">
                        <p className="text-xs text-primary font-semibold">Sign In →</p>
                    </Link>
                )}

                <div className="mt-auto">
                    <ThemeToggle />
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
                    <Link href="/" className="relative">
                        <motion.div
                            className={`
                  flex flex-col items-center gap-0.5 px-4 py-2 rounded-2xl
                  transition-colors duration-200 min-w-[56px]
                  ${pathname === '/' ? 'text-primary' : 'text-text-secondary'}
                `}
                            whileTap={{ scale: 0.9 }}
                        >
                            {pathname === '/' && (
                                <motion.div
                                    className="absolute inset-0 bg-primary/10 rounded-2xl"
                                    layoutId="mobile-nav-active"
                                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                />
                            )}
                            <div className="relative z-10">
                                <HomeIcon active={pathname === '/'} />
                            </div>
                            <span className="text-[10px] font-medium relative z-10">Home</span>
                        </motion.div>
                    </Link>
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="relative">
                            <motion.div
                                className={`
                  flex flex-col items-center gap-0.5 px-4 py-2 rounded-2xl
                  transition-colors duration-200 min-w-[56px]
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
