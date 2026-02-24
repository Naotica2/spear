import { Level } from './types';

export const phpLevels: Level[] = [
    {
        id: 'php-1', title: 'PHP Basics', description: 'Your first PHP script',
        slides: [
            { type: 'theory', title: 'What is PHP?', content: 'PHP is a server-side language that runs on web servers. Code is wrapped in <?php ?> tags. It powers over 75% of the web including WordPress.', codeExample: '<?php\n  $name = "Alice";\n  echo "Hello, " . $name . "!";\n  // Output: Hello, Alice!\n?>' },
            { type: 'fill-blank', instruction: 'Print a message:', codeTemplate: '<?php\n  __BLANK__ "Hello World!";\n?>', answer: 'echo', hint: 'PHP output command' },
            { type: 'quiz', question: 'How do PHP variables start?', options: ['With let', 'With $', 'With var', 'With @'], correctIndex: 1, explanation: 'All PHP variables start with $.' },
        ],
    },
    {
        id: 'php-2', title: 'Data Types', description: 'Strings, numbers, and booleans',
        slides: [
            { type: 'theory', title: 'PHP Types', content: 'PHP types: string, int, float, bool, array, object, null. PHP is dynamically typed — variables can change type. Use gettype() to check.', codeExample: '<?php\n$name = "Alice";     // string\n$age = 25;           // int\n$gpa = 3.8;          // float\n$active = true;      // bool\n$empty = null;       // null\necho gettype($name); // "string"\n?>' },
            { type: 'fill-blank', instruction: 'Concatenate two strings:', codeTemplate: '$full = $first __BLANK__ " " . $last;', answer: '.', hint: 'PHP uses a dot for string concatenation' },
            { type: 'quiz', question: 'PHP concatenation operator?', options: ['+', '.', '&', '~'], correctIndex: 1, explanation: 'PHP uses the dot (.) to concatenate strings.' },
        ],
    },
    {
        id: 'php-3', title: 'Arrays', description: 'Indexed and associative arrays',
        slides: [
            { type: 'theory', title: 'PHP Arrays', content: 'PHP has indexed arrays and associative arrays (key-value). Use count(), array_push(), in_array(), array_merge(), array_keys().', codeExample: '<?php\n$fruits = ["apple", "banana"];\n$user = ["name" => "Alice", "age" => 25];\n\necho $fruits[0];      // "apple"\necho $user["name"];   // "Alice"\ncount($fruits);       // 2\n?>' },
            { type: 'fill-blank', instruction: 'Loop through an array:', codeTemplate: '__BLANK__ ($items as $item) {\n  echo $item;\n}', answer: 'foreach', hint: 'PHP keyword for iterating arrays' },
            { type: 'quiz', question: 'Associative array syntax?', options: ['["key": "val"]', '["key" => "val"]', '{"key": "val"}', 'array(key, val)'], correctIndex: 1, explanation: 'PHP uses => operator in associative arrays.' },
        ],
    },
    {
        id: 'php-4', title: 'Control Flow', description: 'If, else, switch, loops',
        slides: [
            { type: 'theory', title: 'Conditionals & Loops', content: 'PHP has if/elseif/else, switch, while, do-while, for, and foreach. The match expression (PHP 8) is a stricter switch alternative.', codeExample: '<?php\nif ($score >= 90) {\n  $grade = "A";\n} elseif ($score >= 80) {\n  $grade = "B";\n} else {\n  $grade = "C";\n}\n\nfor ($i = 0; $i < 5; $i++) {\n  echo $i;\n}\n?>' },
            { type: 'fill-blank', instruction: 'PHP elseif keyword:', codeTemplate: 'if ($x > 10) {\n  // big\n} __BLANK__ ($x > 5) {\n  // medium\n}', answer: 'elseif', hint: 'PHP uses elseif (one word)' },
            { type: 'quiz', question: 'What is match in PHP 8?', options: ['A regex function', 'A stricter switch', 'A loop type', 'A variable type'], correctIndex: 1, explanation: 'match is a strict comparison alternative to switch in PHP 8.' },
        ],
    },
    {
        id: 'php-5', title: 'Functions', description: 'Reusable PHP code',
        slides: [
            { type: 'theory', title: 'PHP Functions', content: 'PHP functions use the function keyword. Support typed parameters, default values, return types. PHP 7.4+ has arrow functions.', codeExample: '<?php\nfunction greet(string $name): string {\n  return "Hello, $name!";\n}\n\n$double = fn($n) => $n * 2;\n\necho greet("Alice");\necho $double(5); // 10\n?>' },
            { type: 'drag-drop', instruction: 'Build a PHP function:', tokens: ['return', 'function greet', '($name)', '"Hello, $name!";', '{', '}'], correctOrder: ['function greet', '($name)', '{', 'return', '"Hello, $name!";', '}'], hint: 'PHP functions start with function keyword' },
            { type: 'quiz', question: 'fn() in PHP 7.4+ defines?', options: ['A class', 'Arrow function', 'Variable', 'Constant'], correctIndex: 1, explanation: 'fn() is PHP arrow function syntax.' },
        ],
    },
    {
        id: 'php-6', title: 'String Functions', description: 'Manipulating text',
        slides: [
            { type: 'theory', title: 'String Operations', content: 'PHP string functions: strlen(), strtolower(), strtoupper(), trim(), substr(), str_replace(), str_contains() (PHP 8), explode(), implode().', codeExample: '<?php\n$str = " Hello World ";\necho strlen(trim($str));  // 11\necho strtoupper($str);    // " HELLO WORLD "\necho str_replace("World", "PHP", $str);\n\n$parts = explode(" ", trim($str));\n// ["Hello", "World"]\n?>' },
            { type: 'fill-blank', instruction: 'Convert string to lowercase:', codeTemplate: '$lower = __BLANK__($name);', answer: 'strtolower', hint: 'String to lower case function' },
            { type: 'quiz', question: 'explode() does what?', options: ['Deletes a string', 'Splits string into array', 'Reverses a string', 'Encrypts a string'], correctIndex: 1, explanation: 'explode() splits a string into an array by a delimiter.' },
        ],
    },
    {
        id: 'php-7', title: 'Forms & $_POST', description: 'Handling form submissions',
        slides: [
            { type: 'theory', title: 'Form Handling', content: 'PHP handles forms with superglobals: $_GET for URL params, $_POST for form data. Always sanitize with htmlspecialchars() to prevent XSS.', codeExample: '<?php\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n  $name = htmlspecialchars($_POST["name"]);\n  echo "Welcome, $name!";\n}\n?>\n<form method="POST">\n  <input name="name" type="text">\n  <button type="submit">Submit</button>\n</form>' },
            { type: 'fill-blank', instruction: 'Get POST form value:', codeTemplate: '$email = $_POST["__BLANK__"];', answer: 'email', hint: 'Matches the input name attribute' },
            { type: 'quiz', question: 'htmlspecialchars() prevents?', options: ['SQL injection', 'XSS attacks', 'CSRF attacks', 'Brute force'], correctIndex: 1, explanation: 'htmlspecialchars() converts special chars to HTML entities against XSS.' },
        ],
    },
    {
        id: 'php-8', title: 'File Handling', description: 'Reading and writing files',
        slides: [
            { type: 'theory', title: 'File Operations', content: 'PHP can read/write files: file_get_contents() reads entire file, file_put_contents() writes, fopen/fread/fwrite for streaming. Always check file_exists().', codeExample: '<?php\n// Read\n$content = file_get_contents("data.txt");\n\n// Write\nfile_put_contents("log.txt", "Entry at " . date("Y-m-d"));\n\n// Append\nfile_put_contents("log.txt", "\\nNew line", FILE_APPEND);\n\nif (file_exists("config.json")) { ... }\n?>' },
            { type: 'fill-blank', instruction: 'Read an entire file:', codeTemplate: '$data = __BLANK__("config.json");', answer: 'file_get_contents', hint: 'Gets the contents of an entire file as a string' },
            { type: 'quiz', question: 'FILE_APPEND flag does what?', options: ['Deletes file first', 'Adds to end of file', 'Creates backup', 'Reads file'], correctIndex: 1, explanation: 'FILE_APPEND adds content to the end instead of overwriting.' },
        ],
    },
    {
        id: 'php-9', title: 'Sessions & Cookies', description: 'Remembering users',
        slides: [
            { type: 'theory', title: 'Sessions', content: 'Sessions store data server-side per user. Start with session_start(). Cookies store data client-side. Use for login state, preferences, shopping carts.', codeExample: '<?php\nsession_start();\n\n// Set session data\n$_SESSION["user"] = "Alice";\n$_SESSION["role"] = "admin";\n\n// Read session\necho $_SESSION["user"]; // "Alice"\n\n// Set cookie (1 hour)\nsetcookie("theme", "dark", time() + 3600);\n?>' },
            { type: 'fill-blank', instruction: 'Start a PHP session:', codeTemplate: '__BLANK__();', answer: 'session_start', hint: 'Must be called before any output' },
            { type: 'quiz', question: 'Where are sessions stored?', options: ['Client browser', 'Server', 'Database', 'URL'], correctIndex: 1, explanation: 'Session data is stored on the server, only the ID is in the client cookie.' },
        ],
    },
    {
        id: 'php-10', title: 'OOP Basics', description: 'Classes and objects',
        slides: [
            { type: 'theory', title: 'Object-Oriented PHP', content: 'PHP supports OOP: class defines a blueprint, new creates instances. Use public/private/protected visibility. Constructor with __construct().', codeExample: '<?php\nclass User {\n  private string $name;\n  \n  public function __construct(string $name) {\n    $this->name = $name;\n  }\n  \n  public function greet(): string {\n    return "Hello, {$this->name}!";\n  }\n}\n\n$user = new User("Alice");\necho $user->greet();\n?>' },
            { type: 'fill-blank', instruction: 'Create a new object:', codeTemplate: '$car = __BLANK__ Car("Toyota");', answer: 'new', hint: 'Keyword to instantiate a class' },
            { type: 'quiz', question: 'What is __construct?', options: ['A loop', 'Class destructor', 'Constructor method', 'Static method'], correctIndex: 2, explanation: '__construct runs automatically when creating a new object.' },
        ],
    },
    {
        id: 'php-11', title: 'Inheritance', description: 'Extending classes',
        slides: [
            { type: 'theory', title: 'Inheritance & Interfaces', content: 'Extend classes with extends, implement contracts with interface. Use abstract for base classes. PHP supports single inheritance + multiple interfaces.', codeExample: '<?php\ninterface Printable {\n  public function print(): string;\n}\n\nclass Animal {\n  protected string $name;\n  public function __construct(string $name) {\n    $this->name = $name;\n  }\n}\n\nclass Dog extends Animal implements Printable {\n  public function print(): string {\n    return "Dog: {$this->name}";\n  }\n}\n?>' },
            { type: 'fill-blank', instruction: 'Inherit from a parent class:', codeTemplate: 'class Cat __BLANK__ Animal { }', answer: 'extends', hint: 'Keyword for class inheritance' },
            { type: 'quiz', question: 'PHP supports?', options: ['Multiple inheritance', 'Single inheritance + interfaces', 'No inheritance', 'Only interfaces'], correctIndex: 1, explanation: 'PHP supports single inheritance and multiple interface implementations.' },
        ],
    },
    {
        id: 'php-12', title: 'Database & PDO', description: 'Connecting to MySQL',
        slides: [
            { type: 'theory', title: 'PDO Database', content: 'PDO (PHP Data Objects) connects to databases safely. Use prepared statements to prevent SQL injection. Supports MySQL, PostgreSQL, SQLite.', codeExample: '<?php\n$pdo = new PDO("mysql:host=localhost;dbname=mydb", "user", "pass");\n\n$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");\n$stmt->execute([$userId]);\n$user = $stmt->fetch(PDO::FETCH_ASSOC);\n\necho $user["name"];\n?>' },
            { type: 'fill-blank', instruction: 'Create a prepared statement:', codeTemplate: '$stmt = $pdo->__BLANK__("SELECT * FROM users WHERE id = ?");', answer: 'prepare', hint: 'Creates a safe parameterized query' },
            { type: 'quiz', question: 'Why use prepared statements?', options: ['Faster queries', 'Prevent SQL injection', 'Less memory', 'Auto-format'], correctIndex: 1, explanation: 'Prepared statements prevent SQL injection attacks.' },
        ],
    },
    {
        id: 'php-13', title: 'JSON & APIs', description: 'Working with web data',
        slides: [
            { type: 'theory', title: 'JSON in PHP', content: 'json_encode() converts PHP to JSON, json_decode() converts JSON to PHP. Use file_get_contents() or curl to call APIs. Set proper Content-Type headers.', codeExample: '<?php\n$data = ["name" => "Alice", "age" => 25];\n$json = json_encode($data);\necho $json; // {"name":"Alice","age":25}\n\n$parsed = json_decode($json, true);\necho $parsed["name"]; // "Alice"\n\nheader("Content-Type: application/json");\necho json_encode(["status" => "ok"]);\n?>' },
            { type: 'fill-blank', instruction: 'Convert array to JSON:', codeTemplate: '$json = __BLANK__($data);', answer: 'json_encode', hint: 'Encodes PHP data as JSON string' },
            { type: 'quiz', question: 'json_decode second param true returns?', options: ['Object', 'Associative array', 'String', 'Boolean'], correctIndex: 1, explanation: 'Setting true returns an associative array instead of an object.' },
        ],
    },
    {
        id: 'php-14', title: 'Error Handling', description: 'Handling failures gracefully',
        slides: [
            { type: 'theory', title: 'Exceptions', content: 'PHP uses try/catch/finally for exception handling. Throw custom exceptions. Use set_error_handler() for legacy errors. PHP 8 has union types for error returns.', codeExample: '<?php\ntry {\n  $file = fopen("data.txt", "r");\n  if (!$file) {\n    throw new Exception("Cannot open file");\n  }\n} catch (Exception $e) {\n  error_log($e->getMessage());\n  echo "Error occurred";\n} finally {\n  if (isset($file)) fclose($file);\n}\n?>' },
            { type: 'fill-blank', instruction: 'Catch an exception:', codeTemplate: 'try { ... } __BLANK__ (Exception $e) { ... }', answer: 'catch', hint: 'Keyword to handle thrown exceptions' },
            { type: 'quiz', question: 'finally block runs when?', options: ['Only on success', 'Only on error', 'Always', 'Never'], correctIndex: 2, explanation: 'finally always runs regardless of try/catch outcome.' },
        ],
    },
    {
        id: 'php-15', title: 'PHP Best Practices', description: 'Writing production-quality code',
        slides: [
            { type: 'theory', title: 'Pro PHP', content: 'Best practices: use strict types, type declarations, Composer for packages, PSR standards, prepared statements, input validation, error logging, and environment variables.', codeExample: '<?php\ndeclare(strict_types=1);\n\n// Environment variables\n$dbHost = getenv("DB_HOST");\n\n// Type declarations\nfunction calculateTax(float $amount, float $rate = 0.1): float {\n  return $amount * $rate;\n}\n\n// Validation\n$email = filter_var($input, FILTER_VALIDATE_EMAIL);\nif (!$email) { throw new InvalidArgumentException("Bad email"); }\n?>' },
            { type: 'fill-blank', instruction: 'Enable strict typing:', codeTemplate: '__BLANK__(strict_types=1);', answer: 'declare', hint: 'PHP directive for strict type checking' },
            { type: 'quiz', question: 'What is Composer?', options: ['A PHP framework', 'A code editor', 'A package manager', 'A testing tool'], correctIndex: 2, explanation: 'Composer is PHP\'s dependency/package manager (like npm for JavaScript).' },
        ],
    },
];
