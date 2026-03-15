'use client';

import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

interface MascotProps {
    size?: number;
    className?: string;
    animate?: boolean;
}

/* ====== HTML Mascot — Friendly Tag Character ====== */
export function HTMLMascot({ size = 80, className = '', animate = true }: MascotProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            className={className}
            animate={animate ? { y: [0, -4, 0] } : undefined}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
            {/* Body — Tag shape */}
            <motion.path
                d="M30 35 L58 20 L90 35 L90 85 L58 100 L30 85 Z"
                fill="#F06D5B"
                stroke="#E05A48"
                strokeWidth="2"
                animate={animate ? { scale: [1, 1.02, 1] } : undefined}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Shine */}
            <path d="M35 40 L55 28 L55 45 L35 55 Z" fill="#F5897A" opacity="0.5" />
            {/* Left eye */}
            <circle cx="48" cy="52" r="6" fill="white" />
            <circle cx="49" cy="51" r="3" fill="#1E293B" />
            <circle cx="50.5" cy="49.5" r="1" fill="white" />
            {/* Right eye */}
            <circle cx="70" cy="52" r="6" fill="white" />
            <circle cx="71" cy="51" r="3" fill="#1E293B" />
            <circle cx="72.5" cy="49.5" r="1" fill="white" />
            {/* Smile */}
            <path d="M50 65 Q60 75 70 65" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="42" cy="63" r="4" fill="#F5897A" opacity="0.6" />
            <circle cx="76" cy="63" r="4" fill="#F5897A" opacity="0.6" />
            {/* Bracket arms */}
            <motion.g
                animate={animate ? { rotate: [0, 5, -5, 0] } : undefined}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '20px', originY: '60px' }}
            >
                <text x="10" y="68" fontSize="28" fontWeight="bold" fill="#E05A48" fontFamily="monospace">&lt;</text>
            </motion.g>
            <motion.g
                animate={animate ? { rotate: [0, -5, 5, 0] } : undefined}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                style={{ originX: '100px', originY: '60px' }}
            >
                <text x="92" y="68" fontSize="28" fontWeight="bold" fill="#E05A48" fontFamily="monospace">/&gt;</text>
            </motion.g>
        </motion.svg>
    );
}

/* ====== CSS Mascot — Paintbrush Palette Character ====== */
export function CSSMascot({ size = 80, className = '', animate = true }: MascotProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            className={className}
            animate={animate ? { y: [0, -4, 0] } : undefined}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
            {/* Body — Rounded palette */}
            <motion.ellipse
                cx="60"
                cy="60"
                rx="38"
                ry="35"
                fill="#7EB8F0"
                stroke="#5A9FE0"
                strokeWidth="2"
                animate={animate ? { scale: [1, 1.02, 1] } : undefined}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Shine */}
            <ellipse cx="50" cy="45" rx="18" ry="12" fill="#9ECAF5" opacity="0.4" />
            {/* Color dots on body */}
            <circle cx="38" cy="72" r="5" fill="#F06D5B" opacity="0.8" />
            <circle cx="52" cy="78" r="4" fill="#F5C87A" opacity="0.8" />
            <circle cx="68" cy="78" r="4" fill="#8CD790" opacity="0.8" />
            <circle cx="80" cy="72" r="5" fill="#9B8FE6" opacity="0.8" />
            {/* Left eye */}
            <circle cx="47" cy="50" r="7" fill="white" />
            <circle cx="48" cy="49" r="3.5" fill="#1E293B" />
            <circle cx="49.5" cy="47.5" r="1.2" fill="white" />
            {/* Right eye */}
            <circle cx="73" cy="50" r="7" fill="white" />
            <circle cx="74" cy="49" r="3.5" fill="#1E293B" />
            <circle cx="75.5" cy="47.5" r="1.2" fill="white" />
            {/* Smile */}
            <path d="M50 62 Q60 70 70 62" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="40" cy="59" r="4" fill="#9ECAF5" opacity="0.6" />
            <circle cx="80" cy="59" r="4" fill="#9ECAF5" opacity="0.6" />
            {/* Paintbrush hat */}
            <motion.g
                animate={animate ? { rotate: [0, 8, -8, 0] } : undefined}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '60px', originY: '30px' }}
            >
                <rect x="55" y="10" width="10" height="20" rx="3" fill="#E8C96A" />
                <rect x="52" y="5" width="16" height="10" rx="4" fill="#F5C87A" />
                <circle cx="60" cy="4" r="5" fill="#F06D5B" />
            </motion.g>
        </motion.svg>
    );
}

/* ====== JavaScript Mascot — Lightning Bolt Character ====== */
export function JSMascot({ size = 80, className = '', animate = true }: MascotProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            className={className}
            animate={animate ? { y: [0, -4, 0] } : undefined}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
            {/* Body — Rounded square like JS logo */}
            <motion.rect
                x="22"
                y="22"
                width="76"
                height="76"
                rx="20"
                fill="#F5C87A"
                stroke="#E8B84D"
                strokeWidth="2"
                animate={animate ? { scale: [1, 1.02, 1] } : undefined}
                transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Shine */}
            <rect x="28" y="28" width="35" height="25" rx="10" fill="#F9DCA0" opacity="0.5" />
            {/* Left eye — excited */}
            <circle cx="47" cy="52" r="7" fill="white" />
            <circle cx="48" cy="51" r="3.5" fill="#1E293B" />
            <circle cx="49.5" cy="49.5" r="1.2" fill="white" />
            {/* Right eye — wink */}
            <circle cx="73" cy="52" r="7" fill="white" />
            <circle cx="74" cy="51" r="3.5" fill="#1E293B" />
            <circle cx="75.5" cy="49.5" r="1.2" fill="white" />
            {/* Big grin */}
            <path d="M46 65 Q60 78 74 65" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="40" cy="62" r="4" fill="#F0B44A" opacity="0.5" />
            <circle cx="80" cy="62" r="4" fill="#F0B44A" opacity="0.5" />
            {/* Lightning bolt antenna */}
            <motion.g
                animate={animate ? { rotate: [0, 5, -5, 0], y: [0, -2, 0] } : undefined}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '60px', originY: '22px' }}
            >
                <polygon points="55,22 62,5 58,17 68,2 60,15 65,8 57,22" fill="#E8B84D" />
                <polygon points="56,22 63,7 59,17 66,5 61,16 64,10 58,22" fill="#F5C87A" />
            </motion.g>
            {/* Curly braces on sides */}
            <text x="8" y="65" fontSize="20" fontWeight="bold" fill="#E8B84D" fontFamily="monospace">&#123;</text>
            <text x="100" y="65" fontSize="20" fontWeight="bold" fill="#E8B84D" fontFamily="monospace">&#125;</text>
        </motion.svg>
    );
}

/* ====== PHP Mascot — Cute Elephant Character ====== */
export function PHPMascot({ size = 80, className = '', animate = true }: MascotProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            className={className}
            animate={animate ? { y: [0, -4, 0] } : undefined}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
            {/* Body */}
            <motion.ellipse
                cx="60"
                cy="62"
                rx="35"
                ry="32"
                fill="#9B8FE6"
                stroke="#8377D4"
                strokeWidth="2"
                animate={animate ? { scale: [1, 1.02, 1] } : undefined}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Shine */}
            <ellipse cx="50" cy="48" rx="16" ry="10" fill="#B5ABF0" opacity="0.4" />
            {/* Left ear */}
            <motion.ellipse
                cx="30"
                cy="38"
                rx="14"
                ry="16"
                fill="#9B8FE6"
                stroke="#8377D4"
                strokeWidth="2"
                animate={animate ? { rotate: [0, -5, 0] } : undefined}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '35px', originY: '45px' }}
            />
            <ellipse cx="30" cy="38" rx="8" ry="10" fill="#B5ABF0" opacity="0.5" />
            {/* Right ear */}
            <motion.ellipse
                cx="90"
                cy="38"
                rx="14"
                ry="16"
                fill="#9B8FE6"
                stroke="#8377D4"
                strokeWidth="2"
                animate={animate ? { rotate: [0, 5, 0] } : undefined}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                style={{ originX: '85px', originY: '45px' }}
            />
            <ellipse cx="90" cy="38" rx="8" ry="10" fill="#B5ABF0" opacity="0.5" />
            {/* Left eye */}
            <circle cx="47" cy="55" r="7" fill="white" />
            <circle cx="48" cy="54" r="3.5" fill="#1E293B" />
            <circle cx="49.5" cy="52.5" r="1.2" fill="white" />
            {/* Right eye */}
            <circle cx="73" cy="55" r="7" fill="white" />
            <circle cx="74" cy="54" r="3.5" fill="#1E293B" />
            <circle cx="75.5" cy="52.5" r="1.2" fill="white" />
            {/* Trunk */}
            <motion.path
                d="M55 65 Q50 72 48 80 Q47 85 52 85 Q56 85 56 80 Q57 75 60 70 Q63 75 64 80 Q64 85 68 85 Q72 85 72 80 Q70 72 65 65"
                fill="#B5ABF0"
                stroke="#8377D4"
                strokeWidth="1.5"
                animate={animate ? { y: [0, 2, 0] } : undefined}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Cheeks */}
            <circle cx="38" cy="62" r="4" fill="#B5ABF0" opacity="0.6" />
            <circle cx="82" cy="62" r="4" fill="#B5ABF0" opacity="0.6" />
            {/* Feet */}
            <ellipse cx="45" cy="92" rx="8" ry="5" fill="#8377D4" opacity="0.6" />
            <ellipse cx="75" cy="92" rx="8" ry="5" fill="#8377D4" opacity="0.6" />
        </motion.svg>
    );
}

/* ====== MySQL Mascot — Cute Dolphin Character ====== */
export function MySQLMascot({ size = 80, className = '', animate = true }: MascotProps) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            className={className}
            animate={animate ? { y: [0, -6, 0] } : undefined}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        >
            {/* Top Fin */}
            <motion.path
                d="M45 40 Q55 20 65 25 Q60 35 60 40 Z"
                fill="#2563EB"
                stroke="#1E40AF"
                strokeWidth="2"
                animate={animate ? { rotate: [0, 5, 0] } : undefined}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '55px', originY: '40px' }}
            />
            {/* Tail */}
            <motion.path
                d="M20 70 Q5 60 10 45 Q15 65 25 70 Q10 80 5 95 Q15 80 20 75 Z"
                fill="#3B82F6"
                stroke="#1E40AF"
                strokeWidth="2"
                animate={animate ? { rotate: [0, -10, 0] } : undefined}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '20px', originY: '70px' }}
            />
            {/* Body — Dolphin shape with arched back and snout */}
            <motion.path
                d="M20 70 Q30 35 70 35 Q90 35 100 50 Q115 55 110 65 Q100 65 95 65 Q90 85 60 90 Q30 90 20 70 Z"
                fill="#3B82F6"
                stroke="#1E40AF"
                strokeWidth="2"
            />
            {/* Belly highlight */}
            <path
                d="M23 72 Q50 87 85 75 Q92 70 95 65 Q90 80 60 85 Q30 85 23 72 Z"
                fill="#60A5FA"
                opacity="0.8"
            />

            {/* Side Fin */}
            <motion.path
                d="M45 65 Q55 85 45 95 Q40 85 45 65 Z"
                fill="#2563EB"
                stroke="#1E40AF"
                strokeWidth="1.5"
                animate={animate ? { rotate: [0, 15, 0] } : undefined}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '45px', originY: '65px' }}
            />

            {/* Eye */}
            <circle cx="85" cy="50" r="5" fill="white" />
            <circle cx="86" cy="49" r="2.5" fill="#1E293B" />
            <circle cx="87" cy="48" r="1" fill="white" />

            {/* Smile */}
            <path d="M90 60 Q95 62 100 58" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Cheek */}
            <circle cx="80" cy="58" r="3" fill="#93C5FD" opacity="0.8" />
        </motion.svg>
    );
}

/* ====== Language-agnostic Mascot Selector ====== */
export function LanguageMascot({ lang, ...props }: MascotProps & { lang: string }) {
    switch (lang) {
        case 'html': return <HTMLMascot {...props} />;
        case 'css': return <CSSMascot {...props} />;
        case 'js': return <JSMascot {...props} />;
        case 'php': return <PHPMascot {...props} />;
        case 'mysql': return <MySQLMascot {...props} />;
        default: return <HTMLMascot {...props} />;
    }
}

/* ====== Hero Illustration — Coding workspace ====== */
export function HeroIllustration({ size = 200, className = '' }: Omit<MascotProps, 'animate'>) {
    return (
        <motion.svg
            width={size}
            height={size * 0.7}
            viewBox="0 0 300 210"
            fill="none"
            className={className}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
            {/* Laptop base */}
            <rect x="50" y="60" width="200" height="120" rx="12" fill="#E2E8F0" />
            <rect x="55" y="65" width="190" height="100" rx="8" fill="#1E293B" />

            {/* Screen content — code lines */}
            <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, staggerChildren: 0.1 }}
            >
                <rect x="70" y="80" width="60" height="5" rx="2" fill="#F06D5B" opacity="0.8" />
                <rect x="135" y="80" width="40" height="5" rx="2" fill="#7EB8F0" opacity="0.8" />
                <rect x="80" y="92" width="80" height="5" rx="2" fill="#8CD790" opacity="0.6" />
                <rect x="80" y="104" width="50" height="5" rx="2" fill="#F5C87A" opacity="0.8" />
                <rect x="135" y="104" width="70" height="5" rx="2" fill="#9B8FE6" opacity="0.6" />
                <rect x="80" y="116" width="90" height="5" rx="2" fill="#7EB8F0" opacity="0.5" />
                <rect x="70" y="128" width="45" height="5" rx="2" fill="#F06D5B" opacity="0.7" />
                <rect x="120" y="128" width="55" height="5" rx="2" fill="#8CD790" opacity="0.5" />
                <rect x="70" y="140" width="70" height="5" rx="2" fill="#9B8FE6" opacity="0.6" />
            </motion.g>

            {/* Cursor blink */}
            <motion.rect
                x="145"
                y="140"
                width="2"
                height="8"
                rx="1"
                fill="#6DD5C4"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Keyboard */}
            <path d="M30 180 L270 180 L250 170 L50 170 Z" fill="#CBD5E1" />
            <rect x="50" y="170" width="200" height="3" rx="1" fill="#94A3B8" opacity="0.3" />

            {/* Floating elements */}
            <motion.circle
                cx="270" cy="50" r="15"
                fill="#6DD5C4" opacity="0.3"
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.rect
                x="15" y="80" width="20" height="20" rx="5"
                fill="#F5C87A" opacity="0.3"
                animate={{ y: [0, -6, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            />
            <motion.polygon
                points="280,120 290,140 270,140"
                fill="#9B8FE6" opacity="0.3"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />

            {/* Stars */}
            <motion.text
                x="25" y="55" fontSize="16" opacity="0.5"
                animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
            >✨</motion.text>
            <motion.text
                x="265" y="180" fontSize="14" opacity="0.4"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
            >⭐</motion.text>
        </motion.svg>
    );
}

/* ====== Badge Icons ====== */
export function BadgeIcon({ type, earned, size = 40 }: { type: string; earned: boolean; size?: number }) {
    const opacity = earned ? 1 : 0.3;
    const baseColor = earned ? undefined : '#94A3B8';

    const icons: Record<string, React.ReactNode> = {
        'first-lesson': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#6DD5C4'} />
                <circle cx="24" cy="24" r="16" fill={baseColor || '#4DC0AD'} />
                <path d="M20 16 L32 24 L20 32 Z" fill="white" />
            </svg>
        ),
        'html-master': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#F06D5B'} />
                <text x="10" y="30" fontSize="18" fontWeight="bold" fill="white" fontFamily="monospace">&lt;/&gt;</text>
            </svg>
        ),
        'css-master': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#7EB8F0'} />
                <text x="12" y="30" fontSize="16" fontWeight="bold" fill="white" fontFamily="monospace">&#123;&#125;</text>
            </svg>
        ),
        'js-master': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#F5C87A'} />
                <text x="11" y="31" fontSize="16" fontWeight="bold" fill="white" fontFamily="monospace">JS</text>
            </svg>
        ),
        'php-master': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#9B8FE6'} />
                <text x="7" y="30" fontSize="14" fontWeight="bold" fill="white" fontFamily="monospace">PHP</text>
            </svg>
        ),
        'mysql-master': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#3B82F6'} />
                <text x="13" y="30" fontSize="16" fontWeight="bold" fill="white" fontFamily="monospace">DB</text>
            </svg>
        ),
        'streak-3': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#F5C87A'} />
                <path d="M24 8 Q28 18 22 24 Q30 20 26 32 Q24 38 20 32 Q22 28 18 24 Q14 18 24 8Z" fill={earned ? '#F06D5B' : '#CBD5E1'} />
            </svg>
        ),
        'streak-7': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#F06D5B'} />
                <path d="M24 6 Q30 16 22 22 Q32 18 28 30 Q26 38 20 30 Q24 26 18 22 Q12 16 24 6Z" fill={earned ? '#F5C87A' : '#CBD5E1'} />
                <circle cx="24" cy="16" r="3" fill="white" opacity="0.5" />
            </svg>
        ),
        'perfect-score': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#8CD790'} />
                <polygon points="24,8 28,18 38,18 30,25 33,36 24,29 15,36 18,25 10,18 20,18" fill={earned ? '#F5C87A' : '#CBD5E1'} />
            </svg>
        ),
        'all-languages': (
            <svg width={size} height={size} viewBox="0 0 48 48" fill="none" opacity={opacity}>
                <circle cx="24" cy="24" r="20" fill={baseColor || '#6DD5C4'} />
                <circle cx="24" cy="18" r="4" fill={earned ? '#F06D5B' : '#CBD5E1'} />
                <circle cx="30" cy="22" r="4" fill={earned ? '#7EB8F0' : '#CBD5E1'} />
                <circle cx="28" cy="28" r="4" fill={earned ? '#F5C87A' : '#CBD5E1'} />
                <circle cx="20" cy="28" r="4" fill={earned ? '#9B8FE6' : '#CBD5E1'} />
                <circle cx="18" cy="22" r="4" fill={earned ? '#3B82F6' : '#CBD5E1'} />
            </svg>
        ),
    };

    return <>{icons[type] || icons['first-lesson']}</>;
}

/* ====== Success / Error Illustrations — Premium ====== */
export function SuccessIllustration({ size = 80 }: { size?: number }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
        >
            <defs>
                <linearGradient id="successGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6DD5C4" />
                    <stop offset="0.5" stopColor="#8CD790" />
                    <stop offset="1" stopColor="#6DD5C4" />
                </linearGradient>
                <linearGradient id="successInner" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A8E6A3" />
                    <stop offset="1" stopColor="#6DD5C4" />
                </linearGradient>
                <filter id="successGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Glow ring */}
            <motion.circle
                cx="60" cy="60" r="54"
                stroke="url(#successGrad)" strokeWidth="3" fill="none" opacity="0.3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Outer circle */}
            <circle cx="60" cy="60" r="46" fill="url(#successGrad)" />

            {/* Inner circle */}
            <circle cx="60" cy="60" r="38" fill="url(#successInner)" />

            {/* Shine arc */}
            <motion.path
                d="M38 32 Q48 22 62 26"
                stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Checkmark with path animation */}
            <motion.path
                d="M38 60 L52 74 L82 42"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#successGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
            />

            {/* Confetti particles */}
            <motion.circle cx="98" cy="18" r="4" fill="#F5C87A" initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 0], y: [0, -6, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
            <motion.circle cx="14" cy="28" r="3.5" fill="#7EB8F0" initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 0], y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }} />
            <motion.circle cx="102" cy="85" r="3" fill="#9B8FE6" initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 0], y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.1 }} />
            <motion.rect x="8" y="75" width="6" height="6" rx="1" fill="#F06D5B" initial={{ scale: 0, rotate: 0 }} animate={{ scale: [0, 1, 0], rotate: [0, 45, 90] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }} />
            <motion.polygon points="108,50 112,58 104,58" fill="#F5C87A" initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 0], rotate: [0, 180, 360] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />

            {/* Star sparkle */}
            <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 1.4 }}
            >
                <polygon points="18,55 20,50 22,55 27,53 22,55 24,60 22,55 17,57" fill="white" opacity="0.8" />
            </motion.g>
        </motion.svg>
    );
}

export function ErrorIllustration({ size = 80 }: { size?: number }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 120 120"
            fill="none"
            initial={{ scale: 0, rotate: 20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
        >
            <defs>
                <linearGradient id="errorGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F06D5B" />
                    <stop offset="0.5" stopColor="#F0918C" />
                    <stop offset="1" stopColor="#F06D5B" />
                </linearGradient>
                <linearGradient id="errorInner" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5B8B4" />
                    <stop offset="1" stopColor="#F0918C" />
                </linearGradient>
                <filter id="errorGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Glow ring */}
            <motion.circle
                cx="60" cy="60" r="54"
                stroke="url(#errorGrad)" strokeWidth="3" fill="none" opacity="0.3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Outer circle */}
            <circle cx="60" cy="60" r="46" fill="url(#errorGrad)" />

            {/* Inner circle */}
            <circle cx="60" cy="60" r="38" fill="url(#errorInner)" />

            {/* Shine arc */}
            <motion.path
                d="M38 32 Q48 22 62 26"
                stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* X mark — animated */}
            <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 15, delay: 0.2 }}
            >
                <motion.line
                    x1="42" y1="42" x2="78" y2="78"
                    stroke="white" strokeWidth="7" strokeLinecap="round"
                    filter="url(#errorGlow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                />
                <motion.line
                    x1="78" y1="42" x2="42" y2="78"
                    stroke="white" strokeWidth="7" strokeLinecap="round"
                    filter="url(#errorGlow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                />
            </motion.g>

            {/* Floating hint particles */}
            <motion.circle cx="100" cy="20" r="3.5" fill="#F5C87A" opacity="0.7" animate={{ y: [0, -5, 0], scale: [0.8, 1.1, 0.8] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
            <motion.circle cx="16" cy="30" r="3" fill="#7EB8F0" opacity="0.7" animate={{ y: [0, -4, 0], scale: [0.8, 1.1, 0.8] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.8 }} />
            <motion.circle cx="106" cy="90" r="2.5" fill="#9B8FE6" opacity="0.7" animate={{ y: [0, -3, 0], scale: [0.8, 1.1, 0.8] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />

            {/* Question mark hint */}
            <motion.g
                animate={{ y: [0, -3, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{ originX: '14px', originY: '85px' }}
            >
                <circle cx="14" cy="85" r="10" fill="#F5C87A" opacity="0.9" />
                <text x="14" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white" fontFamily="Inter, sans-serif">?</text>
            </motion.g>
        </motion.svg>
    );
}

/* ====== Streak Fire Illustration ====== */
export function StreakFire({ size = 60, days = 0 }: { size?: number; days: number }) {
    const isMobile = useIsMobile();
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 80 80"
            fill="none"
            animate={isMobile ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
            {/* Outer flame */}
            <motion.path
                d="M40 8 Q52 22 44 34 Q56 26 50 44 Q48 55 40 60 Q32 55 30 44 Q24 26 36 34 Q28 22 40 8Z"
                fill="#F06D5B"
                animate={isMobile ? undefined : { scale: [1, 1.05, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ originX: '40px', originY: '60px' }}
            />
            {/* Inner flame */}
            <path d="M40 22 Q48 32 44 40 Q40 48 38 40 Q34 32 40 22Z" fill="#F5C87A" />
            {/* Glow */}
            <circle cx="40" cy="40" r="25" fill="#F5C87A" opacity="0.15" />
            {/* Number */}
            <text x="40" y="75" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F06D5B" fontFamily="Inter, sans-serif">
                {days}
            </text>
        </motion.svg>
    );
}

/* ====== Empty State ====== */
export function EmptyStateIllustration({ size = 150 }: { size?: number }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <circle cx="100" cy="100" r="80" fill="#F1F5F9" />
            <circle cx="100" cy="100" r="60" fill="#E2E8F0" />
            <motion.text
                x="100" y="90" textAnchor="middle" fontSize="40"
                animate={{ y: [90, 85, 90] }}
                transition={{ duration: 2, repeat: Infinity }}
            >📝</motion.text>
            <text x="100" y="130" textAnchor="middle" fontSize="12" fill="#94A3B8" fontFamily="Inter, sans-serif">
                Start your journey!
            </text>
        </motion.svg>
    );
}
