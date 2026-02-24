'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import ProgressBar from '@/components/ui/ProgressBar';
import { useAppStore } from '@/store/useAppStore';
import { curriculum } from '@/data/curriculum';
import { LanguageMascot, HeroIllustration, StreakFire } from '@/components/illustrations/Mascots';

const langColors: Record<string, string> = {
  html: '#F06D5B',
  css: '#7EB8F0',
  js: '#F5C87A',
  php: '#9B8FE6',
};

const langBgColors: Record<string, string> = {
  html: 'rgba(240, 109, 91, 0.1)',
  css: 'rgba(126, 184, 240, 0.1)',
  js: 'rgba(245, 200, 122, 0.1)',
  php: 'rgba(155, 143, 230, 0.1)',
};

export default function HomePage() {
  const { userName, streak, progress } = useAppStore();

  return (
    <div className="space-y-8">
      {/* Hero */}
      <motion.div
        className="text-center lg:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
          <HeroIllustration size={160} />
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold text-text">
          Hello, <span className="text-gradient">{userName}</span>!
        </h1>
        <p className="text-text-secondary mt-2 text-lg">
          Ready to learn something new today?
        </p>

        {streak > 0 && (
          <motion.div
            className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-warning/15 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.3 }}
          >
            <StreakFire size={28} days={streak} />
            <span className="text-sm font-semibold text-text">{streak} day streak!</span>
          </motion.div>
        )}
      </motion.div>

      {/* Language Cards */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-text">Choose Your Path</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.values(curriculum).map((lang, i) => {
            const langProgress = progress[lang.id as keyof typeof progress];
            return (
              <Link key={lang.id} href={`/learn/${lang.id}`}>
                <GlassCard hoverable delay={i * 0.08} className="h-full">
                  <div className="flex items-start gap-4">
                    {/* SVG Mascot */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ background: langBgColors[lang.id] }}
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <LanguageMascot lang={lang.id} size={52} animate={false} />
                    </motion.div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold" style={{ color: langColors[lang.id] }}>
                          {lang.name}
                        </h3>
                        <span className="text-xs text-text-secondary bg-white/50 px-2 py-0.5 rounded-full">
                          {lang.levels.length} levels
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
            label: 'Streak',
            value: `${streak}`,
            stat: 'streak' as const,
            bg: 'rgba(245, 200, 122, 0.1)',
          },
          {
            label: 'Completed',
            value: `${Object.values(progress).reduce((acc, p) => acc + Object.keys(p.completedLevels).length, 0)}`,
            stat: 'completed' as const,
            bg: 'rgba(140, 215, 144, 0.1)',
          },
          {
            label: 'Languages',
            value: `${Object.values(progress).filter(p => Object.keys(p.completedLevels).length > 0).length}/4`,
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
    </div>
  );
}
