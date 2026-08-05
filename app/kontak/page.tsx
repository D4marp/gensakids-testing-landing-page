import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak — GenSA Kidz",
  description: "Hubungi GenSA Kidz untuk konsultasi dan pendaftaran terapi tumbuh kembang anak di Lamongan.",
};

export default function KontakPage() {
  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">Kontak</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-brand-950 md:text-5xl">
            Kami siap membantu Anda
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Ceritakan kebutuhan anak Anda, tim kami akan membalas secepatnya melalui WhatsApp.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-line bg-surface p-8">
              <h2 className="font-display text-lg font-semibold text-brand-900">Alamat</h2>
              <p className="mt-2 text-[15px] text-ink-soft">
                Ruko Tambakboyo Regency No. 01–02, Tikung, Lamongan, Jawa Timur 62281
              </p>
            </div>
            <div className="rounded-3xl border border-line bg-surface p-8">
              <h2 className="font-display text-lg font-semibold text-brand-900">Kontak Langsung</h2>
              <p className="mt-2 text-[15px] text-ink-soft">
                WA/Telp:{" "}
                <a href="https://wa.me/6281311992012" className="text-brand-800 underline">
                  +62 813-1199-2012
                </a>
                <br />
                Telepon Klinik: <a href="tel:0322314966" className="text-brand-800 underline">(0322) 314966</a>
              </p>
            </div>
            <div className="min-h-[240px] overflow-hidden rounded-3xl border border-line">
              <iframe
                title="Lokasi GenSA Kidz"
                src="https://www.google.com/maps?q=Ruko+Tambakboyo+Regency+Tikung+Lamongan&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
