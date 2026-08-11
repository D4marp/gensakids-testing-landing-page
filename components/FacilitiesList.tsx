"use client";

import { useState, useEffect } from "react";
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
import { FACILITIES, type Facility } from "@/lib/facilities";

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

export default function FacilitiesList() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  useEffect(() => {
    if (selectedFacility) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedFacility(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedFacility]);

  return (
    <>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map((facility) => {
          const Icon = FACILITY_ICONS[facility.icon];
          return (
            <div
              key={facility.title}
              className="flex flex-col gap-3 overflow-hidden rounded-3xl border border-line bg-surface"
            >
              {facility.photo && (
                <div
                  onClick={() => setSelectedFacility(facility)}
                  className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-95"
                >
                  <Image
                    src={facility.photo}
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
                <p className="text-sm leading-relaxed text-ink-soft">
                  {facility.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Pop-up Modal */}
      {selectedFacility && selectedFacility.photo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedFacility(null)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-[95vw] sm:max-w-5xl flex-col overflow-hidden rounded-2xl bg-brand-950 shadow-2xl border border-brand-900 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors duration-200"
              onClick={() => setSelectedFacility(null)}
              aria-label="Tutup"
            >
              ✕
            </button>
            <div className="relative max-h-[75vh] overflow-hidden flex items-center justify-center bg-black/20">
              <Image
                src={selectedFacility.photo}
                alt={selectedFacility.title}
                width={selectedFacility.photo.width}
                height={selectedFacility.photo.height}
                placeholder="blur"
                className="h-auto max-h-[75vh] w-auto max-w-full object-contain"
                sizes="(max-width: 1024px) 95vw, 1024px"
                priority
              />
            </div>
            <div className="bg-brand-950 p-4 text-center border-t border-brand-900/40">
              <h4 className="text-sm font-semibold text-surface">{selectedFacility.title}</h4>
              {selectedFacility.description && (
                <p className="mt-1 text-xs text-brand-300 max-w-xl mx-auto leading-relaxed">
                  {selectedFacility.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
