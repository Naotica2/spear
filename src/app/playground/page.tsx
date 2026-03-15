'use client';

import React, { useState, Suspense, useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SpearLogo from '@/components/ui/spearLogo';

const CodeEditor = dynamic(() => import('@/components/playground/codeEditor'), { ssr: false });
const LivePreview = dynamic(() => import('@/components/playground/livePreview'), { ssr: false });

const presets: Record<string, { html: string; css: string; js: string }> = {
    html: {
        html: `<h1>Hello World</h1>\n<p>Welcome to <strong>Spear Code Editor</strong>.</p>\n<p>Edit code ini dan lihat perubahan yang instan</p>\n\n<ul>\n  <li>HTML untuk structure</li>\n  <li>CSS untuk styling</li>\n  <li>JavaScript untuk logic</li>\n</ul>`,
        css: '',
        js: '',
    },
    css: {
        html: `<div class="card">\n  <h2>Styled Card</h2>\n  <p>This card is styled with CSS</p>\n  <button class="btn">Click Me</button>\n</div>`,
        css: `.card {\n  max-width: 320px;\n  padding: 24px;\n  border-radius: 16px;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  font-family: sans-serif;\n  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);\n}\n\n.card h2 {\n  margin: 0 0 8px;\n}\n\n.card p {\n  opacity: 0.9;\n  margin: 0 0 16px;\n}\n\n.btn {\n  padding: 10px 24px;\n  border: 2px solid white;\n  border-radius: 99px;\n  background: transparent;\n  color: white;\n  font-weight: bold;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.btn:hover {\n  background: white;\n  color: #764ba2;\n}`,
        js: '',
    },
    js: {
        html: `<h2 id="title">Counter App</h2>\n<p>Count: <span id="count">0</span></p>\n<button id="increment" style="padding:8px 20px;border-radius:8px;border:none;background:#6DD5C4;color:white;font-weight:bold;cursor:pointer;margin-right:8px">+1</button>\n<button id="decrement" style="padding:8px 20px;border-radius:8px;border:none;background:#F06D5B;color:white;font-weight:bold;cursor:pointer">-1</button>`,
        css: '',
        js: `let count = 0;\nconst countEl = document.getElementById('count');\n\ndocument.getElementById('increment').addEventListener('click', () => {\n  count++;\n  countEl.textContent = count;\n});\n\ndocument.getElementById('decrement').addEventListener('click', () => {\n  count--;\n  countEl.textContent = count;\n});`,
    },
    php: {
        html: `<?php\n// PHP code runs on a server, not in the browser.\n// Use this editor to practice PHP syntax!\n\n$greeting = "Hello from PHP!";\n$items = ["HTML", "CSS", "JavaScript", "PHP"];\n\necho "<h1>$greeting</h1>";\necho "<ul>";\nforeach ($items as $item) {\n    echo "<li>$item</li>";\n}\necho "</ul>";\n\n// Variables & Types\n$name = "Spear";\n$version = 2.0;\n$isAwesome = true;\n\necho "<p>$name v$version is awesome: " . ($isAwesome ? 'Yes!' : 'No') . "</p>";\n?>`,
        css: '',
        js: '',
    },
};

const langIcons: Record<string, { color: string; label: string; shortLabel: string }> = {
    html: { color: '#F06D5B', label: 'HTML', shortLabel: 'HTML' },
    css: { color: '#7EB8F0', label: 'CSS', shortLabel: 'CSS' },
    js: { color: '#F5C87A', label: 'JavaScript', shortLabel: 'JS' },
    php: { color: '#9B8FE6', label: 'PHP', shortLabel: 'PHP' },
};
/**
 * Prettify CSS: expand single-line rules into multi-line.
 */
function prettifyCSSRules(raw: string): string {
    return raw.replace(
        /([^{}@\n][^{}]*?)\s*\{([^{}]+)\}/g,
        (_: string, sel: string, body: string) => {
            const s = sel.trim();
            if (!s) return _;
            const props = body.split(';')
                .map((p: string) => p.trim())
                .filter((p: string) => p.length > 0)
                .map((p: string) => `  ${p};`)
                .join('\n');
            return `${s} {\n${props}\n}`;
        }
    );
}

/**
 * Split a combined code example into separate html/css/js parts
 * for the playground tabs (index.html / style.css / script.js).
 * Also extracts inline style="" attributes into CSS classes.
 */
function splitCodeForPlayground(code: string): { html: string; css: string; js: string } {
    let html = code;
    let cssparts: string[] = [];
    let js = '';

    // 1) Extract <style> blocks → css tab
    const styleMatches = html.match(/<style>([\s\S]*?)<\/style>/gi);
    if (styleMatches) {
        const raw = styleMatches
            .map(m => m.replace(/<\/?style>/gi, '').trim())
            .join('\n\n')
            .trim();
        cssparts.push(prettifyCSSRules(raw));
        html = html.replace(/<style>[\s\S]*?<\/style>/gi, '').trim();
    }

    // 2) Extract <script> blocks → js tab
    const scriptMatches = html.match(/<script>([\s\S]*?)<\/script>/gi);
    if (scriptMatches) {
        js = scriptMatches
            .map(m => m.replace(/<\/?script>/gi, '').trim())
            .join('\n\n')
            .trim();
        html = html.replace(/<script>[\s\S]*?<\/script>/gi, '').trim();
    }

    // 3) Extract inline style="..." → generate CSS classes
    let counter = 0;
    const styleToClass = new Map<string, string>();

    // Pass 1: replace style="..." with a temp marker
    html = html.replace(/ style="([^"]*)"/g, (_, styleVal: string) => {
        let cls = styleToClass.get(styleVal);
        if (!cls) {
            counter++;
            cls = `s${counter}`;
            styleToClass.set(styleVal, cls);
        }
        return ` data-sc="${cls}"`;
    });

    // Pass 2: merge data-sc into existing class or create new class attr
    html = html.replace(/ data-sc="(\w+)"/g, (marker, cls) => {
        return ` class="${cls}"`;
    });
    // Handle elements that now have two class attrs: merge them
    html = html.replace(/ class="([^"]*)" class="([^"]*)"/g, (_, c1, c2) => {
        return ` class="${c1} ${c2}"`;
    });

    // Generate CSS from inline styles
    if (styleToClass.size > 0) {
        const lines: string[] = [];
        for (const [styleVal, cls] of styleToClass) {
            const props = styleVal.split(';')
                .map((p: string) => p.trim())
                .filter((p: string) => p.length > 0)
                .map((p: string) => `  ${p};`)
                .join('\n');
            lines.push(`.${cls} {\n${props}\n}`);
        }
        cssparts.push(lines.join('\n\n'));
    }

    // Combine all CSS
    const css = cssparts.filter(Boolean).join('\n\n');

    // Clean up HTML (put tags on separate lines)
    html = html.replace(/>\s*</g, '>\n<').trim();

    return { html, css, js };
}

function PlaygroundContent() {
    const searchParams = useSearchParams();
    const initialLang = searchParams.get('lang') || 'html';
    const initialCode = searchParams.get('code');

    const [activeLang, setActiveLang] = useState(initialLang);
    const [codes, setCodes] = useState(() => {
        const base = { ...presets[initialLang] || presets.html };
        if (initialCode) {
            let decoded: string;
            try {
                decoded = decodeURIComponent(initialCode);
            } catch {
                decoded = initialCode;
            }
            const split = splitCodeForPlayground(decoded);
            base.html = split.html;
            base.css = split.css;
            base.js = split.js;
        }
        return base;
    });
    const [activeEditor, setActiveEditor] = useState<'html' | 'css' | 'js'>('html');
    const [mobileView, setMobileView] = useState<'editor' | 'preview'>('editor');

    const isPhp = activeLang === 'php';

    const handleLangSwitch = useCallback((lang: string) => {
        setActiveLang(lang);
        setCodes(presets[lang] || presets.html);
        setActiveEditor('html');
        setMobileView('editor');
    }, []);

    const handleCodeChange = useCallback((value: string) => {
        setCodes((prev) => ({ ...prev, [activeEditor]: value }));
    }, [activeEditor]);

    const currentCode = useMemo(() => codes[activeEditor], [codes, activeEditor]);
    const editorLang = useMemo(() => {
        if (isPhp && activeEditor === 'html') return 'php';
        return activeEditor;
    }, [isPhp, activeEditor]);

    return (
        <div className="min-h-[100dvh] flex flex-col">
            {/* Header */}
            <div className="glass-strong border-b border-white/10 px-3 sm:px-6 py-2.5 sm:py-3">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <Link href="/" className="flex items-center gap-2 group shrink-0">
                            <SpearLogo size={24} gradientId="pgLogo" />
                            <span className="text-base sm:text-lg font-extrabold text-gradient hidden sm:inline">Spear</span>
                        </Link>
                        <div className="h-5 sm:h-6 w-px bg-white/10 shrink-0" />
                        <h1 className="text-xs sm:text-sm font-bold text-text flex items-center gap-1.5 shrink-0">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="hidden xs:block">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                            Playground
                        </h1>
                        <div className="h-5 sm:h-6 w-px bg-white/10 shrink-0" />
                        <div className="flex items-center gap-0.5 sm:gap-1">
                            <Link href="/" className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium text-text-secondary hover:text-text hover:bg-white/30 transition-all flex items-center gap-1.5" title="Home">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                </svg>
                                <span className="hidden md:inline">Home</span>
                            </Link>
                            <Link href="/docs" className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg text-xs font-medium text-text-secondary hover:text-text hover:bg-white/30 transition-all flex items-center gap-1.5" title="Docs">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                                <span className="hidden md:inline">Docs</span>
                            </Link>
                        </div>
                    </div>

                    {/* Language Tabs */}
                    <div className="flex gap-0.5 sm:gap-1 p-0.5 sm:p-1 glass rounded-lg sm:rounded-xl shrink-0">
                        {Object.entries(langIcons).map(([lang, info]) => (
                            <button
                                key={lang}
                                onClick={() => handleLangSwitch(lang)}
                                className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${activeLang === lang
                                    ? 'text-white shadow-md'
                                    : 'text-text-secondary hover:text-text'
                                    }`}
                                style={activeLang === lang ? { background: info.color } : {}}
                            >
                                <span className="sm:hidden">{info.shortLabel}</span>
                                <span className="hidden sm:inline">{info.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile View Toggle (Editor vs Preview) — only on small screens & non-PHP */}
            {!isPhp && (
                <div className="flex lg:hidden border-b border-white/10 bg-[#0f172a]">
                    <button
                        onClick={() => setMobileView('editor')}
                        className={`flex-1 py-2.5 text-xs font-bold text-center transition-all cursor-pointer ${mobileView === 'editor'
                            ? 'text-primary border-b-2 border-primary bg-primary/5'
                            : 'text-text-secondary hover:text-text'
                            }`}
                    >
                        <span className="flex items-center justify-center gap-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <polyline points="16 18 22 12 16 6" />
                                <polyline points="8 6 2 12 8 18" />
                            </svg>
                            Editor
                        </span>
                    </button>
                    <button
                        onClick={() => setMobileView('preview')}
                        className={`flex-1 py-2.5 text-xs font-bold text-center transition-all cursor-pointer ${mobileView === 'preview'
                            ? 'text-primary border-b-2 border-primary bg-primary/5'
                            : 'text-text-secondary hover:text-text'
                            }`}
                    >
                        <span className="flex items-center justify-center gap-1.5">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                            Preview
                        </span>
                    </button>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden" style={{ height: 'calc(100dvh - 52px)' }}>
                {/* Editor Panel — always visible on lg+, conditionally on mobile */}
                <div className={`flex-1 flex flex-col min-h-0 min-w-0 overflow-hidden ${!isPhp && mobileView !== 'editor' ? 'hidden lg:flex' : ''}`}>
                    {/* Editor File Tabs (for non-PHP) */}
                    {!isPhp && (
                        <div className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1e293b] border-b border-white/5">
                            {(['html', 'css', 'js'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveEditor(tab)}
                                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${activeEditor === tab
                                        ? 'bg-white/10 text-white'
                                        : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    <span style={{ color: activeEditor === tab ? langIcons[tab].color : undefined }}>
                                        {tab === 'html' ? 'index.html' : tab === 'css' ? 'style.css' : 'script.js'}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Code Editor */}
                    <div className="flex-1 min-h-0">
                        <CodeEditor
                            value={currentCode}
                            onChange={handleCodeChange}
                            language={editorLang}
                            height="100%"
                            className="rounded-none border-0"
                        />
                    </div>
                </div>

                {/* Resizer (desktop only) */}
                <div className="hidden lg:flex items-center justify-center w-2 bg-white/5 cursor-col-resize hover:bg-primary/20 transition-colors">
                    <div className="w-0.5 h-8 bg-white/20 rounded-full" />
                </div>

                {/* Preview Panel — always visible on lg+, conditionally on mobile */}
                {!isPhp && (
                    <div className={`flex-1 min-h-0 min-w-0 overflow-hidden ${mobileView !== 'preview' ? 'hidden lg:block' : ''}`}>
                        <LivePreview
                            htmlCode={codes.html}
                            cssCode={codes.css}
                            jsCode={codes.js}
                            className="h-full rounded-none border-0"
                        />
                    </div>
                )}

                {/* PHP info panel */}
                {isPhp && (
                    <div className="flex-1 min-h-[200px] lg:min-h-0 flex items-center justify-center glass p-6 sm:p-8">
                        <div className="text-center max-w-sm">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-[#9B8FE6]/15 flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9B8FE6" strokeWidth="1.5" strokeLinecap="round">
                                    <ellipse cx="12" cy="12" rx="10" ry="7" />
                                    <path d="M7 12l1-3h2l-1 3" />
                                    <path d="M14 9h2a1.5 1.5 0 010 3h-2l-1 3" />
                                </svg>
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-text mb-2">PHP Editor</h3>
                            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                                Tulis dan latih syntax PHP di sini. Gunakan editor untuk berlatih sebelum menjalankan di server kamu.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function PlaygroundPage() {
    return (
        <Suspense fallback={
            <div className="min-h-[100dvh] flex items-center justify-center">
                <motion.div
                    className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
            </div>
        }>
            <PlaygroundContent />
        </Suspense>
    );
}
