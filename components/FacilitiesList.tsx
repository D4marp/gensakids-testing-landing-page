"use client";

import { useState, useEffect } from "react";
import Image, { type StaticImageData } from "next/image";
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

export type FacilityItem = {
  title: string;
  description: string;
  icon: keyof typeof FACILITY_ICONS;
  image: string | StaticImageData | null;
  position?: string;
};

export default function FacilitiesList({ facilities }: { facilities: FacilityItem[] }) {
  const [selected, setSelected] = useState<FacilityItem | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelected(null);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selected]);

  return (
    <>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => {
          const Icon = FACILITY_ICONS[facility.icon] || IconHeartHead;
          return (
            <div
              key={facility.title}
              className="flex flex-col gap-3 overflow-hidden rounded-3xl border border-line bg-surface"
            >
              {facility.image && (
                <div
                  onClick={() => setSelected(facility)}
                  className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-95"
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={`object-cover ${facility.position || "object-center"}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity hover:opacity-100">
                    <span className="rounded-full bg-brand-950/75 px-4 py-2 text-xs font-semibold text-surface backdrop-blur-sm">
                      Lihat Foto Asli
                    </span>
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-marigold-100 text-marigold-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-base font-semibold text-brand-900">
                  {facility.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">{facility.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Pop-up Modal */}
      {selected && selected.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-[95vw] flex-col overflow-hidden rounded-2xl border border-brand-900 bg-brand-950 shadow-2xl sm:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors duration-200 hover:bg-black/80"
              onClick={() => setSelected(null)}
              aria-label="Tutup"
            >
              ✕
            </button>
            <div className="relative h-[70vh] w-full bg-black/20">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                sizes="(max-width: 1024px) 95vw, 1024px"
                className="object-contain"
                priority
              />
            </div>
            <div className="border-t border-brand-900/40 bg-brand-950 p-4 text-center">
              <h4 className="text-sm font-semibold text-surface">{selected.title}</h4>
              {selected.description && (
                <p className="mx-auto mt-1 max-w-xl text-xs leading-relaxed text-brand-300">
                  {selected.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
