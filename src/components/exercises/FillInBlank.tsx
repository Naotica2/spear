'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FillInBlankProps {
    instruction: string;
    codeTemplate: string;
    answer: string;
    hint: string;
    onComplete: (isCorrect: boolean) => void;
}

export default function FillInBlank({
    instruction,
    codeTemplate,
    answer,
    hint,
    onComplete,
}: FillInBlankProps) {
    const [userInput, setUserInput] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const isCorrect = userInput.trim().toLowerCase() === answer.toLowerCase();

    const handleSubmit = () => {
        if (!userInput.trim() || submitted) return;
        setSubmitted(true);
        setTimeout(() => {
            onComplete(isCorrect);
        }, 800);
    };

    const parts = codeTemplate.split('__BLANK__');

    return (
        <div className="space-y-6">
            <motion.h3
                className="text-lg font-bold text-text text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {instruction}
            </motion.h3>

            {/* Code block with inline input */}
            <motion.div
                className="bg-[#1E293B] rounded-[var(--radius-button)] p-5 font-mono text-sm overflow-x-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.1 }}
            >
                <pre className="text-[#E2E8F0] whitespace-pre-wrap">
                    {parts[0]}
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => !submitted && setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        placeholder="..."
                        disabled={submitted}
                        className={`
              inline-block bg-white/10 border-2 border-dashed rounded-lg
              px-3 py-1 text-center min-w-[80px] max-w-[200px]
              font-mono text-sm outline-none transition-all duration-300
              ${submitted
                                ? isCorrect
                                    ? 'border-success text-success bg-success/10'
                                    : 'border-error text-error bg-error/10'
                                : 'border-primary/40 text-primary focus:border-primary'
                            }
            `}
                        style={{ width: `${Math.max(80, answer.length * 12)}px` }}
                    />
                    {parts[1]}
                </pre>
            </motion.div>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <motion.button
                    onClick={() => setShowHint(!showHint)}
                    className="px-4 py-2 rounded-[var(--radius-button)] text-sm font-medium text-text-secondary bg-white/50 hover:bg-white/70 transition-colors cursor-pointer"
                    whileTap={{ scale: 0.95 }}
                >
                    💡 Hint
                </motion.button>

                <motion.button
                    onClick={handleSubmit}
                    disabled={!userInput.trim() || submitted}
                    className="flex-1 px-6 py-3 rounded-[var(--radius-button)] font-semibold text-white bg-primary hover:bg-primary-dark transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                >
                    Check Answer ✓
                </motion.button>
            </div>

            {/* Hint */}
            {showHint && (
                <motion.div
                    className="bg-warning/10 border border-warning/30 rounded-[var(--radius-button)] p-3 text-sm text-text-secondary"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                >
                    💡 {hint}
                </motion.div>
            )}
        </div>
    );
}
