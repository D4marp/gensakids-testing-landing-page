export type Facility = {
  title: string;
  description: string;
  icon: "clipboard" | "hands" | "puzzle" | "book" | "heart";
};

export const FACILITIES: Facility[] = [
  {
    title: "Ruang Konsultasi & Asesmen",
    description:
      "Ruang khusus untuk sesi konsultasi awal dan asesmen tumbuh kembang, dirancang tenang agar anak dan orang tua merasa nyaman bercerita.",
    icon: "clipboard",
  },
  {
    title: "Ruang Terapi Individual",
    description:
      "Ruang sesi one-on-one untuk terapi wicara, okupasi, fisioterapi, dan terapi perilaku, dengan alat bantu terapi sesuai kebutuhan masing-masing anak.",
    icon: "hands",
  },
  {
    title: "Area Stimulasi & Sensorik",
    description:
      "Area bermain terarah untuk aktivitas stimulasi motorik dan sensorik anak usia 0–16 tahun, baik perkembangan umum maupun kebutuhan khusus (ABK).",
    icon: "puzzle",
  },
  {
    title: "Ruang Pendampingan Belajar",
    description:
      "Ruang untuk sesi ortopedagogik/pendidikan khusus, mendukung anak yang membutuhkan pendampingan belajar di luar kurikulum sekolah umum.",
    icon: "book",
  },
  {
    title: "Ruang Tunggu Orang Tua",
    description:
      "Area tunggu yang nyaman bagi orang tua/pengantar selama sesi terapi anak berlangsung.",
    icon: "heart",
  },
];
