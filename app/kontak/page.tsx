import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { BRANCHES } from "@/lib/branches";

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
            Ceritakan kebutuhan anak Anda, tim kami di Lamongan akan membalas secepatnya
            melalui WhatsApp.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/gensakidz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/GenSAKidz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@gensa.kidz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
            >
              TikTok
            </a>
            <a
              href="https://www.linkedin.com/company/gensa-kidz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-6">
            {BRANCHES.map((branch) => (
              <div key={branch.slug} className="rounded-3xl border border-line bg-surface p-8">
                <h2 className="font-display text-lg font-semibold text-brand-900">
                  {branch.name}
                </h2>
                <p className="mt-2 text-[15px] text-ink-soft">{branch.address}</p>
                <p className="mt-3 text-[15px] text-ink-soft">
                  WA:{" "}
                  <a
                    href={`https://wa.me/${branch.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 underline"
                  >
                    +{branch.whatsapp.replace(/^62/, "62 ")}
                  </a>
                  {branch.phone && (
                    <>
                      <br />
                      Telepon:{" "}
                      <a href={`tel:${branch.phone}`} className="text-brand-800 underline">
                        (0322) 314966
                      </a>
                    </>
                  )}
                </p>
                <div className="mt-4 min-h-[200px] overflow-hidden rounded-2xl border border-line">
                  <iframe
                    title={`Lokasi ${branch.name}`}
                    src={`https://www.google.com/maps?q=${branch.mapsQuery}&output=embed`}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
