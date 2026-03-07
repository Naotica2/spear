'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type PetType = 'fox' | 'cat' | 'owl';
export type PetStage = 'baby' | 'teen' | 'adult';

export interface PetState {
    selectedPet: PetType | null;
    petXP: number;
    showWanderingPet: boolean;
    equippedAccessories: string[];

    // Actions
    selectPet: (pet: PetType) => void;
    addPetXP: (xp: number) => void;
    getPetStage: () => PetStage;
    setShowWanderingPet: (show: boolean) => void;
    toggleAccessory: (accessoryId: string) => void;
    clearStore: () => void;
}

// XP thresholds for evolution
export const PET_XP_THRESHOLDS = {
    TEEN: 150,
    ADULT: 500,
};

export const usePetStore = create<PetState>()(
    persist(
        (set, get) => ({
            selectedPet: null,
            petXP: 0,
            showWanderingPet: true,
            equippedAccessories: [],

            clearStore: () => set({ selectedPet: null, petXP: 0, showWanderingPet: true, equippedAccessories: [] }),

            selectPet: (pet) => set({ selectedPet: pet, petXP: 0 }),

            addPetXP: (xp) => set((state) => ({ petXP: state.petXP + xp })),

            getPetStage: () => {
                const { petXP } = get();
                if (petXP >= PET_XP_THRESHOLDS.ADULT) return 'adult';
                if (petXP >= PET_XP_THRESHOLDS.TEEN) return 'teen';
                return 'baby';
            },

            setShowWanderingPet: (show) => set({ showWanderingPet: show }),

            toggleAccessory: (accId) => set((state) => {
                const has = state.equippedAccessories.includes(accId);
                return {
                    equippedAccessories: has
                        ? state.equippedAccessories.filter(id => id !== accId)
                        : [...state.equippedAccessories, accId]
                };
            })
        }),
        {
            name: 'spear-pet-storage',
        }
    )
);
