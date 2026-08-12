export type ScheduleItem = {
  days: string;
  hours: string;
};

export type Branch = {
  slug: string;
  name: string;
  address: string;
  whatsapp: string;
  phone?: string;
  mapsQuery: string;
  schedules: ScheduleItem[];
};

export const BRANCHES: Branch[] = [
  {
    slug: "lamongan",
    name: "GenSA Kidz Lamongan",
    address: "Ruko Tambakboyo Regency No. 01–02, Tikung, Lamongan, Jawa Timur 62281",
    whatsapp: "6281311992012",
    phone: "0322314966",
    mapsQuery: "Ruko+Tambakboyo+Regency+Tikung+Lamongan",
    schedules: [
      { days: "Senin – Jumat", hours: "08:00 – 16:00 WIB" },
      { days: "Sabtu", hours: "08:00 – 15:00 WIB" },
    ],
  },
];
