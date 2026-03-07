'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { docsLanguages } from '@/data/docs-data';
import { HTMLMascot, CSSMascot, JSMascot, PHPMascot } from '@/components/illustrations/Mascots';

const mascotMap: Record<string, React.FC<{ size?: number; animate?: boolean }>> = {
    html: HTMLMascot,
    css: CSSMascot,
    js: JSMascot,
    php: PHPMascot,
};

export default function DocsPage() {
    return (
        <div className="py-8">
            {/* Hero */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 text-sm font-medium text-text-secondary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg>
                    Documentation
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-text mb-4">
                    Spear <span className="text-gradient">Documentation</span>
                </h1>
                <p className="text-text-secondary max-w-lg mx-auto">
                    Dokumentasi lengkap HTML, CSS, JavaScript, dan PHP. Pelajari teori, lihat contoh code, dan langsung coba di Playground.
                </p>
            </motion.div>

            {/* Language Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {docsLanguages.map((lang, i) => {
                    const Mascot = mascotMap[lang.id];
                    return (
                        <motion.div
                            key={lang.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
                        >
                            <Link href={`/docs/${lang.id}`}>
                                <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow hover:soft-shadow-lg transition-all duration-300 group cursor-pointer h-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 flex items-center justify-center shrink-0">
                                            {Mascot && <Mascot size={48} animate={false} />}
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-text group-hover:text-gradient transition-all">{lang.name}</h2>
                                            <p className="text-xs text-text-secondary">{lang.topics.length} topik</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-text-secondary mb-4">{lang.description}</p>
                                    <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: lang.color }}>
                                        Buka Referensi
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <path d="M5 12H19M13 6L19 12L13 18" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>

            {/* Quick Link to Playground */}
            <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Link
                    href="/playground"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-button)] font-bold text-white text-sm shadow-lg shadow-primary/20"
                    style={{ background: 'linear-gradient(135deg, #6DD5C4, #7EB8F0)' }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                    </svg>
                    Buka Playground
                </Link>
            </motion.div>
        </div>
    );
}
