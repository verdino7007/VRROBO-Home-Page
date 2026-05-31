/* ==========================================================================
   VRROBO2025 BRANDING LANDING PAGE - BILINGUAL & TRACKER LOGIC
   ========================================================================== */

// 1. Bilingual Translation Dictionary (ID / EN)
const translations = {
  id: {
    // Navigation
    "nav-home": "Home",
    "nav-services": "Layanan",
    "nav-tech": "Teknologi",
    "nav-why": "Mengapa Kami",
    "nav-tracker": "Lacak Proyek",
    "nav-admin": "Dashboard PM",
    "nav-contact": "Hubungi Kami",
    
    // Hero
    "hero-badge": "Buka untuk Kolaborasi 2026",
    "hero-desc": "VRROBO2025 menghadirkan layanan pengembangan software kustom berkualitas tinggi dengan performa tangguh, keamanan tingkat lanjut, dan desain UI/UX modern yang memikat pengguna Anda.",
    "hero-cta-primary": "Konsultasi Gratis",
    "hero-cta-secondary": "Lihat Layanan",
    "hero-card1-content": "Kecepatan Akses: 100%<br>Performa Sistem: Sangat Cepat",
    "hero-card2-content": "Native & Lintas Platform<br>Kestabilan: Sangat Stabil",
    
    // Services
    "services-subtitle": "Layanan Kami",
    "services-title": "Solusi Digital yang Kami Tawarkan",
    "services-web-title": "Web-Based Application",
    "services-web-desc": "Pengembangan sistem aplikasi berbasis web yang kuat, responsif, dan dapat diakses dari perangkat apa pun tanpa instalasi. Sempurna untuk skalabilitas bisnis Anda.",
    "services-web-feat1": "Sistem Informasi & Dashboard Kustom",
    "services-web-feat2": "E-Commerce & Integrasi Payment Gateway",
    "services-web-feat3": "Progressive Web Apps (PWA)",
    "services-web-feat4": "Integrasi RESTful API & Keamanan SQL/XSS",
    
    "services-android-title": "Android Application",
    "services-android-desc": "Pembuatan aplikasi Android modern, responsif, dan interaktif dengan pemanfaatan hardware perangkat secara optimal untuk memberikan pengalaman pengguna terbaik.",
    "services-android-feat1": "Android Native & Lintas Platform (Flutter)",
    "services-android-feat2": "UI/UX Modern dengan Dark Mode Bawaan",
    "services-android-feat3": "Integrasi Fitur HP (Kamera, GPS, Notifikasi)",
    "services-android-feat4": "Dukungan Rilis ke Google Play Store",
    
    // Tech
    "tech-subtitle": "Teknologi Kami",
    "tech-title": "Teknologi Modern untuk Performa Maksimal",
    "tech-desc": "Kami menggunakan teknologi terdepan dan teruji di industri untuk memastikan aplikasi Anda cepat, aman, dan mudah dikembangkan di masa depan.",
    
    // Why Choose Us
    "why-subtitle": "Kelebihan VRROBO2025",
    "why-title": "Mengapa Mempercayakan Aplikasi Anda kepada Kami?",
    "why-stat1": "Kepuasan Klien",
    "why-stat2": "Lebih Cepat & Optimal",
    "why-stat3": "Dukungan Teknis",
    "why-stat4": "Standar Tech Terkini",
    
    "why-feat1-title": "Desain UI/UX Eksklusif & Modern",
    "why-feat1-desc": "Setiap aplikasi dirancang secara kustom, bukan menggunakan template pasaran, agar brand Anda tampil menonjol.",
    "why-feat2-title": "Fokus Keamanan & Performa Tinggi",
    "why-feat2-desc": "Optimasi struktur database, caching, dan perlindungan dari kerentanan umum di web dan android.",
    "why-feat3-title": "Kode Bersih & Skala Skalalabel",
    "why-feat3-desc": "Menggunakan arsitektur software yang bersih sehingga aplikasi mudah dikembangkan dengan fitur-fitur baru di masa depan.",
    
    // Tracker Section
    "tracker-subtitle": "Pelacakan Real-time",
    "tracker-title": "Lacak Status & Progress Proyek Anda",
    "tracker-btn-search": "Lacak Proyek",
    "status-review": "Menunggu Review",
    "status-agreement": "Tahap Persetujuan KPI",
    "status-dev": "Tahap Pengembangan",
    "status-qa": "Tahap Pengujian QA",
    "status-launch": "Sudah Rilis / Selesai",
    "status-dropped": "Dibatalkan",
    
    "summary-label-platform": "Platform",
    "summary-label-cost": "Estimasi Anggaran",
    "summary-label-time": "Waktu Kerja",
    
    // Steps Tracker
    "step1-title": "Inisiasi Proyek",
    "step1-desc": "Pemesanan & Deskripsi Proyek Diterima.",
    "step2-title": "Persetujuan & KPI",
    "step2-desc": "Kesepakatan KPI & Draft Kontrak VRROBO.",
    "step3-title": "Pengembangan",
    "step3-desc": "Proses Pembuatan Kode & Desain UI/UX.",
    "step4-title": "Pengujian (QA)",
    "step4-desc": "Pengujian Sistem, Bugs Fix & Keamanan.",
    "step5-title": "Rilis & Delivery",
    "step5-desc": "Serah Terima & Rilis ke Produksi/Store.",
    
    // Project Agreement Drawer
    "agreement-title": "Draf Persetujuan Proyek & KPI VRROBO2025",
    "agreement-info": "Berikut adalah draf kerja resmi sebagai acuan target KPI proyek Anda. Mohon setujui draf ini untuk memulai proses pengembangan.",
    "kpi-speed": "Page Load Time kurang dari 2.5 Detik (Optimasi Aset & Caching).",
    "kpi-responsive": "100% Responsif di perangkat Mobile, Tablet, dan Desktop.",
    "kpi-bugs": "Bebas dari Crash Utama (Critical Bug-Free) pada saat rilis produksi.",
    "kpi-security": "Keamanan Teruji (Enkripsi database password, proteksi SQL Injection & XSS).",
    "kpi-qa": "Melalui 2 Tahap Pengujian QA (Alpha & Beta Testing) oleh Tim VRROBO.",
    "sig-pm": "Project Manager VRROBO",
    "sig-client": "Pihak Klien (Anda)",
    "sig-pending": "Menunggu Persetujuan Anda",
    "sig-approved": "DISETUJUI (Verified Kontrak)",
    "btn-approve-project": "Setujui Proyek & Tanda Tangan Kontrak",
    "share-title": "Bagikan Persetujuan Kontrak ke PM / Klien:",
    "tracker-error": "Tiket tidak ditemukan. Pastikan ID Tiket yang dimasukkan benar.",
    "notice-dropped-title": "PROYEK DIBATALKAN (DROPPED)",
    "notice-dropped-desc": "Proyek ini dibatalkan oleh PM VRROBO dengan alasan:",
    "history-box-title": "Riwayat Aktivitas & Log Proyek",

    // Admin Panel Translations
    "admin-login-title": "Akses Khusus Project Manager VRROBO",
    "admin-login-subtitle": "Masukkan sandi khusus PM untuk mengelola data proyek, harga, dan progress klien.",
    "admin-label-pass": "Sandi Khusus PM",
    "admin-btn-login": "Masuk ke Panel PM",
    "admin-login-failed": "Sandi salah. Silakan coba lagi.",
    "admin-list-title": "Daftar Tiket Proyek",
    "th-ticket": "ID Tiket",
    "th-client": "Klien",
    "th-status": "Status",
    "admin-placeholder": "Pilih salah satu tiket di daftar sebelah kiri untuk memodifikasi progress, diskon, atau membatalkan proyek.",
    "pm-ctrl-disc": "Berikan Diskon Harga oleh PM",
    "applied-disc": "Diskon Terpasang:",
    "pm-ctrl-status": "Ubah Status Proyek (Step Status)",
    "btn-set-init": "Inisiasi",
    "btn-set-agree": "Persetujuan",
    "btn-set-dev": "Develop",
    "btn-set-qa": "QA Test",
    "btn-set-launch": "Rilis",
    "pm-ctrl-drop": "Batalkan Proyek (Drop Project)",
    "label-drop-reason": "Alasan Pembatalan (Wajib)",
    "btn-drop": "Batalkan & Hentikan Proyek (Drop)",
    "pm-ctrl-revive": "Pulihkan Kembali Proyek (Revive)",
    "revive-hint": "Proyek ini dibatalkan sebelumnya. Klik tombol di bawah untuk memulihkan proyek ini ke status pengerjaan terakhir.",
    "btn-revive": "Pulihkan Proyek Sekarang (Revive)",
    "pm-ctrl-logs": "Catatan Log Riwayat Proyek",
    
    // Contact Info
    "contact-subtitle": "Hubungi Kami",
    "contact-title": "Siap Memulai Proyek Anda?",
    "contact-desc": "Tentukan kebutuhan aplikasi Anda menggunakan opsi formulir interaktif di samping. Kami akan menganalisis kebutuhan Anda dan segera mengirimkan proposal penawaran.",
    "contact-label-email": "Email Respon Cepat",
    "contact-label-loc": "Lokasi Operasional",
    "contact-val-loc": "Indonesia (Online & Remote Seluruh Dunia)",
    
    // Form Labels & Select Options
    "form-label-name": "Nama Lengkap / Instansi",
    "form-label-email": "Alamat Email Kontak",
    "form-label-platform": "Tipe Platform Aplikasi",
    "form-opt-platform": "Pilih Platform...",
    "form-opt-web": "Web-Based Application",
    "form-opt-android": "Android Mobile Application",
    "form-opt-both": "Keduanya (Web & Android)",
    "form-opt-consult": "Konsultasi Sistem / Lainnya",
    
    "form-label-budget": "Skala / Estimasi Anggaran",
    "form-opt-budget": "Pilih Anggaran...",
    "form-opt-budget-econ": "Ekonomis / MVP Proyek",
    "form-opt-budget-prof": "Menengah / Standar Bisnis",
    "form-opt-budget-ent": "Skala Besar / Kustom Kompleks",
    
    "form-label-timeline": "Estimasi Target Waktu (Timeline)",
    "form-opt-timeline": "Pilih Target Waktu...",
    "form-opt-time-fast": "Cepat (< 1 Bulan)",
    "form-opt-time-norm": "Standar (1 - 3 Bulan)",
    "form-opt-time-ext": "Bertahap (> 3 Bulan)",
    
    "form-label-features": "Fitur Utama yang Dibutuhkan (Pilih Sesuai Kebutuhan)",
    "feat-auth": "Sistem Login / Akun",
    "feat-payment": "Pembayaran Online",
    "feat-maps": "Peta & GPS Lokasi",
    "feat-notif": "Notifikasi Real-time",
    "feat-admin": "Dashboard Admin",
    "feat-chat": "Integrasi Chat/WhatsApp",
    
    "form-label-constraints": "Batasan Teknis Khusus (Jika Ada)",
    "const-offline": "Dapat Diakses Offline",
    "const-multi": "Wajib Android & iOS",
    "const-security": "Kepatuhan Keamanan Tinggi",
    "const-legacy": "Integrasi Database Lama",
    
    "form-label-desc": "Deskripsi Tambahan Ide Proyek (Opsional)",
    "form-btn-submit": "Kirim Pesan Konsultasi",
    
    // Modal
    "modal-title": "Scoping Proyek Berhasil!",
    "modal-subtitle": "Terima kasih atas kepercayaan Anda kepada VRROBO2025. Berikut adalah detail draf proyek Anda:",
    "receipt-label-name": "Klien",
    "receipt-label-platform": "Tipe Platform",
    "receipt-label-time": "Estimasi Timeline",
    "price-breakdown-title": "Rincian Estimasi Biaya (AI Assisted):",
    "breakdown-dev": "Biaya Pengembangan Base",
    "breakdown-feat": "Fitur Tambahan",
    "breakdown-qa": "Proses QA & Pengujian (15%)",
    "breakdown-inc": "Biaya Timbul (Hosting/Play Store)",
    "breakdown-total": "Estimasi Total Proyek",
    "receipt-footer-text": "Gunakan QR Code di atas atau simpan Tiket ID untuk melacak progres proyek Anda kapan saja pada bagian tracker kami.",
    "modal-btn-track": "Lihat Kontrak & Progress Proyek",
    "modal-btn-close": "Tutup",
    
    "footer-link-services": "Layanan",
    "footer-link-tech": "Teknologi",
    "footer-link-contact": "Kontak"
  },
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-tech": "Technologies",
    "nav-why": "Why Us",
    "nav-tracker": "Track Project",
    "nav-admin": "PM Dashboard",
    "nav-contact": "Contact Us",
    
    // Hero
    "hero-badge": "Open for Collaboration 2026",
    "hero-desc": "VRROBO2025 delivers high-quality custom software development services focused on high performance, advanced security, and modern UI/UX design that engages your users.",
    "hero-cta-primary": "Get Free Consultation",
    "hero-cta-secondary": "View Services",
    "hero-card1-content": "Responsiveness: 100%<br>Speed Performance: Ultra Fast",
    "hero-card2-content": "Native & Cross-Platform<br>Reliability: Highly Stable",
    
    // Services
    "services-subtitle": "Our Services",
    "services-title": "Digital Solutions We Offer",
    "services-web-title": "Web-Based Application",
    "services-web-desc": "Development of powerful, responsive, and cross-device web application systems without installation. Perfect for scaling your business operations.",
    "services-web-feat1": "Information Systems & Custom Dashboards",
    "services-web-feat2": "E-Commerce & Payment Gateway Integration",
    "services-web-feat3": "Progressive Web Apps (PWA)",
    "services-web-feat4": "RESTful API Integration & SQL/XSS Security Check",
    
    "services-android-title": "Android Application",
    "services-android-desc": "Creation of modern, responsive, and interactive Android apps utilizing device hardware optimally to deliver the best user experience.",
    "services-android-feat1": "Android Native & Cross-Platform (Flutter)",
    "services-android-feat2": "Modern UI/UX with Native Dark Mode Support",
    "services-android-feat3": "Integration of Phone Features (Camera, GPS, Notifications)",
    "services-android-feat4": "Google Play Store Submission Support",
    
    // Tech
    "tech-subtitle": "Our Technologies",
    "tech-title": "Modern Tech Stack for Maximum Performance",
    "tech-desc": "We use leading, industry-proven technologies to ensure your application is fast, secure, and easily maintainable in the future.",
    
    // Why Choose Us
    "why-subtitle": "VRROBO2025 Edge",
    "why-title": "Why Trust Us with Your Application?",
    "why-stat1": "Client Satisfaction",
    "why-stat2": "Faster & Optimized",
    "why-stat3": "Technical Support",
    "why-stat4": "Modern Tech Standards",
    
    "why-feat1-title": "Exclusive & Modern UI/UX Design",
    "why-feat1-desc": "Each application is custom designed, not using generic templates, to make your brand stand out.",
    "why-feat2-title": "Focus on Security & High Performance",
    "why-feat2-desc": "Database structure optimization, caching, and protection against common web and android vulnerabilities.",
    "why-feat3-title": "Clean & Scalable Codebase",
    "why-feat3-desc": "Using clean software architecture so that applications can easily grow with new features in the future.",
    
    // Tracker Section
    "tracker-subtitle": "Real-time Tracking",
    "tracker-title": "Track Your Project Status & Progress",
    "tracker-btn-search": "Track Project",
    "status-review": "Review Requirements",
    "status-agreement": "KPI Agreement Stage",
    "status-dev": "Development Stage",
    "status-qa": "QA Testing Stage",
    "status-launch": "Released / Completed",
    "status-dropped": "Dropped",
    
    "summary-label-platform": "Platform",
    "summary-label-cost": "Estimated Budget",
    "summary-label-time": "Timeframe",
    
    // Steps Tracker
    "step1-title": "Project Initiation",
    "step1-desc": "Order & Project Description Received.",
    "step2-title": "Agreement & KPI",
    "step2-desc": "KPI Agreement & VRROBO Contract Draft.",
    "step3-title": "Development",
    "step3-desc": "UI/UX Design & Coding Process.",
    "step4-title": "Testing (QA)",
    "step4-desc": "System Tests, Bug Fixes & Security Check.",
    "step5-title": "Release & Launch",
    "step5-desc": "Handover & Production/Store Release.",
    
    // Project Agreement Drawer
    "agreement-title": "Project Agreement Draft & KPI VRROBO2025",
    "agreement-info": "This is the official project agreement draft to serve as target KPIs. Please approve this draft to initiate the development process.",
    "kpi-speed": "Page Load Time under 2.5 Seconds (Assets Optimization & Caching).",
    "kpi-responsive": "100% Responsive on Mobile, Tablet, and Desktop screens.",
    "kpi-bugs": "Critical Bug-Free release for the production system.",
    "kpi-security": "Verified Security (Encrypted database passwords, SQL Injection & XSS protection).",
    "kpi-qa": "Validated through 2 QA Stages (Alpha & Beta Testing) by VRROBO Team.",
    "sig-pm": "Project Manager VRROBO",
    "sig-client": "Client Signature (You)",
    "sig-pending": "Awaiting Your Approval",
    "sig-approved": "APPROVED (Contract Verified)",
    "btn-approve-project": "Approve Project & Sign Agreement",
    "share-title": "Share Project Agreement with PM / Client:",
    "tracker-error": "Ticket ID not found. Please make sure you input a valid Ticket ID.",
    "notice-dropped-title": "PROJECT CANCELLED (DROPPED)",
    "notice-dropped-desc": "This project was cancelled by VRROBO PM with reason:",
    "history-box-title": "Project Activity History & Logs",

    // Admin Panel Translations
    "admin-login-title": "VRROBO Project Manager Access Only",
    "admin-login-subtitle": "Enter the PM passcode to manage project data, pricing, and client progress.",
    "admin-label-pass": "PM Passcode",
    "admin-btn-login": "Access PM Panel",
    "admin-login-failed": "Invalid passcode. Please try again.",
    "admin-list-title": "Project Tickets List",
    "th-ticket": "Ticket ID",
    "th-client": "Client",
    "th-status": "Status",
    "admin-placeholder": "Select a ticket from the left list to modify progress, apply discounts, or cancel/drop the project.",
    "pm-ctrl-disc": "Apply PM Price Discount",
    "applied-disc": "Applied Discount:",
    "pm-ctrl-status": "Change Project Status (Status Steps)",
    "btn-set-init": "Initiate",
    "btn-set-agree": "Agreement",
    "btn-set-dev": "Develop",
    "btn-set-qa": "QA Test",
    "btn-set-launch": "Release",
    "pm-ctrl-drop": "Cancel Project (Drop Project)",
    "label-drop-reason": "Cancellation Reason (Required)",
    "btn-drop": "Cancel & Stop Project (Drop)",
    "pm-ctrl-revive": "Revive Cancelled Project (Revive)",
    "revive-hint": "This project was previously cancelled. Click the button below to revive it to its last working status.",
    "btn-revive": "Revive Project Now (Revive)",
    "pm-ctrl-logs": "Project History Activity Logs",
    
    // Contact Info
    "contact-subtitle": "Contact Us",
    "contact-title": "Ready to Start Your Project?",
    "contact-desc": "Define your application requirements using the interactive form options. We will analyze your needs and send a project proposal promptly.",
    "contact-label-email": "Quick Response Email",
    "contact-label-loc": "Operational Location",
    "contact-val-loc": "Indonesia (Online & Remote Globally)",
    
    // Form Labels & Select Options
    "form-label-name": "Full Name / Company Name",
    "form-label-email": "Contact Email Address",
    "form-label-platform": "Application Platform Type",
    "form-opt-platform": "Select Platform...",
    "form-opt-web": "Web-Based Application",
    "form-opt-android": "Android Mobile Application",
    "form-opt-both": "Both (Web & Android)",
    "form-opt-consult": "System Consultation / Other",
    
    "form-label-budget": "Project Scale / Budget",
    "form-opt-budget": "Select Budget Scale...",
    "form-opt-budget-econ": "Economic / MVP Project",
    "form-opt-budget-prof": "Medium / Business Standard",
    "form-opt-budget-ent": "Large Scale / Custom Enterprise",
    
    "form-label-timeline": "Estimated Timeline Target",
    "form-opt-timeline": "Select Target Timeline...",
    "form-opt-time-fast": "Fast (< 1 Month)",
    "form-opt-time-norm": "Standard (1 - 3 Months)",
    "form-opt-time-ext": "Gradual (> 3 Months)",
    
    "form-label-features": "Key Features Required (Select All That Apply)",
    "feat-auth": "User Login & Accounts",
    "feat-payment": "Online Payments",
    "feat-maps": "Maps & GPS Locations",
    "feat-notif": "Real-time Notifications",
    "feat-admin": "Admin Control Dashboard",
    "feat-chat": "Chat/WhatsApp Integration",
    
    "form-label-constraints": "Special Technical Constraints (If Any)",
    "const-offline": "Offline Capabilities",
    "const-multi": "Must Have Android & iOS Support",
    "const-security": "High Security Compliance",
    "const-legacy": "Legacy Database Integration",
    
    "form-label-desc": "Additional Project Description (Optional)",
    "form-btn-submit": "Send Project Inquiry",
    
    // Modal
    "modal-title": "Scoping Success!",
    "modal-subtitle": "Thank you for trusting VRROBO2025. Here is your project scoping draft details:",
    "receipt-label-name": "Client",
    "receipt-label-platform": "Platform Type",
    "receipt-label-time": "Estimated Timeframe",
    "price-breakdown-title": "Price Estimation Breakdown (AI Assisted):",
    "breakdown-dev": "Base Development Cost",
    "breakdown-feat": "Additional Features Cost",
    "breakdown-qa": "QA Testing Cost (15%)",
    "breakdown-inc": "Incidental Cost (Hosting/Stores)",
    "breakdown-total": "Total Project Estimate",
    "receipt-footer-text": "Use the QR Code above or save your Ticket ID to track progress any time on our project tracker.",
    "modal-btn-track": "View Contract & Project Progress",
    "modal-btn-close": "Close",
    
    "footer-link-services": "Services",
    "footer-link-tech": "Technologies",
    "footer-link-contact": "Contact"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. Language Toggle & Bilingual Management
  // ==========================================
  const btnLangId = document.getElementById('btn-lang-id');
  const btnLangEn = document.getElementById('btn-lang-en');
  let currentLang = localStorage.getItem('vrrobo_lang') || 'id';

  const applyTranslations = (lang) => {
    // Translate elements with data-i18n attributes
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(el => {
      const translationKey = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][translationKey]) {
        if (translationKey.includes('card') && translationKey.includes('content')) {
          el.innerHTML = translations[lang][translationKey];
        } else {
          el.textContent = translations[lang][translationKey];
        }
      }
    });

    // Translate Main Headline (keeps gradient spans)
    const mainHeadline = document.getElementById('main-headline');
    if (mainHeadline) {
      if (lang === 'en') {
        mainHeadline.innerHTML = 'Transforming Your Ideas Into World-Class <span class="gradient-text">Web Based</span> & <span class="gradient-text-alt">Android</span> Apps';
      } else {
        mainHeadline.innerHTML = 'Mengubah Ide Anda Menjadi Aplikasi <span class="gradient-text">Web Based</span> & <span class="gradient-text-alt">Android</span> Kelas Dunia';
      }
    }

    // Translate Form & Search Input Placeholders
    const nameInput = document.getElementById('form-name-input');
    const emailInput = document.getElementById('form-email-input');
    const descInput = document.getElementById('form-message-input');
    const trackerInput = document.getElementById('tracker-input');
    const adminPassInput = document.getElementById('admin-passcode');

    if (nameInput) nameInput.placeholder = lang === 'en' ? 'Enter your name / institution...' : 'Masukkan nama Anda / Instansi...';
    if (emailInput) emailInput.placeholder = lang === 'en' ? 'name@email.com' : 'nama@email.com';
    if (descInput) descInput.placeholder = lang === 'en' ? 'Write additional notes here if any...' : 'Tulis catatan tambahan di sini jika ada...';
    if (trackerInput) trackerInput.placeholder = lang === 'en' ? 'Enter Ticket ID (e.g. VRB-2026-0001)...' : 'Masukkan ID Tiket Anda (cth: VRB-2026-0001)...';
    if (adminPassInput) adminPassInput.placeholder = lang === 'en' ? 'Enter passcode...' : 'Masukkan sandi...';

    // Update active lang toggle classes
    if (lang === 'en') {
      btnLangEn.classList.add('active');
      btnLangId.classList.remove('active');
    } else {
      btnLangId.classList.add('active');
      btnLangEn.classList.remove('active');
    }

    // Set doc HTML lang
    document.documentElement.lang = lang;
  };

  applyTranslations(currentLang);

  if (btnLangId) {
    btnLangId.addEventListener('click', () => {
      currentLang = 'id';
      localStorage.setItem('vrrobo_lang', currentLang);
      applyTranslations(currentLang);
      
      // Refresh current active tracker result if visible
      const activeTicketId = document.getElementById('display-ticket-id')?.textContent;
      if (activeTicketId && activeTicketId !== 'VRB-2026-0001') {
        renderTicketProgress(activeTicketId);
      }
    });
  }

  if (btnLangEn) {
    btnLangEn.addEventListener('click', () => {
      currentLang = 'en';
      localStorage.setItem('vrrobo_lang', currentLang);
      applyTranslations(currentLang);
      
      // Refresh current active tracker result if visible
      const activeTicketId = document.getElementById('display-ticket-id')?.textContent;
      if (activeTicketId && activeTicketId !== 'VRB-2026-0001') {
        renderTicketProgress(activeTicketId);
      }
    });
  }


  // ==========================================
  // 2. Pricing Estimator Engine (AI Calculation)
  // ==========================================
  const calculateEstimate = (platform, scale, timeline, features, constraints) => {
    let baseMin = 0;
    let baseMax = 0;
    let incidentalCost = 0;
    
    switch (platform) {
      case 'web':
        baseMin = 5000000;
        baseMax = 6500000;
        incidentalCost += 600000;
        break;
      case 'android':
        baseMin = 7000000;
        baseMax = 9000000;
        incidentalCost += 350000;
        break;
      case 'both':
        baseMin = 11000000;
        baseMax = 14000000;
        incidentalCost += 950000;
        break;
      default:
        baseMin = 2500000;
        baseMax = 3500000;
        incidentalCost += 0;
    }

    let scaleMult = 1.0;
    if (scale === 'professional') scaleMult = 1.4;
    else if (scale === 'enterprise') scaleMult = 2.2;

    baseMin *= scaleMult;
    baseMax *= scaleMult;

    let featuresCost = 0;
    features.forEach(() => {
      featuresCost += 1800000;
    });

    let constraintsCost = 0;
    constraints.forEach(c => {
      if (c === 'security') constraintsCost += 1200000;
      else if (c === 'legacy') constraintsCost += 2000000;
      else constraintsCost += 800000;
    });

    let timelineMult = 1.0;
    if (timeline === 'fast') timelineMult = 1.30;
    else if (timeline === 'extended') timelineMult = 0.95;

    let rawTotalMin = (baseMin + featuresCost + constraintsCost) * timelineMult;
    let rawTotalMax = (baseMax + featuresCost + constraintsCost) * timelineMult;

    let qaCostMin = Math.round(rawTotalMin * 0.15);
    let qaCostMax = Math.round(rawTotalMax * 0.15);

    let totalMin = Math.round(rawTotalMin + qaCostMin + incidentalCost);
    let totalMax = Math.round(rawTotalMax + qaCostMax + incidentalCost);

    return {
      base: Math.round(baseMin),
      features: Math.round(featuresCost + constraintsCost),
      qa: Math.round(qaCostMin),
      incidental: incidentalCost,
      totalMin: totalMin,
      totalMax: totalMax
    };
  };

  const formatIDR = (num) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(num);
  };


  // ==========================================
  // 3. Database Initializer (With Mock Seeds)
  // ==========================================
  const getTicketDB = () => JSON.parse(localStorage.getItem('vrrobo_tickets')) || [];
  const saveTicketDB = (db) => localStorage.setItem('vrrobo_tickets', JSON.stringify(db));

  const initializeDatabase = () => {
    const db = getTicketDB();
    if (db.length === 0) {
      // Seed 2 mock tickets for demonstration
      const mockTicket1 = {
        id: "VRB-2026-0001",
        clientName: "Ahmad Hidayat (PT Maju Jaya)",
        clientEmail: "ahmad@majujaya.co.id",
        platform: "both",
        budgetScale: "professional",
        timeline: "normal",
        features: ["auth", "payment", "admin"],
        constraints: ["security"],
        additionalMessage: "Kami butuh aplikasi web admin panel dan aplikasi android untuk sales lapangan kami.",
        date: "30/05/2026",
        status: 3, // Tahap Pengembangan
        approvedByClient: true,
        discount: 10, // 10% discount by PM
        pricing: calculateEstimate("both", "professional", "normal", ["auth", "payment", "admin"], ["security"]),
        historyLog: [
          { date: "30/05/2026, 10:15", action: "Ticket Created by Client", details: "Initial scoping request submitted." },
          { date: "30/05/2026, 14:30", action: "Discount Applied by PM", details: "Project Manager applied 10% discount." },
          { date: "30/05/2026, 16:45", action: "Project Approved by Client", details: "Agreement signed, moved to Development." }
        ]
      };

      const mockTicket2 = {
        id: "VRB-2026-0002",
        clientName: "CV Sejahtera Sentosa",
        clientEmail: "contact@sejahtera.com",
        platform: "web",
        budgetScale: "economic",
        timeline: "extended",
        features: ["auth"],
        constraints: [],
        additionalMessage: "Pembuatan landing page profil perusahaan sederhana.",
        date: "31/05/2026",
        status: "dropped", // Dropped
        previousStatus: 1,
        dropReason: "Klien menunda anggaran hingga kuartal depan.",
        approvedByClient: false,
        discount: 0,
        pricing: calculateEstimate("web", "economic", "extended", ["auth"], []),
        historyLog: [
          { date: "31/05/2026, 08:30", action: "Ticket Created by Client", details: "Initial scoping request submitted." },
          { date: "31/05/2026, 10:10", action: "Project Cancelled (Dropped) by PM", details: "Reason: Klien menunda anggaran hingga kuartal depan." }
        ]
      };

      db.push(mockTicket1, mockTicket2);
      saveTicketDB(db);
      localStorage.setItem('vrrobo_ticket_seq', '3'); // Set seq next to 3
    }
  };

  initializeDatabase();


  // ==========================================
  // 4. Form Submit & Ticket Creation & QR
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const ticketModal = document.getElementById('ticket-modal');
  const modalCloseBtns = [
    document.getElementById('close-modal-btn'),
    document.getElementById('modal-btn-close')
  ];
  const modalBtnTrack = document.getElementById('modal-btn-track');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = document.getElementById('form-submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'en' ? 'Calculating Estimate...' : 'Menghitung Estimasi...';

      const clientName = document.getElementById('form-name-input').value;
      const clientEmail = document.getElementById('form-email-input').value;
      const appPlatform = document.getElementById('form-service-select').value;
      const projectBudget = document.getElementById('form-budget-select').value;
      const projectTimeline = document.getElementById('form-timeline-select').value;
      const additionalMessage = document.getElementById('form-message-input').value;

      const featureCheckboxes = document.querySelectorAll('input[name="features[]"]:checked');
      const features = Array.from(featureCheckboxes).map(cb => cb.value);

      const constraintCheckboxes = document.querySelectorAll('input[name="constraints[]"]:checked');
      const constraints = Array.from(constraintCheckboxes).map(cb => cb.value);

      const estimation = calculateEstimate(appPlatform, projectBudget, projectTimeline, features, constraints);

      let ticketSeq = parseInt(localStorage.getItem('vrrobo_ticket_seq')) || 1;
      const formattedSeq = String(ticketSeq).padStart(4, '0');
      const ticketId = `VRB-2026-${formattedSeq}`;
      
      localStorage.setItem('vrrobo_ticket_seq', (ticketSeq + 1).toString());

      const nowStr = new Date().toLocaleString('id-ID', { hour12: false }).substring(0, 17);

      const newTicket = {
        id: ticketId,
        clientName: clientName,
        clientEmail: clientEmail,
        platform: appPlatform,
        budgetScale: projectBudget,
        timeline: projectTimeline,
        features: features,
        constraints: constraints,
        additionalMessage: additionalMessage,
        date: nowStr.split(',')[0],
        status: 1, // Start at Inisiasi Proyek
        approvedByClient: false,
        discount: 0,
        pricing: estimation,
        historyLog: [
          { date: nowStr, action: "Ticket Created by Client", details: "Scoping request submitted with custom choice parameters." }
        ]
      };

      const db = getTicketDB();
      db.push(newTicket);
      saveTicketDB(db);

      // Populate Modal
      document.getElementById('modal-ticket-id').textContent = ticketId;
      document.getElementById('modal-client-name').textContent = clientName;
      
      const pTranslations = {
        web: { id: "Web-Based App", en: "Web-Based App" },
        android: { id: "Android App Mobile", en: "Android Mobile App" },
        both: { id: "Web & Android App", en: "Web & Android App" },
        consultation: { id: "Konsultasi Sistem", en: "System Consultation" }
      };
      const tTranslations = {
        fast: { id: "Cepat (< 1 Bulan)", en: "Fast (< 1 Month)" },
        normal: { id: "Standar (1 - 3 Bulan)", en: "Standard (1 - 3 Months)" },
        extended: { id: "Bertahap (> 3 Bulan)", en: "Extended (> 3 Months)" }
      };

      document.getElementById('modal-platform').textContent = pTranslations[appPlatform] ? pTranslations[appPlatform][currentLang] : appPlatform;
      document.getElementById('modal-timeline').textContent = tTranslations[projectTimeline] ? tTranslations[projectTimeline][currentLang] : projectTimeline;

      document.getElementById('breakdown-val-base').textContent = formatIDR(estimation.base);
      document.getElementById('breakdown-val-features').textContent = formatIDR(estimation.features);
      document.getElementById('breakdown-val-qa').textContent = formatIDR(estimation.qa);
      document.getElementById('breakdown-val-incidental').textContent = formatIDR(estimation.incidental);
      document.getElementById('breakdown-val-total').textContent = `${formatIDR(estimation.totalMin)} - ${formatIDR(estimation.totalMax)}`;

      // QR Code
      const trackingUrl = `${window.location.origin}${window.location.pathname}?ticket=${ticketId}`;
      new QRious({
        element: document.getElementById('modal-qr-canvas'),
        size: 150,
        value: trackingUrl,
        background: '#ffffff',
        foreground: '#08090d',
        level: 'H'
      });

      ticketModal.classList.add('active');

      // Sync PM board
      if (document.getElementById('admin-board-view').style.display !== 'none') {
        populateAdminProjectTable();
      }

      // Netlify Forms Submission
      const netlifyFormData = new FormData(contactForm);
      netlifyFormData.append('generated_ticket_id', ticketId);
      netlifyFormData.append('total_estimated_pricing', `${formatIDR(estimation.totalMin)} - ${formatIDR(estimation.totalMax)}`);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData).toString()
      }).catch(err => console.warn(err));

      submitBtn.disabled = false;
      submitBtn.textContent = currentLang === 'en' ? 'Send Project Inquiry' : 'Kirim Pesan Konsultasi';
      contactForm.reset();
    });
  }

  modalCloseBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => ticketModal.classList.remove('active'));
  });

  if (modalBtnTrack) {
    modalBtnTrack.addEventListener('click', () => {
      const ticketId = document.getElementById('modal-ticket-id').textContent;
      ticketModal.classList.remove('active');
      const trackerInput = document.getElementById('tracker-input');
      if (trackerInput) {
        trackerInput.value = ticketId;
        renderTicketProgress(ticketId);
        document.getElementById('tracker-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }


  // ==========================================
  // 5. Client Progress Tracker Logic
  // ==========================================
  const searchInput = document.getElementById('tracker-input');
  const searchBtn = document.getElementById('tracker-search-btn');
  const resultCard = document.getElementById('tracker-result-card');
  const errorMsg = document.getElementById('tracker-error-msg');

  const addActivityLog = (ticket, action, details) => {
    const now = new Date().toLocaleString('id-ID', { hour12: false }).substring(0, 17);
    ticket.historyLog.push({ date: now, action: action, details: details });
  };

  const renderTicketProgress = (ticketId) => {
    const db = getTicketDB();
    const ticket = db.find(t => t.id === ticketId);

    if (!ticket) {
      resultCard.style.display = 'none';
      errorMsg.style.display = 'block';
      return;
    }

    errorMsg.style.display = 'none';
    resultCard.style.display = 'block';

    // Populate Details
    document.getElementById('display-ticket-id').textContent = ticket.id;
    document.getElementById('display-client-name').textContent = ticket.clientName;
    
    // Status badges & line fills
    const statusTextMap = {
      1: { id: "Menunggu Review", en: "Awaiting Review" },
      2: { id: "Persetujuan Kontrak", en: "Contract Approval" },
      3: { id: "Tahap Pengembangan", en: "In Development" },
      4: { id: "Tahap Pengujian QA", en: "QA Testing" },
      5: { id: "Selesai & Rilis", en: "Completed & Launched" },
      "dropped": { id: "Dibatalkan (Dropped)", en: "Cancelled (Dropped)" }
    };
    
    const displayStatus = document.getElementById('display-status-badge');
    displayStatus.textContent = statusTextMap[ticket.status][currentLang];
    
    const stepsWrapper = document.getElementById('progress-steps-wrapper');
    const droppedNotice = document.getElementById('tracker-dropped-notice');

    if (ticket.status === 'dropped') {
      displayStatus.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
      displayStatus.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      displayStatus.style.color = '#ef4444';
      
      droppedNotice.style.display = 'flex';
      document.getElementById('display-drop-reason').textContent = ticket.dropReason;
      stepsWrapper.classList.add('dropped');
    } else {
      displayStatus.style.backgroundColor = 'rgba(0, 242, 254, 0.08)';
      displayStatus.style.borderColor = 'rgba(0, 242, 254, 0.2)';
      displayStatus.style.color = 'var(--color-accent)';
      
      droppedNotice.style.display = 'none';
      stepsWrapper.classList.remove('dropped');
    }

    // Platforms map
    const pMap = {
      web: { id: "Web-Based Application", en: "Web-Based Application" },
      android: { id: "Android Mobile Application", en: "Android Mobile Application" },
      both: { id: "Keduanya (Web & Android)", en: "Both (Web & Android)" },
      consultation: { id: "Konsultasi Sistem / Lainnya", en: "System Consultation / Other" }
    };
    document.getElementById('display-platform').textContent = pMap[ticket.platform] ? pMap[ticket.platform][currentLang] : ticket.platform;

    // Pricing calculation with discount
    const originalMin = ticket.pricing.totalMin;
    const originalMax = ticket.pricing.totalMax;
    const originalCostText = `${formatIDR(originalMin)} - ${formatIDR(originalMax)}`;
    const displayCost = document.getElementById('display-cost');
    const originalCostStrike = document.getElementById('display-original-cost');

    if (ticket.discount > 0) {
      const discMult = (100 - ticket.discount) / 100;
      const discountedMin = Math.round(originalMin * discMult);
      const discountedMax = Math.round(originalMax * discMult);
      
      originalCostStrike.style.display = 'inline';
      originalCostStrike.textContent = originalCostText;
      displayCost.textContent = `${formatIDR(discountedMin)} - ${formatIDR(discountedMax)} (${ticket.discount}% OFF)`;
    } else {
      originalCostStrike.style.display = 'none';
      displayCost.textContent = originalCostText;
    }
    
    // Timeline maps
    const timeMap = {
      fast: { id: "3 - 4 Minggu", en: "3 - 4 Weeks" },
      normal: { id: "6 - 8 Minggu", en: "6 - 8 Weeks" },
      extended: { id: "10 - 12 Minggu", en: "10 - 12 Weeks" }
    };
    document.getElementById('display-time').textContent = timeMap[ticket.timeline] ? timeMap[ticket.timeline][currentLang] : ticket.timeline;

    // Set line progress fill (does not animate if dropped)
    const progressFill = document.getElementById('progress-line-fill');
    if (ticket.status === 'dropped') {
      progressFill.style.width = '0%';
    } else {
      const percentages = { 1: 0, 2: 25, 3: 50, 4: 75, 5: 100 };
      progressFill.style.width = `${percentages[ticket.status]}%`;
    }

    // Step items highlights
    for (let step = 1; step <= 5; step++) {
      const stepEl = document.getElementById(`step-${step}`);
      if (stepEl) {
        stepEl.classList.remove('active', 'completed');
        if (ticket.status !== 'dropped') {
          if (step < ticket.status) {
            stepEl.classList.add('completed');
          } else if (step === ticket.status) {
            stepEl.classList.add('active');
          }
        }
      }
    }

    // Agreement Drawer
    const agreeBox = document.getElementById('tracker-agreement-box');
    if (ticket.status === 'dropped') {
      agreeBox.style.display = 'none';
    } else {
      agreeBox.style.display = 'block';
      document.getElementById('agree-platform').textContent = pMap[ticket.platform] ? pMap[ticket.platform][currentLang] : ticket.platform;
      
      if (ticket.discount > 0) {
        const discMult = (100 - ticket.discount) / 100;
        document.getElementById('agree-cost').textContent = `${formatIDR(originalMin * discMult)} - ${formatIDR(originalMax * discMult)} (${ticket.discount}% OFF)`;
      } else {
        document.getElementById('agree-cost').textContent = originalCostText;
      }
      
      document.getElementById('agree-time').textContent = timeMap[ticket.timeline] ? timeMap[ticket.timeline][currentLang] : ticket.timeline;

      const sigLine = document.getElementById('client-signature-line');
      const agreeBtnArea = document.getElementById('agreement-actions-area');

      if (ticket.approvedByClient) {
        sigLine.className = "sig-line approved";
        sigLine.textContent = `${ticket.clientName.toUpperCase()} (${translations[currentLang]["sig-approved"]} ${ticket.date})`;
        agreeBtnArea.style.display = "none";
      } else {
        sigLine.className = "sig-line";
        sigLine.textContent = translations[currentLang]["sig-pending"];
        agreeBtnArea.style.display = "block";
      }

      // Agreement Approve button trigger
      const approveBtn = document.getElementById('btn-approve-project');
      if (approveBtn) {
        const newApproveBtn = approveBtn.cloneNode(true);
        approveBtn.parentNode.replaceChild(newApproveBtn, approveBtn);

        newApproveBtn.addEventListener('click', () => {
          ticket.approvedByClient = true;
          ticket.status = 3; // Advance to development
          
          addActivityLog(ticket, "Project Approved by Client", "Agreement signed. Standard KPIs verified. Moved to Development Stage.");
          
          const updatedDb = getTicketDB();
          const tIndex = updatedDb.findIndex(t => t.id === ticket.id);
          if (tIndex !== -1) {
            updatedDb[tIndex] = ticket;
            saveTicketDB(updatedDb);
          }

          renderTicketProgress(ticket.id);
          
          // Re-populate admin table if open
          if (document.getElementById('admin-board-view').style.display !== 'none') {
            populateAdminProjectTable();
            renderAdminTicketDetail(ticket.id);
          }
        });
      }

      // Sharing builders
      const trackingLink = `${window.location.origin}${window.location.pathname}?ticket=${ticket.id}`;
      const messages = {
        id: `Halo, berikut draf Persetujuan Proyek & KPI VRROBO2025 dengan ID Tiket ${ticket.id} atas nama ${ticket.clientName}. Silakan tinjau dan setujui kontrak di link berikut: ${trackingLink}`,
        en: `Hello, here is the VRROBO2025 Project Agreement & KPI draft with Ticket ID ${ticket.id} for ${ticket.clientName}. Please review and approve the agreement at: ${trackingLink}`
      };
      
      const textMsg = encodeURIComponent(messages[currentLang]);

      const waBtn = document.getElementById('share-wa');
      const tgBtn = document.getElementById('share-tg');
      const emailBtn = document.getElementById('share-email');

      if (waBtn) waBtn.href = `https://api.whatsapp.com/send?text=${textMsg}`;
      if (tgBtn) tgBtn.href = `https://t.me/share/url?url=${encodeURIComponent(trackingLink)}&text=${encodeURIComponent(messages[currentLang])}`;
      if (emailBtn) {
        const emailSubject = encodeURIComponent(translations[currentLang]["agreement-title"] + " - " + ticket.id);
        emailBtn.href = `mailto:?subject=${emailSubject}&body=${textMsg}`;
      }
    }

    // Render Client History Logs
    const clientLogsList = document.getElementById('client-logs-list');
    if (clientLogsList) {
      clientLogsList.innerHTML = '';
      ticket.historyLog.slice().reverse().forEach(log => {
        const logItem = document.createElement('div');
        logItem.className = 'timeline-log-item';
        if (log.action.includes('Dropped') || log.action.includes('Cancelled')) {
          logItem.classList.add('log-dropped');
        } else if (log.action.includes('Approved') || log.action.includes('Revive')) {
          logItem.classList.add('log-revive');
        }
        
        logItem.innerHTML = `
          <span class="log-date">${log.date}</span>
          <span class="log-msg"><strong>${log.action}:</strong> ${log.details}</span>
        `;
        clientLogsList.appendChild(logItem);
      });
    }
  };

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const searchId = searchInput.value.trim().toUpperCase();
      renderTicketProgress(searchId);
    });

    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const searchId = searchInput.value.trim().toUpperCase();
        renderTicketProgress(searchId);
      }
    });
  }


  // ==========================================
  // 6. PM / Developer Dashboard Panel Controls
  // ==========================================
  const adminLoginForm = document.getElementById('admin-login-form');
  const adminLoginBox = document.getElementById('admin-login-box');
  const adminBoardView = document.getElementById('admin-board-view');
  const adminLoginError = document.getElementById('admin-login-error');
  const btnAdminLogout = document.getElementById('btn-admin-logout');

  // Login Authentication
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const passcode = document.getElementById('admin-passcode').value.trim();

      if (passcode === '312812Vho#7007') {
        // Successful login
        adminLoginBox.style.display = 'none';
        adminBoardView.style.display = 'block';
        adminLoginError.style.display = 'none';
        adminLoginForm.reset();
        
        // Populates Admin tables
        populateAdminProjectTable();
      } else {
        // Failed
        adminLoginError.style.display = 'block';
      }
    });
  }

  // Logout
  if (btnAdminLogout) {
    btnAdminLogout.addEventListener('click', () => {
      adminBoardView.style.display = 'none';
      adminLoginBox.style.display = 'block';
      document.getElementById('admin-details-card').style.display = 'none';
      document.getElementById('admin-placeholder').style.display = 'flex';
    });
  }

  // Populates project ticket list in PM Dashboard
  const populateAdminProjectTable = () => {
    const tbody = document.getElementById('admin-tickets-tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const db = getTicketDB();

    if (db.length === 0) {
      tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:var(--text-muted);">No tickets submitted.</td></tr>`;
      return;
    }

    db.slice().reverse().forEach(ticket => {
      const row = document.createElement('tr');
      row.setAttribute('data-id', ticket.id);
      if (ticket.status === 'dropped') {
        row.classList.add('dropped-row');
      }

      // Check current active PM selection
      const activeTicketId = document.getElementById('admin-selected-ticket-id')?.textContent;
      if (activeTicketId === ticket.id) {
        row.classList.add('selected');
      }

      // Draw status dot
      let statusDotClass = `s-${ticket.status}`;
      
      row.innerHTML = `
        <td><strong>${ticket.id}</strong></td>
        <td>${ticket.clientName.split(' ')[0]}</td>
        <td>
          <span class="status-indicator-dot ${statusDotClass}"></span>
          ${ticket.status === 'dropped' ? 'Dropped' : 'Step ' + ticket.status}
        </td>
      `;

      row.addEventListener('click', () => {
        // Set highlights
        const siblings = tbody.querySelectorAll('tr');
        siblings.forEach(s => s.classList.remove('selected'));
        row.classList.add('selected');

        renderAdminTicketDetail(ticket.id);
      });

      tbody.appendChild(row);
    });
  };

  // Render details control pane on selected PM ticket
  const renderAdminTicketDetail = (ticketId) => {
    const db = getTicketDB();
    const ticket = db.find(t => t.id === ticketId);

    if (!ticket) return;

    // Show Detail pane, hide placeholder
    document.getElementById('admin-placeholder').style.display = 'none';
    document.getElementById('admin-details-card').style.display = 'block';

    // Populate Details
    document.getElementById('admin-selected-ticket-id').textContent = ticket.id;
    document.getElementById('admin-selected-client-name').textContent = `Klien: ${ticket.clientName} (${ticket.clientEmail})`;
    
    const statusTextMap = {
      1: "Step 1: Initiate Scoping",
      2: "Step 2: Persetujuan KPI",
      3: "Step 3: Development",
      4: "Step 4: QA Testing",
      5: "Step 5: Released/Launch",
      "dropped": "PROJECT DROPPED"
    };
    
    const statusBadge = document.getElementById('admin-selected-status-badge');
    statusBadge.textContent = statusTextMap[ticket.status];
    if (ticket.status === 'dropped') {
      statusBadge.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
      statusBadge.style.color = '#ef4444';
      statusBadge.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    } else {
      statusBadge.style.backgroundColor = 'rgba(0, 242, 254, 0.08)';
      statusBadge.style.color = 'var(--color-accent)';
      statusBadge.style.borderColor = 'rgba(0, 242, 254, 0.2)';
    }

    // Platforms map
    const pMap = {
      web: "Web-Based App",
      android: "Android Mobile App",
      both: "Web & Android App Bundle",
      consultation: "System Consultation / Other"
    };
    document.getElementById('admin-detail-platform').textContent = pMap[ticket.platform] || ticket.platform;
    
    const timeMap = {
      fast: "3 - 4 Minggu (Cepat)",
      normal: "6 - 8 Minggu (Normal)",
      extended: "10 - 12 Minggu (Bertahap)"
    };
    document.getElementById('admin-detail-time').textContent = timeMap[ticket.timeline] || ticket.timeline;
    
    // Feature arrays list
    const featuresStr = ticket.features.concat(ticket.constraints).join(', ').toUpperCase();
    document.getElementById('admin-detail-features').textContent = featuresStr || 'NONE';

    // 1. Discount Slider
    const discSlider = document.getElementById('admin-discount-range');
    const discDisplay = document.getElementById('admin-discount-value');
    
    discSlider.value = ticket.discount;
    discDisplay.textContent = `${ticket.discount}%`;

    // Reset old listeners for discount slider
    const newDiscSlider = discSlider.cloneNode(true);
    discSlider.parentNode.replaceChild(newDiscSlider, discSlider);

    newDiscSlider.addEventListener('input', (e) => {
      const discountVal = parseInt(e.target.value);
      discDisplay.textContent = `${discountVal}%`;
    });

    newDiscSlider.addEventListener('change', (e) => {
      const discountVal = parseInt(e.target.value);
      
      if (ticket.discount !== discountVal) {
        ticket.discount = discountVal;
        
        addActivityLog(ticket, "Pricing Modified by PM", `Discount of ${discountVal}% applied to project budget estimate.`);
        
        // Save database updates
        const updatedDb = getTicketDB();
        const tIndex = updatedDb.findIndex(t => t.id === ticket.id);
        if (tIndex !== -1) {
          updatedDb[tIndex] = ticket;
          saveTicketDB(updatedDb);
        }

        // Live refresh client tracker if active on screen
        const activeClientTicketId = document.getElementById('display-ticket-id')?.textContent;
        if (activeClientTicketId === ticket.id) {
          renderTicketProgress(ticket.id);
        }

        renderAdminTicketDetail(ticket.id);
      }
    });

    // 2. Status Buttons highlights
    const statusBtns = document.querySelectorAll('.btn-status-set');
    statusBtns.forEach(btn => {
      const btnStatus = parseInt(btn.getAttribute('data-status'));
      btn.classList.remove('active');
      btn.disabled = ticket.status === 'dropped'; // disabled if project is dropped
      
      if (ticket.status === btnStatus) {
        btn.classList.add('active');
      }

      // Reset listeners
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      newBtn.addEventListener('click', () => {
        const targetStatus = parseInt(newBtn.getAttribute('data-status'));
        
        if (ticket.status !== targetStatus) {
          const statusNames = {
            1: "Inisiasi Proyek (Initiate)",
            2: "Persetujuan Kontrak (Agreement)",
            3: "Tahap Pengembangan (Development)",
            4: "Pengujian QA (QA Testing)",
            5: "Serah Terima & Rilis (Launch)"
          };
          
          ticket.status = targetStatus;
          
          addActivityLog(ticket, "Status Advanced by PM", `Project status set to: ${statusNames[targetStatus]}`);
          
          const updatedDb = getTicketDB();
          const tIndex = updatedDb.findIndex(t => t.id === ticket.id);
          if (tIndex !== -1) {
            updatedDb[tIndex] = ticket;
            saveTicketDB(updatedDb);
          }

          // Live refresh client tracker if active on screen
          const activeClientTicketId = document.getElementById('display-ticket-id')?.textContent;
          if (activeClientTicketId === ticket.id) {
            renderTicketProgress(ticket.id);
          }

          populateAdminProjectTable();
          renderAdminTicketDetail(ticket.id);
        }
      });
    });

    // 3. Drop or Revive Project box toggling
    const dropBox = document.getElementById('admin-drop-box');
    const reviveBox = document.getElementById('admin-revive-box');
    const dropReasonInput = document.getElementById('admin-drop-reason');
    const dropBtn = document.getElementById('btn-admin-drop-project');
    const reviveBtn = document.getElementById('btn-admin-revive-project');

    if (ticket.status === 'dropped') {
      dropBox.style.display = 'none';
      reviveBox.style.display = 'block';
    } else {
      dropBox.style.display = 'block';
      reviveBox.style.display = 'none';
      dropReasonInput.value = '';
    }

    // Drop handler
    if (dropBtn) {
      const newDropBtn = dropBtn.cloneNode(true);
      dropBtn.parentNode.replaceChild(newDropBtn, dropBtn);

      newDropBtn.addEventListener('click', () => {
        const reason = dropReasonInput.value.trim();
        if (!reason) {
          alert(currentLang === 'en' ? 'Please fill in the cancellation reason.' : 'Mohon isi alasan pembatalan terlebih dahulu.');
          return;
        }

        ticket.previousStatus = ticket.status;
        ticket.status = 'dropped';
        ticket.dropReason = reason;
        
        addActivityLog(ticket, "Project Cancelled (Dropped) by PM", `Reason: ${reason}`);

        const updatedDb = getTicketDB();
        const tIndex = updatedDb.findIndex(t => t.id === ticket.id);
        if (tIndex !== -1) {
          updatedDb[tIndex] = ticket;
          saveTicketDB(updatedDb);
        }

        // Live refresh client tracker if active on screen
        const activeClientTicketId = document.getElementById('display-ticket-id')?.textContent;
        if (activeClientTicketId === ticket.id) {
          renderTicketProgress(ticket.id);
        }

        populateAdminProjectTable();
        renderAdminTicketDetail(ticket.id);
      });
    }

    // Revive handler
    if (reviveBtn) {
      const newReviveBtn = reviveBtn.cloneNode(true);
      reviveBtn.parentNode.replaceChild(newReviveBtn, reviveBtn);

      newReviveBtn.addEventListener('click', () => {
        // Restore previous status
        ticket.status = ticket.previousStatus || 1;
        delete ticket.dropReason;

        addActivityLog(ticket, "Project Revived by PM", "Project restored to its previous working state.");

        const updatedDb = getTicketDB();
        const tIndex = updatedDb.findIndex(t => t.id === ticket.id);
        if (tIndex !== -1) {
          updatedDb[tIndex] = ticket;
          saveTicketDB(updatedDb);
        }

        // Live refresh client tracker if active on screen
        const activeClientTicketId = document.getElementById('display-ticket-id')?.textContent;
        if (activeClientTicketId === ticket.id) {
          renderTicketProgress(ticket.id);
        }

        populateAdminProjectTable();
        renderAdminTicketDetail(ticket.id);
      });
    }

    // Render PM History Logs
    const adminLogsList = document.getElementById('admin-selected-logs-list');
    if (adminLogsList) {
      adminLogsList.innerHTML = '';
      ticket.historyLog.slice().reverse().forEach(log => {
        const logItem = document.createElement('div');
        logItem.className = 'timeline-log-item';
        if (log.action.includes('Dropped') || log.action.includes('Cancelled')) {
          logItem.classList.add('log-dropped');
        } else if (log.action.includes('Approved') || log.action.includes('Revive')) {
          logItem.classList.add('log-revive');
        }
        
        logItem.innerHTML = `
          <span class="log-date">${log.date}</span>
          <span class="log-msg"><strong>${log.action}:</strong> ${log.details}</span>
        `;
        adminLogsList.appendChild(logItem);
      });
    }
  };


  // ==========================================
  // 7. Query Parameter Url Tracker Loader
  // ==========================================
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('ticket')) {
    const ticketId = urlParams.get('ticket').trim().toUpperCase();
    if (searchInput) {
      searchInput.value = ticketId;
      renderTicketProgress(ticketId);
      
      setTimeout(() => {
        const trackerSection = document.getElementById('tracker-section');
        trackerSection?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }


  // ==========================================
  // 8. Responsive UI Menus & Scroll Effects
  // ==========================================
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  const header = document.getElementById('header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 10) * 8.5;
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  const sections = document.querySelectorAll('section');
  const highlightNavLink = () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.add('active');
      } else {
        document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.remove('active');
      }
    });

    if (scrollY < 200) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.getElementById('nav-link-home')?.classList.add('active');
    }
  };
  window.addEventListener('scroll', highlightNavLink);
  highlightNavLink();

});
