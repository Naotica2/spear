import { Level } from './types';

export const jsLevels: Level[] = [
    // ===== DASAR (1-12) =====
    {
        id: 'js-1', title: 'Halo JavaScript', description: 'Program JavaScript pertamamu',
        slides: [
            { type: 'theory', title: 'Selamat Datang di JavaScript', content: 'JavaScript (JS) adalah bahasa utama web. JS berjalan di setiap browser dan membuat website interaktif. Gunakan console.log() untuk mencetak output.', codeExample: 'console.log("Welcome to Spear");\nconsole.log(42);\nconsole.log(true);' },
            { type: 'fill-blank', instruction: 'Cetak sebuah pesan:', codeTemplate: '__BLANK__("Welcome to Spear");', answer: 'console.log', hint: 'Fungsi yang mencetak ke konsol' },
            { type: 'quiz', question: 'Di mana JavaScript utamanya berjalan?', options: ['Hanya server', 'Hanya database', 'Di browser web', 'Di spreadsheet'], correctIndex: 2, explanation: 'JavaScript dibuat untuk browser web dan berjalan di setiap browser modern.' },
        ],
    },
    {
        id: 'js-2', title: 'Variabel dengan let & const', description: 'Menyimpan data dalam kontainer',
        slides: [
            { type: 'theory', title: 'let dan const', content: 'Variabel menyimpan data. Gunakan const untuk nilai yang tidak berubah, let untuk nilai yang akan berubah. Hindari var (cara lama, memiliki masalah scoping).', codeExample: 'const name = "Alice";  // cannot reassign\nlet age = 25;          // can reassign\nage = 26;              // OK!\n// name = "Bob";       // ERROR!' },
            { type: 'fill-blank', instruction: 'Deklarasikan sebuah konstanta:', codeTemplate: '__BLANK__ PI = 3.14;', answer: 'const', hint: 'Nilai ini seharusnya tidak pernah berubah' },
            { type: 'quiz', question: 'Apa yang terjadi jika kamu meng-assign ulang const?', options: ['Berhasil', 'Menghasilkan error', 'Membuat variabel baru', 'Berubah jadi let'], correctIndex: 1, explanation: 'Variabel const tidak bisa di-assign ulang — kamu akan mendapat TypeError.' },
        ],
    },
    {
        id: 'js-3', title: 'Tipe Data', description: 'Memahami berbagai jenis data',
        slides: [
            { type: 'theory', title: 'Tipe Primitif', content: 'JS memiliki 7 tipe primitif: string (teks), number (bilangan bulat & desimal), boolean (true/false), null (sengaja kosong), undefined (belum diberi nilai), symbol, bigint. Gunakan typeof untuk mengecek.', codeExample: 'typeof "hello"    // "string"\ntypeof 42         // "number"\ntypeof true       // "boolean"\ntypeof undefined  // "undefined"\ntypeof null       // "object" (bug JS!)' },
            { type: 'quiz', question: 'Apa hasil typeof 3.14?', options: ['float', 'decimal', 'number', 'double'], correctIndex: 2, explanation: 'JavaScript hanya memiliki satu tipe angka — "number" — untuk bilangan bulat dan desimal.' },
            { type: 'fill-blank', instruction: 'Cek tipe sebuah nilai:', codeTemplate: 'console.log(__BLANK__ "hello");', answer: 'typeof', hint: 'Operator yang mengembalikan tipe data' },
        ],
    },
    {
        id: 'js-4', title: 'String', description: 'Bekerja dengan teks',
        slides: [
            { type: 'theory', title: 'Dasar String', content: 'String adalah teks yang dibungkus tanda kutip. Kutip tunggal (\'), ganda ("), atau backtick (`). Akses karakter dengan [index]. String bersifat immutable — method mengembalikan string BARU.', codeExample: 'const msg = "Hello";\nmsg.length;        // 5\nmsg[0];            // "H"\nmsg.toUpperCase(); // "HELLO"\nmsg.includes("ell"); // true' },
            { type: 'fill-blank', instruction: 'Dapatkan panjang string:', codeTemplate: 'const len = name.__BLANK__;', answer: 'length', hint: 'Properti (bukan method) yang memberikan jumlah karakter' },
            { type: 'quiz', question: 'Apa yang dikembalikan "hello"[1]?', options: ['h', 'e', 'l', 'undefined'], correctIndex: 1, explanation: 'Indeks string dimulai dari 0, jadi indeks 1 adalah karakter kedua "e".' },
        ],
    },
    {
        id: 'js-5', title: 'Method String', description: 'Memanipulasi teks seperti pro',
        slides: [
            { type: 'theory', title: 'Method String Berguna', content: 'slice(start, end) mengekstrak bagian. replace() mengganti teks. split() mengubah ke array. trim() menghapus spasi. startsWith()/endsWith() mengecek awalan/akhiran.', codeExample: '"hello world".slice(0, 5);    // "hello"\n"hello".replace("l", "r");    // "herlo"\n"a,b,c".split(",");           // ["a","b","c"]\n"  hi  ".trim();               // "hi"' },
            { type: 'fill-blank', instruction: 'Pecah string CSV:', codeTemplate: 'const parts = "a,b,c".__BLANK__(",");', answer: 'split', hint: 'Memecah string menjadi array' },
            { type: 'quiz', question: 'Apa yang dikembalikan "hello".replace("l","r")?', options: ['herro', 'herlo', 'hello', 'rerro'], correctIndex: 1, explanation: 'replace() hanya mengganti kemunculan PERTAMA secara default.' },
        ],
    },
    {
        id: 'js-6', title: 'Angka & Math', description: 'Perhitungan dan operasi numerik',
        slides: [
            { type: 'theory', title: 'Angka di JS', content: 'Semua angka adalah floating-point. Objek Math menyediakan utilitas: Math.round(), Math.floor(), Math.ceil(), Math.random(), Math.max(), Math.min(), Math.abs().', codeExample: 'Math.round(4.7);    // 5\nMath.floor(4.9);    // 4\nMath.ceil(4.1);     // 5\nMath.random();      // 0.0 to 0.999...\nMath.max(1, 5, 3);  // 5\nparseInt("42px");   // 42' },
            { type: 'fill-blank', instruction: 'Bulatkan angka ke bawah:', codeTemplate: 'const floored = Math.__BLANK__(4.9);', answer: 'floor', hint: 'Selalu membulatkan ke bawah' },
            { type: 'quiz', question: 'Apa yang dikembalikan parseInt("42px")?', options: ['NaN', '42', '"42"', 'Error'], correctIndex: 1, explanation: 'parseInt mengekstrak bilangan bulat awal dari sebuah string.' },
        ],
    },
    {
        id: 'js-7', title: 'Operator', description: 'Aritmatika dan penugasan',
        slides: [
            { type: 'theory', title: 'Operator', content: 'Aritmatika: + - * / % (sisa bagi) ** (pangkat). Penugasan: = += -= *= /=. Increment: ++ --. Operator + juga menggabungkan string.', codeExample: '10 % 3;     // 1 (remainder)\n2 ** 3;     // 8 (power)\nlet x = 10;\nx += 5;     // x is now 15\nx++;        // x is now 16\n"Hi" + " " + "there"; // "Hi there"' },
            { type: 'fill-blank', instruction: 'Hitung sisa bagi:', codeTemplate: 'const remainder = 10 __BLANK__ 3; // 1', answer: '%', hint: 'Operator modulo' },
            { type: 'quiz', question: 'Berapa 2 ** 4?', options: ['6', '8', '16', '24'], correctIndex: 2, explanation: '** adalah operator eksponen. 2⁴ = 16.' },
        ],
    },
    {
        id: 'js-8', title: 'Perbandingan & Logika', description: 'Keputusan benar atau salah',
        slides: [
            { type: 'theory', title: 'Operator Perbandingan', content: '=== sama persis, !== tidak sama persis, < > <= >=. Logika: && (AND), || (OR), ! (NOT). Selalu gunakan === daripada == untuk menghindari kejutan type coercion.', codeExample: '5 === 5;      // true\n5 === "5";    // false (different types)\n5 == "5";     // true (type coercion!)\ntrue && false; // false\ntrue || false; // true\n!true;         // false' },
            { type: 'fill-blank', instruction: 'Pengecekan kesamaan ketat:', codeTemplate: 'if (name __BLANK__ "Alice") { ... }', answer: '===', hint: 'Tiga tanda sama dengan' },
            { type: 'quiz', question: 'Apa yang dikembalikan 5 == "5"?', options: ['true', 'false', 'error', 'undefined'], correctIndex: 0, explanation: '== melakukan type coercion, mengubah "5" menjadi 5 sebelum membandingkan. Gunakan === untuk menghindari ini.' },
        ],
    },
    {
        id: 'js-9', title: 'If / Else', description: 'Membuat keputusan dalam kode',
        slides: [
            { type: 'theory', title: 'Pernyataan Kondisional', content: 'if mengecek kondisi. else menyediakan alternatif. else if merangkai beberapa kondisi. Kode dalam { } hanya berjalan saat kondisi bernilai true.', codeExample: 'const score = 85;\n\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else if (score >= 70) {\n  console.log("C");\n} else {\n  console.log("F");\n}\n// Output: "B"' },
            { type: 'drag-drop', instruction: 'Bangun pernyataan if/else:', tokens: ['if', '(age >= 18)', '{', 'console.log("Adult");', '}', 'else', '{', 'console.log("Minor");', '}'], correctOrder: ['if', '(age >= 18)', '{', 'console.log("Adult");', '}', 'else', '{', 'console.log("Minor");', '}'], hint: 'Kondisi if dulu, lalu else' },
            { type: 'quiz', question: 'Kapan blok else berjalan?', options: ['Selalu', 'Saat kondisi if bernilai true', 'Saat kondisi if bernilai false', 'Tidak pernah'], correctIndex: 2, explanation: 'else berjalan hanya saat kondisi if bernilai false.' },
        ],
    },
    {
        id: 'js-10', title: 'Switch & Ternary', description: 'Cara lain membuat keputusan',
        slides: [
            { type: 'theory', title: 'Switch & Ternary', content: 'switch mencocokkan nilai dengan case — jangan lupa break! Operator ternary (? :) adalah if/else satu baris, cocok untuk kondisi sederhana.', codeExample: 'switch (day) {\n  case "Mon": msg = "Start!"; break;\n  case "Fri": msg = "TGIF!"; break;\n  default: msg = "Regular day";\n}\n\n// Ternary\nconst status = age >= 18 ? "adult" : "minor";' },
            { type: 'fill-blank', instruction: 'Tulis ternary:', codeTemplate: 'const msg = isHappy __BLANK__ "😊" : "😢";', answer: '?', hint: 'Operator ternary menggunakan ? dan :' },
            { type: 'quiz', question: 'Apa yang terjadi tanpa break di switch?', options: ['Error', 'Lanjut ke case berikutnya', 'Berhenti langsung', 'Looping'], correctIndex: 1, explanation: 'Tanpa break, eksekusi akan lanjut ke case berikutnya — bug yang umum!' },
        ],
    },
    {
        id: 'js-11', title: 'For Loop', description: 'Mengulang kode dengan penghitungan',
        slides: [
            { type: 'theory', title: 'Loop For', content: 'Loop for memiliki 3 bagian: inisialisasi, kondisi, update. Berjalan selama kondisi bernilai true. Sempurna untuk menghitung atau mengiterasi sejumlah kali yang diketahui.', codeExample: 'for (let i = 0; i < 5; i++) {\n  console.log(i); // 0,1,2,3,4\n}\n\n// Count by 2\nfor (let i = 0; i <= 10; i += 2) {\n  console.log(i); // 0,2,4,6,8,10\n}' },
            { type: 'fill-blank', instruction: 'Ulangi 10 kali:', codeTemplate: 'for (let i = 0; i __BLANK__ 10; i++) { ... }', answer: '<', hint: 'Ulangi selama i kurang dari 10' },
            { type: 'quiz', question: 'Berapa kali for(let i=0; i<3; i++) berjalan?', options: ['2', '3', '4', 'Tak terhingga'], correctIndex: 1, explanation: 'i dimulai dari 0 dan berjalan untuk 0, 1, 2 — itu 3 iterasi.' },
        ],
    },
    {
        id: 'js-12', title: 'While & Do-While', description: 'Loop dengan kondisi',
        slides: [
            { type: 'theory', title: 'Loop While', content: 'while berjalan selama kondisi true — gunakan saat tidak tahu berapa kali iterasi. do...while selalu berjalan minimal sekali. Hati-hati dengan loop tak terhingga!', codeExample: 'let count = 0;\nwhile (count < 3) {\n  console.log(count); // 0,1,2\n  count++;\n}\n\ndo {\n  // runs at least once\n  const input = prompt("Enter yes:");\n} while (input !== "yes");' },
            { type: 'fill-blank', instruction: 'Ulangi selama kondisi true:', codeTemplate: '__BLANK__ (count < 10) {\n  count++;\n}', answer: 'while', hint: 'Kata kunci untuk loop berbasis kondisi' },
            { type: 'quiz', question: 'Apa yang spesial dari do...while?', options: ['Lebih cepat', 'Tidak pernah berjalan', 'Berjalan minimal sekali', 'Hanya berjalan dua kali'], correctIndex: 2, explanation: 'do...while mengecek kondisi SETELAH iterasi pertama, jadi selalu berjalan minimal sekali.' },
        ],
    },
    // ===== FUNGSI & SCOPE (13-18) =====
    {
        id: 'js-13', title: 'Break & Continue', description: 'Mengontrol alur loop',
        slides: [
            { type: 'theory', title: 'Kontrol Loop', content: 'break keluar dari loop segera. continue melewati iterasi saat ini dan lanjut ke berikutnya. Keduanya bekerja di for, while, dan do...while.', codeExample: '// break — stop at 3\nfor (let i = 0; i < 10; i++) {\n  if (i === 3) break;\n  console.log(i); // 0,1,2\n}\n\n// continue — skip even numbers\nfor (let i = 0; i < 6; i++) {\n  if (i % 2 === 0) continue;\n  console.log(i); // 1,3,5\n}' },
            { type: 'quiz', question: 'Apa yang dilakukan break dalam loop?', options: ['Melewati satu iterasi', 'Keluar dari loop sepenuhnya', 'Memulai ulang loop', 'Menjeda loop'], correctIndex: 1, explanation: 'break langsung keluar dari loop, tidak ada iterasi lagi.' },
            { type: 'fill-blank', instruction: 'Lewati angka ganjil:', codeTemplate: 'if (i % 2 !== 0) __BLANK__;', answer: 'continue', hint: 'Lompat ke iterasi berikutnya' },
        ],
    },
    {
        id: 'js-14', title: 'Fungsi', description: 'Membuat blok kode yang bisa dipakai ulang',
        slides: [
            { type: 'theory', title: 'Deklarasi Fungsi', content: 'Fungsi adalah blok kode yang bisa dipakai ulang. Deklarasikan dengan kata kunci function. Mereka menerima parameter (input) dan mengembalikan nilai (output). Jika tidak ada return, fungsi mengembalikan undefined.', codeExample: 'function greet(name) {\n  return "Hello, " + name + "!";\n}\n\nconsole.log(greet("Alice")); // "Hello, Alice!"\nconsole.log(greet("Bob"));   // "Hello, Bob!"' },
            { type: 'drag-drop', instruction: 'Bangun sebuah fungsi:', tokens: ['function', 'add', '(a, b)', '{', 'return a + b;', '}'], correctOrder: ['function', 'add', '(a, b)', '{', 'return a + b;', '}'], hint: 'Kata kunci function, nama, parameter, body' },
            { type: 'quiz', question: 'Apa yang dikembalikan fungsi tanpa pernyataan return?', options: ['null', '0', 'undefined', 'error'], correctIndex: 2, explanation: 'Fungsi tanpa return secara implisit mengembalikan undefined.' },
        ],
    },
    {
        id: 'js-15', title: 'Arrow Function', description: 'Sintaks fungsi modern yang ringkas',
        slides: [
            { type: 'theory', title: 'Arrow Function (=>)', content: 'Arrow function adalah sintaks yang lebih pendek. Untuk ekspresi tunggal, kamu bisa hilangkan { } dan return. Mereka tidak memiliki "this" sendiri — penting untuk callback.', codeExample: '// Regular\nconst add = function(a, b) {\n  return a + b;\n};\n\n// Arrow (block body)\nconst add = (a, b) => {\n  return a + b;\n};\n\n// Arrow (concise body)\nconst add = (a, b) => a + b;\nconst double = n => n * 2;' },
            { type: 'fill-blank', instruction: 'Tulis arrow function ringkas:', codeTemplate: 'const square = (n) __BLANK__ n * n;', answer: '=>', hint: 'Sintaks arrow untuk body fungsi ringkas' },
            { type: 'quiz', question: 'Kapan bisa menghilangkan { } di arrow function?', options: ['Tidak pernah', 'Selalu', 'Saat ada ekspresi tunggal', 'Saat tidak ada parameter'], correctIndex: 2, explanation: 'Dengan ekspresi tunggal, kamu bisa gunakan body ringkas: (x) => x * 2' },
        ],
    },
    {
        id: 'js-16', title: 'Parameter & Default', description: 'Input fungsi secara mendalam',
        slides: [
            { type: 'theory', title: 'Parameter', content: 'Fungsi bisa memiliki nilai default untuk parameter. Gunakan rest parameter (...args) untuk menerima sejumlah argumen. Argumen dikirim by value (primitif) atau by reference (objek).', codeExample: 'function greet(name = "World") {\n  return `Hello, ${name}!`;\n}\ngreet();        // "Hello, World!"\ngreet("Alice"); // "Hello, Alice!"\n\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nsum(1, 2, 3); // 6' },
            { type: 'fill-blank', instruction: 'Atur parameter default:', codeTemplate: 'function greet(name __BLANK__ "Guest") { ... }', answer: '=', hint: 'Operator penugasan untuk nilai default' },
            { type: 'quiz', question: 'Apa yang dilakukan ...args di fungsi?', options: ['Menyebar array', 'Mengumpulkan semua argumen ke array', 'Menghapus argumen', 'Membuat error'], correctIndex: 1, explanation: 'Rest parameter (...) mengumpulkan semua argumen tersisa ke dalam sebuah array.' },
        ],
    },
    {
        id: 'js-17', title: 'Scope', description: 'Di mana variabel hidup',
        slides: [
            { type: 'theory', title: 'Scope Variabel', content: 'Scope menentukan di mana variabel bisa diakses. Global scope = di mana saja. Function scope = di dalam fungsi. Block scope (let/const) = di dalam { }. Scope dalam bisa akses scope luar, tidak sebaliknya.', codeExample: 'const global = "I\'m global";\n\nfunction test() {\n  const local = "I\'m local";\n  console.log(global); // ✅ Works\n  \n  if (true) {\n    const blockVar = "I\'m block";\n    console.log(local); // ✅ Works\n  }\n  // console.log(blockVar); // ❌ Error!\n}\n// console.log(local); // ❌ Error!' },
            { type: 'quiz', question: 'Bisakah scope dalam mengakses variabel luar?', options: ['Tidak, tidak pernah', 'Ya, selalu', 'Hanya dengan var', 'Hanya dengan let'], correctIndex: 1, explanation: 'Scope dalam selalu memiliki akses ke variabel di scope luarnya (scope chain).' },
            { type: 'fill-blank', instruction: 'Kata kunci mana yang membuat block scope?', codeTemplate: '__BLANK__ x = 10; // block-scoped', answer: 'let', hint: 'Deklarasi variabel modern dengan block scope' },
        ],
    },
    {
        id: 'js-18', title: 'Closure', description: 'Fungsi yang mengingat',
        slides: [
            { type: 'theory', title: 'Closure', content: 'Closure adalah fungsi yang mengingat variabel dari scope luarnya, bahkan setelah fungsi luar sudah selesai. Ini fundamental untuk banyak pola JS seperti variabel privat dan factory.', codeExample: 'function createCounter() {\n  let count = 0; // private!\n  return {\n    increment: () => ++count,\n    getCount: () => count,\n  };\n}\n\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.increment(); // 2\ncounter.getCount();  // 2\n// count is NOT accessible directly!' },
            { type: 'quiz', question: 'Apa itu closure?', options: ['Cara menutup program', 'Fungsi dengan akses ke scope luarnya', 'Jenis loop', 'Penanganan error'], correctIndex: 1, explanation: 'Closure adalah fungsi yang dibundel dengan state sekitarnya (lexical environment).' },
            { type: 'fill-blank', instruction: 'Fungsi dalam "menutup" variabel ini:', codeTemplate: 'function outer() {\n  let secret = 42;\n  return () => __BLANK__;\n}', answer: 'secret', hint: 'Fungsi dalam mengingat variabel ini' },
        ],
    },
    // ===== ARRAY & OBJEK (19-27) =====
    {
        id: 'js-19', title: 'Array', description: 'Koleksi data terurut',
        slides: [
            { type: 'theory', title: 'Dasar Array', content: 'Array menyimpan daftar terurut. Akses dengan indeks (berbasis 0). Gunakan .length untuk ukuran. push/pop menambah/menghapus dari akhir. unshift/shift menambah/menghapus dari awal.', codeExample: 'const fruits = ["apple", "banana", "cherry"];\nfruits[0];          // "apple"\nfruits.length;      // 3\nfruits.push("date");     // adds to end\nfruits.pop();            // removes from end\nfruits.unshift("avocado"); // adds to start\nfruits.includes("banana"); // true' },
            { type: 'fill-blank', instruction: 'Tambah ke akhir array:', codeTemplate: 'fruits.__BLANK__("mango");', answer: 'push', hint: 'Menambahkan elemen ke akhir' },
            { type: 'quiz', question: 'Berapa indeks elemen pertama?', options: ['1', '0', '-1', 'first'], correctIndex: 1, explanation: 'Array di JavaScript berbasis indeks 0 — elemen pertama di indeks 0.' },
        ],
    },
    {
        id: 'js-20', title: 'Method Array', description: 'Slice, splice, dan lainnya',
        slides: [
            { type: 'theory', title: 'Memodifikasi Array', content: 'slice(start, end) menyalin sebagian (non-destruktif). splice(index, count, ...items) menambah/menghapus di tempat (destruktif). concat() menggabungkan array. indexOf() menemukan posisi.', codeExample: 'const arr = [1, 2, 3, 4, 5];\narr.slice(1, 3);     // [2, 3] (copy)\narr.splice(2, 1);    // removes arr[2]\n// arr is now [1, 2, 4, 5]\narr.splice(1, 0, 99); // insert 99 at index 1\n\n[1,2].concat([3,4]); // [1,2,3,4]' },
            { type: 'quiz', question: 'Apakah slice() mengubah array asli?', options: ['Ya', 'Tidak', 'Kadang-kadang', 'Hanya dengan angka'], correctIndex: 1, explanation: 'slice() mengembalikan array baru — tidak pernah mengubah aslinya (non-destruktif).' },
            { type: 'fill-blank', instruction: 'Hapus 2 elemen mulai indeks 1:', codeTemplate: 'arr.__BLANK__(1, 2);', answer: 'splice', hint: 'Method destruktif untuk menambah/menghapus' },
        ],
    },
    {
        id: 'js-21', title: 'forEach & for...of', description: 'Mengiterasi array dengan elegan',
        slides: [
            { type: 'theory', title: 'Iterasi Array', content: 'forEach menjalankan fungsi untuk setiap elemen. for...of mengiterasi nilai langsung. Keduanya lebih bersih dari loop for tradisional untuk array.', codeExample: 'const colors = ["red", "green", "blue"];\ncolors.forEach((color, i) => console.log(i, color));\nfor (const color of colors) {\n  console.log(color);\n}' },
            { type: 'fill-blank', instruction: 'Iterasi dengan forEach:', codeTemplate: 'nums.__BLANK__((n) => console.log(n));', answer: 'forEach', hint: 'Memanggil fungsi untuk setiap elemen' },
            { type: 'quiz', question: 'Bisakah menggunakan break di dalam forEach?', options: ['Ya', 'Tidak', 'Hanya dengan return', 'Hanya di strict mode'], correctIndex: 1, explanation: 'Kamu tidak bisa break dari forEach. Gunakan for...of jika butuh break.' },
        ],
    },
    {
        id: 'js-22', title: 'Map & Filter', description: 'Mentransformasi dan memilih data',
        slides: [
            { type: 'theory', title: 'map() dan filter()', content: 'map() membuat array BARU dengan mentransformasi setiap elemen. filter() membuat array BARU dengan elemen yang lolos tes. Rantaikan keduanya untuk pemrosesan data yang powerful.', codeExample: 'const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(n => n * 2); // [2,4,6,8,10]\nconst even = nums.filter(n => n % 2 === 0); // [2,4]\nconst result = nums.filter(n => n > 2).map(n => n * 10); // [30,40,50]' },
            { type: 'fill-blank', instruction: 'Ambil hanya angka > 10:', codeTemplate: 'const big = nums.__BLANK__(n => n > 10);', answer: 'filter', hint: 'Memilih elemen yang lolos tes' },
            { type: 'quiz', question: 'Apa yang dikembalikan map()?', options: ['undefined', 'Array asli', 'Array baru yang ditransformasi', 'Nilai tunggal'], correctIndex: 2, explanation: 'map() selalu mengembalikan array baru dengan panjang sama, berisi elemen yang sudah ditransformasi.' },
        ],
    },
    {
        id: 'js-23', title: 'Reduce, Find & Some', description: 'Operasi array yang powerful',
        slides: [
            { type: 'theory', title: 'Method Array Lainnya', content: 'reduce() mengakumulasi menjadi nilai tunggal. find() mengembalikan kecocokan pertama. some() mengecek apakah ada yang lolos. every() mengecek apakah semua lolos.', codeExample: 'const nums = [1, 2, 3, 4, 5];\nconst sum = nums.reduce((acc, n) => acc + n, 0); // 15\nconst found = nums.find(n => n > 3); // 4\nnums.some(n => n > 4);  // true\nnums.every(n => n > 0); // true' },
            { type: 'fill-blank', instruction: 'Jumlahkan semua angka:', codeTemplate: 'const total = nums.__BLANK__((acc, n) => acc + n, 0);', answer: 'reduce', hint: 'Mereduksi array menjadi nilai tunggal' },
            { type: 'quiz', question: 'Apa yang dikembalikan find() jika tidak ada yang cocok?', options: ['null', 'undefined', '[]', 'false'], correctIndex: 1, explanation: 'find() mengembalikan undefined saat tidak ada elemen yang memenuhi kondisi.' },
        ],
    },
    {
        id: 'js-24', title: 'Objek', description: 'Struktur data key-value',
        slides: [
            { type: 'theory', title: 'Dasar Objek', content: 'Objek menyimpan pasangan key-value. Akses dengan notasi titik atau kurung siku. Tambah, ubah, atau hapus properti kapan saja.', codeExample: 'const user = { name: "Alice", age: 25, isStudent: true };\nuser.name;           // "Alice"\nuser["age"];         // 25\nuser.email = "a@b.com"; // add\ndelete user.isStudent;  // remove' },
            { type: 'fill-blank', instruction: 'Akses sebuah properti:', codeTemplate: 'const name = user.__BLANK__;', answer: 'name', hint: 'Notasi titik untuk mengakses' },
            { type: 'quiz', question: 'Bagaimana menghapus properti?', options: ['remove obj.key', 'obj.key = null', 'delete obj.key', 'obj.key.remove()'], correctIndex: 2, explanation: 'Operator delete menghapus properti sepenuhnya.' },
        ],
    },
    {
        id: 'js-25', title: 'Method Objek & this', description: 'Fungsi di dalam objek',
        slides: [
            { type: 'theory', title: 'Method', content: 'Method adalah fungsi di dalam objek. Gunakan "this" untuk merujuk ke objek saat ini. Object.keys/values/entries memungkinkan iterasi objek.', codeExample: 'const dog = {\n  name: "Rex",\n  bark() { return `${this.name} says Woof!`; }\n};\ndog.bark(); // "Rex says Woof!"\n\nObject.keys(dog);    // ["name", "bark"]\nObject.values(dog);  // ["Rex", f]\nObject.entries(dog); // [["name","Rex"], ...]' },
            { type: 'fill-blank', instruction: 'Referensi objek di dalam method:', codeTemplate: 'greet() { return "Hi, " + __BLANK__.name; }', answer: 'this', hint: 'Kata kunci yang merujuk ke objek saat ini' },
            { type: 'quiz', question: 'Apa yang dirujuk "this" di method objek?', options: ['Window', 'Fungsi', 'Objek pemilik method', 'undefined'], correctIndex: 2, explanation: 'Di method biasa, "this" merujuk ke objek yang memiliki method tersebut.' },
        ],
    },
    {
        id: 'js-26', title: 'Destructuring', description: 'Mengekstrak nilai dengan elegan',
        slides: [
            { type: 'theory', title: 'Destructuring', content: 'Ekstrak nilai dari array/objek ke variabel. Gunakan { } untuk objek, [ ] untuk array. Bisa rename, set default, dan nesting.', codeExample: 'const { name, age } = { name: "Alice", age: 25 };\nconst { name: userName } = user; // rename\nconst { role = "user" } = user;  // default\nconst [first, , third] = [1, 2, 3]; // skip second' },
            { type: 'fill-blank', instruction: 'Destructure sebuah objek:', codeTemplate: 'const __BLANK__ name, age } = user;', answer: '{', hint: 'Kurung kurawal memulai destructuring objek' },
            { type: 'quiz', question: 'Bagaimana melewati elemen array?', options: ['Gunakan null', 'Gunakan undefined', 'Gunakan koma tambahan', 'Tidak bisa dilewati'], correctIndex: 2, explanation: 'Gunakan koma: const [a, , c] = [1, 2, 3] melewati elemen kedua.' },
        ],
    },
    {
        id: 'js-27', title: 'Spread & Rest', description: 'Operator tiga titik',
        slides: [
            { type: 'theory', title: 'Spread & Rest (...)', content: 'Spread menyebarkan array/objek. Rest mengumpulkan ke array. Sintaks sama, konteks berbeda.', codeExample: '// Spread\nconst arr2 = [...arr1, 4, 5];\nconst obj2 = { ...obj1, b: 2 };\n\n// Rest\nconst [first, ...rest] = [1, 2, 3, 4];\n// first=1, rest=[2,3,4]\n\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}' },
            { type: 'fill-blank', instruction: 'Salin dan perluas objek:', codeTemplate: 'const newObj = { __BLANK__oldObj, extra: true };', answer: '...', hint: 'Tiga titik untuk menyebar' },
            { type: 'quiz', question: 'Apa yang dibuat [...arr]?', options: ['Referensi', 'Salinan dangkal', 'Salinan dalam', 'Array kosong'], correctIndex: 1, explanation: '[...arr] membuat salinan dangkal — array baru dengan elemen yang sama.' },
        ],
    },
    {
        id: 'js-28', title: 'Template Literal', description: 'Penanganan string modern',
        slides: [
            { type: 'theory', title: 'Template Literal', content: 'Backtick (`) mengaktifkan template literal. Sisipkan ekspresi dengan ${}. Buat string multi-baris. Jauh lebih bersih dari concatenation.', codeExample: 'const name = "Alice";\nconst msg = `Hello, ${name}!`;\nconst html = `\n  <div>\n    <h2>${name}</h2>\n    <p>Age: ${25 + 1}</p>\n  </div>\n`;' },
            { type: 'fill-blank', instruction: 'Sisipkan variabel:', codeTemplate: 'const msg = `Welcome, __BLANK__{name}!`;', answer: '$', hint: 'Tanda dollar memulai interpolasi' },
            { type: 'quiz', question: 'Tanda kutip mana yang mengaktifkan template literal?', options: ['Tunggal', 'Ganda', 'Backtick', 'Triple'], correctIndex: 2, explanation: 'Hanya backtick (`) yang mengaktifkan interpolasi ${} dan string multi-baris.' },
        ],
    },
    {
        id: 'js-29', title: 'Seleksi DOM', description: 'Menemukan elemen di halaman',
        slides: [
            { type: 'theory', title: 'Memilih Elemen', content: 'querySelector menemukan kecocokan pertama, querySelectorAll menemukan semua. Gunakan selector CSS. getElementById juga umum dipakai.', codeExample: 'const title = document.querySelector("#title");\nconst cards = document.querySelectorAll(".card");\nconst btn = document.querySelector("form .submit-btn");\nconst input = document.querySelector(\'[name="email"]\');' },
            { type: 'fill-blank', instruction: 'Pilih dengan selector CSS:', codeTemplate: 'const el = document.__BLANK__("#title");', answer: 'querySelector', hint: 'Menggunakan selector CSS' },
            { type: 'quiz', question: 'Apa yang dikembalikan querySelectorAll?', options: ['Array', 'NodeList', 'Elemen tunggal', 'undefined'], correctIndex: 1, explanation: 'querySelectorAll mengembalikan NodeList (mirip array tapi bukan Array sejati).' },
        ],
    },
    {
        id: 'js-30', title: 'Modifikasi DOM', description: 'Mengubah halaman secara dinamis',
        slides: [
            { type: 'theory', title: 'Memodifikasi DOM', content: 'textContent mengubah teks, innerHTML mengubah HTML, classList mengelola class CSS, createElement/appendChild menambah elemen.', codeExample: 'el.textContent = "New Text";\nel.innerHTML = "<em>Bold</em>";\nel.classList.add("active");\nel.classList.toggle("hidden");\nel.style.color = "blue";\nconst p = document.createElement("p");\np.textContent = "Hello!";\ndocument.body.appendChild(p);' },
            { type: 'fill-blank', instruction: 'Toggle sebuah class:', codeTemplate: 'el.classList.__BLANK__("active");', answer: 'toggle', hint: 'Menambah jika tidak ada, menghapus jika ada' },
            { type: 'quiz', question: 'textContent vs innerHTML?', options: ['Sama saja', 'textContent=teks, innerHTML=HTML', 'innerHTML lebih aman', 'textContent lebih lambat'], correctIndex: 1, explanation: 'textContent mengatur teks biasa, innerHTML mem-parse dan me-render tag HTML.' },
        ],
    },
    {
        id: 'js-31', title: 'Event', description: 'Merespons aksi pengguna',
        slides: [
            { type: 'theory', title: 'Penanganan Event', content: 'addEventListener melampirkan handler. Event umum: click, input, submit, keydown. event.target adalah elemen yang memicunya. preventDefault menghentikan perilaku default.', codeExample: 'btn.addEventListener("click", (e) => {\n  console.log("Clicked!", e.target);\n});\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  const data = new FormData(form);\n});' },
            { type: 'fill-blank', instruction: 'Tambah handler klik:', codeTemplate: 'btn.__BLANK__("click", handleClick);', answer: 'addEventListener', hint: 'Method untuk melampirkan event listener' },
            { type: 'quiz', question: 'Apa itu event.target?', options: ['Tipe event', 'Elemen yang memicunya', 'Elemen parent', 'Fungsi callback'], correctIndex: 1, explanation: 'event.target adalah elemen DOM yang memicu event tersebut.' },
        ],
    },
    {
        id: 'js-32', title: 'Callback & Timer', description: 'Fungsi sebagai argumen',
        slides: [
            { type: 'theory', title: 'Callback', content: 'Callback adalah fungsi yang dikirim ke fungsi lain. Digunakan untuk event, timer, dan pola async. setTimeout menunda, setInterval mengulang.', codeExample: 'setTimeout(() => console.log("After 2s"), 2000);\nsetInterval(() => console.log("Every 1s"), 1000);\n\nfunction doTask(onDone) {\n  // ... work ...\n  onDone("Result");\n}\ndoTask((result) => console.log(result));' },
            { type: 'fill-blank', instruction: 'Jalankan setelah 3 detik:', codeTemplate: '__BLANK__(() => alert("Done!"), 3000);', answer: 'setTimeout', hint: 'Menunda eksekusi' },
            { type: 'quiz', question: 'Apa itu "callback hell"?', options: ['Terlalu banyak callback', 'Callback bersarang dalam yang tidak terbaca', 'Callback yang error', 'Callback cepat'], correctIndex: 1, explanation: 'Callback hell adalah callback bersarang dalam yang membuat kode berbentuk piramida yang tidak terbaca.' },
        ],
    },
    {
        id: 'js-33', title: 'Promise', description: 'Penanganan async yang lebih baik',
        slides: [
            { type: 'theory', title: 'Promise', content: 'Promise merepresentasikan nilai di masa depan. State: pending, fulfilled, rejected. .then() untuk sukses, .catch() untuk error, .finally() selalu berjalan.', codeExample: 'const p = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Done!"), 1000);\n});\np.then(data => console.log(data))\n .catch(err => console.error(err))\n .finally(() => console.log("Finished"));' },
            { type: 'quiz', question: 'Berapa state yang dimiliki Promise?', options: ['2', '3', '4', '1'], correctIndex: 1, explanation: 'Promise memiliki 3 state: pending, fulfilled, rejected.' },
            { type: 'fill-blank', instruction: 'Tangani error:', codeTemplate: 'fetch(url).then(handle).__BLANK__(handleError);', answer: '.catch', hint: 'Menangkap promise yang ditolak' },
        ],
    },
    {
        id: 'js-34', title: 'Async / Await', description: 'Kode asinkron yang bersih',
        slides: [
            { type: 'theory', title: 'async/await', content: 'async membuat fungsi mengembalikan Promise. await menjeda sampai Promise resolve. Membuat kode async terlihat sinkron. Selalu bungkus dalam try/catch.', codeExample: 'async function loadUser() {\n  try {\n    const res = await fetch("/api/user");\n    const user = await res.json();\n    return user;\n  } catch (err) {\n    console.error("Failed:", err);\n  }\n}' },
            { type: 'fill-blank', instruction: 'Tunggu sebuah promise:', codeTemplate: 'const data = __BLANK__ fetch("/api");', answer: 'await', hint: 'Menjeda sampai promise resolve' },
            { type: 'quiz', question: 'Di mana await bisa digunakan?', options: ['Di mana saja', 'Hanya di fungsi async', 'Hanya di loop', 'Hanya di top level'], correctIndex: 1, explanation: 'await hanya bisa digunakan di dalam fungsi async.' },
        ],
    },
    {
        id: 'js-35', title: 'Fetch API', description: 'Membuat HTTP request',
        slides: [
            { type: 'theory', title: 'Mengambil Data', content: 'fetch() membuat HTTP request. GET membaca, POST mengirim. Parse response dengan .json(). Cek response.ok untuk error.', codeExample: '// GET\nconst res = await fetch("/api/users");\nconst users = await res.json();\n\n// POST\nawait fetch("/api/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "Alice" }),\n});' },
            { type: 'fill-blank', instruction: 'Parse response JSON:', codeTemplate: 'const data = await response.__BLANK__();', answer: 'json', hint: 'Mem-parse response sebagai JSON' },
            { type: 'quiz', question: 'Method HTTP untuk mengirim data baru?', options: ['GET', 'POST', 'DELETE', 'FETCH'], correctIndex: 1, explanation: 'POST digunakan untuk mengirim/membuat data baru di server.' },
        ],
    },
    {
        id: 'js-36', title: 'Penanganan Error', description: 'Menangani kegagalan dengan elegan',
        slides: [
            { type: 'theory', title: 'Try / Catch / Finally', content: 'try membungkus kode berisiko. catch menerima error. finally selalu berjalan. throw membuat error kustom.', codeExample: 'try {\n  const data = JSON.parse(input);\n  if (!data.name) throw new Error("Name required");\n} catch (err) {\n  console.error(err.message);\n} finally {\n  cleanup();\n}' },
            { type: 'fill-blank', instruction: 'Lempar error kustom:', codeTemplate: '__BLANK__ new Error("Invalid input");', answer: 'throw', hint: 'Membuat exception' },
            { type: 'quiz', question: 'Kapan finally berjalan?', options: ['Hanya saat sukses', 'Hanya saat error', 'Selalu', 'Tidak pernah'], correctIndex: 2, explanation: 'finally selalu berjalan terlepas dari hasil try/catch.' },
        ],
    },
    {
        id: 'js-37', title: 'ES Module', description: 'Mengorganisir kode ke dalam file',
        slides: [
            { type: 'theory', title: 'import / export', content: 'Named export: export const/function. Default export: satu per file. import { } untuk named, import X untuk default.', codeExample: '// math.js\nexport const PI = 3.14;\nexport function add(a, b) { return a + b; }\nexport default function multiply(a, b) { return a * b; }\n\n// app.js\nimport multiply, { PI, add } from "./math.js";' },
            { type: 'fill-blank', instruction: 'Import named export:', codeTemplate: '__BLANK__ { useState } from "react";', answer: 'import', hint: 'Mengambil modul' },
            { type: 'quiz', question: 'Berapa default export per file?', options: ['Tak terbatas', 'Satu', 'Dua', 'Nol'], correctIndex: 1, explanation: 'Setiap modul hanya bisa memiliki tepat satu default export.' },
        ],
    },
    {
        id: 'js-38', title: 'JSON', description: 'Format pertukaran data',
        slides: [
            { type: 'theory', title: 'JSON', content: 'JSON.parse() mengubah string ke objek. JSON.stringify() mengubah objek ke string. Format data standar untuk API.', codeExample: 'const user = { name: "Alice", age: 25 };\nconst json = JSON.stringify(user);\n// \'{"name":"Alice","age":25}\'\nconst parsed = JSON.parse(json);\nparsed.name; // "Alice"' },
            { type: 'fill-blank', instruction: 'Ubah JSON ke objek:', codeTemplate: 'const obj = JSON.__BLANK__(jsonString);', answer: 'parse', hint: 'Mem-parse string JSON' },
            { type: 'quiz', question: 'Apa kepanjangan JSON?', options: ['Java Standard Object', 'JavaScript Object Notation', 'JavaScript Open Network', 'JSON Object Node'], correctIndex: 1, explanation: 'JSON = JavaScript Object Notation.' },
        ],
    },
    {
        id: 'js-39', title: 'LocalStorage', description: 'Menyimpan data di browser',
        slides: [
            { type: 'theory', title: 'Web Storage', content: 'localStorage bertahan antar sesi. Hanya menyimpan string — gunakan JSON untuk objek. setItem menyimpan, getItem memuat, removeItem menghapus.', codeExample: 'localStorage.setItem("theme", "dark");\nconst theme = localStorage.getItem("theme");\n\n// Objects need JSON\nlocalStorage.setItem("user", JSON.stringify(user));\nconst saved = JSON.parse(localStorage.getItem("user"));\n\nlocalStorage.removeItem("theme");\nlocalStorage.clear();' },
            { type: 'fill-blank', instruction: 'Simpan ke localStorage:', codeTemplate: 'localStorage.__BLANK__("key", "value");', answer: 'setItem', hint: 'Method untuk menyimpan nilai' },
            { type: 'quiz', question: 'Kapan localStorage kedaluwarsa?', options: ['Setelah 1 jam', 'Saat tab ditutup', 'Saat browser ditutup', 'Tidak pernah (sampai dihapus)'], correctIndex: 3, explanation: 'localStorage bertahan sampai dihapus secara eksplisit.' },
        ],
    },
    {
        id: 'js-40', title: 'Class', description: 'Pemrograman berorientasi objek',
        slides: [
            { type: 'theory', title: 'Class', content: 'Class adalah cetak biru untuk objek. constructor() menginisialisasi. Method mendefinisikan perilaku. Gunakan "new" untuk membuat instance.', codeExample: 'class Animal {\n  constructor(name, sound) {\n    this.name = name;\n    this.sound = sound;\n  }\n  speak() {\n    return `${this.name} says ${this.sound}!`;\n  }\n}\nconst dog = new Animal("Rex", "Woof");\ndog.speak(); // "Rex says Woof!"' },
            { type: 'fill-blank', instruction: 'Buat sebuah instance:', codeTemplate: 'const cat = __BLANK__ Animal("Kitty", "Meow");', answer: 'new', hint: 'Membuat instance baru' },
            { type: 'quiz', question: 'Apa yang dilakukan constructor?', options: ['Menghancurkan', 'Menginisialisasi', 'Menyalin', 'Memvalidasi'], correctIndex: 1, explanation: 'constructor() berjalan otomatis saat membuat instance baru.' },
        ],
    },
    {
        id: 'js-41', title: 'Inheritance', description: 'Memperluas class',
        slides: [
            { type: 'theory', title: 'Pewarisan Class', content: 'extends membuat class anak. super() memanggil constructor parent. Override method di class anak.', codeExample: 'class Animal {\n  constructor(name) { this.name = name; }\n  speak() { return `${this.name} makes a sound`; }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n  speak() { return `${this.name} barks!`; }\n}' },
            { type: 'fill-blank', instruction: 'Panggil constructor parent:', codeTemplate: 'constructor(name) { __BLANK__(name); }', answer: 'super', hint: 'Merujuk ke class parent' },
            { type: 'quiz', question: 'Apa yang dilakukan extends?', options: ['Menyalin', 'Membuat pewarisan', 'Menghapus', 'Menggabungkan'], correctIndex: 1, explanation: 'extends membuat pewarisan — anak mendapat properti dan method parent.' },
        ],
    },
    {
        id: 'js-42', title: 'Optional Chaining & Nullish Coalescing', description: 'Akses properti yang aman',
        slides: [
            { type: 'theory', title: 'Operator Keamanan', content: '?. mengakses properti bersarang dengan aman (undefined bukan error). ?? menyediakan default hanya untuk null/undefined (tidak seperti || yang menangkap 0 dan "").', codeExample: 'user?.address?.city;  // safe access\nuser?.phone?.number;  // undefined, no error\n\nconst name = null ?? "Guest";  // "Guest"\nconst count = 0 ?? 42;        // 0 (keeps 0!)\nconst count2 = 0 || 42;       // 42 (bad!)' },
            { type: 'fill-blank', instruction: 'Akses properti yang aman:', codeTemplate: 'const city = user__BLANK__address?.city;', answer: '?.', hint: 'Operator optional chaining' },
            { type: 'quiz', question: 'Apa yang dikembalikan ?? jika sisi kiri adalah 0?', options: ['Sisi kanan', '0 (tetap dipertahankan)', 'null', 'undefined'], correctIndex: 1, explanation: '?? hanya terpicu untuk null/undefined, BUKAN untuk 0 atau "".' },
        ],
    },
    {
        id: 'js-43', title: 'Trik Array & Objek', description: 'Pola pro',
        slides: [
            { type: 'theory', title: 'Pola Sehari-hari', content: 'Object.keys/values/entries untuk iterasi. Set untuk nilai unik. Array.from untuk konversi. Chaining method untuk data pipeline.', codeExample: 'Object.keys({a:1, b:2});  // ["a","b"]\nObject.values({a:1, b:2}); // [1, 2]\n\n// Unique values\nconst unique = [...new Set([1,1,2,3,3])]; // [1,2,3]\n\n// Chain\nconst result = users\n  .filter(u => u.active)\n  .map(u => u.name)\n  .sort();' },
            { type: 'fill-blank', instruction: 'Dapatkan key objek:', codeTemplate: 'const keys = Object.__BLANK__(user);', answer: 'keys', hint: 'Mengembalikan array nama properti' },
            { type: 'quiz', question: 'Hapus duplikat dari array?', options: ['filter()', 'Set()', '[...new Set(arr)]', 'unique()'], correctIndex: 2, explanation: '[...new Set(arr)] menghapus semua duplikat.' },
        ],
    },
    {
        id: 'js-44', title: 'Debugging', description: 'Menemukan dan memperbaiki bug',
        slides: [
            { type: 'theory', title: 'Alat Debugging', content: 'console.log untuk pengecekan cepat. console.table untuk array/objek. debugger menjeda eksekusi. Browser DevTools untuk debugging langkah demi langkah.', codeExample: 'console.log("Value:", x);\nconsole.table(users);  // nice table format\nconsole.warn("Warning!");\nconsole.error("Error!");\nconsole.time("timer");\n// ... code ...\nconsole.timeEnd("timer"); // shows duration\n\n// Pause execution\ndebugger; // opens DevTools' },
            { type: 'quiz', question: 'Apa yang ditampilkan console.table?', options: ['Teks biasa', 'Tabel terformat', 'Alert', 'Tidak ada'], correctIndex: 1, explanation: 'console.table menampilkan array/objek sebagai tabel terformat di DevTools.' },
            { type: 'fill-blank', instruction: 'Jeda eksekusi untuk debugging:', codeTemplate: '__BLANK__; // opens DevTools', answer: 'debugger', hint: 'Kata kunci yang memicu breakpoint' },
        ],
    },
    {
        id: 'js-45', title: 'Best Practice JavaScript', description: 'Menulis kode kualitas produksi',
        slides: [
            { type: 'theory', title: 'Best Practice', content: 'Gunakan const secara default, let saat dibutuhkan, jangan pernah var. Selalu ===. Tangani error dengan try/catch. Nama bermakna. Fungsi kecil. Hindari global.', codeExample: '// ✅ Good\nconst MAX_RETRIES = 3;\nconst fetchUser = async (id) => {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    if (!res.ok) throw new Error("Not found");\n    return await res.json();\n  } catch (err) {\n    console.error(err);\n    return null;\n  }\n};' },
            { type: 'quiz', question: 'Best practice?', options: ['var x = 5', 'let x = 5', 'const x = 5', 'x = 5'], correctIndex: 2, explanation: 'Gunakan const secara default. Hanya let saat reassign. Jangan pernah var.' },
            { type: 'fill-blank', instruction: 'Gunakan kesamaan ketat:', codeTemplate: 'if (status __BLANK__ "active") { ... }', answer: '===', hint: 'Selalu kesamaan ketat' },
        ],
    },
];
