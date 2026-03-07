import { Level } from './types';

export const htmlLevels: Level[] = [
    // ===== DASAR (1-10) =====
    {
        id: 'html-1', title: 'Halo, HTML!', description: 'Halaman web pertamamu',
        slides: [
            { type: 'theory', title: 'Apa itu HTML?', content: 'HTML (HyperText Markup Language) adalah bahasa standar untuk membuat halaman web. HTML mendeskripsikan struktur halaman web menggunakan elemen-elemen yang diwakili oleh tag.', codeExample: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Spear</title>\n  </head>\n  <body>\n    <h1>Welcome to Spear</h1>\n  </body>\n</html>' },
            { type: 'fill-blank', instruction: 'Lengkapi tag heading:', codeTemplate: '<__BLANK__>Welcome to Spear</h1>', answer: 'h1', hint: 'Heading menggunakan tag h1 sampai h6' },
            { type: 'quiz', question: 'Apa kepanjangan HTML?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'HyperText Machine Learning', 'Home Tool Markup Language'], correctIndex: 0, explanation: 'HTML adalah singkatan dari HyperText Markup Language.' },
        ],
    },
    {
        id: 'html-2', title: 'Teks & Heading', description: 'Memformat konten teks',
        slides: [
            { type: 'theory', title: 'Heading & Paragraf', content: 'HTML memiliki 6 level heading (<h1> sampai <h6>) dan paragraf (<p>). <h1> adalah heading terbesar. Gunakan <strong> untuk tebal, <em> untuk miring.', codeExample: '<h1>Judul Utama</h1>\n<h2>Sub Judul</h2>\n<p>Ini adalah paragraf <strong>tebal</strong> dan <em>miring</em>.</p>' },
            { type: 'drag-drop', instruction: 'Susun tag untuk membuat paragraf tebal:', tokens: ['</strong>', '<p>', 'Halo', '</p>', '<strong>'], correctOrder: ['<p>', '<strong>', 'Halo', '</strong>', '</p>'], hint: 'Tag harus di-nesting dengan benar' },
            { type: 'quiz', question: 'Tag mana yang membuat teks tebal?', options: ['<bold>', '<strong>', '<b-text>', '<heavy>'], correctIndex: 1, explanation: '<strong> adalah cara semantik untuk membuat teks tebal.' },
        ],
    },
    {
        id: 'html-3', title: 'Link & Navigasi', description: 'Menghubungkan halaman-halaman',
        slides: [
            { type: 'theory', title: 'Hyperlink', content: 'Tag <a> membuat hyperlink. Atribut href menentukan URL tujuan. Gunakan target="_blank" untuk membuka di tab baru.', codeExample: '<a href="https://example.com">Kunjungi Example</a>\n<a href="/tentang">Tentang Kami</a>\n<a href="#bagian1">Lompat ke Bagian</a>' },
            { type: 'fill-blank', instruction: 'Buat link menuju Google:', codeTemplate: '<a __BLANK__="https://google.com">Google</a>', answer: 'href', hint: 'Atribut yang menentukan URL tujuan' },
            { type: 'quiz', question: 'Apa yang membuka link di tab baru?', options: ['new-tab', 'target="_blank"', 'open="new"', 'href="_blank"'], correctIndex: 1, explanation: 'target="_blank" membuka link di tab baru.' },
        ],
    },
    {
        id: 'html-4', title: 'Gambar & Media', description: 'Menambahkan visual ke halaman',
        slides: [
            { type: 'theory', title: 'Gambar', content: 'Tag <img> menyisipkan gambar. Membutuhkan src (path gambar) dan alt (deskripsi). Gambar adalah tag self-closing. Kamu juga bisa menyisipkan video dan audio.', codeExample: '<img src="foto.jpg" alt="Matahari terbenam">\n<video controls>\n  <source src="video.mp4" type="video/mp4">\n</video>' },
            { type: 'fill-blank', instruction: 'Tambahkan teks alt ke gambar:', codeTemplate: '<img src="kucing.jpg" __BLANK__="Kucing lucu">', answer: 'alt', hint: 'Atribut ini memberikan teks alternatif untuk aksesibilitas' },
            { type: 'quiz', question: 'Kenapa atribut alt penting?', options: ['Membuat gambar lebih besar', 'Untuk aksesibilitas dan SEO', 'Menambahkan animasi', 'Mengubah warna'], correctIndex: 1, explanation: 'Teks alt membantu screen reader dan meningkatkan SEO.' },
        ],
    },
    {
        id: 'html-5', title: 'Daftar (List)', description: 'Daftar terurut dan tidak terurut',
        slides: [
            { type: 'theory', title: 'Daftar HTML', content: 'Gunakan <ul> untuk daftar tidak terurut (bullet) dan <ol> untuk daftar terurut (bernomor). Setiap item menggunakan <li>. Daftar bisa di-nesting satu sama lain.', codeExample: '<ul>\n  <li>Apel</li>\n  <li>Pisang</li>\n</ul>\n<ol>\n  <li>Langkah pertama</li>\n  <li>Langkah kedua</li>\n</ol>' },
            { type: 'drag-drop', instruction: 'Buat daftar tidak terurut:', tokens: ['</li>', '<ul>', '</ul>', '<li>', 'Apel'], correctOrder: ['<ul>', '<li>', 'Apel', '</li>', '</ul>'], hint: 'ul membungkus daftar, li membungkus setiap item' },
            { type: 'quiz', question: 'Tag mana yang membuat daftar bernomor?', options: ['<ul>', '<ol>', '<nl>', '<list>'], correctIndex: 1, explanation: '<ol> membuat daftar terurut (bernomor).' },
        ],
    },
    {
        id: 'html-6', title: 'Tabel', description: 'Menampilkan data dalam baris dan kolom',
        slides: [
            { type: 'theory', title: 'Tabel HTML', content: 'Tabel mengorganisir data ke dalam baris dan kolom. Gunakan <table>, <tr> untuk baris, <th> untuk header, <td> untuk sel data. Tambahkan <thead> dan <tbody> untuk struktur.', codeExample: '<table>\n  <thead>\n    <tr><th>Nama</th><th>Umur</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Budi</td><td>25</td></tr>\n  </tbody>\n</table>' },
            { type: 'fill-blank', instruction: 'Buat sel header tabel:', codeTemplate: '<__BLANK__>Nama</th>', answer: 'th', hint: 'th singkatan dari table header' },
            { type: 'quiz', question: 'Tag mana yang membuat baris tabel?', options: ['<row>', '<tr>', '<table-row>', '<trow>'], correctIndex: 1, explanation: '<tr> singkatan dari table row (baris tabel).' },
        ],
    },
    {
        id: 'html-7', title: 'Dasar Form', description: 'Mengumpulkan input pengguna',
        slides: [
            { type: 'theory', title: 'Form HTML', content: 'Form mengumpulkan input pengguna dengan <form>, <input>, <textarea>, <select>, dan <button>. Atribut type pada <input> menentukan jenis input.', codeExample: '<form action="/kirim" method="POST">\n  <input type="text" placeholder="Nama">\n  <input type="email" placeholder="Email">\n  <button type="submit">Kirim</button>\n</form>' },
            { type: 'fill-blank', instruction: 'Buat input password:', codeTemplate: '<input type="__BLANK__" placeholder="Password">', answer: 'password', hint: 'Tipe ini menyembunyikan karakter saat diketik' },
            { type: 'quiz', question: 'Mana yang membuat checkbox?', options: ['type="check"', 'type="checkbox"', 'type="tick"', 'type="bool"'], correctIndex: 1, explanation: 'type="checkbox" membuat checkbox yang bisa dicentang.' },
        ],
    },
    {
        id: 'html-8', title: 'Validasi Form', description: 'Memastikan input pengguna benar',
        slides: [
            { type: 'theory', title: 'Validasi Input', content: 'HTML5 memiliki validasi bawaan: required, minlength, maxlength, pattern, min, max. Browser memeriksa ini sebelum form dikirim.', codeExample: '<form>\n  <input type="email" required>\n  <input type="text" minlength="3" maxlength="50">\n  <input type="number" min="1" max="100">\n  <button type="submit">Kirim</button>\n</form>' },
            { type: 'fill-blank', instruction: 'Buat field input wajib diisi:', codeTemplate: '<input type="text" __BLANK__>', answer: 'required', hint: 'Atribut ini membuat field wajib diisi' },
            { type: 'quiz', question: 'Apa fungsi minlength?', options: ['Mengatur lebar minimum', 'Mengatur jumlah karakter minimum', 'Mengatur ukuran font minimum', 'Mengatur nilai minimum'], correctIndex: 1, explanation: 'minlength mengatur jumlah karakter minimum yang diperlukan.' },
        ],
    },
    {
        id: 'html-9', title: 'HTML Semantik', description: 'Struktur halaman yang bermakna',
        slides: [
            { type: 'theory', title: 'Elemen Semantik', content: 'Tag semantik mendeskripsikan makna: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>. Mereka meningkatkan aksesibilitas dan SEO dibanding hanya menggunakan <div>.', codeExample: '<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>\n    <section>...</section>\n  </article>\n  <aside>Sidebar</aside>\n</main>\n<footer>© 2025</footer>' },
            { type: 'drag-drop', instruction: 'Urutkan struktur halaman semantik:', tokens: ['<footer>', '<header>', '<aside>', '<main>'], correctOrder: ['<header>', '<main>', '<aside>', '<footer>'], hint: 'Header di awal, footer di akhir' },
            { type: 'quiz', question: 'Kenapa menggunakan HTML semantik?', options: ['Loading lebih cepat', 'Aksesibilitas & SEO lebih baik', 'Warna lebih bagus', 'Ukuran file lebih kecil'], correctIndex: 1, explanation: 'HTML semantik membantu screen reader dan mesin pencari memahami konten.' },
        ],
    },
    {
        id: 'html-10', title: 'Div & Span', description: 'Kontainer generik',
        slides: [
            { type: 'theory', title: 'Div dan Span', content: '<div> adalah kontainer block-level untuk mengelompokkan elemen. <span> adalah kontainer inline untuk memberi style teks. Gunakan dengan class CSS untuk layout dan styling.', codeExample: '<div class="kartu">\n  <h2>Judul</h2>\n  <p>Teks dengan kata <span class="sorotan">disorot</span>.</p>\n</div>' },
            { type: 'fill-blank', instruction: 'Buat div dengan class:', codeTemplate: '<div __BLANK__="container">Konten</div>', answer: 'class', hint: 'Atribut ini menetapkan nama class CSS' },
            { type: 'quiz', question: 'Apa perbedaan div dan span?', options: ['div berwarna, span tidak', 'div block-level, span inline', 'div untuk teks, span untuk gambar', 'Tidak ada perbedaan'], correctIndex: 1, explanation: '<div> membuat blok (baris baru), <span> tetap inline dalam teks.' },
        ],
    },
    // ===== MENENGAH (11-20) =====
    {
        id: 'html-11', title: 'Atribut HTML', description: 'Menambahkan properti ke elemen',
        slides: [
            { type: 'theory', title: 'Atribut Mendalam', content: 'Atribut memberikan info tambahan: id (pengenal unik), class (styling CSS), style (CSS inline), data-* (data kustom), title (tooltip).', codeExample: '<div id="utama" class="container" title="Bagian utama">\n  <p data-jumlah="5" style="color: blue;">Teks berstyle</p>\n</div>' },
            { type: 'fill-blank', instruction: 'Tambahkan pengenal unik:', codeTemplate: '<div __BLANK__="header">Header Saya</div>', answer: 'id', hint: 'Atribut ini harus unik di halaman' },
            { type: 'quiz', question: 'Atribut mana yang menyimpan data kustom?', options: ['custom=""', 'info=""', 'data-*=""', 'meta=""'], correctIndex: 2, explanation: 'Atribut data-* menyimpan data kustom pada elemen HTML.' },
        ],
    },
    {
        id: 'html-12', title: 'Meta Tags & SEO', description: 'Optimasi untuk mesin pencari',
        slides: [
            { type: 'theory', title: 'Meta Tags', content: 'Meta tags di <head> memberikan info ke browser dan mesin pencari: charset, viewport, description, keywords, Open Graph untuk berbagi di sosial media.', codeExample: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Website keren saya">\n  <title>Situs Saya</title>\n</head>' },
            { type: 'fill-blank', instruction: 'Atur deskripsi halaman:', codeTemplate: '<meta name="__BLANK__" content="Situs tutorial coding">', answer: 'description', hint: 'Nama meta ini muncul di hasil pencarian' },
            { type: 'quiz', question: 'Apa fungsi meta tag viewport?', options: ['Mengubah warna halaman', 'Mengontrol skala responsif', 'Menambah animasi', 'Mengatur bahasa'], correctIndex: 1, explanation: 'Meta tag viewport mengontrol bagaimana halaman diskalakan di perangkat mobile.' },
        ],
    },
    {
        id: 'html-13', title: 'Iframe & Embed', description: 'Menyisipkan konten eksternal',
        slides: [
            { type: 'theory', title: 'Iframe', content: 'Tag <iframe> menyisipkan halaman web lain di dalam halaman kamu. Digunakan untuk peta, video, dan widget pihak ketiga. Selalu atur width, height, dan title.', codeExample: '<iframe\n  src="https://www.youtube.com/embed/abc"\n  width="560" height="315"\n  title="Pemutar Video"\n  allowfullscreen>\n</iframe>' },
            { type: 'fill-blank', instruction: 'Embed video YouTube:', codeTemplate: '<__BLANK__ src="https://youtube.com/embed/abc" title="Video"></iframe>', answer: 'iframe', hint: 'Tag ini menyisipkan konten eksternal' },
            { type: 'quiz', question: 'Kenapa menambahkan title ke iframe?', options: ['Untuk styling', 'Untuk aksesibilitas', 'Untuk kecepatan', 'Untuk caching'], correctIndex: 1, explanation: 'Title membantu screen reader mendeskripsikan konten yang di-embed.' },
        ],
    },
    {
        id: 'html-14', title: 'Aksesibilitas (a11y)', description: 'Membuat web untuk semua orang',
        slides: [
            { type: 'theory', title: 'Aksesibilitas Web', content: 'Aksesibilitas memastikan semua orang bisa menggunakan situsmu. Gunakan: alt pada gambar, aria-label pada ikon, hierarki heading yang benar, dukungan navigasi keyboard, dan kontras warna yang cukup.', codeExample: '<button aria-label="Tutup menu">\n  <svg>...</svg>\n</button>\n<img src="grafik.png" alt="Penjualan naik 50% di Q4">\n<nav aria-label="Navigasi utama">...</nav>' },
            { type: 'fill-blank', instruction: 'Tambahkan label aksesibel ke tombol ikon:', codeTemplate: '<button __BLANK__="Cari">🔍</button>', answer: 'aria-label', hint: 'Atribut ARIA ini memberikan label teks' },
            { type: 'quiz', question: 'Apa itu ARIA?', options: ['Framework CSS', 'Pustaka font', 'Accessible Rich Internet Applications', 'Alat testing'], correctIndex: 2, explanation: 'ARIA membantu membuat konten web dinamis aksesibel untuk semua pengguna.' },
        ],
    },
    {
        id: 'html-15', title: 'Praktik Terbaik HTML', description: 'Menulis HTML yang bersih dan profesional',
        slides: [
            { type: 'theory', title: 'Tips HTML Pro', content: 'Praktik terbaik: Selalu gunakan DOCTYPE, indentasi yang rapi, tag semantik, teks alt, nesting yang valid, nama tag huruf kecil, atribut dalam tanda kutip, dan tutup semua tag.', codeExample: '<!DOCTYPE html>\n<html lang="id">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Halaman Profesional</title>\n</head>\n<body>\n  <header>...</header>\n  <main>...</main>\n  <footer>...</footer>\n</body>\n</html>' },
            { type: 'drag-drop', instruction: 'Urutkan dokumen HTML yang benar:', tokens: ['<body>', '<!DOCTYPE html>', '</html>', '<html>', '</body>'], correctOrder: ['<!DOCTYPE html>', '<html>', '<body>', '</body>', '</html>'], hint: 'DOCTYPE di awal, lalu html membungkus semuanya' },
            { type: 'quiz', question: 'Mana yang merupakan praktik terbaik?', options: ['Lewati closing tag', 'Hanya gunakan div', 'Selalu sertakan teks alt', 'Gunakan tag huruf besar'], correctIndex: 2, explanation: 'Selalu menyertakan teks alt pada gambar sangat penting untuk aksesibilitas.' },
        ],
    },
    // ===== LANJUTAN (16-25) =====
    {
        id: 'html-16', title: 'Audio & Video Lanjutan', description: 'Multimedia interaktif di web',
        slides: [
            { type: 'theory', title: 'Elemen Multimedia', content: 'HTML5 menyediakan <audio> dan <video> dengan kontrol bawaan. Gunakan beberapa <source> untuk format berbeda, atribut poster untuk thumbnail video, dan autoplay/loop untuk kontrol pemutaran.', codeExample: '<video controls poster="thumb.jpg" width="640">\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  Browser kamu tidak mendukung video.\n</video>\n\n<audio controls loop>\n  <source src="musik.mp3" type="audio/mpeg">\n</audio>' },
            { type: 'fill-blank', instruction: 'Tambahkan thumbnail ke video:', codeTemplate: '<video controls __BLANK__="gambar.jpg">', answer: 'poster', hint: 'Atribut ini menampilkan gambar sebelum video diputar' },
            { type: 'quiz', question: 'Kenapa menyediakan beberapa format source?', options: ['Untuk style berbeda', 'Kompatibilitas browser berbeda', 'Kecepatan loading', 'SEO lebih baik'], correctIndex: 1, explanation: 'Browser berbeda mendukung format video berbeda, jadi kita sediakan alternatif.' },
        ],
    },
    {
        id: 'html-17', title: 'Atribut Data (data-*)', description: 'Menyimpan data kustom di elemen',
        slides: [
            { type: 'theory', title: 'Data Attributes', content: 'Atribut data-* memungkinkan kamu menyimpan informasi kustom pada elemen HTML. Bisa diakses via JavaScript menggunakan element.dataset. Berguna untuk menyimpan konfigurasi tanpa mengubah tampilan.', codeExample: '<div data-user-id="123" data-role="admin">\n  Profil Pengguna\n</div>\n\n<button data-action="delete" data-item-id="456">\n  Hapus Item\n</button>\n\n// Akses di JavaScript:\n// element.dataset.userId → "123"\n// element.dataset.role → "admin"' },
            { type: 'fill-blank', instruction: 'Simpan warna kustom pada elemen:', codeTemplate: '<div __BLANK__-color="biru">Konten</div>', answer: 'data', hint: 'Awalan untuk atribut data kustom' },
            { type: 'quiz', question: 'Bagaimana mengakses data-user-id di JavaScript?', options: ['element.data-user-id', 'element.dataset.userId', 'element.getAttribute("user-id")', 'element.data.userId'], correctIndex: 1, explanation: 'Atribut data-* diakses melalui properti dataset dengan penamaan camelCase.' },
        ],
    },
    {
        id: 'html-18', title: 'Elemen Template & Slot', description: 'Konten yang bisa dipakai ulang',
        slides: [
            { type: 'theory', title: 'Template HTML', content: 'Elemen <template> menyimpan konten HTML yang tidak ditampilkan saat halaman dimuat, tapi bisa di-clone dan digunakan via JavaScript. Berguna untuk membuat elemen berulang secara dinamis.', codeExample: '<template id="kartu-template">\n  <div class="kartu">\n    <h3 class="judul"></h3>\n    <p class="deskripsi"></p>\n  </div>\n</template>\n\n// JavaScript:\n// const tmpl = document.getElementById("kartu-template");\n// const clone = tmpl.content.cloneNode(true);\n// clone.querySelector(".judul").textContent = "Halo";\n// document.body.appendChild(clone);' },
            { type: 'fill-blank', instruction: 'Buat elemen template:', codeTemplate: '<__BLANK__ id="item-template">\n  <li class="item"></li>\n</template>', answer: 'template', hint: 'Elemen ini menyimpan konten yang tidak ditampilkan langsung' },
            { type: 'quiz', question: 'Kapan konten <template> ditampilkan?', options: ['Langsung saat dimuat', 'Saat di-hover', 'Saat di-clone via JavaScript', 'Setelah 5 detik'], correctIndex: 2, explanation: 'Konten template tidak ditampilkan sampai di-clone dan disisipkan via JavaScript.' },
        ],
    },
    {
        id: 'html-19', title: 'Gambar Responsif', description: 'Gambar optimal di semua layar',
        slides: [
            { type: 'theory', title: 'Picture & Srcset', content: 'Elemen <picture> dan atribut srcset memungkinkan browser memilih gambar terbaik berdasarkan ukuran layar dan resolusi. Ini menghemat bandwidth dan mempercepat loading.', codeExample: '<picture>\n  <source media="(min-width: 1024px)" srcset="besar.webp">\n  <source media="(min-width: 768px)" srcset="sedang.webp">\n  <img src="kecil.webp" alt="Foto responsif">\n</picture>\n\n<img src="foto.jpg"\n  srcset="foto-320.jpg 320w, foto-640.jpg 640w, foto-1024.jpg 1024w"\n  sizes="(max-width: 640px) 100vw, 50vw"\n  alt="Foto dengan srcset">' },
            { type: 'fill-blank', instruction: 'Sediakan gambar untuk layar lebar:', codeTemplate: '<picture>\n  <__BLANK__ media="(min-width: 768px)" srcset="besar.jpg">\n  <img src="kecil.jpg" alt="Foto">\n</picture>', answer: 'source', hint: 'Elemen ini menentukan sumber alternatif' },
            { type: 'quiz', question: 'Apa keuntungan gambar responsif?', options: ['Warna lebih bagus', 'Loading lebih cepat & hemat bandwidth', 'Animasi otomatis', 'SEO lebih buruk'], correctIndex: 1, explanation: 'Gambar responsif mengirim ukuran gambar yang sesuai, menghemat bandwidth dan mempercepat loading.' },
        ],
    },
    {
        id: 'html-20', title: 'Details & Summary', description: 'Konten yang bisa dibuka-tutup',
        slides: [
            { type: 'theory', title: 'Elemen Disclosure', content: 'Elemen <details> membuat widget disclosure yang bisa dibuka dan ditutup. <summary> adalah label yang selalu terlihat. Cocok untuk FAQ, spoiler, dan informasi tambahan tanpa JavaScript.', codeExample: '<details>\n  <summary>Klik untuk lihat jawaban</summary>\n  <p>Ini adalah jawaban yang tersembunyi!</p>\n</details>\n\n<details open>\n  <summary>FAQ: Apa itu HTML?</summary>\n  <p>HTML adalah bahasa markup untuk membuat halaman web.</p>\n</details>' },
            { type: 'fill-blank', instruction: 'Buat konten yang bisa dibuka:', codeTemplate: '<__BLANK__>\n  <summary>Lihat lebih lanjut</summary>\n  <p>Konten tersembunyi</p>\n</details>', answer: 'details', hint: 'Elemen ini membuat widget disclosure' },
            { type: 'quiz', question: 'Apa yang dilakukan atribut "open" pada <details>?', options: ['Membuka link baru', 'Menampilkan konten secara default', 'Membuat animasi', 'Menghapus summary'], correctIndex: 1, explanation: 'Atribut open membuat <details> terbuka secara default tanpa perlu diklik.' },
        ],
    },
    {
        id: 'html-21', title: 'Elemen Datalist', description: 'Input dengan saran otomatis',
        slides: [
            { type: 'theory', title: 'Autocomplete dengan Datalist', content: 'Elemen <datalist> menyediakan daftar opsi yang disarankan untuk <input>. Pengguna tetap bisa mengetik bebas, tapi mendapat saran saat mengetik. Hubungkan dengan atribut list.', codeExample: '<label for="bahasa">Bahasa Favorit:</label>\n<input type="text" id="bahasa" list="bahasa-list">\n<datalist id="bahasa-list">\n  <option value="JavaScript">\n  <option value="Python">\n  <option value="PHP">\n  <option value="TypeScript">\n</datalist>' },
            { type: 'fill-blank', instruction: 'Hubungkan input dengan datalist:', codeTemplate: '<input type="text" __BLANK__="kota-list">\n<datalist id="kota-list">\n  <option value="Jakarta">\n</datalist>', answer: 'list', hint: 'Atribut ini menghubungkan input dengan datalist' },
            { type: 'quiz', question: 'Apa perbedaan datalist dan select?', options: ['Tidak ada perbedaan', 'Datalist mengizinkan input bebas', 'Select lebih modern', 'Datalist hanya untuk angka'], correctIndex: 1, explanation: 'Datalist memberikan saran tapi tetap mengizinkan pengguna mengetik nilai yang tidak ada di daftar.' },
        ],
    },
    {
        id: 'html-22', title: 'Output & Progress', description: 'Elemen output dan indikator',
        slides: [
            { type: 'theory', title: 'Elemen Indikator', content: '<output> menampilkan hasil perhitungan. <progress> menampilkan bar kemajuan. <meter> menampilkan pengukuran skalar. Ketiganya memberikan makna semantik yang lebih baik daripada <div>.', codeExample: '<label>Hasil: <output name="total">0</output></label>\n\n<label>Download:\n  <progress value="65" max="100">65%</progress>\n</label>\n\n<label>Penggunaan Disk:\n  <meter value="0.7" min="0" max="1"\n    low="0.3" high="0.7" optimum="0.2">70%</meter>\n</label>' },
            { type: 'fill-blank', instruction: 'Buat bar kemajuan 50%: ', codeTemplate: '<__BLANK__ value="50" max="100">50%</progress>', answer: 'progress', hint: 'Elemen ini menampilkan bar kemajuan' },
            { type: 'quiz', question: 'Apa perbedaan <progress> dan <meter>?', options: ['Tidak ada', 'Progress untuk tugas, meter untuk pengukuran', 'Meter untuk tugas, progress untuk pengukuran', 'Progress lebih cepat'], correctIndex: 1, explanation: 'Progress menunjukkan kemajuan tugas, sedangkan meter mengukur nilai dalam rentang tertentu.' },
        ],
    },
    {
        id: 'html-23', title: 'Fieldset & Legend', description: 'Mengelompokkan elemen form',
        slides: [
            { type: 'theory', title: 'Pengelompokan Form', content: '<fieldset> mengelompokkan elemen form yang terkait dengan border visual. <legend> memberikan judul untuk kelompok tersebut. Sangat membantu aksesibilitas dan organisasi form kompleks.', codeExample: '<form>\n  <fieldset>\n    <legend>Data Pribadi</legend>\n    <label>Nama: <input type="text"></label>\n    <label>Email: <input type="email"></label>\n  </fieldset>\n  <fieldset>\n    <legend>Alamat</legend>\n    <label>Kota: <input type="text"></label>\n    <label>Kode Pos: <input type="text"></label>\n  </fieldset>\n</form>' },
            { type: 'fill-blank', instruction: 'Beri judul pada kelompok form:', codeTemplate: '<fieldset>\n  <__BLANK__>Informasi Kontak</legend>\n  <input type="tel">\n</fieldset>', answer: 'legend', hint: 'Elemen ini memberikan judul/caption pada fieldset' },
            { type: 'quiz', question: 'Apa fungsi utama fieldset?', options: ['Menambah warna', 'Mengelompokkan elemen form terkait', 'Membuat tabel', 'Menghapus border'], correctIndex: 1, explanation: 'Fieldset mengelompokkan elemen form yang terkait secara logis dan visual.' },
        ],
    },
    {
        id: 'html-24', title: 'Elemen Dialog', description: 'Modal dan popup bawaan HTML',
        slides: [
            { type: 'theory', title: 'Dialog HTML', content: 'Elemen <dialog> membuat modal/popup bawaan HTML tanpa perlu JavaScript library. Gunakan showModal() untuk menampilkan sebagai modal dan close() untuk menutupnya. Mendukung atribut open.', codeExample: '<dialog id="modal">\n  <h2>Konfirmasi</h2>\n  <p>Apakah kamu yakin ingin menghapus?</p>\n  <form method="dialog">\n    <button value="batal">Batal</button>\n    <button value="ya">Ya, Hapus</button>\n  </form>\n</dialog>\n\n<button onclick="document.getElementById(\'modal\').showModal()">\n  Buka Modal\n</button>' },
            { type: 'fill-blank', instruction: 'Buat elemen dialog:', codeTemplate: '<__BLANK__ id="popup">\n  <p>Ini popup!</p>\n  <button onclick="this.closest(\'dialog\').close()">Tutup</button>\n</dialog>', answer: 'dialog', hint: 'Elemen HTML5 untuk modal/dialog' },
            { type: 'quiz', question: 'Apa perbedaan show() dan showModal()?', options: ['Tidak ada', 'showModal() mengunci interaksi di belakang', 'show() lebih keren', 'showModal() lebih cepat'], correctIndex: 1, explanation: 'showModal() menampilkan dialog dengan backdrop yang mengunci interaksi dengan konten di belakangnya.' },
        ],
    },
    {
        id: 'html-25', title: 'Web Components Dasar', description: 'Membuat komponen kustom HTML',
        slides: [
            { type: 'theory', title: 'Custom Elements', content: 'Web Components memungkinkan kamu membuat tag HTML kustom yang bisa dipakai ulang. Gunakan JavaScript class yang extends HTMLElement, lalu daftarkan dengan customElements.define(). Nama harus mengandung tanda hubung.', codeExample: '<!-- Penggunaan -->\n<kartu-profil nama="Budi" role="Developer">\n</kartu-profil>\n\n<script>\nclass KartuProfil extends HTMLElement {\n  connectedCallback() {\n    const nama = this.getAttribute("nama");\n    const role = this.getAttribute("role");\n    this.innerHTML = `\n      <div class="kartu">\n        <h3>${nama}</h3>\n        <p>${role}</p>\n      </div>`;\n  }\n}\ncustomElements.define("kartu-profil", KartuProfil);\n</script>' },
            { type: 'fill-blank', instruction: 'Daftarkan custom element:', codeTemplate: 'customElements.__BLANK__("my-button", MyButton);', answer: 'define', hint: 'Method untuk mendaftarkan custom element' },
            { type: 'quiz', question: 'Apa aturan penamaan custom element?', options: ['Harus huruf besar', 'Harus mengandung tanda hubung (-)', 'Maksimal 5 karakter', 'Harus diawali angka'], correctIndex: 1, explanation: 'Custom element harus mengandung tanda hubung (-) untuk membedakannya dari elemen HTML bawaan.' },
        ],
    },
    // ===== MAHIR (26-30) =====
    {
        id: 'html-26', title: 'HTML untuk Email', description: 'Membuat email HTML yang bagus',
        slides: [
            { type: 'theory', title: 'Email HTML', content: 'Email HTML berbeda dari web biasa. Gunakan tabel untuk layout (bukan flexbox/grid), inline CSS (bukan stylesheet eksternal), dan hindari JavaScript. Batasi lebar 600px untuk kompatibilitas.', codeExample: '<table width="600" cellpadding="0" cellspacing="0"\n  style="margin: 0 auto; font-family: Arial, sans-serif;">\n  <tr>\n    <td style="background: #6DD5C4; padding: 20px;\n      text-align: center; color: white;">\n      <h1 style="margin: 0;">Selamat Datang!</h1>\n    </td>\n  </tr>\n  <tr>\n    <td style="padding: 20px;">\n      <p>Halo, terima kasih sudah bergabung.</p>\n    </td>\n  </tr>\n</table>' },
            { type: 'quiz', question: 'Kenapa email HTML menggunakan tabel untuk layout?', options: ['Lebih cepat', 'Kompatibilitas klien email', 'Lebih mudah', 'Untuk SEO'], correctIndex: 1, explanation: 'Banyak klien email tidak mendukung CSS modern seperti flexbox/grid, jadi tabel digunakan untuk layout yang konsisten.' },
            { type: 'fill-blank', instruction: 'Atur style inline pada email:', codeTemplate: '<td __BLANK__="padding: 20px; color: #333;">Konten</td>', answer: 'style', hint: 'Email HTML menggunakan CSS inline' },
        ],
    },
    {
        id: 'html-27', title: 'Open Graph & Social Meta', description: 'Tampilan cantik saat dibagikan',
        slides: [
            { type: 'theory', title: 'Social Meta Tags', content: 'Open Graph (og:) menentukan bagaimana halamanmu ditampilkan saat dibagikan di media sosial. Twitter Cards memberikan kontrol serupa untuk Twitter. Ini meningkatkan engagement secara signifikan.', codeExample: '<head>\n  <!-- Open Graph -->\n  <meta property="og:title" content="Belajar HTML di Spear">\n  <meta property="og:description" content="Tutorial HTML interaktif">\n  <meta property="og:image" content="https://spear.id/preview.jpg">\n  <meta property="og:url" content="https://spear.id">\n  <meta property="og:type" content="website">\n  \n  <!-- Twitter Card -->\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:title" content="Belajar HTML di Spear">\n</head>' },
            { type: 'fill-blank', instruction: 'Atur gambar preview saat dibagikan:', codeTemplate: '<meta property="og:__BLANK__" content="https://example.com/gambar.jpg">', answer: 'image', hint: 'Properti ini menentukan gambar yang ditampilkan di media sosial' },
            { type: 'quiz', question: 'Apa fungsi Open Graph?', options: ['Mempercepat loading', 'Mengontrol tampilan saat dibagikan di sosmed', 'Membuat grafik', 'Optimasi database'], correctIndex: 1, explanation: 'Open Graph mengontrol judul, deskripsi, dan gambar yang ditampilkan saat URL dibagikan di media sosial.' },
        ],
    },
    {
        id: 'html-28', title: 'Microdata & Schema.org', description: 'Data terstruktur untuk mesin pencari',
        slides: [
            { type: 'theory', title: 'Structured Data', content: 'Microdata dan Schema.org membantu mesin pencari memahami konten halamanmu. Ini menghasilkan rich snippets (rating bintang, harga, resep, dll.) di hasil pencarian Google.', codeExample: '<div itemscope itemtype="https://schema.org/Product">\n  <h2 itemprop="name">Sepatu Lari Pro</h2>\n  <p itemprop="description">Sepatu lari ringan dan nyaman</p>\n  <span itemprop="price">Rp 899.000</span>\n  <div itemprop="aggregateRating" itemscope\n    itemtype="https://schema.org/AggregateRating">\n    <span itemprop="ratingValue">4.5</span>/\n    <span itemprop="bestRating">5</span>\n  </div>\n</div>' },
            { type: 'fill-blank', instruction: 'Tandai elemen sebagai scope Schema:', codeTemplate: '<div __BLANK__ itemtype="https://schema.org/Article">', answer: 'itemscope', hint: 'Atribut ini mendefinisikan scope item' },
            { type: 'quiz', question: 'Apa manfaat Schema.org?', options: ['Halaman lebih warna-warni', 'Rich snippets di hasil pencarian', 'Loading lebih cepat', 'Keamanan lebih baik'], correctIndex: 1, explanation: 'Schema.org memungkinkan mesin pencari menampilkan informasi kaya seperti bintang, harga, dan gambar di hasil pencarian.' },
        ],
    },
    {
        id: 'html-29', title: 'HTML & Performa', description: 'Optimasi loading halaman',
        slides: [
            { type: 'theory', title: 'Optimasi Performa HTML', content: 'Beberapa teknik HTML untuk performa: lazy loading gambar (loading="lazy"), preload resource penting, prefetch halaman berikutnya, defer/async untuk script, dan dns-prefetch untuk domain eksternal.', codeExample: '<!-- Lazy loading gambar -->\n<img src="foto.jpg" loading="lazy" alt="Foto">\n\n<!-- Preload resource penting -->\n<link rel="preload" href="font.woff2" as="font"\n  crossorigin>\n\n<!-- Prefetch halaman berikutnya -->\n<link rel="prefetch" href="/halaman-2">\n\n<!-- Async & Defer script -->\n<script src="analytics.js" async></script>\n<script src="app.js" defer></script>\n\n<!-- DNS Prefetch -->\n<link rel="dns-prefetch" href="//api.example.com">' },
            { type: 'fill-blank', instruction: 'Aktifkan lazy loading pada gambar:', codeTemplate: '<img src="foto.jpg" __BLANK__="lazy" alt="Foto besar">', answer: 'loading', hint: 'Atribut ini mengatur perilaku loading gambar' },
            { type: 'quiz', question: 'Apa perbedaan async dan defer pada script?', options: ['Tidak ada perbedaan', 'async langsung dijalankan, defer menunggu HTML selesai', 'defer lebih cepat', 'async hanya untuk CSS'], correctIndex: 1, explanation: 'async menjalankan script segera setelah didownload. defer menunggu seluruh HTML selesai di-parse terlebih dahulu.' },
        ],
    },
    {
        id: 'html-30', title: 'Proyek Akhir HTML', description: 'Bangun halaman web lengkap',
        slides: [
            { type: 'theory', title: 'Rangkuman & Proyek', content: 'Selamat! Kamu sudah mempelajari semua dasar hingga lanjutan HTML. Sekarang saatnya menggabungkan semuanya: DOCTYPE, semantik, form, media, aksesibilitas, SEO, dan performa. Bangun halaman portfolio profesional!', codeExample: '<!DOCTYPE html>\n<html lang="id">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Portfolio Web Developer">\n  <meta property="og:title" content="Portfolio Saya">\n  <title>Portfolio - Web Developer</title>\n</head>\n<body>\n  <header>\n    <nav aria-label="Menu Utama">\n      <a href="#tentang">Tentang</a>\n      <a href="#projek">Projek</a>\n      <a href="#kontak">Kontak</a>\n    </nav>\n  </header>\n  <main>\n    <section id="tentang">\n      <h1>Halo, Saya Developer!</h1>\n      <p>Selamat datang di portfolio saya.</p>\n    </section>\n    <section id="projek">\n      <h2>Projek Saya</h2>\n      <article>\n        <h3>Aplikasi Todo</h3>\n        <img src="todo.jpg" loading="lazy" alt="Screenshot Todo App">\n      </article>\n    </section>\n    <section id="kontak">\n      <h2>Hubungi Saya</h2>\n      <form action="/kirim" method="POST">\n        <fieldset>\n          <legend>Form Kontak</legend>\n          <label>Nama: <input type="text" required></label>\n          <label>Email: <input type="email" required></label>\n          <label>Pesan: <textarea required></textarea></label>\n          <button type="submit">Kirim</button>\n        </fieldset>\n      </form>\n    </section>\n  </main>\n  <footer>\n    <p>&copy; 2025 Portfolio Saya</p>\n  </footer>\n</body>\n</html>' },
            { type: 'drag-drop', instruction: 'Urutkan bagian halaman portfolio yang benar:', tokens: ['<footer>', '<header><nav>', '<main><section>', '</html>', '<!DOCTYPE html><html>'], correctOrder: ['<!DOCTYPE html><html>', '<header><nav>', '<main><section>', '<footer>', '</html>'], hint: 'DOCTYPE dulu, lalu header, main, footer, tutup html' },
            { type: 'quiz', question: 'Apa yang TIDAK termasuk praktik terbaik HTML?', options: ['Menggunakan tag semantik', 'Menambahkan alt text', 'Menggunakan inline style untuk semua CSS', 'Menggunakan lazy loading'], correctIndex: 2, explanation: 'Inline style sebaiknya dihindari karena sulit di-maintain. Gunakan stylesheet terpisah atau CSS classes.' },
        ],
    },
];
