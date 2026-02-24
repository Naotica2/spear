'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { curriculum, Slide } from '@/data/curriculum';
import { useAppStore, Language } from '@/store/useAppStore';
import MultipleChoice from '@/components/exercises/MultipleChoice';
import FillInBlank from '@/components/exercises/FillInBlank';
import DragAndDrop from '@/components/exercises/DragAndDrop';
import FeedbackOverlay from '@/components/ui/FeedbackOverlay';

export default function LessonPage() {
    const params = useParams();
    const router = useRouter();
    const lang = params.lang as string;
    const levelId = params.levelId as string;

    const langData = curriculum[lang];
    const level = langData?.levels.find(l => l.id === levelId);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackCorrect, setFeedbackCorrect] = useState(false);
    const [feedbackExplanation, setFeedbackExplanation] = useState('');
    const [slideDirection, setSlideDirection] = useState(1);
    const [retryKey, setRetryKey] = useState(0);

    const completeLevel = useAppStore(s => s.completeLevel);

    if (!level || !langData) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">Lesson not found</h2>
                <button onClick={() => router.back()} className="text-primary mt-4 cursor-pointer">← Go back</button>
            </div>
        );
    }

    const slides = level.slides;
    const totalSlides = slides.length;
    const slide = slides[currentSlide];
    const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

    const handleExerciseComplete = useCallback((isCorrect: boolean, explanation?: string) => {
        setFeedbackCorrect(isCorrect);
        setFeedbackExplanation(explanation || '');
        setShowFeedback(true);
        if (isCorrect) {
            setCorrectCount(prev => prev + 1);
        }
    }, []);

    const handleContinue = useCallback(() => {
        setShowFeedback(false);

        if (!feedbackCorrect) {
            // Wrong answer — increment retryKey to remount exercise with fresh state
            setRetryKey(prev => prev + 1);
            return;
        }

        if (currentSlide < totalSlides - 1) {
            setSlideDirection(1);
            setCurrentSlide(prev => prev + 1);
        } else {
            // Level complete!
            const score = Math.round((correctCount / (totalSlides - 1)) * 100); // exclude theory from scoring
            completeLevel(lang as Language, levelId, Math.min(100, score));
            router.push(`/learn/${lang}`);
        }
    }, [feedbackCorrect, currentSlide, totalSlides, correctCount, completeLevel, lang, levelId, router]);

    const handleNextTheory = useCallback(() => {
        if (currentSlide < totalSlides - 1) {
            setSlideDirection(1);
            setCurrentSlide(prev => prev + 1);
        }
    }, [currentSlide, totalSlides]);

    const langColors: Record<string, string> = {
        html: '#F06D5B',
        css: '#7EB8F0',
        js: '#F5C87A',
        php: '#9B8FE6',
    };
    const color = langColors[lang] || 'var(--color-primary)';

    return (
        <div className="max-w-xl mx-auto space-y-6">
            {/* Header */}
            <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <button
                    onClick={() => router.push(`/learn/${lang}`)}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-text cursor-pointer transition-colors"
                >
                    ✕
                </button>

                {/* Progress dots */}
                <div className="flex-1">
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.06)' }}>
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: color }}
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                    </div>
                </div>

                <span className="text-sm font-semibold text-text-secondary">
                    {currentSlide + 1}/{totalSlides}
                </span>
            </motion.div>

            {/* Slide Content */}
            <AnimatePresence mode="wait" custom={slideDirection}>
                <motion.div
                    key={`${currentSlide}-${retryKey}`}
                    custom={slideDirection}
                    initial={{ opacity: 0, x: slideDirection * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: slideDirection * -40 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                >
                    <SlideContent
                        slide={slide}
                        color={color}
                        onComplete={handleExerciseComplete}
                        onNextTheory={handleNextTheory}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Feedback Overlay */}
            <FeedbackOverlay
                show={showFeedback}
                isCorrect={feedbackCorrect}
                explanation={feedbackExplanation}
                onContinue={handleContinue}
            />
        </div>
    );
}

function SlideContent({
    slide,
    color,
    onComplete,
    onNextTheory,
}: {
    slide: Slide;
    color: string;
    onComplete: (isCorrect: boolean, explanation?: string) => void;
    onNextTheory: () => void;
}) {
    if (slide.type === 'theory') {
        return (
            <div className="space-y-6">
                <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow">
                    <h2 className="text-2xl font-bold mb-4" style={{ color }}>
                        📖 {slide.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed text-base mb-4">
                        {slide.content}
                    </p>
                    {slide.codeExample && (
                        <div className="bg-[#1E293B] rounded-[16px] p-4 overflow-x-auto">
                            <pre className="text-[#E2E8F0] text-sm font-mono whitespace-pre-wrap">
                                {slide.codeExample}
                            </pre>
                        </div>
                    )}
                </div>

                <motion.button
                    onClick={onNextTheory}
                    className="w-full py-4 rounded-[var(--radius-button)] font-semibold text-white text-lg cursor-pointer"
                    style={{ background: color }}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                >
                    Continue →
                </motion.button>
            </div>
        );
    }

    if (slide.type === 'quiz') {
        return (
            <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow">
                <div className="text-sm font-bold text-text-secondary mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs" style={{ background: color }}>?</span>
                    Quiz
                </div>
                <MultipleChoice
                    question={slide.question}
                    options={slide.options}
                    correctIndex={slide.correctIndex}
                    explanation={slide.explanation}
                    onComplete={(isCorrect) => onComplete(isCorrect, slide.explanation)}
                />
            </div>
        );
    }

    if (slide.type === 'fill-blank') {
        return (
            <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow">
                <div className="text-sm font-bold text-text-secondary mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs" style={{ background: color }}>✏️</span>
                    Fill in the Blank
                </div>
                <FillInBlank
                    instruction={slide.instruction}
                    codeTemplate={slide.codeTemplate}
                    answer={slide.answer}
                    hint={slide.hint}
                    onComplete={(isCorrect) => onComplete(isCorrect, `The answer is: ${slide.answer}`)}
                />
            </div>
        );
    }

    if (slide.type === 'drag-drop') {
        return (
            <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow">
                <div className="text-sm font-bold text-text-secondary mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md flex items-center justify-center text-white text-xs" style={{ background: color }}>↕️</span>
                    Drag & Drop
                </div>
                <DragAndDrop
                    instruction={slide.instruction}
                    tokens={slide.tokens}
                    correctOrder={slide.correctOrder}
                    hint={slide.hint}
                    onComplete={(isCorrect) => onComplete(isCorrect, `Correct order: ${slide.correctOrder.join(' ')}`)}
                />
            </div>
        );
    }

    return null;
}
