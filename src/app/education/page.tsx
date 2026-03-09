'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import ProgressBar from '@/components/ui/ProgressBar';
import { useAppStore } from '@/store/useAppStore';
import { useAuthStore } from '@/store/useAuthStore';
import { curriculum } from '@/data/curriculum';
import { HTMLMascot, CSSMascot, JSMascot, PHPMascot, MySQLMascot, StreakFire } from '@/components/illustrations/Mascots';
import AuthGuard from '@/components/auth/AuthGuard';
import { useT } from '@/store/useLanguageStore';
import DailyQuest from '@/components/quest/DailyQuest';
import { useIsMobile } from '@/hooks/useIsMobile';

const langColors: Record<string, string> = {
    html: '#F06D5B',
    css: '#7EB8F0',
    js: '#F5C87A',
    php: '#9B8FE6',
    mysql: '#3B82F6',
};

const langMascots: Record<string, React.FC<{ size?: number; animate?: boolean }>> = {
    html: HTMLMascot,
    css: CSSMascot,
    js: JSMascot,
    php: PHPMascot,
    mysql: MySQLMascot,
};

function EducationContent() {
    const { userName, streak, progress, failedAnswers } = useAppStore();
    const { user, logout } = useAuthStore();
    const t = useT();
    const isMobile = useIsMobile();

    return (
        <div className="space-y-8">
            {/* Top Bar */}
            <motion.div
                className="flex items-center justify-between"
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] glass soft-shadow text-sm font-medium text-text-secondary hover:text-text transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M19 12H5M12 19L5 12L12 5" />
                    </svg>
                    {t('common.backHome')}
                </Link>

                <Link
                    href="/profile"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] glass soft-shadow text-sm font-medium text-text-secondary hover:text-text transition-colors"
                >
                    <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                        {(user?.name || userName || 'L').charAt(0).toUpperCase()}
                    </div>
                    {user?.name || userName || 'Profile'}
                </Link>
            </motion.div>

            {/* Hero */}
            <motion.div
                className="text-center lg:text-left"
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
                <h1 className="text-3xl lg:text-4xl font-extrabold text-text">
                    Hello, <span className="text-gradient">{user?.name || userName}</span>!
                </h1>
                <p className="text-text-secondary mt-2 text-lg">
                    {t('edu.readyToLearn')}
                </p>

                {streak > 0 && (
                    <motion.div
                        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-warning/15 rounded-full"
                        initial={isMobile ? { scale: 1 } : { scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15, delay: isMobile ? 0 : 0.3 }}
                    >
                        <StreakFire size={28} days={streak} />
                        <span className="text-sm font-semibold text-text">{streak} {t('edu.dayStreak')}</span>
                    </motion.div>
                )}
            </motion.div>

            {/* Daily Quest */}
            <DailyQuest />

            {/* Dedicated Pet Link */}
            <Link href="/pet" className="block mb-4">
                <GlassCard hoverable className="flex items-center gap-4 py-4 px-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 21a9 9 0 0 0 9-9c0-3.5-2-6.5-5-8M12 21a9 9 0 0 1-9-9c0-3.5 2-6.5 5-8" />
                            <path d="M15 7c-2-2-4-2-6 0M10 12h.01M14 12h.01" />
                            <path d="M12 16c-.5 0-1.5-.5-1.5-1h3c0 .5-1 1-1.5 1z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-text mb-0.5">Kunjungi Companion Kamu</h3>
                        <p className="text-sm text-text-secondary">Pelihara, beri makan, dan pakaikan aksesoris!</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/50 dark:bg-slate-700/50 flex items-center justify-center text-text-secondary dark:text-slate-300">
                        →
                    </div>
                </GlassCard>
            </Link>

            {/* Official Language Cards */}
            <div className="space-y-3">
                <h2 className="text-lg font-bold text-text">{t('edu.choosePath')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.values(curriculum).map((lang, i) => {
                        const langProgress = progress[lang.id as keyof typeof progress];
                        const MascotComponent = langMascots[lang.id];
                        return (
                            <Link key={lang.id} href={`/learn/${lang.id}`}>
                                <GlassCard hoverable delay={i * 0.08} className="h-full">
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            className="shrink-0"
                                            whileHover={{ rotate: 5, scale: 1.05 }}
                                        >
                                            {MascotComponent && <MascotComponent size={56} animate={true} />}
                                        </motion.div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-lg font-bold" style={{ color: langColors[lang.id] }}>
                                                    {lang.name}
                                                </h3>
                                                <span className="text-xs text-text-secondary dark:text-slate-300 bg-white/50 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                                                    {lang.levels.length} {t('common.levels')}
                                                </span>
                                            </div>
                                            <p className="text-sm text-text-secondary mb-3">{lang.description}</p>
                                            <ProgressBar
                                                progress={langProgress?.overallProgress || 0}
                                                color={langColors[lang.id]}
                                                height={8}
                                                showLabel
                                            />
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    {
                        label: t('edu.streak'),
                        value: `${streak}`,
                        stat: 'streak' as const,
                        bg: 'rgba(245, 200, 122, 0.1)',
                    },
                    {
                        label: t('edu.completed'),
                        value: `${Object.values(progress).reduce((acc, p) => acc + Object.keys(p.completedLevels).length, 0)}`,
                        stat: 'completed' as const,
                        bg: 'rgba(140, 215, 144, 0.1)',
                    },
                    {
                        label: t('edu.languages'),
                        value: `${Object.values(progress).filter(p => Object.keys(p.completedLevels).length > 0).length}/5`,
                        stat: 'languages' as const,
                        bg: 'rgba(126, 184, 240, 0.1)',
                    },
                ].map((stat, i) => (
                    <GlassCard key={stat.label} delay={0.4 + i * 0.08}>
                        <div className="text-center">
                            <motion.div
                                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                                style={{ background: stat.bg }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            >
                                {stat.stat === 'streak' && <StreakFire size={24} days={0} />}
                                {stat.stat === 'completed' && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#8CD790" />
                                        <path d="M8 12 L11 15 L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                                {stat.stat === 'languages' && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#7EB8F0" />
                                        <circle cx="9" cy="10" r="2.5" fill="white" opacity="0.8" />
                                        <circle cx="15" cy="10" r="2.5" fill="white" opacity="0.8" />
                                        <circle cx="12" cy="16" r="2.5" fill="white" opacity="0.8" />
                                    </svg>
                                )}
                            </motion.div>
                            <div className="text-xl font-bold text-text">{stat.value}</div>
                            <div className="text-xs text-text-secondary">{stat.label}</div>
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Failed Answers Stats */}
            {(failedAnswers.html + failedAnswers.css + failedAnswers.js + failedAnswers.php + (failedAnswers.mysql || 0)) > 0 && (
                <GlassCard delay={0.55}>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-error/10 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" fill="#F06D5B" opacity="0.8" />
                                <path d="M15 9L9 15M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-bold text-text">{t('edu.failedAnswers')}</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {([
                            { key: 'html', label: 'HTML', color: '#F06D5B' },
                            { key: 'css', label: 'CSS', color: '#7EB8F0' },
                            { key: 'js', label: 'JS', color: '#F5C87A' },
                            { key: 'php', label: 'PHP', color: '#9B8FE6' },
                            { key: 'mysql', label: 'DB', color: '#3B82F6' },
                        ] as const).map((lang) => {
                            const initProps: any = isMobile ? { scale: 1 } : { scale: 0 };
                            return (
                                <motion.div
                                    key={lang.key}
                                    className="text-center p-2 rounded-xl bg-white/30 dark:bg-slate-800/50"
                                    initial={initProps}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <div className="text-lg font-bold" style={{ color: lang.color }}>
                                        {failedAnswers[lang.key] || 0}
                                    </div>
                                    <div className="text-[10px] font-semibold text-text-secondary">{lang.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </GlassCard>
            )}

            {/* Sign out link */}
            <div className="text-center pt-4">
                <button
                    onClick={() => logout()}
                    className="text-xs text-text-secondary hover:text-error transition-colors cursor-pointer"
                >
                    {t('common.signOut')}
                </button>
            </div>
        </div>
    );
}

export default function EducationPage() {
    return (
        <AuthGuard>
            <EducationContent />
        </AuthGuard>
    );
}
