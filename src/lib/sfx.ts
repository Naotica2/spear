'use client';

import { useSFXStore } from '@/store/useSFXStore';

// Singleton AudioContext to be initialized on first user interaction
let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
    if (typeof window === 'undefined') return null; // SSR checking
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // Resume context if suspended (browser auto-play policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
};

// Map of musical notes to frequencies
const notes = {
    C4: 261.63,
    D4: 293.66,
    E4: 329.63,
    F4: 349.23,
    G4: 392.00,
    A4: 440.00,
    B4: 493.88,
    C5: 523.25,
    D5: 587.33,
    E5: 659.25,
    F5: 698.46,
    G5: 783.99,
    C6: 1046.50
};

type Note = keyof typeof notes;

const playToneLine = (
    sequence: { note: Note | number; duration: number; type?: OscillatorType }[],
    baseVol: number = 0.5
) => {
    const ctx = getAudioContext();
    const { enabled, volume } = useSFXStore.getState();

    if (!ctx || !enabled || volume === 0) return;

    const t = ctx.currentTime;
    const finalVol = baseVol * volume;

    sequence.forEach((item, index) => {
        const timeOffset = sequence.slice(0, index).reduce((sum, i) => sum + i.duration, 0);
        const startTime = t + timeOffset;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = item.type || 'sine';
        osc.frequency.value = typeof item.note === 'number' ? item.note : notes[item.note];

        // Envelope
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(finalVol, startTime + 0.05); // Attack
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + item.duration - 0.01); // Release

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + item.duration);
    });
};

export const sfx = {
    correct: () => {
        playToneLine([
            { note: 'G4', duration: 0.1, type: 'sine' },
            { note: 'C5', duration: 0.15, type: 'sine' },
            { note: 'E5', duration: 0.3, type: 'sine' }
        ], 0.3);
    },

    wrong: () => {
        playToneLine([
            { note: 'E4', duration: 0.2, type: 'sawtooth' },
            { note: 'C4', duration: 0.3, type: 'sawtooth' }
        ], 0.15); // lower volume for negative sounds
    },

    click: () => {
        playToneLine([
            { note: 'C6', duration: 0.05, type: 'sine' }
        ], 0.05);
    },

    levelComplete: () => {
        playToneLine([
            { note: 'C4', duration: 0.15, type: 'square' },
            { note: 'E4', duration: 0.15, type: 'square' },
            { note: 'G4', duration: 0.15, type: 'square' },
            { note: 'C5', duration: 0.4, type: 'square' }
        ], 0.1);
    },

    petHappy: () => {
        playToneLine([
            { note: 'C5', duration: 0.1, type: 'sine' },
            { note: 'G5', duration: 0.2, type: 'sine' },
            { note: 'C6', duration: 0.3, type: 'sine' }
        ], 0.15);
    },

    foxHappy: () => {
        playToneLine([
            { note: 'G4', duration: 0.1, type: 'triangle' },
            { note: 'C5', duration: 0.1, type: 'triangle' },
            { note: 'E5', duration: 0.15, type: 'triangle' },
            { note: 'G5', duration: 0.2, type: 'triangle' }
        ], 0.15);
    },

    catHappy: () => {
        // Meow-like smooth transition
        playToneLine([
            { note: 'F5', duration: 0.15, type: 'sine' },
            { note: 'E5', duration: 0.15, type: 'sine' },
            { note: 'D5', duration: 0.3, type: 'sine' }
        ], 0.15);
    },

    owlHappy: () => {
        // Hoot sound
        playToneLine([
            { note: 'C4', duration: 0.2, type: 'sine' },
            { note: 'C4', duration: 0.4, type: 'sine' }
        ], 0.2); // slightly louder to compensate for low frequency
    }
};
