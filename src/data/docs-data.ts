export interface DocsTopic {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample: string;
  language: 'html' | 'css' | 'js' | 'php';
}

export interface DocsLanguage {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  topics: DocsTopic[];
}

import { htmlTopics } from './docs/html-docs';
import { cssTopics } from './docs/css-docs';
import { jsTopics } from './docs/js-docs';
import { phpTopics } from './docs/php-docs';

export const docsLanguages: DocsLanguage[] = [
  {
    id: 'html',
    name: 'HTML',
    color: '#F06D5B',
    icon: '🏗️',
    description: 'HyperText Markup Language — fondasi dari semua halaman web.',
    topics: htmlTopics,
  },
  {
    id: 'css',
    name: 'CSS',
    color: '#7EB8F0',
    icon: '🎨',
    description: 'Cascading Style Sheets — mengatur tampilan dan layout halaman web.',
    topics: cssTopics,
  },
  {
    id: 'js',
    name: 'JavaScript',
    color: '#F5C87A',
    icon: '⚡',
    description: 'JavaScript — bahasa pemrograman untuk membuat web interaktif.',
    topics: jsTopics,
  },
  {
    id: 'php',
    name: 'PHP',
    color: '#9B8FE6',
    icon: '🐘',
    description: 'PHP — bahasa server-side untuk web development.',
    topics: phpTopics,
  },
];

export function getLanguageById(id: string): DocsLanguage | undefined {
  return docsLanguages.find((lang) => lang.id === id);
}

export function getTopicById(langId: string, topicId: string): DocsTopic | undefined {
  const lang = getLanguageById(langId);
  return lang?.topics.find((t) => t.id === topicId);
}
