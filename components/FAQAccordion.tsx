"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Bagaimana tahapan pendaftaran konsultasi di GenSA Kidz?",
    a: "Anda dapat menghubungi kami via WhatsApp atau telepon untuk menjadwalkan konsultasi awal. Tim Psikolog Anak kami akan melakukan asesmen sebelum menyusun rencana terapi yang sesuai.",
  },
  {
    q: "Anak saya sudah punya diagnosis dari dokter, apakah bisa langsung terapi?",
    a: "Bisa. Sampaikan diagnosis dan surat rujukan (jika ada) saat mendaftar, dan bawa dokumen tersebut pada kunjungan pertama agar tim kami dapat menyesuaikan program terapi.",
  },
  {
    q: "Layanan apa saja yang tersedia untuk anak usia dini (di bawah 5 tahun)?",
    a: "Kami menyediakan stimulasi tumbuh kembang, terapi wicara, terapi okupasi, fisioterapi, hingga konsultasi psikologi anak — disesuaikan dengan hasil asesmen awal.",
  },
  {
    q: "Apakah GenSA Kidz menangani anak berkebutuhan khusus (ABK)?",
    a: "Ya. GenSA Kidz melayani anak dengan perkembangan umum maupun anak berkebutuhan khusus, dengan program terapi yang dipersonalisasi berdasarkan hasil asesmen.",
  },
  {
    q: "Berapa lama durasi satu sesi terapi?",
    a: "Durasi dan frekuensi sesi bervariasi tergantung jenis terapi dan rencana yang disusun bersama Psikolog Anak dan terapis. Silakan konsultasikan langsung via WhatsApp untuk info lebih detail.",
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line rounded-3xl border border-line bg-surface">
      {FAQS.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-base font-medium text-brand-900">{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-brand-800 transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
