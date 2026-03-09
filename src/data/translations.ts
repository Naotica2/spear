/**
 * All translatable strings for English and Indonesian.
 * Access via: translations[key][lang]
 */
export const translations: Record<string, { id: string; en: string }> = {
    // ====== COMMON ======
    'common.backHome': { id: 'Kembali ke Beranda', en: 'Back to Home' },
    'common.backEducation': { id: 'Kembali ke Education', en: 'Back to Education' },
    'common.signOut': { id: 'Keluar', en: 'Sign Out' },
    'common.login': { id: 'Masuk', en: 'Login' },
    'common.getStarted': { id: 'Mulai Sekarang', en: 'Get Started' },
    'common.levels': { id: 'level', en: 'levels' },
    'common.complete': { id: '✓ Selesai', en: '✓ Complete' },
    'common.level': { id: 'Level', en: 'Level' },

    // ====== NAVBAR ======
    'nav.education': { id: 'Edukasi', en: 'Education' },
    'nav.playground': { id: 'Playground', en: 'Playground' },
    'nav.docs': { id: 'Dokumentasi', en: 'Docs' },
    'nav.about': { id: 'Tentang', en: 'About' },

    // ====== FOOTER ======
    'footer.desc': {
        id: 'Platform pembelajaran coding interaktif. Belajar web development dengan cara yang seru dan efektif.',
        en: 'Interactive coding education platform. Learn web development in a fun and effective way.',
    },
    'footer.platform': { id: 'Platform', en: 'Platform' },
    'footer.languages': { id: 'Bahasa', en: 'Languages' },
    'footer.company': { id: 'Perusahaan', en: 'Company' },
    'footer.copyright': { id: '© 2025 Spear. Hak cipta dilindungi.', en: '© 2025 Spear. All rights reserved.' },
    'footer.madeWith': { id: 'Dibuat dengan', en: 'Made with' },
    'footer.forLearners': { id: 'untuk para pembelajar', en: 'for learners everywhere' },

    // ====== HOME PAGE ======
    'home.badge': { id: 'Platform pembelajaran interaktif', en: 'Interactive learning platform' },
    'home.heroTitle1': { id: 'Belajar', en: 'Learn' },
    'home.heroTitle2': { id: 'dengan Cara', en: 'the' },
    'home.heroTitle3': { id: 'Seru', en: 'Fun Way' },
    'home.heroDesc': {
        id: 'Kuasai HTML, CSS, JavaScript, dan PHP dengan pelajaran interaktif, gamifikasi, dan desain yang memukau. Gratis selamanya.',
        en: 'Master HTML, CSS, JavaScript, and PHP with interactive lessons, gamification, and stunning design. Free forever.',
    },
    'home.ctaLoggedIn': { id: 'Lanjut Belajar', en: 'Continue Learning' },
    'home.ctaLoggedOut': { id: 'Mulai Belajar — Gratis', en: 'Start Learning — Free' },
    'home.readDocs': { id: 'Baca Docs', en: 'Read Docs' },

    // Stats
    'home.stat.tech': { id: 'Teknologi', en: 'Technologies' },
    'home.stat.lessons': { id: 'Pelajaran', en: 'Lessons' },
    'home.stat.free': { id: 'Gratis', en: 'Free' },
    'home.stat.docs': { id: 'Topik Docs', en: 'Docs Topics' },

    // Features
    'home.featuresTitle': { id: 'Kenapa', en: 'Why' },
    'home.featuresDesc': {
        id: 'Platform yang dirancang untuk membuat belajar coding menjadi menyenangkan dan efektif.',
        en: 'A platform designed to make learning to code fun and effective.',
    },
    'home.feature1.title': { id: 'Pelajaran Interaktif', en: 'Interactive Lessons' },
    'home.feature1.desc': {
        id: 'Belajar dengan cara interaktif — drag-and-drop, quiz, dan fill-in-the-blank exercises.',
        en: 'Learn interactively — drag-and-drop, quizzes, and fill-in-the-blank exercises.',
    },
    'home.feature2.title': { id: 'Pantau Progress', en: 'Track Progress' },
    'home.feature2.desc': {
        id: 'Pantau perkembangan belajar kamu dengan progress bar, streaks, dan badges.',
        en: 'Track your learning progress with progress bars, streaks, and badges.',
    },
    'home.feature3.title': { id: 'Kumpulkan Badge', en: 'Earn Badges' },
    'home.feature3.desc': {
        id: 'Kumpulkan achievements saat kamu menguasai bahasa baru dan membangun streaks.',
        en: 'Collect achievements as you master new languages and build streaks.',
    },
    'home.feature4.title': { id: '117 Pelajaran', en: '117 Lessons' },
    'home.feature4.desc': {
        id: '4 bahasa dengan kurikulum lengkap, dari pemula hingga advanced. Materi mendalam di setiap topik.',
        en: '4 languages with comprehensive curricula, from beginner to advanced. Deep material on every topic.',
    },

    // Languages
    'home.langTitle': { id: 'Bahasa yang Akan Kamu', en: 'Languages You Will' },
    'home.langTitleHighlight': { id: 'Kuasai', en: 'Master' },
    'home.langDesc': {
        id: 'Dari struktur halaman sampai server-side programming, semua ada di sini.',
        en: 'From page structure to server-side programming, everything is here.',
    },
    'home.lang.structure': { id: 'Struktur', en: 'Structure' },
    'home.lang.styling': { id: 'Styling', en: 'Styling' },
    'home.lang.logic': { id: 'Logika', en: 'Logic' },
    'home.lang.backend': { id: 'Backend', en: 'Backend' },

    // How It Works
    'home.howTitle': { id: 'Cara', en: 'How It' },
    'home.howTitleHighlight': { id: 'Kerjanya', en: 'Works' },
    'home.howDesc': {
        id: 'Tiga langkah sederhana untuk mulai belajar web development.',
        en: 'Three simple steps to start learning web development.',
    },
    'home.step1.title': { id: 'Pilih Bahasa', en: 'Choose a Language' },
    'home.step1.desc': {
        id: 'Pilih dari HTML, CSS, JavaScript, atau PHP sesuai minat dan kebutuhan kamu.',
        en: 'Choose from HTML, CSS, JavaScript, or PHP based on your interests and needs.',
    },
    'home.step2.title': { id: 'Belajar Interaktif', en: 'Learn Interactively' },
    'home.step2.desc': {
        id: 'Ikuti lesson dengan quiz, drag-and-drop, dan latihan langsung. Baca docs dan coba di Playground.',
        en: 'Follow lessons with quizzes, drag-and-drop, and hands-on practice. Read docs and try in the Playground.',
    },
    'home.step3.title': { id: 'Kuasai & Bangun', en: 'Master & Build' },
    'home.step3.desc': {
        id: 'Dapatkan badges, track progress, dan bangun project nyata dengan skill yang kamu pelajari.',
        en: 'Earn badges, track progress, and build real projects with the skills you learn.',
    },

    // Try It Now
    'home.tryTitle': { id: 'Langsung', en: 'Try It' },
    'home.tryTitleHighlight': { id: 'Coba', en: 'Now' },
    'home.tryDesc': {
        id: 'Tidak perlu install apa-apa. Tulis kode langsung di sini dan lihat hasilnya real-time.',
        en: 'No installation needed. Write code right here and see results in real-time.',
    },
    'home.openPlayground': { id: 'Buka Full Playground', en: 'Open Full Playground' },

    // Curriculum Preview
    'home.currTitle': { id: 'Apa yang Akan Kamu', en: 'What You Will' },
    'home.currTitleHighlight': { id: 'Pelajari', en: 'Learn' },
    'home.currDesc': {
        id: 'Kurikulum lengkap dari dasar hingga advanced. Lihat topik-topik yang tersedia.',
        en: 'Complete curriculum from basics to advanced. See the available topics.',
    },
    'home.viewDocs': { id: 'Lihat Docs →', en: 'View Docs →' },

    // FAQ
    'home.faqTitle': { id: 'Pertanyaan', en: 'Frequently Asked' },
    'home.faqTitleHighlight': { id: 'Umum', en: 'Questions' },
    'home.faqDesc': {
        id: 'Ada pertanyaan? Temukan jawabannya di sini.',
        en: 'Have questions? Find the answers here.',
    },
    'home.faq1.q': { id: 'Apakah Spear benar-benar gratis?', en: 'Is Spear really free?' },
    'home.faq1.a': {
        id: 'Ya, 100% gratis! Semua konten, lessons, playground, dan docs bisa diakses tanpa bayar.',
        en: 'Yes, 100% free! All content, lessons, playground, and docs can be accessed without payment.',
    },
    'home.faq2.q': { id: 'Apakah perlu pengalaman coding sebelumnya?', en: 'Do I need prior coding experience?' },
    'home.faq2.a': {
        id: 'Tidak sama sekali. Spear dirancang untuk pemula absolut hingga developer berpengalaman.',
        en: 'Not at all. Spear is designed for absolute beginners to experienced developers.',
    },
    'home.faq3.q': { id: 'Bahasa pemrograman apa saja yang tersedia?', en: 'What programming languages are available?' },
    'home.faq3.a': {
        id: 'Saat ini tersedia HTML, CSS, JavaScript, PHP, dan MySQL. Setiap bahasa memiliki kurikulum lengkap dari dasar hingga advanced.',
        en: 'Currently available: HTML, CSS, JavaScript, PHP, and MySQL. Each language has a complete curriculum from basics to advanced.',
    },
    'home.faq4.q': { id: 'Apa itu Playground?', en: 'What is the Playground?' },
    'home.faq4.a': {
        id: 'Playground adalah code editor online tempat kamu bisa menulis dan menjalankan kode HTML/CSS/JavaScript langsung di browser. Cocok untuk bereksperimen setelah belajar.',
        en: 'The Playground is an online code editor where you can write and run HTML/CSS/JavaScript code directly in the browser. Great for experimenting after learning.',
    },
    'home.faq5.q': { id: 'Bagaimana cara melacak progress belajar?', en: 'How do I track my learning progress?' },
    'home.faq5.a': {
        id: 'Daftar akun gratis, lalu progress kamu otomatis tersimpan. Kamu bisa melihat streaks, badges, dan progress di halaman profil.',
        en: 'Sign up for a free account, then your progress is automatically saved. You can see streaks, badges, and progress on your profile page.',
    },

    // CTA
    'home.ctaTitle': { id: 'Siap untuk Mulai?', en: 'Ready to Start?' },
    'home.ctaDesc': {
        id: 'Bergabunglah sekarang dan mulai perjalanan coding kamu. Gratis selamanya, tanpa batasan.',
        en: 'Join now and start your coding journey. Free forever, without limits.',
    },
    'home.ctaDashboard': { id: 'Buka Dashboard', en: 'Open Dashboard' },
    'home.ctaRegister': { id: 'Daftar Sekarang', en: 'Register Now' },
    'home.ctaPlayground': { id: 'Coba Playground', en: 'Try Playground' },

    // ====== DAILY QUEST ======
    'quest.title': { id: 'Quest Harian', en: 'Daily Quest' },
    'quest.saturday': { id: 'Tantangan Spesial!', en: 'Special Challenge!' },
    'quest.completed': { id: 'Quest Hari Ini Selesai!', en: "Today's Quest Completed!" },
    'quest.totalCompleted': { id: 'Total quest selesai', en: 'Total quests completed' },
    'quest.checkAnswer': { id: 'Periksa Jawaban', en: 'Check Answer' },
    'quest.correct': { id: 'Benar!', en: 'Correct!' },
    'quest.wrong': { id: 'Salah, coba lagi besok!', en: 'Wrong, try again tomorrow!' },
    'quest.correctAnswerIs': { id: 'Jawaban yang benar:', en: 'The correct answer is:' },
    'quest.correctOrder': { id: 'Urutan yang benar:', en: 'Correct order:' },
    'quest.dragHere': { id: 'Klik token di bawah untuk menyusun jawaban...', en: 'Click tokens below to arrange your answer...' },

    // ====== EDUCATION PAGE ======
    'edu.hello': { id: 'Halo,', en: 'Hello,' },
    'edu.readyToLearn': { id: 'Siap untuk belajar hal baru hari ini?', en: 'Ready to learn something new today?' },
    'edu.failedAnswers': { id: 'Jawaban Salah', en: 'Wrong Answers' },
    'edu.dayStreak': { id: 'hari berturut-turut!', en: 'day streak!' },
    'edu.choosePath': { id: 'Pilih Jalur Belajarmu', en: 'Choose Your Path' },
    'edu.streak': { id: 'Streak', en: 'Streak' },
    'edu.completed': { id: 'Selesai', en: 'Completed' },
    'edu.languages': { id: 'Bahasa', en: 'Languages' },

    // ====== ABOUT PAGE ======
    'about.title': { id: 'Tentang', en: 'About' },
    'about.desc': {
        id: 'Spear adalah platform edukasi coding interaktif premium yang dirancang agar belajar web development terasa menyenangkan, indah, dan ringkas.',
        en: 'Spear is a premium interactive coding education platform designed to make learning web development fun, beautiful, and bite-sized.',
    },
    'about.langTitle': { id: 'Bahasa yang Akan Kamu Pelajari', en: 'Languages You\'ll Learn' },
    'about.feature1.title': { id: 'Pelajaran Interaktif', en: 'Interactive Lessons' },
    'about.feature1.desc': {
        id: 'Belajar sambil praktek dengan drag-and-drop, fill-in-the-blank, dan latihan quiz',
        en: 'Learn by doing with drag-and-drop, fill-in-the-blank, and quiz exercises',
    },
    'about.feature2.title': { id: 'Pantau Progress', en: 'Track Your Progress' },
    'about.feature2.desc': {
        id: 'Lihat seberapa jauh perjalananmu dengan streaks, badges, dan progress rings',
        en: 'See how far you\'ve come with streaks, badges, and progress rings',
    },
    'about.feature3.title': { id: 'Kumpulkan Badge', en: 'Earn Badges' },
    'about.feature3.desc': {
        id: 'Kumpulkan pencapaian saat kamu menguasai bahasa baru dan membangun streaks',
        en: 'Collect achievements as you master new languages and build streaks',
    },
    'about.feature4.title': { id: '117 Pelajaran', en: '117 Lessons' },
    'about.feature4.desc': {
        id: '4 bahasa dengan kurikulum lengkap, dari pemula absolut hingga penguasaan tingkat lanjut',
        en: '4 languages with comprehensive curricula, from absolute beginner to advanced mastery',
    },
    'about.whatMakesSpecial': { id: 'Apa yang Membuatnya Istimewa', en: 'What Makes It Special' },
    'about.readyToStart': { id: 'Siap untuk Mulai?', en: 'Ready to Start?' },
    'about.pickLang': { id: 'Pilih bahasa dan mulai perjalananmu', en: 'Pick a language and begin your journey' },
    'about.goToEducation': { id: 'Ke Halaman Edukasi', en: 'Go to Education' },

    // ====== AUTH PAGE ======
    'auth.tagline': { id: 'Kuasai web development, satu pelajaran setiap saat', en: 'Master web development, one lesson at a time' },
    'auth.signIn': { id: 'Masuk', en: 'Sign In' },
    'auth.signUp': { id: 'Daftar', en: 'Sign Up' },
    'auth.fullName': { id: 'Nama Lengkap', en: 'Full Name' },
    'auth.yourName': { id: 'Nama kamu', en: 'Your name' },
    'auth.email': { id: 'Email', en: 'Email' },
    'auth.password': { id: 'Kata Sandi', en: 'Password' },
    'auth.createAccount': { id: 'Buat Akun', en: 'Create Account' },
    'auth.or': { id: 'atau', en: 'or' },
    'auth.noAccount': { id: 'Belum punya akun?', en: 'Don\'t have an account?' },
    'auth.hasAccount': { id: 'Sudah punya akun?', en: 'Already have an account?' },
    'auth.signUpLink': { id: 'Daftar', en: 'Sign up' },
    'auth.signInLink': { id: 'Masuk', en: 'Sign in' },
    'auth.agreeFooter': { id: 'Dengan melanjutkan, kamu setuju untuk belajar hal-hal luar biasa 🚀', en: 'By continuing, you agree to learn awesome things 🚀' },

    // ====== PROFILE PAGE ======
    'profile.keepLearning': { id: 'Terus belajar, terus berkembang!', en: 'Keep learning, keep growing!' },
    'profile.langProgress': { id: 'Progress Bahasa', en: 'Language Progress' },
    'profile.streakTracker': { id: 'Streak Tracker', en: 'Streak Tracker' },
    'profile.days': { id: 'hari', en: 'days' },
    'profile.badgeCollection': { id: 'Koleksi Badge', en: 'Badge Collection' },
    'profile.today': { id: 'Hari ini', en: 'Today' },
    'profile.yesterday': { id: 'Kemarin', en: 'Yesterday' },
    'profile.daysAgo2': { id: '2 hari lalu', en: '2d ago' },
    'profile.daysAgo3': { id: '3 hari lalu', en: '3d ago' },
    'profile.daysAgo4': { id: '4 hari lalu', en: '4d ago' },
    'profile.daysAgo5': { id: '5 hari lalu', en: '5d ago' },
    'profile.daysAgo6': { id: '6 hari lalu', en: '6d ago' },

    // ====== LEARN PATH ======
    'learn.langNotFound': { id: 'Bahasa tidak ditemukan', en: 'Language not found' },
    'learn.goBack': { id: '← Kembali', en: '← Go back' },

    // ====== CURRICULUM ======
    'curriculum.html.desc': { id: 'Tulang punggung setiap website', en: 'The backbone of every website' },
    'curriculum.css.desc': { id: 'Percantik dan hiasi tampilan web', en: 'Style and beautify the web' },
    'curriculum.js.desc': { id: 'Buat web jadi interaktif', en: 'Make the web interactive' },
    'curriculum.php.desc': { id: 'Pengembangan web sisi server', en: 'Server-side web development' },
    'curriculum.mysql.desc': { id: 'Manajemen basis data relasional paling populer', en: 'The most popular relational database management' },
};
