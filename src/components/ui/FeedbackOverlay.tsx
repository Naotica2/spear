'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SuccessIllustration, ErrorIllustration } from '@/components/illustrations/Mascots';

interface FeedbackOverlayProps {
    show: boolean;
    isCorrect: boolean;
    message?: string;
    explanation?: string;
    onContinue: () => void;
}

export default function FeedbackOverlay({
    show,
    isCorrect,
    message,
    explanation,
    onContinue,
}: FeedbackOverlayProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center p-4"
                    style={{ zIndex: 100 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: isCorrect
                                ? 'rgba(140, 215, 144, 0.15)'
                                : 'rgba(240, 145, 140, 0.15)',
                            backdropFilter: 'blur(8px)',
                        }}
                        onClick={onContinue}
                    />

                    {/* Card */}
                    <motion.div
                        className="relative glass-strong rounded-[var(--radius-card)] p-8 text-center max-w-sm w-full soft-shadow-lg"
                        initial={{ scale: 0.5, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: -20 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 15,
                        }}
                    >
                        {/* Icon */}
                        <div className="mb-4 flex justify-center">
                            {isCorrect ? <SuccessIllustration size={80} /> : <ErrorIllustration size={80} />}
                        </div>

                        {/* Title */}
                        <motion.h3
                            className="text-2xl font-bold mb-2"
                            style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-error)' }}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15 }}
                        >
                            {isCorrect
                                ? (message || 'Correct!')
                                : (message || 'Not quite...')}
                        </motion.h3>

                        {/* Explanation */}
                        {explanation && (
                            <motion.p
                                className="text-text-secondary text-sm mb-6 leading-relaxed"
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25 }}
                            >
                                {explanation}
                            </motion.p>
                        )}

                        {/* Continue Button */}
                        <motion.button
                            onClick={onContinue}
                            className="px-8 py-3 rounded-[var(--radius-button)] font-semibold text-white w-full cursor-pointer"
                            style={{
                                background: isCorrect ? 'var(--color-success)' : 'var(--color-accent)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.02 }}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {isCorrect ? 'Continue' : 'Try Again'}
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
