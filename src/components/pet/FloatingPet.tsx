'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePetStore } from '@/store/usePetStore';
import { PetMascot } from '@/components/illustrations/PetCharacters';
import { sfx } from '@/lib/sfx';

export default function FloatingPet() {
    const { selectedPet, getPetStage, showWanderingPet, equippedAccessories } = usePetStore();
    const [position, setPosition] = useState({ x: -200, y: -200, flip: false }); // Start hidden
    const [isInteracting, setIsInteracting] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [message, setMessage] = useState('❤️');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined') {
            // Start near bottom right edge initially
            setPosition({
                x: window.innerWidth - 120,
                y: window.innerHeight - 120,
                flip: false
            });
        }
    }, []);

    useEffect(() => {
        if (!selectedPet || !mounted) return;

        let timeout: NodeJS.Timeout;

        const moveRandomly = () => {
            if (!isInteracting) {
                const maxX = window.innerWidth - 100;
                const maxY = window.innerHeight - 100;
                const minX = 20;
                const minY = 80;

                const newX = Math.max(minX, Math.min(maxX, Math.random() * maxX));
                const newY = Math.max(minY, Math.min(maxY, Math.random() * maxY));

                // Flip pet if moving left
                const movingLeft = newX < position.x;

                setIsMoving(true);
                setPosition({ x: newX, y: newY, flip: movingLeft });

                // Stop moving animation after tween finishes
                setTimeout(() => setIsMoving(false), 3500);
            }

            // Loop with random delay between 6 to 12 seconds
            timeout = setTimeout(moveRandomly, 6000 + Math.random() * 6000);
        };

        // Start wandering
        timeout = setTimeout(moveRandomly, 3000);

        return () => clearTimeout(timeout);
    }, [selectedPet, isInteracting, mounted, position.x]);

    if (!selectedPet || !mounted || !showWanderingPet) return null;

    const messages = {
        fox: ['Ayo coding', 'Jangan menyerah!', 'HTML itu mudah.', 'Styling with css :3', '❤️'],
        cat: ['Nyaw~', 'Fokus fokus...', 'JS itu lebih baik dari PHP purr', 'Ayo belajar JS!', '❤️'],
        owl: ['Hoot! KING PHP rajanya web.', 'Belajar PHP itu susah gampang.', 'Aku mengawasimu...', 'Hoot!', '❤️']
    };

    const handleInteract = () => {
        if (isInteracting) return;
        setIsInteracting(true);

        let msgList = messages.fox;
        if (selectedPet === 'fox') { sfx.foxHappy(); msgList = messages.fox; }
        else if (selectedPet === 'cat') { sfx.catHappy(); msgList = messages.cat; }
        else if (selectedPet === 'owl') { sfx.owlHappy(); msgList = messages.owl; }
        else { sfx.petHappy(); }

        const randomMsg = msgList[Math.floor(Math.random() * msgList.length)];
        setMessage(randomMsg);

        setTimeout(() => setIsInteracting(false), 2500);
    };

    return (
        <motion.div
            className="fixed top-0 left-0 z-40 cursor-pointer pointer-events-auto filter drop-shadow-lg"
            initial={false}
            animate={{ x: position.x, y: position.y, scaleX: (position as any).flip ? -1 : 1 }}
            transition={{ x: { type: 'tween', duration: 3.5, ease: 'easeInOut' }, y: { type: 'tween', duration: 3.5, ease: 'easeInOut' } }}
            onClick={handleInteract}
            style={{ width: 100, height: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <AnimatePresence>
                {isInteracting && (
                    <motion.div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-10 whitespace-nowrap"
                        initial={{ opacity: 0, y: 10, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 1, 0], y: -15, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5, times: [0, 0.1, 0.9, 1] }}
                        style={{ scaleX: (position as any).flip ? -1 : 1 }} // Unflip text if container is flipped
                    >
                        {message === '❤️' ? (
                            <span className="text-3xl filter drop-shadow-md">❤️</span>
                        ) : (
                            <div className="relative overflow-visible rounded-2xl px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] glass-strong">
                                <div className="relative z-10 text-text font-bold text-sm text-center">
                                    {message}
                                </div>
                                <svg className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 drop-shadow-sm text-[var(--color-card-solid)]" width="20" height="12" viewBox="0 0 20 12" fill="none">
                                    <path d="M0 0 L10 12 L20 0 Z" fill="currentColor" />
                                    <path d="M0 0 L10 12 L20 0" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                                </svg>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            <div style={{ transform: (position as any).flip ? 'scaleX(-1)' : 'none' }}>
                <PetMascot
                    pet={selectedPet}
                    stage={getPetStage()}
                    size={90}
                    animate={true}
                    isMoving={isMoving}
                    accessories={equippedAccessories}
                />
            </div>
        </motion.div>
    );
}
