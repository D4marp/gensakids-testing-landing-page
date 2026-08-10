"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/lib/team";

const FILTERS = [
  { label: "Semua", role: null },
  { label: "Psikolog Klinis Tumbuh Kembang Anak", role: "Psikolog Anak" },
  { label: "Terapis Wicara", role: "Terapis Wicara" },
  { label: "Terapis Okupasi", role: "Terapis Okupasi" },
  { label: "Fisioterapi", role: "Fisioterapis" },
  { label: "Terapis Perilaku", role: "Terapis Perilaku" },
  { label: "Guru Ortopedagogik", role: "Guru Ortopedagogik" },
] as const;

export default function TeamFilter({ team }: { team: TeamMember[] }) {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? team.filter((m) => m.role === active) : team;

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-3">
        {FILTERS.map((f) => {
          const isActive = active === f.role;
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => setActive(f.role)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-marigold-500 text-brand-950"
                  : "border border-line bg-surface text-brand-800 hover:bg-surface-2"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-ink-faint">
          Belum ada foto tenaga profesional untuk kategori ini.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {filtered.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-3 text-center">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[0_14px_30px_-15px_rgba(31,78,69,0.3)]">
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 13vw, (min-width: 768px) 20vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-900">{member.name}</p>
                <p className="text-xs text-ink-faint">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
