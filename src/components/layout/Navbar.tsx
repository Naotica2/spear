'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '@/store/useAuthStore';
import SpearLogo from '@/components/ui/SpearLogo';
import { useT } from '@/store/useLanguageStore';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { isLoggedIn, user, logout } = useAuthStore();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        router.push('/');
    };

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        if (href === '/education') return pathname === '/education' || pathname.startsWith('/learn');
        return pathname.startsWith(href);
    };

    const t = useT();

    const navLinks = [
        { href: '/education', label: t('nav.education'), key: 'Education' },
        { href: '/playground', label: t('nav.playground'), key: 'Playground' },
        { href: '/docs', label: t('nav.docs'), key: 'Docs' },
        { href: '/about', label: t('nav.about'), key: 'About' },
    ];

    return (
        <>
            <motion.nav
                className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10"
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <SpearLogo size={36} gradientId="navLogoGrad" />
                        <span className="text-xl font-extrabold text-gradient">Spear</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden sm:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-[var(--radius-button)] text-sm font-medium transition-all duration-200 ${isActive(link.href)
                                    ? 'text-primary bg-primary/10'
                                    : 'text-text-secondary hover:text-text hover:bg-white/20 dark:hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">

                        {isLoggedIn && user ? (
                            <div className="hidden sm:flex items-center gap-3">
                                <Link href="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="text-sm font-medium text-text max-w-[100px] truncate">{user.name}</span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 rounded-[var(--radius-button)] text-sm font-medium text-text-secondary hover:text-error hover:bg-error/5 transition-colors cursor-pointer"
                                >
                                    {t('common.signOut')}
                                </button>
                            </div>
                        ) : (
                            <div className="hidden sm:flex items-center gap-3">
                                <Link href="/auth" className="text-sm font-medium text-text-secondary hover:text-text transition-colors">
                                    {t('common.login')}
                                </Link>
                                <Link
                                    href="/auth"
                                    className="px-5 py-2 rounded-[var(--radius-button)] font-semibold text-white text-sm"
                                    style={{ background: 'linear-gradient(135deg, #6DD5C4, #7EB8F0)' }}
                                >
                                    {t('common.getStarted')}
                                </Link>
                            </div>
                        )}

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Mobile hamburger button */}
                        <button
                            className="sm:hidden w-10 h-10 rounded-xl glass flex items-center justify-center cursor-pointer"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <motion.div className="flex flex-col gap-1.5 w-5" animate={menuOpen ? 'open' : 'closed'}>
                                <motion.span
                                    className="block h-0.5 w-full bg-text rounded-full origin-center"
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: 45, y: 4 },
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="block h-0.5 w-full bg-text rounded-full"
                                    variants={{
                                        closed: { opacity: 1 },
                                        open: { opacity: 0 },
                                    }}
                                    transition={{ duration: 0.1 }}
                                />
                                <motion.span
                                    className="block h-0.5 w-full bg-text rounded-full origin-center"
                                    variants={{
                                        closed: { rotate: 0, y: 0 },
                                        open: { rotate: -45, y: -4 },
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile slide-down menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed top-16 left-0 right-0 z-40 glass-strong border-b border-white/10 sm:hidden"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-[var(--radius-button)] text-sm font-medium transition-all ${isActive(link.href)
                                        ? 'text-primary bg-primary/10'
                                        : 'text-text-secondary hover:text-text hover:bg-white/20 dark:hover:bg-white/10'
                                        }`}
                                >
                                    {link.key === 'Education' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>
                                    )}
                                    {link.key === 'Playground' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                                    )}
                                    {link.key === 'Docs' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                    )}
                                    {link.key === 'About' && (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><circle cx="12" cy="8" r="0.5" fill="currentColor" /></svg>
                                    )}
                                    {link.label}
                                </Link>
                            ))}

                            {/* Divider */}
                            <div className="h-px bg-white/10 my-2" />

                            {isLoggedIn && user ? (
                                <>
                                    <Link
                                        href="/profile"
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 rounded-[var(--radius-button)] text-sm font-medium text-text-secondary hover:text-text hover:bg-white/20 dark:hover:bg-white/10 transition-all"
                                    >
                                        <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        {user.name}
                                    </Link>
                                    <button
                                        onClick={() => { handleLogout(); setMenuOpen(false); }}
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-[var(--radius-button)] text-sm font-medium text-error/70 hover:text-error hover:bg-error/5 transition-all cursor-pointer"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                                        {t('common.signOut')}
                                    </button>
                                </>
                            ) : (
                                <Link
                                    href="/auth"
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-center px-4 py-3 rounded-[var(--radius-button)] font-semibold text-white text-sm"
                                    style={{ background: 'linear-gradient(135deg, #6DD5C4, #7EB8F0)' }}
                                >
                                    {t('common.getStarted')}
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
