'use client';

import React, { useRef, useEffect, useState } from 'react';

interface LivePreviewProps {
    htmlCode: string;
    cssCode: string;
    jsCode: string;
    className?: string;
}

export default function LivePreview({ htmlCode, cssCode, jsCode, className = '' }: LivePreviewProps) {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [key, setKey] = useState<number>(0);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Debounce updates to prevent flickering
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setKey((k) => k + 1);
        }, 400);

        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [htmlCode, cssCode, jsCode]);

    const srcdoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  margin: 16px;
  color: #1e293b;
  background: #fff;
  line-height: 1.6;
}
${cssCode}
</style>
</head>
<body>
${htmlCode}
<script>
try {
  ${jsCode}
} catch(e) {
  document.body.innerHTML += '<pre style="color:red;margin-top:16px;padding:12px;background:#fef2f2;border-radius:8px;font-size:13px;">Error: ' + e.message + '</pre>';
}
</script>
</body>
</html>`;

    return (
        <div className={`relative bg-white rounded-xl overflow-hidden border border-white/10 ${className}`}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f1f5f9] border-b border-slate-200">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#F06D5B]" />
                    <div className="w-3 h-3 rounded-full bg-[#F5C87A]" />
                    <div className="w-3 h-3 rounded-full bg-[#8CD790]" />
                </div>
                <div className="flex-1 mx-3">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200 max-w-[200px] truncate">
                        preview
                    </div>
                </div>
            </div>
            {/* Preview iframe */}
            <iframe
                key={key}
                ref={iframeRef}
                srcDoc={srcdoc}
                title="Live Preview"
                className="w-full bg-white"
                style={{ height: 'calc(100% - 40px)', minHeight: '300px', border: 'none' }}
                sandbox="allow-scripts"
            />
        </div>
    );
}
