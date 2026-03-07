'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import { HTMLMascot, CSSMascot, JSMascot, PHPMascot, HeroIllustration } from '@/components/illustrations/Mascots';
import { useT } from '@/store/useLanguageStore';

export default function AboutPage() {
    const t = useT();

    const features = [
        {
            title: t('about.feature1.title'),
            description: t('about.feature1.desc'),
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="rgba(109, 213, 196, 0.15)" />
                    <path d="M10 16L14 20L22 12" stroke="#6DD5C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
        {
            title: t('about.feature2.title'),
            description: t('about.feature2.desc'),
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="rgba(126, 184, 240, 0.15)" />
                    <circle cx="16" cy="16" r="8" stroke="#7EB8F0" strokeWidth="2.5" fill="none" />
                    <path d="M16 11V16L19 19" stroke="#7EB8F0" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            title: t('about.feature3.title'),
            description: t('about.feature3.desc'),
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="rgba(245, 200, 122, 0.15)" />
                    <polygon points="16,6 19,13 26,13 20,18 22,24 16,20 10,24 12,18 6,13 13,13" fill="#F5C87A" />
                </svg>
            ),
        },
        {
            title: t('about.feature4.title'),
            description: t('about.feature4.desc'),
            icon: (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="rgba(155, 143, 230, 0.15)" />
                    <rect x="8" y="8" width="16" height="16" rx="3" stroke="#9B8FE6" strokeWidth="2" fill="none" />
                    <path d="M12 14H20M12 18H17" stroke="#9B8FE6" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
        },
    ];
    return (
        <div className="space-y-10">
            {/* Hero */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
                <div className="flex justify-center mb-4">
                    <HeroIllustration size={220} />
                </div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-text">
                    {t('about.title')} <span className="text-gradient">Spear</span>
                </h1>
                <p className="text-text-secondary mt-3 text-lg max-w-xl mx-auto leading-relaxed">
                    {t('about.desc')}
                </p>
            </motion.div>

            {/* Languages */}
            <div>
                <h2 className="text-lg font-bold text-text text-center mb-6">{t('about.langTitle')}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        { name: 'HTML', desc: 'Structure', Mascot: HTMLMascot, color: '#F06D5B' },
                        { name: 'CSS', desc: 'Styling', Mascot: CSSMascot, color: '#7EB8F0' },
                        { name: 'JavaScript', desc: 'Logic', Mascot: JSMascot, color: '#F5C87A' },
                        { name: 'PHP', desc: 'Backend', Mascot: PHPMascot, color: '#9B8FE6' },
                    ].map((lang, i) => (
                        <GlassCard key={lang.name} delay={i * 0.1} hoverable>
                            <div className="text-center">
                                <div className="flex justify-center mb-2">
                                    <lang.Mascot size={56} animate={true} />
                                </div>
                                <h3 className="font-bold" style={{ color: lang.color }}>{lang.name}</h3>
                                <p className="text-xs text-text-secondary">{lang.desc}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>

            {/* Features */}
            <div>
                <h2 className="text-lg font-bold text-text text-center mb-6">{t('about.whatMakesSpecial')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature, i) => (
                        <GlassCard key={feature.title} delay={0.3 + i * 0.1}>
                            <div className="flex items-start gap-4">
                                <div className="shrink-0">{feature.icon}</div>
                                <div>
                                    <h3 className="font-bold text-text mb-1">{feature.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <GlassCard className="inline-block">
                    <div className="text-center px-4">
                        <h3 className="text-xl font-bold text-text mb-2">{t('about.readyToStart')}</h3>
                        <p className="text-sm text-text-secondary mb-4">{t('about.pickLang')}</p>
                        <Link
                            href="/education"
                            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-[var(--radius-button)] hover:brightness-110 transition-all"
                        >
                            {t('about.goToEducation')}
                        </Link>
                    </div>
                </GlassCard>
            </motion.div>
        </div>
    );
}
