# Tugas Sesi 6 — Setup Simple Landing Page (Profile) using ExpressJS and HTML

**Mata Kuliah:** Pemrograman Berbasis Platform (TI25I)  
**Dosen Pengajar:** NUGRAHA, M.Kom  
**Program Studi:** S1 Teknik Informatika, Universitas Nusa Putra  

---

### Identitas Pengembang
* **Nama Lengkap:** Abel Hendrik M. P
* **NIM:** 20230040075
* **Kelas:** TI25I / TI23
* **Repository GitHub:** [https://github.com/maruwahalhendrick](https://github.com/maruwahalhendrick)
* **Email Mahasiswa:** abel.hendrik_ti23@nusaputra.ac.id

---

## 1. Deskripsi Proyek
Proyek ini dibangun untuk memenuhi penugasan Sesi 6 mata kuliah **Pemrograman Berbasis Platform**. Aplikasi ini menyajikan halaman arahan (*Landing Page*) profil pengembang personal yang di-host menggunakan web server **Express.js** dan berkas antarmuka **HTML5** modern.

Tidak hanya menyajikan berkas HTML statis secara pasif, web server Express.js di proyek ini juga mengimplementasikan arsitektur **RESTful API** yang mengembalikan data profil dan daftar proyek portofolio dalam format JSON secara dinamis. Di sisi antarmuka, terdapat modul interaktif **Express.js Live API Tester** yang memungkinkan pengunjung menguji komunikasi HTTP `GET` dari klien ke server secara langsung (*real-time*).

---

## 2. Struktur Direktori Proyek
```text
session6_landing_page/
├── index.js                  # Entry point web server Express.js & definisi routing
├── package.json              # Metadata proyek, dependencies (Express), dan run scripts
├── package-lock.json         # Kunci versi dependensi
├── public/                   # Direktori berkas statis (di-serve via express.static)
│   ├── index.html            # Antarmuka profil developer (Tailwind CSS, dark mode)
│   └── images/
│       └── avatar.png        # Foto profil pengembang
└── README.md                 # Dokumentasi komprehensif proyek
```

---

## 3. Fitur Utama & Arsitektur Kode

### A. Static Asset Serving (`express.static`)
Berkas HTML, gambar, dan aset statis disajikan melalui middleware bawaan Express:
```javascript
app.use(express.static(path.join(__dirname, 'public')));
```
Dengan middleware ini, rute akar (`/`) otomatis membaca dan menampilkan berkas `public/index.html`.

### B. RESTful API Endpoints
Server Express menyediakan endpoint data dinamis:
| HTTP Verb | Endpoint URL | Fungsi / Deskripsi |
|---|---|---|
| `GET` | `/` | Menampilkan antarmuka Landing Page Profil Pengembang |
| `GET` | `/api/profile` | Mengembalikan data detail biodata, NIM, keahlian, dan riwayat akademik dalam format JSON |
| `GET` | `/api/projects` | Mengembalikan seluruh daftar portofolio proyek dalam format JSON |
| `GET` | `/api/projects/:id` | Mengembalikan detail spesifik proyek berdasarkan parameter ID dinamis (`req.params.id`) |

### C. 404 Custom Error Handling
Jika pengguna atau klien mengakses URL atau rute yang tidak terdaftar, server menangani dengan respons status HTTP 404 dan antarmuka ramah pengguna:
```javascript
app.use((req, res) => {
  res.status(404).send(`...Custom 404 Page...`);
});
```

### D. Live API Tester (Client-Server Interaction)
Pada berkas `public/index.html`, diimplementasikan fungsi asinkron JavaScript (`fetch`) yang menembak endpoint Express secara langsung dan memvisualisasikan respons payload JSON, HTTP Status Code, dan durasi latensi (*response time*).

---

## 4. Cara Menjalankan Proyek Secara Lokal

### Prasyarat:
* Node.js versi 18 ke atas (Direkomendasikan Node.js v20 atau v22).
* NPM (Node Package Manager).

### Langkah Menjalankan:
1. Masuk ke direktori proyek:
   ```bash
   cd "platform programming/session6_landing_page"
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan server (Mode Produksi):
   ```bash
   npm start
   ```

4. Atau jalankan server (Mode Development dengan Auto-Reload native Node.js `--watch`):
   ```bash
   npm run dev
   ```

5. Buka peramban (*browser*) dan akses:
   ```text
   http://localhost:3000
   ```
   *(Atau melalui IP jaringan lokal / Tailscale: `http://100.111.233.52:3000`)*

---

## 5. Ringkasan Teknis (Tech Stack)
* **Runtime:** Node.js (v22)
* **Backend Framework:** Express.js (v4.21)
* **Styling & UI:** Tailwind CSS (CDN), Plus Jakarta Sans, JetBrains Mono
* **Metode Komunikasi:** Fetch API (AJAX Asynchronous Request)
* **Format Data:** JSON (JavaScript Object Notation)
