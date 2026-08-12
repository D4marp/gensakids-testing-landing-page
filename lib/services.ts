export type Service = {
  slug: string;
  title: string;
  icon: "speech" | "hands" | "run" | "puzzle" | "book" | "heart" | "growth" | "clipboard";
  short: string;
  detail: string[];
  forWho: string;
  signs: string[];
  goal: string;
  process: string[];
  duration: string;
  professionals: string;
  whatToBring: string[];
  extraFaq?: { q: string; a: string }[];
};

const WHAT_TO_BRING_DEFAULT = [
  "Buku KIA / catatan riwayat kesehatan anak (jika ada).",
  "Hasil pemeriksaan, rujukan dokter, atau laporan sekolah sebelumnya (jika ada).",
  "Mainan atau benda favorit anak agar anak lebih nyaman selama sesi.",
  "Camilan atau minum anak bila sewaktu-waktu diperlukan.",
];

export const SERVICES: Service[] = [
  {
    slug: "asesmen-tumbuh-kembang",
    title: "Konsultasi & Asesmen Tumbuh Kembang",
    icon: "clipboard",
    short:
      "Langkah awal setiap anak — Psikolog Anak memetakan kondisi anak sebelum menyusun program terapi.",
    detail: [
      "Konsultasi awal bersama Psikolog Anak.",
      "Asesmen menyeluruh untuk memetakan kemampuan dan hambatan anak.",
      "Penyusunan rencana terapi yang disesuaikan dengan kebutuhan anak.",
    ],
    forWho:
      "Anak usia 0–16 tahun yang orang tuanya ingin memastikan tahapan tumbuh kembangnya, baik untuk perkembangan umum maupun yang diduga membutuhkan penanganan khusus.",
    signs: [
      "Orang tua merasa perkembangan anak berbeda dari teman sebayanya.",
      "Anak belum mencapai milestone (bicara, motorik, sosial) sesuai usianya.",
      "Ingin mendapat gambaran menyeluruh sebelum menentukan jenis terapi yang tepat.",
    ],
    goal:
      "Memetakan kondisi dan kebutuhan anak secara objektif, sehingga program terapi yang disusun benar-benar sesuai — bukan pendekatan satu ukuran untuk semua anak.",
    process: [
      "Wawancara awal bersama orang tua mengenai riwayat dan kekhawatiran terhadap anak.",
      "Observasi dan asesmen langsung terhadap kemampuan anak oleh Psikolog Anak.",
      "Diskusi hasil asesmen dan rekomendasi program bersama orang tua.",
    ],
    duration: "60 menit per sesi (intervensi maupun edukasi orang tua).",
    professionals: "Psikolog Anak.",
    whatToBring: WHAT_TO_BRING_DEFAULT,
    extraFaq: [
      {
        q: "Apa itu asesmen tumbuh kembang?",
        a: "Asesmen tumbuh kembang adalah proses evaluasi menyeluruh terhadap kemampuan anak di berbagai aspek — motorik, bahasa, kognitif, sosial-emosional, dan kemandirian — untuk mengetahui apakah perkembangan anak sesuai tahapan usianya dan menentukan jenis dukungan yang paling tepat jika dibutuhkan.",
      },
    ],
  },
  {
    slug: "terapi-wicara",
    title: "Terapi Wicara",
    icon: "speech",
    short:
      "Untuk anak dengan keterlambatan bicara, gangguan bahasa, artikulasi, atau kelancaran berbicara.",
    detail: [
      "Menangani keterlambatan perkembangan bicara dan bahasa.",
      "Melatih artikulasi, kelancaran, dan irama bicara.",
      "Mendukung anak agar mampu berinteraksi secara wajar dengan lingkungannya.",
    ],
    forWho:
      "Anak dengan keterlambatan bicara, gangguan bahasa reseptif/ekspresif, gangguan artikulasi, kelancaran (gagap), maupun kesulitan komunikasi sosial.",
    signs: [
      "Belum mengucapkan kata bermakna di usia yang seharusnya sudah bisa.",
      "Ucapan sulit dipahami dibanding anak seusianya.",
      "Kesulitan memahami atau mengikuti instruksi sederhana.",
      "Gagap atau tersendat-sendat saat berbicara.",
    ],
    goal:
      "Mengembangkan kemampuan bicara, bahasa, dan komunikasi anak agar dapat berinteraksi secara wajar sesuai dengan tahapan usianya.",
    process: [
      "Pemanasan dan pendekatan agar anak nyaman dengan terapis.",
      "Latihan artikulasi, kosakata, atau kelancaran bicara melalui permainan terarah.",
      "Pencatatan perkembangan dan umpan balik singkat untuk orang tua di akhir sesi.",
    ],
    duration: "60 menit per sesi (intervensi maupun edukasi orang tua).",
    professionals: "Terapis Wicara bersertifikat.",
    whatToBring: WHAT_TO_BRING_DEFAULT,
  },
  {
    slug: "terapi-okupasi",
    title: "Terapi Okupasi",
    icon: "hands",
    short:
      "Melatih kemandirian dan kemampuan motorik halus anak seperti memegang pensil, menulis, dan menggambar.",
    detail: [
      "Melatih activity daily living skill (ADL) / kemandirian sehari-hari.",
      "Mengembangkan motorik halus prasekolah.",
      "Mendukung kesiapan anak mengikuti aktivitas belajar.",
    ],
    forWho:
      "Anak dengan hambatan motorik halus, kemandirian sehari-hari (ADL), integrasi sensorik, atau kesiapan mengikuti aktivitas belajar di sekolah.",
    signs: [
      "Kesulitan memegang pensil, menggunting, atau menggambar sesuai usianya.",
      "Belum mandiri makan, memakai baju, atau aktivitas sehari-hari sesuai usianya.",
      "Tampak sangat sensitif atau kurang responsif terhadap sentuhan/tekstur tertentu.",
    ],
    goal:
      "Melatih motorik halus, kemandirian aktivitas sehari-hari (ADL), dan integrasi sensorik agar anak lebih siap mengikuti aktivitas belajar dan bermain.",
    process: [
      "Aktivitas pemanasan sensorik sesuai kondisi anak.",
      "Latihan motorik halus dan ADL melalui permainan dan alat terapi.",
      "Evaluasi singkat serta saran latihan lanjutan di rumah untuk orang tua.",
    ],
    duration: "60 menit per sesi (intervensi maupun edukasi orang tua).",
    professionals: "Terapis Okupasi bersertifikat.",
    whatToBring: WHAT_TO_BRING_DEFAULT,
  },
  {
    slug: "fisioterapi",
    title: "Fisioterapi",
    icon: "run",
    short:
      "Melatih dan memperbaiki fungsi motorik kasar anak agar dapat beraktivitas sesuai usianya.",
    detail: [
      "Menangani gangguan perkembangan motorik kasar pada bayi dan anak.",
      "Melatih kekuatan otot dan koordinasi gerak.",
      "Mendukung perkembangan fisik sesuai tahapan usia anak.",
    ],
    forWho:
      "Bayi dan anak dengan keterlambatan motorik kasar, gangguan tonus otot, koordinasi gerak, atau kelainan postur tubuh.",
    signs: [
      "Terlambat tengkurap, duduk, merangkak, atau berjalan dibanding usianya.",
      "Otot terasa lemah, kaku, atau tidak seimbang antara sisi kiri dan kanan.",
      "Postur tubuh atau pola jalan tampak tidak biasa.",
    ],
    goal:
      "Melatih kekuatan otot, keseimbangan, dan koordinasi gerak agar anak dapat beraktivitas dan bermain sesuai tahapan usianya.",
    process: [
      "Pemeriksaan tonus otot, keseimbangan, dan pola gerak anak.",
      "Latihan fisik terarah dengan pendekatan bermain agar anak tetap nyaman.",
      "Evaluasi progres dan panduan latihan pendukung di rumah.",
    ],
    duration: "60 menit per sesi (intervensi maupun edukasi orang tua).",
    professionals: "Fisioterapis anak.",
    whatToBring: WHAT_TO_BRING_DEFAULT,
  },
  {
    slug: "terapi-perilaku",
    title: "Terapi Perilaku",
    icon: "puzzle",
    short: "Membantu anak berperilaku lebih adaptif terhadap lingkungan sekitarnya.",
    detail: [
      "Meningkatkan kemampuan anak untuk berperilaku adaptif.",
      "Mengurangi perilaku yang tidak sesuai di rumah maupun lingkungan sosial.",
      "Program disusun secara terukur berdasarkan hasil asesmen.",
    ],
    forWho:
      "Anak dengan perilaku yang menghambat aktivitas sehari-hari, interaksi sosial, atau proses belajarnya.",
    signs: [
      "Tantrum berlebihan dan sulit ditenangkan dibanding anak seusianya.",
      "Kesulitan mengikuti aturan atau instruksi sederhana.",
      "Perilaku repetitif atau impulsif yang mengganggu aktivitas sehari-hari.",
    ],
    goal:
      "Meningkatkan perilaku adaptif anak dan mengurangi perilaku yang tidak sesuai, melalui program yang terukur berdasarkan hasil asesmen.",
    process: [
      "Identifikasi pemicu dan pola perilaku anak bersama orang tua.",
      "Latihan perilaku terarah menggunakan pendekatan yang terukur dan konsisten.",
      "Pemantauan progres serta strategi pendampingan di rumah untuk orang tua.",
    ],
    duration: "60 menit per sesi (intervensi maupun edukasi orang tua).",
    professionals: "Terapis Perilaku.",
    whatToBring: WHAT_TO_BRING_DEFAULT,
  },
  {
    slug: "ortopedagogik",
    title: "Ortopedagogik (Pendidikan Khusus)",
    icon: "book",
    short: "Pendampingan belajar bagi anak yang kesulitan mengikuti pendidikan pada umumnya.",
    detail: [
      "Mendampingi anak dengan kesulitan belajar di sekolah.",
      "Mengembangkan potensi akademik sesuai bakat dan kemampuan anak.",
      "Menumbuhkan sikap belajar yang positif.",
    ],
    forWho:
      "Anak usia sekolah yang kesulitan mengikuti kurikulum pendidikan umum dan membutuhkan pendampingan belajar yang disesuaikan.",
    signs: [
      "Kesulitan mengikuti pelajaran dibanding teman sekelas.",
      "Membutuhkan pendampingan belajar khusus di luar jam sekolah.",
      "Mendapat rekomendasi evaluasi tambahan dari pihak sekolah.",
    ],
    goal:
      "Mendampingi anak mengembangkan potensi akademik sesuai bakat dan kemampuannya, serta menumbuhkan sikap belajar yang positif.",
    process: [
      "Identifikasi gaya belajar dan hambatan akademik anak.",
      "Pendampingan belajar dengan metode dan materi yang disesuaikan.",
      "Evaluasi berkala dan koordinasi dengan orang tua maupun pihak sekolah bila diperlukan.",
    ],
    duration: "60 menit per sesi (intervensi maupun edukasi orang tua).",
    professionals: "Guru Ortopedagogik / Pendidikan Khusus.",
    whatToBring: WHAT_TO_BRING_DEFAULT,
  },
  {
    slug: "psikologi-anak",
    title: "Psikologi Anak",
    icon: "heart",
    short:
      "Konsultasi psikologi, tes IQ, dan tes kesiapan sekolah untuk mendukung tumbuh kembang anak.",
    detail: [
      "Konsultasi psikologi anak dan remaja.",
      "Tes IQ dan tes minat bakat.",
      "Tes kesiapan sekolah sebelum anak memasuki jenjang pendidikan formal.",
    ],
    forWho:
      "Anak dan remaja yang membutuhkan pendampingan psikologis, maupun orang tua yang ingin melakukan tes IQ, minat bakat, atau kesiapan sekolah.",
    signs: [
      "Kecemasan berlebih atau kesulitan mengelola emosi untuk usianya.",
      "Sulit beradaptasi di lingkungan atau situasi baru.",
      "Orang tua ingin memahami potensi, minat bakat, atau kesiapan sekolah anak secara objektif.",
    ],
    goal:
      "Membantu anak dan orang tua memahami kondisi psikologis, potensi, serta kesiapan anak melalui konsultasi dan alat tes yang sesuai standar psikologi anak.",
    process: [
      "Wawancara awal bersama orang tua mengenai kekhawatiran atau tujuan konsultasi.",
      "Sesi konsultasi atau pengerjaan tes bersama psikolog anak.",
      "Pembahasan hasil dan rekomendasi tindak lanjut bersama orang tua.",
    ],
    duration: "60 menit per sesi (intervensi maupun edukasi orang tua).",
    professionals: "Psikolog Anak.",
    whatToBring: WHAT_TO_BRING_DEFAULT,
    extraFaq: [
      {
        q: "Apa itu tes psikologi bagi anak?",
        a: "Tes psikologi anak adalah rangkaian alat ukur terstandar (misalnya tes IQ, minat bakat, atau kesiapan sekolah) yang digunakan psikolog untuk memahami kemampuan kognitif, emosional, dan kesiapan anak — sebagai dasar memberikan rekomendasi yang sesuai dengan kebutuhan anak.",
      },
    ],
  },
  {
    slug: "stimulasi-anak",
    title: "Stimulasi Anak 0–16 Tahun",
    icon: "growth",
    short:
      "Program stimulasi terarah untuk mendukung fokus, kontrol motorik, dan koordinasi sensorik anak.",
    detail: [
      "Program stimulasi dini untuk anak usia 0–16 tahun.",
      "Mendukung fokus, kontrol motorik, dan koordinasi sensorik.",
      "Cocok untuk anak dengan perkembangan umum maupun kebutuhan khusus (ABK).",
    ],
    forWho:
      "Anak usia 0–16 tahun, baik dengan perkembangan umum yang ingin mendapat stimulasi tambahan, maupun anak berkebutuhan khusus (ABK) yang memerlukan latihan terarah.",
    signs: [
      "Orang tua ingin memberikan stimulasi tambahan sejak dini untuk mendukung tumbuh kembang optimal.",
      "Anak mudah teralihkan fokusnya atau membutuhkan latihan koordinasi motorik.",
      "Anak ABK yang membutuhkan latihan sensorik dan motorik secara rutin.",
    ],
    goal:
      "Mendukung perkembangan fokus, kontrol motorik, dan koordinasi sensorik anak melalui program stimulasi yang terarah dan konsisten.",
    process: [
      "Penilaian singkat kebutuhan stimulasi sesuai usia dan kondisi anak.",
      "Aktivitas stimulasi terarah melalui permainan sensorik dan motorik.",
      "Pencatatan perkembangan dan rekomendasi stimulasi lanjutan di rumah.",
    ],
    duration: "60 menit per sesi (intervensi maupun edukasi orang tua).",
    professionals: "Terapis/Instruktur Stimulasi Anak, didampingi Psikolog Anak.",
    whatToBring: WHAT_TO_BRING_DEFAULT,
  },
];
