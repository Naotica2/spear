'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';

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

    const handleSelect = (index: number) => {
        if (answered) return;
        setSelected(index);
        setAnswered(true);
        setTimeout(() => {
            onComplete(index === correctIndex);
        }, 800);
    };

    const getButtonStyle = (index: number) => {
        if (!answered) return 'bg-white/70 border-2 border-transparent hover:border-primary/30';
        if (index === correctIndex) return 'bg-success/20 border-2 border-success';
        if (index === selected) return 'bg-error/20 border-2 border-error animate-shake';
        return 'bg-white/40 border-2 border-transparent opacity-50';
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
                {options.map((option, i) => (
                    <motion.button
                        key={i}
                        onClick={() => handleSelect(i)}
                        disabled={answered}
                        className={`
              w-full text-left p-4 rounded-[var(--radius-button)]
              font-medium transition-all duration-300
              cursor-pointer disabled:cursor-default
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
                            <span className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-sm font-bold text-text-secondary shrink-0">
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span>{option}</span>
                        </span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
