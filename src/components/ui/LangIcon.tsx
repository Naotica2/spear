import React from 'react';

interface LangIconProps {
    lang: string;
    size?: number;
    className?: string;
}

export default function LangIcon({ lang, size = 24, className = '' }: LangIconProps) {
    const s = size;

    switch (lang) {
        case 'html':
            return (
                <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
                    <path d="M4 3L5.78 19.12L12 21L18.22 19.12L20 3H4Z" fill="#F06D5B" opacity="0.15" />
                    <path d="M4 3L5.78 19.12L12 21L18.22 19.12L20 3H4Z" stroke="#F06D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 7H16L15.5 13L12 14L8.5 13L8.3 11" stroke="#F06D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'css':
            return (
                <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
                    <path d="M4 3L5.78 19.12L12 21L18.22 19.12L20 3H4Z" fill="#7EB8F0" opacity="0.15" />
                    <path d="M4 3L5.78 19.12L12 21L18.22 19.12L20 3H4Z" stroke="#7EB8F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 7H8L8.3 11H15.5L15 15L12 16L9 15L8.8 13" stroke="#7EB8F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'js':
            return (
                <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
                    <rect x="3" y="3" width="18" height="18" rx="3" fill="#F5C87A" opacity="0.15" />
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#F5C87A" strokeWidth="1.5" />
                    <path d="M10 9V15.5C10 16.3 9.5 17 8.5 17" stroke="#F5C87A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 14C14 15.7 15 17 16.5 17C17.8 17 18 16 18 16V14.5C18 13.5 17 13 16 13C15 13 14 12.5 14 11.5V10C14 9 15 8 16.5 8C17.5 8 18 8.5 18 8.5" stroke="#F5C87A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'php':
            return (
                <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
                    <ellipse cx="12" cy="12" rx="10" ry="7" fill="#9B8FE6" opacity="0.15" />
                    <ellipse cx="12" cy="12" rx="10" ry="7" stroke="#9B8FE6" strokeWidth="1.5" />
                    <path d="M7 12L8 9H10L9 12" stroke="#9B8FE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 9H16C16.8 9 17.5 9.7 17.5 10.5C17.5 11.3 16.8 12 16 12H14.5L14 14" stroke="#9B8FE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case 'mysql':
            return (
                <svg width={s} height={s} viewBox="0 0 24 24" fill="none" className={className}>
                    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#3B82F6" opacity="0.15" />
                    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#3B82F6" strokeWidth="1.5" />
                    <path d="M4 6V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        default:
            return (
                <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            );
    }
}
