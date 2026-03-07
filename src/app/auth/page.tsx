'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import SpearLogo from '@/components/ui/SpearLogo';

export default function AuthPage() {
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const { login, register, isLoading, error, clearError, isLoggedIn } = useAuthStore();

    useEffect(() => {
        if (isLoggedIn) {
            router.replace('/education');
        }
    }, [isLoggedIn, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();

        if (mode === 'login') {
            const success = await login(email, password);
            if (success) router.push('/education');
        } else {
            if (!name.trim()) return;
            const success = await register(name.trim(), email, password);
            if (success) router.push('/education');
        }
    };

    return (
        <div className="min-h-[100dvh] flex items-center justify-center px-4 py-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            <motion.div
                className="w-full max-w-md relative z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
                {/* Logo */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 400, damping: 20 }}
                >
                    <div className="inline-flex items-center gap-3 mb-3">
                        <SpearLogo size={44} gradientId="logoGrad" />
                        <h1 className="text-3xl font-extrabold text-gradient">Spear</h1>
                    </div>
                    <p className="text-text-secondary text-sm">Master web development, one lesson at a time</p>
                </motion.div>

                {/* Card */}
                <motion.div
                    className="glass-strong rounded-[var(--radius-card)] p-8 soft-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
                >
                    {/* Tab Switch */}
                    <div className="flex glass rounded-[var(--radius-button)] p-1 mb-8">
                        {(['login', 'register'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => { setMode(tab); clearError(); }}
                                className={`flex-1 py-2.5 rounded-[12px] text-sm font-semibold transition-all duration-300 cursor-pointer ${mode === tab
                                    ? 'bg-white dark:bg-slate-700 text-text shadow-sm'
                                    : 'text-text-secondary hover:text-text'
                                    }`}
                            >
                                {tab === 'login' ? 'Sign In' : 'Sign Up'}
                            </button>
                        ))}
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                className="mb-4 p-3 rounded-xl bg-error/10 border border-error/20 text-error text-sm"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AnimatePresence mode="wait">
                            {mode === 'register' && (
                                <motion.div
                                    key="name-field"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label className="block text-sm font-semibold text-text mb-1.5">Full Name</label>
                                    <div className="relative">
                                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <circle cx="12" cy="8" r="4" />
                                            <path d="M4 21v-1a6 6 0 0112 0v1" />
                                        </svg>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your name"
                                            className="w-full pl-10 pr-4 py-3 rounded-[var(--radius-button)] glass border-2 border-transparent focus:border-primary/40 text-text placeholder:text-text-secondary/50 outline-none transition-all text-sm"
                                            required
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div>
                            <label className="block text-sm font-semibold text-text mb-1.5">Email</label>
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <rect x="2" y="4" width="20" height="16" rx="3" />
                                    <path d="M22 7L12 14L2 7" />
                                </svg>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-[var(--radius-button)] glass border-2 border-transparent focus:border-primary/40 text-text placeholder:text-text-secondary/50 outline-none transition-all text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-text mb-1.5">Password</label>
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <rect x="3" y="11" width="18" height="11" rx="3" />
                                    <path d="M7 11V7a5 5 0 0110 0v4" />
                                </svg>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-3 rounded-[var(--radius-button)] glass border-2 border-transparent focus:border-primary/40 text-text placeholder:text-text-secondary/50 outline-none transition-all text-sm"
                                    required
                                    minLength={6}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text transition-colors cursor-pointer"
                                >
                                    {showPassword ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                                            <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 rounded-[var(--radius-button)] font-semibold text-white text-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #6DD5C4, #7EB8F0)',
                            }}
                            whileTap={{ scale: 0.98 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            {isLoading ? (
                                <motion.div
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mx-auto"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                />
                            ) : (
                                mode === 'login' ? 'Sign In' : 'Create Account'
                            )}
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-6">
                        <div className="flex-1 h-px bg-text-secondary/15" />
                        <span className="text-xs text-text-secondary">or</span>
                        <div className="flex-1 h-px bg-text-secondary/15" />
                    </div>

                    {/* Switch mode */}
                    <p className="text-center text-sm text-text-secondary">
                        {mode === 'login' ? (
                            <>
                                Don&apos;t have an account?{' '}
                                <button onClick={() => { setMode('register'); clearError(); }} className="text-primary font-semibold hover:underline cursor-pointer">
                                    Sign up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{' '}
                                <button onClick={() => { setMode('login'); clearError(); }} className="text-primary font-semibold hover:underline cursor-pointer">
                                    Sign in
                                </button>
                            </>
                        )}
                    </p>
                </motion.div>

                {/* Footer */}
                <motion.p
                    className="text-center text-xs text-text-secondary/60 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    By continuing, you agree to learn awesome things
                </motion.p>
            </motion.div>
        </div>
    );
}
