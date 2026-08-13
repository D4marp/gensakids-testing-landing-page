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
import { getServices, getFacilities, backendImage } from "@/lib/api";
import { fallbackServiceImage, fallbackFacilityImage } from "@/lib/imageFallbacks";
import FacilitiesList, { type FacilityItem } from "@/components/FacilitiesList";

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

export default async function LayananPage() {
  const [services, facilities] = await Promise.all([getServices(), getFacilities()]);

  const facilityItems: FacilityItem[] = facilities.map((f) => ({
    title: f.Title,
    description: f.Description,
    icon: (f.Icon as keyof typeof ICONS) || "heart",
    image: backendImage(f.ImagePath) || fallbackFacilityImage(f.Title) || null,
  }));

  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Layanan Kami
          </span>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-brand-950 md:text-5xl">
            Solusi tumbuh kembang anak, dengan program terapi individu dan kelompok
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
            Setiap layanan diawali dengan konsultasi dan asesmen agar penanganan yang
            diberikan benar-benar sesuai kebutuhan anak, di lokasi kami Lamongan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.Icon as keyof typeof ICONS] || IconHeartHead;
            const image = backendImage(service.ImagePath) || fallbackServiceImage(service.Slug);
            return (
              <Link
                key={service.Slug}
                href={`/layanan/${service.Slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-15px_rgba(31,78,69,0.3)]"
              >
                {image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={service.Title}
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
                    {service.Title}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-soft">{service.Short}</p>
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
          <FacilitiesList facilities={facilityItems} />
        </div>
      </section>
    </>
  );
}
