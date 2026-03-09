'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { getLanguageById } from '@/data/docs-data';
import DocsSidebar from '@/components/docs/DocsSidebar';
import { HTMLMascot, CSSMascot, JSMascot, PHPMascot, MySQLMascot } from '@/components/illustrations/Mascots';

const mascotMap: Record<string, React.FC<{ size?: number; animate?: boolean }>> = {
    html: HTMLMascot,
    css: CSSMascot,
    js: JSMascot,
    php: PHPMascot,
    mysql: MySQLMascot,
};

export default function DocsLangPage() {
    const params = useParams();
    const langId = params.lang as string;
    const lang = getLanguageById(langId);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (!lang) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold text-text mb-2">Language not found</h1>
                <Link href="/docs" className="text-primary hover:underline">← Back to Docs</Link>
            </div>
        );
    }

    return (
        <div className="py-8 flex gap-8">
            <DocsSidebar currentLang={langId} mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 min-w-0">
                {/* Mobile sidebar toggle */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden mb-4 flex items-center gap-2 px-3 py-2 glass rounded-xl text-sm font-medium text-text-secondary cursor-pointer"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    Navigation
                </button>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-2 mb-4 text-sm text-text-secondary">
                        <Link href="/docs" className="hover:text-text transition-colors">Docs</Link>
                        <span>/</span>
                        <span style={{ color: lang.color }} className="font-medium">{lang.name}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-14 h-14 flex items-center justify-center shrink-0">
                            {mascotMap[langId] && React.createElement(mascotMap[langId], { size: 56, animate: false })}
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-text">{lang.name}</h1>
                            <p className="text-sm text-text-secondary">{lang.description}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {lang.topics.map((topic, i) => (
                        <motion.div
                            key={topic.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Link href={`/docs/${langId}/${topic.id}`}>
                                <div className="glass rounded-[var(--radius-card)] p-5 soft-shadow hover:soft-shadow-lg transition-all duration-200 group cursor-pointer h-full">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                                            style={{ background: lang.color }}
                                        >
                                            {i + 1}
                                        </div>
                                        <h3 className="font-bold text-text group-hover:text-gradient transition-all">{topic.title}</h3>
                                    </div>
                                    <p className="text-xs text-text-secondary">{topic.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
