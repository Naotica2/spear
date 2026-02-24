-- =============================================
-- CodeCraft Supabase Database Schema
-- Run this in Supabase SQL Editor
-- =============================================

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL DEFAULT 'Learner',
  avatar TEXT NOT NULL DEFAULT 'coder',
  streak INTEGER NOT NULL DEFAULT 0,
  last_active_date DATE,
  streak_days BOOLEAN[] NOT NULL DEFAULT ARRAY[false, false, false, false, false, false, false],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Progress table (one row per completed level)
CREATE TABLE IF NOT EXISTS progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  language TEXT NOT NULL CHECK (language IN ('html', 'css', 'js', 'php')),
  level_id TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0 CHECK (score >= 0 AND score <= 100),
  completed BOOLEAN NOT NULL DEFAULT true,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, language, level_id)
);

-- Badges table (one row per earned badge)
CREATE TABLE IF NOT EXISTS badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  badge_id TEXT NOT NULL,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

-- Indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_lang ON progress(user_id, language);
CREATE INDEX IF NOT EXISTS idx_badges_user ON badges(user_id);

-- Auto-update updated_at on users
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS users_updated_at ON users;
CREATE TRIGGER users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Row Level Security (enable when using auth)
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE badges ENABLE ROW LEVEL SECURITY;
