'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { curriculum } from '@/data/curriculum';
import { useAppStore, Language } from '@/store/useAppStore';
import GlassCard from '@/components/ui/GlassCard';
import ProgressBar from '@/components/ui/ProgressBar';
import { LanguageMascot } from '@/components/illustrations/Mascots';
import AuthGuard from '@/components/auth/AuthGuard';

const langColors: Record<string, string> = {
    html: '#F06D5B',
    css: '#7EB8F0',
    js: '#F5C87A',
    php: '#9B8FE6',
};

function LearningPathContent() {
    const params = useParams();
    const router = useRouter();
    const lang = params.lang as string;
    const langData = curriculum[lang];
    const { progress } = useAppStore();

    if (!langData) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">Language not found</h2>
                <Link href="/education" className="text-primary mt-4 inline-block">← Go back</Link>
            </div>
        );
    }

    const langProgress = progress[lang as Language];
    const color = langColors[lang] || 'var(--color-primary)';

    return (
        <div className="space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
                <button
                    onClick={() => router.push('/education')}
                    className="text-text-secondary hover:text-text mb-4 flex items-center gap-2 cursor-pointer text-sm font-medium"
                >
                    ← Back to Education
                </button>

                <div className="flex items-center gap-4 mb-4">
                    <LanguageMascot lang={lang} size={64} />
                    <div>
                        <h1 className="text-3xl font-extrabold" style={{ color }}>
                            {langData.name}
                        </h1>
                        <p className="text-text-secondary">{langData.description}</p>
                    </div>
                </div>

                <ProgressBar
                    progress={langProgress?.overallProgress || 0}
                    color={color}
                    height={10}
                    showLabel
                />
            </motion.div>

            {/* Level Path */}
            <div className="relative">
                {/* Connecting line */}
                <div
                    className="absolute left-7 top-0 bottom-0 w-0.5 hidden sm:block"
                    style={{ background: `${color}30` }}
                />

                <div className="space-y-4">
                    {langData.levels.map((level, i) => {
                        const levelProgress = langProgress?.completedLevels[level.id];
                        const isCompleted = levelProgress?.completed;
                        const score = levelProgress?.score;

                        return (
                            <Link key={level.id} href={`/learn/${lang}/${level.id}`}>
                                <motion.div
                                    className="relative"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 24,
                                        delay: i * 0.1,
                                    }}
                                >
                                    {/* Level dot */}
                                    <motion.div
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-3 z-10 hidden sm:flex items-center justify-center"
                                        style={{
                                            borderColor: color,
                                            background: isCompleted ? color : 'var(--color-bg)',
                                        }}
                                        whileHover={{ scale: 1.3 }}
                                    >
                                        {isCompleted && (
                                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                                                <path d="M4 8 L7 11 L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </motion.div>

                                    {/* Card */}
                                    <GlassCard
                                        hoverable
                                        className="sm:ml-14"
                                        delay={i * 0.1}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span
                                                        className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                                                        style={{ background: color }}
                                                    >
                                                        Level {i + 1}
                                                    </span>
                                                    {isCompleted && (
                                                        <span className="text-xs text-success font-medium">✓ Complete</span>
                                                    )}
                                                </div>
                                                <h3 className="text-lg font-bold text-text">{level.title}</h3>
                                                <p className="text-sm text-text-secondary">{level.description}</p>
                                                {score !== undefined && (
                                                    <div className="mt-2">
                                                        <ProgressBar progress={score} color={color} height={6} />
                                                    </div>
                                                )}
                                            </div>

                                            <motion.div
                                                className="text-2xl ml-4"
                                                whileHover={{ x: 4 }}
                                            >
                                                →
                                            </motion.div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function LearningPathPage() {
    return (
        <AuthGuard>
            <LearningPathContent />
        </AuthGuard>
    );
}
