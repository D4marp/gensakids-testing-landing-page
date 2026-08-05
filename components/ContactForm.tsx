"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Halo GenSA Kidz, perkenalkan saya ${name || "-"}.`,
      childAge ? `Usia anak: ${childAge}.` : "",
      message ? `Pesan: ${message}` : "",
    ]
      .filter(Boolean)
      .join(" ");
    const url = `https://wa.me/6281311992012?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-line bg-surface p-8"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Nama Anda
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl border border-line bg-canvas px-4 py-2.5 text-[15px] text-ink outline-none focus:border-brand-500"
          placeholder="Nama lengkap"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="childAge" className="text-sm font-medium text-ink">
          Usia Anak
        </label>
        <input
          id="childAge"
          type="text"
          value={childAge}
          onChange={(e) => setChildAge(e.target.value)}
          className="rounded-xl border border-line bg-canvas px-4 py-2.5 text-[15px] text-ink outline-none focus:border-brand-500"
          placeholder="Contoh: 3 tahun"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Pesan
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none rounded-xl border border-line bg-canvas px-4 py-2.5 text-[15px] text-ink outline-none focus:border-brand-500"
          placeholder="Ceritakan kebutuhan atau kekhawatiran Anda"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-marigold-500 px-6 py-3 text-[15px] font-semibold text-brand-950 hover:bg-marigold-600"
      >
        Kirim via WhatsApp
      </button>
      <p className="text-xs text-ink-faint">
        Tombol ini akan membuka WhatsApp dengan pesan yang sudah terisi otomatis.
      </p>
    </form>
  );
}
