export interface TheorySlide {
    type: 'theory';
    title: string;
    content: string;
    codeExample?: string;
}

export interface QuizSlide {
    type: 'quiz';
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface FillBlankSlide {
    type: 'fill-blank';
    instruction: string;
    codeTemplate: string;
    answer: string;
    hint: string;
}

export interface DragDropSlide {
    type: 'drag-drop';
    instruction: string;
    tokens: string[];
    correctOrder: string[];
    hint: string;
}

export type Slide = TheorySlide | QuizSlide | FillBlankSlide | DragDropSlide;

export interface Level {
    id: string;
    title: string;
    description: string;
    slides: Slide[];
}

export interface LanguageCurriculum {
    id: string;
    name: string;
    icon: string;
    color: string;
    description: string;
    levels: Level[];
}
