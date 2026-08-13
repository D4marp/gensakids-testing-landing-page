import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { getBranches, getSettings } from "@/lib/api";
import { IconClock } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kontak — GenSA Kidz",
  description: "Hubungi GenSA Kidz untuk konsultasi dan pendaftaran terapi tumbuh kembang anak di Lamongan.",
};

export default async function KontakPage() {
  const [branches, settings] = await Promise.all([getBranches(), getSettings()]);

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
            {settings.ig_url && (
              <a
                href={settings.ig_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
              >
                Instagram
              </a>
            )}
            {settings.fb_url && (
              <a
                href={settings.fb_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
              >
                Facebook
              </a>
            )}
            {settings.tiktok_url && (
              <a
                href={settings.tiktok_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
              >
                TikTok
              </a>
            )}
            {settings.linkedin_url && (
              <a
                href={settings.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-200 bg-surface px-4 py-2 text-sm font-medium text-brand-800 hover:bg-brand-100"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-6">
            {branches.map((branch) => (
              <div key={branch.Slug} className="rounded-3xl border border-line bg-surface p-8">
                <h2 className="font-display text-lg font-semibold text-brand-900">
                  {branch.Name}
                </h2>

                {branch.Schedules && branch.Schedules.length > 0 && (
                  <div className="mt-4 rounded-2xl border border-brand-200/80 bg-brand-50/70 p-5 shadow-sm">
                    <div className="flex items-center gap-2.5 text-brand-950">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-marigold-400/30 text-brand-900 shadow-sm">
                        <IconClock className="h-5 w-5 text-marigold-700" />
                      </span>
                      <span className="font-display text-lg md:text-xl font-bold tracking-tight text-brand-950">
                        Jadwal Pelayanan
                      </span>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {branch.Schedules.map((sch, i) => (
                        <div key={i} className="rounded-xl border border-line bg-surface p-4 shadow-sm">
                          <span className="block text-xs font-bold uppercase tracking-wider text-marigold-700">
                            {sch.days}
                          </span>
                          <span className="mt-1 block font-display text-xl font-extrabold text-brand-950">
                            {sch.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <p className="mt-4 text-[15px] text-ink-soft">{branch.Address}</p>
                <p className="mt-3 text-[15px] text-ink-soft">
                  WA:{" "}
                  <a
                    href={`https://wa.me/${branch.WhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-800 underline"
                  >
                    +{branch.WhatsApp}
                  </a>
                  {branch.Phone && (
                    <>
                      <br />
                      Telepon:{" "}
                      <a href={`tel:${branch.Phone}`} className="text-brand-800 underline">
                        {branch.Phone}
                      </a>
                    </>
                  )}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="min-h-[220px] overflow-hidden rounded-2xl border border-line">
                    <iframe
                      title={`Lokasi ${branch.Name}`}
                      src={`https://www.google.com/maps?q=${branch.MapsQuery}&output=embed`}
                      className="h-full w-full min-h-[220px] border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <a
                    href={branch.MapsURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-200 bg-surface px-4 py-2.5 text-sm font-semibold text-brand-900 shadow-sm transition-colors hover:bg-brand-50 hover:text-brand-950"
                  >
                    📍 Buka di Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
