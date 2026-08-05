import type { Metadata } from "next";
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
import serviceSpeech from "@/public/images/service-speech.jpg";
import serviceOccupational from "@/public/images/service-occupational.jpg";

const SERVICE_IMAGES: Partial<Record<string, typeof serviceSpeech>> = {
  "terapi-wicara": serviceSpeech,
  "terapi-okupasi": serviceOccupational,
};

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

export default function LayananPage() {
  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Layanan Kami
          </span>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold text-brand-950 md:text-5xl">
            Delapan program penanganan, satu tujuan: si kecil bertumbuh optimal
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">
            Setiap layanan diawali dengan konsultasi dan asesmen agar penanganan yang
            diberikan benar-benar sesuai kebutuhan anak.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-col gap-14">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            const image = SERVICE_IMAGES[service.slug];
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid scroll-mt-24 items-stretch gap-0 overflow-hidden rounded-[2rem] border border-line bg-surface ${
                  image ? "md:grid-cols-[0.85fr_1fr]" : "md:grid-cols-[auto_1fr]"
                }`}
              >
                {image ? (
                  <div className="relative min-h-[220px] w-full md:min-h-full">
                    <Image
                      src={image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 35vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <span className="m-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-800 md:mb-0">
                    <Icon className="h-8 w-8" />
                  </span>
                )}
                <div className="p-8 md:p-10">
                  {image && (
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800">
                      <Icon className="h-6 w-6" />
                    </span>
                  )}
                  <h2 className="font-display text-2xl font-semibold text-brand-950">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{service.short}</p>
                  <ul className="mt-5 space-y-2">
                    {service.detail.map((line) => (
                      <li key={line} className="flex gap-2.5 text-[15px] text-ink-soft">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold-500" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/6281311992012?text=Halo%20GenSA%20Kidz%2C%20saya%20ingin%20tanya%20soal%20layanan%20${encodeURIComponent(
                      service.title
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-surface hover:bg-brand-700"
                  >
                    Tanya via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
