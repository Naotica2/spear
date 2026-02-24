'use client';

import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';

interface DragAndDropProps {
    instruction: string;
    tokens: string[];
    correctOrder: string[];
    hint: string;
    onComplete: (isCorrect: boolean) => void;
}

export default function DragAndDrop({
    instruction,
    tokens,
    correctOrder,
    hint,
    onComplete,
}: DragAndDropProps) {
    const [items, setItems] = useState(() => {
        const shuffled = [...tokens];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    });
    const [submitted, setSubmitted] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const isCorrect = JSON.stringify(items) === JSON.stringify(correctOrder);

    const handleSubmit = () => {
        if (submitted) return;
        setSubmitted(true);
        setTimeout(() => {
            onComplete(isCorrect);
        }, 800);
    };

    return (
        <div className="space-y-6">
            <motion.h3
                className="text-lg font-bold text-text text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {instruction}
            </motion.h3>

            <motion.p
                className="text-sm text-text-secondary text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                ↕️ Drag to reorder the code tokens
            </motion.p>

            {/* Drag area */}
            <motion.div
                className="bg-[#1E293B] rounded-[var(--radius-button)] p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24, delay: 0.15 }}
            >
                <Reorder.Group
                    axis="y"
                    values={items}
                    onReorder={submitted ? () => { } : setItems}
                    className="space-y-2"
                >
                    {items.map((item, index) => (
                        <Reorder.Item
                            key={item}
                            value={item}
                            className={`
                flex items-center gap-3 p-3 rounded-xl font-mono text-sm
                cursor-grab active:cursor-grabbing transition-colors duration-300
                ${submitted
                                    ? item === correctOrder[index]
                                        ? 'bg-success/20 border border-success/40 text-success'
                                        : 'bg-error/20 border border-error/40 text-error'
                                    : 'bg-white/10 border border-white/10 text-[#E2E8F0] hover:bg-white/15'
                                }
              `}
                            whileDrag={{
                                scale: 1.05,
                                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                                zIndex: 10,
                            }}
                        >
                            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                                {index + 1}
                            </span>
                            <code>{item}</code>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
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
                    disabled={submitted}
                    className="flex-1 px-6 py-3 rounded-[var(--radius-button)] font-semibold text-white bg-primary hover:bg-primary-dark transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                >
                    Check Order ✓
                </motion.button>
            </div>

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
