import { DocsTopic } from '../docs-data';

export const mysqlTopics: DocsTopic[] = [
    {
        id: 'intro',
        title: 'Pengenalan MySQL & phpMyAdmin',
        description: 'Mengenal struktur database relasional dan cara kerja phpMyAdmin.',
        language: 'php', // Reusing php language icon for mysql topics since there's no mysql icon in DocsLanguage
        content: `<h2>Apa Itu Database MySQL?</h2><p>Database adalah tempat penyimpanan terstruktur untuk website kamu. <strong>MySQL</strong> adalah sistem manajemen database (RDBMS) sumber terbuka yang menggunakan <strong>SQL</strong> (Structured Query Language). MySQL sangat handal, cepat, dan menjadi standar industri di dunia web development (biasanya diduetkan dengan PHP).</p><h3>Apa Itu phpMyAdmin?</h3><p>Bagi pemula, berurusan dengan <em>terminal command line</em> bergaya hacker bisa terasa mengintimidasi. Oleh karena itu, kita menggunakan <strong>phpMyAdmin</strong>.</p><p>phpMyAdmin adalah sebuah aplikasi berbasis antarmuka grafis (UI) gratis yang berjalan di browser, dikhususkan untuk mempermudah administrasi MySQL. Dengan phpMyAdmin kamu dapat membuat database, tabel, hingga memanipulasi data hanya dengan klik.</p><h3>Konsep Hierarki</h3><ul><li><strong>Server MySQL</strong>: Rumah utama.</li><li><strong>Database</strong>: Folder atau laci spesifik (misal: <code>toko_online</code>).</li><li><strong>Tabel</strong>: Buku besar di dalam laci (misal: <code>users</code>, <code>products</code>).</li><li><strong>Kolom</strong>: Kategori data di dalam tabel (misal: <code>id</code>, <code>nama</code>, <code>harga</code>).</li><li><strong>Baris (Row)</strong>: Data aktual dari masing-masing kategori tersebut.</li></ul>`,
        codeExample: `-- Tidak ada kodingan di level pengenalan, tapi begini contoh SQL paling dasar:\nSELECT version();\n-- Akan menampilkan versi MySQL yang kita pakai.`
    },
    {
        id: 'datatypes',
        title: 'Tipe Data Kolom',
        description: 'Mengenal tipe huruf, angka, dan waktu di MySQL.',
        language: 'php',
        content: `<h2>Tipe Data di MySQL</h2><p>Sebelum membuat tabel, kamu diwajibkan untuk menentukan <strong>Tipe Data</strong> dari setiap kolom. Hal ini dilakukan agar MySQL tahu format apa yang akan masuk ke kolom tersebut dan berapa batas memori yang harus disiapkan.</p><h3>1. Tipe Data Angka (Numeric)</h3><ul><li><strong>INT</strong>: Bilangan bulat. Digunakan untuk <code>id</code>, <code>jumlah_stok</code>, <code>umur</code>. (Kapasitas nilai dari -2 miliar s/d +2 miliar).</li><li><strong>TINYINT</strong>: Bilangan bulat sangat kecil (dari -128 s/d 127). Biasanya untuk nilai true/false (1 atau 0).</li><li><strong>DECIMAL / FLOAT</strong>: Angka desimal yang memiliki nilai pecahan. Digunakan untuk <code>harga_produk</code> ($9.99) atau <code>berat_badan</code>.</li></ul><h3>2. Tipe Data Teks (String)</h3><ul><li><strong>VARCHAR(Length)</strong>: Teks pendek dengan limit dinamis (maksimal biasanya diset ke 255 karakter). Digunakan untuk <code>nama_lengkap</code>, <code>email</code>, <code>alamat</code>.</li><li><strong>TEXT</strong>: Teks yang sangat panjang tanpa batasan yang ketat. Digunakan untuk <code>deskripsi_produk</code>, isi artikel blog, komentar, dsb.</li></ul><h3>3. Tipe Data Waktu (Date & Time)</h3><ul><li><strong>DATE</strong>: Format hanya tanggal <code>YYYY-MM-DD</code>. (Contoh: <code>2024-12-01</code>).</li><li><strong>DATETIME</strong>: Format komplit dengan jam, <code>YYYY-MM-DD HH:MM:SS</code>.</li><li><strong>TIMESTAMP</strong>: Mirip DATETIME, bedanya otomatis akan mencatat waktu detik itu juga (sering digunakan untuk kolom <code>created_at</code> dsb).</li></ul>`,
        codeExample: `-- Contoh mendefinisikan tipe data saat membuat tabel\nCREATE TABLE produk (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    nama VARCHAR(150),\n    deskripsi TEXT,\n    harga DECIMAL(10, 2),\n    stok INT,\n    is_active TINYINT(1)\n);`
    },
    {
        id: 'crud',
        title: 'Operasi Dasar CRUD',
        description: 'Bintang utama SQL (Create, Read, Update, Delete).',
        language: 'php',
        content: `<h2>Operasi CRUD (SQL Queries)</h2><p><strong>CRUD</strong> adalah singkatan dari <em>Create, Read, Update, Delete</em>. Ini adalah 4 pilar utama manipulasi data pada database apa pun di dunia.</p><h3>1. CREATE (Insert)</h3><p>Menambahkan arsip / baris baru ke dalam tabel:</p></br><h3>2. READ (Select)</h3><p>Mengawasi atau mengambil data dari dalam tabel untuk dimunculkan ke aplikasi (seperti PHP/JS).</p></br><h3>3. UPDATE</h3><p>Mengubah atau memodifikasi nilai data yang <em>sudah ada</em> di dalam tabel.</p><blockquote><strong>BAHAYA:</strong> WAJIB MENGGUNAKAN <code>WHERE</code>! Jika tidak, semua isi di dunia tabelmu akan diubah serentak!</blockquote></br><h3>4. DELETE</h3><p>Menghapus baris/data yang tidak diinginkan dari tabel secara permanen.</p><blockquote><strong>BAHAYA:</strong> SAMA SEPERTI UPDATE, WAJIB MENGGUNAKAN <code>WHERE</code>!</blockquote>`,
        codeExample: `-- 1. INSERT (Menambah Data)\nINSERT INTO users (nama, umur, email)\nVALUES ('Budi', 20, 'budi@gemini.com');\n\n-- 2. SELECT (Mengambil Data)\nSELECT * FROM users;\nSELECT nama, umur FROM users;\n\n-- 3. UPDATE (Mengubah Data)\nUPDATE users\nSET umur = 21, nama = 'Budi Santoso'\nWHERE id = 1;\n\n-- 4. DELETE (Menghapus Data)\nDELETE FROM users\nWHERE id = 1;`
    },
    {
        id: 'where-limit-order',
        title: 'Filtering, Sorting, & Limits',
        description: 'Klausa WHERE, ORDER BY, dan LIMIT.',
        language: 'php',
        content: `<h2>Pelengkap Penting Kueri</h2><p>Saat datamu mencapai angka ribuan, melakukan <code>SELECT * FROM tabel</code> secara telanjang akan menguras <em>bandwith</em> server secara parah. Di sinilah filtering, klausa urutan, dan batasan tampil berperan.</p><h3>Klausa WHERE</h3><p>Digunakan untuk men-'filter' hasil kueri ke hanya data yang spesifik. Digunakan pada saat SELECT, UPDATE, maupun DELETE.</p><h3>Klausa ORDER BY</h3><p>Mengurutkan baris kemunculan hasil pencarian SQL. Terdapat dua argumen: <code>ASC</code> (Kecil ke Besar) dan <code>DESC</code> (Besar ke Kecil).</p><h3>Klausa LIMIT</h3><p>Memotong seberapa banyak maksimal output baris yang boleh di-<em>render</em> oleh database. Ini wajib digunakan untuk Pagination web (halaman 1, halaman 2, dst).</p>`,
        codeExample: `-- Contoh Filter WHERE\nSELECT * FROM produk WHERE stok < 10;\nSELECT * FROM users WHERE status = 'aktif' AND negara = 'ID';\n\n-- Contoh ORDER BY\n-- Dimulai dari produk termahal (misal: Rumah, BMW, Sepeda)\nSELECT nama, harga FROM produk ORDER BY harga DESC;\n\n-- Contoh LIMIT\n-- Menampilkan 5 barang termahal di database saja.\nSELECT * FROM produk ORDER BY harga DESC LIMIT 5;`
    },
    {
        id: 'relations',
        title: 'Kunci Primary & Relasi JOIN',
        description: 'PK, FK, dan cara menggabungkan (JOIN) tabel database.',
        language: 'php',
        content: `<h2>Tabel Relasional (Relationship)</h2><p>Perbedaan sistem MySQL/SQL dengan jenis database lain (NoSQL) adalah pada sifatnya yang saling terhubung antar entitas / antar tabel.</p><h3>Primary Key</h3><ul><li>"Nomor Induk / KTP" mutlak dari 1 data di tabel.</li><li>Di MySQL, Primary Key lazimnya disebut <code>id</code> yang berikhtiar menggunakan auto-increment, sehingga angkanya selalu maju sendiri, tidak ada baris yang bisa saling terduplikat angkanya.</li></ul><h3>Foreign Key</h3><ul><li>"KTP Orang Lain" yang diselipkan pada dokumen terpisah agar mereka saling terikat secara tidak langsung.</li><li>Contoh: Tabel <code>Pesanan</code> bisa merujuk "Pesanan milik siapa ini?" lewat kolom <code>user_id</code> yang bersumber pada <code>id</code> tabel users.</li></ul><h3>INNER JOIN</h3><p>Ini merupakan sihir mutakhir di mana dua (atau lebih) tabel dijahitkan sementara menghasilkan output <em>matrix</em> gabungan yang saling relevan tanpa harus menyimpan detail redundan di tabel yang sama.</p>`,
        codeExample: `-- Mengambil data pesanan dan siapa yang memesan dari dua tabel berbeda\nSELECT \n    users.nama, \n    produk.nama_produk, \n    pesanan.jumlah\nFROM pesanan\nINNER JOIN users ON pesanan.user_id = users.id\nINNER JOIN produk ON pesanan.produk_id = produk.id;\n\n-- Output dari SQL ini dalah:\n-- Budi | Laptop | 1\n-- Andi | Mouse  | 2`
    }
];
