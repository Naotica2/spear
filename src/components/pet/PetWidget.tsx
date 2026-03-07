'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePetStore, PET_XP_THRESHOLDS } from '@/store/usePetStore';
import { PetMascot } from '@/components/illustrations/PetCharacters';
import GlassCard from '@/components/ui/GlassCard';
import ProgressBar from '@/components/ui/ProgressBar';
import { sfx } from '@/lib/sfx';

export default function PetWidget() {
    const { selectedPet, petXP, getPetStage } = usePetStore();
    const [isInteracting, setIsInteracting] = useState(false);

    if (!selectedPet) return null;

    const stage = getPetStage();

    let nextThreshold = PET_XP_THRESHOLDS.TEEN;
    let prevThreshold = 0;

    if (stage === 'teen') {
        nextThreshold = PET_XP_THRESHOLDS.ADULT;
        prevThreshold = PET_XP_THRESHOLDS.TEEN;
    } else if (stage === 'adult') {
        nextThreshold = petXP; // Max stage
        prevThreshold = PET_XP_THRESHOLDS.ADULT;
    }

    const currentLevelXP = petXP - prevThreshold;
    const levelTotalXP = nextThreshold - prevThreshold;
    const progressPercent = stage === 'adult' ? 100 : Math.min(100, Math.max(0, (currentLevelXP / levelTotalXP) * 100));

    const petColors: Record<string, string> = {
        fox: '#F17E5D',
        cat: '#9B8FE6',
        owl: '#5BBF9F',
    };
    const color = petColors[selectedPet] || '#6DD5C4';

    const petNames: Record<string, string> = {
        fox: 'Kitsune',
        cat: 'Neko',
        owl: 'Bubu',
    };
    const name = petNames[selectedPet] || 'Companion';

    const handleInteract = () => {
        if (!isInteracting) {
            sfx.petHappy();
            setIsInteracting(true);
            setTimeout(() => setIsInteracting(false), 2000);
        }
    };

    return (
        <GlassCard className="overflow-hidden">
            <div className="flex items-center gap-4">
                {/* Pet Avatar */}
                <motion.div
                    className="relative shrink-0 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleInteract}
                >
                    <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-colors overflow-visible"
                        style={{ background: `${color}15` }}
                    >
                        {/* Floating hearts animation */}
                        <AnimatePresence>
                            {isInteracting && (
                                <motion.div
                                    className="absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none z-10 text-xl"
                                    initial={{ opacity: 0, y: 10, scale: 0.5 }}
                                    animate={{ opacity: [0, 1, 0], y: -20, scale: 1.2 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    ❤️
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <PetMascot
                            pet={selectedPet}
                            stage={stage}
                            size={56}
                            animate={true}
                        />
                    </div>
                    {/* Stage Badge */}
                    <div
                        className="absolute -bottom-2 -right-2 text-[10px] font-bold px-2 py-0.5 rounded-md text-white border-2 border-[var(--color-bg)]"
                        style={{ background: color }}
                    >
                        {stage.toUpperCase()}
                    </div>
                </motion.div>

                {/* Pet Stats */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-text truncate pr-2">{name}</h3>
                        {stage !== 'adult' && (
                            <span className="text-xs font-medium text-text-secondary whitespace-nowrap">
                                {currentLevelXP} / {levelTotalXP} XP
                            </span>
                        )}
                        {stage === 'adult' && (
                            <span className="text-xs font-medium text-text-secondary whitespace-nowrap" style={{ color }}>
                                MAX LEVEL
                            </span>
                        )}
                    </div>

                    <ProgressBar
                        progress={progressPercent}
                        color={color}
                        height={8}
                    />

                    <p className="text-xs text-text-secondary mt-1.5 truncate">
                        {stage === 'baby' && 'Gain XP to grow your pet!'}
                        {stage === 'teen' && 'Getting stronger every day!'}
                        {stage === 'adult' && 'A wise and powerful companion.'}
                    </p>
                </div>
            </div>
        </GlassCard>
    );
}
