'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePetStore, PetType } from '@/store/usePetStore';
import { PetMascot } from '@/components/illustrations/petCharacters';
import GlassCard from '@/components/ui/glassCard';
import { sfx } from '@/lib/sfx';

const PET_OPTIONS: { id: PetType; name: string; desc: string; color: string }[] = [
    { id: 'fox', name: 'Kitsune', desc: 'Active & Playful. Loves HTML & CSS.', color: '#F17E5D' },
    { id: 'cat', name: 'Neko', desc: 'Calm & Cool. A JavaScript ninja.', color: '#9B8FE6' },
    { id: 'owl', name: 'Bubu', desc: 'Wise & Focused. Master of PHP.', color: '#5BBF9F' },
];

export default function PetSelection() {
    const { selectedPet, selectPet } = usePetStore();
    const [hoveredPet, setHoveredPet] = useState<PetType | null>(null);

    // If a pet is already selected, don't show the modal
    if (selectedPet) return null;

    const handleSelect = (petId: PetType) => {
        sfx.correct();
        selectPet(petId);
    };

    return (
        <AnimatePresence>
            {!selectedPet && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ background: 'rgba(30, 41, 59, 0.8)', backdropFilter: 'blur(10px)' }}
                >
                    <motion.div
                        className="glass-strong rounded-[32px] max-w-4xl w-full p-6 sm:p-8 md:p-12 relative overflow-hidden md:overflow-visible overflow-y-auto max-h-[95vh] flex flex-col items-center justify-start md:justify-center text-center soft-shadow-lg"
                        initial={{ scale: 0.9, y: 30 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                        {/* Background decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                        <motion.h2
                            className="text-3xl md:text-5xl font-extrabold mb-4"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            Choose Your Companion!
                        </motion.h2>

                        <motion.p
                            className="text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Adopt a pet to join your coding journey. They will grow stronger as you learn!
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {PET_OPTIONS.map((pet, i) => (
                                <motion.div
                                    key={pet.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                                    onHoverStart={() => {
                                        setHoveredPet(pet.id);
                                        sfx.click();
                                    }}
                                    onHoverEnd={() => setHoveredPet(null)}
                                >
                                    <div
                                        className={`rounded-[24px] p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group h-full flex flex-col`}
                                        style={{
                                            background: hoveredPet === pet.id ? `${pet.color}15` : 'rgba(255,255,255,0.5)',
                                            border: `2px solid ${hoveredPet === pet.id ? pet.color : 'rgba(255,255,255,0.4)'}`,
                                            transform: hoveredPet === pet.id ? 'translateY(-8px)' : 'none',
                                            boxShadow: hoveredPet === pet.id ? `0 10px 25px ${pet.color}30` : 'none'
                                        }}
                                        onClick={() => handleSelect(pet.id)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 pointer-events-none"></div>

                                        <div className="h-40 flex items-center justify-center mb-6 relative">
                                            {/* Glow behind pet */}
                                            <div
                                                className="absolute inset-0 rounded-full filter blur-xl transition-opacity duration-300"
                                                style={{ background: pet.color, opacity: hoveredPet === pet.id ? 0.2 : 0 }}
                                            />
                                            <PetMascot
                                                pet={pet.id}
                                                stage="baby"
                                                size={140}
                                                animate={hoveredPet === pet.id}
                                            />
                                        </div>

                                        <div className="relative mt-auto">
                                            <h3 className="text-2xl font-bold mb-2" style={{ color: pet.color }}>
                                                {pet.name}
                                            </h3>
                                            <p className="text-text-secondary text-sm font-medium">
                                                {pet.desc}
                                            </p>
                                        </div>

                                        {/* Select Button */}
                                        <div className={`mt-6 py-3 rounded-xl font-bold text-white transition-opacity duration-300 ${hoveredPet === pet.id ? 'opacity-100' : 'opacity-0 md:opacity-0 opacity-100'}`} style={{ background: pet.color }}>
                                            Adopt {pet.name}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
