'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/useAuthStore';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { isLoggedIn, user, checkSession } = useAuthStore();
    const router = useRouter();
    // If already logged in from persisted state, skip the loading spinner
    const [checking, setChecking] = useState(!isLoggedIn);

    useEffect(() => {
        // If already logged in (from Zustand persist), no need to check
        if (isLoggedIn && user) {
            setChecking(false);
            return;
        }
        // Otherwise verify session with Supabase
        let cancelled = false;
        const check = async () => {
            await checkSession();
            if (!cancelled) setChecking(false);
        };
        check();
        return () => { cancelled = true; };
    }, [checkSession, isLoggedIn, user]);

    useEffect(() => {
        if (!checking && !isLoggedIn) {
            router.replace('/auth');
        }
    }, [checking, isLoggedIn, router]);

    if (checking) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <motion.div
                    className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        );
    }

    if (!isLoggedIn) {
        return null;
    }

    return <>{children}</>;
}
