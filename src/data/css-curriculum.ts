import { Level } from './types';

export const cssLevels: Level[] = [
    // ===== DASAR (1-10) =====
    {
        id: 'css-1', title: 'Dasar CSS', description: 'Selektor dan properti',
        slides: [
            { type: 'theory', title: 'Apa itu CSS?', content: 'CSS mengontrol tampilan elemen HTML. Sebuah aturan CSS terdiri dari selektor dan deklarasi (pasangan properti: nilai).', codeExample: 'h1 {\n  color: blue;\n  font-size: 24px;\n}' },
            { type: 'fill-blank', instruction: 'Atur warna teks menjadi merah:', codeTemplate: 'p {\n  __BLANK__: red;\n}', answer: 'color', hint: 'Properti yang mengatur warna teks' },
            { type: 'quiz', question: 'Properti mana yang mengubah warna latar belakang?', options: ['bg-color', 'background-color', 'color-bg', 'back-color'], correctIndex: 1, explanation: 'background-color adalah properti CSS yang benar.' },
        ],
    },
    {
        id: 'css-2', title: 'Selektor', description: 'Menargetkan elemen HTML',
        slides: [
            { type: 'theory', title: 'Selektor CSS', content: 'Selektor menargetkan elemen: elemen (p), class (.nama), ID (#nama), descendant (div p), child (div > p), atribut ([type="text"]).', codeExample: '.sorotan {\n  color: yellow;\n}\n\n#header {\n  font-size: 32px;\n}\n\ndiv > p {\n  margin: 10px;\n}\n\ninput[type="email"] {\n  border: 1px solid blue;\n}' },
            { type: 'fill-blank', instruction: 'Pilih elemen dengan class "kartu":', codeTemplate: '__BLANK__ {\n  padding: 16px;\n}', answer: '.kartu', hint: 'Selektor class diawali dengan titik' },
            { type: 'quiz', question: 'Selektor mana yang memiliki spesifisitas tertinggi?', options: ['elemen', '.class', '#id', '*'], correctIndex: 2, explanation: 'Selektor ID memiliki spesifisitas tertinggi di antara ketiganya.' },
        ],
    },
    {
        id: 'css-3', title: 'Box Model', description: 'Margin, padding, border',
        slides: [
            { type: 'theory', title: 'Box Model', content: 'Setiap elemen adalah sebuah kotak: Content → Padding → Border → Margin. Gunakan box-sizing: border-box agar padding dan border termasuk dalam lebar.', codeExample: '.box {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 2px solid #333;\n  margin: 16px;\n}' },
            { type: 'drag-drop', instruction: 'Urutkan lapisan box model dari dalam ke luar:', tokens: ['Margin', 'Content', 'Border', 'Padding'], correctOrder: ['Content', 'Padding', 'Border', 'Margin'], hint: 'Content paling dalam, margin paling luar' },
            { type: 'quiz', question: 'Apa fungsi padding?', options: ['Ruang di luar border', 'Ruang di dalam border', 'Mengubah lebar border', 'Menghapus border'], correctIndex: 1, explanation: 'Padding menambah ruang antara konten dan border.' },
        ],
    },
    {
        id: 'css-4', title: 'Warna & Satuan', description: 'Sistem warna dan pengukuran',
        slides: [
            { type: 'theory', title: 'Warna & Satuan CSS', content: 'Warna: nama, hex (#FF0000), rgb(255,0,0), hsl(0,100%,50%). Satuan: px (tetap), em/rem (relatif), % (persentase), vw/vh (viewport).', codeExample: '.teks {\n  color: hsl(210, 80%, 60%);\n}\n\n.box {\n  width: 80vw;\n  font-size: 1.2rem;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}' },
            { type: 'fill-blank', instruction: 'Atur ukuran font relatif terhadap root:', codeTemplate: 'body {\n  font-size: 1.5__BLANK__;\n}', answer: 'rem', hint: 'Satuan ini relatif terhadap ukuran font elemen root' },
            { type: 'quiz', question: 'Format warna mana yang menggunakan hue, saturation, lightness?', options: ['RGB', 'HEX', 'HSL', 'CMYK'], correctIndex: 2, explanation: 'HSL menggunakan Hue, Saturation, dan Lightness.' },
        ],
    },
    {
        id: 'css-5', title: 'Tipografi', description: 'Styling teks yang indah',
        slides: [
            { type: 'theory', title: 'Font & Teks', content: 'Kontrol teks dengan font-family, font-size, font-weight, line-height, letter-spacing, text-align, text-transform, dan text-decoration.', codeExample: 'body {\n  font-family: "Inter", sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  letter-spacing: -0.02em;\n}' },
            { type: 'fill-blank', instruction: 'Atur jarak antar baris menjadi 1.5:', codeTemplate: 'p {\n  __BLANK__: 1.5;\n}', answer: 'line-height', hint: 'Mengontrol spasi antar baris teks' },
            { type: 'quiz', question: 'text-transform: uppercase melakukan apa?', options: ['Membuat teks lebih besar', 'Membuat semua huruf kapital', 'Menambah bold', 'Mengubah font'], correctIndex: 1, explanation: 'text-transform: uppercase mengubah semua teks menjadi huruf kapital.' },
        ],
    },
    {
        id: 'css-6', title: 'Flexbox', description: 'Layout satu dimensi yang fleksibel',
        slides: [
            { type: 'theory', title: 'Layout Flexbox', content: 'Atur display: flex pada kontainer. Gunakan justify-content untuk perataan sumbu utama, align-items untuk sumbu silang, dan gap untuk jarak antar item.', codeExample: '.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}' },
            { type: 'fill-blank', instruction: 'Pusatkan item secara horizontal:', codeTemplate: '.flex {\n  display: flex;\n  __BLANK__: center;\n}', answer: 'justify-content', hint: 'Meratakan item di sepanjang sumbu utama' },
            { type: 'quiz', question: 'Properti mana yang membuat item flex membungkus?', options: ['flex-wrap', 'flex-break', 'flex-overflow', 'flex-line'], correctIndex: 0, explanation: 'flex-wrap: wrap memungkinkan item mengalir ke baris berikutnya.' },
        ],
    },
    {
        id: 'css-7', title: 'CSS Grid', description: 'Layout dua dimensi',
        slides: [
            { type: 'theory', title: 'Layout Grid', content: 'Grid membuat layout 2D dengan baris dan kolom. Gunakan grid-template-columns, grid-template-rows, gap, dan tempatkan child dengan grid-column/grid-row.', codeExample: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.lebar {\n  grid-column: span 2;\n}' },
            { type: 'fill-blank', instruction: 'Buat grid 3 kolom:', codeTemplate: '.grid {\n  display: grid;\n  grid-template-columns: __BLANK__(3, 1fr);\n}', answer: 'repeat', hint: 'Fungsi ini mengulang pola' },
            { type: 'quiz', question: 'Apa arti 1fr?', options: ['1 frame', '1 fraksi dari ruang yang tersedia', '1 baris penuh', '1 rasio font'], correctIndex: 1, explanation: '1fr adalah satu fraksi dari ruang yang tersedia di grid.' },
        ],
    },
    {
        id: 'css-8', title: 'Positioning', description: 'Mengontrol penempatan elemen',
        slides: [
            { type: 'theory', title: 'CSS Position', content: 'Nilai position: static (default), relative (offset dari posisi normal), absolute (relatif terhadap parent yang positioned), fixed (terhadap viewport), sticky (hybrid).', codeExample: '.modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n}' },
            { type: 'fill-blank', instruction: 'Kunci elemen ke viewport:', codeTemplate: '.navbar {\n  position: __BLANK__;\n  top: 0;\n}', answer: 'fixed', hint: 'Posisi ini tetap di tempat saat scroll' },
            { type: 'quiz', question: 'position: sticky melakukan apa?', options: ['Selalu di layar', 'Menempel setelah di-scroll melewatinya', 'Membuat elemen tidak terlihat', 'Menambah bayangan'], correctIndex: 1, explanation: 'Elemen sticky scroll seperti biasa lalu menempel pada threshold tertentu.' },
        ],
    },
    {
        id: 'css-9', title: 'Transisi', description: 'Perubahan properti yang halus',
        slides: [
            { type: 'theory', title: 'Transisi CSS', content: 'Transisi menganimasikan perubahan properti secara halus. Tentukan: property, duration, timing-function, dan delay. Terbaik digunakan pada hover, focus, dan active states.', codeExample: '.tombol {\n  background: #6DD5C4;\n  transition: all 0.3s ease;\n}\n\n.tombol:hover {\n  background: #4DC0AD;\n  transform: translateY(-2px);\n}' },
            { type: 'fill-blank', instruction: 'Tambahkan transisi halus:', codeTemplate: '.kartu {\n  __BLANK__: transform 0.3s ease;\n}', answer: 'transition', hint: 'Properti ini mengaktifkan perubahan halus' },
            { type: 'quiz', question: 'Fungsi timing mana yang mulai lambat, akhir cepat?', options: ['linear', 'ease-in', 'ease-out', 'ease-in-out'], correctIndex: 1, explanation: 'ease-in dimulai lambat dan semakin cepat.' },
        ],
    },
    {
        id: 'css-10', title: 'Animasi', description: 'Animasi multi-langkah yang kompleks',
        slides: [
            { type: 'theory', title: '@keyframes', content: 'Gunakan @keyframes untuk animasi multi-langkah. Terapkan dengan properti animation. Kontrol duration, iteration, direction, dan fill-mode.', codeExample: '@keyframes masuk {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.kartu {\n  animation: masuk 0.5s ease forwards;\n}' },
            { type: 'fill-blank', instruction: 'Terapkan animasi:', codeTemplate: '.el {\n  __BLANK__: bounce 1s infinite;\n}', answer: 'animation', hint: 'Properti ini menerapkan animasi keyframe' },
            { type: 'quiz', question: 'Properti mana yang dioptimasi GPU?', options: ['width, height', 'transform, opacity', 'margin, padding', 'color, background'], correctIndex: 1, explanation: 'transform dan opacity menggunakan GPU compositing untuk performa terbaik.' },
        ],
    },
    // ===== MENENGAH (11-20) =====
    {
        id: 'css-11', title: 'Desain Responsif', description: 'Menyesuaikan dengan semua layar',
        slides: [
            { type: 'theory', title: 'Media Queries', content: 'Gunakan @media queries untuk menerapkan CSS pada ukuran layar berbeda. Mobile-first: mulai dari layar kecil, tambahkan aturan untuk layar lebih besar dengan min-width breakpoints.', codeExample: '/* Mobile first */\n.grid {\n  grid-template-columns: 1fr;\n}\n\n@media (min-width: 768px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}' },
            { type: 'fill-blank', instruction: 'Terapkan CSS untuk layar 768px ke atas:', codeTemplate: '@media (min-width: __BLANK__) {\n  ...\n}', answer: '768px', hint: 'Breakpoint umum untuk tablet' },
            { type: 'quiz', question: 'Apa itu desain mobile-first?', options: ['Hanya mobile', 'Mulai dari mobile, tambah untuk lebih besar', 'Desktop dulu', 'Tanpa media queries'], correctIndex: 1, explanation: 'Mobile-first berarti menulis CSS dasar untuk layar kecil, lalu menambah aturan untuk layar lebih besar.' },
        ],
    },
    {
        id: 'css-12', title: 'Variabel CSS', description: 'Custom properties untuk penggunaan ulang',
        slides: [
            { type: 'theory', title: 'Custom Properties', content: 'Variabel CSS (--nama) menyimpan nilai. Definisikan di :root untuk scope global. Gunakan var(--nama) untuk mengakses. Sangat berguna untuk tema dan design tokens.', codeExample: ':root {\n  --primary: #6DD5C4;\n  --radius: 16px;\n}\n\n.tombol {\n  background: var(--primary);\n  border-radius: var(--radius);\n}' },
            { type: 'fill-blank', instruction: 'Gunakan variabel CSS:', codeTemplate: '.kartu {\n  background: __BLANK__(--card-bg);\n}', answer: 'var', hint: 'Fungsi ini membaca nilai custom property' },
            { type: 'quiz', question: 'Di mana variabel CSS global harus didefinisikan?', options: ['Di body', 'Di :root', 'Di head', 'Di footer'], correctIndex: 1, explanation: ':root adalah selektor tertinggi, membuat variabel tersedia di mana saja.' },
        ],
    },
    {
        id: 'css-13', title: 'Transform', description: 'Memindah, menskala, dan memutar',
        slides: [
            { type: 'theory', title: 'CSS Transform', content: 'Transform memodifikasi elemen secara visual: translate (pindah), scale (ubah ukuran), rotate (putar), skew (miringkan). Gabungkan beberapa transform dalam satu deklarasi.', codeExample: '.kartu:hover {\n  transform: translateY(-4px) scale(1.02);\n}\n\n.ikon {\n  transform: rotate(45deg);\n}\n\n.teks {\n  transform: skewX(-5deg);\n}' },
            { type: 'fill-blank', instruction: 'Pindahkan elemen ke atas 10px:', codeTemplate: '.el {\n  transform: __BLANK__(0, -10px);\n}', answer: 'translate', hint: 'Fungsi ini memindahkan elemen' },
            { type: 'quiz', question: 'Apa yang dilakukan scale(1.5)?', options: ['Memindah 1.5px', 'Menjadi 150% ukuran', 'Memutar 1.5deg', 'Mengatur opacity 1.5'], correctIndex: 1, explanation: 'scale(1.5) membuat elemen menjadi 150% dari ukuran aslinya.' },
        ],
    },
    {
        id: 'css-14', title: 'Pseudo-class & Pseudo-element', description: 'State khusus dan konten yang dihasilkan',
        slides: [
            { type: 'theory', title: 'Pseudo-class', content: ':hover, :focus, :active untuk interaksi. :first-child, :nth-child() untuk seleksi. ::before, ::after untuk konten yang dihasilkan.', codeExample: 'a:hover {\n  color: var(--primary);\n}\n\nli:nth-child(odd) {\n  background: #f8f8f8;\n}\n\n.tag::before {\n  content: "#";\n  color: var(--accent);\n}' },
            { type: 'fill-blank', instruction: 'Style setiap item list genap:', codeTemplate: 'li:__BLANK__(even) {\n  background: #f0f0f0;\n}', answer: 'nth-child', hint: 'Pseudo-class ini memilih berdasarkan posisi' },
            { type: 'quiz', question: 'Apa fungsi ::after?', options: ['Memilih sibling berikutnya', 'Menghasilkan konten setelah elemen', 'Menambah margin', 'Menghapus elemen'], correctIndex: 1, explanation: '::after membuat pseudo-element sebagai child terakhir dari elemen.' },
        ],
    },
    {
        id: 'css-15', title: 'Properti Display', description: 'Mengontrol perilaku tampilan elemen',
        slides: [
            { type: 'theory', title: 'CSS Display', content: 'Properti display mengontrol bagaimana elemen ditampilkan. Nilai umum: block (satu baris penuh), inline (mengalir dalam teks), inline-block (inline tapi bisa diatur ukuran), none (disembunyikan), flex, grid.', codeExample: '.block {\n  display: block; /* Mengambil satu baris penuh */\n}\n\n.inline {\n  display: inline; /* Mengalir dalam teks */\n}\n\n.inline-block {\n  display: inline-block;\n  width: 100px;\n  height: 50px;\n}\n\n.tersembunyi {\n  display: none; /* Disembunyikan sepenuhnya */\n}' },
            { type: 'fill-blank', instruction: 'Sembunyikan elemen sepenuhnya:', codeTemplate: '.hidden {\n  display: __BLANK__;\n}', answer: 'none', hint: 'Nilai ini menyembunyikan elemen dari layout' },
            { type: 'quiz', question: 'Apa perbedaan inline dan inline-block?', options: ['Tidak ada', 'inline-block bisa diatur width/height', 'inline lebih cepat', 'inline-block hanya untuk gambar'], correctIndex: 1, explanation: 'Elemen inline tidak bisa diatur width/height, sedangkan inline-block bisa.' },
        ],
    },
    {
        id: 'css-16', title: 'Float & Clear', description: 'Layout tradisional',
        slides: [
            { type: 'theory', title: 'Float & Clear', content: 'Float membuat elemen mengambang ke kiri atau kanan, memungkinkan teks mengalir di sekitarnya. Clear menghentikan efek float. Meskipun Flexbox/Grid lebih modern, float masih berguna untuk teks mengalir di sekitar gambar.', codeExample: '.gambar-kiri {\n  float: left;\n  margin-right: 16px;\n  margin-bottom: 8px;\n}\n\n.clear {\n  clear: both; /* Hentikan efek float */\n}\n\n/* Clearfix modern */\n.container::after {\n  content: "";\n  display: table;\n  clear: both;\n}' },
            { type: 'fill-blank', instruction: 'Buat gambar mengambang ke kiri:', codeTemplate: '.foto {\n  __BLANK__: left;\n  margin-right: 12px;\n}', answer: 'float', hint: 'Properti ini membuat elemen mengambang' },
            { type: 'quiz', question: 'Kapan sebaiknya menggunakan float daripada flexbox?', options: ['Selalu', 'Saat teks perlu mengalir di sekitar gambar', 'Float lebih cepat', 'Untuk layout utama'], correctIndex: 1, explanation: 'Float masih ideal untuk membuat teks mengalir / wrap di sekitar gambar atau elemen lain.' },
        ],
    },
    {
        id: 'css-17', title: 'Overflow', description: 'Menangani konten yang meluap',
        slides: [
            { type: 'theory', title: 'CSS Overflow', content: 'Overflow mengontrol apa yang terjadi saat konten lebih besar dari kontainernya. Nilai: visible (default, meluap), hidden (dipotong), scroll (selalu ada scrollbar), auto (scrollbar saat perlu).', codeExample: '.box {\n  width: 200px;\n  height: 100px;\n  overflow: hidden; /* Potong konten berlebih */\n}\n\n.scroll-x {\n  overflow-x: auto; /* Scroll horizontal */\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.scroll-area {\n  max-height: 300px;\n  overflow-y: auto; /* Scroll vertikal saat perlu */\n}' },
            { type: 'fill-blank', instruction: 'Tambahkan scroll saat konten berlebih:', codeTemplate: '.panel {\n  max-height: 200px;\n  overflow-y: __BLANK__;\n}', answer: 'auto', hint: 'Nilai ini menambah scrollbar hanya saat diperlukan' },
            { type: 'quiz', question: 'Apa perbedaan overflow: scroll dan auto?', options: ['Tidak ada', 'scroll selalu tampilkan scrollbar, auto hanya saat perlu', 'auto lebih cepat', 'scroll hanya vertikal'], correctIndex: 1, explanation: 'scroll selalu menampilkan scrollbar, sedangkan auto hanya menampilkannya saat konten meluap.' },
        ],
    },
    {
        id: 'css-18', title: 'Opacity & Visibility', description: 'Mengontrol keterlihatan elemen',
        slides: [
            { type: 'theory', title: 'Opacity & Visibility', content: 'opacity mengatur transparansi (0 = transparan, 1 = solid). visibility: hidden menyembunyikan elemen tapi tetap menempati ruang. display: none menghilangkan elemen dari layout sepenuhnya.', codeExample: '.transparan {\n  opacity: 0.5; /* 50% transparan */\n}\n\n.tersembunyi {\n  visibility: hidden; /* Tersembunyi, tapi tetap di layout */\n}\n\n.hilang {\n  display: none; /* Tidak ada di layout */\n}\n\n.hover-efek {\n  opacity: 0.7;\n  transition: opacity 0.3s;\n}\n.hover-efek:hover {\n  opacity: 1;\n}' },
            { type: 'fill-blank', instruction: 'Buat elemen 30% transparan:', codeTemplate: '.overlay {\n  __BLANK__: 0.7;\n}', answer: 'opacity', hint: 'Properti ini mengatur level transparansi' },
            { type: 'quiz', question: 'Apa perbedaan visibility: hidden dan display: none?', options: ['Tidak ada', 'visibility: hidden tetap menempati ruang', 'display: none tetap menempati ruang', 'Keduanya sama saja'], correctIndex: 1, explanation: 'visibility: hidden menyembunyikan elemen tapi tetap mempertahankan ruangnya di layout.' },
        ],
    },
    {
        id: 'css-19', title: 'Z-index & Stacking', description: 'Menumpuk elemen secara vertikal',
        slides: [
            { type: 'theory', title: 'Z-index & Stacking Context', content: 'z-index mengontrol urutan tumpukan elemen. Nilai lebih tinggi = di atas. Hanya bekerja pada elemen yang positioned (relative, absolute, fixed, sticky). Stacking context baru terbentuk oleh transform, opacity < 1, dll.', codeExample: '.belakang {\n  position: relative;\n  z-index: 1;\n}\n\n.depan {\n  position: relative;\n  z-index: 10;\n}\n\n.modal {\n  position: fixed;\n  z-index: 1000; /* Di atas segalanya */\n}\n\n.overlay {\n  position: fixed;\n  z-index: 999;\n  background: rgba(0, 0, 0, 0.5);\n}' },
            { type: 'fill-blank', instruction: 'Taruh modal di atas semua elemen:', codeTemplate: '.modal {\n  position: fixed;\n  __BLANK__: 1000;\n}', answer: 'z-index', hint: 'Properti ini mengontrol urutan tumpukan' },
            { type: 'quiz', question: 'z-index hanya bekerja pada elemen yang...?', options: ['Memiliki warna', 'Memiliki position selain static', 'Memiliki border', 'Bertipe inline'], correctIndex: 1, explanation: 'z-index hanya berpengaruh pada elemen yang memiliki position: relative, absolute, fixed, atau sticky.' },
        ],
    },
    {
        id: 'css-20', title: 'Gradien CSS', description: 'Transisi warna yang indah',
        slides: [
            { type: 'theory', title: 'Gradien', content: 'CSS mendukung linear-gradient (garis lurus), radial-gradient (lingkaran), dan conic-gradient (kerucut). Bisa digunakan sebagai background dan digabungkan dengan warna solid.', codeExample: '.linear {\n  background: linear-gradient(135deg, #6DD5C4, #7EB8F0);\n}\n\n.radial {\n  background: radial-gradient(circle, #F5C87A, #F06D5B);\n}\n\n.conic {\n  background: conic-gradient(#6DD5C4, #7EB8F0, #F5C87A, #6DD5C4);\n}\n\n.multi {\n  background: linear-gradient(\n    to right,\n    #F06D5B 0%, #F5C87A 25%,\n    #8CD790 50%, #7EB8F0 75%,\n    #9B8FE6 100%\n  );\n}' },
            { type: 'fill-blank', instruction: 'Buat gradien dari hijau ke biru:', codeTemplate: '.header {\n  background: __BLANK__(to right, #6DD5C4, #7EB8F0);\n}', answer: 'linear-gradient', hint: 'Fungsi gradient dengan arah garis lurus' },
            { type: 'quiz', question: 'Apa perbedaan linear-gradient dan radial-gradient?', options: ['Tidak ada', 'Linear garis lurus, radial lingkaran', 'Radial lebih cepat', 'Linear hanya 2 warna'], correctIndex: 1, explanation: 'Linear menghasilkan gradien garis lurus, sedangkan radial menghasilkan gradien berbentuk lingkaran.' },
        ],
    },
    // ===== LANJUTAN (21-30) =====
    {
        id: 'css-21', title: 'Bayangan (Shadows)', description: 'Efek bayangan pada elemen dan teks',
        slides: [
            { type: 'theory', title: 'Box Shadow & Text Shadow', content: 'box-shadow menambah bayangan pada elemen (offset-x, offset-y, blur, spread, warna). text-shadow menambah bayangan pada teks. Keduanya bisa ditumpuk untuk efek kompleks.', codeExample: '.kartu {\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n\n.kartu:hover {\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);\n}\n\n.inset {\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.judul {\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n/* Multi shadow */\n.glow {\n  box-shadow:\n    0 0 10px #6DD5C4,\n    0 0 30px rgba(109, 213, 196, 0.3);\n}' },
            { type: 'fill-blank', instruction: 'Tambahkan bayangan halus ke kartu:', codeTemplate: '.kartu {\n  __BLANK__: 0 4px 12px rgba(0,0,0,0.1);\n}', answer: 'box-shadow', hint: 'Properti ini menambah bayangan pada elemen' },
            { type: 'quiz', question: 'Apa yang dilakukan keyword "inset" pada box-shadow?', options: ['Membuat bayangan lebih besar', 'Membuat bayangan ke dalam elemen', 'Menghapus bayangan', 'Menambah blur'], correctIndex: 1, explanation: 'inset membuat bayangan muncul di dalam elemen, bukan di luarnya.' },
        ],
    },
    {
        id: 'css-22', title: 'Filter CSS', description: 'Efek visual seperti Photoshop',
        slides: [
            { type: 'theory', title: 'CSS Filter', content: 'Properti filter menerapkan efek grafis: blur(), brightness(), contrast(), grayscale(), hue-rotate(), saturate(), sepia(), drop-shadow(). backdrop-filter menerapkan efek pada area di belakang elemen.', codeExample: '.blur {\n  filter: blur(5px);\n}\n\n.hitam-putih {\n  filter: grayscale(100%);\n}\n\n.vintage {\n  filter: sepia(80%) contrast(1.2);\n}\n\n.glass {\n  backdrop-filter: blur(20px);\n  background: rgba(255, 255, 255, 0.2);\n}\n\nimg:hover {\n  filter: brightness(1.1) contrast(1.05);\n  transition: filter 0.3s;\n}' },
            { type: 'fill-blank', instruction: 'Buat efek blur pada latar belakang:', codeTemplate: '.kaca {\n  __BLANK__: blur(15px);\n  background: rgba(255,255,255,0.3);\n}', answer: 'backdrop-filter', hint: 'Properti ini menerapkan filter pada area di belakang elemen' },
            { type: 'quiz', question: 'Properti mana yang digunakan untuk efek glassmorphism?', options: ['filter', 'backdrop-filter', 'glass-effect', 'blur-background'], correctIndex: 1, explanation: 'backdrop-filter: blur() dikombinasikan dengan background semi-transparan menciptakan efek glassmorphism.' },
        ],
    },
    {
        id: 'css-23', title: 'Clip-path', description: 'Memotong elemen dengan bentuk kustom',
        slides: [
            { type: 'theory', title: 'CSS Clip-path', content: 'clip-path memotong elemen menggunakan bentuk: circle(), ellipse(), polygon(), inset(), dan path(). Elemen yang terpotong tidak terlihat tapi masih ada di DOM. Sangat berguna untuk desain kreatif.', codeExample: '.lingkaran {\n  clip-path: circle(50% at center);\n}\n\n.segitiga {\n  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n}\n\n.segi-enam {\n  clip-path: polygon(\n    25% 0%, 75% 0%, 100% 50%,\n    75% 100%, 25% 100%, 0% 50%\n  );\n}\n\n.diagonal {\n  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n}' },
            { type: 'fill-blank', instruction: 'Potong gambar menjadi lingkaran:', codeTemplate: '.avatar {\n  __BLANK__: circle(50% at center);\n}', answer: 'clip-path', hint: 'Properti ini memotong elemen menjadi bentuk' },
            { type: 'quiz', question: 'Fungsi mana yang membuat bentuk segi banyak?', options: ['circle()', 'square()', 'polygon()', 'shape()'], correctIndex: 2, explanation: 'polygon() menerima titik-titik koordinat untuk membuat bentuk segi banyak kustom.' },
        ],
    },
    {
        id: 'css-24', title: 'Object-fit & Object-position', description: 'Mengontrol ukuran konten media',
        slides: [
            { type: 'theory', title: 'Object-fit', content: 'object-fit mengontrol bagaimana konten <img> atau <video> mengisi kontainernya. Nilai: fill, contain, cover, none, scale-down. object-position mengatur posisi konten.', codeExample: '.cover {\n  width: 300px;\n  height: 200px;\n  object-fit: cover; /* Isi kontainer, potong jika perlu */\n}\n\n.contain {\n  width: 300px;\n  height: 200px;\n  object-fit: contain; /* Muat seluruhnya, mungkin ada ruang kosong */\n}\n\n.fokus-atas {\n  object-fit: cover;\n  object-position: top center;\n}' },
            { type: 'fill-blank', instruction: 'Isi kontainer gambar tanpa distorsi:', codeTemplate: '.thumbnail {\n  width: 200px;\n  height: 200px;\n  __BLANK__: cover;\n}', answer: 'object-fit', hint: 'Properti ini mengontrol bagaimana gambar mengisi kontainer' },
            { type: 'quiz', question: 'Apa perbedaan cover dan contain?', options: ['Tidak ada', 'cover mengisi penuh (mungkin terpotong), contain menampilkan semua (mungkin ada ruang kosong)', 'contain lebih besar', 'cover hanya untuk video'], correctIndex: 1, explanation: 'cover mengisi seluruh kontainer (mungkin memotong), sementara contain memastikan seluruh gambar terlihat.' },
        ],
    },
    {
        id: 'css-25', title: 'Scroll Snap', description: 'Scroll yang presisi dan menarik',
        slides: [
            { type: 'theory', title: 'CSS Scroll Snap', content: 'Scroll Snap membuat scroll berhenti tepat di posisi yang ditentukan, seperti carousel. Atur scroll-snap-type pada kontainer dan scroll-snap-align pada children.', codeExample: '.carousel {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n}\n\n.slide {\n  scroll-snap-align: start;\n  min-width: 80vw;\n  flex-shrink: 0;\n}\n\n/* Sembunyikan scrollbar */\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n.carousel {\n  scrollbar-width: none;\n}' },
            { type: 'fill-blank', instruction: 'Aktifkan scroll snap horizontal:', codeTemplate: '.slider {\n  overflow-x: auto;\n  scroll-snap-type: x __BLANK__;\n}', answer: 'mandatory', hint: 'Nilai ini memaksa scroll berhenti di snap point' },
            { type: 'quiz', question: 'Apa perbedaan mandatory dan proximity pada scroll-snap?', options: ['Tidak ada', 'mandatory selalu snap, proximity hanya jika dekat', 'proximity lebih cepat', 'mandatory hanya horizontal'], correctIndex: 1, explanation: 'mandatory selalu memaksa scroll ke snap point terdekat, sedangkan proximity hanya snap jika sudah cukup dekat.' },
        ],
    },
    {
        id: 'css-26', title: 'CSS Counters', description: 'Penomoran otomatis dengan CSS',
        slides: [
            { type: 'theory', title: 'Counter CSS', content: 'CSS counters memungkinkan penomoran otomatis tanpa HTML list. Gunakan counter-reset untuk inisialisasi, counter-increment untuk menambah, dan counter() atau counters() untuk menampilkan.', codeExample: '.daftar {\n  counter-reset: langkah;\n}\n\n.item {\n  counter-increment: langkah;\n}\n\n.item::before {\n  content: counter(langkah) ". ";\n  font-weight: bold;\n  color: var(--primary);\n}\n\n/* Counter nested */\n.bab {\n  counter-reset: sub-bab;\n}\n\n.sub::before {\n  content: counter(langkah) "." counter(sub-bab) " ";\n  counter-increment: sub-bab;\n}' },
            { type: 'fill-blank', instruction: 'Naikkan nilai counter:', codeTemplate: '.item {\n  __BLANK__: nomor;\n}', answer: 'counter-increment', hint: 'Properti ini menaikkan nilai counter' },
            { type: 'quiz', question: 'Di mana biasanya counter ditampilkan?', options: ['Di background', 'Di content pseudo-element (::before/::after)', 'Di alt text', 'Di title'], correctIndex: 1, explanation: 'Counter ditampilkan menggunakan properti content pada pseudo-element ::before atau ::after.' },
        ],
    },
    {
        id: 'css-27', title: 'Container Queries', description: 'Responsif berdasarkan ukuran kontainer',
        slides: [
            { type: 'theory', title: 'Container Queries', content: 'Container queries memungkinkan styling berdasarkan ukuran kontainer parent, bukan viewport. Ini membuat komponen benar-benar responsif di mana pun ditempatkan. Gunakan container-type dan @container.', codeExample: '.wrapper {\n  container-type: inline-size;\n  container-name: kartu;\n}\n\n/* Style berdasarkan lebar kontainer */\n@container kartu (min-width: 400px) {\n  .konten {\n    display: flex;\n    gap: 16px;\n  }\n}\n\n@container kartu (min-width: 600px) {\n  .konten {\n    grid-template-columns: 1fr 2fr;\n  }\n}' },
            { type: 'fill-blank', instruction: 'Tetapkan elemen sebagai kontainer:', codeTemplate: '.panel {\n  __BLANK__: inline-size;\n}', answer: 'container-type', hint: 'Properti ini menjadikan elemen sebagai kontainer query' },
            { type: 'quiz', question: 'Apa keunggulan container queries dibanding media queries?', options: ['Lebih cepat', 'Responsif berdasarkan ukuran komponen, bukan viewport', 'Lebih cantik', 'Didukung semua browser'], correctIndex: 1, explanation: 'Container queries membuat komponen responsif berdasarkan ukuran parent-nya, bukan ukuran layar keseluruhan.' },
        ],
    },
    {
        id: 'css-28', title: 'CSS Nesting & :has()', description: 'Penulisan CSS modern yang lebih bersih',
        slides: [
            { type: 'theory', title: 'CSS Nesting & :has()', content: 'CSS Nesting (native, tanpa preprocessor) memungkinkan menulis aturan bertingkat. Selektor :has() (parent selector) memilih elemen berdasarkan isinya — sesuatu yang sebelumnya tidak mungkin di CSS!', codeExample: '/* CSS Nesting */\n.kartu {\n  padding: 16px;\n\n  & .judul {\n    font-size: 1.5rem;\n  }\n\n  &:hover {\n    box-shadow: 0 8px 24px rgba(0,0,0,0.1);\n  }\n\n  @media (min-width: 768px) {\n    padding: 24px;\n  }\n}\n\n/* :has() — Parent Selector */\n.form:has(input:invalid) {\n  border-color: red;\n}\n\n.kartu:has(img) {\n  padding: 0; /* Kartu yang ada gambarnya */\n}' },
            { type: 'fill-blank', instruction: 'Pilih form yang memiliki input tidak valid:', codeTemplate: '.form:__BLANK__(input:invalid) {\n  border: 2px solid red;\n}', answer: 'has', hint: 'Pseudo-class ini memilih elemen berdasarkan isinya' },
            { type: 'quiz', question: 'Kenapa :has() disebut "parent selector"?', options: ['Memilih elemen parent', 'Memilih elemen berdasarkan child yang dimiliki', 'Hanya untuk elemen parent', 'Membuat parent baru'], correctIndex: 1, explanation: ':has() memungkinkan kita memilih elemen berdasarkan elemen anak/child yang ada di dalamnya.' },
        ],
    },
    {
        id: 'css-29', title: 'CSS Modern Lanjutan', description: 'Teknik-teknik terkini',
        slides: [
            { type: 'theory', title: 'Fitur CSS Terbaru', content: 'CSS modern mencakup: clamp() untuk ukuran fluid, aspect-ratio untuk proporsi, logical properties (inline/block), accent-color untuk form styling, dan color-mix() untuk mencampur warna.', codeExample: '.judul {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}\n\n.video {\n  aspect-ratio: 16 / 9;\n}\n\n.tombol {\n  margin-inline: auto; /* Logical property */\n  padding-block: 12px;\n}\n\ninput[type="checkbox"] {\n  accent-color: #6DD5C4;\n}\n\n.campuran {\n  background: color-mix(in srgb, #6DD5C4 60%, white);\n}' },
            { type: 'fill-blank', instruction: 'Buat tipografi fluid:', codeTemplate: 'h1 {\n  font-size: __BLANK__(1rem, 3vw, 2.5rem);\n}', answer: 'clamp', hint: 'Fungsi ini mengatur nilai minimum, preferensi, dan maksimum' },
            { type: 'quiz', question: 'Apa fungsi backdrop-filter?', options: ['Memfilter gambar', 'Menerapkan efek di belakang elemen', 'Mengubah warna teks', 'Memfilter request jaringan'], correctIndex: 1, explanation: 'backdrop-filter menerapkan efek seperti blur pada area di belakang elemen.' },
        ],
    },
    {
        id: 'css-30', title: 'Proyek Akhir CSS', description: 'Bangun desain website lengkap',
        slides: [
            { type: 'theory', title: 'Rangkuman & Proyek', content: 'Selamat! Kamu sudah menguasai CSS dari dasar hingga lanjutan. Saatnya menggabungkan semuanya: layout dengan Flexbox/Grid, responsif dengan media queries, animasi, variabel, dan teknik modern. Bangun landing page profesional!', codeExample: '/* Design System */\n:root {\n  --primary: #6DD5C4;\n  --text: #1E293B;\n  --radius: 16px;\n}\n\n/* Layout Responsif */\n.hero {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 2rem;\n  padding: clamp(2rem, 5vw, 4rem);\n}\n\n@media (min-width: 768px) {\n  .hero {\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n  }\n}\n\n/* Animasi */\n.fade-in {\n  animation: masuk 0.6s ease forwards;\n}\n\n@keyframes masuk {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* Glass Card */\n.glass {\n  backdrop-filter: blur(20px);\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: var(--radius);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.glass:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);\n}' },
            { type: 'drag-drop', instruction: 'Urutkan properti CSS untuk membuat glass card:', tokens: ['box-shadow: 0 4px 24px', 'backdrop-filter: blur(20px)', 'border-radius: 16px', 'background: rgba(255,255,255,0.6)'], correctOrder: ['backdrop-filter: blur(20px)', 'background: rgba(255,255,255,0.6)', 'border-radius: 16px', 'box-shadow: 0 4px 24px'], hint: 'Mulai dari efek kaca, lalu background, radius, dan bayangan' },
            { type: 'quiz', question: 'Teknik mana yang BUKAN bagian dari CSS modern?', options: ['Container queries', 'CSS Nesting', 'jQuery animations', 'clamp()'], correctIndex: 2, explanation: 'jQuery adalah library JavaScript, bukan fitur CSS. CSS modern sudah bisa menangani animasi tanpa JavaScript.' },
        ],
    },
];
