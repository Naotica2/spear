'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, Language } from '@/store/useAppStore';
import GlassCard from '@/components/ui/GlassCard';
import { LanguageMascot, StreakFire, BadgeIcon } from '@/components/illustrations/Mascots';
import { getSupabase } from '@/lib/supabase';

const langMeta: Record<string, { name: string; color: string }> = {
    html: { name: 'HTML', color: '#F06D5B' },
    css: { name: 'CSS', color: '#7EB8F0' },
    js: { name: 'JavaScript', color: '#F5C87A' },
    php: { name: 'PHP', color: '#9B8FE6' },
};

function ProgressRing({
    progress,
    color,
    size = 100,
    strokeWidth = 8,
    label,
    lang,
    delay = 0,
}: {
    progress: number;
    color: string;
    size?: number;
    strokeWidth?: number;
    label: string;
    lang: string;
    delay?: number;
}) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay,
            }}
        >
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="-rotate-90">
                    {/* Background circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="rgba(0,0,0,0.06)"
                        strokeWidth={strokeWidth}
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: delay + 0.2 }}
                    />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <LanguageMascot lang={lang} size={32} animate={false} />
                    <span className="text-sm font-bold" style={{ color }}>{progress}%</span>
                </div>
            </div>
            <span className="text-xs font-semibold text-text-secondary">{label}</span>
        </motion.div>
    );
}

export default function ProfilePage() {
    const { userName, setUserName, streak, streakDays, progress, badges } = useAppStore();
    const [mounted, setMounted] = useState(false);
    const [editing, setEditing] = useState(false);
    const [editName, setEditName] = useState(userName);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setEditName(userName);
    }, [userName]);

    const handleSaveName = async () => {
        if (!editName.trim()) return;
        setSaving(true);
        setUserName(editName.trim());

        // Try syncing to Supabase if configured
        try {
            const client = getSupabase();
            if (client) {
                await client
                    .from('users')
                    .upsert({ id: 'local-user', username: editName.trim() }, { onConflict: 'id' });
            }
        } catch {
            // Supabase not configured yet — data saved locally via Zustand
        }

        setSaving(false);
        setEditing(false);
    };

    if (!mounted) return null;

    const dayLabels = ['Today', 'Yesterday', '2d ago', '3d ago', '4d ago', '5d ago', '6d ago'];

    return (
        <div className="space-y-8">
            {/* Profile Header */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
                {/* Avatar SVG */}
                <motion.div
                    className="w-24 h-24 rounded-3xl glass-strong soft-shadow-lg flex items-center justify-center mx-auto mb-4 overflow-hidden"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                >
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="24" r="12" fill="#6DD5C4" />
                        <circle cx="32" cy="24" r="10" fill="#4DC0AD" />
                        <circle cx="28" cy="22" r="2" fill="white" />
                        <circle cx="36" cy="22" r="2" fill="white" />
                        <path d="M28 28 Q32 32 36 28" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <path d="M14 56 Q14 40 32 40 Q50 40 50 56" fill="#6DD5C4" />
                        <rect x="24" y="42" width="16" height="8" rx="3" fill="#4DC0AD" />
                    </svg>
                </motion.div>

                {/* Editable Name */}
                <AnimatePresence mode="wait">
                    {editing ? (
                        <motion.div
                            key="edit"
                            className="flex items-center justify-center gap-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <input
                                type="text"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                                className="text-2xl font-extrabold text-text bg-white/50 border-2 border-primary/30 rounded-xl px-4 py-1 text-center outline-none focus:border-primary transition-colors w-48"
                                autoFocus
                                maxLength={20}
                            />
                            <motion.button
                                onClick={handleSaveName}
                                className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center cursor-pointer"
                                whileTap={{ scale: 0.9 }}
                                disabled={saving}
                            >
                                {saving ? (
                                    <motion.div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12L10 17L19 7" />
                                    </svg>
                                )}
                            </motion.button>
                            <motion.button
                                onClick={() => { setEditing(false); setEditName(userName); }}
                                className="w-10 h-10 rounded-xl bg-white/50 text-text-secondary flex items-center justify-center cursor-pointer"
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M18 6L6 18M6 6L18 18" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="display"
                            className="flex items-center justify-center gap-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                        >
                            <h1 className="text-2xl font-extrabold text-text">{userName}</h1>
                            <motion.button
                                onClick={() => setEditing(true)}
                                className="w-8 h-8 rounded-lg bg-white/40 hover:bg-white/60 flex items-center justify-center cursor-pointer transition-colors"
                                whileTap={{ scale: 0.9 }}
                                title="Edit name"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                                    <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
                <p className="text-text-secondary text-sm mt-1">Keep learning, keep growing!</p>
            </motion.div>

            {/* Progress Rings */}
            <GlassCard delay={0.15}>
                <h2 className="text-lg font-bold text-text mb-6 text-center">Language Progress</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                    {(Object.keys(langMeta) as Language[]).map((langKey, i) => (
                        <ProgressRing
                            key={langKey}
                            progress={progress[langKey]?.overallProgress || 0}
                            color={langMeta[langKey].color}
                            label={langMeta[langKey].name}
                            lang={langKey}
                            delay={0.2 + i * 0.1}
                        />
                    ))}
                </div>
            </GlassCard>

            {/* Streak Tracker */}
            <GlassCard delay={0.3}>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-text flex items-center gap-2"><StreakFire size={24} days={streak} /> Streak Tracker</h2>
                    <motion.div
                        className="px-3 py-1 bg-warning/15 rounded-full text-sm font-bold text-text"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.5 }}
                    >
                        {streak} days
                    </motion.div>
                </div>

                <div className="grid grid-cols-7 gap-2">
                    {streakDays.map((active, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center gap-1"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 15,
                                delay: 0.4 + i * 0.05,
                            }}
                        >
                            <div
                                className={`
                  w-10 h-10 rounded-xl flex items-center justify-center text-lg
                  transition-all duration-300
                  ${active
                                        ? 'bg-warning/20 shadow-sm'
                                        : 'bg-white/30'
                                    }
                `}
                            >
                                {active ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2 Q16 8 13 12 Q18 10 15 18 Q14 22 12 22 Q10 22 9 18 Q6 10 11 12 Q8 8 12 2Z" fill="#F06D5B" />
                                        <path d="M12 8 Q14 12 13 15 Q12 18 11 15 Q10 12 12 8Z" fill="#F5C87A" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <rect x="4" y="4" width="16" height="16" rx="4" fill="#E2E8F0" />
                                    </svg>
                                )}
                            </div>
                            <span className="text-[9px] text-text-secondary font-medium">{dayLabels[i]}</span>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>

            {/* Badge Showcase */}
            <GlassCard delay={0.45}>
                <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="14" fill="#F5C87A" />
                        <polygon points="16,6 19,13 26,13 20,18 22,26 16,21 10,26 12,18 6,13 13,13" fill="white" />
                    </svg>
                    Badge Collection
                </h2>
                <div className="grid grid-cols-3 gap-3">
                    {badges.map((badge, i) => (
                        <motion.div
                            key={badge.id}
                            className={`
                relative p-4 rounded-2xl text-center transition-all duration-300
                ${badge.earned
                                    ? 'glass soft-shadow'
                                    : 'bg-white/20 opacity-50 grayscale'
                                }
              `}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: badge.earned ? 1 : 0.5 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                                delay: 0.5 + i * 0.06,
                            }}
                            whileHover={badge.earned ? { scale: 1.05, rotate: 3 } : undefined}
                        >
                            {/* Glow for earned badges */}
                            {badge.earned && (
                                <motion.div
                                    className="absolute inset-0 rounded-2xl"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(245,200,122,0.2), transparent 70%)',
                                    }}
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />
                            )}

                            <div className="relative z-10">
                                <div className="flex justify-center mb-1">
                                    <BadgeIcon type={badge.id} earned={badge.earned} size={40} />
                                </div>
                                <div className="text-xs font-bold text-text leading-tight">{badge.name}</div>
                                <div className="text-[10px] text-text-secondary mt-0.5 leading-tight">{badge.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}
