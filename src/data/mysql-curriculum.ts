import { Level } from './types';

export const mysqlLevels: Level[] = [
    {
        id: 'mysql-1',
        title: 'Pengenalan MySQL',
        description: 'Menyelami lautan database bersama lumba-lumba pintar.',
        slides: [
            {
                type: 'theory',
                title: 'Selamat Datang di MySQL',
                content: 'MySQL adalah salah satu Sistem Manajemen Basis Data Relasional (RDBMS) paling populer di planet ini, digambarkan dengan logo Lumba-lumba. Dia bertugas menyimpan semua data websitemu mulai dari email pengguna, daftar produk, sampai ke keranjang belanja.',
            },
            {
                type: 'theory',
                title: 'Data Terstruktur',
                content: 'Bayangkan MySQL seperti lemari buku besar atau aplikasi Excel tingkat jutaan. Semua data disimpan dalam **Tabel** yang diatur berdasarkan Baris (Row) dan Kolom (Column). Jika kamu ingin mengingat sesuatu di websitemu besok harinya, MySQL yang akan menuliskannya.',
            },
            {
                type: 'quiz',
                question: 'Apa fungsi utama dari MySQL?',
                options: [
                    'Mendesain warna tombol website',
                    'Menyimpan dan mengelola data dalam format terstruktur',
                    'Mendeteksi malware di komputer',
                    'Menuliskan file HTML'
                ],
                correctIndex: 1,
                explanation: 'Benar sekali. MySQL berfungsi sebagai "otak ingatan" website tempat segala data disimpan dan dikelola secara relasional.',
            }
        ]
    },
    {
        id: 'mysql-2',
        title: 'Berkenalan dengan phpMyAdmin',
        description: 'Tampilan grafis ramah untuk database kamu.',
        slides: [
            {
                type: 'theory',
                title: 'Apa itu phpMyAdmin?',
                content: 'Sebagai pemula, kamu tidak harus menulis perintah murni *terminal hackerman* untuk membuat tabel database. Disinilah **phpMyAdmin** datang! Ia adalah alat berbasis website antarmuka visual (UI) gratis ber-bahasa PHP untuk memudahkan interaksimu dengan MySQL.',
            },
            {
                type: 'theory',
                title: 'Bekerja dengan Visual',
                content: 'Dengan _phpMyAdmin_, membuat database pengguna baru cukup klik tombol "New", beri nama, lalu simpan. Namun, pada level tertentu dan jika kamu mengkodekannya di backend, mau tak mau kamu juga butuh memahami perintah-perintah teks bahasa SQL.',
            },
            {
                type: 'fill-blank',
                instruction: 'Lengkapi kalimat berikut:',
                codeTemplate: 'phpMyAdmin adalah aplikasi antarmuka visual untuk mengelola __BLANK__.',
                answer: 'database',
                hint: 'Tempat penyimpanan data (bahasa Inggris)',
            }
        ]
    },
    {
        id: 'mysql-3',
        title: 'Pengenalan SQL',
        description: 'Bahasa terstruktur untuk menanyai Sang Lemari Arsip.',
        slides: [
            {
                type: 'theory',
                title: 'Apa itu bahasa SQL?',
                content: 'Kita berbicara dengan MySQL menggunakan satu-satunya bahasa yang ia mengerti: **SQL (Structured Query Language)**. Kalau diibaratkan pelayan restoran, SQL adalah caramu berteriak "Tolong ambilkan nama pelanggan yang memesan sate ayam!".',
            },
            {
                type: 'theory',
                title: 'Anatomi Perintah SQL',
                content: 'Kata kerja SQL ditulis besar-besar agar mudah membedakannya!\n```sql\nSELECT kolom FROM namatabel;\n```\nItu contoh paling sederhana memesan pengambilan data ke MySQL.',
            },
            {
                type: 'drag-drop',
                instruction: 'Susun sintaks SQL sederhana:',
                tokens: ['SELECT', 'nama', 'FROM', 'users'],
                correctOrder: ['SELECT', 'nama', 'FROM', 'users'],
                hint: 'Pilih (SELECT) nama (nama) dari (FROM) pengguna (users)'
            }
        ]
    },
    {
        id: 'mysql-4',
        title: 'Tipe Data Basis Data',
        description: 'Batasi jenis datamu (Huruf? Angka? Kalender?)',
        slides: [
            {
                type: 'theory',
                title: 'Aturan Kolom yang Ketat',
                content: 'Ketika mendesain tabel di Excel kamu bebas isi apapun di cell-nya. Di MySQL, **TIDAK BOLEH**. Saat pertama menyiapkan lembaran tabel, kamu wajib mencontoh bentuk tiangnya: Apakah ini kolom untuk "Umur" (INT), "Nama" (VARCHAR), atau "Harga" (DECIMAL)?',
            },
            {
                type: 'theory',
                title: 'Keluarga Numerik',
                content: 'Tipe penyimpanan Angka di MySQL:\n\n- `INT` (Angka bulat normal, -2 miliar s/d +2 miliar)\n- `TINYINT` (Angka mungil biasanya 0 s.d 255. Cocok buat Status/Boolean)\n- `DECIMAL(10,2)` (Angka presisi desimal untuk nilai tukar/harga mata uang sekelas bitcoin).',
            },
            {
                type: 'quiz',
                question: 'Tipe data mana yang paling pantas digunakan untuk menyiapkan tempat harga barang/produk ber-desimal?',
                options: [
                    'INT',
                    'TINYINT',
                    'VARCHAR',
                    'DECIMAL'
                ],
                correctIndex: 3,
                explanation: 'Benar! DECIMAL dan FLOAT yang dapat menampung nilai angka pecahan/koma.',
            }
        ]
    },
    {
        id: 'mysql-5',
        title: 'Tipe Data String & Waktu',
        description: 'Menyimpan teks panjang, nama pendek, serta jam dunia.',
        slides: [
            {
                type: 'theory',
                title: 'Keluarga Teks',
                content: 'Untuk huruf, kita memakai string:\n\n- `VARCHAR(length)` : Menyimpan teks fleksibel berbatas (Misal `VARCHAR(255)` untuk Nama, Email).\n- `TEXT` : Menyimpan kalimat tanpa ampun (Komentar blog, Artikel narasi novel). \nTidak peduli seberapa panjang isi buku, MySQL sanggup menelannya dengan TEXT.',
            },
            {
                type: 'theory',
                title: 'Keluarga Kalender',
                content: 'Ingin mendeteksi jam tayang sebuah postingan? \n- `DATE` (Hanya YYYY-MM-DD)\n- `DATETIME` (Super lengkap + Jam, Menit, Detik)\n- `TIMESTAMP` (Terbatas rentang tahun, tapi mendeteksi zona waktu otomatis saat dicatat)',
            },
            {
                type: 'fill-blank',
                instruction: 'Tipe data yang paling tepat untuk menyimpan teks 50-100 karakter seperti Email:',
                codeTemplate: 'Gunakan tipe data __BLANK__',
                answer: 'VARCHAR',
                hint: 'String variabel berbatas'
            }
        ]
    },
    {
        id: 'mysql-6',
        title: 'Manambahkan Data (INSERT)',
        description: 'Tugas CRUD harian The Alchemist.',
        slides: [
            {
                type: 'theory',
                title: 'Menciptakan Baris Data',
                content: 'CRUD (Create, Read, Update, Delete) adalah roh manipulasi tabel. Untuk menaruh data baru ke baris, gunakan perintah `INSERT INTO`. \n\nMisalkan kita memiliki tabel `pengguna` yang meminta nama dan umur. Ingat, sesuaikan posisinya!',
            },
            {
                type: 'theory',
                title: 'Sintaks Insert',
                content: 'Perintah lengkap mendaftarkan orang baru:\n```sql\nINSERT INTO pengguna (nama, umur) \nVALUES (\'Arya\', 20);\n```\nKalimat tanda kurung awal adalah *alamat kolom*-nya, lantas diikuti oleh *isi nilainya*.',
            },
            {
                type: 'drag-drop',
                instruction: 'Susun perintah INSERT yang benar:',
                tokens: ['INSERT', 'INTO', 'buku', '(judul)', 'VALUES', '(\'Harry Potter\');'],
                correctOrder: ['INSERT', 'INTO', 'buku', '(judul)', 'VALUES', '(\'Harry Potter\');'],
                hint: 'Masukkan ke buku tabel (kolom) valuenya ("...")'
            }
        ]
    },
    {
        id: 'mysql-7',
        title: 'Membaca Isi Lemari (SELECT)',
        description: 'Melirik keseluruhan data yang direkap MySQL.',
        slides: [
            {
                type: 'theory',
                title: 'Bintang Utama SQL',
                content: 'Gunakan tanda Bintang (`*`) jika kamu rakus dan ingin mengambil seluruh kolom dari semua isi file yang ada di laci rak `pengguna`.\n\n```sql\nSELECT * FROM pengguna;\n```',
            },
            {
                type: 'theory',
                title: 'Membatasi Keterlihatan',
                content: 'Tapi saat tabelmu punya sejuta baris dengan data pribadi seperti password, kamu BISA ngatur kolom yang mau dilaporkan.\n\n```sql\nSELECT nama, email FROM pengguna;\n```\nSeketika, lumba-lumba pintar itu cuma memberikan nama dan email.',
            },
            {
                type: 'quiz',
                question: 'Simbol / Karakter apa yang mewakili makna "Seluruh Kolom" pada perintah pengambilan data di SQL?',
                options: [
                    '& (Ampersand)',
                    '# (Hashtag)',
                    '* (Asterisk/Bintang)',
                    '$ (Dollar)'
                ],
                correctIndex: 2,
                explanation: 'Ajaib! Di bahasa SQL, lambang bintang / asterisk `*` digunakan secara baku untuk arti kata "Semua Kolom".',
            }
        ]
    },
    {
        id: 'mysql-8',
        title: 'Mencari Kriteria (WHERE)',
        description: 'Lumba-lumba melesat masuk terowongan khusus.',
        slides: [
            {
                type: 'theory',
                title: 'Klausa Klausa Syarat',
                content: 'Kadang kita tidak mau semua data dimunculin ke aplikasi web kita. Bagaimana jika kita cuma minta data pengguna berumur 20 tahun? Tambahkan klausa pengawal di akhir: `WHERE`.\n\n```sql\nSELECT * FROM pengguna WHERE umur = 20;\n```',
            },
            {
                type: 'theory',
                title: 'Kombinasi Dan & Atau',
                content: 'Gunakan `AND` (atau) `OR` jika butuh aturan ribet.\n```sql\nSELECT nama FROM pendaftar \nWHERE umur > 18 AND asalkota = \'Jakarta\';\n```\nDatabase ini akan mem-filter ketat sesuai aturanmu tanpa kompromi!',
            },
            {
                type: 'fill-blank',
                instruction: 'Lengkapi kueri pencarian berdasarkan nama menggunakan awalan filter:',
                codeTemplate: 'SELECT * FROM users __BLANK__ name = "Budi";',
                answer: 'WHERE',
                hint: 'Kata kunci klausa bersyarat (di mana)'
            }
        ]
    },
    {
        id: 'mysql-9',
        title: 'Memperbarui Laci (UPDATE)',
        description: 'Kalau ada salah, pasti ada perbaikan.',
        slides: [
            {
                type: 'theory',
                title: 'Memoles yang Ada',
                content: 'Skenario: "Budi ingin mengganti alamat lamanya ke rumah barunya". Pakai alat `UPDATE` untuk mengganti data lama.\n\n```sql\nUPDATE pengguna \nSET alamat = \'Rumah Baru\' \nWHERE id = 5;\n```',
            },
            {
                type: 'theory',
                title: 'Peringatan Bahaya Level Tinggi',
                content: 'TOLONG! Pada `UPDATE`, kalau kamu tanpa sengaja TERTIDUR dan LUPA menulis `WHERE`, maka begini jadinya:\n```sql\nUPDATE pengguna SET alamat = \'Rumah Baru\';\n```\nKiamat Data! **Semua anggota** sejuta orang di dalam sistem websitemu akan ganti rumah semuanya menjadi "Rumah Baru!"',
            },
            {
                type: 'quiz',
                question: 'Perintah pembaruan UPDATE mutlak dan wajib mengharuskan kita menggunakan penahan klausa X, jika salah alamat bisa fatal. Apakah X itu?',
                options: [
                    'ORDER BY',
                    'WHERE',
                    'DELETE',
                    'LIKE'
                ],
                correctIndex: 1,
                explanation: 'Kamu lulus kalau kamu sudah tahu ini. Lupa WHERE berarti mengucapkan selamat tinggal dan dimarahi manager!',
            }
        ]
    },
    {
        id: 'mysql-10',
        title: 'Menghapus Data (DELETE)',
        description: 'Terkadang ikhlas melepas itu penting.',
        slides: [
            {
                type: 'theory',
                title: 'Delete Data Terpilih',
                content: 'Ini adalah satu lagi kueri yang mengharuskan kamu sangat hati-hati dan memakai WHERE. Untuk menghapus baris dari tabel, gunakan perintah `DELETE FROM ... WHERE ...`.',
            },
            {
                type: 'theory',
                title: 'Contoh Menghapus',
                content: 'Produk tas punggung (id = 12) di tabel produk habis terjual tak berbekas:\n```sql\nDELETE FROM produk WHERE id = 12;\n```\n*(Selamat jalan, Tas Punggung!)*',
            },
            {
                type: 'quiz',
                question: 'Apa jadinya kalau saya iseng menjalankan query DELETE FROM pengguna; secara langsung?',
                options: [
                    'Satu data pertama akan terhapus',
                    'Syntax Error',
                    'Tidak terjadi apa-apa',
                    'Semua isi data di tabel pengguna akan hilang musnah seketika'
                ],
                correctIndex: 3,
                explanation: 'Benar sekali (dan sedihnya). Menggunakan DELETE tanpa WHERE berarti menghilangkan seluruh baris tanpa sisa!',
            }
        ]
    },
    {
        id: 'mysql-11',
        title: 'Primary Key & Foreign Key',
        description: 'Identitas unik dan penghubung antar tabel.',
        slides: [
            {
                type: 'theory',
                title: 'Primary Key (Kunci Utama)',
                content: '**Primary Key (PK)** adalah kolom id yang diibaratkan seperti *Nomor Induk / KTP / NIK* pada dunia nyata. Tidak boleh ada 2 pengguna berbeda yang punya angka `id` (PK) yang sama. Angka ini mutlak milik 1 data saja.',
            },
            {
                type: 'theory',
                title: 'Foreign Key (Kunci Tamu)',
                content: '**Foreign Key (FK)** adalah KTP orang lain yang dititipkan atau merujuk silang antar dokumen. \n\nMisal tabel `Pesanan` (Orders). Kita butuh tahu ini pesanan milik siapa? Oh, letakkan saja `user_id` di situ. `user_id` di tabel Pesanan adalah Foreign Key, yang menunjuk ke `id` milik tabel Users.',
            },
            {
                type: 'fill-blank',
                instruction: 'Isi bagian yang kosong untuk relasi silang:',
                codeTemplate: 'Kunci _BLANK_ digunakan sebagai referensi kolom KTP di tabel berbeda.',
                answer: 'Foreign',
                hint: 'Bahasa inggris untuk Asing/Tamu'
            }
        ]
    },
    {
        id: 'mysql-12',
        title: 'Menggabungkan Tabel (JOIN)',
        description: 'Kombinasi tabel seperti detektif sejati.',
        slides: [
            {
                type: 'theory',
                title: 'INNER JOIN',
                content: 'Kekuatan sejati "RDBMS" (Relational Database) adalah kita memecah data di banyak tabel, lalu menggabunginya saat dibaca dengan operasi `JOIN`. \n\n**INNER JOIN** mencari irisan data yang ada hubungannya di kedua tabel.',
            },
            {
                type: 'theory',
                title: 'Sintaks INNER JOIN',
                content: 'Mari ambil keranjang belanja:\n```sql\nSELECT users.nama, pesanan.total \nFROM users\nINNER JOIN pesanan \nON users.id = pesanan.user_id;\n```\n*Artinya: Tampilkan nama Budi dan total tagihannya, di mana KTP Budi terikat dengan Kunci Tamu pesanan.*',
            },
            {
                type: 'quiz',
                question: 'Fungsi dari klausa "ON" dalam perintah JOIN di atas adalah?',
                options: [
                    'Mematikan database',
                    'Mengaktifkan fitur logging phpMyAdmin',
                    'Menyatakan kondisi kolom mana yang harus dicocokkan antar kedua tabel tersebut',
                    'Menyalakan lampu'
                ],
                correctIndex: 2,
                explanation: 'Tepat! Klausa ON memberitahu MySQL benang merah (titik hubung kunci) di antara 2 tabel.',
            }
        ]
    },
    {
        id: 'mysql-13',
        title: 'Pengurutan dan Limit',
        description: 'Merapikan data panjang menjadi masuk akal.',
        slides: [
            {
                type: 'theory',
                title: 'Mengurut Data (ORDER BY)',
                content: 'Untuk menyusun data dari A-Z atau dari Harga Tertinggi ke Terendah, gunakan perintah `ORDER BY kolom ASC / DESC`.\n\n- **ASC** (Ascending): Naik (A->Z, 1->10).\n- **DESC** (Descending): Turun (Z->A, 10->1)',
            },
            {
                type: 'theory',
                title: 'Membatasi Data (LIMIT)',
                content: 'Jika kamu cuma ingin "Top 3 Produk Terlaris", setelah kamu order by Descending, potong datanya pakai `LIMIT 3`.\n```sql\nSELECT nama, harga FROM produk\nORDER BY harga DESC\nLIMIT 3;\n```',
            },
            {
                type: 'drag-drop',
                instruction: 'Susun instruksi untuk mencari 5 user termuda dari datamu:',
                tokens: ['SELECT *', 'FROM users', 'ORDER BY umur ASC', 'LIMIT 5'],
                correctOrder: ['SELECT *', 'FROM users', 'ORDER BY umur ASC', 'LIMIT 5'],
                hint: 'Pilih semua, dari tabel, urutkan naik, batasi 5'
            }
        ]
    },
    {
        id: 'mysql-14',
        title: 'Fungsi Kesimpulan (Agregasi)',
        description: 'Matematika ajaib dalam database.',
        slides: [
            {
                type: 'theory',
                title: 'Fungsi Agregasi Dasar',
                content: 'MySQL sangat jago dalam bermatematika mendadak. Kamu cukup memanggil fungsi:\n\n- `COUNT(id)` : Menghitung "Ada berapa total baris data?"\n- `SUM(harga)` : Menjumlahkan angka (Total Omset).\n- `AVG(umur)` : Mencari nilai Rata-rata.\n- `MAX(harga)` : Mencari yang terbesar / tertinggi.',
            },
            {
                type: 'theory',
                title: 'Bagaimana memakainya?',
                content: 'Sangat mudah, fungsi agregasi ditaruh langsung di belakang opsi `SELECT`. Contoh:\n\n```sql\nSELECT COUNT(id) FROM users;\n```\n_Outputnya cuma 1 angka (Misal: 450), yang artinya kamu punya 450 member yang terdaftar._',
            },
            {
                type: 'fill-blank',
                instruction: 'Dapatkan total omset penjualan (jumlah kolom total):',
                codeTemplate: 'SELECT __BLANK__(total) FROM penjualan;',
                answer: 'SUM',
                hint: 'Fungsi akumulasi matematika / Penjumlahan'
            }
        ]
    }
];
