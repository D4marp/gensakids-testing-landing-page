"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

type Photo = { src: StaticImageData; caption: string };

export default function GalleryTabs({
  aktivitas,
  fasilitas,
}: {
  aktivitas: Photo[];
  fasilitas: Photo[];
}) {
  const [tab, setTab] = useState<"aktivitas" | "fasilitas">("aktivitas");
  const photos = tab === "aktivitas" ? aktivitas : fasilitas;

  return (
    <div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setTab("aktivitas")}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            tab === "aktivitas"
              ? "bg-brand-800 text-surface"
              : "border border-line bg-surface text-ink-soft hover:bg-surface-2"
          }`}
        >
          Foto Aktivitas
        </button>
        <button
          type="button"
          onClick={() => setTab("fasilitas")}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            tab === "fasilitas"
              ? "bg-brand-800 text-surface"
              : "border border-line bg-surface text-ink-soft hover:bg-surface-2"
          }`}
        >
          Foto Fasilitas
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 30vw, 45vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/80 to-transparent px-3 pb-2.5 pt-6 text-xs font-semibold text-surface">
              {photo.caption}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
