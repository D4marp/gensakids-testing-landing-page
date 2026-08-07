import type { Metadata } from "next";
import Image from "next/image";
import ConsultationButton from "@/components/ConsultationButton";
import DotGrid from "@/components/decor/DotGrid";
import ZigzagAccent from "@/components/decor/ZigzagAccent";
import karirTeam from "@/public/images/karir-team.jpg";

export const metadata: Metadata = {
  title: "Karir — GenSA Kidz",
  description:
    "Bergabung bersama tim GenSA Kidz — pusat layanan terapi dan stimulasi tumbuh kembang anak di Lamongan. Lihat posisi yang terbuka dan cara melamar.",
};

const WHY_JOIN = [
  {
    title: "Kerja yang bermakna",
    desc: "Setiap hari terlibat langsung dalam membantu tumbuh kembang anak-anak yang membutuhkan.",
  },
  {
    title: "Tim lintas disiplin",
    desc: "Berkolaborasi dengan evaluator perkembangan, terapis, dan psikolog dalam satu tim yang suportif.",
  },
  {
    title: "Pengembangan berkelanjutan",
    desc: "Kesempatan belajar dan mengasah keterampilan klinis bersama rekan-rekan seprofesi.",
  },
];

const OPEN_ROLES = [
  "Terapis Wicara",
  "Terapis Okupasi",
  "Fisioterapis Anak",
  "Psikolog Anak",
  "Guru Ortopedagogik / Pendidikan Khusus",
  "Admin & Customer Service Klinik",
];

const APPLY_LINK =
  "https://wa.me/6281311992012?text=Halo%20GenSA%20Kidz%2C%20saya%20ingin%20menanyakan%20informasi%20lowongan%20kerja.";

export default function KarirPage() {
  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
              Karir di GenSA Kidz
            </span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-brand-950 md:text-5xl">
              Tumbuh bersama tim yang peduli tumbuh kembang anak
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              Kami selalu terbuka untuk profesional yang ingin berkontribusi mendampingi
              anak-anak di Lamongan mencapai potensi tumbuh kembang terbaiknya.
            </p>
            <div className="mt-6">
              <ConsultationButton
                label="Tanya Info Lowongan"
                className="inline-block rounded-full bg-brand-800 px-7 py-3.5 text-[15px] font-semibold text-surface shadow-sm transition-transform hover:scale-[1.02] hover:bg-brand-700"
              />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <DotGrid
              className="absolute -right-9 -top-9 hidden md:block"
              color="var(--color-marigold-500)"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-[0_25px_50px_-20px_rgba(31,78,69,0.35)]">
              <Image
                src={karirTeam}
                alt="Tim GenSA Kidz berdiskusi"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <ZigzagAccent
              className="absolute -bottom-4 left-4 z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              color="var(--color-leaf-500)"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {WHY_JOIN.map((item) => (
            <div key={item.title} className="rounded-3xl border border-line bg-surface p-7">
              <h2 className="font-display text-lg font-semibold text-brand-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Posisi Terbuka
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-brand-950 md:text-3xl">
            Posisi yang biasa kami cari
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-ink-soft">
            Ketersediaan posisi dapat berubah sewaktu-waktu. Hubungi kami untuk informasi
            lowongan yang sedang dibuka saat ini.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {OPEN_ROLES.map((role) => (
              <li
                key={role}
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 text-[15px] font-medium text-brand-900"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-marigold-500" />
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-[2rem] bg-brand-950 p-10 text-brand-100 md:flex-row md:items-center md:justify-between md:p-14">
          <div>
            <h2 className="font-display text-2xl font-semibold text-surface md:text-3xl">
              Tertarik bergabung dengan GenSA Kidz?
            </h2>
            <p className="mt-2 max-w-md text-[15px] text-brand-200">
              Kirimkan CV dan minat posisi Anda melalui WhatsApp, tim kami akan menghubungi
              kembali untuk proses selanjutnya.
            </p>
          </div>
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-marigold-500 px-7 py-3.5 text-[15px] font-semibold text-brand-950 shadow-lg transition-transform hover:scale-[1.02] hover:bg-marigold-600"
          >
            Kirim Lamaran via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
