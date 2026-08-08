import Link from "next/link";
import {
  IconSpeech,
  IconHands,
  IconRun,
  IconPuzzle,
  IconBook,
  IconHeartHead,
  IconGrowth,
  IconClipboard,
} from "./icons";
import type { Service } from "@/lib/services";

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

export default function ServiceCard({ service, id }: { service: Service; id?: string }) {
  const Icon = ICONS[service.icon];
  return (
    <Link
      href={`/layanan/${service.slug}`}
      id={id}
      className="group flex flex-col gap-4 rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_16px_40px_-15px_rgba(31,78,69,0.3)]"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-800 transition-colors duration-300 group-hover:bg-brand-800 group-hover:text-surface">
        <Icon />
      </span>
      <h3 className="font-display text-lg font-semibold text-brand-900">{service.title}</h3>
      <p className="text-sm leading-relaxed text-ink-soft">{service.short}</p>
      <span className="mt-auto pt-1 text-sm font-semibold text-brand-800 underline decoration-marigold-500 decoration-2 underline-offset-4">
        Lihat Detail
      </span>
    </Link>
  );
}
