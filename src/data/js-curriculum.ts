import { Level } from './types';

export const jsLevels: Level[] = [
    {
        id: 'js-1', title: 'Variables & Types', description: 'Storing data in JavaScript',
        slides: [
            { type: 'theory', title: 'Variables', content: 'JavaScript has three ways to declare variables: let (changeable), const (constant), and var (old way). Types: string, number, boolean, null, undefined, object, array.', codeExample: 'const name = "Alice";\nlet age = 25;\nlet isStudent = true;\nconst fruits = ["apple", "banana"];\nconst user = { name: "Alice", age: 25 };' },
            { type: 'fill-blank', instruction: 'Declare a constant:', codeTemplate: '__BLANK__ PI = 3.14;', answer: 'const', hint: 'Cannot be reassigned' },
            { type: 'quiz', question: 'Type of 42 in JavaScript?', options: ['integer', 'float', 'number', 'digit'], correctIndex: 2, explanation: 'JavaScript has a single "number" type.' },
        ],
    },
    {
        id: 'js-2', title: 'Operators', description: 'Math and comparisons',
        slides: [
            { type: 'theory', title: 'Operators', content: 'Arithmetic: +, -, *, /, %, **. Comparison: ===, !==, <, >, <=, >=. Logical: &&, ||, !. Always use === instead of == for strict comparison.', codeExample: 'const sum = 10 + 5;      // 15\nconst power = 2 ** 3;    // 8\nconst isEqual = 5 === 5; // true\nconst both = true && false; // false' },
            { type: 'fill-blank', instruction: 'Strict equality check:', codeTemplate: 'if (name __BLANK__ "Alice") { ... }', answer: '===', hint: 'Three equals signs for strict comparison' },
            { type: 'quiz', question: 'What does === check?', options: ['Value only', 'Type only', 'Value and type', 'Reference'], correctIndex: 2, explanation: '=== checks both value and type (strict equality).' },
        ],
    },
    {
        id: 'js-3', title: 'Conditionals', description: 'Making decisions in code',
        slides: [
            { type: 'theory', title: 'If/Else & Ternary', content: 'Use if/else for branching logic. The ternary operator (? :) is a shorthand. Switch statements handle multiple cases.', codeExample: 'if (score >= 90) {\n  grade = "A";\n} else if (score >= 80) {\n  grade = "B";\n} else {\n  grade = "C";\n}\n\nconst status = age >= 18 ? "adult" : "minor";' },
            { type: 'fill-blank', instruction: 'Write a ternary operator:', codeTemplate: 'const msg = isLoggedIn __BLANK__ "Welcome!" : "Please log in";', answer: '?', hint: 'The ternary operator uses ? and :' },
            { type: 'quiz', question: 'What does the ternary operator return?', options: ['Always true', 'One of two values based on condition', 'A boolean', 'Nothing'], correctIndex: 1, explanation: 'Ternary returns one of two values based on the condition.' },
        ],
    },
    {
        id: 'js-4', title: 'Functions', description: 'Reusable code blocks',
        slides: [
            { type: 'theory', title: 'Functions', content: 'Functions are reusable code blocks. Use function declarations, expressions, or arrow functions. They take parameters and return values.', codeExample: 'const greet = (name) => {\n  return `Hello, ${name}!`;\n};\nconst double = (n) => n * 2;\nconsole.log(greet("Alice"));' },
            { type: 'drag-drop', instruction: 'Build an arrow function:', tokens: ['a + b;', 'const add', 'return', '(a, b) =>', '{', '}', '='], correctOrder: ['const add', '=', '(a, b) =>', '{', 'return', 'a + b;', '}'], hint: 'Arrow functions use =>' },
            { type: 'quiz', question: 'What does => define?', options: ['Comparison', 'Arrow function', 'Variable', 'Loop'], correctIndex: 1, explanation: '=> is the arrow function syntax.' },
        ],
    },
    {
        id: 'js-5', title: 'Arrays', description: 'Working with collections',
        slides: [
            { type: 'theory', title: 'Arrays', content: 'Arrays store ordered data. Methods: push, pop, shift, unshift, splice, slice, concat, includes, indexOf, length.', codeExample: 'const arr = [1, 2, 3];\narr.push(4);        // [1,2,3,4]\narr.pop();          // [1,2,3]\narr.includes(2);    // true\narr.indexOf(3);     // 2' },
            { type: 'fill-blank', instruction: 'Add item to end of array:', codeTemplate: 'fruits.__BLANK__("mango");', answer: 'push', hint: 'This method adds to the end' },
            { type: 'quiz', question: 'What does arr.shift() do?', options: ['Adds to end', 'Removes from end', 'Removes from start', 'Sorts array'], correctIndex: 2, explanation: 'shift() removes and returns the first element.' },
        ],
    },
    {
        id: 'js-6', title: 'Array Methods', description: 'Map, filter, reduce',
        slides: [
            { type: 'theory', title: 'Higher-Order Methods', content: 'map() transforms each element, filter() selects matching elements, reduce() accumulates a single value, find() gets first match, every()/some() check conditions.', codeExample: 'const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2);\nconst even = nums.filter(n => n % 2 === 0);\nconst sum = nums.reduce((acc, n) => acc + n, 0);' },
            { type: 'fill-blank', instruction: 'Filter numbers > 3:', codeTemplate: 'const big = nums.__BLANK__(n => n > 3);', answer: 'filter', hint: 'Creates new array with passing elements' },
            { type: 'quiz', question: 'What does .map() return?', options: ['Nothing', 'Single value', 'New array', 'Boolean'], correctIndex: 2, explanation: '.map() creates a new transformed array.' },
        ],
    },
    {
        id: 'js-7', title: 'Objects', description: 'Key-value data structures',
        slides: [
            { type: 'theory', title: 'Objects', content: 'Objects store key-value pairs. Access with dot or bracket notation. Destructure to extract values. Use spread (...) to copy/merge.', codeExample: 'const user = { name: "Alice", age: 25 };\nconsole.log(user.name);    // "Alice"\nconst { name, age } = user; // destructure\nconst copy = { ...user, role: "admin" };' },
            { type: 'fill-blank', instruction: 'Destructure an object:', codeTemplate: 'const { name, __BLANK__ } = user;', answer: 'age', hint: 'Extract the age property' },
            { type: 'quiz', question: 'What does the spread operator (...) do?', options: ['Deletes properties', 'Copies/expands an object', 'Compares objects', 'Validates objects'], correctIndex: 1, explanation: 'The spread operator copies all properties into a new object.' },
        ],
    },
    {
        id: 'js-8', title: 'Loops', description: 'Repeating code efficiently',
        slides: [
            { type: 'theory', title: 'Loops', content: 'for loop for counting, for...of for iterating arrays, for...in for object keys, while for condition-based loops. forEach is array-specific.', codeExample: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\nfor (const item of items) {\n  console.log(item);\n}\nfor (const key in obj) {\n  console.log(key, obj[key]);\n}' },
            { type: 'fill-blank', instruction: 'Iterate over an array:', codeTemplate: 'for (const item __BLANK__ items) { ... }', answer: 'of', hint: 'for...of iterates over values' },
            { type: 'quiz', question: 'Difference between for...in and for...of?', options: ['No difference', 'in = keys, of = values', 'in = values, of = keys', 'in = arrays, of = objects'], correctIndex: 1, explanation: 'for...in iterates keys, for...of iterates values.' },
        ],
    },
    {
        id: 'js-9', title: 'DOM Manipulation', description: 'Changing the page dynamically',
        slides: [
            { type: 'theory', title: 'The DOM', content: 'The DOM lets JS access and modify HTML. querySelector finds elements. textContent changes text, classList modifies classes, style sets CSS, setAttribute changes attributes.', codeExample: 'const el = document.querySelector("#title");\nel.textContent = "New Title";\nel.classList.add("active");\nel.style.color = "blue";' },
            { type: 'fill-blank', instruction: 'Select by CSS selector:', codeTemplate: 'const el = document.__BLANK__(".card");', answer: 'querySelector', hint: 'Uses CSS selectors to find elements' },
            { type: 'quiz', question: 'Which adds a click handler?', options: ['onClick()', 'addEventListener()', 'listenTo()', 'onEvent()'], correctIndex: 1, explanation: 'addEventListener() attaches event handlers.' },
        ],
    },
    {
        id: 'js-10', title: 'Events', description: 'Responding to user actions',
        slides: [
            { type: 'theory', title: 'Event Handling', content: 'Events: click, input, submit, keydown, scroll, load. Use addEventListener to listen, event.preventDefault() to stop defaults, event.target to get the source element.', codeExample: 'btn.addEventListener("click", (e) => {\n  console.log("Clicked!", e.target);\n});\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  // handle form data\n});' },
            { type: 'fill-blank', instruction: 'Prevent form submission:', codeTemplate: 'form.addEventListener("submit", (e) => {\n  e.__BLANK__();\n});', answer: 'preventDefault', hint: 'Stops the default browser behavior' },
            { type: 'quiz', question: 'What is event.target?', options: ['The event name', 'The element that triggered the event', 'The parent element', 'The window'], correctIndex: 1, explanation: 'event.target is the element that fired the event.' },
        ],
    },
    {
        id: 'js-11', title: 'Template Literals', description: 'Modern string handling',
        slides: [
            { type: 'theory', title: 'Template Literals', content: 'Use backticks (`) for template literals. Embed expressions with ${}, create multi-line strings, and tag templates for advanced use.', codeExample: 'const name = "Alice";\nconst greeting = `Hello, ${name}!`;\nconst html = `\n  <div class="card">\n    <h2>${name}</h2>\n    <p>Age: ${25 + 1}</p>\n  </div>\n`;' },
            { type: 'fill-blank', instruction: 'Embed a variable in a string:', codeTemplate: 'const msg = `Welcome, __BLANK__{username}!`;', answer: '$', hint: 'Dollar sign and curly braces for interpolation' },
            { type: 'quiz', question: 'Which quotes allow template literals?', options: ['Single quotes', 'Double quotes', 'Backticks', 'Angle brackets'], correctIndex: 2, explanation: 'Backticks (`) enable template literals with ${} interpolation.' },
        ],
    },
    {
        id: 'js-12', title: 'Promises & Async', description: 'Handling asynchronous code',
        slides: [
            { type: 'theory', title: 'Async/Await', content: 'Promises represent future values. async/await makes async code look synchronous. Always use try/catch for error handling with await.', codeExample: 'async function getData() {\n  try {\n    const res = await fetch("/api/data");\n    const data = await res.json();\n    return data;\n  } catch (err) {\n    console.error(err);\n  }\n}' },
            { type: 'fill-blank', instruction: 'Wait for a promise:', codeTemplate: 'const data = __BLANK__ fetch("/api");', answer: 'await', hint: 'Pauses until the promise resolves' },
            { type: 'quiz', question: 'Where can await be used?', options: ['Anywhere', 'Only in async functions', 'Only in loops', 'Only in callbacks'], correctIndex: 1, explanation: 'await can only be used inside async functions.' },
        ],
    },
    {
        id: 'js-13', title: 'Error Handling', description: 'Gracefully handling failures',
        slides: [
            { type: 'theory', title: 'Try/Catch', content: 'Use try/catch to handle errors gracefully. throw creates custom errors. finally runs regardless of outcome. Error objects have message and stack properties.', codeExample: 'try {\n  const data = JSON.parse(input);\n  if (!data.name) throw new Error("Name required");\n} catch (err) {\n  console.error(err.message);\n} finally {\n  cleanup();\n}' },
            { type: 'fill-blank', instruction: 'Throw a custom error:', codeTemplate: '__BLANK__ new Error("Invalid input");', answer: 'throw', hint: 'This keyword creates an exception' },
            { type: 'quiz', question: 'When does finally run?', options: ['Only on success', 'Only on error', 'Always', 'Never'], correctIndex: 2, explanation: 'finally always runs regardless of try/catch outcome.' },
        ],
    },
    {
        id: 'js-14', title: 'Modules', description: 'Organizing code into files',
        slides: [
            { type: 'theory', title: 'ES Modules', content: 'Use export to share code and import to use it. Named exports use { }, default exports don\'t. Modules help organize large codebases.', codeExample: '// math.js\nexport const add = (a, b) => a + b;\nexport default function multiply(a, b) {\n  return a * b;\n}\n\n// app.js\nimport multiply, { add } from "./math.js";' },
            { type: 'fill-blank', instruction: 'Import a named export:', codeTemplate: '__BLANK__ { useState } from "react";', answer: 'import', hint: 'This keyword brings in modules' },
            { type: 'quiz', question: 'How many default exports per file?', options: ['Unlimited', 'One', 'Two', 'Zero'], correctIndex: 1, explanation: 'Each module can have exactly one default export.' },
        ],
    },
    {
        id: 'js-15', title: 'Modern JS Mastery', description: 'Advanced ES6+ features',
        slides: [
            { type: 'theory', title: 'Pro JavaScript', content: 'Advanced features: optional chaining (?.), nullish coalescing (??), destructuring defaults, Promise.all, generators, symbols, and proxies.', codeExample: 'const city = user?.address?.city ?? "Unknown";\nconst { name = "Guest" } = config;\nconst results = await Promise.all([\n  fetch("/api/users"),\n  fetch("/api/posts"),\n]);' },
            { type: 'fill-blank', instruction: 'Safe property access:', codeTemplate: 'const name = user__BLANK__profile?.name;', answer: '?.', hint: 'Optional chaining prevents errors on null/undefined' },
            { type: 'quiz', question: 'What does ?? do?', options: ['Logical OR', 'Returns right side if left is null/undefined', 'Throws error', 'Compares types'], correctIndex: 1, explanation: '?? returns the right value only if left is null or undefined (not for 0 or "").' },
        ],
    },
];
