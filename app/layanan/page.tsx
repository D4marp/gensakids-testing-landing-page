import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  IconSpeech,
  IconHands,
  IconRun,
  IconPuzzle,
  IconBook,
  IconHeartHead,
  IconGrowth,
  IconClipboard,
} from "@/components/icons";
import { SERVICES } from "@/lib/services";
import { FACILITIES } from "@/lib/facilities";
import { SERVICE_IMAGES } from "@/lib/serviceImages";

export const metadata: Metadata = {
  title: "Layanan — GenSA Kidz",
  description:
    "Terapi Wicara, Terapi Okupasi, Fisioterapi, Terapi Perilaku, Ortopedagogik, Psikologi Anak, dan Stimulasi Anak 0–16 Tahun di GenSA Kidz Lamongan.",
};

const ICONS = {
  speech: IconSpeech,
  hands: IconHands,
  run: IconRun,
  puzzle: IconPuzzle,
  book: IconBook,
  heart: IconHeartHead,
  growth: IconGrowth,
  clipboard: IconClipboard,
};

const FACILITY_ICONS = {
  clipboard: IconClipboard,
  hands: IconHands,
  puzzle: IconPuzzle,
  book: IconBook,
  heart: IconHeartHead,
  speech: IconSpeech,
  run: IconRun,
  growth: IconGrowth,
};

export default function LayananPage() {
  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Layanan Kami
          </span>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-brand-950 md:text-5xl">
            8 Layanan Terpadu dalam 1 Atap untuk tumbuh kembang optimal si kecil
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
            Setiap layanan diawali dengan konsultasi dan asesmen agar penanganan yang
            diberikan benar-benar sesuai kebutuhan anak, di lokasi kami Lamongan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            const image = SERVICE_IMAGES[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/layanan/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-15px_rgba(31,78,69,0.3)]"
              >
                {image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-800">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="font-display text-lg font-semibold text-brand-950">
                    {service.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-soft">{service.short}</p>
                  <span className="mt-auto pt-2 text-sm font-semibold text-brand-800 underline decoration-marigold-500 decoration-2 underline-offset-4">
                    Lihat Detail Layanan
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Fasilitas */}
      <section className="bg-surface-2 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 md:max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
              Fasilitas
            </span>
            <h2 className="font-display text-3xl font-semibold text-brand-950 md:text-4xl">
              Fasilitas pendukung layanan GenSA Kidz
            </h2>
            <p className="text-[15px] text-ink-soft">
              Tersedia di lokasi kami di Lamongan untuk mendukung kenyamanan anak dan orang
              tua selama sesi berlangsung.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map((facility) => {
              const Icon = FACILITY_ICONS[facility.icon];
              return (
                <div
                  key={facility.title}
                  className="flex flex-col gap-3 overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  {facility.photo && (
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={facility.photo}
                        alt={facility.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`object-cover ${facility.position || "object-center"}`}
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-marigold-100 text-marigold-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-brand-900">
                      {facility.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {facility.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
