'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Lang = 'id' | 'en';

interface LanguageState {
    lang: Lang;
    setLang: (lang: Lang) => void;
    toggle: () => void;
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            lang: 'id', // Default to Indonesian
            setLang: (lang) => set({ lang }),
            toggle: () => set((s) => ({ lang: s.lang === 'id' ? 'en' : 'id' })),
        }),
        { name: 'spear-lang' }
    )
);

/** Helper hook: returns a translate function */
export function useT() {
    const lang = useLanguageStore((s) => s.lang);
    return (key: string): string => {
        const entry = translations[key];
        if (!entry) return key;
        return entry[lang] || entry.en || key;
    };
}

// Re-export translations for direct access
import { translations } from '@/data/translations';
