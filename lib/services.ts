export type Service = {
  slug: string;
  title: string;
  icon: "speech" | "hands" | "run" | "puzzle" | "book" | "heart" | "growth" | "clipboard";
  short: string;
  detail: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "asesmen-tumbuh-kembang",
    title: "Konsultasi & Asesmen Tumbuh Kembang",
    icon: "clipboard",
    short:
      "Langkah awal setiap anak — evaluator perkembangan memetakan kondisi anak sebelum menyusun program terapi.",
    detail: [
      "Konsultasi awal bersama evaluator perkembangan anak.",
      "Asesmen menyeluruh untuk memetakan kemampuan dan hambatan anak.",
      "Penyusunan rencana terapi yang disesuaikan dengan kebutuhan anak.",
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
  },
  {
    slug: "terapi-perilaku",
    title: "Terapi Perilaku",
    icon: "puzzle",
    short:
      "Membantu anak berperilaku lebih adaptif terhadap lingkungan sekitarnya.",
    detail: [
      "Meningkatkan kemampuan anak untuk berperilaku adaptif.",
      "Mengurangi perilaku yang tidak sesuai di rumah maupun lingkungan sosial.",
      "Program disusun secara terukur berdasarkan hasil asesmen.",
    ],
  },
  {
    slug: "ortopedagogik",
    title: "Ortopedagogik (Pendidikan Khusus)",
    icon: "book",
    short:
      "Pendampingan belajar bagi anak yang kesulitan mengikuti pendidikan pada umumnya.",
    detail: [
      "Mendampingi anak dengan kesulitan belajar di sekolah.",
      "Mengembangkan potensi akademik sesuai bakat dan kemampuan anak.",
      "Menumbuhkan sikap belajar yang positif.",
    ],
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
  },
];
