# Panduan Scoping Proyek: Menentukan Goal & Batasan Aplikasi
*Standar Rekayasa Perangkat Lunak untuk Klien VRROBO2025*

Ketika klien ingin membuat aplikasi (Web / Android), sangat penting untuk mendefinisikan **Goal (Tujuan)** dan **Constraints (Batasan)** dengan jelas sebelum kode pertama ditulis. Ini membantu menghindari *scope creep* (pelebaran fitur tanpa kendali) dan memastikan hasil akhir sesuai ekspektasi.

Berikut adalah acuan standar mengenai apa yang harus diisi dan ditanyakan kepada klien:

---

## 1. Goal (Tujuan Aplikasi)
Goal menjelaskan *mengapa* aplikasi dibuat dan *apa* nilai tambah yang akan diberikan.

| Komponen Goal | Deskripsi | Contoh Pengisian |
| :--- | :--- | :--- |
| **Masalah Utama (*Problem Statement*)** | Masalah apa yang ingin diselesaikan oleh aplikasi ini? | "Proses pemesanan barang saat ini masih manual menggunakan WhatsApp, sehingga admin kewalahan mencatat stok." |
| **Solusi & Manfaat (*Core Value*)** | Bagaimana aplikasi ini membantu menyelesaikan masalah tersebut? | "Aplikasi pemesanan otomatis yang terhubung langsung dengan manajemen stok waktu-nyata (*real-time*)." |
| **Target Pengguna (*User Persona*)** | Siapa saja yang akan menggunakan aplikasi ini? | "Pembeli retail (masyarakat umum) dan Admin Gudang (staf internal)." |
| **Fitur Utama (*Minimum Viable Product / MVP*)** | Fitur mutlak yang wajib ada di versi pertama (tahap awal). | 1. Katalog produk.<br>2. Keranjang belanja & checkout.<br>3. Integrasi pembayaran digital.<br>4. Dashboard admin untuk kelola stok. |

---

## 2. Constraints (Batasan Program/Teknis)
Batasan mendefinisikan *bagaimana* aplikasi harus dibangun dan aturan main teknis yang tidak boleh dilanggar.

| Komponen Batasan | Deskripsi | Contoh Standar Teknis |
| :--- | :--- | :--- |
| **Platform & Kompatibilitas** | Di mana aplikasi akan berjalan? | - **Web**: Harus responsif (bagus di mobile & desktop), mendukung browser Chrome, Safari, dan Edge versi terbaru.<br>- **Android**: Mendukung Android versi 8.0 (Oreo) ke atas. |
| **Teknologi (*Tech Stack*)** | Adakah teknologi khusus yang wajib digunakan? | - Backend: Node.js (REST API)<br>- Database: PostgreSQL (Relasional)<br>- Mobile: Flutter (Single codebase untuk kemudahan pemeliharaan). |
| **Keamanan & Regulasi** | Standar keamanan data yang harus dipenuhi. | - Enkripsi kata sandi menggunakan *bcrypt*.<br>- Semua koneksi wajib HTTPS / SSL.<br>- Kepatuhan terhadap regulasi privasi data lokal (UU Perlindungan Data Pribadi / PDP). |
| **Kinerja (*Performance*)** | Batas performa minimum aplikasi. | - Waktu muat halaman (*load time*) maksimal 2,5 detik pada koneksi internet standar.<br>- Aplikasi Android harus ringan (ukuran file instalasi / APK di bawah 40MB). |
| **Integrasi Pihak Ketiga** | Layanan eksternal yang harus dihubungkan. | - Payment Gateway (misal: Midtrans atau Xendit).<br>- Maps API (Google Maps untuk penentuan lokasi pengiriman).<br>- WhatsApp Gateway (untuk notifikasi otomatis). |
| **Jadwal (*Timeline*) & Anggaran** | Batas waktu dan biaya. | - Aplikasi MVP harus selesai dalam waktu 2 bulan.<br>- Biaya pengerjaan maksimal Rp XX.XXX.XXX. |

---

## Implementasi pada Formulir Kontak Landing Page
Dalam konteks formulir kontak VRROBO2025, Anda dapat mengarahkan klien untuk mengisi kolom **Detail Ide Proyek** dengan struktur sederhana berikut:

> *"Untuk mempercepat analisis proyek, mohon sebutkan: **1. Tujuan utama aplikasi, 2. Fitur wajib yang diinginkan, dan 3. Apakah ada batasan teknologi/integrasi khusus.**"*

Dengan panduan ini, VRROBO2025 dapat memberikan estimasi biaya dan waktu yang jauh lebih akurat sejak awal.
