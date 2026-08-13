import Image from "next/image";
import GrowthPathBackground from "./GrowthPathBackground";
import DotGrid from "./decor/DotGrid";
import ZigzagAccent from "./decor/ZigzagAccent";
import heroChild from "@/public/images/foto terapis/Sampul.png";

export default function Hero({
  badge = "Lamongan · Sejak 2020",
  title = "Setiap anak punya jalur tumbuh kembangnya sendiri.",
  subtitle = "GenSA Kidz mendampingi anak usia 0–16 tahun — baik dengan perkembangan umum maupun kebutuhan khusus (ABK) — lewat asesmen menyeluruh dan program terapi yang dipersonalisasi, satu atap di Lamongan.",
}: {
  badge?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-100">
      <GrowthPathBackground />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-8 md:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-800 shadow-sm">
            {badge}
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-brand-950 md:text-6xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">{subtitle}</p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/6281311992012?text=Halo%20GenSA%20Kidz%2C%20saya%20ingin%20konsultasi%20tumbuh%20kembang%20anak."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-800 px-7 py-3.5 text-[15px] font-semibold text-surface shadow-[0_12px_30px_-10px_rgba(31,78,69,0.55)] transition-transform hover:scale-[1.02] hover:bg-brand-700"
            >
              Daftar Konsultasi via WhatsApp
            </a>
            <a
              href="/layanan"
              className="rounded-full border border-brand-800 px-7 py-3.5 text-[15px] font-semibold text-brand-900 transition-colors hover:bg-surface"
            >
              Lihat Semua Layanan
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] border-2 border-dashed border-brand-500/30 md:-inset-6" />
          <DotGrid
            className="absolute -right-9 -top-9 hidden md:block"
            color="var(--color-leaf-500)"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(14,38,34,0.4)] md:rounded-[2.5rem]">
            <Image
              src={heroChild}
              alt="Terapis mendampingi anak berlatih motorik di GenSA Kidz"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <ZigzagAccent
            className="absolute -top-4 left-4 z-10 hidden drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] md:block"
            color="var(--color-marigold-500)"
          />
          <DotGrid
            className="absolute -bottom-9 -right-9"
            color="var(--color-indigo-500)"
          />

          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-surface px-5 py-4 shadow-[0_20px_40px_-15px_rgba(31,78,69,0.35)] md:-left-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-marigold-100 font-display text-lg font-semibold text-marigold-600">
              8
            </span>
            <span className="text-sm leading-tight text-ink-soft">
              Layanan Terpadu
              <br />
              <span className="font-semibold text-brand-900">1 Atap</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
