'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SFXState {
    enabled: boolean;
    volume: number; // 0.0 to 1.0
    toggleEnabled: () => void;
    setVolume: (v: number) => void;
}

export const useSFXStore = create<SFXState>()(
    persist(
        (set) => ({
            enabled: true,
            volume: 0.5,
            toggleEnabled: () => set((state) => ({ enabled: !state.enabled })),
            setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),
        }),
        {
            name: 'spear-sfx-storage',
        }
    )
);
