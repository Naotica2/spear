'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'html' | 'css' | 'js' | 'php';

export interface LevelProgress {
  completed: boolean;
  score: number; // 0-100
}

export interface LanguageProgress {
  completedLevels: Record<string, LevelProgress>;
  overallProgress: number; // 0-100
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: string;
}

export interface AppState {
  userName: string;
  avatar: string;
  streak: number;
  lastActiveDate: string;
  streakDays: boolean[]; // last 7 days
  progress: Record<Language, LanguageProgress>;
  badges: Badge[];
  // Actions
  setUserName: (name: string) => void;
  completeLevel: (lang: Language, levelId: string, score: number) => void;
  updateStreak: () => void;
  awardBadge: (badgeId: string) => void;
  getLanguageProgress: (lang: Language) => number;
}

const defaultProgress: Record<Language, LanguageProgress> = {
  html: { completedLevels: {}, overallProgress: 0 },
  css: { completedLevels: {}, overallProgress: 0 },
  js: { completedLevels: {}, overallProgress: 0 },
  php: { completedLevels: {}, overallProgress: 0 },
};

const defaultBadges: Badge[] = [
  { id: 'first-lesson', name: 'First Step', description: 'Complete your first lesson', icon: 'star', earned: false },
  { id: 'html-master', name: 'HTML Hero', description: 'Complete all HTML levels', icon: 'html', earned: false },
  { id: 'css-master', name: 'CSS Wizard', description: 'Complete all CSS levels', icon: 'css', earned: false },
  { id: 'js-master', name: 'JS Ninja', description: 'Complete all JavaScript levels', icon: 'js', earned: false },
  { id: 'php-master', name: 'PHP Guru', description: 'Complete all PHP levels', icon: 'php', earned: false },
  { id: 'streak-3', name: 'On Fire!', description: '3-day streak', icon: 'fire', earned: false },
  { id: 'streak-7', name: 'Unstoppable', description: '7-day streak', icon: 'fire-pro', earned: false },
  { id: 'perfect-score', name: 'Perfectionist', description: 'Get 100% on any level', icon: 'perfect', earned: false },
  { id: 'all-languages', name: 'Polyglot', description: 'Complete a level in each language', icon: 'globe', earned: false },
];

const TOTAL_LEVELS_PER_LANG = 15;

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      userName: 'Learner',
      avatar: 'coder',
      streak: 0,
      lastActiveDate: '',
      streakDays: [false, false, false, false, false, false, false],
      progress: defaultProgress,
      badges: defaultBadges,

      setUserName: (name: string) => set({ userName: name }),

      completeLevel: (lang: Language, levelId: string, score: number) => {
        const state = get();
        const langProgress = { ...state.progress[lang] };
        langProgress.completedLevels = {
          ...langProgress.completedLevels,
          [levelId]: { completed: true, score },
        };
        const completedCount = Object.keys(langProgress.completedLevels).length;
        langProgress.overallProgress = Math.round((completedCount / TOTAL_LEVELS_PER_LANG) * 100);

        const newProgress = { ...state.progress, [lang]: langProgress };
        set({ progress: newProgress });

        // Check badges
        const badges = [...state.badges];

        // First lesson badge
        const firstLesson = badges.find(b => b.id === 'first-lesson');
        if (firstLesson && !firstLesson.earned) {
          firstLesson.earned = true;
          firstLesson.earnedAt = new Date().toISOString();
        }

        // Perfect score badge
        if (score === 100) {
          const perfect = badges.find(b => b.id === 'perfect-score');
          if (perfect && !perfect.earned) {
            perfect.earned = true;
            perfect.earnedAt = new Date().toISOString();
          }
        }

        // Language master badges
        if (langProgress.overallProgress === 100) {
          const masterBadge = badges.find(b => b.id === `${lang}-master`);
          if (masterBadge && !masterBadge.earned) {
            masterBadge.earned = true;
            masterBadge.earnedAt = new Date().toISOString();
          }
        }

        // Polyglot badge
        const allLangs: Language[] = ['html', 'css', 'js', 'php'];
        const hasAllLangs = allLangs.every(l => {
          const p = l === lang ? langProgress : newProgress[l];
          return Object.keys(p.completedLevels).length > 0;
        });
        if (hasAllLangs) {
          const polyglot = badges.find(b => b.id === 'all-languages');
          if (polyglot && !polyglot.earned) {
            polyglot.earned = true;
            polyglot.earnedAt = new Date().toISOString();
          }
        }

        set({ badges });

        // Update streak
        get().updateStreak();
      },

      updateStreak: () => {
        const state = get();
        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        let newStreak = state.streak;
        const newStreakDays = [...state.streakDays];

        if (state.lastActiveDate === today) return;

        if (state.lastActiveDate === yesterday) {
          newStreak += 1;
        } else if (state.lastActiveDate !== today) {
          newStreak = 1;
        }

        newStreakDays.pop();
        newStreakDays.unshift(true);

        // Streak badges
        const badges = [...state.badges];
        if (newStreak >= 3) {
          const b = badges.find(b => b.id === 'streak-3');
          if (b && !b.earned) { b.earned = true; b.earnedAt = new Date().toISOString(); }
        }
        if (newStreak >= 7) {
          const b = badges.find(b => b.id === 'streak-7');
          if (b && !b.earned) { b.earned = true; b.earnedAt = new Date().toISOString(); }
        }

        set({
          streak: newStreak,
          lastActiveDate: today,
          streakDays: newStreakDays,
          badges,
        });
      },

      awardBadge: (badgeId: string) => {
        set(state => ({
          badges: state.badges.map(b =>
            b.id === badgeId ? { ...b, earned: true, earnedAt: new Date().toISOString() } : b
          ),
        }));
      },

      getLanguageProgress: (lang: Language) => {
        return get().progress[lang].overallProgress;
      },
    }),
    {
      name: 'codecraft-storage',
    }
  )
);
