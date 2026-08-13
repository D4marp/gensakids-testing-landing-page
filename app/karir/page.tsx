import type { Metadata } from "next";
import Image from "next/image";
import ConsultationButton from "@/components/ConsultationButton";
import DotGrid from "@/components/decor/DotGrid";
import ZigzagAccent from "@/components/decor/ZigzagAccent";
import karirTeam from "@/public/images/Foto Dayli GenSA Kidz/Gensa kidz Lamongan/Foto1.jpg";
import { getJobs, getGallery, getBranches, getSettings, backendImage } from "@/lib/api";
import { fallbackGalleryImage } from "@/lib/imageFallbacks";

export const metadata: Metadata = {
  title: "Karir — GenSA Kidz",
  description:
    "Bergabung bersama tim GenSA Kidz — layanan terapi dan stimulasi tumbuh kembang anak di Lamongan. Lihat posisi yang terbuka dan cara melamar.",
};

const WHY_JOIN = [
  {
    title: "Kerja yang bermakna",
    desc: "Setiap hari terlibat langsung dalam membantu tumbuh kembang anak-anak yang membutuhkan.",
  },
  {
    title: "Tim lintas disiplin",
    desc: "Berkolaborasi dengan psikolog anak dan para terapis dalam satu tim yang suportif.",
  },
  {
    title: "Pengembangan berkelanjutan",
    desc: "Kesempatan belajar dan mengasah keterampilan klinis bersama rekan-rekan seprofesi.",
  },
];

function mailtoLink(jobTitle: string, applyEmail: string) {
  const subject = encodeURIComponent(`Lamaran Kerja — ${jobTitle}`);
  const body = encodeURIComponent(
    `Halo tim GenSA Kidz,\n\nSaya ingin melamar posisi ${jobTitle}. Berikut saya lampirkan CV dan dokumen pendukung.\n\nTerima kasih.`
  );
  return `mailto:${applyEmail}?subject=${subject}&body=${body}`;
}

export default async function KarirPage() {
  const [jobs, gallery, branches, settings] = await Promise.all([
    getJobs(),
    getGallery(),
    getBranches(),
    getSettings(),
  ]);
  const applyEmail = settings.apply_email || "resource@gensakidz.com";
  const activityPhotos = gallery.filter((g) => g.Category === "aktivitas").slice(0, 6);

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
                branches={branches}
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
                alt="Sesi terapi anak di GenSA Kidz Lamongan"
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
            Lowongan di GenSA Kidz
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-ink-soft">
            Kirim lamaran lengkap (CV & dokumen pendukung) langsung ke email di bawah tiap
            posisi.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {jobs.map((job) => (
              <div
                key={job.Slug}
                className="rounded-3xl border border-line bg-surface p-7 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-semibold text-brand-950">
                        {job.Title}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          job.Status === "Dibuka"
                            ? "bg-leaf-200 text-leaf-500"
                            : "bg-surface-2 text-ink-faint"
                        }`}
                      >
                        {job.Status}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-faint">
                      <span>📍 {job.Branch}</span>
                      <span>🕐 {job.Type}</span>
                    </div>
                  </div>
                  {job.Status === "Dibuka" ? (
                    <a
                      href={mailtoLink(job.Title, applyEmail)}
                      className="whitespace-nowrap rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-700"
                    >
                      Lamar via Email
                    </a>
                  ) : (
                    <span className="whitespace-nowrap rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink-faint">
                      Lowongan Ditutup
                    </span>
                  )}
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {job.Description}
                </p>

                <h4 className="mt-5 text-sm font-semibold text-brand-900">Persyaratan</h4>
                <ul className="mt-2 space-y-1.5">
                  {job.Requirements.map((req) => (
                    <li key={req} className="flex gap-2.5 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold-500" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Keseharian Kami
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-brand-950 md:text-3xl">
            Kegiatan Sehari-hari di GenSA Kidz
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-ink-soft">
            Momen sesi terapi dan stimulasi anak di GenSA Kidz Lamongan.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {activityPhotos.map((item) => {
              const src = backendImage(item.ImagePath) || fallbackGalleryImage("aktivitas", item.Caption);
              if (!src) return null;
              return (
                <div
                  key={item.ID}
                  className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={item.Caption}
                    fill
                    sizes="(min-width: 768px) 30vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
          <a
            href="/galeri"
            className="mt-6 inline-block text-sm font-semibold text-brand-800 underline decoration-marigold-500 decoration-2 underline-offset-4"
          >
            Lihat Galeri Lengkap →
          </a>
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-[2rem] bg-brand-950 p-10 text-brand-100 md:flex-row md:items-center md:justify-between md:p-14">
          <div>
            <h2 className="font-display text-2xl font-semibold text-surface md:text-3xl">
              Tidak menemukan posisi yang sesuai?
            </h2>
            <p className="mt-2 max-w-md text-[15px] text-brand-200">
              Kirimkan CV Anda ke{" "}
              <a href={`mailto:${applyEmail}`} className="underline decoration-marigold-400">
                {applyEmail}
              </a>
              , tim kami akan menghubungi bila ada posisi yang sesuai.
            </p>
          </div>
          <a
            href={`mailto:${applyEmail}`}
            className="whitespace-nowrap rounded-full bg-marigold-500 px-7 py-3.5 text-[15px] font-semibold text-brand-950 shadow-lg transition-transform hover:scale-[1.02] hover:bg-marigold-600"
          >
            Kirim CV via Email
          </a>
        </div>
      </section>
    </>
  );
}
