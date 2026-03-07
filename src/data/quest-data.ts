/**
 * Daily Quest System — Quest Bank & Daily Picker
 *
 * Rules:
 * - Quest hanya muncul jika user sudah 100% menyelesaikan materi bahasa tertentu
 * - PHP dikecualikan — progress PHP tidak mempengaruhi quest
 * - Tier: html → html+css → html+css+js
 * - Quest berbeda setiap hari (deterministic berdasarkan tanggal)
 * - Hari Sabtu = quest lebih sulit (Tantangan Spesial)
 */

export type QuestType = 'quiz' | 'fill-blank' | 'drag-drop';

export type QuestTier = 'html' | 'html+css' | 'html+css+js';

export interface QuestQuiz {
    type: 'quiz';
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface QuestFillBlank {
    type: 'fill-blank';
    instruction: string;
    codeTemplate: string;
    answer: string;
    hint: string;
}

export interface QuestDragDrop {
    type: 'drag-drop';
    instruction: string;
    tokens: string[];
    correctOrder: string[];
    hint: string;
}

export type Quest = (QuestQuiz | QuestFillBlank | QuestDragDrop) & {
    id: string;
    tier: QuestTier;
    title: string;
    difficulty: 'normal' | 'saturday';
    xpReward: number;
};

// ============================================================
// QUEST BANK — HTML Only
// ============================================================
const htmlQuests: Quest[] = [
    // ---- Normal ----
    {
        id: 'html-n01', tier: 'html', title: 'Atribut Global HTML', difficulty: 'normal', xpReward: 20,
        type: 'quiz',
        question: 'Atribut mana yang bisa digunakan pada SEMUA elemen HTML?',
        options: ['href', 'src', 'class', 'action'],
        correctIndex: 2,
        explanation: '`class` adalah atribut global yang bisa dipakai di semua elemen HTML. `href` hanya untuk <a>, `src` untuk <img>/<script>, `action` untuk <form>.',
    },
    {
        id: 'html-n02', tier: 'html', title: 'Semantic HTML', difficulty: 'normal', xpReward: 20,
        type: 'quiz',
        question: 'Elemen mana yang paling tepat untuk menandai navigasi utama website?',
        options: ['<div id="nav">', '<nav>', '<header>', '<menu>'],
        correctIndex: 1,
        explanation: '<nav> adalah elemen semantik yang khusus untuk navigasi utama. Lebih baik daripada <div> biasa karena membantu aksesibilitas.',
    },
    {
        id: 'html-n03', tier: 'html', title: 'Tabel HTML', difficulty: 'normal', xpReward: 20,
        type: 'fill-blank',
        instruction: 'Lengkapi kode untuk membuat header tabel:',
        codeTemplate: '<table>\n  <___>\n    <tr>\n      <th>Nama</th>\n      <th>Umur</th>\n    </tr>\n  </___>\n</table>',
        answer: 'thead',
        hint: 'Elemen yang membungkus baris header tabel',
    },
    {
        id: 'html-n04', tier: 'html', title: 'Form Input', difficulty: 'normal', xpReward: 20,
        type: 'quiz',
        question: 'Tipe input mana yang menampilkan kalender tanggal di browser modern?',
        options: ['text', 'datetime', 'date', 'calendar'],
        correctIndex: 2,
        explanation: 'Input type="date" menampilkan date picker native di browser modern. "datetime" sudah deprecated, gunakan "datetime-local".',
    },
    {
        id: 'html-n05', tier: 'html', title: 'Meta Tags', difficulty: 'normal', xpReward: 20,
        type: 'fill-blank',
        instruction: 'Lengkapi meta tag untuk mengatur viewport di perangkat mobile:',
        codeTemplate: '<meta name="___" content="width=device-width, initial-scale=1.0">',
        answer: 'viewport',
        hint: 'Nama meta tag yang mengontrol skala tampilan di mobile',
    },
    {
        id: 'html-n06', tier: 'html', title: 'HTML Entities', difficulty: 'normal', xpReward: 20,
        type: 'quiz',
        question: 'Entity HTML mana yang menampilkan simbol copyright ©?',
        options: ['&amp;copy;', '&amp;copyright;', '&amp;reg;', '&amp;trade;'],
        correctIndex: 0,
        explanation: '&copy; menampilkan simbol ©. &reg; untuk ®, &trade; untuk ™.',
    },
    {
        id: 'html-n07', tier: 'html', title: 'Elemen Multimedia', difficulty: 'normal', xpReward: 20,
        type: 'drag-drop',
        instruction: 'Susun tag untuk menyisipkan video dengan fallback teks:',
        tokens: ['</video>', '<source src="video.mp4" type="video/mp4">', '<video controls>', 'Browser tidak mendukung video.'],
        correctOrder: ['<video controls>', '<source src="video.mp4" type="video/mp4">', 'Browser tidak mendukung video.', '</video>'],
        hint: 'Video tag membungkus source dan teks fallback',
    },
    {
        id: 'html-n08', tier: 'html', title: 'Data Attributes', difficulty: 'normal', xpReward: 20,
        type: 'fill-blank',
        instruction: 'Tambahkan custom data attribute untuk menyimpan ID produk:',
        codeTemplate: '<div ___-product-id="12345">Produk</div>',
        answer: 'data',
        hint: 'Awalan untuk custom attribute di HTML5',
    },
    {
        id: 'html-n09', tier: 'html', title: 'Heading Hierarchy', difficulty: 'normal', xpReward: 20,
        type: 'quiz',
        question: 'Berapa jumlah level heading yang tersedia di HTML?',
        options: ['4', '5', '6', '8'],
        correctIndex: 2,
        explanation: 'HTML memiliki 6 level heading: <h1> sampai <h6>. <h1> paling penting, <h6> paling kecil.',
    },
    {
        id: 'html-n10', tier: 'html', title: 'Elemen <details>', difficulty: 'normal', xpReward: 20,
        type: 'drag-drop',
        instruction: 'Susun elemen accordion yang bisa dibuka/tutup tanpa JavaScript:',
        tokens: ['</details>', '<summary>Klik untuk buka</summary>', '<details>', '<p>Konten tersembunyi di sini.</p>'],
        correctOrder: ['<details>', '<summary>Klik untuk buka</summary>', '<p>Konten tersembunyi di sini.</p>', '</details>'],
        hint: '<details> membungkus <summary> dan konten',
    },
    {
        id: 'html-n11', tier: 'html', title: 'Atribut Alt', difficulty: 'normal', xpReward: 20,
        type: 'quiz',
        question: 'Mengapa atribut `alt` pada <img> penting?',
        options: ['Menambah style gambar', 'Untuk SEO dan aksesibilitas screen reader', 'Menentukan ukuran gambar', 'Membuat gambar responsive'],
        correctIndex: 1,
        explanation: 'Atribut alt memberikan teks alternatif untuk screen reader dan SEO. Juga ditampilkan saat gambar gagal dimuat.',
    },
    {
        id: 'html-n12', tier: 'html', title: 'Ordered List Type', difficulty: 'normal', xpReward: 20,
        type: 'fill-blank',
        instruction: 'Buat ordered list yang dimulai dari huruf A:',
        codeTemplate: '<ol type="___">\n  <li>Item pertama</li>\n  <li>Item kedua</li>\n</ol>',
        answer: 'A',
        hint: 'Tipe apa untuk membuat list berurutan dengan huruf kapital?',
    },
    {
        id: 'html-n13', tier: 'html', title: 'Iframe', difficulty: 'normal', xpReward: 20,
        type: 'quiz',
        question: 'Apa fungsi utama elemen <iframe>?',
        options: ['Membuat frame foto', 'Menyematkan halaman web lain di dalam halaman kita', 'Membuat border', 'Menambah animasi'],
        correctIndex: 1,
        explanation: '<iframe> digunakan untuk menyematkan dokumen HTML lain ke dalam halaman, seperti embed YouTube atau Google Maps.',
    },
    {
        id: 'html-n14', tier: 'html', title: 'Fieldset & Legend', difficulty: 'normal', xpReward: 20,
        type: 'drag-drop',
        instruction: 'Susun elemen form yang dikelompokkan dengan label grup:',
        tokens: ['</fieldset>', '<legend>Data Pribadi</legend>', '<fieldset>', '<input type="text" name="nama">'],
        correctOrder: ['<fieldset>', '<legend>Data Pribadi</legend>', '<input type="text" name="nama">', '</fieldset>'],
        hint: '<fieldset> membungkus <legend> dan input',
    },
    {
        id: 'html-n15', tier: 'html', title: 'Canvas vs SVG', difficulty: 'normal', xpReward: 20,
        type: 'quiz',
        question: 'Apa perbedaan utama antara <canvas> dan <svg>?',
        options: ['Canvas untuk vektor, SVG untuk bitmap', 'Canvas berbasis pixel, SVG berbasis vektor', 'Keduanya sama saja', 'SVG hanya untuk animasi'],
        correctIndex: 1,
        explanation: '<canvas> menggambar grafik berbasis pixel (bitmap) via JavaScript. <svg> menggunakan markup XML untuk grafik vektor yang bisa di-scale tanpa blur.',
    },
    // ---- Saturday (harder) ----
    {
        id: 'html-s01', tier: 'html', title: 'Web Components', difficulty: 'saturday', xpReward: 50,
        type: 'quiz',
        question: 'Elemen mana yang digunakan untuk mendefinisikan template yang bisa digunakan ulang tanpa di-render langsung?',
        options: ['<div hidden>', '<template>', '<script type="text/template">', '<noscript>'],
        correctIndex: 1,
        explanation: '<template> berisi markup yang tidak di-render langsung. Kontennya bisa di-clone dan dimasukkan ke DOM via JavaScript.',
    },
    {
        id: 'html-s02', tier: 'html', title: 'ARIA Roles', difficulty: 'saturday', xpReward: 50,
        type: 'fill-blank',
        instruction: 'Tambahkan ARIA role yang tepat untuk tombol custom yang dibuat dari <div>:',
        codeTemplate: '<div ___="button" tabindex="0" onclick="handleClick()">Klik saya</div>',
        answer: 'role',
        hint: 'Atribut untuk memberitahu screen reader tentang peran elemen',
    },
    {
        id: 'html-s03', tier: 'html', title: 'Picture Element', difficulty: 'saturday', xpReward: 50,
        type: 'drag-drop',
        instruction: 'Susun elemen <picture> untuk gambar responsive dengan fallback:',
        tokens: ['</picture>', '<source media="(min-width: 800px)" srcset="large.jpg">', '<picture>', '<img src="small.jpg" alt="Foto">', '<source media="(min-width: 400px)" srcset="medium.jpg">'],
        correctOrder: ['<picture>', '<source media="(min-width: 800px)" srcset="large.jpg">', '<source media="(min-width: 400px)" srcset="medium.jpg">', '<img src="small.jpg" alt="Foto">', '</picture>'],
        hint: 'Source dari lebar terbesar dulu, <img> sebagai fallback terakhir',
    },
    {
        id: 'html-s04', tier: 'html', title: 'Content Security', difficulty: 'saturday', xpReward: 50,
        type: 'quiz',
        question: 'Atribut mana pada <iframe> yang mencegah iframe menjalankan script dan mengakses cookie halaman induk?',
        options: ['security="high"', 'sandbox', 'restricted', 'safe-mode'],
        correctIndex: 1,
        explanation: 'Atribut sandbox pada iframe memberi batasan keamanan. Tanpa nilai tambahan, iframe tidak bisa menjalankan script, submit form, atau mengakses cookie parent.',
    },
    {
        id: 'html-s05', tier: 'html', title: 'Microdata', difficulty: 'saturday', xpReward: 50,
        type: 'fill-blank',
        instruction: 'Lengkapi microdata untuk Schema.org Product:',
        codeTemplate: '<div itemscope ___="https://schema.org/Product">\n  <span itemprop="name">Laptop</span>\n</div>',
        answer: 'itemtype',
        hint: 'Atribut untuk menentukan tipe schema microdata',
    },
    {
        id: 'html-s06', tier: 'html', title: 'Dialog Element', difficulty: 'saturday', xpReward: 50,
        type: 'quiz',
        question: 'Method JavaScript mana yang menampilkan elemen <dialog> sebagai modal (dengan backdrop)?',
        options: ['dialog.open()', 'dialog.show()', 'dialog.showModal()', 'dialog.display()'],
        correctIndex: 2,
        explanation: 'showModal() menampilkan dialog sebagai modal dengan backdrop gelap dan mencegah interaksi di luar dialog. show() menampilkan tanpa backdrop.',
    },
    {
        id: 'html-s07', tier: 'html', title: 'Loading Strategy', difficulty: 'saturday', xpReward: 50,
        type: 'quiz',
        question: 'Apa efek dari atribut loading="lazy" pada elemen <img>?',
        options: ['Gambar dimuat lebih lambat dengan animasi', 'Gambar dimuat hanya saat mendekati viewport', 'Gambar ditampilkan dengan resolusi rendah dulu', 'Gambar dimuat setelah semua CSS selesai'],
        correctIndex: 1,
        explanation: 'loading="lazy" menunda pemuatan gambar hingga mendekati viewport pengguna. Ini menghemat bandwidth dan mempercepat initial page load.',
    },
];

// ============================================================
// QUEST BANK — HTML + CSS
// ============================================================
const htmlCssQuests: Quest[] = [
    // ---- Normal ----
    {
        id: 'hc-n01', tier: 'html+css', title: 'Flexbox Direction', difficulty: 'normal', xpReward: 25,
        type: 'quiz',
        question: 'Properti flex-direction mana yang membuat item tersusun dari bawah ke atas?',
        options: ['row', 'column', 'column-reverse', 'row-reverse'],
        correctIndex: 2,
        explanation: 'column-reverse membuat flex items tersusun dari bawah ke atas. column dari atas ke bawah, row dari kiri ke kanan.',
    },
    {
        id: 'hc-n02', tier: 'html+css', title: 'CSS Grid Area', difficulty: 'normal', xpReward: 25,
        type: 'fill-blank',
        instruction: 'Lengkapi CSS Grid untuk menempatkan header di seluruh kolom:',
        codeTemplate: '.header {\n  grid-column: 1 / ___;\n}',
        answer: '-1',
        hint: 'Nilai yang berarti "sampai kolom terakhir" di CSS Grid',
    },
    {
        id: 'hc-n03', tier: 'html+css', title: 'Pseudo Element', difficulty: 'normal', xpReward: 25,
        type: 'quiz',
        question: 'Pseudo-element mana yang menambahkan konten sebelum isi elemen?',
        options: ['::after', '::before', '::first-line', '::marker'],
        correctIndex: 1,
        explanation: '::before menyisipkan generated content sebelum konten elemen. Perlu properti `content` untuk bekerja.',
    },
    {
        id: 'hc-n04', tier: 'html+css', title: 'CSS Specificity', difficulty: 'normal', xpReward: 25,
        type: 'quiz',
        question: 'Selector mana yang punya specificity paling tinggi?',
        options: ['.menu .item', '#nav .item', 'nav ul li a', 'body .menu .item.active'],
        correctIndex: 1,
        explanation: '#nav .item (1-1-0) lebih tinggi dari yang lain karena ID selector (#) bernilai 100. Class selector (.) bernilai 10, elemen bernilai 1.',
    },
    {
        id: 'hc-n05', tier: 'html+css', title: 'Transform Origin', difficulty: 'normal', xpReward: 25,
        type: 'fill-blank',
        instruction: 'Buat rotasi dimulai dari pojok kiri atas:',
        codeTemplate: '.box {\n  transform: rotate(45deg);\n  transform-origin: ___ ___;\n}',
        answer: 'top left',
        hint: 'Dua kata: posisi vertikal dan horizontal',
    },
    {
        id: 'hc-n06', tier: 'html+css', title: 'CSS Variables', difficulty: 'normal', xpReward: 25,
        type: 'drag-drop',
        instruction: 'Susun kode untuk mendefinisikan dan menggunakan CSS variable:',
        tokens: ['color: var(--primary);', ':root {', '}', '--primary: #6DD5C4;', '.btn {', '}'],
        correctOrder: [':root {', '--primary: #6DD5C4;', '}', '.btn {', 'color: var(--primary);', '}'],
        hint: 'Define di :root dulu, pakai dengan var()',
    },
    {
        id: 'hc-n07', tier: 'html+css', title: 'Responsive Breakpoint', difficulty: 'normal', xpReward: 25,
        type: 'fill-blank',
        instruction: 'Lengkapi media query untuk layar tablet (minimal 768px):',
        codeTemplate: '@media (___-width: 768px) {\n  .container { padding: 2rem; }\n}',
        answer: 'min',
        hint: 'Keyword untuk "minimal" width',
    },
    {
        id: 'hc-n08', tier: 'html+css', title: 'Z-Index & Stacking', difficulty: 'normal', xpReward: 25,
        type: 'quiz',
        question: 'Apa yang harus ada agar z-index bekerja pada suatu elemen?',
        options: ['display: block', 'position selain static', 'float: left', 'overflow: hidden'],
        correctIndex: 1,
        explanation: 'z-index hanya bekerja pada elemen yang punya position: relative, absolute, fixed, atau sticky. Pada position: static (default), z-index diabaikan.',
    },
    {
        id: 'hc-n09', tier: 'html+css', title: 'Backdrop Filter', difficulty: 'normal', xpReward: 25,
        type: 'fill-blank',
        instruction: 'Buat efek blur glassmorphism pada background:',
        codeTemplate: '.glass {\n  background: rgba(255, 255, 255, 0.1);\n  ___-filter: blur(10px);\n}',
        answer: 'backdrop',
        hint: 'Filter yang berlaku pada area di belakang elemen',
    },
    {
        id: 'hc-n10', tier: 'html+css', title: 'Box Sizing', difficulty: 'normal', xpReward: 25,
        type: 'quiz',
        question: 'Dengan box-sizing: border-box, jika elemen punya width: 200px dan padding: 20px, berapa lebar total elemen?',
        options: ['240px', '200px', '220px', '160px'],
        correctIndex: 1,
        explanation: 'Dengan border-box, padding dan border termasuk dalam width yang ditentukan. Jadi lebar total tetap 200px, konten menyusut menjadi 160px.',
    },
    {
        id: 'hc-n11', tier: 'html+css', title: 'CSS Transition', difficulty: 'normal', xpReward: 25,
        type: 'drag-drop',
        instruction: 'Susun kode untuk membuat transisi warna saat hover:',
        tokens: ['background: blue;', '.btn:hover {', '}', '.btn {', 'transition: background 0.3s ease;', 'background: red;', '}'],
        correctOrder: ['.btn {', 'background: red;', 'transition: background 0.3s ease;', '}', '.btn:hover {', 'background: blue;', '}'],
        hint: 'Transition didefinisikan di state normal, perubahan di :hover',
    },
    {
        id: 'hc-n12', tier: 'html+css', title: 'Overflow Control', difficulty: 'normal', xpReward: 25,
        type: 'quiz',
        question: 'Nilai overflow mana yang menambahkan scrollbar hanya jika konten melebihi container?',
        options: ['scroll', 'hidden', 'auto', 'visible'],
        correctIndex: 2,
        explanation: 'overflow: auto menampilkan scrollbar hanya saat dibutuhkan. scroll selalu menampilkan scrollbar, hidden menyembunyikan konten berlebih.',
    },
    {
        id: 'hc-n13', tier: 'html+css', title: 'Selector Combinators', difficulty: 'normal', xpReward: 25,
        type: 'fill-blank',
        instruction: 'Pilih semua <p> yang langsung setelah <h2> (adjacent sibling):',
        codeTemplate: 'h2 ___ p {\n  margin-top: 0;\n}',
        answer: '+',
        hint: 'Combinator untuk adjacent sibling selector',
    },
    {
        id: 'hc-n14', tier: 'html+css', title: 'Clamp Function', difficulty: 'normal', xpReward: 25,
        type: 'quiz',
        question: 'Apa fungsi CSS clamp(1rem, 5vw, 3rem)?',
        options: ['Membatasi font size antara 1rem dan 3rem, dengan responsif 5vw', 'Menganimasikan ukuran', 'Menghitung rata-rata', 'Membuat gradasi ukuran'],
        correctIndex: 0,
        explanation: 'clamp(min, preferred, max) menghasilkan nilai yang tidak kurang dari min dan tidak lebih dari max, prefernya berdasarkan viewport.',
    },
    {
        id: 'hc-n15', tier: 'html+css', title: 'Aspect Ratio', difficulty: 'normal', xpReward: 25,
        type: 'fill-blank',
        instruction: 'Buat container yang selalu berbentuk persegi:',
        codeTemplate: '.square {\n  width: 100%;\n  ___-ratio: 1 / 1;\n}',
        answer: 'aspect',
        hint: 'Properti CSS modern untuk mengatur rasio lebar-tinggi',
    },
    // ---- Saturday ----
    {
        id: 'hc-s01', tier: 'html+css', title: 'CSS Grid Advanced', difficulty: 'saturday', xpReward: 60,
        type: 'fill-blank',
        instruction: 'Buat grid yang otomatis menyesuaikan jumlah kolom responsif:',
        codeTemplate: '.grid {\n  display: grid;\n  grid-template-columns: repeat(___, minmax(250px, 1fr));\n}',
        answer: 'auto-fill',
        hint: 'Keyword untuk otomatis mengisi kolom sebanyak mungkin',
    },
    {
        id: 'hc-s02', tier: 'html+css', title: 'Container Queries', difficulty: 'saturday', xpReward: 60,
        type: 'quiz',
        question: 'Apa perbedaan utama @container dari @media query?',
        options: ['@container lebih cepat', '@container mengecek ukuran parent container bukan viewport', '@container hanya untuk mobile', '@container menggantikan Flexbox'],
        correctIndex: 1,
        explanation: '@container query mengecek ukuran container parent, bukan viewport. Ini memungkinkan komponen responsif yang adaptif terhadap ruang yang tersedia.',
    },
    {
        id: 'hc-s03', tier: 'html+css', title: 'Scroll Snap', difficulty: 'saturday', xpReward: 60,
        type: 'drag-drop',
        instruction: 'Susun CSS untuk membuat carousel horizontal dengan scroll snap:',
        tokens: ['scroll-snap-type: x mandatory;', '.carousel {', 'overflow-x: auto;', '}', '.slide {', 'scroll-snap-align: start;', '}'],
        correctOrder: ['.carousel {', 'overflow-x: auto;', 'scroll-snap-type: x mandatory;', '}', '.slide {', 'scroll-snap-align: start;', '}'],
        hint: 'Container butuh scroll-snap-type, children butuh scroll-snap-align',
    },
    {
        id: 'hc-s04', tier: 'html+css', title: 'CSS Subgrid', difficulty: 'saturday', xpReward: 60,
        type: 'quiz',
        question: 'Apa yang dilakukan grid-template-columns: subgrid?',
        options: ['Membuat grid di dalam grid dengan kolom terpisah', 'Mewarisi track definitions dari parent grid', 'Menambah subkolom otomatis', 'Membagi kolom menjadi sub-bagian'],
        correctIndex: 1,
        explanation: 'subgrid membuat child grid mewarisi track definitions dari parent grid, sehingga alignment tetap konsisten antar nested grid.',
    },
    {
        id: 'hc-s05', tier: 'html+css', title: 'CSS Logical Properties', difficulty: 'saturday', xpReward: 60,
        type: 'fill-blank',
        instruction: 'Ganti margin-left dengan logical property yang mendukung RTL:',
        codeTemplate: '.box {\n  margin-___-start: 1rem;\n}',
        answer: 'inline',
        hint: 'Logical property yang setara dengan left/right direction',
    },
    {
        id: 'hc-s06', tier: 'html+css', title: 'CSS Nesting', difficulty: 'saturday', xpReward: 60,
        type: 'quiz',
        question: 'Di CSS native nesting, simbol apa yang mewakili parent selector?',
        options: ['$', '@', '&', '^'],
        correctIndex: 2,
        explanation: 'Karakter & di CSS native nesting mewakili parent selector, mirip seperti di Sass/SCSS.',
    },
    {
        id: 'hc-s07', tier: 'html+css', title: 'Has Selector', difficulty: 'saturday', xpReward: 60,
        type: 'fill-blank',
        instruction: 'Pilih <form> yang memiliki input yang sedang fokus:',
        codeTemplate: 'form:___(input:focus) {\n  border-color: blue;\n}',
        answer: 'has',
        hint: 'Pseudo-class relasional baru di CSS',
    },
];

// ============================================================
// QUEST BANK — HTML + CSS + JS
// ============================================================
const htmlCssJsQuests: Quest[] = [
    // ---- Normal ----
    {
        id: 'hcj-n01', tier: 'html+css+js', title: 'Event Delegation', difficulty: 'normal', xpReward: 30,
        type: 'quiz',
        question: 'Apa keuntungan utama menggunakan event delegation?',
        options: ['Animasi lebih halus', 'Satu event listener untuk banyak child elements', 'Mengurangi ukuran HTML', 'Menghilangkan CSS conflicts'],
        correctIndex: 1,
        explanation: 'Event delegation memanfaatkan event bubbling. Satu listener di parent bisa menangkap event dari semua child, termasuk yang ditambahkan secara dinamis.',
    },
    {
        id: 'hcj-n02', tier: 'html+css+js', title: 'querySelector', difficulty: 'normal', xpReward: 30,
        type: 'fill-blank',
        instruction: 'Ambil semua elemen dengan class "card" di dalam #container:',
        codeTemplate: 'const cards = document.___("#container .card");',
        answer: 'querySelectorAll',
        hint: 'Method DOM yang mengembalikan SEMUA elemen cocok',
    },
    {
        id: 'hcj-n03', tier: 'html+css+js', title: 'classList Toggle', difficulty: 'normal', xpReward: 30,
        type: 'quiz',
        question: 'Method mana yang menambahkan class jika belum ada, dan menghapusnya jika sudah ada?',
        options: ['classList.add()', 'classList.remove()', 'classList.toggle()', 'classList.replace()'],
        correctIndex: 2,
        explanation: 'classList.toggle() otomatis menambah class jika belum ada dan menghapus jika sudah ada. Sangat berguna untuk dark mode toggle, menu open/close, dll.',
    },
    {
        id: 'hcj-n04', tier: 'html+css+js', title: 'IntersectionObserver', difficulty: 'normal', xpReward: 30,
        type: 'quiz',
        question: 'API mana yang paling efisien untuk mendeteksi kapan elemen masuk viewport?',
        options: ['scroll event listener', 'IntersectionObserver', 'MutationObserver', 'ResizeObserver'],
        correctIndex: 1,
        explanation: 'IntersectionObserver lebih efisien dari scroll event listener karena berjalan di background thread. Cocok untuk lazy loading, animasi scroll-triggered, dll.',
    },
    {
        id: 'hcj-n05', tier: 'html+css+js', title: 'Template Literals', difficulty: 'normal', xpReward: 30,
        type: 'fill-blank',
        instruction: 'Buat HTML dinamis dengan template literal:',
        codeTemplate: 'const html = ___`<div class="card"><h3>${title}</h3><p>${desc}</p></div>`___;',
        answer: '`',
        hint: 'Karakter apa yang digunakan untuk template literal?',
    },
    {
        id: 'hcj-n06', tier: 'html+css+js', title: 'CSS Animation via JS', difficulty: 'normal', xpReward: 30,
        type: 'drag-drop',
        instruction: 'Susun kode untuk menambahkan animasi fade-in saat elemen masuk viewport:',
        tokens: ['element.classList.add("visible");', 'if (entry.isIntersecting) {', '}', 'observer.observe(element);', 'const observer = new IntersectionObserver((entries) => {', '});', 'entries.forEach(entry => {', '});'],
        correctOrder: ['const observer = new IntersectionObserver((entries) => {', 'entries.forEach(entry => {', 'if (entry.isIntersecting) {', 'element.classList.add("visible");', '}', '});', '});', 'observer.observe(element);'],
        hint: 'Buat observer → define callback → observe element',
    },
    {
        id: 'hcj-n07', tier: 'html+css+js', title: 'LocalStorage', difficulty: 'normal', xpReward: 30,
        type: 'fill-blank',
        instruction: 'Simpan preferensi tema ke localStorage:',
        codeTemplate: 'localStorage.___("theme", "dark");',
        answer: 'setItem',
        hint: 'Method localStorage untuk menyimpan data',
    },
    {
        id: 'hcj-n08', tier: 'html+css+js', title: 'Fetch API', difficulty: 'normal', xpReward: 30,
        type: 'quiz',
        question: 'Apa yang dikembalikan oleh fetch() sebelum memanggil .json()?',
        options: ['String JSON', 'Object JavaScript', 'Promise<Response>', 'Array data'],
        correctIndex: 2,
        explanation: 'fetch() mengembalikan Promise<Response>. Untuk mendapatkan data, harus memanggil .json(), .text(), atau method lainnya yang juga mengembalikan Promise.',
    },
    {
        id: 'hcj-n09', tier: 'html+css+js', title: 'Form Validation', difficulty: 'normal', xpReward: 30,
        type: 'drag-drop',
        instruction: 'Susun kode untuk validasi form sebelum submit:',
        tokens: ['e.preventDefault();', 'if (!form.checkValidity()) {', 'form.reportValidity();', 'return;', '}', 'form.addEventListener("submit", (e) => {', '});', '// submit form'],
        correctOrder: ['form.addEventListener("submit", (e) => {', 'e.preventDefault();', 'if (!form.checkValidity()) {', 'form.reportValidity();', 'return;', '}', '// submit form', '});'],
        hint: 'Prevent default → check validity → report jika invalid → submit jika valid',
    },
    {
        id: 'hcj-n10', tier: 'html+css+js', title: 'Debounce Pattern', difficulty: 'normal', xpReward: 30,
        type: 'quiz',
        question: 'Kapan sebaiknya menggunakan debounce pada event handler?',
        options: ['Pada click button', 'Pada scroll untuk parallax', 'Pada input search (ketikan user)', 'Pada halaman pertama kali load'],
        correctIndex: 2,
        explanation: 'Debounce cocok untuk search input — menunggu user selesai mengetik sebelum mengirim request. Ini mengurangi jumlah API call yang tidak perlu.',
    },
    {
        id: 'hcj-n11', tier: 'html+css+js', title: 'Dark Mode Toggle', difficulty: 'normal', xpReward: 30,
        type: 'fill-blank',
        instruction: 'Toggle dark mode dengan mengubah data attribute di HTML:',
        codeTemplate: 'document.documentElement.___("data-theme", isDark ? "dark" : "light");',
        answer: 'setAttribute',
        hint: 'Method DOM untuk mengatur atribut elemen',
    },
    {
        id: 'hcj-n12', tier: 'html+css+js', title: 'Array Methods', difficulty: 'normal', xpReward: 30,
        type: 'quiz',
        question: 'Method array mana yang mengembalikan array baru berisi elemen yang memenuhi kondisi?',
        options: ['find()', 'map()', 'filter()', 'reduce()'],
        correctIndex: 2,
        explanation: 'filter() mengembalikan array baru berisi semua elemen yang callback-nya return true. find() hanya mengembalikan elemen pertama yang cocok.',
    },
    {
        id: 'hcj-n13', tier: 'html+css+js', title: 'CSS Custom Properties via JS', difficulty: 'normal', xpReward: 30,
        type: 'fill-blank',
        instruction: 'Ubah CSS variable via JavaScript:',
        codeTemplate: 'document.documentElement.style.___("--primary-color", "#FF5733");',
        answer: 'setProperty',
        hint: 'Method style untuk mengatur CSS custom property',
    },
    {
        id: 'hcj-n14', tier: 'html+css+js', title: 'Responsive Menu', difficulty: 'normal', xpReward: 30,
        type: 'quiz',
        question: 'Apa pendekatan terbaik untuk membuat hamburger menu yang responsif?',
        options: ['Membuat dua menu terpisah', 'JS toggle class + CSS media query', 'Hanya menggunakan CSS :hover', 'JavaScript resize event saja'],
        correctIndex: 1,
        explanation: 'Kombinasi JS untuk toggle class (open/close) + CSS media query untuk menentukan kapan hamburger muncul. Ini terpisah concern dan mudah dimaintain.',
    },
    {
        id: 'hcj-n15', tier: 'html+css+js', title: 'Promise.all', difficulty: 'normal', xpReward: 30,
        type: 'quiz',
        question: 'Apa yang terjadi jika salah satu promise di Promise.all() rejected?',
        options: ['Semua promise dibatalkan', 'Hanya promise yang gagal yang diabaikan', 'Seluruh Promise.all() langsung reject', 'Menunggu promise lain selesai dulu'],
        correctIndex: 2,
        explanation: 'Promise.all() bersifat "fail-fast" — jika satu promise rejected, seluruh Promise.all() langsung rejected. Gunakan Promise.allSettled() jika ingin menunggu semua selesai.',
    },
    // ---- Saturday ----
    {
        id: 'hcj-s01', tier: 'html+css+js', title: 'Web Animation API', difficulty: 'saturday', xpReward: 75,
        type: 'fill-blank',
        instruction: 'Animasikan elemen menggunakan Web Animation API:',
        codeTemplate: 'element.___([\n  { transform: "translateY(0)" },\n  { transform: "translateY(-20px)" }\n], { duration: 500, iterations: Infinity });',
        answer: 'animate',
        hint: 'Method DOM element untuk menjalankan animasi',
    },
    {
        id: 'hcj-s02', tier: 'html+css+js', title: 'Service Worker', difficulty: 'saturday', xpReward: 75,
        type: 'quiz',
        question: 'Apa tugas utama Service Worker dalam konteks Progressive Web App?',
        options: ['Mempercepat render CSS', 'Caching resources untuk offline support', 'Menggantikan server-side rendering', 'Mengoptimalkan gambar otomatis'],
        correctIndex: 1,
        explanation: 'Service Worker berjalan di background thread dan bisa mengintercept network requests untuk caching, memungkinkan PWA bekerja offline.',
    },
    {
        id: 'hcj-s03', tier: 'html+css+js', title: 'Mutation Observer', difficulty: 'saturday', xpReward: 75,
        type: 'drag-drop',
        instruction: 'Susun kode untuk mengamati perubahan DOM pada suatu elemen:',
        tokens: ['observer.observe(targetNode, config);', 'const config = { childList: true, subtree: true };', 'const observer = new MutationObserver(callback);', 'const callback = (mutations) => { console.log(mutations); };'],
        correctOrder: ['const callback = (mutations) => { console.log(mutations); };', 'const observer = new MutationObserver(callback);', 'const config = { childList: true, subtree: true };', 'observer.observe(targetNode, config);'],
        hint: 'Callback → Observer → Config → Observe',
    },
    {
        id: 'hcj-s04', tier: 'html+css+js', title: 'Performance API', difficulty: 'saturday', xpReward: 75,
        type: 'quiz',
        question: 'API mana yang paling akurat untuk mengukur waktu eksekusi kode?',
        options: ['Date.now()', 'setTimeout()', 'performance.now()', 'console.time()'],
        correctIndex: 2,
        explanation: 'performance.now() memberikan timestamp dengan presisi tinggi (microsecond). Date.now() hanya akurat sampai millisecond dan bisa terpengaruh oleh system clock changes.',
    },
    {
        id: 'hcj-s05', tier: 'html+css+js', title: 'AbortController', difficulty: 'saturday', xpReward: 75,
        type: 'fill-blank',
        instruction: 'Batalkan fetch request menggunakan AbortController:',
        codeTemplate: 'const controller = new AbortController();\nfetch(url, { signal: controller.___ });\ncontroller.abort();',
        answer: 'signal',
        hint: 'Property AbortController yang dihubungkan ke fetch',
    },
    {
        id: 'hcj-s06', tier: 'html+css+js', title: 'Shadow DOM', difficulty: 'saturday', xpReward: 75,
        type: 'quiz',
        question: 'Apa keuntungan utama menggunakan Shadow DOM?',
        options: ['Halaman lebih cepat dimuat', 'Encapsulation — CSS dan DOM terisolasi dari halaman utama', 'Menghilangkan kebutuhan JavaScript', 'Membuat animasi lebih halus'],
        correctIndex: 1,
        explanation: 'Shadow DOM memberikan encapsulation — style dan markup di dalam shadow tree terisolasi dari document utama. Ini mencegah CSS leaking dan naming conflicts.',
    },
    {
        id: 'hcj-s07', tier: 'html+css+js', title: 'Proxy Object', difficulty: 'saturday', xpReward: 75,
        type: 'fill-blank',
        instruction: 'Buat reactive object yang mendeteksi perubahan property:',
        codeTemplate: 'const handler = {\n  set(target, prop, value) {\n    console.log(`${prop} berubah menjadi ${value}`);\n    target[prop] = value;\n    return true;\n  }\n};\nconst reactive = new ___(data, handler);',
        answer: 'Proxy',
        hint: 'Object built-in JavaScript untuk intercept operasi',
    },
];

// ============================================================
// Quest Bank Map
// ============================================================
const questBanks: Record<QuestTier, Quest[]> = {
    'html': htmlQuests,
    'html+css': htmlCssQuests,
    'html+css+js': htmlCssJsQuests,
};

// ============================================================
// Deterministic Daily Quest Picker
// ============================================================

/**
 * Hash function — menghasilkan angka dari string tanggal
 */
function dateHash(dateStr: string): number {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        const char = dateStr.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

/**
 * Determine quest tier berdasarkan progress user
 * Returns null jika tidak ada bahasa non-PHP yang 100%
 */
export function getQuestTier(progress: Record<string, { overallProgress: number }>): QuestTier | null {
    const htmlDone = progress.html?.overallProgress === 100;
    const cssDone = progress.css?.overallProgress === 100;
    const jsDone = progress.js?.overallProgress === 100;

    // PHP dikecualikan dari quest system

    if (htmlDone && cssDone && jsDone) return 'html+css+js';
    if (htmlDone && cssDone) return 'html+css';
    if (htmlDone) return 'html';

    // CSS saja atau JS saja tanpa HTML — tetap bisa quest level tersebut
    if (cssDone && jsDone) return 'html+css+js'; // fallback
    if (cssDone) return 'html+css'; // fallback
    if (jsDone) return 'html+css+js'; // fallback

    return null;
}

/**
 * Get today's daily quest based on date and tier
 * Selalu mengembalikan quest yang sama untuk tanggal yang sama (deterministic)
 * Hari Sabtu (getDay() === 6) → quest dari pool saturday
 */
export function getDailyQuest(tier: QuestTier, date?: Date): Quest | null {
    const today = date || new Date();
    const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
    const isSaturday = today.getDay() === 6;

    const allQuests = questBanks[tier];
    if (!allQuests || allQuests.length === 0) return null;

    // Filter by difficulty
    const pool = allQuests.filter(q =>
        isSaturday ? q.difficulty === 'saturday' : q.difficulty === 'normal'
    );

    if (pool.length === 0) return null;

    // Use date hash to pick quest deterministically
    const hash = dateHash(dateStr);
    const index = hash % pool.length;

    return pool[index];
}

/**
 * Check apakah hari ini adalah Saturday (untuk UI badge spesial)
 */
export function isSaturdayToday(date?: Date): boolean {
    return (date || new Date()).getDay() === 6;
}
