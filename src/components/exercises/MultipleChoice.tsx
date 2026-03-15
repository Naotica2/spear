'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/magneticButton';

interface MultipleChoiceProps {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    onComplete: (isCorrect: boolean) => void;
}

export default function MultipleChoice({
    question,
    options,
    correctIndex,
    explanation,
    onComplete,
}: MultipleChoiceProps) {
    const [selected, setSelected] = useState<number | null>(null);
    const [answered, setAnswered] = useState(false);

    // Initial shuffle
    const [shuffledState, setShuffledState] = useState(() => {
        const mapped = options.map((text, i) => ({ text, originalIndex: i }));
        for (let i = mapped.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mapped[i], mapped[j]] = [mapped[j], mapped[i]];
        }
        return { items: mapped, key: question };
    });

    // Re-shuffle when question changes
    if (question !== shuffledState.key) {
        const mapped = options.map((text, i) => ({ text, originalIndex: i }));
        for (let i = mapped.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mapped[i], mapped[j]] = [mapped[j], mapped[i]];
        }
        setShuffledState({ items: mapped, key: question });
        setSelected(null);
        setAnswered(false);
    }

    const shuffledOptions = shuffledState.items;

    const handleSelect = (index: number) => {
        if (answered) return;
        setSelected(index);
        setAnswered(true);

        const isCorrect = shuffledOptions[index].originalIndex === correctIndex;

        setTimeout(() => {
            onComplete(isCorrect);
        }, 800);
    };

    const getButtonStyle = (index: number) => {
        if (!answered) return 'bg-white/70 dark:bg-slate-800/80 border-2 border-transparent hover:border-primary/30 dark:hover:border-primary/50 text-text cursor-pointer hover:bg-white/90 dark:hover:bg-slate-700/80';

        const isCorrectOption = shuffledOptions[index].originalIndex === correctIndex;
        if (isCorrectOption) return 'bg-success/20 border-2 border-success text-text';
        if (index === selected) return 'bg-error/20 border-2 border-error animate-shake text-text';
        return 'bg-white/40 dark:bg-slate-800/40 border-2 border-transparent opacity-50 text-text';
    };

    return (
        <div className="space-y-6">
            <motion.h3
                className="text-xl font-bold text-text text-center leading-relaxed"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {question}
            </motion.h3>

            <div className="space-y-3">
                {shuffledOptions.map((option, i) => (
                    <motion.button
                        key={i}
                        onClick={() => handleSelect(i)}
                        disabled={answered}
                        className={`
              w-full text-left p-4 rounded-[var(--radius-button)]
              font-medium transition-all duration-300
              disabled:cursor-default
              ${getButtonStyle(i)}
            `}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 24,
                            delay: i * 0.08,
                        }}
                        whileHover={!answered ? { scale: 1.01, x: 4 } : undefined}
                        whileTap={!answered ? { scale: 0.98 } : undefined}
                    >
                        <span className="inline-flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/80 dark:bg-slate-600 flex items-center justify-center text-sm font-bold text-text-secondary dark:text-slate-200 shrink-0 shadow-sm">
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span>{option.text}</span>
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
