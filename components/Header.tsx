"use client";

import Link from "next/link";
import { useState } from "react";
import ConsultationButton from "./ConsultationButton";

const NAV_LINKS = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/artikel", label: "Artikel" },
  { href: "/karir", label: "Karir" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 font-display text-base font-semibold text-surface">
            G
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-brand-900">
            GenSA Kidz
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-ink-soft transition-colors hover:text-brand-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <ConsultationButton className="hidden rounded-full bg-marigold-500 px-5 py-2.5 text-[15px] font-semibold text-brand-950 shadow-sm transition-transform hover:scale-[1.03] hover:bg-marigold-600 md:inline-block" />

        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
        >
          <span className={`h-0.5 w-5 bg-brand-900 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-brand-900 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-brand-900 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-surface px-5 pb-5 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink-soft hover:bg-surface-2"
            >
              {link.label}
            </Link>
          ))}
          <ConsultationButton className="mt-2 rounded-full bg-marigold-500 px-5 py-2.5 text-center text-[15px] font-semibold text-brand-950" />
        </nav>
      )}
    </header>
  );
}
