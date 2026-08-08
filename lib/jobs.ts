export type Job = {
  slug: string;
  title: string;
  branch: "Lamongan" | "Babat" | "Lamongan & Babat";
  type: "Full-time" | "Part-time";
  status: "Dibuka" | "Ditutup";
  description: string;
  requirements: string[];
};

export const JOBS: Job[] = [
  {
    slug: "terapis-wicara",
    title: "Terapis Wicara",
    branch: "Lamongan & Babat",
    type: "Full-time",
    status: "Dibuka",
    description:
      "Menangani sesi terapi wicara untuk anak dengan keterlambatan bicara, gangguan bahasa, artikulasi, maupun kelancaran berbicara, sesuai rencana terapi yang disusun bersama tim.",
    requirements: [
      "Lulusan D3/D4/S1 Terapi Wicara.",
      "Memiliki STR/sertifikasi profesi yang masih berlaku.",
      "Berpengalaman menangani anak menjadi nilai tambah, fresh graduate dipersilakan melamar.",
      "Sabar, komunikatif, dan senang bekerja dengan anak-anak.",
      "Bersedia ditempatkan di cabang Lamongan maupun Babat.",
    ],
  },
  {
    slug: "terapis-okupasi",
    title: "Terapis Okupasi",
    branch: "Lamongan & Babat",
    type: "Full-time",
    status: "Dibuka",
    description:
      "Melaksanakan sesi terapi okupasi untuk melatih motorik halus, kemandirian aktivitas sehari-hari (ADL), dan integrasi sensorik anak.",
    requirements: [
      "Lulusan D3/D4/S1 Okupasi Terapi.",
      "Memiliki STR/sertifikasi profesi yang masih berlaku.",
      "Memahami pendekatan sensory integration menjadi nilai tambah.",
      "Sabar, telaten, dan senang bekerja dengan anak-anak.",
      "Bersedia ditempatkan di cabang Lamongan maupun Babat.",
    ],
  },
  {
    slug: "fisioterapis-anak",
    title: "Fisioterapis Anak",
    branch: "Lamongan",
    type: "Full-time",
    status: "Dibuka",
    description:
      "Menangani sesi fisioterapi untuk melatih motorik kasar, kekuatan otot, dan koordinasi gerak anak sesuai rencana terapi.",
    requirements: [
      "Lulusan D3/D4/S1 Fisioterapi.",
      "Memiliki STR/sertifikasi profesi yang masih berlaku.",
      "Pengalaman menangani pasien anak menjadi nilai tambah.",
      "Mampu bekerja dalam tim lintas disiplin.",
    ],
  },
  {
    slug: "psikolog-anak",
    title: "Psikolog Anak",
    branch: "Lamongan",
    type: "Part-time",
    status: "Dibuka",
    description:
      "Memberikan layanan konsultasi psikologi, tes IQ, tes minat bakat, dan tes kesiapan sekolah bagi anak dan remaja.",
    requirements: [
      "Lulusan S2 Profesi Psikologi (Psikolog).",
      "Memiliki SIPP (Surat Izin Praktik Psikolog) yang masih berlaku.",
      "Berpengalaman menangani asesmen psikologi anak.",
      "Mampu berkomunikasi dengan baik bersama orang tua.",
    ],
  },
  {
    slug: "guru-ortopedagogik",
    title: "Guru Ortopedagogik / Pendidikan Khusus",
    branch: "Babat",
    type: "Part-time",
    status: "Dibuka",
    description:
      "Mendampingi anak dengan kesulitan belajar melalui program ortopedagogik yang disesuaikan dengan kebutuhan masing-masing anak.",
    requirements: [
      "Lulusan S1 Pendidikan Luar Biasa (PLB) / Pendidikan Khusus.",
      "Memahami metode pendampingan belajar anak berkebutuhan khusus.",
      "Sabar dan kreatif dalam menyusun materi belajar.",
    ],
  },
  {
    slug: "admin-customer-service",
    title: "Admin & Customer Service",
    branch: "Lamongan & Babat",
    type: "Full-time",
    status: "Ditutup",
    description:
      "Menangani pendaftaran pasien, penjadwalan sesi terapi, serta komunikasi dengan orang tua melalui WhatsApp maupun tatap muka.",
    requirements: [
      "Minimal lulusan SMA/SMK sederajat.",
      "Komunikatif, rapi, dan terbiasa menggunakan aplikasi WhatsApp/komputer dasar.",
      "Berpengalaman di bidang layanan pelanggan menjadi nilai tambah.",
    ],
  },
];

export const APPLY_EMAIL = "resource@gensakidz.com";
