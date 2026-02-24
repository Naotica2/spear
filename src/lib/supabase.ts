import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Lazy-create client only when valid credentials exist
let _client: SupabaseClient | null = null;

function getClient(): SupabaseClient | null {
    if (_client) return _client;
    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'your_supabase_url_here') {
        return null;
    }
    try {
        _client = createClient(supabaseUrl, supabaseAnonKey);
        return _client;
    } catch {
        return null;
    }
}

/**
 * Safe Supabase client wrapper.
 * Returns null if credentials are not configured yet.
 * Use: const client = getSupabase(); if (client) { ... }
 */
export function getSupabase(): SupabaseClient | null {
    return getClient();
}

// Database types
export interface DBUser {
    id: string;
    username: string;
    avatar: string;
    streak: number;
    last_active_date: string;
    streak_days: boolean[];
    created_at: string;
    updated_at: string;
}

export interface DBProgress {
    id: string;
    user_id: string;
    language: string;
    level_id: string;
    score: number;
    completed: boolean;
    completed_at: string;
}

export interface DBBadge {
    id: string;
    user_id: string;
    badge_id: string;
    earned_at: string;
}
