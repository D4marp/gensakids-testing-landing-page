import type { Metadata } from "next";
import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import TeamFilter from "@/components/TeamFilter";
import DotGrid from "@/components/decor/DotGrid";
import ZigzagAccent from "@/components/decor/ZigzagAccent";
import aboutHero from "@/public/images/foto terapis/Tentang kami.png";
import { getTeam, getSettings, backendImage, misiToList } from "@/lib/api";
import { fallbackTeamImage } from "@/lib/imageFallbacks";

export const metadata: Metadata = {
  title: "Tentang Kami — GenSA Kidz",
  description:
    "GenSA Kidz adalah pusat layanan terapi tumbuh kembang anak di Lamongan sejak 2020, didampingi tim psikolog anak dan terapis berpengalaman.",
};

export default async function TentangPage() {
  const [team, settings] = await Promise.all([getTeam(), getSettings()]);
  const misi = misiToList(settings.misi || "");
  const teamView = team.map((t) => ({
    name: t.Name,
    role: t.Role,
    photo: backendImage(t.ImagePath) || fallbackTeamImage(t.Name) || null,
  }));

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
                alt="Kegiatan bersama anak-anak di GenSA Kidz Lamongan"
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
        <div className="rounded-[2rem] bg-marigold-100 p-8 text-brand-950 md:p-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Visi
          </span>
          <p className="mt-4 max-w-3xl font-display text-xl italic leading-relaxed text-brand-950 md:text-2xl">
            “{settings.visi}”
          </p>

          <span className="mt-10 block text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Misi
          </span>
          <ol className="mt-4 grid gap-4 md:grid-cols-2">
            {misi.map((item, i) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold text-brand-800">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
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
          <h2 className="font-display text-2xl font-semibold text-brand-950">
            Tim Ahli Multidisiplin Kami
          </h2>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {settings.tim_intro}
          </p>
          <TeamFilter team={teamView} />
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
