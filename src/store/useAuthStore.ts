'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getSupabase } from '@/lib/supabase';
import { useAppStore } from './useAppStore';
import { usePetStore } from './usePetStore';
import { useQuestStore } from './useQuestStore';

// Admin account — login with this email to get admin powers
const ADMIN_EMAIL = 'admin@spear.com';

export interface AuthUser {
    id: string;
    email: string;
    name: string;
}

const backupState = (userId: string) => {
    if (typeof window === 'undefined') return;
    const backup = {
        app: useAppStore.getState(),
        pet: usePetStore.getState(),
        quest: useQuestStore.getState(),
    };
    localStorage.setItem(`spear-backup-${userId}`, JSON.stringify(backup));
};

const restoreState = (userId: string) => {
    if (typeof window === 'undefined') return;
    const backupStr = localStorage.getItem(`spear-backup-${userId}`);
    if (backupStr) {
        try {
            const backup = JSON.parse(backupStr);
            if (backup.app) useAppStore.setState(backup.app);
            if (backup.pet) usePetStore.setState(backup.pet);
            if (backup.quest) useQuestStore.setState(backup.quest);
        } catch (e) {
            console.error('Failed to restore backup', e);
        }
    }
};

export interface AuthState {
    isLoggedIn: boolean;
    isAdmin: boolean;
    user: AuthUser | null;
    isLoading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => Promise<void>;
    clearError: () => void;
    checkSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            isLoggedIn: false,
            isAdmin: false,
            user: null,
            isLoading: false,
            error: null,

            login: async (email: string, password: string) => {
                set({ isLoading: true, error: null });
                try {
                    const client = getSupabase();
                    if (client) {
                        const { data, error } = await client.auth.signInWithPassword({
                            email,
                            password,
                        });
                        if (error) {
                            set({ isLoading: false, error: error.message });
                            return false;
                        }
                        if (data.user) {
                            set({
                                isLoggedIn: true,
                                isAdmin: email.toLowerCase() === ADMIN_EMAIL,
                                user: {
                                    id: data.user.id,
                                    email: data.user.email || email,
                                    name: data.user.user_metadata?.name || email.split('@')[0],
                                },
                                isLoading: false,
                                error: null,
                            });
                            restoreState(data.user.id);
                            return true;
                        }
                    }
                    // Fallback: local-only auth if Supabase not configured
                    const localId = `local-${Date.now()}`;
                    set({
                        isLoggedIn: true,
                        isAdmin: email.toLowerCase() === ADMIN_EMAIL,
                        user: {
                            id: localId,
                            email,
                            name: email.split('@')[0],
                        },
                        isLoading: false,
                        error: null,
                    });
                    restoreState(localId);
                    return true;
                } catch {
                    set({ isLoading: false, error: 'Login failed. Please try again.' });
                    return false;
                }
            },

            register: async (name: string, email: string, password: string) => {
                set({ isLoading: true, error: null });
                try {
                    const client = getSupabase();
                    if (client) {
                        const { data, error } = await client.auth.signUp({
                            email,
                            password,
                            options: {
                                data: { name },
                            },
                        });
                        if (error) {
                            set({ isLoading: false, error: error.message });
                            return false;
                        }
                        if (data.user) {
                            set({
                                isLoggedIn: true,
                                user: {
                                    id: data.user.id,
                                    email: data.user.email || email,
                                    name: name,
                                },
                                isLoading: false,
                                error: null,
                            });
                            restoreState(data.user.id);
                            return true;
                        }
                    }
                    // Fallback: local-only auth
                    const localId = `local-${Date.now()}`;
                    set({
                        isLoggedIn: true,
                        user: {
                            id: localId,
                            email,
                            name,
                        },
                        isLoading: false,
                        error: null,
                    });
                    restoreState(localId);
                    return true;
                } catch {
                    set({ isLoading: false, error: 'Registration failed. Please try again.' });
                    return false;
                }
            },

            logout: async () => {
                const currentUser = get().user;
                if (currentUser) {
                    backupState(currentUser.id);
                }

                try {
                    const client = getSupabase();
                    if (client) {
                        await client.auth.signOut();
                    }
                } catch {
                    // ignore
                }

                // Clear all persistent app state stores
                useAppStore.getState().clearStore();
                usePetStore.getState().clearStore();
                useQuestStore.getState().clearStore();

                set({ isLoggedIn: false, isAdmin: false, user: null, error: null });
            },

            clearError: () => set({ error: null }),

            checkSession: async () => {
                const state = get();
                // Already logged in or already checked — skip network call
                if (state.isLoggedIn || (state as unknown as Record<string, boolean>)._sessionChecked) return;
                try {
                    const client = getSupabase();
                    if (client) {
                        const { data } = await client.auth.getSession();
                        if (data.session?.user) {
                            set({
                                isLoggedIn: true,
                                user: {
                                    id: data.session.user.id,
                                    email: data.session.user.email || '',
                                    name: data.session.user.user_metadata?.name || data.session.user.email?.split('@')[0] || 'User',
                                },
                            } as Partial<AuthState>);
                        }
                    }
                } catch {
                    // ignore
                }
                // Mark as checked so we don't repeat
                set({ _sessionChecked: true } as Partial<AuthState>);
            },
        }),
        {
            name: 'spear-auth',
            partialize: (state) => ({
                isLoggedIn: state.isLoggedIn,
                isAdmin: state.isAdmin,
                user: state.user,
            }),
        }
    )
);
