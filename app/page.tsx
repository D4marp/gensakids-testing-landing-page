import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import { SERVICES } from "@/lib/services";
import { BRANCHES } from "@/lib/branches";
import DotGrid from "@/components/decor/DotGrid";
import ZigzagAccent from "@/components/decor/ZigzagAccent";
import BlockAccent from "@/components/decor/BlockAccent";
import aboutChild from "@/public/images/about-child.jpg";
import processChild from "@/public/images/process-child.jpg";
import ctaChildren from "@/public/images/cta-children.jpg";

const BADGES = [
  { label: "Berdiri sejak", value: "2020" },
  { label: "Rentang usia", value: "0–16 Tahun" },
  { label: "Jenis layanan", value: "8 Program" },
  { label: "Pendekatan", value: "One-Stop Solution" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Tentang Singkat */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
              Tentang GenSA Kidz
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-brand-950 md:text-4xl">
              One-stop solution untuk tumbuh kembang anak
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              GenSA Kidz adalah pusat layanan terapi dan stimulasi tumbuh kembang anak di
              Lamongan, Jawa Timur. Sejak 2020, kami mendampingi anak dengan perkembangan
              umum maupun anak berkebutuhan khusus (ABK) melalui deteksi dini, stimulasi,
              dan penanganan klinis yang terpadu — mulai dari konsultasi awal hingga sesi
              terapi rutin, semua dalam satu tempat.
            </p>
            <Link
              href="/tentang"
              className="mt-6 inline-block text-[15px] font-semibold text-brand-800 underline decoration-marigold-500 decoration-2 underline-offset-4"
            >
              Selengkapnya tentang kami
            </Link>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {BADGES.map((b) => (
                <div key={b.label} className="rounded-2xl border border-line bg-surface p-5">
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                    {b.label}
                  </dt>
                  <dd className="mt-2 font-display text-xl font-semibold text-brand-900">
                    {b.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-marigold-100 md:-inset-4" />
            <DotGrid
              className="absolute -right-9 -top-9 hidden md:block"
              color="var(--color-indigo-500)"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-[0_25px_50px_-20px_rgba(31,78,69,0.35)]">
              <Image
                src={aboutChild}
                alt="Anak-anak bermain sambil belajar di GenSA Kidz"
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

      {/* Kenapa Pilih Kami */}
      <section className="relative overflow-hidden bg-brand-950 py-20">
        <BlockAccent
          className="pointer-events-none absolute -bottom-2 left-0 opacity-90"
          color="var(--color-indigo-500)"
        />
        <ZigzagAccent
          className="pointer-events-none absolute -right-2 -top-2 opacity-80"
          color="var(--color-marigold-400)"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.75rem] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)]">
              <Image
                src={processChild}
                alt="Pendamping menemani anak dalam sesi konsultasi"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <ZigzagAccent
              className="absolute -top-4 left-4 z-10 hidden drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] md:block"
              color="var(--color-marigold-400)"
            />
            <DotGrid
              className="absolute -bottom-7 left-1/2 -translate-x-1/2"
              color="var(--color-coral-500)"
              rows={2}
              cols={6}
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-marigold-400">
              Kenapa Pilih Kami
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-surface md:text-4xl">
              Pendampingan yang personal, bukan sekadar sesi terapi
            </h2>
            <ul className="mt-6 space-y-5">
              {[
                {
                  title: "Tim lintas disiplin",
                  desc: "Evaluator perkembangan, terapis, hingga psikolog anak berkolaborasi untuk setiap kasus.",
                },
                {
                  title: "Program dipersonalisasi",
                  desc: "Rencana terapi disusun dari hasil asesmen, bukan pendekatan satu ukuran untuk semua anak.",
                },
                {
                  title: "Satu atap, semua kebutuhan",
                  desc: "Dari konsultasi awal hingga terapi rutin, semua layanan tersedia di satu lokasi.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-marigold-500 text-xs font-bold text-brand-950">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-surface">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-brand-200">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Layanan Unggulan */}
      <section className="bg-surface-2 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-3 md:max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
              Layanan Kami
            </span>
            <h2 className="font-display text-3xl font-semibold text-brand-950 md:text-4xl">
              Tentukan kebutuhan si kecil, kami sesuaikan penanganannya
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/layanan"
              className="inline-block rounded-full bg-brand-800 px-7 py-3.5 text-[15px] font-semibold text-surface hover:bg-brand-700"
            >
              Lihat Detail Semua Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="flex flex-col gap-3 md:max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Alur Layanan
          </span>
          <h2 className="font-display text-3xl font-semibold text-brand-950 md:text-4xl">
            Empat langkah menuju rencana terapi yang tepat
          </h2>
        </div>
        <div className="mt-14">
          <ProcessSteps />
        </div>
      </section>

      {/* Testimoni */}
      <section className="bg-brand-100 py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-3 md:max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
              Testimoni
            </span>
            <h2 className="font-display text-3xl font-semibold text-brand-950 md:text-4xl">
              Cerita orang tua yang sudah mendampingi anaknya di sini
            </h2>
          </div>
          <div className="mt-10">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Jadwal & Lokasi */}
      <section id="jadwal" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:px-8">
        <div className="flex flex-col gap-3 md:max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Jadwal & Lokasi
          </span>
          <h2 className="font-display text-3xl font-semibold text-brand-950 md:text-4xl">
            Kunjungi Klinik GenSA Kidz — 2 Cabang di Lamongan
          </h2>
          <p className="text-[15px] text-ink-soft">
            Jam layanan: Senin – Sabtu, sesuai jadwal janji temu.
          </p>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {BRANCHES.map((branch) => (
            <div
              key={branch.slug}
              className="grid gap-6 rounded-[2rem] border border-line bg-surface p-8"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-brand-950">
                  {branch.name}
                </h3>
                <dl className="mt-4 space-y-3 text-[15px] text-ink-soft">
                  <div>
                    <dt className="font-semibold text-ink">Alamat</dt>
                    <dd>{branch.address}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Kontak</dt>
                    <dd>
                      WA{" "}
                      <a
                        href={`https://wa.me/${branch.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-800 underline"
                      >
                        +{branch.whatsapp}
                      </a>
                      {branch.phone && <> atau (0322) 314966</>}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="min-h-[220px] overflow-hidden rounded-2xl border border-line">
                <iframe
                  title={`Lokasi ${branch.name}`}
                  src={`https://www.google.com/maps?q=${branch.mapsQuery}&output=embed`}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Akhir */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] p-10 text-brand-100 md:flex-row md:items-center md:justify-between md:p-14">
          <Image
            src={ctaChildren}
            alt=""
            fill
            aria-hidden="true"
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-brand-950/85" />
          <div>
            <h2 className="font-display text-2xl font-semibold text-surface md:text-3xl">
              Ada yang ingin ditanyakan soal tumbuh kembang si kecil?
            </h2>
            <p className="mt-2 max-w-md text-[15px] text-brand-200">
              Tim kami siap membantu menjawab dan menjadwalkan konsultasi awal.
            </p>
          </div>
          <a
            href="https://wa.me/6281311992012?text=Halo%20GenSA%20Kidz%2C%20saya%20ingin%20konsultasi%20tumbuh%20kembang%20anak."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-marigold-500 px-7 py-3.5 text-[15px] font-semibold text-brand-950 shadow-lg transition-transform hover:scale-[1.02] hover:bg-marigold-600"
          >
            Chat via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
