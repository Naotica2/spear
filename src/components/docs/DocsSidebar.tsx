'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { docsLanguages } from '@/data/docs-data';
import { HTMLMascot, CSSMascot, JSMascot, PHPMascot, MySQLMascot } from '@/components/illustrations/Mascots';

const mascotMap: Record<string, React.FC<{ size?: number; animate?: boolean; className?: string }>> = {
    html: HTMLMascot,
    css: CSSMascot,
    js: JSMascot,
    php: PHPMascot,
    mysql: MySQLMascot,
};

interface DocsSidebarProps {
    currentLang?: string;
    currentTopic?: string;
    mobileOpen?: boolean;
    onClose?: () => void;
}

export default function DocsSidebar({ currentLang, currentTopic, mobileOpen = false, onClose }: DocsSidebarProps) {
    const pathname = usePathname();
    const [expandedLang, setExpandedLang] = React.useState<string | null>(currentLang || null);

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[260px] shrink-0">
                <div className="sticky top-24 max-h-[calc(100dvh-8rem)] overflow-y-auto pr-2">
                    <SidebarContent
                        expandedLang={expandedLang}
                        setExpandedLang={setExpandedLang}
                        currentLang={currentLang}
                        currentTopic={currentTopic}
                        pathname={pathname}
                    />
                </div>
            </aside>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                        />
                        <motion.aside
                            className="fixed left-0 top-0 bottom-0 w-[280px] glass-strong z-50 lg:hidden p-6 overflow-y-auto"
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold text-text">Docs</h3>
                                <button onClick={onClose} className="text-text-secondary hover:text-text cursor-pointer">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <SidebarContent
                                expandedLang={expandedLang}
                                setExpandedLang={setExpandedLang}
                                currentLang={currentLang}
                                currentTopic={currentTopic}
                                pathname={pathname}
                                onNavigate={onClose}
                            />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

function SidebarContent({
    expandedLang,
    setExpandedLang,
    currentLang,
    currentTopic,
    pathname,
    onNavigate,
}: {
    expandedLang: string | null;
    setExpandedLang: (v: string | null) => void;
    currentLang?: string;
    currentTopic?: string;
    pathname: string;
    onNavigate?: () => void;
}) {
    return (
        <nav className="space-y-2">
            {/* Docs Home */}
            <Link
                href="/docs"
                onClick={onNavigate}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all ${pathname === '/docs'
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-secondary hover:text-text hover:bg-white/30'
                    }`}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Overview
            </Link>

            <div className="h-px bg-white/10 my-3" />

            {docsLanguages.map((lang) => (
                <div key={lang.id}>
                    {/* Language Header */}
                    <button
                        onClick={() => setExpandedLang(expandedLang === lang.id ? null : lang.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${currentLang === lang.id
                            ? 'text-text'
                            : 'text-text-secondary hover:text-text'
                            }`}
                    >
                        <span className="flex items-center gap-2">
                            {mascotMap[lang.id] && React.createElement(mascotMap[lang.id], { size: 20, animate: false })}
                            {lang.name}
                        </span>
                        <motion.svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                            animate={{ rotate: expandedLang === lang.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                    </button>

                    {/* Topics */}
                    <AnimatePresence>
                        {expandedLang === lang.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                <div className="pl-5 mt-1 space-y-0.5">
                                    {lang.topics.map((topic) => {
                                        const isActive = currentLang === lang.id && currentTopic === topic.id;
                                        return (
                                            <Link
                                                key={topic.id}
                                                href={`/docs/${lang.id}/${topic.id}`}
                                                onClick={onNavigate}
                                                className={`block px-3 py-1.5 rounded-lg text-xs transition-all ${isActive
                                                    ? 'bg-primary/10 text-primary font-semibold'
                                                    : 'text-text-secondary hover:text-text hover:bg-white/20'
                                                    }`}
                                            >
                                                {topic.title}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </nav>
    );
}
