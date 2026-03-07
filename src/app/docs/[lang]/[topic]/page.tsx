'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { getLanguageById, getTopicById } from '@/data/docs-data';
import DocsSidebar from '@/components/docs/DocsSidebar';

/**
 * Prettify CSS: expand single-line rules into multi-line with indentation.
 * e.g. `.box { color: red; padding: 10px; }` →
 * `.box {\n  color: red;\n  padding: 10px;\n}`
 */
function prettifyCSS(css: string): string {
    return css.replace(
        /([^{}@\n][^{}]*?)\s*\{([^{}]+)\}/g,
        (_, selector, body) => {
            const sel = selector.trim();
            if (!sel) return _;
            const props = body
                .split(';')
                .map((p: string) => p.trim())
                .filter((p: string) => p.length > 0)
                .map((p: string) => `  ${p};`)
                .join('\n');
            return `${sel} {\n${props}\n}`;
        }
    );
}

/**
 * Convert literal \n (two chars: backslash + n) to actual newlines,
 * and \\n (escaped-escaped) to \n literal display.
 */
function fixNewlines(code: string): string {
    // Replace literal \n text with actual newline characters
    return code.replace(/\\n/g, '\n');
}

/**
 * Extract only the relevant language code from a full runnable code example.
 * - JS: extracts content inside <script> tags + fixes newlines
 * - CSS: extracts content inside <style> tags + prettifies rules
 * - PHP: fixes newlines
 * - HTML: returns as-is
 */
function extractDisplayCode(code: string, language: string): string {
    if (language === 'js') {
        const scriptMatches = code.match(/<script>([\s\S]*?)<\/script>/gi);
        if (scriptMatches && scriptMatches.length > 0) {
            const raw = scriptMatches
                .map(m => m.replace(/<\/?script>/gi, '').trim())
                .join('\n\n')
                .trim();
            return fixNewlines(raw);
        }
    }

    if (language === 'css') {
        const styleMatches = code.match(/<style>([\s\S]*?)<\/style>/gi);
        if (styleMatches && styleMatches.length > 0) {
            const raw = styleMatches
                .map(m => m.replace(/<\/?style>/gi, '').trim())
                .join('\n\n')
                .trim();
            return prettifyCSS(fixNewlines(raw));
        }
    }

    if (language === 'php') {
        return fixNewlines(code);
    }

    // HTML: strip excessive inline styles so examples focus on HTML structure
    return code.replace(/\s*style="[^"]*"/gi, '');
}

function getFileLabel(langId: string): string {
    switch (langId) {
        case 'js': return 'script.js';
        case 'css': return 'style.css';
        case 'php': return 'index.php';
        default: return 'index.html';
    }
}

export default function DocsTopicPage() {
    const params = useParams();
    const langId = params.lang as string;
    const topicId = params.topic as string;
    const lang = getLanguageById(langId);
    const topic = getTopicById(langId, topicId);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const displayCode = useMemo(() => {
        if (!topic) return '';
        return extractDisplayCode(topic.codeExample, langId);
    }, [topic, langId]);

    if (!lang || !topic) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl font-bold text-text mb-2">Topic not found</h1>
                <Link href="/docs" className="text-primary hover:underline">← Back to Docs</Link>
            </div>
        );
    }

    // Find prev/next topics
    const topicIndex = lang.topics.findIndex((t) => t.id === topicId);
    const prevTopic = topicIndex > 0 ? lang.topics[topicIndex - 1] : null;
    const nextTopic = topicIndex < lang.topics.length - 1 ? lang.topics[topicIndex + 1] : null;

    const playgroundUrl = `/playground?lang=${langId}&code=${encodeURIComponent(topic.codeExample)}`;

    return (
        <div className="py-8 flex gap-8">
            <DocsSidebar currentLang={langId} currentTopic={topicId} mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 min-w-0">
                {/* Mobile sidebar toggle */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden mb-4 flex items-center gap-2 px-3 py-2 glass rounded-xl text-sm font-medium text-text-secondary cursor-pointer"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    Navigation
                </button>

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-6 text-sm text-text-secondary"
                >
                    <Link href="/docs" className="hover:text-text transition-colors">Docs</Link>
                    <span>/</span>
                    <Link href={`/docs/${langId}`} className="hover:text-text transition-colors" style={{ color: lang.color }}>{lang.name}</Link>
                    <span>/</span>
                    <span className="font-medium text-text">{topic.title}</span>
                </motion.div>

                {/* Content */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass rounded-[var(--radius-card)] p-6 sm:p-8 soft-shadow mb-6"
                >
                    <div
                        className="docs-content prose-custom"
                        dangerouslySetInnerHTML={{ __html: topic.content }}
                    />
                </motion.article>

                {/* Code Example */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass rounded-[var(--radius-card)] overflow-hidden soft-shadow mb-6"
                >
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#F06D5B]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#F5C87A]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#8CD790]" />
                            </div>
                            <span className="text-xs font-mono text-text-secondary ml-2">{getFileLabel(langId)}</span>
                        </div>
                        <Link
                            href={playgroundUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:scale-105"
                            style={{ background: lang.color }}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Try It →
                        </Link>
                    </div>
                    <pre className="p-5 overflow-x-auto text-sm font-mono leading-relaxed text-[#e2e8f0] bg-[#1e293b]">
                        <code>{displayCode}</code>
                    </pre>
                </motion.div>

                {/* Prev/Next Navigation */}
                <div className="flex gap-4">
                    {prevTopic ? (
                        <Link
                            href={`/docs/${langId}/${prevTopic.id}`}
                            className="flex-1 glass rounded-[var(--radius-card)] p-4 soft-shadow hover:soft-shadow-lg transition-all group"
                        >
                            <div className="text-xs text-text-secondary mb-1">← Previous</div>
                            <div className="font-bold text-text group-hover:text-gradient transition-all text-sm">{prevTopic.title}</div>
                        </Link>
                    ) : <div className="flex-1" />}

                    {nextTopic ? (
                        <Link
                            href={`/docs/${langId}/${nextTopic.id}`}
                            className="flex-1 glass rounded-[var(--radius-card)] p-4 soft-shadow hover:soft-shadow-lg transition-all group text-right"
                        >
                            <div className="text-xs text-text-secondary mb-1">Next →</div>
                            <div className="font-bold text-text group-hover:text-gradient transition-all text-sm">{nextTopic.title}</div>
                        </Link>
                    ) : <div className="flex-1" />}
                </div>
            </div>
        </div>
    );
}
