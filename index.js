/**
 * Simple Profile Landing Page with ExpressJS & HTML
 * Tugas Sesi 6 - Pemrograman Berbasis Platform
 * 
 * Nama  : Abel Hendrik M. P
 * NIM   : 20230040075
 * Kelas : TI25I / Teknik Informatika
 * Kampus: Universitas Nusa Putra
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Middleware to serve static files (HTML, CSS, JS, Images) from 'public' and root folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));
app.use(express.json());

// Profile Data Store
const profileData = {
  name: "Abel Hendrik M. P",
  nim: "20230040075",
  class: "TI25I / TI23",
  role: "Computer Science Student & Full-Stack Tech Builder",
  university: "Universitas Nusa Putra",
  location: "Sukabumi, West Java, Indonesia",
  bio: "Mahasiswa Teknik Informatika yang berfokus pada systems programming, automation, lean web development, dan arsitektur autonomous AI agents. Percaya pada prinsip low-resource leverage dan zero-bloat engineering.",
  skills: [
    { category: "Backend", items: ["Node.js", "Express.js", "Python", "RESTful APIs"] },
    { category: "Frontend", items: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript (ES6+)", "Vanilla SPA"] },
    { category: "Database & Cloud", items: ["SQLite", "PostgreSQL", "Supabase", "Cloudflare"] },
    { category: "Tools & DevOps", items: ["Linux / Bash", "Git & GitHub", "Tailscale", "Docker"] }
  ],
  education: {
    institution: "Universitas Nusa Putra",
    major: "Teknik Informatika (Informatics Engineering)",
    period: "2023 - Sekarang",
    status: "Active Student"
  },
  socials: {
    github: "https://github.com/maruwahalhendrick",
    email: "abel.hendrik_ti23@nusaputra.ac.id",
    linkedin: "https://linkedin.com/in/maruwahalhendrick"
  }
};

const projectData = [
  {
    id: 1,
    title: "NK Canvass — SME Business Booster",
    category: "Full-Stack Web & GIS",
    description: "Sistem digitalisasi dan canvas lapangan untuk 913 UMKM lokal di Sukabumi. Dilengkapi filtering kategori, kalkulator margin, dan offline-first PWA architecture.",
    tech: ["Vanilla JS", "Tailwind CDN", "Supabase", "PWA"],
    link: "https://maruwahalhendrick.github.io/nk-canvass/"
  },
  {
    id: 2,
    title: "Jericho Coffee R&D Constitution",
    category: "Autonomous System & Analytics",
    description: "Platform riset resep kopi jalanan otonom berbasis batasan fisik & finansial ketat (HPP ≤ Rp 6.000, cup 12oz) dengan simulasi margin dan auto-sync GitHub Pages.",
    tech: ["Python", "JavaScript", "GitHub Pages", "Cron Engine"],
    link: "https://maruwahalhendrick.github.io/jericho-coffee/"
  },
  {
    id: 3,
    title: "diff-budget (npm package)",
    category: "Developer Tooling / CLI",
    description: "Package npm open-source berbobot nol dependensi untuk membatasi ukuran git diff dari AI coding agent agar tidak merusak basis kode.",
    tech: ["Node.js", "CLI", "Git Hooks", "NPM Registry"],
    link: "https://www.npmjs.com/package/diff-budget"
  },
  {
    id: 4,
    title: "LifeOS Automation Suite",
    category: "Systems & Productivity",
    description: "Engine otomasi harian berbasis modular shell scripts dan scheduled cron jobs untuk mencatat refleksi kerja, monitoring data, dan recap mingguan.",
    tech: ["Bash", "Linux Systemd", "SQLite WAL", "Cron"],
    link: "https://github.com/maruwahalhendrick"
  }
];

// --- ROUTES ---

// 1. Root route: Serve Landing Page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 2. API Route: Get Profile Details (JSON)
app.get('/api/profile', (req, res) => {
  res.status(200).json({
    status: "success",
    timestamp: new Date().toISOString(),
    data: profileData
  });
});

// 3. API Route: Get Projects Portfolio (JSON)
app.get('/api/projects', (req, res) => {
  res.status(200).json({
    status: "success",
    total: projectData.length,
    data: projectData
  });
});

// 4. API Route: Single Project by ID
app.get('/api/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = projectData.find(p => p.id === projectId);
  
  if (!project) {
    return res.status(404).json({
      status: "error",
      message: `Project with ID ${projectId} not found`
    });
  }
  
  res.status(200).json({
    status: "success",
    data: project
  });
});

// 5. 404 Fallback Handler
app.use((req, res) => {
  res.status(404).send(`
    <div style="font-family: sans-serif; text-align: center; padding: 50px; background: #0f172a; color: white; min-height: 100vh;">
      <h1 style="font-size: 3rem; margin-bottom: 10px;">404</h1>
      <p style="color: #94a3b8; font-size: 1.2rem;">Halaman atau endpoint tidak ditemukan.</p>
      <a href="/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; text-decoration: none; border-radius: 8px;">Kembali ke Beranda</a>
    </div>
  `);
});

// Start Server
app.listen(PORT, HOST, () => {
  console.log(`====================================================`);
  console.log(`🚀 ExpressJS Profile Server Running Successfully!`);
  console.log(`📡 Local Access   : http://localhost:${PORT}`);
  console.log(`🌐 Network Access : http://${HOST}:${PORT}`);
  console.log(`👨‍🎓 Student Name   : Abel Hendrik M. P (20230040075)`);
  console.log(`📚 Subject        : Pemrograman Berbasis Platform (TI25I)`);
  console.log(`====================================================`);
});
