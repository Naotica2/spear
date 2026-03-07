'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Slide } from '@/data/types';
import MultipleChoice from '@/components/exercises/MultipleChoice';
import FillInBlank from '@/components/exercises/FillInBlank';
import DragAndDrop from '@/components/exercises/DragAndDrop';
import CompanionCharacter, { CompanionExpression } from '@/components/illustrations/CompanionCharacter';
import { BookOpen, HelpCircle, PenTool, MoveVertical } from 'lucide-react';

export default function SlideRenderer({
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
    if (slide.type === 'theory') {
        return (
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 mb-4">
                    <div className="w-24 sm:w-28 flex-shrink-0">
                        <CompanionCharacter expression={companionExpression} message={companionMessage} size={110} />
                    </div>
                    <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow flex-1">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color }}>
                            <BookOpen className="w-6 h-6 shrink-0" />
                            {slide.title}
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
            <div className="space-y-6">
                <div className="flex items-end justify-center w-24 sm:w-28 mx-auto">
                    <CompanionCharacter expression={companionExpression} message={companionMessage || "Kamu pasti bisa!"} size={110} />
                </div>
                <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow">
                    <div className="text-sm font-bold text-text-secondary mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md flex items-center justify-center text-white" style={{ background: color }}>
                            <HelpCircle size={14} strokeWidth={3} />
                        </span>
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
            </div>
        );
    }

    if (slide.type === 'fill-blank') {
        return (
            <div className="space-y-6">
                <div className="flex items-end justify-center w-24 sm:w-28 mx-auto">
                    <CompanionCharacter expression={companionExpression} message={companionMessage || "Isi titik-titiknya ya!"} size={110} />
                </div>
                <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow">
                    <div className="text-sm font-bold text-text-secondary mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md flex items-center justify-center text-white" style={{ background: color }}>
                            <PenTool size={14} strokeWidth={2.5} />
                        </span>
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
            </div>
        );
    }

    if (slide.type === 'drag-drop') {
        return (
            <div className="space-y-6">
                <div className="flex items-end justify-center w-24 sm:w-28 mx-auto">
                    <CompanionCharacter expression={companionExpression} message={companionMessage || "Susun yang benar!"} size={110} />
                </div>
                <div className="glass rounded-[var(--radius-card)] p-6 soft-shadow">
                    <div className="text-sm font-bold text-text-secondary mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md flex items-center justify-center text-white" style={{ background: color }}>
                            <MoveVertical size={14} strokeWidth={2.5} />
                        </span>
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
            </div>
        );
    }

    return null;
}
