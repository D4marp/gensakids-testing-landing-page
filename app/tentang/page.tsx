import type { Metadata } from "next";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import DotGrid from "@/components/decor/DotGrid";
import ZigzagAccent from "@/components/decor/ZigzagAccent";
import aboutHero from "@/public/images/cta-children.jpg";

export const metadata: Metadata = {
  title: "Tentang Kami — GenSA Kidz",
  description:
    "GenSA Kidz adalah pusat layanan terapi tumbuh kembang anak di Lamongan sejak 2020, didampingi tim evaluator perkembangan dan terapis berpengalaman.",
};

const TEAM_ROLES = [
  "Evaluator Perkembangan Anak",
  "Terapis Wicara",
  "Terapis Okupasi",
  "Fisioterapis",
  "Terapis Perilaku",
  "Guru Ortopedagogik",
  "Psikolog Anak",
];

export default function TentangPage() {
  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
              Tentang Kami
            </span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-brand-950 md:text-5xl">
              Mendampingi setiap langkah tumbuh kembang anak
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              GenSA Kidz berdiri sejak 2020 di Lamongan, Jawa Timur, sebagai pusat layanan
              terapi dan stimulasi tumbuh kembang anak dengan pendekatan{" "}
              <em className="font-display italic">one-stop solution</em> — mendukung deteksi
              dini, stimulasi, hingga penanganan klinis bagi anak dengan perkembangan umum
              maupun anak berkebutuhan khusus (ABK), untuk rentang usia 0–16 tahun.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <DotGrid
              className="absolute -right-9 -top-9 hidden md:block"
              color="var(--color-indigo-500)"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] shadow-[0_25px_50px_-20px_rgba(31,78,69,0.35)]">
              <Image
                src={aboutHero}
                alt="Anak-anak bermain bersama di GenSA Kidz"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <ZigzagAccent
              className="absolute -bottom-4 left-4 z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
              color="var(--color-marigold-500)"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-surface p-8">
            <h2 className="font-display text-xl font-semibold text-brand-900">Pendekatan Kami</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Setiap anak memulai dari konsultasi dan asesmen menyeluruh, sehingga program
              terapi yang disusun benar-benar sesuai dengan kondisi dan kebutuhan
              perkembangannya — bukan pendekatan satu ukuran untuk semua anak.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-8">
            <h2 className="font-display text-xl font-semibold text-brand-900">Siapa yang Kami Layani</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Anak usia 0–16 tahun, baik dengan perkembangan umum yang membutuhkan
              stimulasi tambahan, maupun anak berkebutuhan khusus (ABK) yang memerlukan
              penanganan klinis terpadu.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-brand-950">Tim Kami</h2>
          <p className="mt-2 max-w-xl text-[15px] text-ink-soft">
            Ditangani oleh evaluator perkembangan dan terapis lintas disiplin yang
            berkolaborasi untuk setiap anak.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {TEAM_ROLES.map((role) => (
              <span
                key={role}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-brand-800"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-surface-2 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Tanya Jawab
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-brand-950">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="mt-8">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
