import { DocsTopic } from '../docs-data';

export const htmlTopics: DocsTopic[] = [
    {
        id: 'introduction', title: 'Introduction', description: 'Apa itu HTML dan bagaimana cara kerjanya.', language: 'html',
        content: `<h2>Apa itu HTML?</h2>
<p>HTML (HyperText Markup Language) adalah bahasa standar untuk membuat halaman web. HTML mendeskripsikan struktur halaman web menggunakan markup.</p>
<h3>Struktur Dasar</h3>
<p>Setiap dokumen HTML dimulai dengan deklarasi <code>&lt;!DOCTYPE html&gt;</code> dan terdiri dari elemen-elemen yang dibungkus oleh tag pembuka dan penutup.</p>
<ul>
<li><code>&lt;html&gt;</code> — elemen root</li>
<li><code>&lt;head&gt;</code> — berisi metadata</li>
<li><code>&lt;body&gt;</code> — berisi konten yang ditampilkan</li>
</ul>`,
        codeExample: `<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is my first web page.</p>
</body>
</html>`,
    },
    {
        id: 'headings', title: 'Headings', description: 'Heading dari h1 sampai h6 untuk judul konten.', language: 'html',
        content: `<h2>HTML Headings</h2>
<p>HTML memiliki 6 level heading, dari <code>&lt;h1&gt;</code> (paling besar/penting) hingga <code>&lt;h6&gt;</code> (paling kecil).</p>
<h3>Tips Penggunaan</h3>
<ul>
<li>Gunakan <code>&lt;h1&gt;</code> hanya sekali per halaman (untuk judul utama)</li>
<li>Jangan skip level heading (misalnya dari h1 langsung ke h3)</li>
<li>Heading penting untuk SEO dan aksesibilitas</li>
</ul>`,
        codeExample: `<h1>Heading 1 - Judul Utama</h1>
<h2>Heading 2 - Sub Judul</h2>
<h3>Heading 3 - Sub Sub Judul</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 - Paling Kecil</h6>`,
    },
    {
        id: 'paragraphs', title: 'Paragraphs & Text', description: 'Paragraf, formatting teks, dan line breaks.', language: 'html',
        content: `<h2>Paragraphs & Text Formatting</h2>
<p>Elemen <code>&lt;p&gt;</code> digunakan untuk membuat paragraf. HTML juga menyediakan berbagai elemen untuk formatting teks.</p>
<h3>Text Formatting Elements</h3>
<ul>
<li><code>&lt;strong&gt;</code> — teks tebal (penting)</li>
<li><code>&lt;em&gt;</code> — teks miring (penekanan)</li>
<li><code>&lt;mark&gt;</code> — teks yang di-highlight</li>
<li><code>&lt;del&gt;</code> — teks yang dicoret</li>
<li><code>&lt;ins&gt;</code> — teks yang ditambahkan</li>
<li><code>&lt;sub&gt;</code> — subscript, <code>&lt;sup&gt;</code> — superscript</li>
<li><code>&lt;br&gt;</code> — line break</li>
<li><code>&lt;hr&gt;</code> — horizontal rule (garis pemisah)</li>
</ul>`,
        codeExample: `<p>Ini adalah <strong>paragraf pertama</strong> dengan teks tebal.</p>
<p>Ini paragraf dengan <em>teks miring</em> dan <mark>highlighted text</mark>.</p>
<p><del>Teks dihapus</del> dan <ins>teks ditambahkan</ins>.</p>
<p>H<sub>2</sub>O dan x<sup>2</sup></p>
<hr>
<p>Baris pertama.<br>Baris kedua setelah line break.</p>`,
    },
    {
        id: 'links', title: 'Links', description: 'Membuat hyperlink dengan tag anchor.', language: 'html',
        content: `<h2>HTML Links</h2>
<p>Link dibuat dengan elemen <code>&lt;a&gt;</code> (anchor). Atribut <code>href</code> menentukan URL tujuan.</p>
<h3>Atribut Penting</h3>
<ul>
<li><code>href</code> — URL tujuan link</li>
<li><code>target="_blank"</code> — buka di tab baru</li>
<li><code>title</code> — tooltip saat hover</li>
<li><code>rel="noopener"</code> — keamanan untuk target _blank</li>
</ul>
<h3>Jenis Link</h3>
<ul>
<li><strong>Absolute URL</strong>: <code>https://google.com</code></li>
<li><strong>Relative URL</strong>: <code>about.html</code></li>
<li><strong>Anchor</strong>: <code>#section1</code></li>
<li><strong>Email</strong>: <code>mailto:email@example.com</code></li>
<li><strong>Phone</strong>: <code>tel:+62123456</code></li>
</ul>`,
        codeExample: `<h2>Contoh Links</h2>
<p><a href="https://google.com">Link ke Google</a></p>
<p><a href="https://github.com" target="_blank">Buka GitHub (tab baru)</a></p>
<p><a href="#section1">Link ke Section 1 (anchor)</a></p>
<p><a href="mailto:hello@example.com">Kirim Email</a></p>
<p><a href="tel:+6281234567890">Telepon</a></p>

<div id="section1" style="margin-top:100px">
  <h3>Section 1</h3>
  <p>Kamu sampai di section 1!</p>
</div>`,
    },
    {
        id: 'images', title: 'Images', description: 'Menampilkan gambar di halaman web.', language: 'html',
        content: `<h2>HTML Images</h2>
<p>Elemen <code>&lt;img&gt;</code> digunakan untuk menampilkan gambar. Ini adalah elemen self-closing (tidak perlu tag penutup).</p>
<h3>Atribut Penting</h3>
<ul>
<li><code>src</code> — path/URL ke file gambar</li>
<li><code>alt</code> — teks alternatif (wajib untuk aksesibilitas)</li>
<li><code>width</code> / <code>height</code> — ukuran gambar</li>
<li><code>loading="lazy"</code> — lazy loading untuk performa</li>
</ul>
<h3>Format Gambar</h3>
<ul>
<li><strong>JPG</strong> — foto dan gambar dengan banyak warna</li>
<li><strong>PNG</strong> — gambar dengan transparansi</li>
<li><strong>SVG</strong> — gambar vektor, bisa di-scale tanpa pecah</li>
<li><strong>WebP</strong> — format modern dengan kompresi lebih baik</li>
</ul>`,
        codeExample: `<h2>Image Examples</h2>
<img src="https://picsum.photos/300/200" alt="Random Image" width="300">
<p>Gambar di atas menggunakan Picsum Photos.</p>

<figure>
  <img src="https://picsum.photos/200/150" alt="Another Image">
  <figcaption>Caption untuk gambar</figcaption>
</figure>`,
    },
    {
        id: 'lists', title: 'Lists', description: 'Ordered list, unordered list, dan description list.', language: 'html',
        content: `<h2>HTML Lists</h2>
<p>HTML menyediakan 3 jenis list:</p>
<ul>
<li><code>&lt;ul&gt;</code> — Unordered list (bullet points)</li>
<li><code>&lt;ol&gt;</code> — Ordered list (bernomor)</li>
<li><code>&lt;dl&gt;</code> — Description list</li>
</ul>
<h3>Atribut Khusus &lt;ol&gt;</h3>
<ul>
<li><code>type="A"</code> — huruf besar (A, B, C)</li>
<li><code>type="a"</code> — huruf kecil (a, b, c)</li>
<li><code>type="I"</code> — romawi besar (I, II, III)</li>
<li><code>start="5"</code> — mulai dari nomor 5</li>
<li><code>reversed</code> — urutkan dari besar ke kecil</li>
</ul>`,
        codeExample: `<h3>Unordered List</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>Ordered List</h3>
<ol type="1">
  <li>Belajar HTML dulu</li>
  <li>Lanjut ke CSS</li>
  <li>Kemudian JavaScript</li>
</ol>

<h3>Nested List</h3>
<ul>
  <li>Frontend
    <ul><li>HTML</li><li>CSS</li></ul>
  </li>
  <li>Backend
    <ul><li>PHP</li><li>Node.js</li></ul>
  </li>
</ul>

<h3>Description List</h3>
<dl>
  <dt><strong>HTML</strong></dt>
  <dd>Bahasa markup untuk struktur web</dd>
  <dt><strong>CSS</strong></dt>
  <dd>Bahasa styling untuk tampilan web</dd>
</dl>`,
    },
    {
        id: 'tables', title: 'Tables', description: 'Membuat tabel dengan rows dan columns.', language: 'html',
        content: `<h2>HTML Tables</h2>
<p>Tables digunakan untuk menampilkan data tabular. Elemen utama:</p>
<ul>
<li><code>&lt;table&gt;</code> — container tabel</li>
<li><code>&lt;thead&gt;</code> — header group</li>
<li><code>&lt;tbody&gt;</code> — body group</li>
<li><code>&lt;tfoot&gt;</code> — footer group</li>
<li><code>&lt;tr&gt;</code> — table row</li>
<li><code>&lt;th&gt;</code> — table header cell</li>
<li><code>&lt;td&gt;</code> — table data cell</li>
</ul>
<h3>Atribut Penting</h3>
<ul>
<li><code>colspan</code> — menggabungkan kolom</li>
<li><code>rowspan</code> — menggabungkan baris</li>
</ul>`,
        codeExample: `<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
  <thead>
    <tr>
      <th>Bahasa</th>
      <th>Tipe</th>
      <th>Kesulitan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Markup</td>
      <td>⭐</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Stylesheet</td>
      <td>⭐⭐</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Programming</td>
      <td>⭐⭐⭐</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3" style="text-align:center"><em>Total: 3 bahasa</em></td>
    </tr>
  </tfoot>
</table>`,
    },
    {
        id: 'forms', title: 'Forms', description: 'Input forms untuk mengumpulkan data dari user.', language: 'html',
        content: `<h2>HTML Forms</h2>
<p>Forms digunakan untuk mengumpulkan input dari pengguna. Elemen utama:</p>
<ul>
<li><code>&lt;form&gt;</code> — container form</li>
<li><code>&lt;input&gt;</code> — berbagai jenis input</li>
<li><code>&lt;textarea&gt;</code> — input teks panjang</li>
<li><code>&lt;select&gt;</code> — dropdown menu</li>
<li><code>&lt;button&gt;</code> — tombol submit</li>
<li><code>&lt;label&gt;</code> — label untuk input (penting untuk aksesibilitas)</li>
</ul>
<h3>Atribut Form</h3>
<ul>
<li><code>action</code> — URL tujuan pengiriman data</li>
<li><code>method</code> — GET atau POST</li>
<li><code>enctype</code> — tipe encoding (penting untuk file upload)</li>
</ul>`,
        codeExample: `<form style="max-width:400px">
  <div style="margin-bottom:12px">
    <label>Name:</label><br>
    <input type="text" placeholder="Your name" style="width:100%;padding:8px;border-radius:6px;border:1px solid #ccc">
  </div>
  <div style="margin-bottom:12px">
    <label>Email:</label><br>
    <input type="email" placeholder="you@example.com" style="width:100%;padding:8px;border-radius:6px;border:1px solid #ccc">
  </div>
  <div style="margin-bottom:12px">
    <label>Language:</label><br>
    <select style="width:100%;padding:8px;border-radius:6px;border:1px solid #ccc">
      <option>HTML</option>
      <option>CSS</option>
      <option>JavaScript</option>
      <option>PHP</option>
    </select>
  </div>
  <div style="margin-bottom:12px">
    <label>Message:</label><br>
    <textarea rows="3" style="width:100%;padding:8px;border-radius:6px;border:1px solid #ccc" placeholder="Your message..."></textarea>
  </div>
  <button type="button" style="padding:10px 24px;background:#6DD5C4;color:white;border:none;border-radius:8px;font-weight:bold;cursor:pointer">Submit</button>
</form>`,
    },
    {
        id: 'semantic', title: 'Semantic HTML', description: 'Elemen semantic untuk struktur halaman yang lebih bermakna.', language: 'html',
        content: `<h2>Semantic HTML</h2>
<p>Semantic elements secara jelas mendeskripsikan makna kontennya kepada browser dan developer.</p>
<h3>Semantic Elements</h3>
<ul>
<li><code>&lt;header&gt;</code> — header halaman/section</li>
<li><code>&lt;nav&gt;</code> — navigasi</li>
<li><code>&lt;main&gt;</code> — konten utama</li>
<li><code>&lt;article&gt;</code> — konten independen</li>
<li><code>&lt;section&gt;</code> — section tematik</li>
<li><code>&lt;aside&gt;</code> — konten sidebar</li>
<li><code>&lt;footer&gt;</code> — footer halaman/section</li>
<li><code>&lt;figure&gt;</code> — konten media dengan caption</li>
<li><code>&lt;time&gt;</code> — waktu/tanggal</li>
</ul>
<h3>Kenapa Penting?</h3>
<ul>
<li>SEO lebih baik — mesin pencari memahami konten</li>
<li>Aksesibilitas — screen reader bisa navigasi lebih mudah</li>
<li>Kode lebih mudah dibaca dan di-maintain</li>
</ul>`,
        codeExample: `<header style="background:#1e293b;color:white;padding:16px;border-radius:8px 8px 0 0">
  <h1 style="margin:0">My Website</h1>
  <nav>
    <a href="#" style="color:#6DD5C4;margin-right:12px">Home</a>
    <a href="#" style="color:#6DD5C4;margin-right:12px">About</a>
    <a href="#" style="color:#6DD5C4">Contact</a>
  </nav>
</header>

<main style="padding:16px;border:1px solid #e2e8f0;border-top:none">
  <article>
    <h2>Article Title</h2>
    <p>This is a semantic article element.</p>
  </article>
  <aside style="background:#f8fafc;padding:12px;border-radius:8px;margin-top:12px">
    <h3>Sidebar</h3>
    <p>Related content here.</p>
  </aside>
</main>

<footer style="background:#1e293b;color:#94a3b8;padding:12px;text-align:center;border-radius:0 0 8px 8px">
  <p style="margin:0">&copy; 2024 My Website</p>
</footer>`,
    },
    {
        id: 'attributes', title: 'Attributes', description: 'Atribut HTML untuk mengonfigurasi elemen.', language: 'html',
        content: `<h2>HTML Attributes</h2>
<p>Atribut memberikan informasi tambahan pada elemen HTML. Ditulis di dalam tag pembuka.</p>
<h3>Atribut Global (bisa dipakai di semua elemen)</h3>
<ul>
<li><code>id</code> — identifier unik</li>
<li><code>class</code> — nama class untuk CSS/JS</li>
<li><code>style</code> — inline CSS</li>
<li><code>title</code> — tooltip saat hover</li>
<li><code>hidden</code> — menyembunyikan elemen</li>
<li><code>data-*</code> — atribut data kustom</li>
<li><code>tabindex</code> — urutan tab navigasi</li>
<li><code>contenteditable</code> — membuat elemen bisa diedit</li>
<li><code>draggable</code> — membuat elemen bisa di-drag</li>
</ul>
<h3>Aturan Penulisan</h3>
<ul>
<li>Selalu gunakan huruf kecil</li>
<li>Nilai atribut dibungkus tanda kutip (disarankan double quotes)</li>
<li>Boolean attribute cukup ditulis namanya saja: <code>disabled</code>, <code>required</code></li>
</ul>`,
        codeExample: `<h2>Attribute Examples</h2>

<!-- id dan class -->
<p id="intro" class="highlight" style="background:#FEF3C7;padding:8px;border-radius:6px">
  Elemen ini punya id="intro" dan class="highlight"
</p>

<!-- title (hover tooltip) -->
<p title="Ini tooltip yang muncul saat hover">Hover di atas teks ini!</p>

<!-- contenteditable -->
<div contenteditable="true" style="border:2px dashed #6DD5C4;padding:12px;border-radius:8px;min-height:50px">
  Klik di sini dan coba ketik sesuatu! Elemen ini bisa diedit.
</div>

<!-- data attributes -->
<button data-action="save" data-id="123" onclick="alert('data-id: ' + this.dataset.id)" style="margin-top:8px;padding:8px 16px;background:#7EB8F0;color:white;border:none;border-radius:6px;cursor:pointer">
  Klik (data-id: 123)
</button>

<!-- hidden -->
<p>Elemen di bawah ini di-hidden:</p>
<p hidden>Kamu tidak bisa melihat ini!</p>`,
    },
    {
        id: 'comments', title: 'Comments', description: 'Komentar dalam kode HTML.', language: 'html',
        content: `<h2>HTML Comments</h2>
<p>Komentar adalah teks yang <strong>tidak ditampilkan</strong> di browser. Berguna untuk:</p>
<ul>
<li>Memberi catatan di kode untuk developer lain</li>
<li>Menonaktifkan (disable) sebagian kode sementara</li>
<li>Membagi section dalam kode</li>
<li>Dokumentasi kode</li>
</ul>
<h3>Syntax</h3>
<p>Komentar ditulis dengan <code>&lt;!-- komentar --&gt;</code></p>
<h3>Tips</h3>
<ul>
<li>Komentar tidak boleh nested (komentar di dalam komentar)</li>
<li>Jangan taruh informasi sensitif di komentar (masih bisa dilihat di source code)</li>
<li>Gunakan komentar secukupnya, kode yang baik sudah self-documenting</li>
</ul>`,
        codeExample: `<!-- Ini adalah komentar HTML -->
<h2>Halaman Saya</h2>

<!-- Section: Header -->
<header style="background:#1e293b;color:white;padding:12px;border-radius:8px">
  <h3 style="margin:0">My Site</h3>
</header>

<!-- Section: Content -->
<div style="padding:12px">
  <p>Konten yang ditampilkan.</p>
  
  <!-- TODO: Tambahkan gambar di sini nanti -->
  
  <!-- <p>Baris ini di-disable dengan komentar</p> -->
</div>

<!-- Section: Footer -->
<footer style="background:#f1f5f9;padding:12px;border-radius:8px;text-align:center">
  <p style="margin:0">Footer — lihat source code untuk melihat komentar!</p>
</footer>`,
    },
    {
        id: 'block-inline', title: 'Block & Inline', description: 'Perbedaan elemen block-level dan inline.', language: 'html',
        content: `<h2>Block vs Inline Elements</h2>
<p>Setiap elemen HTML memiliki display value default: <strong>block</strong> atau <strong>inline</strong>.</p>
<h3>Block Elements</h3>
<ul>
<li>Selalu mulai di baris baru</li>
<li>Mengambil lebar penuh yang tersedia</li>
<li>Contoh: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>, <code>&lt;table&gt;</code>, <code>&lt;form&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;section&gt;</code></li>
</ul>
<h3>Inline Elements</h3>
<ul>
<li>Tidak mulai di baris baru</li>
<li>Hanya mengambil lebar sesuai konten</li>
<li>Contoh: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;br&gt;</code></li>
</ul>
<h3>Aturan Penting</h3>
<ul>
<li>Block bisa berisi block dan inline</li>
<li>Inline <strong>tidak boleh</strong> berisi block (kecuali <code>&lt;a&gt;</code> di HTML5)</li>
</ul>`,
        codeExample: `<h3>Block Elements</h3>
<div style="background:#DBEAFE;padding:8px;margin:4px 0;border-radius:4px">Div 1 (block - full width)</div>
<div style="background:#DBEAFE;padding:8px;margin:4px 0;border-radius:4px">Div 2 (block - new line)</div>
<p style="background:#FEF3C7;padding:8px;border-radius:4px">Paragraph (block element)</p>

<h3>Inline Elements</h3>
<p>
  <span style="background:#D1FAE5;padding:4px;border-radius:4px">Span 1</span>
  <span style="background:#FCE7F3;padding:4px;border-radius:4px">Span 2</span>
  <a href="#" style="background:#E0E7FF;padding:4px;border-radius:4px">Link</a>
  <strong style="background:#FEF9C3;padding:4px;border-radius:4px">Bold</strong>
  — semua inline, satu baris!
</p>

<h3>Block di dalam Block (OK)</h3>
<div style="background:#F1F5F9;padding:12px;border-radius:8px">
  <p style="margin:0">Paragraf di dalam div — valid!</p>
</div>`,
    },
    {
        id: 'div-span', title: 'Div & Span', description: 'Kontainer generik block dan inline.', language: 'html',
        content: `<h2>Div & Span</h2>
<p><code>&lt;div&gt;</code> dan <code>&lt;span&gt;</code> adalah elemen kontainer generik tanpa makna semantik. Digunakan untuk grouping dan styling.</p>
<h3>&lt;div&gt; — Block Container</h3>
<ul>
<li>Kontainer block-level</li>
<li>Digunakan untuk grouping elemen dan membuat layout</li>
<li>Sering dikombinasikan dengan CSS class</li>
</ul>
<h3>&lt;span&gt; — Inline Container</h3>
<ul>
<li>Kontainer inline</li>
<li>Digunakan untuk styling sebagian teks</li>
<li>Tidak mengubah layout (tetap inline)</li>
</ul>
<h3>Kapan Menggunakan?</h3>
<ul>
<li>Gunakan elemen semantik dulu (header, nav, section, dll)</li>
<li>Gunakan div/span hanya jika tidak ada elemen semantik yang cocok</li>
</ul>`,
        codeExample: `<h3>Div sebagai Layout Container</h3>
<div style="display:flex;gap:12px">
  <div style="flex:1;background:#DBEAFE;padding:16px;border-radius:8px;text-align:center">
    <strong>Card 1</strong>
    <p style="margin:8px 0 0">Menggunakan div</p>
  </div>
  <div style="flex:1;background:#D1FAE5;padding:16px;border-radius:8px;text-align:center">
    <strong>Card 2</strong>
    <p style="margin:8px 0 0">Untuk layout</p>
  </div>
  <div style="flex:1;background:#FEF3C7;padding:16px;border-radius:8px;text-align:center">
    <strong>Card 3</strong>
    <p style="margin:8px 0 0">Flexbox cards</p>
  </div>
</div>

<h3>Span untuk Styling Teks</h3>
<p>
  Belajar <span style="color:#F06D5B;font-weight:bold">HTML</span>,
  <span style="color:#7EB8F0;font-weight:bold">CSS</span>, dan
  <span style="color:#F5C87A;font-weight:bold">JavaScript</span>
  itu menyenangkan!
</p>`,
    },
    {
        id: 'classes-id', title: 'Classes & ID', description: 'Menggunakan class dan id untuk styling dan scripting.', language: 'html',
        content: `<h2>HTML Classes & ID</h2>
<p>Atribut <code>class</code> dan <code>id</code> digunakan untuk mengidentifikasi elemen untuk CSS dan JavaScript.</p>
<h3>Class</h3>
<ul>
<li>Bisa dipakai berulang pada banyak elemen</li>
<li>Satu elemen bisa punya banyak class (dipisah spasi)</li>
<li>Dipilih di CSS dengan <code>.namaClass</code></li>
</ul>
<h3>ID</h3>
<ul>
<li>Harus unik — hanya satu elemen per halaman</li>
<li>Dipilih di CSS dengan <code>#namaId</code></li>
<li>Bisa digunakan sebagai anchor link (<code>href="#id"</code>)</li>
</ul>`,
        codeExample: `<style>
  .card { background:#F1F5F9; padding:16px; border-radius:8px; margin:8px 0; }
  .highlight { border-left: 4px solid #6DD5C4; }
  .text-blue { color: #7EB8F0; }
  #special-card { background: linear-gradient(135deg, #6DD5C4, #7EB8F0); color: white; }
</style>

<div class="card">Card dengan class "card"</div>
<div class="card highlight">Card dengan class "card" + "highlight"</div>
<div class="card highlight text-blue">Card dengan 3 class sekaligus</div>
<div id="special-card" class="card">Card dengan id "special-card"</div>`,
    },
    {
        id: 'iframes', title: 'Iframes', description: 'Menyisipkan halaman web lain di dalam halaman.', language: 'html',
        content: `<h2>HTML Iframes</h2>
<p>Elemen <code>&lt;iframe&gt;</code> digunakan untuk menyisipkan halaman web lain di dalam halaman kamu.</p>
<h3>Atribut</h3>
<ul>
<li><code>src</code> — URL halaman yang disisipkan</li>
<li><code>width</code> / <code>height</code> — ukuran iframe</li>
<li><code>title</code> — deskripsi untuk aksesibilitas</li>
<li><code>loading="lazy"</code> — lazy loading</li>
<li><code>sandbox</code> — batasan keamanan</li>
<li><code>allow</code> — izinkan fitur tertentu</li>
</ul>
<h3>Kegunaan</h3>
<ul>
<li>Embed video YouTube</li>
<li>Embed Google Maps</li>
<li>Embed konten pihak ketiga</li>
</ul>`,
        codeExample: `<h3>Embed YouTube Video</h3>
<iframe 
  width="100%" 
  height="250" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media" 
  allowfullscreen
  style="border-radius:12px">
</iframe>

<h3>Iframe dengan Border</h3>
<iframe 
  src="https://example.com" 
  width="100%" 
  height="150" 
  title="Example" 
  style="border:2px solid #e2e8f0;border-radius:8px"
  loading="lazy">
</iframe>`,
    },
    {
        id: 'head-meta', title: 'Head & Meta', description: 'Metadata halaman, SEO, dan pengaturan head.', language: 'html',
        content: `<h2>HTML Head & Meta Tags</h2>
<p>Elemen <code>&lt;head&gt;</code> berisi metadata — informasi tentang halaman yang tidak ditampilkan langsung.</p>
<h3>Elemen di Dalam Head</h3>
<ul>
<li><code>&lt;title&gt;</code> — judul halaman (ditampilkan di tab browser)</li>
<li><code>&lt;meta&gt;</code> — metadata (charset, viewport, description, dll)</li>
<li><code>&lt;link&gt;</code> — menghubungkan file eksternal (CSS, favicon)</li>
<li><code>&lt;style&gt;</code> — CSS internal</li>
<li><code>&lt;script&gt;</code> — JavaScript</li>
</ul>
<h3>Meta Tags Penting</h3>
<ul>
<li><code>charset</code> — encoding karakter (selalu gunakan UTF-8)</li>
<li><code>viewport</code> — untuk responsif di mobile</li>
<li><code>description</code> — deskripsi halaman untuk SEO</li>
<li><code>keywords</code> — kata kunci SEO</li>
<li><code>author</code> — penulis halaman</li>
</ul>`,
        codeExample: `<!DOCTYPE html>
<html lang="id">
<head>
  <!-- Encoding -->
  <meta charset="UTF-8">
  
  <!-- Responsive viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO -->
  <title>Judul Halaman Saya</title>
  <meta name="description" content="Deskripsi halaman untuk mesin pencari">
  <meta name="keywords" content="html, css, javascript, belajar">
  <meta name="author" content="Nama Developer">
  
  <!-- Social Media (Open Graph) -->
  <meta property="og:title" content="Judul untuk Share">
  <meta property="og:description" content="Deskripsi saat di-share">
  <meta property="og:image" content="https://example.com/image.jpg">
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  
  <!-- External CSS -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Konten halaman</h1>
</body>
</html>`,
    },
    {
        id: 'entities', title: 'Entities', description: 'Karakter khusus dan simbol HTML.', language: 'html',
        content: `<h2>HTML Entities</h2>
<p>HTML Entities digunakan untuk menampilkan karakter-karakter khusus yang memiliki arti di HTML atau karakter yang tidak ada di keyboard.</p>
<h3>Format Entity</h3>
<ul>
<li><strong>Named</strong>: <code>&amp;nama;</code> (contoh: <code>&amp;amp;</code>)</li>
<li><strong>Numeric</strong>: <code>&amp;#nomor;</code> (contoh: <code>&amp;#38;</code>)</li>
</ul>
<h3>Entity yang Sering Digunakan</h3>
<ul>
<li><code>&amp;lt;</code> → &lt; (less than)</li>
<li><code>&amp;gt;</code> → &gt; (greater than)</li>
<li><code>&amp;amp;</code> → &amp; (ampersand)</li>
<li><code>&amp;quot;</code> → " (double quote)</li>
<li><code>&amp;apos;</code> → ' (single quote)</li>
<li><code>&amp;nbsp;</code> → non-breaking space</li>
<li><code>&amp;copy;</code> → © (copyright)</li>
<li><code>&amp;reg;</code> → ® (registered)</li>
<li><code>&amp;trade;</code> → ™ (trademark)</li>
</ul>`,
        codeExample: `<h3>Karakter Wajib di-Escape</h3>
<p>Tag HTML: &lt;div&gt; ditulis sebagai &amp;lt;div&amp;gt;</p>
<p>Ampersand: Tom &amp; Jerry</p>

<h3>Simbol Umum</h3>
<table border="1" cellpadding="8" style="border-collapse:collapse">
  <tr><th>Entity</th><th>Hasil</th><th>Deskripsi</th></tr>
  <tr><td>&amp;copy;</td><td>&copy;</td><td>Copyright</td></tr>
  <tr><td>&amp;reg;</td><td>&reg;</td><td>Registered</td></tr>
  <tr><td>&amp;trade;</td><td>&trade;</td><td>Trademark</td></tr>
  <tr><td>&amp;euro;</td><td>&euro;</td><td>Euro</td></tr>
  <tr><td>&amp;pound;</td><td>&pound;</td><td>Pound</td></tr>
  <tr><td>&amp;hearts;</td><td>&hearts;</td><td>Heart</td></tr>
  <tr><td>&amp;larr;</td><td>&larr;</td><td>Left arrow</td></tr>
  <tr><td>&amp;rarr;</td><td>&rarr;</td><td>Right arrow</td></tr>
</table>

<h3>Non-Breaking Space</h3>
<p>10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;km (spasi tidak akan dipecah)</p>`,
    },
    {
        id: 'audio-video', title: 'Audio & Video', description: 'Menambahkan media audio dan video.', language: 'html',
        content: `<h2>HTML Audio & Video</h2>
<p>HTML5 menyediakan elemen native untuk memutar audio dan video tanpa plugin.</p>
<h3>&lt;video&gt; Attributes</h3>
<ul>
<li><code>src</code> — URL file video</li>
<li><code>controls</code> — tampilkan kontrol play/pause/volume</li>
<li><code>autoplay</code> — putar otomatis</li>
<li><code>muted</code> — mulai tanpa suara</li>
<li><code>loop</code> — putar berulang</li>
<li><code>poster</code> — gambar thumbnail sebelum diputar</li>
<li><code>preload</code> — auto/metadata/none</li>
</ul>
<h3>&lt;audio&gt; Attributes</h3>
<p>Sama seperti video, minus <code>poster</code> dan dimensi visual.</p>
<h3>Format yang Didukung</h3>
<ul>
<li><strong>Video</strong>: MP4 (H.264), WebM, Ogg</li>
<li><strong>Audio</strong>: MP3, WAV, Ogg, AAC</li>
</ul>`,
        codeExample: `<h3>Video Player</h3>
<video width="100%" controls style="border-radius:8px;max-height:200px" poster="https://picsum.photos/400/200">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Browser kamu tidak support tag video.
</video>

<h3>Audio Player</h3>
<audio controls style="width:100%;margin-top:8px">
  <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Browser kamu tidak support tag audio.
</audio>

<h3>Video GIF-like (autoplay, muted, loop)</h3>
<video width="200" autoplay muted loop style="border-radius:8px;margin-top:8px">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
</video>`,
    },
    {
        id: 'input-types', title: 'Input Types', description: 'Semua jenis input HTML yang tersedia.', language: 'html',
        content: `<h2>HTML Input Types</h2>
<p>Elemen <code>&lt;input&gt;</code> memiliki banyak tipe yang berbeda untuk berbagai jenis data.</p>
<h3>Text Inputs</h3>
<ul>
<li><code>text</code> — teks biasa</li>
<li><code>password</code> — password (tersembunyi)</li>
<li><code>email</code> — email (validasi otomatis)</li>
<li><code>url</code> — URL</li>
<li><code>tel</code> — nomor telepon</li>
<li><code>search</code> — search box</li>
</ul>
<h3>Number & Date</h3>
<ul>
<li><code>number</code> — angka dengan spinner</li>
<li><code>range</code> — slider</li>
<li><code>date</code> — tanggal</li>
<li><code>time</code> — waktu</li>
<li><code>datetime-local</code> — tanggal + waktu</li>
<li><code>month</code> — bulan + tahun</li>
</ul>
<h3>Lainnya</h3>
<ul>
<li><code>checkbox</code> — centang</li>
<li><code>radio</code> — pilihan tunggal</li>
<li><code>color</code> — color picker</li>
<li><code>file</code> — upload file</li>
<li><code>hidden</code> — tersembunyi</li>
</ul>`,
        codeExample: `<div style="display:grid;gap:12px;max-width:400px">
  <div>
    <label><strong>Text:</strong></label><br>
    <input type="text" placeholder="Teks biasa" style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <div>
    <label><strong>Password:</strong></label><br>
    <input type="password" value="secret123" style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <div>
    <label><strong>Email:</strong></label><br>
    <input type="email" placeholder="name@email.com" style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <div>
    <label><strong>Number:</strong></label><br>
    <input type="number" value="5" min="0" max="100" style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <div>
    <label><strong>Range:</strong></label><br>
    <input type="range" min="0" max="100" value="50" style="width:100%">
  </div>
  <div>
    <label><strong>Date:</strong></label><br>
    <input type="date" style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <div>
    <label><strong>Color:</strong></label>
    <input type="color" value="#6DD5C4">
  </div>
  <div>
    <label><strong>Checkbox:</strong></label><br>
    <input type="checkbox" id="c1"><label for="c1"> HTML</label>
    <input type="checkbox" id="c2"><label for="c2"> CSS</label>
    <input type="checkbox" id="c3" checked><label for="c3"> JS</label>
  </div>
  <div>
    <label><strong>Radio:</strong></label><br>
    <input type="radio" name="lvl" id="r1"><label for="r1"> Pemula</label>
    <input type="radio" name="lvl" id="r2" checked><label for="r2"> Menengah</label>
    <input type="radio" name="lvl" id="r3"><label for="r3"> Lanjutan</label>
  </div>
  <div>
    <label><strong>File:</strong></label><br>
    <input type="file" accept="image/*">
  </div>
</div>`,
    },
    {
        id: 'form-attributes', title: 'Form Attributes', description: 'Atribut validasi dan konfigurasi form.', language: 'html',
        content: `<h2>Form Attributes</h2>
<p>HTML5 menyediakan banyak atribut untuk validasi dan konfigurasi form tanpa JavaScript.</p>
<h3>Validation Attributes</h3>
<ul>
<li><code>required</code> — wajib diisi</li>
<li><code>minlength</code> / <code>maxlength</code> — panjang teks</li>
<li><code>min</code> / <code>max</code> — nilai angka</li>
<li><code>pattern</code> — regex pattern</li>
<li><code>step</code> — interval angka yang valid</li>
</ul>
<h3>Other Useful Attributes</h3>
<ul>
<li><code>placeholder</code> — teks placeholder</li>
<li><code>autofocus</code> — fokus otomatis saat halaman dimuat</li>
<li><code>autocomplete</code> — on/off autocomplete</li>
<li><code>readonly</code> — hanya bisa dibaca</li>
<li><code>disabled</code> — dinonaktifkan</li>
<li><code>multiple</code> — bisa pilih banyak (file/email)</li>
</ul>`,
        codeExample: `<form onsubmit="event.preventDefault();alert('Form valid!')" style="max-width:400px">
  <div style="margin-bottom:10px">
    <label><strong>Username (required, 3-15 chars):</strong></label><br>
    <input type="text" required minlength="3" maxlength="15" placeholder="3-15 karakter" style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <div style="margin-bottom:10px">
    <label><strong>Age (18-99):</strong></label><br>
    <input type="number" min="18" max="99" placeholder="18-99" style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <div style="margin-bottom:10px">
    <label><strong>Phone (pattern: 08xxx):</strong></label><br>
    <input type="tel" pattern="08[0-9]{8,12}" placeholder="081234567890" style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <div style="margin-bottom:10px">
    <label><strong>Readonly:</strong></label><br>
    <input type="text" value="Tidak bisa diedit" readonly style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc;background:#f1f5f9">
  </div>
  <div style="margin-bottom:10px">
    <label><strong>Disabled:</strong></label><br>
    <input type="text" value="Dinonaktifkan" disabled style="width:100%;padding:6px;border-radius:4px;border:1px solid #ccc">
  </div>
  <button type="submit" style="padding:8px 20px;background:#6DD5C4;color:white;border:none;border-radius:6px;cursor:pointer;font-weight:bold">Submit (Coba validasi)</button>
</form>`,
    },
    {
        id: 'canvas', title: 'Canvas', description: 'Menggambar grafik dan animasi dengan Canvas API.', language: 'html',
        content: `<h2>HTML Canvas</h2>
<p>Elemen <code>&lt;canvas&gt;</code> digunakan untuk menggambar grafik secara dinamis menggunakan JavaScript.</p>
<h3>Kegunaan Canvas</h3>
<ul>
<li>Menggambar shapes, teks, dan gambar</li>
<li>Membuat animasi dan game</li>
<li>Visualisasi data (chart/graph)</li>
<li>Manipulasi gambar/foto</li>
</ul>
<h3>Context 2D Methods</h3>
<ul>
<li><code>fillRect()</code> — gambar kotak filled</li>
<li><code>strokeRect()</code> — gambar kotak outline</li>
<li><code>arc()</code> — gambar lingkaran</li>
<li><code>lineTo()</code> — gambar garis</li>
<li><code>fillText()</code> — tulis teks</li>
<li><code>drawImage()</code> — gambar image</li>
</ul>`,
        codeExample: `<canvas id="myCanvas" width="350" height="200" style="border:2px solid #e2e8f0;border-radius:8px;background:white"></canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#F8FAFC';
ctx.fillRect(0, 0, 350, 200);

// Colored rectangles
ctx.fillStyle = '#F06D5B';
ctx.fillRect(20, 20, 80, 60);

ctx.fillStyle = '#6DD5C4';
ctx.fillRect(120, 20, 80, 60);

ctx.fillStyle = '#7EB8F0';
ctx.fillRect(220, 20, 80, 60);

// Circle
ctx.beginPath();
ctx.arc(175, 140, 40, 0, Math.PI * 2);
ctx.fillStyle = '#F5C87A';
ctx.fill();
ctx.strokeStyle = '#E5A84A';
ctx.lineWidth = 3;
ctx.stroke();

// Text
ctx.fillStyle = '#1E293B';
ctx.font = 'bold 14px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('HTML Canvas!', 175, 145);
</script>`,
    },
    {
        id: 'svg', title: 'SVG', description: 'Scalable Vector Graphics langsung di HTML.', language: 'html',
        content: `<h2>HTML SVG</h2>
<p>SVG (Scalable Vector Graphics) adalah format gambar berbasis XML yang bisa di-scale tanpa kehilangan kualitas.</p>
<h3>Kelebihan SVG</h3>
<ul>
<li>Tidak pecah saat dizoom (vector-based)</li>
<li>Bisa di-style dengan CSS</li>
<li>Bisa di-animasi</li>
<li>Bisa di-manipulasi dengan JavaScript</li>
<li>Ukuran file kecil untuk shapes sederhana</li>
</ul>
<h3>Elemen SVG Dasar</h3>
<ul>
<li><code>&lt;rect&gt;</code> — persegi/persegi panjang</li>
<li><code>&lt;circle&gt;</code> — lingkaran</li>
<li><code>&lt;ellipse&gt;</code> — elips</li>
<li><code>&lt;line&gt;</code> — garis</li>
<li><code>&lt;polygon&gt;</code> — poligon</li>
<li><code>&lt;text&gt;</code> — teks</li>
<li><code>&lt;path&gt;</code> — path kustom</li>
</ul>`,
        codeExample: `<h3>SVG Shapes</h3>
<svg width="350" height="200" style="background:#F8FAFC;border-radius:8px">
  <!-- Rectangle -->
  <rect x="10" y="10" width="80" height="50" rx="8" fill="#F06D5B"/>
  
  <!-- Circle -->
  <circle cx="160" cy="35" r="25" fill="#6DD5C4"/>
  
  <!-- Ellipse -->
  <ellipse cx="260" cy="35" rx="40" ry="25" fill="#7EB8F0"/>
  
  <!-- Line -->
  <line x1="10" y1="90" x2="340" y2="90" stroke="#E2E8F0" stroke-width="2"/>
  
  <!-- Polygon (Star) -->
  <polygon points="175,100 185,130 215,130 190,148 200,178 175,160 150,178 160,148 135,130 165,130" fill="#F5C87A"/>
  
  <!-- Text -->
  <text x="175" y="198" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#64748B">SVG Shapes Demo</text>
</svg>`,
    },
    {
        id: 'favicon', title: 'Favicon', description: 'Menambahkan ikon kecil di tab browser.', language: 'html',
        content: `<h2>HTML Favicon</h2>
<p>Favicon adalah ikon kecil yang muncul di tab browser, bookmark, dan history.</p>
<h3>Cara Menambahkan Favicon</h3>
<ul>
<li>Taruh file <code>favicon.ico</code> di root folder (otomatis terdeteksi)</li>
<li>Atau gunakan tag <code>&lt;link&gt;</code> di <code>&lt;head&gt;</code></li>
</ul>
<h3>Format yang Didukung</h3>
<ul>
<li><strong>.ico</strong> — format tradisional (wajib untuk kompatibilitas)</li>
<li><strong>.png</strong> — modern, lebih fleksibel</li>
<li><strong>.svg</strong> — vector, bisa berubah warna dengan dark mode</li>
</ul>
<h3>Ukuran yang Dibutuhkan</h3>
<ul>
<li>16×16 — tab browser</li>
<li>32×32 — shortcut/bookmark</li>
<li>180×180 — Apple touch icon</li>
<li>192×192 / 512×512 — Android/PWA</li>
</ul>`,
        codeExample: `<!DOCTYPE html>
<html>
<head>
  <!-- Favicon standar -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  
  <!-- PNG Favicon (modern) -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  
  <!-- SVG Favicon (terbaru, support dark mode) -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  
  <!-- Android / PWA -->
  <link rel="manifest" href="/site.webmanifest">
  
  <title>My Website</title>
</head>
<body>
  <h1>Lihat tab browser — ada favicon!</h1>
  <p>Favicon bisa dibuat dengan tools online seperti favicon.io atau realfavicongenerator.net</p>
</body>
</html>`,
    },
    {
        id: 'best-practices', title: 'Best Practices', description: 'Tips dan praktik terbaik menulis HTML.', language: 'html',
        content: `<h2>HTML Best Practices</h2>
<p>Menulis HTML yang baik membuat kode lebih mudah di-maintain, lebih aksesibel, dan lebih baik untuk SEO.</p>
<h3>Struktur & Semantik</h3>
<ul>
<li>Selalu mulai dengan <code>&lt;!DOCTYPE html&gt;</code></li>
<li>Gunakan elemen semantik (<code>header</code>, <code>nav</code>, <code>main</code>, dll)</li>
<li>Gunakan heading secara hierarki (h1 → h2 → h3)</li>
<li>Satu <code>&lt;h1&gt;</code> per halaman</li>
</ul>
<h3>Aksesibilitas</h3>
<ul>
<li>Selalu tambahkan <code>alt</code> pada gambar</li>
<li>Gunakan <code>&lt;label&gt;</code> pada form inputs</li>
<li>Pastikan kontras warna yang cukup</li>
<li>Gunakan ARIA attributes jika diperlukan</li>
</ul>
<h3>Performance</h3>
<ul>
<li>Gunakan <code>loading="lazy"</code> pada gambar dan iframe</li>
<li>Minify HTML untuk production</li>
<li>Taruh CSS di <code>&lt;head&gt;</code>, JavaScript sebelum <code>&lt;/body&gt;</code></li>
</ul>
<h3>Lainnya</h3>
<ul>
<li>Gunakan lowercase untuk tag dan atribut</li>
<li>Selalu tutup tag (kecuali self-closing seperti <code>&lt;br&gt;</code>, <code>&lt;img&gt;</code>)</li>
<li>Gunakan indentasi yang konsisten (2 atau 4 spasi)</li>
<li>Validasi HTML dengan validator.w3.org</li>
</ul>`,
        codeExample: `<!-- GOOD: Clean, semantic, accessible -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Belajar web development">
  <title>Belajar Web Dev</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <h1>Selamat Datang</h1>
    
    <section>
      <h2>Tutorial</h2>
      <article>
        <h3>Belajar HTML</h3>
        <p>HTML adalah fondasi web.</p>
        <img src="html.png" alt="Logo HTML5" loading="lazy" width="200" height="200">
      </article>
    </section>
    
    <form>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <button type="submit">Kirim</button>
    </form>
  </main>

  <footer>
    <p>&copy; 2024 Web Dev ID</p>
  </footer>
  
  <script src="app.js"></script>
</body>
</html>`,
    },
];
