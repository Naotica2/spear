'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type CompanionExpression = 'idle' | 'encouraging' | 'celebrating' | 'sad';

interface CompanionCharacterProps {
    expression: CompanionExpression;
    message?: string;
    size?: number;
    className?: string;
}

export default function CompanionCharacter({
    expression,
    message,
    size = 120,
    className = ''
}: CompanionCharacterProps) {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (message) {
            setShowMessage(true);
            const timer = setTimeout(() => setShowMessage(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [message, expression]);

    const isSad = expression === 'sad';
    const isCelebrating = expression === 'celebrating';
    const isEncouraging = expression === 'encouraging';

    // Premium Floating Animations
    const floatAnim = { y: [0, -6, 0] };
    const gentleShake = { x: [0, -3, 3, -3, 3, 0], y: [0, 2, 0] };
    const happyBounce = { y: [0, -15, 0], scale: [1, 1.05, 0.95, 1] };

    let mainAnim: any = floatAnim;
    let animDuration = 3;

    if (isSad) {
        mainAnim = gentleShake;
        animDuration = 4;
    } else if (isCelebrating) {
        mainAnim = happyBounce;
        animDuration = 0.8;
    } else if (isEncouraging) {
        mainAnim = floatAnim;
        animDuration = 2; // slightly faster float
    }

    const themeColor = isSad ? '#94A3B8' : isCelebrating ? '#F5C87A' : isEncouraging ? '#6DD5C4' : '#7EB8F0';
    const glowColor = isSad ? 'rgba(148, 163, 184, 0.3)' : isCelebrating ? 'rgba(245, 200, 122, 0.4)' : isEncouraging ? 'rgba(109, 213, 196, 0.4)' : 'rgba(126, 184, 240, 0.4)';

    return (
        <div className={`relative flex flex-col items-center justify-end ${className}`}>
            <AnimatePresence>
                {showMessage && message && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 15, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10, rotate: 2 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 sm:translate-x-0 mb-6 z-20 w-max max-w-[280px] sm:max-w-xs origin-bottom"
                        style={{ marginLeft: '0px' }}
                    >
                        <div className="relative overflow-visible rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] glass-strong"
                            style={{ color: isSad ? 'var(--color-error)' : 'var(--color-text)' }}>
                            <div className="relative z-10 font-bold text-sm sm:text-base text-center sm:text-left whitespace-normal">
                                {message}
                            </div>
                            <svg className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-6 drop-shadow-sm text-[var(--color-card-solid)]" width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path d="M0 0 L10 12 L20 0 Z" fill="currentColor" />
                                <path d="M0 0 L10 12 L20 0" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                            </svg>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                animate={mainAnim}
                transition={{ duration: animDuration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative z-10"
            >
                <svg width={size} height={size} viewBox="0 0 120 120" fill="none" className="overflow-visible">
                    <defs>
                        <radialGradient id="backdropGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={glowColor} />
                            <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
                        </radialGradient>

                        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.10" />
                        </filter>
                    </defs>

                    {/* Back Glow */}
                    <circle cx="60" cy="65" r="50" fill="url(#backdropGlow)" />

                    {/* Dynamic Ponytail */}
                    <motion.g
                        animate={isCelebrating ? { rotate: [0, -25, 0], y: [0, -3, 0] } : isEncouraging ? { rotate: [0, -15, 0] } : { rotate: [0, -5, 0] }}
                        transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        style={{ originX: '85px', originY: '35px' }}
                    >
                        <path d="M85 35 Q115 25 105 65 Q95 50 88 43 Z" fill="#4C3A69" filter="url(#softShadow)" />
                        <circle cx="87" cy="38" r="4.5" fill={themeColor} />
                    </motion.g>

                    {/* Back Hair */}
                    <path d="M35 30 L45 80 L75 80 L85 30 Z" fill="#3B2F50" />

                    {/* Left Arm */}
                    <motion.g
                        animate={isCelebrating ? { rotate: [0, -140, 0], y: [0, -15, 0] } : isEncouraging ? { rotate: [0, -45, 0], y: [0, -5, 0] } : { y: [0, 2, 0] }}
                        transition={{ duration: isCelebrating ? 0.8 : isEncouraging ? 1 : 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        style={{ originX: '38px', originY: '72px' }}
                    >
                        {/* Sleeve */}
                        <path d="M28 68 Q30 92 34 92 Q38 92 40 68 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#softShadow)" />
                        {/* Hand */}
                        <circle cx="34" cy="94" r="5" fill="#FFE1C9" />
                    </motion.g>

                    {/* Right Arm */}
                    <motion.g
                        animate={isCelebrating ? { rotate: [0, 140, 0], y: [0, -15, 0] } : { y: [0, 2, 0] }}
                        transition={{ duration: isCelebrating ? 0.8 : 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: isCelebrating ? 0 : 0.2 }}
                        style={{ originX: '82px', originY: '72px' }}
                    >
                        {/* Sleeve */}
                        <path d="M80 68 Q82 92 86 92 Q90 92 92 68 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#softShadow)" />
                        {/* Hand */}
                        <circle cx="86" cy="94" r="5" fill="#FFE1C9" />
                    </motion.g>

                    {/* Body Jacket */}
                    <path d="M38 70 L82 70 Q88 110 60 110 Q32 110 38 70 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" filter="url(#softShadow)" />
                    {/* Inner Shirt/Tie */}
                    <path d="M50 70 L70 70 L60 85 Z" fill={themeColor} opacity="0.9" />
                    <line x1="60" y1="85" x2="60" y2="108" stroke="#CBD5E1" strokeWidth="1.5" />

                    {/* Face / Head Base */}
                    <rect x="36" y="28" width="48" height="42" rx="20" fill="#FFE1C9" filter="url(#softShadow)" />

                    {/* Hair Bangs */}
                    <path d="M36 45 C 30 18, 90 18, 84 45 C 75 30, 65 24, 60 30 C 55 24, 45 30, 36 45 Z" fill="#4C3A69" />
                    <path d="M36 38 Q45 20 60 22 Q75 20 84 38 Q78 28 60 28 Q42 28 36 38 Z" fill="#604A85" />

                    {/* Base Cheeks */}
                    <circle cx="43" cy="54" r="4.5" fill="#FFB7B2" opacity={isCelebrating ? "0.8" : "0.5"} />
                    <circle cx="77" cy="54" r="4.5" fill="#FFB7B2" opacity={isCelebrating ? "0.8" : "0.5"} />

                    {/* Expressive Face Elements */}
                    {isSad ? (
                        <g>
                            {/* Sad Eyes (Drooping) */}
                            <path d="M42 46 Q46 44 50 48" stroke="#2E2240" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                            <path d="M70 48 Q74 44 78 46" stroke="#2E2240" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                            <circle cx="47" cy="51" r="3" fill="#2E2240" />
                            <circle cx="73" cy="51" r="3" fill="#2E2240" />

                            {/* Sad Mouth */}
                            <path d="M56 60 Q60 56 64 60" stroke="#D98A84" strokeWidth="2" fill="none" strokeLinecap="round" />

                            {/* Tear */}
                            <motion.path
                                d="M46 56 Q 46 60 46 62"
                                stroke="#7EB8F0" strokeWidth="2.5" strokeLinecap="round"
                                animate={{ y: [0, 8], opacity: [1, 0] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            />
                        </g>
                    ) : isCelebrating ? (
                        <g>
                            {/* Happy Star Eyes */}
                            <path d="M46 45 L48 49 L52 50 L48 51 L46 55 L44 51 L40 50 L44 49 Z" fill={themeColor} />
                            <path d="M74 45 L76 49 L80 50 L76 51 L74 55 L72 51 L68 50 L72 49 Z" fill={themeColor} />

                            {/* Open Smile */}
                            <path d="M52 56 Q60 65 68 56 Z" fill="#E57373" />
                            <path d="M56 60 Q60 62 64 60 Z" fill="#FFCDD2" />

                            {/* Confetti */}
                            <motion.g
                                initial={{ opacity: 1 }}
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                            >
                                <circle cx="20" cy="25" r="3" fill="#F06D5B" />
                                <rect x="95" y="20" width="6" height="6" fill="#7EB8F0" transform="rotate(45 95 20)" />
                                <circle cx="85" cy="10" r="2.5" fill="#F5C87A" />
                                <circle cx="35" cy="15" r="4" fill="#9B8FE6" />
                            </motion.g>
                        </g>
                    ) : isEncouraging ? (
                        <g>
                            {/* Winking Eye */}
                            <circle cx="46" cy="49" r="4.5" fill="#2E2240" />
                            <circle cx="47" cy="47" r="1.5" fill="#FFFFFF" />
                            <path d="M69 48 Q73.5 44 78 48" stroke="#2E2240" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                            {/* Encouraging Smile */}
                            <path d="M54 57 Q60 62 66 55" stroke="#D98A84" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                            {/* Extra sparkles */}
                            <motion.path
                                d="M85 45 L88 50 L93 51 L88 52 L85 57 L82 52 L77 51 L82 50 Z"
                                fill="#F5C87A"
                                animate={{ scale: [0, 1, 0], rotate: [0, 45, 90] }}
                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            />
                        </g>
                    ) : (
                        <g>
                            {/* Idle Blinking Eyes */}
                            <motion.g animate={{ scaleY: [1, 1, 0.1, 1, 1] }} transition={{ duration: 4, times: [0, 0.95, 0.97, 1, 1], repeat: Number.POSITIVE_INFINITY }}>
                                <circle cx="46" cy="49" r="4.5" fill="#2E2240" />
                                <circle cx="47" cy="47" r="1.5" fill="#FFFFFF" />
                                <circle cx="74" cy="49" r="4.5" fill="#2E2240" />
                                <circle cx="75" cy="47" r="1.5" fill="#FFFFFF" />
                            </motion.g>

                            {/* Gentle Smile */}
                            <path d="M56 57 Q60 60 64 57" stroke="#D98A84" strokeWidth="2" fill="none" strokeLinecap="round" />
                        </g>
                    )}
                </svg>
            </motion.div>
        </div>
    );
}
