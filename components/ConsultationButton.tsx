"use client";

import { useEffect, useState } from "react";
import type { ApiBranch } from "@/lib/api";

const MESSAGE = "Halo GenSA Kidz, saya ingin konsultasi tumbuh kembang anak.";

const FALLBACK_BRANCH: ApiBranch = {
  ID: 0,
  Slug: "lamongan",
  Name: "GenSA Kidz Lamongan",
  Address: "Ruko Tambakboyo Regency No. 01–02, Tikung, Lamongan, Jawa Timur 62281",
  WhatsApp: "6281311992012",
  Phone: "0322314966",
  MapsQuery: "",
  MapsURL: "",
  Schedules: [],
};

export default function ConsultationButton({
  className,
  label = "Daftar Konsultasi",
  branches,
}: {
  className?: string;
  label?: string;
  branches?: ApiBranch[];
}) {
  const list = branches && branches.length > 0 ? branches : [FALLBACK_BRANCH];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Popup konsultasi"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-sm rounded-3xl bg-surface p-7 shadow-[0_30px_60px_-20px_rgba(14,38,34,0.5)]">
            <button
              type="button"
              aria-label="Tutup popup"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink-faint transition-colors hover:bg-surface-2 hover:text-ink"
            >
              ✕
            </button>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marigold-100 text-2xl">
              💬
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-brand-950">
              Konsultasi Tumbuh Kembang
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Terhubung langsung dengan tim kami via WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {list.map((branch) => (
                <a
                  key={branch.Slug}
                  href={`https://wa.me/${branch.WhatsApp}?text=${encodeURIComponent(MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand-800 px-6 py-3 text-center text-sm font-semibold text-surface transition-colors hover:bg-brand-700"
                >
                  Chat {branch.Name} via WhatsApp
                </a>
              ))}
              <a
                href="/kontak"
                onClick={() => setOpen(false)}
                className="rounded-full border border-line px-6 py-3 text-center text-sm font-semibold text-brand-900 transition-colors hover:bg-surface-2"
              >
                Isi Form Kontak
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
