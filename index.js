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

// Serve static assets from 'public' and root
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

// Route landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`🚀 Profile server running at http://${HOST}:${PORT}`);
});
