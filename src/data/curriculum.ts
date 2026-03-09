export type { TheorySlide, QuizSlide, FillBlankSlide, DragDropSlide, Slide, Level, LanguageCurriculum } from './types';
import { LanguageCurriculum } from './types';
import { htmlLevels } from './html-curriculum';
import { cssLevels } from './css-curriculum';
import { jsLevels } from './js-curriculum';
import { phpLevels } from './php-curriculum';
import { mysqlLevels } from './mysql-curriculum';

export const curriculum: Record<string, LanguageCurriculum> = {
    html: {
        id: 'html',
        name: 'HTML',
        icon: '🏷️',
        color: 'var(--color-html)',
        description: 'Fondasi utama setiap website',
        levels: htmlLevels,
    },
    css: {
        id: 'css',
        name: 'CSS',
        icon: '🎨',
        color: 'var(--color-css)',
        description: 'Mengatur tampilan dan mempercantik website',
        levels: cssLevels,
    },
    js: {
        id: 'js',
        name: 'JavaScript',
        icon: '⚡',
        color: 'var(--color-js)',
        description: 'Membuat website menjadi interaktif',
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
    mysql: {
        id: 'mysql',
        name: 'MySQL',
        icon: '🐬',
        color: '#3B82F6',
        description: 'Powering the Web',
        levels: mysqlLevels,
    },
};
