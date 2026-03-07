'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuestState {
    // Key = YYYY-MM-DD, value = quest completed
    completedQuests: Record<string, boolean>;
    // Score for last quest
    questScores: Record<string, number>;
    // Total quests completed (all time)
    totalQuestsCompleted: number;

    // Actions
    completeQuest: (date: string, score: number) => void;
    isQuestCompleted: (date: string) => boolean;
    clearStore: () => void;
}

export const useQuestStore = create<QuestState>()(
    persist(
        (set, get) => ({
            completedQuests: {},
            questScores: {},
            totalQuestsCompleted: 0,

            clearStore: () => set({ completedQuests: {}, questScores: {}, totalQuestsCompleted: 0 }),

            completeQuest: (date: string, score: number) => {
                const state = get();
                if (state.completedQuests[date]) return; // Already completed
                set({
                    completedQuests: { ...state.completedQuests, [date]: true },
                    questScores: { ...state.questScores, [date]: score },
                    totalQuestsCompleted: state.totalQuestsCompleted + 1,
                });
            },

            isQuestCompleted: (date: string) => {
                return !!get().completedQuests[date];
            },
        }),
        {
            name: 'spear-quest-storage',
        }
    )
);
