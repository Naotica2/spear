'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PetStage } from '@/store/usePetStore';

export type PetExpression = 'idle' | 'happy' | 'sad' | 'angry' | 'bored';

interface PetProps {
    stage: PetStage;
    size?: number;
    className?: string;
    animate?: boolean;
    isMoving?: boolean;
    isSleeping?: boolean;
    expression?: PetExpression;
    accessories?: string[];
}

function RenderAccessories({ accessories, sizeScale }: { accessories: string[], sizeScale: number }) {
    if (!accessories || accessories.length === 0) return null;

    return (
        <g style={{ transform: `scale(${sizeScale})`, transformOrigin: '60px 60px' }}>
            {accessories.includes('glasses') && (
                <g>
                    {/* Cool sunglasses */}
                    <path d="M40 54 Q46 52 52 54 L52 60 Q46 62 40 60 Z" fill="#1E293B" />
                    <path d="M68 54 Q74 52 80 54 L80 60 Q74 62 68 60 Z" fill="#1E293B" />
                    <line x1="52" y1="56" x2="68" y2="56" stroke="#1E293B" strokeWidth="2" />
                    <path d="M42 56 L50 56 L46 60 Z" fill="rgba(255,255,255,0.2)" />
                    <path d="M70 56 L78 56 L74 60 Z" fill="rgba(255,255,255,0.2)" />
                </g>
            )}
            {accessories.includes('hat') && (
                <g>
                    {/* Magic Wizard Hat */}
                    <ellipse cx="60" cy="35" rx="30" ry="8" fill="#581C87" />
                    <path d="M40 35 L55 5 L65 5 L80 35 Z" fill="#6B21A8" />
                    <path d="M40 35 Q60 40 80 35 L65 5 L55 5 Z" fill="#9333EA" opacity="0.5" />
                    {/* Hat buckle/band */}
                    <path d="M45 32 Q60 36 75 32 L73 28 Q60 32 47 28 Z" fill="#FDE047" />
                </g>
            )}
            {accessories.includes('tie') && (
                <g>
                    {/* Bow Tie */}
                    <path d="M50 72 L60 80 L50 88 Z" fill="#E11D48" />
                    <path d="M70 72 L60 80 L70 88 Z" fill="#BED148" style={{ fill: '#E11D48' }} />
                    <circle cx="60" cy="80" r="3" fill="#9F1239" />
                </g>
            )}
        </g>
    );
}

function ZzzEffect({ isSleeping }: { isSleeping?: boolean }) {
    if (!isSleeping) return null;
    return (
        <motion.g
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0], y: -30, scale: [0.5, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
            style={{ originX: '70px', originY: '40px' }}
        >
            <text x="75" y="40" fill="#94A3B8" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Z</text>
            <text x="90" y="30" fill="#94A3B8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">z</text>
            <text x="100" y="20" fill="#94A3B8" fontSize="8" fontWeight="bold" fontFamily="sans-serif">z</text>
        </motion.g>
    );
}

// Eyes helper 
function RenderEyes({ expression, isSleeping, isBaby }: { expression: PetExpression, isSleeping: boolean, isBaby: boolean }) {
    if (isSleeping) {
        return (
            <>
                <path d="M42 56 Q48 53 54 56" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M66 56 Q72 53 78 56" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </>
        )
    }

    if (expression === 'happy') {
        return (
            <>
                <path d="M42 55 Q48 50 54 55" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M66 55 Q72 50 78 55" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
            </>
        )
    }

    if (expression === 'sad') {
        return (
            <>
                <circle cx="48" cy="54" r={isBaby ? "5" : "6"} fill="#1E293B" />
                <circle cx="49" cy="53" r="1.5" fill="white" />
                <path d="M50 58 Q50 63 52 65 Q54 63 54 58 Z" fill="#60A5FA" opacity="0.8" />

                <circle cx="72" cy="54" r={isBaby ? "5" : "6"} fill="#1E293B" />
                <circle cx="73" cy="53" r="1.5" fill="white" />
                <path d="M70 58 Q70 63 68 65 Q66 63 66 58 Z" fill="#60A5FA" opacity="0.8" />
            </>
        )
    }

    if (expression === 'angry') {
        return (
            <>
                {/* Angry slanted eyes */}
                <path d="M40 50 L52 56 M68 56 L80 50" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="48" cy="55" r="4" fill="#1E293B" />
                <circle cx="72" cy="55" r="4" fill="#1E293B" />
                {/* Reddish angry tint block over head area */}
                <ellipse cx="60" cy="45" rx="20" ry="10" fill="#EF4444" opacity="0.3" filter="blur(4px)" />
            </>
        )
    }

    if (expression === 'bored') {
        return (
            <>
                {/* Half-closed lids */}
                <path d="M42 55 L54 55 M66 55 L78 55" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="48" cy="56" r="2" fill="#1E293B" />
                <circle cx="72" cy="56" r="2" fill="#1E293B" />
            </>
        )
    }

    // Default Idle
    return isBaby ? (
        <>
            <circle cx="48" cy="56" r="5" fill="#1E293B" />
            <circle cx="49" cy="55" r="1.5" fill="white" />
            <circle cx="72" cy="56" r="5" fill="#1E293B" />
            <circle cx="73" cy="55" r="1.5" fill="white" />
        </>
    ) : (
        <>
            <path d="M42 55 Q48 50 54 55 Q48 58 42 55Z" fill="#1E293B" />
            <path d="M66 55 Q72 50 78 55 Q72 58 66 55Z" fill="#1E293B" />
            <circle cx="48" cy="54" r="1.5" fill="white" />
            <circle cx="72" cy="54" r="1.5" fill="white" />
        </>
    );
}

export function FoxPet({
    stage, size = 120, className = '', animate = true, isMoving = false, isSleeping = false, expression = 'idle', accessories = []
}: PetProps) {
    const isBaby = stage === 'baby';
    const isTeen = stage === 'teen';
    const isAdult = stage === 'adult';

    const viewSize = isBaby ? size * 0.7 : (isTeen ? size * 0.85 : size);
    const sizeScale = isBaby ? 0.8 : (isTeen ? 0.9 : 1);

    // Expressions physics modifiers
    let floatAnim = animate ? { y: [0, -6, 0] } : undefined;
    if (isSleeping) floatAnim = animate ? { y: [0, 3, 0], scaleY: [1, 0.95, 1] } as any : undefined;
    else if (isMoving) floatAnim = { y: [0, -12, 0], rotate: [0, -5, 5, 0] } as any;
    else if (expression === 'happy') floatAnim = { y: [0, -15, 0], scale: [1, 1.05, 1] } as any;
    else if (expression === 'sad') floatAnim = { y: [0, 2, 0] } as any;
    else if (expression === 'angry') floatAnim = { x: [-2, 2, -2], rotate: [-1, 1, -1] } as any;

    const tailAnim = animate ? (isSleeping || expression === 'sad' ? { rotate: [0, 5, 0] } : (expression === 'angry' ? { rotate: [0, 30, 0] } : { rotate: [0, 15, 0] })) : undefined;
    const animDuration = isSleeping ? 4 : (isMoving || expression === 'angry' ? 0.3 : (expression === 'happy' ? 0.8 : 2.5));

    const earRotation = expression === 'sad' ? -20 : (expression === 'angry' ? 10 : 0);

    return (
        <motion.div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <motion.svg width={viewSize} height={viewSize} viewBox="0 0 120 120" fill="none" animate={floatAnim} transition={{ duration: animDuration, repeat: Infinity, ease: 'easeInOut' }}>
                <motion.path
                    d={isBaby ? "M80 80 Q100 90 110 70 Q95 65 85 80" : "M80 75 Q110 90 120 60 Q105 50 85 75"}
                    fill="#F17E5D"
                    animate={tailAnim}
                    transition={{ duration: isSleeping ? 4 : (expression === 'angry' ? 0.2 : 2), repeat: Infinity, ease: 'easeInOut' }}
                    style={{ originX: '85px', originY: '75px' }}
                />

                <ellipse cx="60" cy={isBaby ? "75" : "70"} rx={isBaby ? "28" : "32"} ry={isBaby ? "25" : "30"} fill="#F17E5D" />
                <ellipse cx="60" cy={isBaby ? "80" : "75"} rx="18" ry="15" fill="#FFEACB" opacity="0.9" />

                <g>
                    {/* Ears with rotation support */}
                    <motion.polygon
                        points={isBaby ? "35,60 25,35 50,50" : "30,55 20,20 50,45"}
                        fill="#F17E5D"
                        animate={{ rotate: -earRotation, originX: '35px', originY: '50px' }}
                    />
                    <motion.polygon
                        points={isBaby ? "35,55 28,40 45,50" : "32,50 25,28 45,45"}
                        fill="#FFEACB"
                        animate={{ rotate: -earRotation, originX: '35px', originY: '50px' }}
                    />

                    <motion.polygon
                        points={isBaby ? "85,60 95,35 70,50" : "90,55 100,20 70,45"}
                        fill="#F17E5D"
                        animate={{ rotate: earRotation, originX: '85px', originY: '50px' }}
                    />
                    <motion.polygon
                        points={isBaby ? "85,55 92,40 75,50" : "88,50 95,28 75,45"}
                        fill="#FFEACB"
                        animate={{ rotate: earRotation, originX: '85px', originY: '50px' }}
                    />

                    <circle cx="60" cy="55" r={isBaby ? "26" : "28"} fill="#F17E5D" />
                    <path d="M36 55 Q60 50 84 55 Q80 75 60 78 Q40 75 36 55Z" fill="#FFEACB" />

                    <RenderEyes expression={expression} isSleeping={isSleeping} isBaby={isBaby} />

                    {/* Mouth */}
                    {expression !== 'sad' && expression !== 'angry' ? (
                        <polygon points="56,65 64,65 60,70" fill="#1E293B" />
                    ) : (
                        <path d="M56 68 Q60 65 64 68" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />
                    )}

                    {isAdult && !accessories.includes('hat') && (
                        <g>
                            <path d="M34 40 Q60 45 86 40 L88 45 Q60 50 32 45 Z" fill="#6DD5C4" />
                            <path d="M85 42 L105 35 L95 48 Z" fill="#6DD5C4" />
                            <line x1="30" y1="60" x2="40" y2="62" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="28" y1="65" x2="40" y2="65" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="80" y1="62" x2="90" y2="60" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="80" y1="65" x2="92" y2="65" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    )}
                </g>

                <RenderAccessories accessories={accessories} sizeScale={sizeScale} />
                <ZzzEffect isSleeping={isSleeping} />
            </motion.svg>
        </motion.div>
    );
}

export function CatPet({
    stage, size = 120, className = '', animate = true, isMoving = false, isSleeping = false, expression = 'idle', accessories = []
}: PetProps) {
    const isBaby = stage === 'baby';
    const isTeen = stage === 'teen';
    const isAdult = stage === 'adult';

    const viewSize = isBaby ? size * 0.7 : (isTeen ? size * 0.85 : size);
    const sizeScale = isBaby ? 0.8 : (isTeen ? 0.9 : 1);

    let floatAnim = animate ? { y: [0, -5, 0] } : undefined;
    if (isSleeping) floatAnim = animate ? { y: [0, 2, 0], scaleY: [1, 0.95, 1] } as any : undefined;
    else if (isMoving) floatAnim = { y: [0, -10, 0], rotate: [0, 4, -4, 0] } as any;
    else if (expression === 'happy') floatAnim = { y: [0, -12, 0], scale: [1, 1.05, 1] } as any;
    else if (expression === 'sad') floatAnim = { y: [0, 2, 0] } as any;
    else if (expression === 'angry') floatAnim = { x: [-2, 2, -2], rotate: [-1, 1, -1] } as any;

    const tailAnim = animate ? (isSleeping || expression === 'sad' ? { rotate: [0, -5, 0] } : { rotate: [0, -20, 0] }) : undefined;
    const animDuration = isSleeping ? 4 : (isMoving || expression === 'angry' ? 0.3 : (expression === 'happy' ? 0.7 : 2.2));

    const earRotation = expression === 'sad' ? -25 : (expression === 'angry' ? 15 : 0);

    return (
        <motion.div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <motion.svg width={viewSize} height={viewSize} viewBox="0 0 120 120" fill="none" animate={floatAnim} transition={{ duration: animDuration, repeat: Infinity, ease: 'easeInOut' }}>
                <motion.path
                    d={isBaby ? "M75 80 Q105 85 110 55" : "M75 75 Q115 85 115 40"}
                    fill="none"
                    stroke="#8B7BDB"
                    strokeWidth={isBaby ? "8" : "12"}
                    strokeLinecap="round"
                    animate={tailAnim}
                    transition={{ duration: isSleeping ? 4 : 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ originX: '75px', originY: '75px' }}
                />

                <ellipse cx="60" cy={isBaby ? "75" : "70"} rx={isBaby ? "26" : "28"} ry={isBaby ? "22" : "26"} fill="#9B8FE6" />
                <ellipse cx="60" cy={isBaby ? "80" : "75"} rx="16" ry="12" fill="#E6E1FA" opacity="0.9" />

                <g>
                    {/* Ears with rotation */}
                    <motion.polygon points={isBaby ? "38,55 30,35 50,45" : "35,50 25,25 50,40"} fill="#9B8FE6" animate={{ rotate: -earRotation, originX: '38px', originY: '45px' }} />
                    <motion.polygon points={isBaby ? "39,52 33,39 47,46" : "37,47 29,30 46,42"} fill="#F0918C" opacity="0.8" animate={{ rotate: -earRotation, originX: '38px', originY: '45px' }} />

                    <motion.polygon points={isBaby ? "82,55 90,35 70,45" : "85,50 95,25 70,40"} fill="#9B8FE6" animate={{ rotate: earRotation, originX: '82px', originY: '45px' }} />
                    <motion.polygon points={isBaby ? "81,52 87,39 73,46" : "83,47 91,30 74,42"} fill="#F0918C" opacity="0.8" animate={{ rotate: earRotation, originX: '82px', originY: '45px' }} />

                    <ellipse cx="60" cy="55" rx={isBaby ? "28" : "32"} ry={isBaby ? "22" : "25"} fill="#9B8FE6" />

                    <RenderEyes expression={expression} isSleeping={isSleeping} isBaby={isBaby} />

                    {/* Mouth and Nose */}
                    {expression === 'sad' || expression === 'angry' ? (
                        <>
                            <polygon points="57,63 63,63 60,66" fill="#F0918C" />
                            <path d="M57 68 Q60 66 63 68" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        </>
                    ) : (
                        <>
                            <polygon points="57,63 63,63 60,66" fill="#F0918C" />
                            <path d="M60 66 Q63 70 66 68 M60 66 Q57 70 54 68" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        </>
                    )}

                    {/* Whiskers */}
                    <path d="M55 32 L58 40 L60 35 L62 40 L65 32" stroke="#8377D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                    {isAdult && !accessories.includes('tie') && (
                        <g>
                            <path d="M42 75 Q60 82 78 75" stroke="#F06D5B" strokeWidth="4" strokeLinecap="round" fill="none" />
                            <circle cx="60" cy="80" r="4" fill="#F5C87A" />
                        </g>
                    )}
                </g>

                <RenderAccessories accessories={accessories} sizeScale={sizeScale} />
                <ZzzEffect isSleeping={isSleeping} />
            </motion.svg>
        </motion.div>
    );
}

export function OwlPet({
    stage, size = 120, className = '', animate = true, isMoving = false, isSleeping = false, expression = 'idle', accessories = []
}: PetProps) {
    const isBaby = stage === 'baby';
    const isTeen = stage === 'teen';
    const isAdult = stage === 'adult';

    const viewSize = isBaby ? size * 0.7 : (isTeen ? size * 0.85 : size);
    const sizeScale = isBaby ? 0.8 : (isTeen ? 0.9 : 1);

    let floatAnim = animate ? { y: [0, -4, 0] } : undefined;
    if (isSleeping) floatAnim = animate ? { y: [0, 2, 0], scaleY: [1, 0.96, 1] } as any : undefined;
    else if (isMoving) floatAnim = { y: [0, -15, 0] } as any;
    else if (expression === 'happy') floatAnim = { y: [0, -10, 0], scale: [1, 1.05, 1] } as any;
    else if (expression === 'sad') floatAnim = { y: [0, 3, 0] } as any;
    else if (expression === 'angry') floatAnim = { x: [-2, 2, -2], rotate: [-2, 2, -2] } as any;

    const wingAnim = animate ? (isSleeping || expression === 'sad' ? { rotate: [0, 2, 0] } : (isMoving || expression === 'happy' ? { rotate: [0, 30, 0] } : { rotate: [0, 10, 0] })) : undefined;
    const LwingAnim = animate ? (isSleeping || expression === 'sad' ? { rotate: [0, -2, 0] } : (isMoving || expression === 'happy' ? { rotate: [0, -30, 0] } : { rotate: [0, -10, 0] })) : undefined;

    const animDuration = isSleeping ? 4 : (isMoving || expression === 'angry' ? 0.25 : (expression === 'happy' ? 0.6 : 1.8));

    return (
        <motion.div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
            <motion.svg width={viewSize} height={viewSize} viewBox="0 0 120 120" fill="none" animate={floatAnim as any} transition={{ duration: animDuration, repeat: Infinity, ease: 'easeInOut' }}>
                <ellipse cx="60" cy="65" rx={isBaby ? "30" : "35"} ry={isBaby ? "35" : "40"} fill="#77C9B1" />
                <ellipse cx="60" cy="75" rx={isBaby ? "20" : "25"} ry={isBaby ? "22" : "28"} fill="#E8F5F2" />

                {(isTeen || isAdult) && (
                    <g stroke="#91D6C3" strokeWidth="2" strokeLinecap="round" fill="none">
                        <path d="M50 75 Q55 80 60 75" />
                        <path d="M60 75 Q65 80 70 75" />
                        <path d="M45 85 Q50 90 55 85" />
                        <path d="M55 85 Q60 90 65 85" />
                        <path d="M65 85 Q70 90 75 85" />
                    </g>
                )}

                <motion.path
                    d={isBaby ? "M32 65 Q20 75 25 85 Q35 75 32 65" : "M27 60 Q10 75 15 90 Q30 80 27 60"}
                    fill="#5BBF9F"
                    animate={LwingAnim as any}
                    transition={{ duration: isSleeping ? 4 : (isMoving ? 0.15 : 0.9), repeat: Infinity, ease: 'easeInOut' }}
                    style={{ originX: '27px', originY: '60px' }}
                />
                <motion.path
                    d={isBaby ? "M88 65 Q100 75 95 85 Q85 75 88 65" : "M93 60 Q110 75 105 90 Q90 80 93 60"}
                    fill="#5BBF9F"
                    animate={wingAnim as any}
                    transition={{ duration: isSleeping ? 4 : (isMoving ? 0.15 : 0.9), repeat: Infinity, ease: 'easeInOut' }}
                    style={{ originX: '93px', originY: '60px' }}
                />

                <polygon points={isBaby ? "35,35 25,25 45,32" : "32,30 20,15 48,28"} fill="#5BBF9F" />
                <polygon points={isBaby ? "85,35 95,25 75,32" : "88,30 100,15 72,28"} fill="#5BBF9F" />
                <path d="M60 55 Q30 50 35 35 Q45 25 60 40 Q75 25 85 35 Q90 50 60 55Z" fill="#E8F5F2" />

                {/* Eyes Logic for Owl */}
                {isSleeping ? (
                    <>
                        {/* Eyes closed */}
                        <path d="M40 44 Q45 40 50 44" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M70 44 Q75 40 80 44" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    </>
                ) : expression === 'sad' ? (
                    <>
                        <path d="M38 43 Q45 46 52 43" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M68 43 Q75 46 82 43" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M48 48 Q48 52 50 54 Q52 52 52 48 Z" fill="#60A5FA" opacity="0.8" />
                        <path d="M78 48 Q78 52 76 54 Q74 52 74 48 Z" fill="#60A5FA" opacity="0.8" />
                    </>
                ) : expression === 'angry' ? (
                    <>
                        <path d="M38 38 L52 44" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <circle cx="45" cy="45" r="5" fill="#1E293B" />
                        <path d="M82 38 L68 44" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <circle cx="75" cy="45" r="5" fill="#1E293B" />
                        <ellipse cx="60" cy="35" rx="15" ry="8" fill="#EF4444" opacity="0.3" filter="blur(4px)" />
                    </>
                ) : expression === 'happy' ? (
                    <>
                        <path d="M40 44 Q45 38 50 44" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M70 44 Q75 38 80 44" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                    </>
                ) : expression === 'bored' ? (
                    <>
                        <path d="M38 42 L52 42" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M68 42 L82 42" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none" />
                    </>
                ) : isBaby ? (
                    <>
                        <circle cx="45" cy="42" r="8" fill="#1E293B" />
                        <circle cx="47" cy="40" r="2.5" fill="white" />
                        <circle cx="75" cy="42" r="8" fill="#1E293B" />
                        <circle cx="77" cy="40" r="2.5" fill="white" />
                    </>
                ) : (
                    <>
                        <circle cx="45" cy="42" r="10" fill="#1E293B" />
                        <circle cx="45" cy="42" r="11" stroke="#F5C87A" strokeWidth="2" fill="none" />
                        <circle cx="47" cy="39" r="3" fill="white" />
                        <circle cx="75" cy="42" r="10" fill="#1E293B" />
                        <circle cx="75" cy="42" r="11" stroke="#F5C87A" strokeWidth="2" fill="none" />
                        <circle cx="77" cy="39" r="3" fill="white" />
                    </>
                )}

                <polygon points="56,48 64,48 60,56" fill="#F5C87A" />

                <path d="M45 100 L42 105 M45 100 L45 105 M45 100 L48 105" stroke="#F5C87A" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M75 100 L72 105 M75 100 L75 105 M75 100 L78 105" stroke="#F5C87A" strokeWidth="2.5" strokeLinecap="round" />

                {isAdult && !accessories.includes('hat') && (
                    <g>
                        <polygon points="60,5 35,15 60,25 85,15" fill="#1E293B" />
                        <rect x="45" y="15" width="30" height="8" fill="#1E293B" />
                        <line x1="60" y1="15" x2="80" y2="25" stroke="#F06D5B" strokeWidth="2" />
                        <line x1="80" y1="20" x2="80" y2="30" stroke="#F06D5B" strokeWidth="2" />
                        <rect x="30" y="70" width="15" height="25" rx="2" fill="#F06D5B" transform="rotate(-15 30 70)" />
                        <rect x="33" y="72" width="10" height="20" rx="1" fill="#FFFFFF" transform="rotate(-15 30 70)" opacity="0.8" />
                    </g>
                )}

                <RenderAccessories accessories={accessories} sizeScale={sizeScale} />
                <ZzzEffect isSleeping={isSleeping} />
            </motion.svg>
        </motion.div>
    );
}

export function PetMascot({ pet, stage, accessories, ...props }: { pet: string | null } & PetProps) {
    if (pet === 'fox') return <FoxPet stage={stage} accessories={accessories} {...props} />;
    if (pet === 'cat') return <CatPet stage={stage} accessories={accessories} {...props} />;
    if (pet === 'owl') return <OwlPet stage={stage} accessories={accessories} {...props} />;

    return (
        <div
            className={`rounded-full bg-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 ${props.className || ''}`}
            style={{ width: props.size || 120, height: props.size || 120 }}
        >
            ?
        </div>
    );
}
