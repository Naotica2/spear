import { Level } from './types';

export const cssLevels: Level[] = [
    {
        id: 'css-1', title: 'CSS Basics', description: 'Selectors and properties',
        slides: [
            { type: 'theory', title: 'What is CSS?', content: 'CSS controls how HTML elements look. A CSS rule has a selector and declarations (property: value pairs).', codeExample: 'h1 {\n  color: blue;\n  font-size: 24px;\n}' },
            { type: 'fill-blank', instruction: 'Set the text color to red:', codeTemplate: 'p {\n  __BLANK__: red;\n}', answer: 'color', hint: 'The property that sets text color' },
            { type: 'quiz', question: 'Which property changes background color?', options: ['bg-color', 'background-color', 'color-bg', 'back-color'], correctIndex: 1, explanation: 'background-color is the correct CSS property.' },
        ],
    },
    {
        id: 'css-2', title: 'Selectors', description: 'Targeting HTML elements',
        slides: [
            { type: 'theory', title: 'CSS Selectors', content: 'Selectors target elements: element (p), class (.name), ID (#name), descendant (div p), child (div > p), attribute ([type="text"]).', codeExample: '.highlight {\n  color: yellow;\n}\n\n#header {\n  font-size: 32px;\n}\n\ndiv > p {\n  margin: 10px;\n}\n\ninput[type="email"] {\n  border: 1px solid blue;\n}' },
            { type: 'fill-blank', instruction: 'Select elements with class "card":', codeTemplate: '__BLANK__ {\n  padding: 16px;\n}', answer: '.card', hint: 'Class selectors start with a dot' },
            { type: 'quiz', question: 'Which selector has highest specificity?', options: ['element', '.class', '#id', '*'], correctIndex: 2, explanation: 'ID selectors have the highest specificity of the three.' },
        ],
    },
    {
        id: 'css-3', title: 'Box Model', description: 'Margin, padding, border',
        slides: [
            { type: 'theory', title: 'The Box Model', content: 'Every element is a box: Content → Padding → Border → Margin. Use box-sizing: border-box to include padding and border in the width.', codeExample: '.box {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 16px;\n}' },
            { type: 'drag-drop', instruction: 'Order box model layers inside to outside:', tokens: ['Margin', 'Content', 'Border', 'Padding'], correctOrder: ['Content', 'Padding', 'Border', 'Margin'], hint: 'Content is innermost, margin is outermost' },
            { type: 'quiz', question: 'What does padding do?', options: ['Space outside border', 'Space inside border', 'Changes border width', 'Removes border'], correctIndex: 1, explanation: 'Padding adds space between content and border.' },
        ],
    },
    {
        id: 'css-4', title: 'Colors & Units', description: 'Color systems and measurements',
        slides: [
            { type: 'theory', title: 'CSS Colors & Units', content: 'Colors: names, hex (#FF0000), rgb(255,0,0), hsl(0,100%,50%). Units: px (fixed), em/rem (relative), % (percentage), vw/vh (viewport).', codeExample: '.text {\n  color: hsl(210, 80%, 60%);\n}\n\n.box {\n  width: 80vw;\n  font-size: 1.2rem;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}' },
            { type: 'fill-blank', instruction: 'Set font size relative to root:', codeTemplate: 'body {\n  font-size: 1.5__BLANK__;\n}', answer: 'rem', hint: 'This unit is relative to the root element font size' },
            { type: 'quiz', question: 'Which color format uses hue, saturation, lightness?', options: ['RGB', 'HEX', 'HSL', 'CMYK'], correctIndex: 2, explanation: 'HSL uses Hue, Saturation, and Lightness.' },
        ],
    },
    {
        id: 'css-5', title: 'Typography', description: 'Beautiful text styling',
        slides: [
            { type: 'theory', title: 'Fonts & Text', content: 'Control text with font-family, font-size, font-weight, line-height, letter-spacing, text-align, text-transform, and text-decoration.', codeExample: 'body {\n  font-family: "Inter", sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  letter-spacing: -0.02em;\n}' },
            { type: 'fill-blank', instruction: 'Set line spacing to 1.5:', codeTemplate: 'p {\n  __BLANK__: 1.5;\n}', answer: 'line-height', hint: 'Controls the space between lines of text' },
            { type: 'quiz', question: 'text-transform: uppercase does what?', options: ['Makes text bigger', 'Makes all letters capital', 'Adds bold', 'Changes font'], correctIndex: 1, explanation: 'text-transform: uppercase converts all text to capital letters.' },
        ],
    },
    {
        id: 'css-6', title: 'Flexbox', description: 'Flexible one-dimensional layouts',
        slides: [
            { type: 'theory', title: 'Flexbox Layout', content: 'Set display: flex on a container. Use justify-content for main axis alignment, align-items for cross axis, and gap for spacing.', codeExample: '.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}' },
            { type: 'fill-blank', instruction: 'Center items horizontally:', codeTemplate: '.flex {\n  display: flex;\n  __BLANK__: center;\n}', answer: 'justify-content', hint: 'Aligns items along the main axis' },
            { type: 'quiz', question: 'Which property allows flex items to wrap?', options: ['flex-wrap', 'flex-break', 'flex-overflow', 'flex-line'], correctIndex: 0, explanation: 'flex-wrap: wrap allows items to flow into multiple lines.' },
        ],
    },
    {
        id: 'css-7', title: 'CSS Grid', description: 'Two-dimensional layouts',
        slides: [
            { type: 'theory', title: 'Grid Layout', content: 'Grid creates 2D layouts with rows and columns. Use grid-template-columns, grid-template-rows, gap, and place children with grid-column/grid-row.', codeExample: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.wide {\n  grid-column: span 2;\n}' },
            { type: 'fill-blank', instruction: 'Create a 3-column grid:', codeTemplate: '.grid {\n  display: grid;\n  grid-template-columns: __BLANK__(3, 1fr);\n}', answer: 'repeat', hint: 'This function repeats a pattern' },
            { type: 'quiz', question: 'What does 1fr mean?', options: ['1 frame', '1 fraction of available space', '1 full row', '1 font ratio'], correctIndex: 1, explanation: '1fr is one fraction of the available space in the grid.' },
        ],
    },
    {
        id: 'css-8', title: 'Positioning', description: 'Controlling element placement',
        slides: [
            { type: 'theory', title: 'CSS Position', content: 'Position values: static (default), relative (offset from normal), absolute (relative to positioned parent), fixed (to viewport), sticky (hybrid).', codeExample: '.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n}' },
            { type: 'fill-blank', instruction: 'Fix an element to the viewport:', codeTemplate: '.navbar {\n  position: __BLANK__;\n  top: 0;\n}', answer: 'fixed', hint: 'This position stays in place when scrolling' },
            { type: 'quiz', question: 'position: sticky does what?', options: ['Always stays on screen', 'Sticks after scrolling past it', 'Makes element invisible', 'Adds shadow'], correctIndex: 1, explanation: 'Sticky elements scroll normally then stick at a threshold.' },
        ],
    },
    {
        id: 'css-9', title: 'Transitions', description: 'Smooth property changes',
        slides: [
            { type: 'theory', title: 'CSS Transitions', content: 'Transitions smoothly animate property changes. Specify: property, duration, timing-function, and delay. Best on hover, focus, and active states.', codeExample: '.button {\n  background: #6DD5C4;\n  transition: all 0.3s ease;\n}\n\n.button:hover {\n  background: #4DC0AD;\n  transform: translateY(-2px);\n}' },
            { type: 'fill-blank', instruction: 'Add a smooth transition:', codeTemplate: '.card {\n  __BLANK__: transform 0.3s ease;\n}', answer: 'transition', hint: 'This property enables smooth changes' },
            { type: 'quiz', question: 'Which timing function starts slow, ends fast?', options: ['linear', 'ease-in', 'ease-out', 'ease-in-out'], correctIndex: 1, explanation: 'ease-in starts slowly and accelerates.' },
        ],
    },
    {
        id: 'css-10', title: 'Animations', description: 'Complex multi-step animations',
        slides: [
            { type: 'theory', title: '@keyframes', content: 'Use @keyframes for multi-step animations. Apply with animation property. Control duration, iteration, direction, and fill-mode.', codeExample: '@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.card {\n  animation: fadeIn 0.5s ease forwards;\n}' },
            { type: 'fill-blank', instruction: 'Apply an animation:', codeTemplate: '.el {\n  __BLANK__: bounce 1s infinite;\n}', answer: 'animation', hint: 'This property applies keyframe animations' },
            { type: 'quiz', question: 'Which properties are GPU-optimized?', options: ['width, height', 'transform, opacity', 'margin, padding', 'color, background'], correctIndex: 1, explanation: 'transform and opacity use GPU compositing for best performance.' },
        ],
    },
    {
        id: 'css-11', title: 'Responsive Design', description: 'Adapting to all screens',
        slides: [
            { type: 'theory', title: 'Media Queries', content: 'Use @media queries to apply CSS at different screen sizes. Mobile-first: start with small screens, add rules for larger with min-width breakpoints.', codeExample: '/* Mobile first */\n.grid {\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}' },
            { type: 'fill-blank', instruction: 'Apply CSS for screens 768px and wider:', codeTemplate: '@media (min-width: __BLANK__) {\n  ...\n}', answer: '768px', hint: 'Common tablet breakpoint' },
            { type: 'quiz', question: 'What is mobile-first design?', options: ['Only mobile', 'Start with mobile, add for larger', 'Desktop first', 'No media queries'], correctIndex: 1, explanation: 'Mobile-first means writing base CSS for small screens, then adding rules for larger ones.' },
        ],
    },
    {
        id: 'css-12', title: 'CSS Variables', description: 'Custom properties for reuse',
        slides: [
            { type: 'theory', title: 'Custom Properties', content: 'CSS variables (--name) store values. Define in :root for global scope. Use var(--name) to access. Great for themes and design tokens.', codeExample: ':root {\n  --primary: #6DD5C4;\n  --radius: 16px;\n}\n\n.button {\n  background: var(--primary);\n  border-radius: var(--radius);\n}' },
            { type: 'fill-blank', instruction: 'Use a CSS variable:', codeTemplate: '.card {\n  background: __BLANK__(--card-bg);\n}', answer: 'var', hint: 'This function reads custom property values' },
            { type: 'quiz', question: 'Where should global CSS variables be defined?', options: ['In body', 'In :root', 'In head', 'In footer'], correctIndex: 1, explanation: ':root is the highest-level selector, making variables available everywhere.' },
        ],
    },
    {
        id: 'css-13', title: 'Transforms', description: 'Moving, scaling, and rotating',
        slides: [
            { type: 'theory', title: 'CSS Transform', content: 'Transform modifies elements visually: translate (move), scale (resize), rotate (spin), skew (tilt). Combine multiple transforms in one declaration.', codeExample: '.card:hover {\n  transform: translateY(-4px) scale(1.02);\n}\n\n.icon {\n  transform: rotate(45deg);\n}\n\n.text {\n  transform: skewX(-5deg);\n}' },
            { type: 'fill-blank', instruction: 'Move element up by 10px:', codeTemplate: '.el {\n  transform: __BLANK__(0, -10px);\n}', answer: 'translate', hint: 'This function moves elements' },
            { type: 'quiz', question: 'What does scale(1.5) do?', options: ['Moves 1.5px', 'Makes 150% size', 'Rotates 1.5deg', 'Sets opacity 1.5'], correctIndex: 1, explanation: 'scale(1.5) makes the element 150% of its original size.' },
        ],
    },
    {
        id: 'css-14', title: 'Pseudo-classes & Elements', description: 'Special states and generated content',
        slides: [
            { type: 'theory', title: 'Pseudo-classes', content: ':hover, :focus, :active for interactions. :first-child, :nth-child() for selection. ::before, ::after for generated content.', codeExample: 'a:hover {\n  color: var(--primary);\n}\n\nli:nth-child(odd) {\n  background: #f8f8f8;\n}\n\n.tag::before {\n  content: "#";\n  color: var(--accent);\n}' },
            { type: 'fill-blank', instruction: 'Style every other list item:', codeTemplate: 'li:__BLANK__(even) {\n  background: #f0f0f0;\n}', answer: 'nth-child', hint: 'This pseudo-class selects based on position' },
            { type: 'quiz', question: 'What does ::after do?', options: ['Selects next sibling', 'Generates content after element', 'Adds margin after', 'Deletes element'], correctIndex: 1, explanation: '::after creates a pseudo-element as the last child of the element.' },
        ],
    },
    {
        id: 'css-15', title: 'Modern CSS Mastery', description: 'Advanced techniques for pros',
        slides: [
            { type: 'theory', title: 'Pro CSS', content: 'Modern CSS includes: clamp() for fluid sizing, aspect-ratio for proportions, container queries, backdrop-filter for glassmorphism, and logical properties.', codeExample: '.title {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}\n\n.video {\n  aspect-ratio: 16 / 9;\n}\n\n.glass {\n  backdrop-filter: blur(20px);\n  background: rgba(255, 255, 255, 0.6);\n}' },
            { type: 'fill-blank', instruction: 'Create fluid typography:', codeTemplate: 'h1 {\n  font-size: __BLANK__(1rem, 3vw, 2.5rem);\n}', answer: 'clamp', hint: 'This function sets a min, preferred, and max value' },
            { type: 'quiz', question: 'What does backdrop-filter do?', options: ['Filters images', 'Applies effects behind the element', 'Changes text color', 'Filters network requests'], correctIndex: 1, explanation: 'backdrop-filter applies effects like blur to the area behind an element.' },
        ],
    },
];
