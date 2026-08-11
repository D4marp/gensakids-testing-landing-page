import type { StaticImageData } from "next/image";
import musholla from "@/public/images/Ruang Gensakidz/Musholla.jpeg";
import ruangPedagogic from "@/public/images/Ruang Gensakidz/R, Pedagogic.png";
import ruangExplorasi from "@/public/images/Ruang Gensakidz/R. Explorasi.png";
import ruangFisioterapi from "@/public/images/Ruang Gensakidz/R. Fisoterapi.png";
import ruangTungguAtas from "@/public/images/Ruang Gensakidz/R. Tunggu Atas.png";
import ruangAdmin from "@/public/images/Ruang Gensakidz/R. admin.png";
import ruangTerapiWicara from "@/public/images/Ruang Gensakidz/R. terapi wicara.png";
import ruangAsesmen from "@/public/images/Ruang Gensakidz/Ruang Assessment dan Psikolog Anak.png";
import ruangKonsultasi from "@/public/images/Ruang Gensakidz/Ruang Konsultasi.jpeg";
import ruangSensori from "@/public/images/Ruang Gensakidz/Ruang Sensori Integrasi.png";
import ruangTungguUtama from "@/public/images/Ruang Gensakidz/Ruang tunggu Utama.png";

export type Facility = {
  title: string;
  description: string;
  icon: "clipboard" | "hands" | "puzzle" | "book" | "heart" | "speech" | "run" | "growth";
  photo?: StaticImageData;
};

export const FACILITIES: Facility[] = [
  {
    title: "Ruang Asesmen & Psikolog Anak",
    description:
      "Ruang evaluasi tumbuh kembang anak dan sesi konseling psikologi bersama psikolog anak profesional yang dirancang tenang.",
    icon: "growth",
    photo: ruangAsesmen,
  },
  {
    title: "Ruang Konsultasi",
    description:
      "Ruang diskusi pribadi untuk orang tua berkonsultasi mengenai hasil asesmen dan rencana terapi si kecil bersama tim.",
    icon: "clipboard",
    photo: ruangKonsultasi,
  },
  {
    title: "Ruang Terapi Wicara",
    description:
      "Ruang khusus yang tenang untuk melatih komunikasi verbal, artikulasi, dan kemampuan bahasa reseptif-ekspresif.",
    icon: "speech",
    photo: ruangTerapiWicara,
  },
  {
    title: "Ruang Sensori Integrasi",
    description:
      "Dilengkapi dengan ayunan, perosotan, dan jaring sensori untuk melatih koordinasi motorik dan kepekaan indra anak.",
    icon: "puzzle",
    photo: ruangSensori,
  },
  {
    title: "Ruang Fisioterapi",
    description:
      "Ruang terapi fisik anak dengan peralatan latihan kekuatan otot, keseimbangan, serta stimulasi motorik kasar.",
    icon: "hands",
    photo: ruangFisioterapi,
  },
  {
    title: "Ruang Ortopedagogik (Terapi Belajar)",
    description:
      "Ruang pendampingan belajar khusus secara individual untuk melatih kesiapan sekolah, kognitif, dan akademis anak.",
    icon: "book",
    photo: ruangPedagogic,
  },
  {
    title: "Ruang Eksplorasi & Bermain",
    description:
      "Area eksplorasi motorik kasar dan bermain interaktif untuk menumbuhkan rasa percaya diri dan sosialisasi anak.",
    icon: "run",
    photo: ruangExplorasi,
  },
  {
    title: "Ruang Tunggu Utama",
    description:
      "Area tunggu yang nyaman dan luas di lantai bawah lengkap dengan sarana informasi layanan dan administrasi.",
    icon: "heart",
    photo: ruangTungguUtama,
  },
  {
    title: "Ruang Tunggu Lantai Atas",
    description:
      "Area tunggu lantai dua yang tenang untuk orang tua/pengantar selama mendampingi proses terapi anak.",
    icon: "heart",
    photo: ruangTungguAtas,
  },
  {
    title: "Ruang Administrasi & Pendaftaran",
    description:
      "Layanan pendaftaran, pengaturan jadwal terapi, administrasi, dan pusat informasi bagi calon orang tua.",
    icon: "clipboard",
    photo: ruangAdmin,
  },
  {
    title: "Musholla",
    description:
      "Fasilitas musholla yang bersih dan tenang untuk kenyamanan beribadah bagi keluarga pasien maupun staf.",
    icon: "heart",
    photo: musholla,
  },
];
