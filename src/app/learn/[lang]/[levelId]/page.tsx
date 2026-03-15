'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { curriculum, Slide } from '@/data/curriculum';
import { useAppStore, Language } from '@/store/useAppStore';
import FeedbackOverlay from '@/components/ui/feedbackOverlay';
import AuthGuard from '@/components/auth/authGuard';
import { CompanionExpression } from '@/components/illustrations/companionCharacter';
import { useSFXStore } from '@/store/useSFXStore';
import { sfx } from '@/lib/sfx';
import { Volume2, VolumeX, X } from 'lucide-react';

function LessonContent() {
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

    const [companionExpression, setCompanionExpression] = useState<CompanionExpression>('idle');
    const [companionMessage, setCompanionMessage] = useState<string>('Mari kita mulai!');

    const { enabled: sfxEnabled, toggleEnabled } = useSFXStore();

    const completeLevel = useAppStore(s => s.completeLevel);
    const trackFailedAnswer = useAppStore(s => s.trackFailedAnswer);

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

    // Set companion state on slide change
    React.useEffect(() => {
        if (!slide) return;
        if (slide.type === 'theory') {
            setCompanionExpression('idle');
            setCompanionMessage('Baca baik-baik ya');
        } else {
            setCompanionExpression('encouraging');
            setCompanionMessage('Kamu pasti bisa :3');
        }
    }, [currentSlide, slide]);

    const handleExerciseComplete = useCallback((isCorrect: boolean, explanation?: string) => {
        setFeedbackCorrect(isCorrect);
        setFeedbackExplanation(explanation || '');
        setShowFeedback(true);
        if (isCorrect) {
            setCorrectCount(prev => prev + 1);
            setCompanionExpression('celebrating');
            setCompanionMessage('Benar! Gacor King');
        } else {
            trackFailedAnswer(lang as Language);
            setCompanionExpression('sad');
            setCompanionMessage('Oops, coba lagi :<');
        }
    }, [lang, trackFailedAnswer]);

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
            sfx.levelComplete();
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
                <div className="flex gap-2">
                    <button
                        onClick={() => router.push(`/learn/${lang}`)}
                        title="Back to lessons"
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-text cursor-pointer transition-colors"
                    >
                        <X size={20} />
                    </button>
                    <button
                        onClick={toggleEnabled}
                        title={sfxEnabled ? "Mute sound" : "Enable sound"}
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-text cursor-pointer transition-colors"
                    >
                        {sfxEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                    </button>
                </div>

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
                        companionExpression={companionExpression}
                        companionMessage={companionMessage}
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

import SlideRenderer from '@/components/exercises/slideRenderer';

function SlideContent({
    slide,
    color,
    onComplete,
    onNextTheory,
    companionExpression,
    companionMessage,
}: {
    slide: Slide;
    color: string;
    onComplete: (isCorrect: boolean, explanation?: string) => void;
    onNextTheory: () => void;
    companionExpression: CompanionExpression;
    companionMessage?: string;
}) {
    return (
        <SlideRenderer
            slide={slide}
            color={color}
            onComplete={onComplete}
            onNextTheory={onNextTheory}
            companionExpression={companionExpression}
            companionMessage={companionMessage}
        />
    );
}

export default function LessonPage() {
    return (
        <AuthGuard>
            <LessonContent />
        </AuthGuard>
    );
}
