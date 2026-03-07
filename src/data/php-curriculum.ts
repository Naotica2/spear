import { Level } from './types';

export const phpLevels: Level[] = [
    // ===== DASAR-DASAR (1-12) =====
    {
        id: 'php-1', title: 'Hello PHP', description: 'Script PHP pertamamu',
        slides: [
            { type: 'theory', title: 'Selamat Datang di PHP', content: 'PHP (PHP: Hypertext Preprocessor) menggerakkan 80% web. PHP berjalan di server untuk menghasilkan HTML. Semua kode PHP ditulis di antara tag <?php dan ?>. echo menampilkan teks.', codeExample: '<?php\n  echo "Welcome to Spear";\n  echo "<h1>Welcome</h1>";\n  // This is a comment\n  /* Multi-line\n     comment */\n?>' },
            { type: 'fill-blank', instruction: 'Tampilkan teks di PHP:', codeTemplate: '__BLANK__ "Welcome to Spear";', answer: 'echo', hint: 'Perintah output PHP' },
            { type: 'quiz', question: 'Di mana kode PHP dijalankan?', options: ['Di browser', 'Di server', 'Di database', 'Di URL'], correctIndex: 1, explanation: 'PHP berjalan di server dan mengirimkan HTML yang dihasilkan ke browser.' },
        ],
    },
    {
        id: 'php-2', title: 'Variabel & Echo', description: 'Menyimpan dan menampilkan data',
        slides: [
            { type: 'theory', title: 'Variabel PHP', content: 'Semua variabel PHP dimulai dengan $. Tidak perlu mendeklarasi tipe — PHP bertipe dinamis. Gunakan echo atau print untuk output. Variabel bersifat case-sensitive.', codeExample: '<?php\n$name = "Alice";\n$age = 25;\n$isStudent = true;\n\necho "Name: " . $name;\necho "Age: $age"; // double quotes allow variables\necho \'Name: $name\'; // single quotes = literal\n?>' },
            { type: 'fill-blank', instruction: 'Deklarasi variabel:', codeTemplate: '__BLANK__name = "Alice";', answer: '$', hint: 'Semua variabel PHP dimulai dengan ini' },
            { type: 'quiz', question: 'Awalan apa yang digunakan variabel PHP?', options: ['@', '#', '$', '&'], correctIndex: 2, explanation: 'Semua variabel PHP harus dimulai dengan $ (tanda dollar).' },
        ],
    },
    {
        id: 'php-3', title: 'Tipe Data', description: 'String, angka, boolean, dan lainnya',
        slides: [
            { type: 'theory', title: 'Tipe Data PHP', content: 'PHP memiliki 8 tipe: string, integer, float, boolean, array, object, null, resource. Gunakan gettype() atau var_dump() untuk memeriksa. PHP mengkonversi tipe secara otomatis saat dibutuhkan.', codeExample: '<?php\n$str = "Hello";      // string\n$int = 42;            // integer\n$float = 3.14;        // float\n$bool = true;         // boolean\n$nothing = null;      // null\n\nvar_dump($str);  // string(5) "Hello"\nvar_dump($int);  // int(42)\n?>' },
            { type: 'fill-blank', instruction: 'Periksa tipe dan nilai variabel:', codeTemplate: '__BLANK__($myVar);', answer: 'var_dump', hint: 'Menampilkan tipe dan nilai' },
            { type: 'quiz', question: 'Apa yang ditampilkan var_dump()?', options: ['Hanya nilai', 'Hanya tipe', 'Tipe dan nilai', 'Tidak ada'], correctIndex: 2, explanation: 'var_dump() menampilkan tipe data dan nilainya — sangat berguna untuk debugging.' },
        ],
    },
    {
        id: 'php-4', title: 'String & Method', description: 'Bekerja dengan teks di PHP',
        slides: [
            { type: 'theory', title: 'Fungsi String', content: 'strlen() mendapatkan panjang. strtoupper/strtolower mengubah huruf. strpos() menemukan posisi. substr() mengekstrak bagian. str_replace() mengganti teks. Gabungkan dengan titik (.).', codeExample: '<?php\n$str = "Hello World";\nstrlen($str);              // 11\nstrtoupper($str);          // "HELLO WORLD"\nstrpos($str, "World");     // 6\nsubstr($str, 0, 5);        // "Hello"\nstr_replace("World", "PHP", $str); // "Hello PHP"\n\n// Concatenation\n$full = "Hello" . " " . "World";\n?>' },
            { type: 'fill-blank', instruction: 'Dapatkan panjang string:', codeTemplate: '$len = __BLANK__($name);', answer: 'strlen', hint: 'Fungsi panjang string' },
            { type: 'quiz', question: 'Operator penggabungan string PHP?', options: ['+', '.', '&', '~'], correctIndex: 1, explanation: 'PHP menggunakan titik (.) untuk menggabungkan string, bukan + seperti JavaScript.' },
        ],
    },
    {
        id: 'php-5', title: 'Angka & Matematika', description: 'Perhitungan di PHP',
        slides: [
            { type: 'theory', title: 'Angka', content: 'PHP memiliki tipe int dan float. Fungsi matematika: abs(), round(), ceil(), floor(), rand(), max(), min(), pow(). Gunakan intval()/floatval() untuk konversi.', codeExample: '<?php\nabs(-15);         // 15\nround(4.6);       // 5\nceil(4.1);        // 5\nfloor(4.9);       // 4\nrand(1, 100);     // random 1-100\nmax(1, 5, 3);     // 5\npow(2, 3);        // 8\nintval("42px");   // 42\n?>' },
            { type: 'fill-blank', instruction: 'Hasilkan angka acak:', codeTemplate: '$num = __BLANK__(1, 100);', answer: 'rand', hint: 'Angka acak antara min dan max' },
            { type: 'quiz', question: 'Apa yang dikembalikan ceil(4.1)?', options: ['4', '5', '4.1', '4.5'], correctIndex: 1, explanation: 'ceil() selalu membulatkan KE ATAS ke bilangan bulat terdekat.' },
        ],
    },
    {
        id: 'php-6', title: 'Operator', description: 'Aritmatika dan penugasan',
        slides: [
            { type: 'theory', title: 'Operator PHP', content: 'Aritmatika: + - * / % **. Penugasan: = += -= *= /= .= (tambahkan string). Perbandingan: == === != !== < > <= >=. String: . (gabung) .= (tambahkan).', codeExample: '<?php\n$x = 10;\n$x += 5;    // 15\n$x -= 3;    // 12\n$x *= 2;    // 24\n$x %= 5;    // 4\n\n$msg = "Hello";\n$msg .= " World"; // "Hello World"\n\n10 ** 2;    // 100\n10 % 3;     // 1\n?>' },
            { type: 'fill-blank', instruction: 'Tambahkan ke string:', codeTemplate: '$msg __BLANK__ " World";', answer: '.=', hint: 'Penugasan penggabungan' },
            { type: 'quiz', question: 'Apa yang dilakukan .=?', options: ['Menugaskan', 'Membandingkan', 'Menambahkan string', 'Mengalikan'], correctIndex: 2, explanation: '.= menambahkan (menggabungkan) string ke variabel yang sudah ada.' },
        ],
    },
    {
        id: 'php-7', title: 'Perbandingan & Logika', description: 'True atau false di PHP',
        slides: [
            { type: 'theory', title: 'Operator Perbandingan', content: '== (kesamaan longgar), === (kesamaan ketat), != !==, < > <= >=. Operator spaceship <=> mengembalikan -1, 0, atau 1. Logika: && || ! and or not.', codeExample: '<?php\n5 == "5";    // true  (loose)\n5 === "5";   // false (strict)\n5 <=> 3;     // 1  (greater)\n3 <=> 5;     // -1 (less)\n5 <=> 5;     // 0  (equal)\n\ntrue && false;  // false\ntrue || false;  // true\n!true;          // false\n?>' },
            { type: 'fill-blank', instruction: 'Perbandingan ketat:', codeTemplate: 'if ($a __BLANK__ $b) { /* tipe dan nilai sama */ }', answer: '===', hint: 'Tiga sama dengan untuk ketat' },
            { type: 'quiz', question: 'Apa yang dikembalikan operator <=>?', options: ['true/false', '-1, 0, atau 1', 'String', 'Tidak ada'], correctIndex: 1, explanation: 'Operator spaceship mengembalikan -1 (kurang), 0 (sama), atau 1 (lebih besar).' },
        ],
    },
    {
        id: 'php-8', title: 'If / Else', description: 'Membuat keputusan',
        slides: [
            { type: 'theory', title: 'Kondisional', content: 'if memeriksa kondisi. else memberikan alternatif. elseif merangkai kondisi. Gunakan kurung kurawal untuk blok. PHP juga mendukung sintaks alternatif dengan titik dua.', codeExample: '<?php\n$score = 85;\n\nif ($score >= 90) {\n    echo "A";\n} elseif ($score >= 80) {\n    echo "B";\n} elseif ($score >= 70) {\n    echo "C";\n} else {\n    echo "F";\n}\n// Output: "B"\n?>' },
            { type: 'drag-drop', instruction: 'Bangun if/else:', tokens: ['if', '($age >= 18)', '{', 'echo "Adult";', '}', 'else', '{', 'echo "Minor";', '}'], correctOrder: ['if', '($age >= 18)', '{', 'echo "Adult";', '}', 'else', '{', 'echo "Minor";', '}'], hint: 'if kondisi, lalu else' },
            { type: 'quiz', question: 'PHP menggunakan kata kunci mana untuk else-if?', options: ['else if', 'elseif', 'elif', 'Baik else if maupun elseif'], correctIndex: 3, explanation: 'PHP menerima keduanya "elseif" dan "else if" — keduanya bekerja!' },
        ],
    },
    {
        id: 'php-9', title: 'Switch & Match', description: 'Kondisi berganda',
        slides: [
            { type: 'theory', title: 'Switch & Match', content: 'switch membandingkan nilai dengan case (gunakan break!). PHP 8.0+ memiliki match — perbandingan ketat, mengembalikan nilai, tidak perlu break.', codeExample: '<?php\n// Switch\nswitch ($day) {\n    case "Mon": $msg = "Start!"; break;\n    case "Fri": $msg = "TGIF!"; break;\n    default: $msg = "Regular day";\n}\n\n// Match (PHP 8.0+)\n$msg = match($day) {\n    "Mon" => "Start!",\n    "Fri" => "TGIF!",\n    default => "Regular day",\n};\n?>' },
            { type: 'quiz', question: 'Apa yang terjadi tanpa break di switch?', options: ['Error', 'Jatuh ke case berikutnya', 'Berhenti', 'Berulang'], correctIndex: 1, explanation: 'Tanpa break, eksekusi akan jatuh ke case berikutnya.' },
            { type: 'fill-blank', instruction: 'Ekspresi match PHP 8:', codeTemplate: '$result = __BLANK__($value) {\n    "a" => 1,\n    "b" => 2,\n};', answer: 'match', hint: 'Ekspresi match PHP 8.0' },
        ],
    },
    {
        id: 'php-10', title: 'Loop For & While', description: 'Mengulangi kode',
        slides: [
            { type: 'theory', title: 'Loop', content: 'for loop: inisialisasi, kondisi, increment. while: memeriksa kondisi dulu. do-while: berjalan minimal sekali. break keluar, continue melewati.', codeExample: '<?php\nfor ($i = 0; $i < 5; $i++) {\n    echo $i; // 0,1,2,3,4\n}\n\n$count = 0;\nwhile ($count < 3) {\n    echo $count; // 0,1,2\n    $count++;\n}\n\ndo {\n    // runs at least once\n} while ($condition);\n?>' },
            { type: 'fill-blank', instruction: 'Loop 10 kali:', codeTemplate: 'for ($i = 0; $i __BLANK__ 10; $i++) { ... }', answer: '<', hint: 'Loop selama i kurang dari 10' },
            { type: 'quiz', question: 'Kapan do-while memeriksa kondisinya?', options: ['Sebelum iterasi pertama', 'Setelah setiap iterasi', 'Tidak pernah', 'Hanya sekali'], correctIndex: 1, explanation: 'do-while memeriksa kondisi SETELAH setiap iterasi, sehingga selalu berjalan minimal sekali.' },
        ],
    },
    {
        id: 'php-11', title: 'Foreach Loop', description: 'Mengiterasi array cara PHP',
        slides: [
            { type: 'theory', title: 'foreach', content: 'foreach adalah cara utama PHP untuk mengiterasi array. Bekerja dengan array terindeks dan asosiatif. Gunakan => untuk mengakses key dan value.', codeExample: '<?php\n$fruits = ["apple", "banana", "cherry"];\n\nforeach ($fruits as $fruit) {\n    echo $fruit;\n}\n\n$user = ["name" => "Alice", "age" => 25];\n\nforeach ($user as $key => $value) {\n    echo "$key: $value";\n}\n?>' },
            { type: 'fill-blank', instruction: 'Loop melalui array:', codeTemplate: '__BLANK__ ($items as $item) { echo $item; }', answer: 'foreach', hint: 'Kata kunci iterasi array PHP' },
            { type: 'quiz', question: 'Bagaimana mendapat key dan value di foreach?', options: ['foreach($arr as $k, $v)', 'foreach($arr as $k => $v)', 'foreach($arr as [$k, $v])', 'foreach($arr key $k value $v)'], correctIndex: 1, explanation: 'Gunakan operator =>: foreach($arr as $key => $value).' },
        ],
    },
    {
        id: 'php-12', title: 'Fungsi', description: 'Blok kode yang dapat digunakan ulang',
        slides: [
            { type: 'theory', title: 'Fungsi PHP', content: 'Deklarasi dengan kata kunci function. Parameter dengan $. Kembalikan nilai dengan return. PHP 7+ mendukung deklarasi tipe untuk parameter dan return.', codeExample: '<?php\nfunction greet(string $name): string {\n    return "Hello, $name!";\n}\n\necho greet("Alice"); // "Hello, Alice!"\n\n// Default parameters\nfunction add(int $a, int $b = 0): int {\n    return $a + $b;\n}\nadd(5);    // 5\nadd(5, 3); // 8\n?>' },
            { type: 'drag-drop', instruction: 'Bangun fungsi PHP:', tokens: ['function', 'add', '($a, $b)', '{', 'return $a + $b;', '}'], correctOrder: ['function', 'add', '($a, $b)', '{', 'return $a + $b;', '}'], hint: 'kata kunci function, nama, parameter, body' },
            { type: 'quiz', question: 'Apa yang dikembalikan fungsi tanpa return?', options: ['0', 'false', 'null', 'string kosong'], correctIndex: 2, explanation: 'Fungsi PHP tanpa return secara implisit mengembalikan null.' },
        ],
    },
    // ===== MENENGAH (13-25) =====
    {
        id: 'php-13', title: 'Parameter Fungsi', description: 'Penanganan parameter lanjutan',
        slides: [
            { type: 'theory', title: 'Parameter', content: 'Nilai default, type hint, tipe nullable (?Type), operator splat (...$args) untuk argumen variabel. Kirim by reference dengan &.', codeExample: '<?php\nfunction greet(string $name = "World"): string {\n    return "Hello, $name!";\n}\n\nfunction sum(int ...$nums): int {\n    return array_sum($nums);\n}\nsum(1, 2, 3, 4); // 10\n\n// Pass by reference\nfunction double(int &$n): void {\n    $n *= 2;\n}\n$x = 5;\ndouble($x); // $x is now 10\n?>' },
            { type: 'fill-blank', instruction: 'Terima argumen variabel:', codeTemplate: 'function sum(__BLANK__$nums) { ... }', answer: '...', hint: 'Operator splat mengumpulkan argumen' },
            { type: 'quiz', question: 'Apa arti & sebelum parameter?', options: ['Wajib', 'Opsional', 'Pass by reference', 'Konstan'], correctIndex: 2, explanation: '& mengirim by reference — perubahan di dalam fungsi mempengaruhi variabel asli.' },
        ],
    },
    {
        id: 'php-14', title: 'Array Terindeks', description: 'Daftar data terurut',
        slides: [
            { type: 'theory', title: 'Array Terindeks', content: 'Array adalah daftar terurut. Buat dengan [] atau array(). Berbasis indeks 0. count() untuk panjang. array_push/pop untuk akhir, array_shift/unshift untuk awal.', codeExample: '<?php\n$fruits = ["apple", "banana", "cherry"];\n$fruits[0];           // "apple"\ncount($fruits);       // 3\n\narray_push($fruits, "date");\narray_pop($fruits);\narray_unshift($fruits, "avocado");\n\nin_array("banana", $fruits); // true\narray_search("cherry", $fruits); // 2\n?>' },
            { type: 'fill-blank', instruction: 'Tambah ke akhir array:', codeTemplate: '__BLANK__($fruits, "mango");', answer: 'array_push', hint: 'Push ke akhir array' },
            { type: 'quiz', question: 'Indeks pertama array PHP?', options: ['1', '0', '-1', 'first'], correctIndex: 1, explanation: 'Array terindeks PHP dimulai dari 0, seperti kebanyakan bahasa pemrograman.' },
        ],
    },
    {
        id: 'php-15', title: 'Array Asosiatif', description: 'Pasangan key-value',
        slides: [
            { type: 'theory', title: 'Array Asosiatif', content: 'Gunakan key string dengan operator =>. Akses berdasarkan key. Cek keberadaan dengan isset() atau array_key_exists(). Unset untuk menghapus.', codeExample: '<?php\n$user = [\n    "name" => "Alice",\n    "age" => 25,\n    "email" => "alice@example.com",\n];\n\necho $user["name"];     // "Alice"\n$user["role"] = "admin"; // add\nunset($user["email"]);   // remove\n\nisset($user["name"]);            // true\narray_key_exists("age", $user);  // true\n?>' },
            { type: 'fill-blank', instruction: 'Buat pasangan key-value:', codeTemplate: '$data = ["name" __BLANK__ "Alice"];', answer: '=>', hint: 'Panah menunjuk key ke value' },
            { type: 'quiz', question: 'Bagaimana memeriksa apakah key ada?', options: ['has_key()', 'key_exists()', 'isset() atau array_key_exists()', 'in_array()'], correctIndex: 2, explanation: 'Gunakan isset($arr["key"]) atau array_key_exists("key", $arr).' },
        ],
    },
    {
        id: 'php-16', title: 'Fungsi Array', description: 'Sorting, filtering, mapping',
        slides: [
            { type: 'theory', title: 'Fungsi Array', content: 'sort/rsort untuk terindeks, asort/arsort mempertahankan key, ksort berdasarkan key. array_map mentransformasi, array_filter memilih, array_merge menggabungkan.', codeExample: '<?php\n$nums = [3, 1, 4, 1, 5];\nsort($nums);   // [1, 1, 3, 4, 5]\n\n$doubled = array_map(fn($n) => $n * 2, $nums);\n$even = array_filter($nums, fn($n) => $n % 2 === 0);\n$merged = array_merge($arr1, $arr2);\n\n$sum = array_sum($nums);\n$unique = array_unique([1,1,2,3,3]); // [1,2,3]\n?>' },
            { type: 'fill-blank', instruction: 'Transformasi elemen array:', codeTemplate: '$doubled = __BLANK__(fn($n) => $n * 2, $nums);', answer: 'array_map', hint: 'Memetakan fungsi ke array' },
            { type: 'quiz', question: 'Apa yang dilakukan array_filter?', options: ['Mengurutkan array', 'Menghapus duplikat', 'Menyimpan elemen yang lolos tes', 'Menggabungkan array'], correctIndex: 2, explanation: 'array_filter menyimpan hanya elemen yang callback-nya mengembalikan true.' },
        ],
    },
    {
        id: 'php-17', title: 'Fungsi String Lanjutan', description: 'Pemrosesan teks tingkat lanjut',
        slides: [
            { type: 'theory', title: 'Fungsi String Lanjutan', content: 'explode memisahkan, implode menggabungkan. trim menghapus spasi. sprintf memformat. str_contains/starts_with/ends_with (PHP 8.0+). nl2br untuk newline ke <br>.', codeExample: '<?php\n$csv = "a,b,c";\n$parts = explode(",", $csv);    // ["a","b","c"]\n$joined = implode("-", $parts);  // "a-b-c"\n\ntrim("  hello  ");               // "hello"\nsprintf("Age: %d", 25);          // "Age: 25"\n\n// PHP 8.0+\nstr_contains("hello", "ell");    // true\nstr_starts_with("hello", "he");  // true\n?>' },
            { type: 'fill-blank', instruction: 'Pisahkan string berdasarkan koma:', codeTemplate: '$parts = __BLANK__(",", $csv);', answer: 'explode', hint: 'Memecah string menjadi array' },
            { type: 'quiz', question: 'Apa yang dilakukan implode?', options: ['Memisahkan string', 'Menggabungkan array menjadi string', 'Menghapus spasi', 'Mengganti teks'], correctIndex: 1, explanation: 'implode menggabungkan elemen array menjadi satu string dengan separator.' },
        ],
    },
    {
        id: 'php-18', title: 'Arrow Function & Closure', description: 'Fungsi anonim di PHP',
        slides: [
            { type: 'theory', title: 'Fungsi Anonim', content: 'Closure adalah fungsi anonim yang disimpan di variabel. Gunakan "use" untuk mengakses variabel luar. PHP 7.4+ arrow function (fn =>) otomatis menangkap variabel luar.', codeExample: '<?php\n// Closure\n$greet = function($name) {\n    return "Hello, $name!";\n};\necho $greet("Alice");\n\n// Access outer variable\n$prefix = "Hi";\n$fn = function($name) use ($prefix) {\n    return "$prefix, $name!";\n};\n\n// Arrow function (PHP 7.4+)\n$double = fn($n) => $n * 2;\n?>' },
            { type: 'fill-blank', instruction: 'Akses variabel luar:', codeTemplate: '$fn = function() __BLANK__ ($count) { ... };', answer: 'use', hint: 'Kata kunci untuk mengimpor variabel luar' },
            { type: 'quiz', question: 'Apa yang dibuat fn() =>?', options: ['Sebuah class', 'Arrow function', 'Variabel', 'Loop'], correctIndex: 1, explanation: 'fn() => adalah sintaks arrow function PHP 7.4+ — fungsi anonim yang ringkas.' },
        ],
    },
    {
        id: 'php-19', title: 'Konstanta & Enum', description: 'Nilai yang tidak berubah',
        slides: [
            { type: 'theory', title: 'Konstanta', content: 'define() atau const membuat konstanta. Konvensi: HURUF_BESAR. PHP 8.1+ memiliki enum — enumerasi yang type-safe. Magic constant: __FILE__, __LINE__, __DIR__.', codeExample: '<?php\ndefine("MAX_SIZE", 100);\nconst PI = 3.14;\n\necho MAX_SIZE; // 100\necho __FILE__; // current file path\necho __DIR__;  // current directory\n\n// Enum (PHP 8.1+)\nenum Color {\n    case Red;\n    case Green;\n    case Blue;\n}\n$c = Color::Red;\n?>' },
            { type: 'fill-blank', instruction: 'Definisikan konstanta:', codeTemplate: '__BLANK__("MAX_SIZE", 100);', answer: 'define', hint: 'Fungsi untuk membuat konstanta' },
            { type: 'quiz', question: 'Bisakah konstanta diubah setelah didefinisikan?', options: ['Ya', 'Tidak', 'Hanya dengan define', 'Hanya di dalam fungsi'], correctIndex: 1, explanation: 'Konstanta tidak bisa diubah atau dihapus setelah didefinisikan — bersifat immutable.' },
        ],
    },
    {
        id: 'php-20', title: 'Superglobal $_GET', description: 'Menerima parameter URL',
        slides: [
            { type: 'theory', title: 'Superglobal $_GET', content: '$_GET menerima data dari query string URL (?key=value). Selalu validasi dan sanitasi input pengguna! Gunakan htmlspecialchars() untuk mencegah XSS.', codeExample: '<?php\n// URL: page.php?name=Alice&age=25\n\n$name = $_GET["name"] ?? "Guest";\n$age = $_GET["age"] ?? 0;\n\n// Always sanitize output!\necho htmlspecialchars($name);\n\n// Check if parameter exists\nif (isset($_GET["search"])) {\n    $query = htmlspecialchars($_GET["search"]);\n    // search logic...\n}\n?>' },
            { type: 'fill-blank', instruction: 'Ambil parameter URL dengan aman:', codeTemplate: '$name = __BLANK__["name"] ?? "Guest";', answer: '$_GET', hint: 'Superglobal untuk parameter URL' },
            { type: 'quiz', question: 'Dari mana data $_GET berasal?', options: ['Form POST', 'Query string URL', 'Cookie', 'Session'], correctIndex: 1, explanation: '$_GET menerima data dari query string URL (?key=value&key2=value2).' },
        ],
    },
    {
        id: 'php-21', title: 'Form & $_POST', description: 'Menangani pengiriman form',
        slides: [
            { type: 'theory', title: 'Superglobal $_POST', content: '$_POST menerima data dari pengiriman form dengan method="POST". Lebih aman dari GET untuk data sensitif. Selalu validasi dan sanitasi!', codeExample: '<?php\n// HTML: <form method="POST" action="process.php">\nif ($_SERVER["REQUEST_METHOD"] === "POST") {\n    $name = trim($_POST["name"] ?? "");\n    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);\n    \n    if (empty($name)) {\n        echo "Name is required!";\n    } elseif (!$email) {\n        echo "Invalid email!";\n    } else {\n        echo "Welcome, " . htmlspecialchars($name);\n    }\n}\n?>' },
            { type: 'fill-blank', instruction: 'Ambil data form:', codeTemplate: '$name = __BLANK__["name"];', answer: '$_POST', hint: 'Superglobal untuk data form POST' },
            { type: 'quiz', question: 'Mengapa gunakan POST daripada GET untuk password?', options: ['POST lebih cepat', 'Data POST tidak ada di URL', 'POST mengenkripsi data', 'Tidak ada perbedaan'], correctIndex: 1, explanation: 'Data POST ada di body request, tidak terlihat di URL seperti parameter GET.' },
        ],
    },
    {
        id: 'php-22', title: 'Validasi Form', description: 'Memastikan kualitas data',
        slides: [
            { type: 'theory', title: 'Validasi & Sanitasi', content: 'filter_var memvalidasi (email, URL, int). empty() memeriksa kosong. is_numeric memeriksa angka. htmlspecialchars mencegah XSS. preg_match untuk pola.', codeExample: '<?php\n$email = filter_var($input, FILTER_VALIDATE_EMAIL);\n$url = filter_var($input, FILTER_VALIDATE_URL);\n$int = filter_var($input, FILTER_VALIDATE_INT);\n\n// Sanitize\n$clean = htmlspecialchars($input, ENT_QUOTES);\n$safeInt = filter_var($input, FILTER_SANITIZE_NUMBER_INT);\n\n// Pattern matching\nif (preg_match("/^[a-zA-Z ]+$/", $name)) {\n    echo "Valid name";\n}\n?>' },
            { type: 'fill-blank', instruction: 'Validasi email:', codeTemplate: '$valid = filter_var($email, __BLANK__);', answer: 'FILTER_VALIDATE_EMAIL', hint: 'Konstanta filter validasi email' },
            { type: 'quiz', question: 'Apa yang dicegah htmlspecialchars?', options: ['SQL injection', 'Serangan XSS', 'Serangan CSRF', 'Brute force'], correctIndex: 1, explanation: 'htmlspecialchars mengubah karakter khusus menjadi entitas HTML, mencegah XSS.' },
        ],
    },
    {
        id: 'php-23', title: 'Membaca File', description: 'Membaca file dari disk',
        slides: [
            { type: 'theory', title: 'Membaca File', content: 'file_get_contents membaca seluruh file. file() membaca ke array per baris. fopen/fread/fclose untuk pembacaan terkontrol. file_exists memeriksa keberadaan file.', codeExample: '<?php\n// Read entire file\n$content = file_get_contents("data.txt");\n\n// Read as array of lines\n$lines = file("data.txt", FILE_IGNORE_NEW_LINES);\n\n// Manual reading\n$f = fopen("data.txt", "r");\nwhile (!feof($f)) {\n    $line = fgets($f);\n    echo $line;\n}\nfclose($f);\n\nfile_exists("data.txt"); // true/false\n?>' },
            { type: 'fill-blank', instruction: 'Baca seluruh file:', codeTemplate: '$content = __BLANK__("data.txt");', answer: 'file_get_contents', hint: 'Membaca file menjadi string' },
            { type: 'quiz', question: 'Apa yang diperiksa feof()?', options: ['File ada', 'File kosong', 'Akhir file tercapai', 'File terbuka'], correctIndex: 2, explanation: 'feof() mengembalikan true saat pointer file sudah mencapai akhir file.' },
        ],
    },
    {
        id: 'php-24', title: 'Menulis File', description: 'Membuat dan menulis file',
        slides: [
            { type: 'theory', title: 'Menulis File', content: 'file_put_contents menulis ke file (membuat jika belum ada). Gunakan flag FILE_APPEND untuk menambahkan. fopen dengan mode "w" (tulis), "a" (tambahkan).', codeExample: '<?php\n// Write (overwrites)\nfile_put_contents("log.txt", "Hello World!");\n\n// Append\nfile_put_contents("log.txt", "\\nNew line", FILE_APPEND);\n\n// Manual writing\n$f = fopen("output.txt", "w");\nfwrite($f, "Line 1\\n");\nfwrite($f, "Line 2\\n");\nfclose($f);\n\n// Delete file\nunlink("temp.txt");\n?>' },
            { type: 'fill-blank', instruction: 'Tulis ke file:', codeTemplate: '__BLANK__("log.txt", $data);', answer: 'file_put_contents', hint: 'Menulis string ke file' },
            { type: 'quiz', question: 'Bagaimana menambahkan tanpa menimpa?', options: ['Gunakan mode "w"', 'Gunakan flag FILE_APPEND', 'Gunakan fread', 'Tidak bisa menambahkan'], correctIndex: 1, explanation: 'file_put_contents dengan FILE_APPEND menambahkan ke konten yang ada tanpa menimpa.' },
        ],
    },
    {
        id: 'php-25', title: 'Session', description: 'Mengingat pengguna antar halaman',
        slides: [
            { type: 'theory', title: 'Session PHP', content: 'Session menyimpan data di server, diidentifikasi oleh cookie. session_start() memulai session. $_SESSION menyimpan/mengambil data. session_destroy() mengakhiri.', codeExample: '<?php\nsession_start(); // MUST be first!\n\n// Store data\n$_SESSION["user"] = "Alice";\n$_SESSION["role"] = "admin";\n\n// Read data (on any page)\necho $_SESSION["user"]; // "Alice"\n\n// Check if set\nif (isset($_SESSION["user"])) {\n    echo "Logged in as " . $_SESSION["user"];\n}\n\n// Logout\nsession_destroy();\n?>' },
            { type: 'fill-blank', instruction: 'Mulai session:', codeTemplate: '__BLANK__(); // must be called first', answer: 'session_start', hint: 'Memulai atau melanjutkan session' },
            { type: 'quiz', question: 'Di mana data session disimpan?', options: ['Cookie browser', 'Di server', 'Di URL', 'Di localStorage'], correctIndex: 1, explanation: 'Data session disimpan di server. Hanya ID session yang ada di cookie klien.' },
        ],
    },
    {
        id: 'php-26', title: 'Cookie', description: 'Data persisten di sisi klien',
        slides: [
            { type: 'theory', title: 'Cookie PHP', content: 'setcookie() membuat cookie (harus sebelum output apapun). $_COOKIE membacanya. Atur kedaluwarsa dengan time(). Cookie bertahan antar sesi browser.', codeExample: '<?php\n// Set cookie (expires in 30 days)\nsetcookie("theme", "dark", time() + (86400 * 30), "/");\n\n// Read cookie\nif (isset($_COOKIE["theme"])) {\n    echo "Theme: " . $_COOKIE["theme"];\n}\n\n// Delete cookie (set expiry in past)\nsetcookie("theme", "", time() - 3600, "/");\n?>' },
            { type: 'fill-blank', instruction: 'Buat cookie:', codeTemplate: '__BLANK__("lang", "en", time() + 86400);', answer: 'setcookie', hint: 'Fungsi untuk membuat cookie' },
            { type: 'quiz', question: 'Di mana cookie disimpan?', options: ['Di server', 'Di browser', 'Di database', 'Di URL'], correctIndex: 1, explanation: 'Cookie disimpan di browser pengguna dan dikirim dengan setiap request.' },
        ],
    },
    {
        id: 'php-27', title: 'Tanggal & Waktu', description: 'Bekerja dengan tanggal',
        slides: [
            { type: 'theory', title: 'Fungsi Tanggal', content: 'date() memformat tanggal/waktu saat ini. time() mengembalikan Unix timestamp. strtotime() mem-parse string tanggal. Class DateTime untuk operasi lanjutan.', codeExample: '<?php\necho date("Y-m-d");       // "2024-01-15"\necho date("H:i:s");       // "14:30:00"\necho date("l, F j, Y");   // "Monday, January 15, 2024"\n\necho time();               // Unix timestamp\n\n$ts = strtotime("+1 week");\necho date("Y-m-d", $ts);\n\n$dt = new DateTime();\n$dt->modify("+3 days");\necho $dt->format("Y-m-d");\n?>' },
            { type: 'fill-blank', instruction: 'Dapatkan tanggal saat ini:', codeTemplate: 'echo __BLANK__("Y-m-d");', answer: 'date', hint: 'Fungsi format tanggal PHP' },
            { type: 'quiz', question: 'Apa yang dikembalikan time()?', options: ['String tanggal saat ini', 'Unix timestamp (detik)', 'Milidetik', 'Objek tanggal'], correctIndex: 1, explanation: 'time() mengembalikan Unix timestamp saat ini — detik sejak 1 Januari 1970.' },
        ],
    },
    {
        id: 'php-28', title: 'Regular Expression', description: 'Pencocokan pola',
        slides: [
            { type: 'theory', title: 'Regex di PHP', content: 'preg_match memeriksa kecocokan. preg_match_all menemukan semua kecocokan. preg_replace mengganti kecocokan. Pola ditulis di antara delimiter (biasanya /).', codeExample: '<?php\n// Check if matches\nif (preg_match("/^[0-9]+$/", $input)) {\n    echo "Only numbers!";\n}\n\n// Find all matches\npreg_match_all("/\\d+/", "I have 3 cats and 2 dogs", $matches);\n// $matches[0] = ["3", "2"]\n\n// Replace\n$clean = preg_replace("/[^a-zA-Z0-9]/", "", $input);\n\n// Common: email pattern\n$pattern = "/^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$/";\n?>' },
            { type: 'fill-blank', instruction: 'Periksa apakah string cocok pola:', codeTemplate: 'if (__BLANK__("/^[a-z]+$/", $input)) { ... }', answer: 'preg_match', hint: 'Fungsi pencocokan pola' },
            { type: 'quiz', question: 'Apa yang dicocokkan \\d+?', options: ['Satu digit', 'Satu atau lebih digit', 'Hanya huruf', 'Spasi'], correctIndex: 1, explanation: '\\d mencocokkan digit, + berarti satu atau lebih. Jadi \\d+ mencocokkan satu atau lebih digit.' },
        ],
    },
    // ===== OOP (29-36) =====
    {
        id: 'php-29', title: 'Class & Objek', description: 'PHP berorientasi objek',
        slides: [
            { type: 'theory', title: 'Dasar OOP', content: 'Class adalah cetak biru. Properti menyimpan data, method mendefinisikan perilaku. Gunakan "new" untuk membuat instance. $this merujuk ke objek saat ini.', codeExample: '<?php\nclass User {\n    public string $name;\n    public int $age;\n    \n    public function __construct(string $name, int $age) {\n        $this->name = $name;\n        $this->age = $age;\n    }\n    \n    public function greet(): string {\n        return "Hi, I\'m {$this->name}!";\n    }\n}\n\n$user = new User("Alice", 25);\necho $user->greet(); // "Hi, I\'m Alice!"\n?>' },
            { type: 'fill-blank', instruction: 'Buat objek:', codeTemplate: '$user = __BLANK__ User("Alice", 25);', answer: 'new', hint: 'Kata kunci untuk membuat instance' },
            { type: 'quiz', question: 'Apa yang dirujuk $this?', options: ['Class-nya', 'Objek saat ini', 'Class parent', 'Variabel static'], correctIndex: 1, explanation: '$this merujuk ke instance saat ini dari class tersebut.' },
        ],
    },
    {
        id: 'php-30', title: 'Modifier Akses', description: 'Public, private, protected',
        slides: [
            { type: 'theory', title: 'Visibilitas', content: 'public: dapat diakses dari mana saja. private: hanya di dalam class. protected: di dalam class dan class turunan. Gunakan private untuk enkapsulasi — akses melalui method.', codeExample: '<?php\nclass BankAccount {\n    private float $balance = 0;\n    \n    public function deposit(float $amount): void {\n        if ($amount > 0) {\n            $this->balance += $amount;\n        }\n    }\n    \n    public function getBalance(): float {\n        return $this->balance;\n    }\n}\n\n$acc = new BankAccount();\n$acc->deposit(100);\necho $acc->getBalance(); // 100\n// $acc->balance; // ERROR! Private!\n?>' },
            { type: 'quiz', question: 'Modifier mana yang menyembunyikan properti dari luar?', options: ['public', 'private', 'protected', 'static'], correctIndex: 1, explanation: 'Properti/method private hanya bisa diakses dari dalam class itu sendiri.' },
            { type: 'fill-blank', instruction: 'Sembunyikan properti:', codeTemplate: '__BLANK__ float $balance = 0;', answer: 'private', hint: 'Membatasi akses hanya ke class' },
        ],
    },
    {
        id: 'php-31', title: 'Constructor & Promotion', description: 'Menginisialisasi objek',
        slides: [
            { type: 'theory', title: 'Constructor', content: '__construct berjalan saat new. PHP 8.0+ constructor promotion: deklarasi dan inisialisasi properti di parameter constructor. __destruct berjalan saat cleanup.', codeExample: '<?php\n// Traditional\nclass User {\n    public string $name;\n    public function __construct(string $name) {\n        $this->name = $name;\n    }\n}\n\n// PHP 8.0 Constructor Promotion\nclass User {\n    public function __construct(\n        public string $name,\n        public int $age = 0,\n        private string $role = "user",\n    ) {}\n}\n$u = new User("Alice", 25);\n?>' },
            { type: 'fill-blank', instruction: 'Nama method constructor:', codeTemplate: 'public function __BLANK__($name) { ... }', answer: '__construct', hint: 'Magic method PHP untuk inisialisasi' },
            { type: 'quiz', question: 'Apa itu constructor promotion (PHP 8)?', options: ['Constructor lebih cepat', 'Deklarasi+init properti di parameter constructor', 'Auto-generate constructor', 'Multiple constructor'], correctIndex: 1, explanation: 'Constructor promotion memungkinkan deklarasi dan inisialisasi properti langsung di daftar parameter constructor.' },
        ],
    },
    {
        id: 'php-32', title: 'Pewarisan', description: 'Memperluas class',
        slides: [
            { type: 'theory', title: 'Pewarisan Class', content: 'extends membuat class turunan. Constructor parent dengan parent::__construct(). Override method di class turunan. Gunakan final untuk mencegah override.', codeExample: '<?php\nclass Animal {\n    public function __construct(\n        protected string $name\n    ) {}\n    \n    public function speak(): string {\n        return "{$this->name} makes a sound";\n    }\n}\n\nclass Dog extends Animal {\n    public function __construct(string $name, private string $breed) {\n        parent::__construct($name);\n    }\n    \n    public function speak(): string {\n        return "{$this->name} barks!";\n    }\n}\n?>' },
            { type: 'fill-blank', instruction: 'Panggil constructor parent:', codeTemplate: '__BLANK__::__construct($name);', answer: 'parent', hint: 'Merujuk ke class parent' },
            { type: 'quiz', question: 'Apa yang dilakukan extends?', options: ['Menyalin class', 'Membuat pewarisan', 'Menggabungkan class', 'Menghapus class'], correctIndex: 1, explanation: 'extends membuat class turunan yang mewarisi properti dan method dari parent.' },
        ],
    },
    {
        id: 'php-33', title: 'Abstract Class', description: 'Memaksakan struktur',
        slides: [
            { type: 'theory', title: 'Abstract Class', content: 'Abstract class tidak bisa diinstansiasi langsung. Method abstract harus diimplementasi oleh class turunan. Campuran method yang sudah diimplementasi dan abstract.', codeExample: '<?php\nabstract class Shape {\n    abstract public function area(): float;\n    \n    public function describe(): string {\n        return "Area: " . $this->area();\n    }\n}\n\nclass Circle extends Shape {\n    public function __construct(private float $radius) {}\n    \n    public function area(): float {\n        return M_PI * $this->radius ** 2;\n    }\n}\n// new Shape(); // ERROR! Cannot instantiate\n$c = new Circle(5);\n?>' },
            { type: 'fill-blank', instruction: 'Definisikan abstract class:', codeTemplate: '__BLANK__ class Shape { ... }', answer: 'abstract', hint: 'Kata kunci untuk class yang tidak bisa diinstansiasi' },
            { type: 'quiz', question: 'Bisakah membuat instance abstract class?', options: ['Ya', 'Tidak', 'Hanya dengan new', 'Hanya di class turunan'], correctIndex: 1, explanation: 'Abstract class tidak bisa diinstansiasi — mereka adalah cetak biru untuk class turunan.' },
        ],
    },
    {
        id: 'php-34', title: 'Interface', description: 'Kontrak untuk class',
        slides: [
            { type: 'theory', title: 'Interface', content: 'Interface mendefinisikan tanda tangan method yang HARUS diimplementasi class. Satu class bisa mengimplementasi banyak interface. Gunakan untuk polimorfisme dan keamanan tipe.', codeExample: '<?php\ninterface Printable {\n    public function toString(): string;\n}\n\ninterface Loggable {\n    public function log(): void;\n}\n\nclass User implements Printable, Loggable {\n    public function __construct(private string $name) {}\n    \n    public function toString(): string {\n        return "User: {$this->name}";\n    }\n    \n    public function log(): void {\n        error_log($this->toString());\n    }\n}\n?>' },
            { type: 'fill-blank', instruction: 'Implementasi interface:', codeTemplate: 'class User __BLANK__ Printable { ... }', answer: 'implements', hint: 'Kata kunci untuk mengadopsi interface' },
            { type: 'quiz', question: 'Bisakah class mengimplementasi banyak interface?', options: ['Tidak, hanya satu', 'Ya, dengan koma', 'Hanya dengan extends', 'Tidak ada interface di PHP'], correctIndex: 1, explanation: 'Satu class bisa mengimplementasi banyak interface: class X implements A, B, C { }.' },
        ],
    },
    {
        id: 'php-35', title: 'Method & Properti Static', description: 'Fitur tingkat class',
        slides: [
            { type: 'theory', title: 'Anggota Static', content: 'Anggota static milik class, bukan instance. Akses dengan ClassName::method(). self:: di dalam class. Tidak ada $this di method static.', codeExample: '<?php\nclass Database {\n    private static ?Database $instance = null;\n    \n    public static function getInstance(): self {\n        if (self::$instance === null) {\n            self::$instance = new self();\n        }\n        return self::$instance;\n    }\n    \n    public static function getVersion(): string {\n        return "1.0";\n    }\n}\n\nDatabase::getVersion();     // "1.0"\n$db = Database::getInstance();\n?>' },
            { type: 'fill-blank', instruction: 'Panggil method static:', codeTemplate: '$version = Database__BLANK__getVersion();', answer: '::', hint: 'Titik dua ganda untuk akses static' },
            { type: 'quiz', question: 'Bisakah method static menggunakan $this?', options: ['Ya', 'Tidak', 'Hanya di constructor', 'Hanya dengan self'], correctIndex: 1, explanation: 'Method static milik class, bukan instance, jadi $this tidak tersedia.' },
        ],
    },
    {
        id: 'php-36', title: 'PDO & Koneksi Database', description: 'Menghubungkan ke MySQL',
        slides: [
            { type: 'theory', title: 'Dasar PDO', content: 'PDO (PHP Data Objects) menghubungkan ke database. DSN menentukan koneksi. Atur mode error ke exception. Gunakan try/catch untuk error koneksi.', codeExample: '<?php\ntry {\n    $pdo = new PDO(\n        "mysql:host=localhost;dbname=myapp;charset=utf8mb4",\n        "username",\n        "password",\n        [\n            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n        ]\n    );\n    echo "Connected!";\n} catch (PDOException $e) {\n    die("Connection failed: " . $e->getMessage());\n}\n?>' },
            { type: 'fill-blank', instruction: 'Buat koneksi PDO:', codeTemplate: '$pdo = new __BLANK__($dsn, $user, $pass);', answer: 'PDO', hint: 'Class PHP Data Objects' },
            { type: 'quiz', question: 'Apa kepanjangan PDO?', options: ['PHP Database Object', 'PHP Data Objects', 'PHP Data Operations', 'PHP Direct Output'], correctIndex: 1, explanation: 'PDO = PHP Data Objects, lapisan abstraksi akses database.' },
        ],
    },
    {
        id: 'php-37', title: 'Operasi CRUD', description: 'Create, Read, Update, Delete',
        slides: [
            { type: 'theory', title: 'CRUD Database', content: 'SELECT membaca, INSERT membuat, UPDATE mengubah, DELETE menghapus. Selalu gunakan prepared statement dengan placeholder ? atau :nama untuk mencegah SQL injection.', codeExample: '<?php\n// Read\n$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");\n$stmt->execute([$id]);\n$user = $stmt->fetch();\n\n// Create\n$stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");\n$stmt->execute([$name, $email]);\n\n// Update\n$stmt = $pdo->prepare("UPDATE users SET name = ? WHERE id = ?");\n$stmt->execute([$name, $id]);\n\n// Delete\n$stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");\n$stmt->execute([$id]);\n?>' },
            { type: 'fill-blank', instruction: 'Siapkan query SQL:', codeTemplate: '$stmt = $pdo->__BLANK__("SELECT * FROM users");', answer: 'prepare', hint: 'Menyiapkan statement untuk dieksekusi' },
            { type: 'quiz', question: 'Mengapa gunakan prepared statement?', options: ['Query lebih cepat', 'Mencegah SQL injection', 'Sintaks lebih baik', 'Diwajibkan PHP'], correctIndex: 1, explanation: 'Prepared statement memisahkan SQL dari data, mencegah serangan SQL injection.' },
        ],
    },
    {
        id: 'php-38', title: 'Prepared Statement & Keamanan', description: 'Query database yang aman',
        slides: [
            { type: 'theory', title: 'Pencegahan SQL Injection', content: 'JANGAN PERNAH masukkan input pengguna langsung ke SQL! Gunakan placeholder ? atau named :params. PDO meng-escape nilai secara otomatis. Gunakan transaksi untuk operasi multi-langkah.', codeExample: '<?php\n// ❌ BAHAYA — SQL injection!\n$pdo->query("SELECT * FROM users WHERE name = \'$name\'");\n\n// ✅ AMAN — prepared statement\n$stmt = $pdo->prepare("SELECT * FROM users WHERE name = :name AND age > :age");\n$stmt->execute(["name" => $name, "age" => $minAge]);\n$users = $stmt->fetchAll();\n\n// Transactions\n$pdo->beginTransaction();\ntry {\n    // ... multiple queries ...\n    $pdo->commit();\n} catch (Exception $e) {\n    $pdo->rollBack();\n}\n?>' },
            { type: 'quiz', question: 'Mana yang rentan SQL injection?', options: ['$pdo->prepare("SELECT * WHERE id = ?")', 'Binding parameter dengan execute()', '$pdo->query("SELECT * WHERE id = $id")', 'Menggunakan named placeholder'], correctIndex: 2, explanation: 'Memasukkan variabel langsung di string SQL memungkinkan serangan SQL injection.' },
            { type: 'fill-blank', instruction: 'Eksekusi dengan named params:', codeTemplate: '$stmt->execute(["name" __BLANK__ $name]);', answer: '=>', hint: 'Pasangan key-value untuk named parameter' },
        ],
    },
    {
        id: 'php-39', title: 'JSON & API', description: 'Bekerja dengan data web',
        slides: [
            { type: 'theory', title: 'JSON di PHP', content: 'json_encode mengkonversi PHP ke JSON. json_decode mengkonversi JSON ke PHP. Atur header Content-Type untuk respons API. file_get_contents atau cURL untuk request HTTP.', codeExample: '<?php\n// Encode PHP to JSON\n$user = ["name" => "Alice", "age" => 25];\necho json_encode($user);\n// {"name":"Alice","age":25}\n\n// Decode JSON to PHP\n$json = \'{"name":"Bob"}\';\n$data = json_decode($json, true); // true = assoc array\necho $data["name"]; // "Bob"\n\n// API response\nheader("Content-Type: application/json");\necho json_encode(["status" => "ok", "data" => $result]);\n?>' },
            { type: 'fill-blank', instruction: 'Konversi PHP ke JSON:', codeTemplate: 'echo __BLANK__($data);', answer: 'json_encode', hint: 'Meng-encode nilai PHP sebagai JSON' },
            { type: 'quiz', question: 'Apa yang dikembalikan json_decode($str, true)?', options: ['Objek', 'Array asosiatif', 'String', 'null'], correctIndex: 1, explanation: 'Parameter kedua true membuat json_decode mengembalikan array asosiatif bukan objek.' },
        ],
    },
    {
        id: 'php-40', title: 'Penanganan Error', description: 'Menangani kegagalan dengan baik',
        slides: [
            { type: 'theory', title: 'Try / Catch / Finally', content: 'try/catch menangani exception. throw membuat exception kustom. finally selalu berjalan. Buat class Exception kustom untuk error spesifik.', codeExample: '<?php\ntry {\n    $data = json_decode($input, true, 512, JSON_THROW_ON_ERROR);\n    if (!isset($data["name"])) {\n        throw new InvalidArgumentException("Name required");\n    }\n} catch (JsonException $e) {\n    echo "Invalid JSON: " . $e->getMessage();\n} catch (InvalidArgumentException $e) {\n    echo "Validation: " . $e->getMessage();\n} finally {\n    // cleanup always runs\n}\n?>' },
            { type: 'fill-blank', instruction: 'Lempar error kustom:', codeTemplate: '__BLANK__ new Exception("Something went wrong");', answer: 'throw', hint: 'Membuat exception' },
            { type: 'quiz', question: 'Kapan finally berjalan?', options: ['Hanya saat sukses', 'Hanya saat error', 'Selalu', 'Tidak pernah'], correctIndex: 2, explanation: 'finally selalu berjalan terlepas dari apakah try berhasil atau catch menangani error.' },
        ],
    },
    {
        id: 'php-41', title: 'Praktik Keamanan Terbaik', description: 'Menulis PHP yang aman',
        slides: [
            { type: 'theory', title: 'Keamanan PHP', content: 'Hash password dengan password_hash/verify. Cegah XSS dengan htmlspecialchars. Cegah SQL injection dengan prepared statement. Validasi semua input. Gunakan HTTPS.', codeExample: '<?php\n// Password hashing\n$hash = password_hash("mypassword", PASSWORD_DEFAULT);\n\n// Verify password\nif (password_verify("mypassword", $hash)) {\n    echo "Password correct!";\n}\n\n// CSRF token\n$_SESSION["csrf"] = bin2hex(random_bytes(32));\n// In form: <input type="hidden" name="csrf" value="...">\n\n// Validate CSRF\nif ($_POST["csrf"] !== $_SESSION["csrf"]) {\n    die("CSRF attack detected!");\n}\n?>' },
            { type: 'fill-blank', instruction: 'Hash password:', codeTemplate: '$hash = __BLANK__($password, PASSWORD_DEFAULT);', answer: 'password_hash', hint: 'Fungsi hashing password yang aman' },
            { type: 'quiz', question: 'Haruskah menggunakan md5 untuk password?', options: ['Ya, cepat', 'Tidak, gunakan password_hash', 'Hanya untuk password pendek', 'Ya, dengan salt'], correctIndex: 1, explanation: 'Jangan pernah gunakan md5/sha1 untuk password! Gunakan password_hash yang menggunakan bcrypt/argon2.' },
        ],
    },
    {
        id: 'php-42', title: 'Praktik Terbaik PHP', description: 'Menulis PHP berkualitas produksi',
        slides: [
            { type: 'theory', title: 'Praktik Terbaik', content: 'Gunakan strict types. Type-hint semuanya. Validasi semua input. Gunakan prepared statement. Hash password. Ikuti standar PSR. Gunakan Composer untuk dependensi.', codeExample: '<?php\ndeclare(strict_types=1);\n\n// Type everything\nfunction calculateTotal(float $price, int $qty): float {\n    if ($price < 0 || $qty < 0) {\n        throw new InvalidArgumentException("Invalid values");\n    }\n    return round($price * $qty, 2);\n}\n\n// Null coalescing for defaults\n$name = $_POST["name"] ?? "Guest";\n\n// Null safe operator (PHP 8.0+)\n$city = $user?->getAddress()?->getCity();\n?>' },
            { type: 'quiz', question: 'Apa yang dilakukan declare(strict_types=1)?', options: ['Membuat PHP lebih cepat', 'Memaksakan pengecekan tipe', 'Mengaktifkan sintaks baru', 'Menonaktifkan error'], correctIndex: 1, explanation: 'strict_types memaksakan pencocokan tipe yang tepat untuk parameter dan return type fungsi.' },
            { type: 'fill-blank', instruction: 'Aktifkan strict types:', codeTemplate: '__BLANK__(strict_types=1);', answer: 'declare', hint: 'Direktif deklarasi PHP' },
        ],
    },
];
