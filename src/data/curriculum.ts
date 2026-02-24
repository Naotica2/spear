export type { TheorySlide, QuizSlide, FillBlankSlide, DragDropSlide, Slide, Level, LanguageCurriculum } from './types';
import { LanguageCurriculum } from './types';
import { htmlLevels } from './html-curriculum';
import { cssLevels } from './css-curriculum';
import { jsLevels } from './js-curriculum';
import { phpLevels } from './php-curriculum';

export const curriculum: Record<string, LanguageCurriculum> = {
    html: {
        id: 'html',
        name: 'HTML',
        icon: '🏷️',
        color: 'var(--color-html)',
        description: 'The backbone of every website',
        levels: htmlLevels,
    },
    css: {
        id: 'css',
        name: 'CSS',
        icon: '🎨',
        color: 'var(--color-css)',
        description: 'Style and beautify the web',
        levels: cssLevels,
    },
    js: {
        id: 'js',
        name: 'JavaScript',
        icon: '⚡',
        color: 'var(--color-js)',
        description: 'Make the web interactive',
        levels: jsLevels,
    },
    php: {
        id: 'php',
        name: 'PHP',
        icon: '🐘',
        color: 'var(--color-php)',
        description: 'Server-side web development',
        levels: phpLevels,
    },
};
