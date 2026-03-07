'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePetStore, PetType } from '@/store/usePetStore';
import { sfx } from '@/lib/sfx';
import AuthGuard from '@/components/auth/AuthGuard';
import GlassCard from '@/components/ui/GlassCard';
import { PetMascot, PetExpression } from '@/components/illustrations/PetCharacters';
import { Sparkles, Moon, Sun } from 'lucide-react';
import PetSelection from '@/components/pet/PetSelection';

const ACCESSORY_LIST = [
    {
        id: 'glasses',
        name: 'Kacamata Keren',
        icon: () => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M4 12h16M7 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12l2-4m16 4l-2-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        color: '#7EB8F0'
    },
    {
        id: 'hat',
        name: 'Topi Sihir',
        icon: () => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M12 4l-4 10h8l-4-10z" fill="currentColor" opacity="0.8" />
                <path d="M5 14h14v2H5v-2z" fill="currentColor" />
                <path d="M12 2l-5 12h10L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
                <path d="M4 14h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        color: '#9B8FE6'
    },
    {
        id: 'tie',
        name: 'Dasi Kupu-kupu',
        icon: () => (
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M12 12l-5-4v8l5-4zm0 0l5-4v8l-5-4z" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="white" />
            </svg>
        ),
        color: '#F06D5B'
    },
];

function PetContent() {
    const { selectedPet, petXP, getPetStage, equippedAccessories, toggleAccessory, showWanderingPet, setShowWanderingPet } = usePetStore();
    const [isSleeping, setIsSleeping] = useState(false);
    const [hearts, setHearts] = useState<{ id: number, x: number }[]>([]);
    const [petMessage, setPetMessage] = useState<string | null>(null);
    const [expression, setExpression] = useState<PetExpression>('idle');

    // Time Check Logic (WIB / UTC+7)
    useEffect(() => {
        const checkTimeWIB = () => {
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const wibDate = new Date(utc + (3600000 * 7));
            const hours = wibDate.getHours();

            if (hours >= 22 || hours < 6) {
                setIsSleeping(true);
            } else {
                setIsSleeping(false);
            }
        };

        checkTimeWIB();
        const interval = setInterval(checkTimeWIB, 60000);
        return () => clearInterval(interval);
    }, []);

    // Random boredom if idle for 15 seconds
    useEffect(() => {
        if (isSleeping || expression !== 'idle') return;
        const timer = setTimeout(() => {
            const random = Math.random();
            if (random > 0.6) {
                setExpression('bored');
                setPetMessage('Hoaaamm...');
            }
        }, 15000);
        return () => clearTimeout(timer);
    }, [isSleeping, expression]);

    const interactPet = (action: 'feed' | 'play' | 'scold' | 'pet') => {
        if (isSleeping) return;

        if (action === 'pet') {
            sfx.petHappy();
            const uniqueId = Date.now() + Math.random();
            setHearts(prev => [...prev, { id: uniqueId, x: Math.random() * 40 - 20 }]);
            setPetMessage('❤️');
            setExpression('happy');
            setTimeout(() => setHearts(prev => prev.slice(1)), 1500);
        } else if (action === 'feed') {
            sfx.petHappy();
            setPetMessage('Nyam nyam! Enak!');
            setExpression('happy');
        } else if (action === 'play') {
            sfx.petHappy();
            setPetMessage('Yeyy! Main!!');
            setExpression('happy');
        } else if (action === 'scold') {
            const isAngry = Math.random() > 0.5;
            setExpression(isAngry ? 'angry' : 'sad');
            setPetMessage(isAngry ? 'Hmph!! Jangan marah!' : 'Maaf...');
        }

        // Reset back to idle after 4 seconds
        setTimeout(() => {
            setPetMessage(null);
            setExpression('idle');
        }, 4000);
    };

    if (!selectedPet) {
        return (
            <div className="max-w-2xl mx-auto space-y-6">
                <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link
                        href="/education"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] glass soft-shadow text-sm font-medium text-text-secondary hover:text-text transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M19 12H5M12 19L5 12L12 5" />
                        </svg>
                        Back to Education
                    </Link>
                </motion.div>

                <PetSelection />
            </div>
        );
    }

    const stage = getPetStage();

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            {/* Header / Nav */}
            <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Link
                    href="/education"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] glass soft-shadow text-sm font-medium text-text-secondary hover:text-text transition-colors"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M19 12H5M12 19L5 12L12 5" />
                    </svg>
                    Back to Education
                </Link>

                <div className="flex gap-2">
                    {/* Wandering Pet Toggle */}
                    <div className="px-4 py-2 glass rounded-full text-sm font-bold flex items-center gap-2 text-text-secondary cursor-pointer hover:bg-white/40 transition-colors" onClick={() => setShowWanderingPet(!showWanderingPet)}>
                        <span className="hidden sm:inline">Pet Berkeliaran</span>
                        <div
                            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${showWanderingPet ? 'bg-primary' : 'bg-slate-300'}`}
                        >
                            <span
                                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${showWanderingPet ? 'translate-x-5' : 'translate-x-1'}`}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Pet Environment Area */}
            <motion.div
                className={`relative rounded-3xl overflow-hidden transition-colors duration-1000 ${isSleeping ? 'bg-indigo-950 shadow-[0_0_50px_rgba(30,27,75,0.8)_inset]' : 'bg-sky-100/50 glass shadow-[0_0_50px_rgba(255,255,255,0.5)_inset]'
                    }`}
                style={{ height: '350px' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                {/* Environment Decor */}
                {isSleeping && (
                    <motion.div
                        className="absolute top-8 left-8 text-yellow-100 opacity-60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 2 }}
                    >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21A9 9 0 1 1 21 12A8.995 8.995 0 0 0 12 21Z" />
                        </svg>
                    </motion.div>
                )}

                {/* Stars/Clouds */}
                <div className="absolute top-10 right-10 flex gap-4 opacity-50">
                    <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} className={`w-16 h-4 rounded-full ${isSleeping ? 'bg-indigo-800' : 'bg-white'}`} />
                    <motion.div animate={{ x: [10, -10, 10] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} className={`w-24 h-5 rounded-full mt-4 ${isSleeping ? 'bg-indigo-800' : 'bg-white'}`} />
                </div>

                {/* Main Ground */}
                <div className={`absolute bottom-0 left-0 w-full h-32 transition-colors duration-1000 ${isSleeping ? 'bg-indigo-900 border-t border-indigo-800' : 'bg-emerald-100 border-t border-emerald-200'
                    }`} />

                {/* Interactive Pet */}
                <div className="absolute inset-x-0 bottom-10 flex flex-col justify-end items-center cursor-pointer group" onClick={() => interactPet('pet')}>
                    {/* Floating Hearts */}
                    <AnimatePresence>
                        {hearts.map(heart => (
                            <motion.div
                                key={heart.id}
                                className="absolute pointer-events-none z-20 text-error"
                                initial={{ opacity: 0, y: 0, scale: 0.5, x: heart.x }}
                                animate={{ opacity: [0, 1, 0], y: -80, scale: [0.5, 1.2, 1] }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <AnimatePresence>
                        {petMessage && (
                            <motion.div
                                className="absolute bottom-[220px] pointer-events-none z-30"
                                initial={{ opacity: 0, y: 10, scale: 0.5 }}
                                animate={{ opacity: [0, 1, 1, 0], y: -15, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 2.5, times: [0, 0.1, 0.9, 1] }}
                            >
                                {petMessage === '❤️' ? (
                                    <span className="text-4xl filter drop-shadow-md">❤️</span>
                                ) : (
                                    <div className="glass-strong text-text font-bold text-sm md:text-base px-5 py-3 rounded-2xl soft-shadow text-center relative max-w-[200px]">
                                        {petMessage}
                                        {/* Tail */}
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white/80 filter drop-shadow-sm" />
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div whileHover={isSleeping ? undefined : { scale: 1.05 }} whileTap={isSleeping ? undefined : { scale: 0.95 }}>
                        <PetMascot
                            pet={selectedPet}
                            stage={stage}
                            size={160}
                            isSleeping={isSleeping}
                            expression={expression}
                            accessories={equippedAccessories}
                        />
                    </motion.div>

                    {/* Shadow underneath */}
                    <motion.div
                        className="w-24 h-4 rounded-[100%] bg-black/20 mt-1 blur-sm"
                        animate={isSleeping ? { scaleX: [1, 0.9, 1] } : { scaleX: [1, 1.1, 1], opacity: [0.2, 0.1, 0.2] }}
                        transition={{ duration: isSleeping ? 4 : 2.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>

            {/* Info and Shop/Wardrobe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Interactions */}
                <GlassCard>
                    <h3 className="text-lg font-bold text-text mb-4">Interaksi</h3>
                    <div className="flex gap-3">
                        <button onClick={() => interactPet('feed')} className="flex-1 py-3 px-4 glass rounded-xl hover:bg-white/40 transition-colors font-semibold text-text text-sm">
                            Beri Makan
                        </button>
                        <button onClick={() => interactPet('play')} className="flex-1 py-3 px-4 glass rounded-xl hover:bg-white/40 transition-colors font-semibold text-text text-sm">
                            Ajak Main
                        </button>
                        <button onClick={() => interactPet('scold')} className="flex-1 py-3 px-4 glass rounded-xl hover:bg-white/40 border border-error/20 transition-colors font-semibold text-error text-sm">
                            Tegur
                        </button>
                    </div>
                </GlassCard>

                {/* Stars/XP (Moved from a separate stat block) */}
                <GlassCard>
                    <h3 className="text-lg font-bold text-text mb-4">Status Pertumbuhan</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-text-secondary font-medium">Pengalaman (XP)</span>
                                <span className="font-bold text-primary">{petXP} XP</span>
                            </div>
                            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                                <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${Math.min(100, (petXP / 500) * 100)}%` }} />
                            </div>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-text-secondary font-medium">Tahap Pertumbuhan</span>
                            <span className="font-bold capitalize text-primary">{stage}</span>
                        </div>
                    </div>
                </GlassCard>

                {/* Accessories Wardrobe */}
                <GlassCard className="md:col-span-2">
                    <h3 className="text-lg font-bold text-text mb-4">Lemari Aksesoris</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {ACCESSORY_LIST.map((acc) => {
                            const isEquipped = equippedAccessories.includes(acc.id);
                            return (
                                <button
                                    key={acc.id}
                                    onClick={() => toggleAccessory(acc.id)}
                                    className={`relative p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 cursor-pointer ${isEquipped
                                        ? 'border-primary bg-primary/10'
                                        : 'border-transparent bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700'
                                        }`}
                                >
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                                        style={{ background: acc.color }}
                                    >
                                        <acc.icon />
                                    </div>
                                    <span className="text-xs font-bold text-text text-center">{acc.name}</span>

                                    {isEquipped && (
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                                                <path d="M20 6L9 17L4 12" />
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}

export default function PetPage() {
    return (
        <AuthGuard>
            <PetContent />
        </AuthGuard>
    );
}
