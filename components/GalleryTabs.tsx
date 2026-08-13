"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

type Photo = { src: string | StaticImageData; caption: string; position?: string };

export default function GalleryTabs({
  aktivitas,
  fasilitas,
}: {
  aktivitas: Photo[];
  fasilitas: Photo[];
}) {
  const [tab, setTab] = useState<"aktivitas" | "fasilitas">("aktivitas");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
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
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-2xl"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 30vw, 45vw"
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                photo.position || "object-center"
              }`}
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/80 to-transparent px-3 pb-2.5 pt-6 text-xs font-semibold text-surface">
              {photo.caption}
            </span>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col overflow-hidden rounded-2xl bg-brand-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-brand-900/60 font-semibold text-surface hover:bg-brand-900/80 transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>
            <div className="relative h-[70vh] w-[85vw] max-w-4xl">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="bg-brand-950 p-4 text-center text-surface">
              <p className="text-sm font-semibold">{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

