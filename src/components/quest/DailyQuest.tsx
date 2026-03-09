'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quest, getDailyQuest, getQuestTier, isSaturdayToday, QuestTier } from '@/data/quest-data';
import { useAppStore } from '@/store/useAppStore';
import { useQuestStore } from '@/store/useQuestStore';
import { useT } from '@/store/useLanguageStore';
import GlassCard from '@/components/ui/GlassCard';
import { useIsMobile } from '@/hooks/useIsMobile';

// ============================================================
// SVG Icons (no emojis!)
// ============================================================
function FlameIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 8 5 11 5 15a7 7 0 0014 0c0-4-3-7-7-13z" fill="currentColor" opacity="0.9" />
            <path d="M12 9c-2 3-3 5-3 7a3 3 0 006 0c0-2-1-4-3-7z" fill="currentColor" opacity="0.5" />
        </svg>
    );
}
function StarIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" opacity="0.95" />
        </svg>
    );
}
function BoltIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" fill="currentColor" opacity="0.95" />
        </svg>
    );
}
function TrophyIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 2h12v6a6 6 0 01-12 0V2z" fill="currentColor" opacity="0.9" />
            <path d="M4 4H2v4a4 4 0 004 4V8H4V4z" fill="currentColor" opacity="0.5" />
            <path d="M20 4h2v4a4 4 0 01-4 4V8h2V4z" fill="currentColor" opacity="0.5" />
            <rect x="10" y="14" width="4" height="4" rx="1" fill="currentColor" opacity="0.7" />
            <rect x="7" y="18" width="10" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
        </svg>
    );
}
function CheckCircleIcon({ size = 20 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#8CD790" />
            <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function HintIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="10" r="7" fill="#F5C87A" opacity="0.8" />
            <rect x="10" y="17" width="4" height="2" rx="1" fill="#F5C87A" opacity="0.6" />
            <rect x="11" y="20" width="2" height="2" rx="1" fill="#F5C87A" opacity="0.4" />
            <path d="M12 6v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 11v1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

// Animated particles for celebration
function CelebrationBurst() {
    const particles = Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 30;
        const y = Math.sin(angle) * 30;
        const colors = ['#F06D5B', '#7EB8F0', '#F5C87A', '#8CD790', '#9B8FE6', '#6DD5C4'];
        return { x, y, color: colors[i % colors.length], delay: i * 0.05 };
    });
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {particles.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ background: p.color }}
                    initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                    animate={{ scale: [0, 1, 0], x: [0, p.x], y: [0, p.y], opacity: [1, 1, 0] }}
                    transition={{ duration: 0.8, delay: p.delay, ease: 'easeOut' }}
                />
            ))}
        </div>
    );
}

const tierIcons: Record<QuestTier, React.FC> = {
    'html': FlameIcon,
    'html+css': StarIcon,
    'html+css+js': BoltIcon,
};

const tierLabels: Record<QuestTier, { label: string; themeClass: string }> = {
    'html': { label: 'HTML', themeClass: 'bg-error/15 text-error dark:bg-error/20' },
    'html+css': { label: 'HTML + CSS', themeClass: 'bg-accent/15 text-accent dark:bg-accent/20' },
    'html+css+js': { label: 'HTML + CSS + JS', themeClass: 'bg-warning/15 text-warning dark:bg-warning/20' },
};

// ============================================================
// Quiz Exercise
// ============================================================
function QuizExercise({
    quest,
    onComplete,
}: {
    quest: Quest & { type: 'quiz' };
    onComplete: (correct: boolean) => void;
}) {
    const [selected, setSelected] = useState<number | null>(null);
    const [answered, setAnswered] = useState(false);
    const t = useT();

    const handleCheck = () => {
        if (selected === null) return;
        setAnswered(true);
        onComplete(selected === quest.correctIndex);
    };

    return (
        <div className="space-y-4">
            <p className="text-text font-semibold text-sm leading-relaxed">{quest.question}</p>
            <div className="space-y-2">
                {quest.options.map((opt, i) => (
                    <motion.button
                        key={i}
                        onClick={() => !answered && setSelected(i)}
                        className={`
                            w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer
                            ${answered
                                ? i === quest.correctIndex
                                    ? 'bg-success/20 text-success border-2 border-success/40'
                                    : i === selected
                                        ? 'bg-error/20 text-error border-2 border-error/40'
                                        : 'bg-white/30 text-text-secondary border-2 border-transparent'
                                : selected === i
                                    ? 'bg-primary/15 text-primary border-2 border-primary/40'
                                    : 'bg-white/40 text-text hover:bg-white/60 border-2 border-transparent'
                            }
                        `}
                        whileTap={!answered ? { scale: 0.98 } : undefined}
                    >
                        <span className="inline-flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold" style={{
                                background: answered
                                    ? i === quest.correctIndex ? 'rgba(140, 215, 144, 0.3)' : i === selected ? 'rgba(240, 109, 91, 0.3)' : 'rgba(0,0,0,0.05)'
                                    : selected === i ? 'rgba(109, 213, 196, 0.3)' : 'rgba(0,0,0,0.05)',
                            }}>
                                {String.fromCharCode(65 + i)}
                            </span>
                            {opt}
                        </span>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {answered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-xl text-sm ${selected === quest.correctIndex ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}
                    >
                        <p className="font-bold mb-1">
                            {selected === quest.correctIndex ? t('quest.correct') : t('quest.wrong')}
                        </p>
                        <p className="text-xs opacity-80">{quest.explanation}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {!answered && (
                <motion.button
                    onClick={handleCheck}
                    disabled={selected === null}
                    className={`
                        w-full py-3 rounded-xl text-sm font-bold transition-all duration-200
                        ${selected !== null
                            ? 'bg-primary text-white cursor-pointer hover:opacity-90'
                            : 'bg-white/30 text-text-secondary cursor-not-allowed'
                        }
                    `}
                    whileTap={selected !== null ? { scale: 0.97 } : undefined}
                >
                    {t('quest.checkAnswer')}
                </motion.button>
            )}
        </div>
    );
}

// ============================================================
// Fill Blank Exercise
// ============================================================
function FillBlankExercise({
    quest,
    onComplete,
}: {
    quest: Quest & { type: 'fill-blank' };
    onComplete: (correct: boolean) => void;
}) {
    const [input, setInput] = useState('');
    const [answered, setAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const t = useT();

    const handleCheck = () => {
        const correct = input.trim().toLowerCase() === quest.answer.toLowerCase();
        setIsCorrect(correct);
        setAnswered(true);
        onComplete(correct);
    };

    return (
        <div className="space-y-4">
            <p className="text-text font-semibold text-sm">{quest.instruction}</p>
            <div className="bg-[#1e1e2e] rounded-xl p-4 overflow-x-auto">
                <pre className="text-xs text-green-300 font-mono whitespace-pre-wrap leading-relaxed">
                    {quest.codeTemplate.split('___').map((part, i, arr) => (
                        <React.Fragment key={i}>
                            <span>{part}</span>
                            {i < arr.length - 1 && (
                                answered ? (
                                    <span className={`px-2 py-0.5 rounded font-bold ${isCorrect ? 'bg-success/30 text-success' : 'bg-error/30 text-error'}`}>
                                        {isCorrect ? quest.answer : input || '???'}
                                    </span>
                                ) : (
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                                        className="w-28 px-2 py-0.5 rounded bg-white/10 border border-white/20 text-cyan-300 font-mono text-xs outline-none focus:border-cyan-400 transition-colors"
                                        placeholder="..."
                                        autoFocus
                                    />
                                )
                            )}
                        </React.Fragment>
                    ))}
                </pre>
            </div>

            {quest.hint && !answered && (
                <p className="text-xs text-text-secondary italic inline-flex items-center gap-1"><HintIcon /> Hint: {quest.hint}</p>
            )}

            <AnimatePresence>
                {answered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-xl text-sm ${isCorrect ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}
                    >
                        <p className="font-bold">
                            {isCorrect ? t('quest.correct') : t('quest.wrong')}
                        </p>
                        {!isCorrect && (
                            <p className="text-xs opacity-80 mt-1">
                                {t('quest.correctAnswerIs')} <code className="bg-black/10 px-1 rounded">{quest.answer}</code>
                            </p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {!answered && (
                <motion.button
                    onClick={handleCheck}
                    disabled={!input.trim()}
                    className={`
                        w-full py-3 rounded-xl text-sm font-bold transition-all duration-200
                        ${input.trim()
                            ? 'bg-primary text-white cursor-pointer hover:opacity-90'
                            : 'bg-white/30 text-text-secondary cursor-not-allowed'
                        }
                    `}
                    whileTap={input.trim() ? { scale: 0.97 } : undefined}
                >
                    {t('quest.checkAnswer')}
                </motion.button>
            )}
        </div>
    );
}

// ============================================================
// Drag & Drop Exercise
// ============================================================
function DragDropExercise({
    quest,
    onComplete,
}: {
    quest: Quest & { type: 'drag-drop' };
    onComplete: (correct: boolean) => void;
}) {
    const [placed, setPlaced] = useState<string[]>([]);
    const [available, setAvailable] = useState<string[]>([]);
    const [answered, setAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const t = useT();

    // Shuffle tokens on mount
    useEffect(() => {
        const shuffled = [...quest.tokens].sort(() => Math.random() - 0.5);
        setAvailable(shuffled);
        setPlaced([]);
        setAnswered(false);
        setIsCorrect(false);
    }, [quest.id, quest.tokens]);

    const addToken = useCallback((token: string) => {
        if (answered) return;
        setPlaced(p => [...p, token]);
        setAvailable(a => {
            const idx = a.indexOf(token);
            return [...a.slice(0, idx), ...a.slice(idx + 1)];
        });
    }, [answered]);

    const removeToken = useCallback((index: number) => {
        if (answered) return;
        const token = placed[index];
        setPlaced(p => [...p.slice(0, index), ...p.slice(index + 1)]);
        setAvailable(a => [...a, token]);
    }, [answered, placed]);

    const handleCheck = () => {
        const correct = placed.length === quest.correctOrder.length &&
            placed.every((t, i) => t === quest.correctOrder[i]);
        setIsCorrect(correct);
        setAnswered(true);
        onComplete(correct);
    };

    return (
        <div className="space-y-4">
            <p className="text-text font-semibold text-sm">{quest.instruction}</p>

            {/* Drop zone */}
            <div className="min-h-[80px] bg-[#1e1e2e] rounded-xl p-3 space-y-1.5">
                {placed.length === 0 ? (
                    <p className="text-xs text-white/30 text-center py-4">{t('quest.dragHere')}</p>
                ) : (
                    placed.map((token, i) => (
                        <motion.div
                            key={`${token}-${i}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`
                                px-3 py-1.5 rounded-lg font-mono text-xs cursor-pointer
                                ${answered
                                    ? token === quest.correctOrder[i]
                                        ? 'bg-success/20 text-green-300'
                                        : 'bg-error/20 text-red-300'
                                    : 'bg-white/10 text-cyan-300 hover:bg-white/15'
                                }
                            `}
                            onClick={() => removeToken(i)}
                        >
                            {token}
                        </motion.div>
                    ))
                )}
            </div>

            {/* Available tokens */}
            {!answered && (
                <div className="flex flex-wrap gap-2">
                    {available.map((token, i) => (
                        <motion.button
                            key={`${token}-${i}`}
                            onClick={() => addToken(token)}
                            className="px-3 py-1.5 bg-white/40 hover:bg-white/60 rounded-lg font-mono text-xs text-text cursor-pointer transition-colors"
                            whileTap={{ scale: 0.95 }}
                        >
                            {token}
                        </motion.button>
                    ))}
                </div>
            )}

            {quest.hint && !answered && (
                <p className="text-xs text-text-secondary italic inline-flex items-center gap-1"><HintIcon /> Hint: {quest.hint}</p>
            )}

            <AnimatePresence>
                {answered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-xl text-sm ${isCorrect ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}
                    >
                        <p className="font-bold">
                            {isCorrect ? t('quest.correct') : t('quest.wrong')}
                        </p>
                        {!isCorrect && (
                            <div className="mt-2 text-xs opacity-80">
                                <p className="mb-1">{t('quest.correctOrder')}</p>
                                <div className="bg-black/10 rounded-lg p-2 space-y-1">
                                    {quest.correctOrder.map((t, i) => (
                                        <div key={i} className="font-mono text-[11px]">{t}</div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {!answered && (
                <motion.button
                    onClick={handleCheck}
                    disabled={placed.length !== quest.correctOrder.length}
                    className={`
                        w-full py-3 rounded-xl text-sm font-bold transition-all duration-200
                        ${placed.length === quest.correctOrder.length
                            ? 'bg-primary text-white cursor-pointer hover:opacity-90'
                            : 'bg-white/30 text-text-secondary cursor-not-allowed'
                        }
                    `}
                    whileTap={placed.length === quest.correctOrder.length ? { scale: 0.97 } : undefined}
                >
                    {t('quest.checkAnswer')}
                </motion.button>
            )}
        </div>
    );
}

// ============================================================
// Main DailyQuest Component
// ============================================================
export default function DailyQuest() {
    const { progress } = useAppStore();
    const { completeQuest, isQuestCompleted, totalQuestsCompleted } = useQuestStore();
    const t = useT();
    const [mounted, setMounted] = useState(false);
    const [questDone, setQuestDone] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    const tier = getQuestTier(progress);
    if (!tier) return null; // No quest if no language 100%

    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    const quest = getDailyQuest(tier, today);
    if (!quest) return null;

    const alreadyCompleted = isQuestCompleted(dateStr);
    const isSaturday = isSaturdayToday(today);
    const tierInfo = tierLabels[tier];

    const handleComplete = (correct: boolean) => {
        const score = correct ? 100 : 0;
        completeQuest(dateStr, score);
        setQuestDone(true);
    };

    return (
        <GlassCard delay={0.15}>
            {/* Quest Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <motion.div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${tierInfo.themeClass}`}
                        animate={isMobile ? {} : { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        {React.createElement(tierIcons[tier])}
                    </motion.div>
                    <div>
                        <h3 className="text-base font-bold text-text flex items-center gap-2">
                            {t('quest.title')}
                            {isSaturday && (
                                <motion.span
                                    className="text-xs px-2 py-0.5 bg-warning/20 text-warning rounded-full font-bold inline-flex items-center gap-1"
                                    initial={{ scale: 0, rotate: -10 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                >
                                    <TrophyIcon /> {t('quest.saturday')}
                                </motion.span>
                            )}
                        </h3>
                        <p className="text-xs text-text-secondary">
                            {tierInfo.label} Quest • +{quest.xpReward} XP
                        </p>
                    </div>
                </div>

                {/* Total completed badge */}
                {totalQuestsCompleted > 0 && (
                    <motion.div
                        className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-bold inline-flex items-center gap-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.3 }}
                    >
                        <CheckCircleIcon size={14} /> {totalQuestsCompleted}
                    </motion.div>
                )}
            </div>

            {/* Quest Title */}
            <div className="mb-4 px-3 py-2 bg-white/30 rounded-xl">
                <p className="text-sm font-bold text-text">{quest.title}</p>
            </div>

            {/* Quest Content */}
            {alreadyCompleted || questDone ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 relative"
                >
                    <CelebrationBurst />
                    <motion.div
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-success/15 text-success"
                        initial={isMobile ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 12, delay: 0.1 }}
                    >
                        <motion.div
                            animate={isMobile ? {} : { scale: [1, 1.15, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <CheckCircleIcon size={36} />
                        </motion.div>
                    </motion.div>
                    <motion.p
                        className="text-base font-bold text-success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {t('quest.completed')}
                    </motion.p>
                    <motion.p
                        className="text-xs text-text-secondary mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        +{quest.xpReward} XP • {t('quest.totalCompleted')}: {totalQuestsCompleted}
                    </motion.p>
                </motion.div>
            ) : (
                <div>
                    {quest.type === 'quiz' && (
                        <QuizExercise quest={quest as Quest & { type: 'quiz' }} onComplete={handleComplete} />
                    )}
                    {quest.type === 'fill-blank' && (
                        <FillBlankExercise quest={quest as Quest & { type: 'fill-blank' }} onComplete={handleComplete} />
                    )}
                    {quest.type === 'drag-drop' && (
                        <DragDropExercise quest={quest as Quest & { type: 'drag-drop' }} onComplete={handleComplete} />
                    )}
                </div>
            )}
        </GlassCard>
    );
}
