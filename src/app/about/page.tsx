'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import { HTMLMascot, CSSMascot, JSMascot, PHPMascot, HeroIllustration } from '@/components/illustrations/Mascots';

/* ===== Reusable animated section wrapper ===== */
function Section({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 24, delay }}
        >
            {children}
        </motion.section>
    );
}

/* ===== Proper SVG icons (replacing emojis) ===== */
const svgIcons = {
    gamepad: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="12" rx="3" />
            <path d="M8 6V18" opacity="0.3" />
            <circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none" />
            <path d="M6 10V14M4 12H8" />
        </svg>
    ),
    lightbulb: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(245, 200, 122, 0.15)" />
            <path d="M18 7C13 7 9 11 9 16C9 19.5 11 22.3 14 23.5V26C14 26.6 14.4 27 15 27H21C21.6 27 22 26.6 22 26V23.5C25 22.3 27 19.5 27 16C27 11 23 7 18 7Z" fill="#F5C87A" />
            <path d="M15 29H21" stroke="#E8B84D" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 31H20" stroke="#E8B84D" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="18" cy="14" r="2" fill="white" opacity="0.6" />
        </svg>
    ),
    puzzlePiece: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(109, 213, 196, 0.15)" />
            <path d="M20 10H14C12.9 10 12 10.9 12 12V15.17C12.83 14.45 14.28 14.45 15.12 15.17C15.96 15.89 15.96 17.11 15.12 17.83C14.28 18.55 12.83 18.55 12 17.83V22C12 23.1 12.9 24 14 24H17.17C16.45 23.17 16.45 21.72 17.17 20.88C17.89 20.04 19.11 20.04 19.83 20.88C20.55 21.72 20.55 23.17 19.83 24H24C25.1 24 26 23.1 26 22V18.83C26.83 19.55 28.28 19.55 29.12 18.83C29.96 18.11 29.96 16.89 29.12 16.17C28.28 15.45 26.83 15.45 26 16.17V12C26 10.9 25.1 10 24 10H20.83C21.55 10.83 21.55 12.28 20.83 13.12C20.11 13.96 18.89 13.96 18.17 13.12C17.45 12.28 17.45 10.83 18.17 10H20Z" fill="#6DD5C4" />
        </svg>
    ),
    crosshair: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(126, 184, 240, 0.15)" />
            <circle cx="18" cy="18" r="12" stroke="#7EB8F0" strokeWidth="2" fill="none" />
            <circle cx="18" cy="18" r="7" stroke="#7EB8F0" strokeWidth="2" fill="none" />
            <circle cx="18" cy="18" r="3" fill="#7EB8F0" />
        </svg>
    ),
    rocket: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(155, 143, 230, 0.15)" />
            <path d="M18 6C18 6 26 10 26 20L22 24L14 24L10 20C10 10 18 6 18 6Z" fill="#9B8FE6" />
            <circle cx="18" cy="16" r="3" fill="white" opacity="0.6" />
            <path d="M14 24L12 30L16 27" fill="#7EB8F0" />
            <path d="M22 24L24 30L20 27" fill="#7EB8F0" />
        </svg>
    ),
    trophy: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(245, 200, 122, 0.15)" />
            <path d="M12 10H24V18C24 21.3 21.3 24 18 24C14.7 24 12 21.3 12 18V10Z" fill="#F5C87A" />
            <path d="M12 12H9C9 15 10.5 17 12 17V12Z" fill="#E8B84D" opacity="0.6" />
            <path d="M24 12H27C27 15 25.5 17 24 17V12Z" fill="#E8B84D" opacity="0.6" />
            <rect x="16" y="24" width="4" height="3" fill="#E8B84D" />
            <rect x="14" y="27" width="8" height="2" rx="1" fill="#E8B84D" />
            <circle cx="18" cy="16" r="2" fill="white" opacity="0.5" />
        </svg>
    ),
    /* -- small accent SVGs for mini-cards -- */
    bolt: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill="#F5C87A" />
        </svg>
    ),
    medal: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="15" r="6" fill="#9B8FE6" />
            <path d="M9 2L12 9L15 2" stroke="#B5ABF0" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="12" cy="15" r="3" fill="#B5ABF0" opacity="0.5" />
        </svg>
    ),
    flame: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2Q16 8 14 13Q12 17 11 13Q8 8 12 2Z" fill="#F06D5B" />
            <path d="M12 7Q14 10 13 13Q12 15 11.5 13Q10 10 12 7Z" fill="#F5C87A" />
        </svg>
    ),
    /* -- feature card icons -- */
    codeInteractive: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(109, 213, 196, 0.15)" />
            <rect x="8" y="9" width="20" height="18" rx="3" fill="#6DD5C4" opacity="0.2" stroke="#6DD5C4" strokeWidth="1.5" />
            <rect x="11" y="13" width="8" height="2" rx="1" fill="#6DD5C4" />
            <rect x="11" y="17" width="12" height="2" rx="1" fill="#6DD5C4" opacity="0.6" />
            <rect x="11" y="21" width="6" height="2" rx="1" fill="#6DD5C4" opacity="0.4" />
            <path d="M24 20L28 24L24 28" stroke="#F5C87A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    playground: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(126, 184, 240, 0.15)" />
            <rect x="6" y="8" width="24" height="16" rx="3" stroke="#7EB8F0" strokeWidth="1.5" fill="none" />
            <rect x="8" y="10" width="11" height="12" rx="1" fill="#7EB8F0" opacity="0.15" />
            <rect x="21" y="10" width="7" height="12" rx="1" fill="#7EB8F0" opacity="0.1" />
            <rect x="10" y="13" width="5" height="1.5" rx="0.5" fill="#7EB8F0" />
            <rect x="10" y="16" width="7" height="1.5" rx="0.5" fill="#7EB8F0" opacity="0.5" />
            <circle cx="24.5" cy="16" r="2" fill="#8CD790" opacity="0.6" />
            <path d="M14 26H22" stroke="#7EB8F0" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="18" cy="28" r="1" fill="#7EB8F0" />
        </svg>
    ),
    gamification: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(240, 109, 91, 0.15)" />
            <path d="M18 6Q24 14 20 20Q18 24 16 20Q12 14 18 6Z" fill="#F06D5B" />
            <path d="M18 12Q21 16 19 19Q18 21 17 19Q15 16 18 12Z" fill="#F5C87A" />
            <circle cx="18" cy="18" r="10" fill="#F06D5B" opacity="0.1" />
            <rect x="12" y="27" width="12" height="3" rx="1.5" fill="#F06D5B" opacity="0.3" />
        </svg>
    ),
    calendar: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(245, 200, 122, 0.15)" />
            <rect x="8" y="10" width="20" height="18" rx="3" stroke="#F5C87A" strokeWidth="1.5" fill="none" />
            <path d="M8 15H28" stroke="#F5C87A" strokeWidth="1.5" />
            <rect x="13" y="7" width="2" height="5" rx="1" fill="#E8B84D" />
            <rect x="21" y="7" width="2" height="5" rx="1" fill="#E8B84D" />
            <circle cx="14" cy="20" r="1.5" fill="#F5C87A" />
            <circle cx="18" cy="20" r="1.5" fill="#F5C87A" opacity="0.6" />
            <circle cx="22" cy="20" r="1.5" fill="#F5C87A" opacity="0.3" />
            <circle cx="14" cy="24" r="1.5" fill="#8CD790" />
        </svg>
    ),
    bookReference: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(155, 143, 230, 0.15)" />
            <path d="M10 8C10 8 18 6 18 6V28C18 28 10 30 10 30V8Z" fill="#9B8FE6" opacity="0.3" />
            <path d="M26 8C26 8 18 6 18 6V28C18 28 26 30 26 30V8Z" fill="#9B8FE6" opacity="0.5" />
            <rect x="12" y="13" width="4" height="1.5" rx="0.5" fill="#9B8FE6" />
            <rect x="12" y="16.5" width="3" height="1.5" rx="0.5" fill="#9B8FE6" opacity="0.5" />
            <rect x="20" y="13" width="4" height="1.5" rx="0.5" fill="#9B8FE6" />
            <rect x="20" y="16.5" width="3" height="1.5" rx="0.5" fill="#9B8FE6" opacity="0.5" />
        </svg>
    ),
    sparkles: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(140, 215, 144, 0.15)" />
            <polygon points="18,6 20,14 28,14 22,19 24,27 18,22 12,27 14,19 8,14 16,14" fill="#8CD790" />
            <polygon points="18,10 19.5,15 24,15 20.5,18.5 21.5,23 18,20 14.5,23 15.5,18.5 12,15 16.5,15" fill="#A8E6A3" opacity="0.5" />
        </svg>
    ),
    /* -- advantage icons -- */
    freeTag: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(140, 215, 144, 0.15)" />
            <circle cx="18" cy="18" r="12" fill="#8CD790" />
            <text x="18" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white" fontFamily="Inter, sans-serif">$0</text>
        </svg>
    ),
    browser: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(126, 184, 240, 0.15)" />
            <rect x="6" y="8" width="24" height="20" rx="3" stroke="#7EB8F0" strokeWidth="1.5" fill="none" />
            <path d="M6 14H30" stroke="#7EB8F0" strokeWidth="1.5" />
            <circle cx="10" cy="11" r="1" fill="#F06D5B" />
            <circle cx="14" cy="11" r="1" fill="#F5C87A" />
            <circle cx="18" cy="11" r="1" fill="#8CD790" />
            <rect x="10" y="18" width="8" height="2" rx="1" fill="#7EB8F0" opacity="0.5" />
            <rect x="10" y="22" width="12" height="2" rx="1" fill="#7EB8F0" opacity="0.3" />
        </svg>
    ),
    magnet: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(240, 109, 91, 0.15)" />
            <path d="M12 10V20C12 23.3 14.7 26 18 26C21.3 26 24 23.3 24 20V10" stroke="#F06D5B" strokeWidth="3" strokeLinecap="round" fill="none" />
            <rect x="9" y="8" width="6" height="5" rx="1" fill="#F06D5B" />
            <rect x="21" y="8" width="6" height="5" rx="1" fill="#F06D5B" />
            <rect x="9" y="8" width="6" height="2" rx="1" fill="#F5897A" />
            <rect x="21" y="8" width="6" height="2" rx="1" fill="#F5897A" />
        </svg>
    ),
    diamond: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(155, 143, 230, 0.15)" />
            <polygon points="18,6 28,16 18,30 8,16" fill="#9B8FE6" />
            <polygon points="18,6 23,16 18,30" fill="#8377D4" />
            <polygon points="18,6 13,16 18,16" fill="#B5ABF0" opacity="0.5" />
        </svg>
    ),
    /* -- help section icons -- */
    handCode: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(109, 213, 196, 0.15)" />
            <path d="M14 14L10 18L14 22" stroke="#6DD5C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 14L26 18L22 22" stroke="#6DD5C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 11L16 25" stroke="#6DD5C4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        </svg>
    ),
    clockRepeat: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(245, 200, 122, 0.15)" />
            <circle cx="18" cy="18" r="10" stroke="#F5C87A" strokeWidth="2" fill="none" />
            <path d="M18 12V18L22 22" stroke="#E8B84D" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="18" r="1.5" fill="#E8B84D" />
            <path d="M26 10L28 8M28 8L30 10M28 8V12" stroke="#F5C87A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    blocks: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(126, 184, 240, 0.15)" />
            <rect x="7" y="8" width="9" height="9" rx="2" fill="#7EB8F0" />
            <rect x="19" y="8" width="9" height="9" rx="2" fill="#7EB8F0" opacity="0.7" />
            <rect x="7" y="20" width="9" height="9" rx="2" fill="#7EB8F0" opacity="0.5" />
            <rect x="19" y="20" width="9" height="9" rx="2" fill="#7EB8F0" opacity="0.3" />
        </svg>
    ),
    badgeCheck: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="rgba(140, 215, 144, 0.15)" />
            <circle cx="18" cy="16" r="10" fill="#8CD790" />
            <path d="M14 16L17 19L22 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="18" y="31" textAnchor="middle" fontSize="7" fill="#8CD790" fontWeight="bold" fontFamily="Inter, sans-serif">XP</text>
        </svg>
    ),
    /* -- CTA icons -- */
    rocketLaunch: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 4C20 4 30 9 30 22L25 27H15L10 22C10 9 20 4 20 4Z" fill="var(--color-primary)" />
            <circle cx="20" cy="17" r="3.5" fill="white" opacity="0.5" />
            <path d="M15 27L12 34L17 30" fill="var(--color-accent)" opacity="0.6" />
            <path d="M25 27L28 34L23 30" fill="var(--color-accent)" opacity="0.6" />
            <motion.path d="M17 31Q20 38 23 31" stroke="#F5C87A" strokeWidth="2" fill="none" strokeLinecap="round" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} />
        </svg>
    ),
    bookOpen: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3H8C10.2 3 12 4.8 12 7V21C12 19.3 10.7 18 9 18H2V3Z" />
            <path d="M22 3H16C13.8 3 12 4.8 12 7V21C12 19.3 13.3 18 15 18H22V3Z" />
        </svg>
    ),
    zap: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
        </svg>
    ),
};

/* ===== Feature items data (Indonesian body, English titles) ===== */
const featureItems = [
    {
        title: 'Interactive Learning Materials',
        desc: 'Ada materi HTML, CSS, JavaScript, dan PHP. Belajarnya seru karena ada kuis, isi titik-titik, sampai sistem drag & drop yang bikin kamu nggak cuma baca doang tapi langsung nyoba sendiri.',
        icon: svgIcons.codeInteractive,
        color: '#6DD5C4',
    },
    {
        title: 'Live Playground',
        desc: 'Tempat kamu ngetik kode dan hasilnya langsung muncul real-time di sebelahnya. Nggak perlu install apa-apa, langsung gas!',
        icon: svgIcons.playground,
        color: '#7EB8F0',
    },
    {
        title: 'Gamification System',
        desc: 'Di profil kamu ada tracker progres, badge yang bisa dikumpulin, rank, dan Streak harian. Belajar beneran berasa main game.',
        icon: svgIcons.gamification,
        color: '#F06D5B',
    },
    {
        title: 'Daily Quests',
        desc: 'Misi harian yang ganti tiap hari. Bikin kamu semangat balik dan coding terus setiap hari, walau cuma 15 menit.',
        icon: svgIcons.calendar,
        color: '#F5C87A',
    },
    {
        title: 'Documentation',
        desc: 'Anggap aja kayak contekan pintar. Ensiklopedia lengkap yang bisa kamu buka kapan aja kalau lupa sintaks kode tertentu.',
        icon: svgIcons.bookReference,
        color: '#9B8FE6',
    },
    {
        title: 'Language Mascots',
        desc: 'Setiap bahasa punya maskot jagoannya masing-masing. Bikin suasana belajar jadi lebih hidup dan nggak kaku!',
        icon: svgIcons.sparkles,
        color: '#8CD790',
    },
];

const advantageItems = [
    {
        title: '100% Free',
        desc: 'Nggak ada fitur yang dikunci pakai bayaran. Semua terbuka, semua bisa diakses dari awal.',
        icon: svgIcons.freeTag,
    },
    {
        title: 'Zero Setup',
        desc: 'Modal browser sama internet doang. Nggak usah repot install code editor atau software tambahan.',
        icon: svgIcons.browser,
    },
    {
        title: 'Positively Addictive',
        desc: 'Fitur Streak dan Badge bikin kamu nggak mau berhenti. Masa udah 5 hari berturut-turut belajar terus mau putus di hari ke-6? Pasti sayang banget kan.',
        icon: svgIcons.magnet,
    },
    {
        title: 'Premium UI/UX',
        desc: 'Tampilannya nggak murahan. Animasinya halus, enak di mata, dan user beneran ngerasa eksklusif pas makenya.',
        icon: svgIcons.diamond,
    },
];

const helpItems = [
    {
        title: 'Hands-on Practice',
        desc: 'Di sini kamu belajar dari nyoba, bukan dari baca doang. Kalau salah ya langsung ketahuan salahnya di mana, jadi cepet paham.',
        icon: svgIcons.handCode,
    },
    {
        title: 'Building Habits',
        desc: 'Coding butuh konsistensi. Daily Quest dan Streak bantu kamu biasain diri coding tiap hari, walau cuma 15 menit.',
        icon: svgIcons.clockRepeat,
    },
    {
        title: 'Bite-sized Materials',
        desc: 'Materi dipecah jadi kecil-kecil supaya otakmu nggak overwhelmed duluan liat baris kode panjang.',
        icon: svgIcons.blocks,
    },
    {
        title: 'Giving Validation',
        desc: 'Tiap selesai ngerjain sesuatu, kamu dapet XP dan Badge. Jadi ngerasa "eh ternyata gue bisa juga ya" dan makin pede buat lanjut.',
        icon: svgIcons.badgeCheck,
    },
];

export default function AboutPage() {
    return (
        <div className="space-y-16 pb-8">

            {/* ===== HERO ===== */}
            <motion.div
                className="text-center pt-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
                <div className="flex justify-center mb-6">
                    <HeroIllustration size={200} />
                </div>

                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
                    style={{ background: 'rgba(109, 213, 196, 0.12)', color: '#6DD5C4' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="flex items-center">{svgIcons.gamepad}</span>
                    Learn to Code Like Playing a Game
                </motion.div>

                <h1 className="text-3xl lg:text-5xl font-extrabold text-text leading-tight">
                    Get to Know{' '}
                    <span className="text-gradient">Spear</span>
                    {' '}Better
                </h1>
                <p className="text-text-secondary mt-4 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                    Platform belajar web development yang santai, nggak ngebosenin, dan berasa kayak main game. Gratis, tanpa ribet, tinggal gas aja!
                </p>
            </motion.div>


            {/* ===== SECTION 1: THE IDEA ===== */}
            <Section>
                <div className="flex items-start gap-4 mb-6">
                    {svgIcons.lightbulb}
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-text">
                            The Idea Behind Spear
                        </h2>
                        <p className="text-text-secondary text-sm mt-1">
                            Why was this platform created?
                        </p>
                    </div>
                </div>
                <GlassCard>
                    <p className="text-text leading-relaxed text-[15px]">
                        Idenya sebenernya simpel. Kita pengen bikin tempat buat belajar coding, khususnya Web Development, yang nggak bikin pusing dan nggak bikin ngantuk. Soalnya kan biasanya belajar coding tuh identik sama baca teks panjang-panjang yang bikin mata capek. Nah di Spear, kita bikin belajarnya tuh berasa kayak main game aja. Seru, ada tantangannya, dan bikin kamu pengen terus lanjut.
                    </p>
                </GlassCard>
            </Section>


            {/* ===== SECTION 2: THE CONCEPT ===== */}
            <Section delay={0.05}>
                <div className="flex items-start gap-4 mb-6">
                    {svgIcons.puzzlePiece}
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-text">
                            Concept: Learn by Doing & Gamification
                        </h2>
                        <p className="text-text-secondary text-sm mt-1">
                            Not just reading, but actually doing
                        </p>
                    </div>
                </div>
                <GlassCard>
                    <p className="text-text leading-relaxed text-[15px]">
                        Di sini kamu nggak cuma disuruh baca teori, tapi langsung nyoba sendiri. Terus biar makin betah, kita tambahin elemen-elemen game. Ada sistem Experience Points (XP) buat ngukur progress kamu, Badge yang bisa dikumpulin tiap kali kamu ngelakuin sesuatu keren, level yang naik seiring kamu belajar, plus Streaks buat jaga semangat coding tiap hari. Oh iya, tampilannya juga kita bikin modern dan tiap bahasa punya maskot lucu biar belajarnya makin asik.
                    </p>
                </GlassCard>

                {/* XP / Badge / Streak mini cards */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                    {[
                        { label: 'XP System', svg: svgIcons.bolt, color: '#F5C87A', bg: 'rgba(245,200,122,0.1)' },
                        { label: 'Badges', svg: svgIcons.medal, color: '#9B8FE6', bg: 'rgba(155,143,230,0.1)' },
                        { label: 'Streaks', svg: svgIcons.flame, color: '#F06D5B', bg: 'rgba(240,109,91,0.1)' },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            className="rounded-2xl p-4 text-center flex flex-col items-center gap-1.5"
                            style={{ background: item.bg, border: `1px solid ${item.color}22` }}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                        >
                            <div className="flex justify-center">{item.svg}</div>
                            <div className="text-xs font-bold" style={{ color: item.color }}>{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>


            {/* ===== SECTION 3: OUR GOAL ===== */}
            <Section delay={0.05}>
                <div className="flex items-start gap-4 mb-6">
                    {svgIcons.crosshair}
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-text">
                            Our Goal
                        </h2>
                        <p className="text-text-secondary text-sm mt-1">
                            Why this matters
                        </p>
                    </div>
                </div>
                <GlassCard>
                    <p className="text-text leading-relaxed text-[15px]">
                        Tujuan kita simpel: ngasih akses belajar coding yang beneran gratis, gampang dimulainya, tapi tetep seru. Soalnya banyak banget orang yang nyerah di awal gara-gara ribet harus install ini-itu. Nah, Spear ngehilangin semua keribetan itu. Tinggal buka browser, bikin akun, terus langsung bisa mulai coding. Nggak perlu setup apa-apa. Sesimpel itu.
                    </p>
                </GlassCard>

                {/* Highlight stats */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                    {[
                        { value: '100%', label: 'Gratis', color: '#8CD790' },
                        { value: '0', label: 'Setup', color: '#7EB8F0' },
                        { value: '∞', label: 'Akses', color: '#9B8FE6' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="glass rounded-2xl p-4 text-center soft-shadow"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                        >
                            <div className="text-2xl font-extrabold" style={{ color: stat.color }}>{stat.value}</div>
                            <div className="text-xs text-text-secondary mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>


            {/* ===== SECTION 4: WHAT'S INSIDE ===== */}
            <Section delay={0.05}>
                <div className="flex items-start gap-4 mb-6">
                    {svgIcons.rocket}
                    <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-text">
                            What&apos;s Inside Spear?
                        </h2>
                        <p className="text-text-secondary text-sm mt-1">
                            Everything you need to learn from zero
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {featureItems.map((item, i) => (
                        <GlassCard key={item.title} delay={i * 0.08} hoverable>
                            <div className="flex items-start gap-3">
                                <div className="shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="font-bold text-text mb-1 text-[15px]">{item.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </Section>


            {/* ===== SECTION 4.5: MASCOTS ===== */}
            <Section delay={0.05}>
                <h2 className="text-lg font-bold text-text text-center mb-2">
                    Meet the Mascots
                </h2>
                <p className="text-sm text-text-secondary text-center mb-6">
                    Tiap bahasa punya jagoan masing-masing
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        { name: 'HTML', desc: 'Structure', Mascot: HTMLMascot, color: '#F06D5B', tagline: 'The Builder' },
                        { name: 'CSS', desc: 'Styling', Mascot: CSSMascot, color: '#7EB8F0', tagline: 'The Styling' },
                        { name: 'JavaScript', desc: 'Logic', Mascot: JSMascot, color: '#F5C87A', tagline: 'The Logic' },
                        { name: 'PHP', desc: 'Backend', Mascot: PHPMascot, color: '#9B8FE6', tagline: 'The Backend' },
                    ].map((lang, i) => (
                        <GlassCard key={lang.name} delay={i * 0.1} hoverable>
                            <div className="text-center">
                                <div className="flex justify-center mb-3">
                                    <lang.Mascot size={64} animate={true} />
                                </div>
                                <h3 className="font-bold text-[15px]" style={{ color: lang.color }}>{lang.name}</h3>
                                <p className="text-[11px] text-text-secondary italic">{lang.tagline}</p>
                                <div
                                    className="mt-2 inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                                    style={{ background: `${lang.color}18`, color: lang.color }}
                                >
                                    {lang.desc}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </Section>


            {/* ===== SECTION 5: WHY SPEAR ===== */}
            <Section delay={0.05}>
                <div className="text-center mb-8">
                    <h2 className="text-xl lg:text-2xl font-bold text-text">
                        Why Choose <span className="text-gradient">Spear</span>?
                    </h2>
                    <p className="text-text-secondary text-sm mt-2">
                        Yang bikin kita beda dari platform lain
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {advantageItems.map((item, i) => (
                        <GlassCard key={item.title} delay={i * 0.08} hoverable>
                            <div className="flex items-start gap-3">
                                <div className="shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="font-bold text-text mb-1 text-[15px]">{item.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </Section>


            {/* ===== SECTION 6: HOW IT HELPS ===== */}
            <Section delay={0.05}>
                <div className="text-center mb-8">
                    <h2 className="text-xl lg:text-2xl font-bold text-text">
                        How Spear Helps You <span className="text-gradient">Learn</span>
                    </h2>
                    <p className="text-text-secondary text-sm mt-2">
                        Bukan sekadar platform, tapi teman belajar kamu
                    </p>
                </div>

                <div className="space-y-4">
                    {helpItems.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: 'spring', stiffness: 260, damping: 24, delay: i * 0.1 }}
                        >
                            <GlassCard hoverable>
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 mt-0.5">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                                             style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}>
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            {item.icon}
                                            <h3 className="font-bold text-text text-[15px]">{item.title}</h3>
                                        </div>
                                        <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </Section>


            {/* ===== CTA ===== */}
            <Section delay={0.05}>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                    <GlassCard>
                        <div className="py-4 px-2">
                            <div className="flex justify-center mb-4">
                                {svgIcons.rocketLaunch}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-extrabold text-text mb-2">
                                Ready to Start?
                            </h3>
                            <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto leading-relaxed">
                                Nggak perlu install apa-apa, nggak perlu bayar. Tinggal buka, daftar, terus langsung mulai coding. Gampang banget kan.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link
                                    href="/education"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white font-bold rounded-[var(--radius-button)] hover:brightness-110 transition-all text-sm"
                                >
                                    <span className="flex items-center">{svgIcons.bookOpen}</span>
                                    Mulai Belajar Sekarang
                                </Link>
                                <Link
                                    href="/playground"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 glass font-semibold rounded-[var(--radius-button)] hover:brightness-105 transition-all text-sm text-text"
                                >
                                    <span className="flex items-center">{svgIcons.zap}</span>
                                    Coba Playground
                                </Link>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </Section>

        </div>
    );
}
