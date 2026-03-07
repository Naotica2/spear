'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { php } from '@codemirror/lang-php';
import { oneDark } from '@codemirror/theme-one-dark';

const langExtensions: Record<string, () => ReturnType<typeof html>> = {
    html: () => html(),
    css: () => css(),
    js: () => javascript(),
    php: () => php(),
};

interface CodeEditorProps {
    value: string;
    onChange: (value: string) => void;
    language: string;
    height?: string;
    className?: string;
}

export default function CodeEditor({
    value,
    onChange,
    language,
    height = '400px',
    className = '',
}: CodeEditorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<EditorView | null>(null);
    const onChangeRef = useRef(onChange);

    // Keep onChange ref current
    onChangeRef.current = onChange;

    const createEditor = useCallback(() => {
        if (!containerRef.current) return;

        // Destroy existing editor
        if (viewRef.current) {
            viewRef.current.destroy();
            viewRef.current = null;
        }

        const langExt = langExtensions[language] || langExtensions.html;

        const state = EditorState.create({
            doc: value,
            extensions: [
                basicSetup,
                langExt(),
                EditorView.lineWrapping,
                oneDark,
                EditorView.theme({
                    '&': {
                        height: '100%',
                        fontSize: '14px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                    },
                    '.cm-scroller': {
                        fontFamily: '"Fira Code", "JetBrains Mono", "Cascadia Code", monospace',
                        overflow: 'auto',
                    },
                    '.cm-gutters': {
                        backgroundColor: '#1e293b',
                        borderRight: '1px solid rgba(255,255,255,0.06)',
                    },
                    '.cm-activeLineGutter': {
                        backgroundColor: 'rgba(126, 184, 240, 0.1)',
                    },
                    '.cm-activeLine': {
                        backgroundColor: 'rgba(126, 184, 240, 0.05)',
                    },
                }),
                EditorView.updateListener.of((update) => {
                    if (update.docChanged) {
                        onChangeRef.current(update.state.doc.toString());
                    }
                }),
            ],
        });

        const view = new EditorView({
            state,
            parent: containerRef.current,
        });

        viewRef.current = view;
    }, [language, value]);

    useEffect(() => {
        createEditor();
        return () => {
            if (viewRef.current) {
                viewRef.current.destroy();
                viewRef.current = null;
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [language]);

    return (
        <div
            ref={containerRef}
            className={`overflow-hidden rounded-xl border border-white/10 ${className}`}
            style={{ height }}
        />
    );
}
