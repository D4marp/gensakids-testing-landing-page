import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/services";
import { SERVICE_IMAGES } from "@/lib/serviceImages";
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
import ConsultationButton from "@/components/ConsultationButton";

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

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — GenSA Kidz`,
    description: service.short,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon];
  const image = SERVICE_IMAGES[service.slug];
  const waText = encodeURIComponent(
    `Halo GenSA Kidz, saya ingin tanya soal layanan ${service.title}.`
  );

  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/layanan"
            className="text-sm font-semibold text-brand-800 underline decoration-marigold-500 decoration-2 underline-offset-4"
          >
            ← Semua Layanan
          </Link>
          <span className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface text-brand-800">
            <Icon className="h-6 w-6" />
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold text-brand-950 md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
            {service.short}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 md:px-8">
        {image && (
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] shadow-[0_25px_50px_-20px_rgba(31,78,69,0.35)]">
            <Image
              src={image}
              alt={service.title}
              fill
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-line bg-surface p-7">
            <h2 className="font-display text-lg font-semibold text-brand-900">
              Layanan ini ditujukan untuk siapa?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{service.forWho}</p>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-7">
            <h2 className="font-display text-lg font-semibold text-brand-900">
              Apa tujuan terapinya?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{service.goal}</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-line bg-surface p-7">
          <h2 className="font-display text-lg font-semibold text-brand-900">
            Tanda-tanda anak membutuhkan layanan ini
          </h2>
          <ul className="mt-4 space-y-2">
            {service.signs.map((sign) => (
              <li key={sign} className="flex gap-2.5 text-[15px] text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold-500" />
                {sign}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-3xl border border-line bg-surface p-7">
          <h2 className="font-display text-lg font-semibold text-brand-900">
            Bagaimana gambaran prosesnya?
          </h2>
          <ol className="mt-4 space-y-3">
            {service.process.map((step, i) => (
              <li key={step} className="flex gap-3 text-[15px] text-ink-soft">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-800">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-line bg-surface p-7">
            <h2 className="font-display text-base font-semibold text-brand-900">
              Durasi sesi
            </h2>
            <p className="mt-2 text-[15px] text-ink-soft">{service.duration}</p>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-7">
            <h2 className="font-display text-base font-semibold text-brand-900">
              Tenaga profesional
            </h2>
            <p className="mt-2 text-[15px] text-ink-soft">{service.professionals}</p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-line bg-surface p-7">
          <h2 className="font-display text-lg font-semibold text-brand-900">
            Apa yang perlu dibawa saat konsultasi?
          </h2>
          <ul className="mt-4 space-y-2">
            {service.whatToBring.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15px] text-ink-soft">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {service.extraFaq?.map((faq) => (
          <div key={faq.q} className="mt-8 rounded-3xl border border-line bg-surface p-7">
            <h2 className="font-display text-lg font-semibold text-brand-900">{faq.q}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{faq.a}</p>
          </div>
        ))}

        <div className="mt-8 rounded-3xl border border-line bg-surface p-7">
          <h2 className="font-display text-lg font-semibold text-brand-900">
            Bagaimana cara mendaftar?
          </h2>
          <ol className="mt-4 space-y-3">
            <li className="flex gap-3 text-[15px] text-ink-soft">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-800">
                1
              </span>
              Hubungi kami via WhatsApp (cabang Lamongan atau Babat) untuk konsultasi awal.
            </li>
            <li className="flex gap-3 text-[15px] text-ink-soft">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-800">
                2
              </span>
              Tim kami menjadwalkan sesi konsultasi/asesmen sesuai ketersediaan.
            </li>
            <li className="flex gap-3 text-[15px] text-ink-soft">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-800">
                3
              </span>
              Datang sesuai jadwal janji temu — bawa dokumen pendukung bila ada.
            </li>
          </ol>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl bg-brand-950 p-8 text-brand-100 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] font-medium text-surface">
            Ingin tanya lebih lanjut soal {service.title.toLowerCase()}?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/6281311992012?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-marigold-500 px-6 py-3 text-sm font-semibold text-brand-950 transition-transform hover:scale-[1.02] hover:bg-marigold-600"
            >
              Tanya via WhatsApp
            </a>
            <ConsultationButton
              label="Pilih Cabang Lain"
              className="whitespace-nowrap rounded-full border border-brand-700 px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-900"
            />
          </div>
        </div>
      </section>
    </>
  );
}
