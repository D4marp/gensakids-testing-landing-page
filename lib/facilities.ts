import type { StaticImageData } from "next/image";
import ruangAsesmen from "@/public/images/Ruang Assessment dan Psikolog Anak.png";
import ruangTerapi from "@/public/images/Foto Dayli GenSA Kidz/Gensa kidz Lamongan/Foto13.jpg";
import ruangStimulasi from "@/public/images/Foto Dayli GenSA Kidz/Gensa kidz Lamongan/Foto16.jpg";
import ruangBelajar from "@/public/images/foto terapis/PD 3.jpg";

export type Facility = {
  title: string;
  description: string;
  icon: "clipboard" | "hands" | "puzzle" | "book" | "heart";
  photo?: StaticImageData;
};

export const FACILITIES: Facility[] = [
  {
    title: "Ruang Konsultasi & Asesmen",
    description:
      "Ruang khusus untuk sesi konsultasi awal dan asesmen tumbuh kembang, dirancang tenang agar anak dan orang tua merasa nyaman bercerita.",
    icon: "clipboard",
    photo: ruangAsesmen,
  },
  {
    title: "Ruang Terapi Individual",
    description:
      "Ruang sesi one-on-one untuk terapi wicara, okupasi, fisioterapi, dan terapi perilaku, dengan alat bantu terapi sesuai kebutuhan masing-masing anak.",
    icon: "hands",
    photo: ruangTerapi,
  },
  {
    title: "Area Stimulasi & Sensorik",
    description:
      "Area bermain terarah untuk aktivitas stimulasi motorik dan sensorik anak usia 0–16 tahun, baik perkembangan umum maupun kebutuhan khusus (ABK).",
    icon: "puzzle",
    photo: ruangStimulasi,
  },
  {
    title: "Ruang Pendampingan Belajar",
    description:
      "Ruang untuk sesi ortopedagogik/pendidikan khusus, mendukung anak yang membutuhkan pendampingan belajar di luar kurikulum sekolah umum.",
    icon: "book",
    photo: ruangBelajar,
  },
  {
    title: "Ruang Tunggu Orang Tua",
    description:
      "Area tunggu yang nyaman bagi orang tua/pengantar selama sesi terapi anak berlangsung.",
    icon: "heart",
  },
];
