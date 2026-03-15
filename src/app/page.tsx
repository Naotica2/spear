'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useAuthStore } from '@/store/useAuthStore';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ParticleField from '@/components/ui/ParticleField';
import { HTMLMascot, CSSMascot, JSMascot, PHPMascot, StreakFire, BadgeIcon, SuccessIllustration } from '@/components/illustrations/Mascots';
import { useIsMobile } from '@/hooks/useIsMobile';

const CodeEditor = dynamic(() => import('@/components/playground/CodeEditor'), { ssr: false });
const LivePreview = dynamic(() => import('@/components/playground/LivePreview'), { ssr: false });

/* ====== Reusable Scroll-Triggered Reveal ====== */
function SectionReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isMobile = useIsMobile();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30, filter: 'blur(3px)' }}
      animate={isInView || isMobile ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay: isMobile ? 0 : delay, type: 'spring', stiffness: 80, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/* ====== 3D Magnetic Tilt Card ====== */
function MagneticCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (isMobile) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * -12);
    rotateY.set(x * 12);
  }, [rotateX, rotateY, isMobile]);

  const handleLeave = useCallback(() => {
    if (isMobile) return;
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY, isMobile]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={isMobile ? {} : { rotateX: springX, rotateY: springY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

/* ====== Clean Typing Effect Text ====== */
function TypingText({ text, className = '', cursorColor = '#6DD5C4', delay = 0 }: { text: string; className?: string; cursorColor?: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(intervalId);
        }
      }, 60); // typing speed
      return () => clearInterval(intervalId);
    }, delay * 1000);

    return () => clearTimeout(timeoutId);
  }, [isInView, text, delay]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {displayedText}
      <motion.span
        className="inline-block w-[3px] h-[0.9em] align-middle ml-1 rounded-sm"
        style={{ backgroundColor: cursorColor }}
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
      />
    </span>
  );
}

/* ====== Animated Counter ====== */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const isMobile = useIsMobile();
  const count = useMotionValue(target); // Default to target instantly for mobile
  const rounded = useTransform(count, (latest) => Math.floor(latest) + suffix);

  useEffect(() => {
    if (isMobile) {
      count.set(target);
      return;
    }
    if (isInView) {
      count.set(0); // Reset for animation if desktop
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, target, count, isMobile]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

/* ====== Floating Code Block ====== */
function FloatingCodeBlock() {
  const codeLines = [
    { text: '<!DOCTYPE html>', color: '#9B8FE6' },
    { text: '<html>', color: '#7EB8F0' },
    { text: '  <head>', color: '#7EB8F0' },
    { text: '    <title>Spear</title>', color: '#F06D5B' },
    { text: '  </head>', color: '#7EB8F0' },
    { text: '<body>', color: '#7EB8F0' },
    { text: '  <h1>Welcome to Spear!</h1>', color: '#F5C87A' },
    { text: '</body>', color: '#7EB8F0' },
    { text: '</html>', color: '#7EB8F0' }
  ];

  return (
    <motion.div
      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[380px]"
      initial={{ opacity: 0, x: 100, rotateY: 45 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
    >
      <motion.div
        className="bg-[#1E293B] rounded-[24px] p-6 shadow-2xl border border-white/10 relative overflow-hidden"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="flex gap-2 mb-4 relative z-10">
          <div className="w-3 h-3 rounded-full bg-[#F06D5B]" />
          <div className="w-3 h-3 rounded-full bg-[#F5C87A]" />
          <div className="w-3 h-3 rounded-full bg-[#8CD790]" />
        </div>
        <pre className="text-sm font-mono leading-relaxed relative z-10">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.15 }}
              style={{ color: line.color }}
            >
              {line.text}
            </motion.div>
          ))}
        </pre>
        <motion.div
          className="w-2 h-4 bg-primary mt-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        className="absolute -left-12 top-10 glass rounded-xl px-4 py-3 flex items-center gap-3 soft-shadow-lg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8CD790" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12L10 17L19 7" /></svg>
        </div>
        <div>
          <span className="text-xs font-bold text-text block">Level Complete!</span>
          <span className="text-[10px] text-text-secondary">+50 XP Earned</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-6 bottom-4 glass rounded-xl px-4 py-3 flex items-center gap-3 soft-shadow-lg"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center"><StreakFire size={24} days={5} /></div>
        <div>
          <span className="text-xs font-bold text-text block">5 Day Streak!</span>
          <span className="text-[10px] text-text-secondary">Keep it up! 🔥</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ====== Feature Card ====== */
const features = [
  {
    icon: <SuccessIllustration size={36} />,
    title: 'Interactive Lessons',
    desc: 'Belajar dengan cara interaktif drag and drop, quiz, dan fill in the blank exercises.',
    color: '#6DD5C4',
  },
  {
    icon: <StreakFire size={36} days={7} />,
    title: 'Track Progress',
    desc: 'Pantau perkembangan belajar kamu dengan progress bar, streaks, dan badges.',
    color: '#7EB8F0',
  },
  {
    icon: <BadgeIcon type="streak-master" earned={true} size={36} />,
    title: 'Earn Badges',
    desc: 'Kumpulkan achievements saat kamu menguasai bahasa baru dan membangun streaks.',
    color: '#F5C87A',
  },
  {
    icon: <BadgeIcon type="first-lesson" earned={true} size={36} />,
    title: '120+ Lessons',
    desc: '4 bahasa dengan kurikulum lengkap, dari pemula hingga advanced. Materi mendalam di setiap topik.',
    color: '#9B8FE6',
  },
];

/* ====== Language Preview ====== */
const languages = [
  { name: 'HTML', desc: 'Structure', color: '#F06D5B', Mascot: HTMLMascot },
  { name: 'CSS', desc: 'Styling', color: '#7EB8F0', Mascot: CSSMascot },
  { name: 'JavaScript', desc: 'Logic', color: '#F5C87A', Mascot: JSMascot },
  { name: 'PHP', desc: 'Backend', color: '#9B8FE6', Mascot: PHPMascot },
];

/* ====== How It Works Steps ====== */
const steps = [
  {
    num: '01',
    title: 'Pilih Bahasa',
    desc: 'Pilih dari HTML, CSS, JavaScript, atau PHP sesuai minat dan kebutuhan kamu.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F06D5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    color: '#F06D5B',
  },
  {
    num: '02',
    title: 'Belajar Interaktif',
    desc: 'Ikuti lesson dengan quiz, drag and drop, dan latihan langsung. Baca docs dan coba di Playground.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7EB8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: '#7EB8F0',
  },
  {
    num: '03',
    title: 'Kuasai & Bangun',
    desc: 'Dapatkan badges, track progress, dan bangun project nyata dengan skill yang kamu pelajari.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6DD5C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 6 9 6 9Z" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 18 9 18 9Z" />
        <path d="M4 22h16" />
        <path d="M10 22V16a2 2 0 0 1 4 0v6" />
        <path d="M6 9a6.002 6.002 0 0 0 12 0" />
        <path d="M6 9V4h12v5" />
      </svg>
    ),
    color: '#6DD5C4',
  },
];

/* ====== FAQ Data ====== */
const faqItems = [
  {
    q: 'Apakah Spear benar-benar gratis?',
    a: 'Ya, 100% gratis! Semua konten, lessons, playground, dan docs bisa diakses tanpa bayar.',
  },
  {
    q: 'Apakah perlu pengalaman coding sebelumnya?',
    a: 'Tidak sama sekali. Spear dirancang untuk pemula yang baru mulai hingga developer berpengalaman.',
  },
  {
    q: 'Bahasa pemrograman apa saja yang tersedia?',
    a: 'Saat ini tersedia HTML, CSS, JavaScript, dan PHP. Setiap bahasa memiliki kurikulum lengkap dari dasar hingga advanced.',
  },
  {
    q: 'Apa itu Playground?',
    a: 'Playground adalah code editor online tempat kamu bisa menulis dan menjalankan kode HTML/CSS/JavaScript langsung di browser. Cocok untuk bereksperimen setelah belajar.',
  },
  {
    q: 'Bagaimana cara melacak progress belajar?',
    a: 'Daftar akun gratis, lalu progress kamu otomatis tersimpan. Kamu bisa melihat streaks, badges, dan progress di halaman profil.',
  },
];

/* ====== Curriculum Preview ====== */
const curriculumPreview = [
  {
    lang: 'HTML',
    color: '#F06D5B',
    topics: ['Introduction & Basic Structure', 'Headings & Paragraphs', 'Links & Images', 'Lists & Tables', 'Forms & Input', 'Semantic HTML'],
  },
  {
    lang: 'CSS',
    color: '#7EB8F0',
    topics: ['Selectors & Colors', 'Box Model', 'Flexbox Layout', 'Grid Layout', 'Responsive Design', 'Animations & Transitions'],
  },
  {
    lang: 'JavaScript',
    color: '#F5C87A',
    topics: ['Variables & Types', 'Functions & Scope', 'DOM Manipulation', 'Events & Listeners', 'Arrays & Objects', 'Async & Fetch API'],
  },
  {
    lang: 'PHP',
    color: '#9B8FE6',
    topics: ['Syntax & Variables', 'Control Flow', 'Functions', 'Arrays', 'Forms & Input', 'OOP Basics'],
  },
];

/* ====== FAQ Accordion Item ====== */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <motion.div
      className="glass rounded-[var(--radius-card)] overflow-hidden soft-shadow"
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ delay: isMobile ? 0 : index * 0.05 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-bold text-text text-sm sm:text-base pr-4">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ====== Try It Now Mini Editor ====== */
function TryItSection() {
  const [code, setCode] = useState(`<h1>Welcome to Spear</h1>
<h2>Hello World</h2>
<p>Edit code ini dan lihat perubahan yang instan</p>`);
  const isMobile = useIsMobile();

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-4">
            Langsung <span className="text-gradient">Coba</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            Tidak perlu install apa-apa. Tulis kode langsung di sini dan lihat hasilnya real-time.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="lg:rounded-l-2xl lg:rounded-r-none rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1e293b] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F06D5B]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F5C87A]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#8CD790]" />
              </div>
              <span className="text-xs font-mono text-slate-500 ml-2">index.html</span>
            </div>
            <CodeEditor
              value={code}
              onChange={setCode}
              language="html"
              height="280px"
              className="rounded-none border-0"
            />
          </div>
          <LivePreview
            htmlCode={code}
            cssCode=""
            jsCode=""
            className="lg:rounded-r-2xl lg:rounded-l-none rounded-2xl h-[332px]"
          />
        </motion.div>

        <motion.div
          className="text-center mt-6"
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          whileInView={isMobile ? { opacity: 1 } : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: isMobile ? 0 : 0.3 }}
        >
          <Link
            href="/playground"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            Buka Full Playground
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12H19M13 6L19 12L13 18" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ====== Email Form ====== */
function EmailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`[Spear Feedback] dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:rashyaygmi@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  if (sent) {
    return (
      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, rgba(140,215,144,0.15), rgba(109,213,196,0.15))' }}
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 12 }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#8CD790" />
              <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
        <p className="font-bold text-text text-lg">Terkirim!</p>
        <p className="text-sm text-text-secondary mt-1">Terima kasih! Kami akan segera merespons.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-text-secondary block mb-1.5">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama kamu"
            required
            className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary/30 text-sm text-text font-medium outline-none transition-all duration-200 placeholder:text-text-secondary/50"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-text-secondary block mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@contoh.com"
            required
            className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary/30 text-sm text-text font-medium outline-none transition-all duration-200 placeholder:text-text-secondary/50"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-bold text-text-secondary block mb-1.5">Pesan</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tulis pertanyaan, saran, atau feedback kamu di sini..."
          rows={4}
          required
          className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary/30 text-sm text-text font-medium outline-none transition-all duration-200 resize-none placeholder:text-text-secondary/50"
        />
      </div>
      <motion.button
        type="submit"
        className="w-full py-3.5 rounded-xl font-bold text-white text-sm cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        style={{ background: 'linear-gradient(135deg, #6DD5C4, #7EB8F0)' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Kirim Pesan
      </motion.button>
    </form>
  );
}

// Define learning path steps outside component to prevent re-creation on render
const learningPathSteps = [
  {
    num: '01',
    badge: 'Basic',
    title: 'Master The Structure',
    desc: 'Mulai dengan HTML. Pahami cara menyusun elemen dan tulang punggung dari sebuah website.',
    icon: <HTMLMascot size={48} animate={false} />,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-500',
    bgLightClass: 'bg-orange-500/20',
    features: ['Tag & Elemen', 'Semantic HTML', 'Struktur Konten']
  },
  {
    num: '02',
    badge: 'Basic',
    title: 'Design & Styling',
    desc: 'Gunakan CSS untuk mempercantik tampilan. Pahami pewarnaan, tata letak, dan animasi dasar.',
    icon: <CSSMascot size={48} animate={false} />,
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-500',
    bgLightClass: 'bg-blue-500/20',
    features: ['Box Model', 'Flexbox & Grid', 'Responsive Design']
  },
  {
    num: '03',
    badge: 'Medium',
    title: 'Logic & Interactivity',
    desc: 'Pelajari JavaScript untuk membuat website kamu hidup, interaktif, dan dapat merespon interaksi dari user.',
    icon: <JSMascot size={48} animate={false} />,
    colorClass: 'text-amber-500',
    bgClass: 'bg-amber-500',
    bgLightClass: 'bg-amber-500/20',
    features: ['Manipulasi DOM', 'Event Listener', 'Async Logic']
  },
  {
    num: '04',
    badge: 'Advanced',
    title: 'Backend System',
    desc: 'Pahami cara kerja server dengan PHP. Olah data dinamis, kelola database, dan terapkan autentikasi.',
    icon: <PHPMascot size={48} animate={false} />,
    colorClass: 'text-indigo-500',
    bgClass: 'bg-indigo-500',
    bgLightClass: 'bg-indigo-500/20',
    features: ['Server-side Logic', 'Database MySQL', 'Sistem Login']
  },
];

export default function HomePage() {
  const { isLoggedIn } = useAuthStore();
  const ctaHref = isLoggedIn ? '/education' : '/auth';
  const isMobile = useIsMobile();

  return (
    <div className="min-h-[100dvh] overflow-x-hidden relative">
      <ScrollProgress />

      {/* ====== HERO SECTION ====== */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 px-4 sm:px-6 overflow-hidden">
        <ParticleField count={30} />

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-sm font-medium text-text-secondary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Platform pembelajaran interaktif
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text leading-tight mb-6 tracking-tight">
                Belajar{' '}
                <TypingText text="Web Development" className="text-gradient" delay={0.4} />
                <br />
                dengan Cara{' '}
                <span className="relative inline-block">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    Seru
                  </motion.span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 14"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.path
                      d="M2 8 Q50 2 100 6 Q150 10 198 4"
                      stroke="url(#underlineGrad)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="underlineGrad" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#6DD5C4" />
                        <stop offset="1" stopColor="#7EB8F0" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </h1>

              <motion.p
                className="text-lg text-text-secondary leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Pelajari HTML, CSS, JavaScript, dan PHP dengan pelajaran interaktif,
                gamifikasi, dan desain yang memukau. Gratis selamanya.
              </motion.p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: 'spring' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={ctaHref}
                    className="btn-shimmer cta-glow inline-flex items-center gap-2 px-8 py-4 rounded-[var(--radius-button)] font-bold text-white text-base shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #6DD5C4, #7EB8F0)' }}
                  >
                    {isLoggedIn ? 'Mulai Belajar' : 'Mulai Belajar — Gratis'}
                    <motion.svg
                      width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path d="M5 12H19M13 6L19 12L13 18" />
                    </motion.svg>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                >
                  <Link
                    href="/docs"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-[var(--radius-button)] font-semibold text-text-secondary hover:text-text glass transition-colors text-base hover:soft-shadow-lg"
                  >
                    Baca Docs
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <FloatingCodeBlock />
        </motion.div>
      </section>

      {/* ====== STATS BAR ====== */}
      <section className="border-y border-white/20 glass-strong relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center divide-x divide-white/20">
            {[
              { value: 4, suffix: '', label: 'Technology' },
              { value: 120, suffix: '+', label: 'Lessons' },
              { value: 100, suffix: '%', label: 'Free' },
              { value: 108, suffix: '', label: 'Docs Topics' },
            ].map((stat, i) => {
              const initProps: any = isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 };
              return (
                <motion.div
                  key={stat.label}
                  initial={initProps}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: isMobile ? 0 : i * 0.1, type: 'spring' }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  <div className="text-3xl sm:text-5xl font-extrabold text-gradient mb-2 drop-shadow-sm">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-semibold text-text-secondary tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section className="py-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text mb-6 tracking-tight">
              Kenapa <span className="text-gradient">Spear</span>?
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Platform yang dirancang untuk membuat belajar coding menjadi <strong className="text-text">menyenangkan</strong> dan <strong className="text-text">efektif</strong>.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const initProps: any = isMobile ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 20 };
              return (
                <motion.div
                  key={feature.title}
                  initial={initProps}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: isMobile ? 0 : i * 0.15, type: 'spring', stiffness: 100, damping: 20 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <MagneticCard className="h-full">
                    <div className="animated-border rounded-[24px] h-full">
                      <div className="glass-strong rounded-[22px] p-8 h-full transition-colors group">
                        <div className="flex items-start gap-6">
                          <motion.div
                            className="shrink-0 p-3 rounded-2xl glass soft-shadow-lg group-hover:scale-110 transition-transform duration-300 bg-white/50 dark:bg-slate-800/50"
                          >
                            {feature.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-extrabold text-text mb-2 group-hover:text-gradient transition-all">{feature.title}</h3>
                            <p className="text-base text-text-secondary leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MagneticCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== DAILY QUEST FEATURE SECTION ====== */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text mb-6 tracking-tight">
              Daily <span className="text-gradient">Quest</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Tantangan harian yang berbeda setiap hari. Selesaikan materi, buka quest, dan uji kemampuanmu!
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Quest Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, type: 'spring' }}
            >
              {[
                {
                  title: 'Quest Berbeda Setiap Hari',
                  desc: 'Algoritma deterministic memastikan quest selalu fresh dan unik setiap harinya.',
                  color: '#6DD5C4',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="3" stroke="#6DD5C4" strokeWidth="2" />
                      <path d="M3 10h18" stroke="#6DD5C4" strokeWidth="2" />
                      <rect x="7" y="14" width="3" height="3" rx="0.5" fill="#6DD5C4" />
                      <rect x="14" y="14" width="3" height="3" rx="0.5" fill="#6DD5C4" opacity="0.5" />
                    </svg>
                  ),
                },
                {
                  title: 'Tier Progression System',
                  desc: 'Quest berkembang sesuai progress. HTML → HTML+CSS → HTML+CSS+JS. Semakin mahir, semakin menantang.',
                  color: '#7EB8F0',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 20h4V10H4v10zm6 0h4V4h-4v16zm6 0h4v-8h-4v8z" fill="#7EB8F0" opacity="0.8" />
                    </svg>
                  ),
                },
                {
                  title: 'Sabtu Spesial',
                  desc: 'Setiap hari Sabtu hadir quest ekstra sulit dengan reward XP lebih besar. Berani coba?',
                  color: '#F5C87A',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 2h12v6a6 6 0 01-12 0V2z" fill="#F5C87A" opacity="0.8" />
                      <path d="M4 4H2v4a4 4 0 004 4V8H4V4z" fill="#F5C87A" opacity="0.4" />
                      <path d="M20 4h2v4a4 4 0 01-4 4V8h2V4z" fill="#F5C87A" opacity="0.4" />
                      <rect x="10" y="14" width="4" height="4" rx="1" fill="#F5C87A" opacity="0.6" />
                      <rect x="7" y="18" width="10" height="3" rx="1.5" fill="#F5C87A" opacity="0.5" />
                    </svg>
                  ),
                },
              ].map((item, i) => {
                const initProps: any = isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 };
                return (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-5 glass rounded-[20px] p-6 soft-shadow group"
                    initial={initProps}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: isMobile ? 0 : i * 0.15, type: 'spring', stiffness: 150, damping: 20 }}
                    viewport={{ once: true }}
                    whileHover={isMobile ? {} : { x: 8, scale: 1.02 }}
                  >
                    <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6" style={{ background: `${item.color}15` }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text mb-1 group-hover:text-gradient transition-all">{item.title}</h3>
                      <p className="text-base text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right: Quest Mock Preview */}
            <motion.div
              className="relative perspective-1000"
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <motion.div
                className="glass-strong rounded-[24px] p-8 soft-shadow-xl relative overflow-hidden"
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Gradient accent */}
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/15 text-accent dark:bg-accent/20"
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                    </svg>
                  </motion.div>
                  <div>
                    <h4 className="text-base font-extrabold text-text">Daily Quest</h4>
                    <p className="text-sm font-medium text-text-secondary">HTML + CSS Quest • +30 XP</p>
                  </div>
                  <motion.div
                    className="ml-auto px-3 py-1.5 bg-warning/15 text-warning rounded-full text-xs font-bold inline-flex items-center gap-1.5"
                    animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(245,200,122,0)", "0 0 10px rgba(245,200,122,0.5)", "0 0 0 rgba(245,200,122,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 2h12v6a6 6 0 01-12 0V2z" fill="currentColor" opacity="0.9" />
                      <rect x="10" y="14" width="4" height="4" rx="1" fill="currentColor" opacity="0.6" />
                      <rect x="7" y="18" width="10" height="3" rx="1.5" fill="currentColor" opacity="0.5" />
                    </svg>
                    Sabtu Spesial!
                  </motion.div>
                </div>

                {/* Mock quiz */}
                <div className="mb-6 px-4 py-3 glass rounded-xl border border-white/40 dark:border-white/10">
                  <p className="text-base font-bold text-text">Properti CSS mana yang digunakan untuk mengubah warna teks?</p>
                </div>

                <div className="space-y-3">
                  {['font-color', 'text-color', 'color', 'foreground-color'].map((opt, i) => {
                    const initProps: any = isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 };
                    return (
                      <motion.div
                        key={opt}
                        className={`px-5 py-3.5 rounded-xl text-sm font-medium transition-all border-2 cursor-pointer ${i === 2 ? 'bg-primary/20 text-primary-dark dark:text-primary border-primary' : 'bg-white/50 dark:bg-slate-800/50 text-text-secondary border-transparent hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white/80 dark:hover:bg-slate-700/80'}`}
                        initial={initProps}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: isMobile ? 0 : 0.4 + i * 0.1, type: 'spring' }}
                        viewport={{ once: true }}
                        whileHover={i !== 2 && !isMobile ? { scale: 1.02, x: 5 } : {}}
                        whileTap={i !== 2 && !isMobile ? { scale: 0.98 } : {}}
                      >
                        <span className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded flex items-center justify-center text-[11px] font-bold ${i === 2 ? 'bg-primary text-white' : 'glass shadow-sm dark:bg-slate-900 ds-text-text'}`}>{String.fromCharCode(65 + i)}</span>
                          <code className="font-mono text-[13px]">{opt}</code>
                          {i === 2 && (
                            <motion.svg
                              className="ml-auto text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: 'spring' }}
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </motion.svg>
                          )}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Floating XP badge */}
              <motion.div
                className="absolute -right-4 -top-6 glass rounded-2xl px-4 py-3 flex items-center gap-3 soft-shadow-lg z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-warning/15 text-warning dark:bg-warning/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-extrabold text-text block">+50 XP</span>
                  <span className="text-[10px] text-text-secondary font-medium uppercase tracking-wider">Bonus Sabtuan</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== LEARNING PATH (ROADMAP) ====== */}
      <section className="py-24 px-4 sm:px-6 relative z-10 bg-gradient-to-b from-transparent via-white/40 to-transparent">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text mb-6 tracking-tight">
              Alur <span className="text-gradient">Pembelajaran</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Langkah demi langkah terstruktur dari nol hingga mahir membuat website interaktif sendiri.
            </p>
          </SectionReveal>

          <div className="relative">
            {/* Vertical Connecting Line (Desktop & Mobile) */}
            <div className="absolute top-[10%] bottom-[10%] left-[38px] md:left-1/2 md:-translate-x-1/2 w-1.5 bg-slate-200/50 dark:bg-slate-700/50 rounded-full z-0">
              <motion.div
                className="w-full bg-gradient-to-b from-primary via-accent to-success rounded-full"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            <div className="space-y-16 relative z-10 w-full max-w-4xl mx-auto">
              {learningPathSteps.map((step, i) => {
                const isEven = i % 2 !== 0; // right aligned on desktop
                const initProps: any = isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 };

                return (
                  <motion.div
                    key={step.num}
                    className={`relative flex flex-col md:flex-row items-start md:items-center w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
                    initial={initProps}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: isMobile ? 0 : 0.2, type: 'spring', stiffness: 100, damping: 20 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {/* Node / Icon Container */}
                    <div className={`absolute md:absolute left-0 top-0 z-10 flex justify-center md:items-center ${isEven ? 'md:left-1/2 md:-translate-x-1/2' : 'md:left-1/2 md:-translate-x-1/2'}`}>
                      <motion.div
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full glass-strong shadow-xl flex items-center justify-center border-4 border-white dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 z-20 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {step.icon}
                        {/* Pulse effect */}
                        <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${step.bgClass}`} />
                      </motion.div>
                      {/* Label Number */}
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md z-30 ${step.bgClass}`}>
                        {step.num}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-[calc(50%-3rem)] pl-24 md:pl-0 sm:pr-8 md:pr-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <div className="glass rounded-[24px] p-8 soft-shadow-lg w-full transition-transform md:group-hover:-translate-y-2 border border-white/40 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 hover:bg-white/80 dark:hover:bg-slate-800/80 backdrop-blur-xl">
                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                          <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-4 ${step.bgLightClass} ${step.colorClass}`}>
                            {step.badge}
                          </div>
                          <h3 className="text-2xl font-extrabold text-text mb-3">{step.title}</h3>
                          <p className="text-base text-text-secondary leading-relaxed mb-6">{step.desc}</p>

                          <ul className={`space-y-3 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                            {step.features.map((feature, idx) => (
                              <li key={idx} className={`flex items-center gap-2.5 text-sm font-medium text-text-secondary/90 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`shrink-0 ${step.colorClass}`}>
                                  <path d="M5 12l5 5L20 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====== LANGUAGES ====== */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text mb-6 tracking-tight">
              Bahasa yang Akan Kamu <span className="text-gradient">Kuasai</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Dari struktur halaman sampai server-side programming, kuasai stack dasar web development selangkah demi selangkah.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {languages.map((lang, i) => {
              const initProps: any = isMobile ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 };
              return (
                <motion.div
                  key={lang.name}
                  className="glass-strong rounded-[24px] p-6 text-center soft-shadow-lg group cursor-pointer relative overflow-hidden transition-colors"
                  initial={initProps}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: isMobile ? 0 : i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                  viewport={{ once: true }}
                  whileHover={isMobile ? {} : { y: -8, scale: 1.03 }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: `radial-gradient(circle at center, ${lang.color}, transparent)` }} />

                  <motion.div
                    className="flex items-center justify-center mx-auto mb-6 h-20"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <lang.Mascot size={72} animate={false} />
                  </motion.div>
                  <h3 className="text-xl font-extrabold mb-1" style={{ color: lang.color }}>{lang.name}</h3>
                  <p className="text-sm font-medium text-text-secondary uppercase tracking-widest">{lang.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== TRY IT NOW ====== */}
      <SectionReveal delay={0}>
        <TryItSection />
      </SectionReveal>

      {/* ====== CURRICULUM PREVIEW ====== */}
      <section className="py-24 px-4 sm:px-6 relative z-10 bg-white/30 dark:bg-slate-900/30 border-y border-white/40 dark:border-white/10">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text mb-6 tracking-tight">
              Spear <span className="text-gradient">Documentation</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Dokumentasi lengkap dan terstruktur. Intip topik-topik menarik yang tersedia untuk setiap bahasa.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumPreview.map((item, i) => {
              const initProps: any = isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 };
              return (
                <motion.div
                  key={item.lang}
                  className="glass-strong rounded-[24px] p-6 soft-shadow-lg group flex flex-col h-full transition-colors border-2 border-transparent hover:border-white/50"
                  initial={initProps}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: isMobile ? 0 : i * 0.1, type: "spring", bounce: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={isMobile ? {} : { y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/50">
                    <div className="w-4 h-4 rounded-full shadow-sm" style={{ background: item.color }} />
                    <h3 className="text-xl font-extrabold text-text">{item.lang}</h3>
                  </div>
                  <div className="space-y-3.5 flex-1">
                    {item.topics.map((topic, j) => (
                      <motion.div
                        key={j}
                        className="flex items-start gap-3 text-sm text-text-secondary/90 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (j * 0.05), duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" stroke={item.color}>
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                        <span className="leading-tight">{topic}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Link
                    href={`/docs/${item.lang.toLowerCase() === 'javascript' ? 'js' : item.lang.toLowerCase()}`}
                    className="inline-flex items-center justify-center gap-2 mt-8 py-3 px-4 rounded-xl text-sm font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors w-full"
                    style={{ color: item.color }}
                  >
                    Lihat Docs Lengkap
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text mb-6 tracking-tight">
              Pertanyaan <span className="text-gradient">Umum</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
              Masih ragu? Temukan jawaban untuk pertanyaan yang paling sering diajukan di sini.
            </p>
          </SectionReveal>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden z-20 bg-background/50">
        {/* Animated Orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-3" style={{ opacity: 0.2 }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="glass-strong rounded-[32px] p-8 sm:p-12 soft-shadow-xl relative overflow-hidden bg-white/60 backdrop-blur-xl border border-white"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-text mb-4 tracking-tight">
                Siap untuk <span className="text-gradient">Mulai</span>?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary/90 mb-8 max-w-xl mx-auto leading-relaxed font-medium">
                Bergabunglah dengan ribuan developer lainnya. Mulai perjalanan coding kamu hari ini. Gratis selamanya, tanpa batasan.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={ctaHref}
                    className="btn-shimmer cta-glow inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base shadow-lg shadow-primary/20"
                    style={{ background: 'linear-gradient(135deg, #6DD5C4, #7EB8F0)' }}
                  >
                    {isLoggedIn ? 'Buka Dashboard' : 'Daftar Sekarang — Gratis'}
                    <motion.svg
                      width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path d="M5 12H19M13 6L19 12L13 18" />
                    </motion.svg>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/playground"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-text bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border-2 border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 transition-all soft-shadow"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    Coba Playground
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== EMAIL / NEWSLETTER SECTION ====== */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="glass-strong rounded-[32px] p-8 sm:p-14 soft-shadow-xl relative overflow-hidden bg-white/80"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Top animated gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 animated-border border-0 border-b-0" />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md bg-white"
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="url(#mailGrad1)" strokeWidth="2.5" />
                    <path d="M2 7l10 6 10-6" stroke="url(#mailGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="mailGrad1" x1="2" y1="4" x2="22" y2="20">
                        <stop stopColor="#6DD5C4" />
                        <stop offset="1" stopColor="#7EB8F0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-text text-center mb-4 tracking-tight">
                Ada Pertanyaan atau <span className="text-gradient">Saran</span>?
              </h2>
              <p className="text-base text-text-secondary text-center mb-10 max-w-md mx-auto leading-relaxed">
                Hubungi kami kapan saja! Kirim pesan langsung ke tim Spear. Kami selalu senang mendengar feedback dari kamu.
              </p>

              <EmailForm />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
