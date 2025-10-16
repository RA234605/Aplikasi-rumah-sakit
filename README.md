# Hospital Web Application RS Parik (Sistem Informasi Rumah Sakit)

**Aplikasi ini kepentingan mengumpulkan tugas. Jangan gunakan untuk production.**

## 1. Deskripsi Proyek

Hospital Web Application RS Parik adalah sebuah aplikasi berbasis website yang dikembangkan untuk Rumah Sakit fiktif "RS Parik". Aplikasi ini dirancang sebagai solusi *full-stack* yang dibagi menjadi dua bagian utama:

1.  **Bagian Publik (Public-facing):** Antarmuka sederhana untuk masyarakat umum.
2.  **Bagian Staf Internal (Staff-facing):** Sebuah Sistem Informasi Rumah Sakit (**Hospital Information System/HIS**) yang komprehensif.

## Batasan

Di bawah akan menjabarkan masing-masing poin, akan tetapi, bagi orang yang tidak peduli terhadap itu, bagian batasan tertulis di sini agar ringkas.
1. Sistem BPJS dan asuransi-asuransi lainnya akan didesain sebagai mockup.
### 2. Bagian Publik (Public-facing)

Bagian ini merupakan antarmuka minimal yang ditujukan untuk masyarakat umum. Fitur utamanya berfokus pada penyediaan informasi dasar dan interaksi awal dengan rumah sakit.

| Fitur | Deskripsi |
| :--- | :--- |
| **Profil RS** | Informasi kontak, lokasi, dan sejarah singkat RS Parik. |
| **Profile Dokter** | Profil singkat dokter-dokter RS Parik.|
| **Press Release** | Berita-berita yang berhubungan dengan rumah sakit. |
| **Layanan & Poliklinik** | Daftar lengkap layanan dan jam operasional. |
| **Fitur Lainnya** | Formulir Pendaftaran Online, [Contoh: Formulir Pendaftaran Online sederhana, Cek Ketersediaan Kamar]. |

### 3. Bagian Staf Internal: Hospital Information System (HIS)

Bagian ini adalah inti dari aplikasi dan selanjutnya disebut sebagai **Hospital Information System (HIS)**.

HIS adalah platform terintegrasi yang menggabungkan berbagai fungsi administrasi, finansial, dan klinis. Tujuannya adalah untuk:
* **Memanage Informasi Pasien:** Menyediakan akses mudah dan aman terhadap data pasien.
* **Merampingkan Alur Kerja:** Mengotomatisasi tugas-tugas administratif untuk meningkatkan efisiensi staf.
* **Meningkatkan Kualitas Perawatan:** Memberikan waktu lebih banyak bagi staf untuk fokus pada perawatan pasien.

---

### 4. Penjabaran Modul-Modul HIS

HIS terdiri dari beberapa sistem informasi yang lebih spesifik, dikelompokkan berdasarkan fokus fungsionalnya:

#### A. Modul Klinis (Clinical Information System/CIS)

Modul-modul ini secara langsung mendukung proses dan pengambilan keputusan klinis oleh tenaga medis.

| Modul CIS | Deskripsi & Fungsi Utama |
| :--- | :--- |
| **Electronic Medical/Health Records (EMR/EHR)** | Sistem utama untuk menyimpan dan mengelola informasi kesehatan pasien secara digital. Memungkinkan akses, pencatatan riwayat medis, dan berbagi data yang mudah di antara penyedia layanan kesehatan. |
| **Clinical Decision Support Systems (CDS)** | Menyediakan wawasan dan peringatan berbasis data kepada profesional kesehatan (dokter/perawat) untuk mendukung keputusan klinis, seperti interaksi obat atau panduan diagnosis, guna meningkatkan hasil perawatan pasien. |
| **Penunjang Medis** | Mengelola dan mengintegrasikan informasi dari layanan penunjang diagnosis dan terapi (Contoh: Laporan Laboratorium, Hasil Radiologi). |
| **Order Entry System** | Sistem untuk mencatat dan mengelola pesanan (order) klinis, seperti resep obat (e-Prescribing), permintaan tes laboratorium, atau permintaan konsultasi. |

#### B. Modul Administratif dan Operasional

Modul-modul ini mendukung manajemen operasional harian rumah sakit.

| Modul Administratif | Deskripsi & Fungsi Utama |
| :--- | :--- |
| **Practice Management System** | Membantu tugas-tugas administratif seperti **penjadwalan janji temu**, **pendaftaran pasien**, dan **pengelolaan alur kerja harian** di poliklinik atau unit rawat inap. |
| **Inventory Management** | Melacak **persediaan medis**, **obat-obatan**, dan **peralatan**, memastikan rumah sakit mempertahankan tingkat stok yang memadai dan mengelola sumber daya secara efektif. |
| **Human Resources Management (HRM)** | Mengelola data kepegawaian staf (dokter, perawat, administrasi), jadwal kerja, cuti, dan penggajian. |

#### C. Modul Finansial

Modul-modul yang berfokus pada siklus pendapatan dan pengelolaan keuangan rumah sakit.

| Modul Finansial | Deskripsi & Fungsi Utama |
| :--- | :--- |
| **Financial Management System** | Mengelola **penagihan (billing)**, **klaim asuransi** (termasuk verifikasi kelayakan), dan **pelaporan keuangan** (laba rugi), memastikan siklus pendapatan yang efisien dan akurat. |
| **Pencatatan Biaya (Cost Accounting)** | Melacak biaya yang dikeluarkan untuk setiap layanan atau pasien untuk tujuan analisis keuangan dan penetapan harga. |