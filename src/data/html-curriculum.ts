import { Level } from './types';

export const htmlLevels: Level[] = [
    {
        id: 'html-1', title: 'Hello, HTML!', description: 'Your very first web page',
        slides: [
            { type: 'theory', title: 'What is HTML?', content: 'HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using elements represented by tags.', codeExample: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>' },
            { type: 'fill-blank', instruction: 'Complete the heading tag:', codeTemplate: '<__BLANK__>Hello World!</h1>', answer: 'h1', hint: 'Headings use h1 through h6 tags' },
            { type: 'quiz', question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'HyperText Machine Learning', 'Home Tool Markup Language'], correctIndex: 0, explanation: 'HTML stands for HyperText Markup Language.' },
        ],
    },
    {
        id: 'html-2', title: 'Text & Headings', description: 'Formatting text content',
        slides: [
            { type: 'theory', title: 'Headings & Paragraphs', content: 'HTML has 6 heading levels (<h1> to <h6>) and paragraphs (<p>). <h1> is the largest heading. Use <strong> for bold, <em> for italic.', codeExample: '<h1>Main Title</h1>\n<h2>Sub Title</h2>\n<p>This is a <strong>bold</strong> and <em>italic</em> paragraph.</p>' },
            { type: 'drag-drop', instruction: 'Arrange tags to create a bold paragraph:', tokens: ['</strong>', '<p>', 'Hello', '</p>', '<strong>'], correctOrder: ['<p>', '<strong>', 'Hello', '</strong>', '</p>'], hint: 'Tags must be properly nested' },
            { type: 'quiz', question: 'Which tag makes text bold?', options: ['<bold>', '<strong>', '<b-text>', '<heavy>'], correctIndex: 1, explanation: '<strong> is the semantic way to make text bold.' },
        ],
    },
    {
        id: 'html-3', title: 'Links & Navigation', description: 'Connecting pages together',
        slides: [
            { type: 'theory', title: 'Hyperlinks', content: 'The <a> tag creates hyperlinks. The href attribute specifies the destination URL. Use target="_blank" to open in a new tab.', codeExample: '<a href="https://example.com">Visit Example</a>\n<a href="/about">About Us</a>\n<a href="#section1">Jump to Section</a>' },
            { type: 'fill-blank', instruction: 'Create a link to Google:', codeTemplate: '<a __BLANK__="https://google.com">Google</a>', answer: 'href', hint: 'The attribute that specifies the URL destination' },
            { type: 'quiz', question: 'What opens a link in a new tab?', options: ['new-tab', 'target="_blank"', 'open="new"', 'href="_blank"'], correctIndex: 1, explanation: 'target="_blank" opens links in a new tab.' },
        ],
    },
    {
        id: 'html-4', title: 'Images & Media', description: 'Adding visuals to your page',
        slides: [
            { type: 'theory', title: 'Images', content: 'The <img> tag embeds images. It requires src (image path) and alt (description). Images are self-closing tags. You can also embed video and audio.', codeExample: '<img src="photo.jpg" alt="A sunset">\n<video controls>\n  <source src="video.mp4" type="video/mp4">\n</video>' },
            { type: 'fill-blank', instruction: 'Add alt text to an image:', codeTemplate: '<img src="cat.jpg" __BLANK__="A cute cat">', answer: 'alt', hint: 'This attribute provides alternative text for accessibility' },
            { type: 'quiz', question: 'Why is the alt attribute important?', options: ['It makes images bigger', 'For accessibility and SEO', 'It adds animation', 'It changes the color'], correctIndex: 1, explanation: 'alt text helps screen readers and improves SEO.' },
        ],
    },
    {
        id: 'html-5', title: 'Lists', description: 'Ordered and unordered lists',
        slides: [
            { type: 'theory', title: 'HTML Lists', content: 'Use <ul> for unordered (bullet) lists and <ol> for ordered (numbered) lists. Each item uses <li>. Lists can be nested inside each other.', codeExample: '<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>' },
            { type: 'drag-drop', instruction: 'Build an unordered list:', tokens: ['</li>', '<ul>', '</ul>', '<li>', 'Apple'], correctOrder: ['<ul>', '<li>', 'Apple', '</li>', '</ul>'], hint: 'ul wraps the list, li wraps each item' },
            { type: 'quiz', question: 'Which tag creates a numbered list?', options: ['<ul>', '<ol>', '<nl>', '<list>'], correctIndex: 1, explanation: '<ol> creates an ordered (numbered) list.' },
        ],
    },
    {
        id: 'html-6', title: 'Tables', description: 'Displaying data in rows and columns',
        slides: [
            { type: 'theory', title: 'HTML Tables', content: 'Tables organize data into rows and columns. Use <table>, <tr> for rows, <th> for headers, <td> for data cells. Add <thead> and <tbody> for structure.', codeExample: '<table>\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alice</td><td>25</td></tr>\n  </tbody>\n</table>' },
            { type: 'fill-blank', instruction: 'Create a table header cell:', codeTemplate: '<__BLANK__>Name</th>', answer: 'th', hint: 'th stands for table header' },
            { type: 'quiz', question: 'Which tag creates a table row?', options: ['<row>', '<tr>', '<table-row>', '<trow>'], correctIndex: 1, explanation: '<tr> stands for table row.' },
        ],
    },
    {
        id: 'html-7', title: 'Forms Basics', description: 'Collecting user input',
        slides: [
            { type: 'theory', title: 'HTML Forms', content: 'Forms collect user input with <form>, <input>, <textarea>, <select>, and <button>. The type attribute on <input> defines the input kind.', codeExample: '<form action="/submit" method="POST">\n  <input type="text" placeholder="Name">\n  <input type="email" placeholder="Email">\n  <button type="submit">Send</button>\n</form>' },
            { type: 'fill-blank', instruction: 'Create a password input:', codeTemplate: '<input type="__BLANK__" placeholder="Password">', answer: 'password', hint: 'This type hides characters as you type' },
            { type: 'quiz', question: 'Which creates a checkbox?', options: ['type="check"', 'type="checkbox"', 'type="tick"', 'type="bool"'], correctIndex: 1, explanation: 'type="checkbox" creates a toggleable checkbox.' },
        ],
    },
    {
        id: 'html-8', title: 'Form Validation', description: 'Ensuring correct user input',
        slides: [
            { type: 'theory', title: 'Input Validation', content: 'HTML5 has built-in validation: required, minlength, maxlength, pattern, min, max. The browser checks these before form submission.', codeExample: '<form>\n  <input type="email" required>\n  <input type="text" minlength="3" maxlength="50">\n  <input type="number" min="1" max="100">\n  <button type="submit">Submit</button>\n</form>' },
            { type: 'fill-blank', instruction: 'Make an input field required:', codeTemplate: '<input type="text" __BLANK__>', answer: 'required', hint: 'This attribute makes the field mandatory' },
            { type: 'quiz', question: 'What does minlength do?', options: ['Sets minimum width', 'Sets minimum characters', 'Sets minimum font size', 'Sets minimum value'], correctIndex: 1, explanation: 'minlength sets the minimum number of characters required.' },
        ],
    },
    {
        id: 'html-9', title: 'Semantic HTML', description: 'Meaningful page structure',
        slides: [
            { type: 'theory', title: 'Semantic Elements', content: 'Semantic tags describe meaning: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>. They improve accessibility and SEO vs using only <div>.', codeExample: '<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>\n    <section>...</section>\n  </article>\n  <aside>Sidebar</aside>\n</main>\n<footer>© 2025</footer>' },
            { type: 'drag-drop', instruction: 'Order the semantic page structure:', tokens: ['<footer>', '<header>', '<aside>', '<main>'], correctOrder: ['<header>', '<main>', '<aside>', '<footer>'], hint: 'Header comes first, footer last' },
            { type: 'quiz', question: 'Why use semantic HTML?', options: ['Faster loading', 'Better accessibility & SEO', 'Prettier colors', 'Smaller file size'], correctIndex: 1, explanation: 'Semantic HTML helps screen readers and search engines understand your content.' },
        ],
    },
    {
        id: 'html-10', title: 'Div & Span', description: 'Generic containers',
        slides: [
            { type: 'theory', title: 'Div and Span', content: '<div> is a block-level container for grouping elements. <span> is an inline container for styling text. Use them with CSS classes for layout and styling.', codeExample: '<div class="card">\n  <h2>Title</h2>\n  <p>Text with <span class="highlight">highlighted</span> word.</p>\n</div>' },
            { type: 'fill-blank', instruction: 'Create a div with a class:', codeTemplate: '<div __BLANK__="container">Content</div>', answer: 'class', hint: 'This attribute assigns a CSS class name' },
            { type: 'quiz', question: 'What is the difference between div and span?', options: ['div is colorful, span is not', 'div is block-level, span is inline', 'div is for text, span is for images', 'No difference'], correctIndex: 1, explanation: '<div> creates a block (new line), <span> stays inline within text.' },
        ],
    },
    {
        id: 'html-11', title: 'HTML Attributes', description: 'Adding properties to elements',
        slides: [
            { type: 'theory', title: 'Attributes Deep Dive', content: 'Attributes provide extra info: id (unique identifier), class (CSS styling), style (inline CSS), data-* (custom data), title (tooltip).', codeExample: '<div id="main" class="container" title="Main section">\n  <p data-count="5" style="color: blue;">Styled text</p>\n</div>' },
            { type: 'fill-blank', instruction: 'Add a unique identifier:', codeTemplate: '<div __BLANK__="header">My Header</div>', answer: 'id', hint: 'This attribute must be unique on the page' },
            { type: 'quiz', question: 'Which attribute stores custom data?', options: ['custom=""', 'info=""', 'data-*=""', 'meta=""'], correctIndex: 2, explanation: 'data-* attributes store custom data on HTML elements.' },
        ],
    },
    {
        id: 'html-12', title: 'Meta Tags & SEO', description: 'Optimizing for search engines',
        slides: [
            { type: 'theory', title: 'Meta Tags', content: 'Meta tags in <head> provide info to browsers and search engines: charset, viewport, description, keywords, Open Graph for social sharing.', codeExample: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="My awesome website">\n  <title>My Site</title>\n</head>' },
            { type: 'fill-blank', instruction: 'Set the page description:', codeTemplate: '<meta name="__BLANK__" content="A coding tutorial site">', answer: 'description', hint: 'This meta name appears in search results' },
            { type: 'quiz', question: 'What does the viewport meta tag do?', options: ['Changes page color', 'Controls responsive scaling', 'Adds animations', 'Sets the language'], correctIndex: 1, explanation: 'The viewport meta tag controls how the page scales on mobile devices.' },
        ],
    },
    {
        id: 'html-13', title: 'Iframes & Embeds', description: 'Embedding external content',
        slides: [
            { type: 'theory', title: 'Iframes', content: 'The <iframe> tag embeds another webpage inside your page. Used for maps, videos, and third-party widgets. Always set width, height, and title attributes.', codeExample: '<iframe\n  src="https://www.youtube.com/embed/abc"\n  width="560" height="315"\n  title="Video Player"\n  allowfullscreen>\n</iframe>' },
            { type: 'fill-blank', instruction: 'Embed a YouTube video:', codeTemplate: '<__BLANK__ src="https://youtube.com/embed/abc" title="Video"></iframe>', answer: 'iframe', hint: 'This tag embeds external content' },
            { type: 'quiz', question: 'Why add a title to iframes?', options: ['For styling', 'For accessibility', 'For speed', 'For caching'], correctIndex: 1, explanation: 'The title helps screen readers describe the embedded content.' },
        ],
    },
    {
        id: 'html-14', title: 'Accessibility (a11y)', description: 'Making the web for everyone',
        slides: [
            { type: 'theory', title: 'Web Accessibility', content: 'Accessibility ensures everyone can use your site. Use: alt on images, aria-label on icons, proper heading hierarchy, keyboard navigation support, and sufficient color contrast.', codeExample: '<button aria-label="Close menu">\n  <svg>...</svg>\n</button>\n<img src="chart.png" alt="Sales increased 50% in Q4">\n<nav aria-label="Main navigation">...</nav>' },
            { type: 'fill-blank', instruction: 'Add an accessible label to an icon button:', codeTemplate: '<button __BLANK__="Search">🔍</button>', answer: 'aria-label', hint: 'This ARIA attribute provides a text label' },
            { type: 'quiz', question: 'What is ARIA?', options: ['A CSS framework', 'A font library', 'Accessible Rich Internet Applications', 'A testing tool'], correctIndex: 2, explanation: 'ARIA helps make dynamic web content accessible to all users.' },
        ],
    },
    {
        id: 'html-15', title: 'HTML Best Practices', description: 'Writing clean, professional HTML',
        slides: [
            { type: 'theory', title: 'Pro HTML Tips', content: 'Best practices: Always use DOCTYPE, proper indentation, semantic tags, alt text, valid nesting, lowercase tag names, quoted attributes, and close all tags.', codeExample: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Professional Page</title>\n</head>\n<body>\n  <header>...</header>\n  <main>...</main>\n  <footer>...</footer>\n</body>\n</html>' },
            { type: 'drag-drop', instruction: 'Order a proper HTML document:', tokens: ['<body>', '<!DOCTYPE html>', '</html>', '<html>', '</body>'], correctOrder: ['<!DOCTYPE html>', '<html>', '<body>', '</body>', '</html>'], hint: 'DOCTYPE comes first, then html wraps everything' },
            { type: 'quiz', question: 'Which is a best practice?', options: ['Skip closing tags', 'Use only divs', 'Always include alt text', 'Use uppercase tags'], correctIndex: 2, explanation: 'Always including alt text on images is essential for accessibility.' },
        ],
    },
];
