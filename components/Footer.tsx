import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { getBranches, getSettings } from "@/lib/api";

const LAYANAN = [
  "Terapi Wicara",
  "Terapi Okupasi",
  "Fisioterapi",
  "Terapi Perilaku",
  "Ortopedagogik",
  "Psikologi Anak",
];

export default async function Footer() {
  const [branches, settings] = await Promise.all([getBranches(), getSettings()]);

  return (
    <footer className="border-t border-line bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Image src={logo} alt="GenSA Kidz" className="h-11 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200">
            Pusat layanan terapi dan stimulasi tumbuh kembang anak di Lamongan —
            one-stop solution untuk anak umum maupun anak berkebutuhan khusus (ABK), usia 0–16 tahun.
          </p>
          <div className="mt-5 flex gap-3">
            {settings.ig_url && (
              <a
                href={settings.ig_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-700 px-3 py-1.5 text-xs font-medium text-brand-100 hover:bg-brand-900"
              >
                Instagram
              </a>
            )}
            {settings.fb_url && (
              <a
                href={settings.fb_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-700 px-3 py-1.5 text-xs font-medium text-brand-100 hover:bg-brand-900"
              >
                Facebook
              </a>
            )}
            {settings.tiktok_url && (
              <a
                href={settings.tiktok_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-700 px-3 py-1.5 text-xs font-medium text-brand-100 hover:bg-brand-900"
              >
                TikTok
              </a>
            )}
            {settings.linkedin_url && (
              <a
                href={settings.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-700 px-3 py-1.5 text-xs font-medium text-brand-100 hover:bg-brand-900"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-surface">Layanan</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-200">
            {LAYANAN.map((item) => (
              <li key={item}>
                <Link href="/layanan" className="hover:text-marigold-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-6 font-display text-sm font-semibold text-surface">Lainnya</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-200">
            <li>
              <Link href="/artikel" className="hover:text-marigold-300">
                Artikel Tumbuh Kembang
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="hover:text-marigold-300">
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/karir" className="hover:text-marigold-300">
                Karir
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          {branches.map((branch) => (
            <div key={branch.Slug}>
              <h3 className="font-display text-sm font-semibold text-surface">{branch.Name}</h3>
              <ul className="mt-3 space-y-2 text-sm text-brand-200">
                <li>{branch.Address}</li>
                <li>
                  <a
                    href={`https://wa.me/${branch.WhatsApp}`}
                    className="hover:text-marigold-300"
                  >
                    WA: +{branch.WhatsApp}
                  </a>
                </li>
                {branch.Phone && (
                  <li>
                    <a href={`tel:${branch.Phone}`} className="hover:text-marigold-300">
                      Telp: {branch.Phone}
                    </a>
                  </li>
                )}
                {branch.Schedules && branch.Schedules.length > 0 && (
                  <li className="pt-1 text-xs text-brand-300">
                    <span className="font-medium text-marigold-400">Jam Layanan:</span>
                    <br />
                    {branch.Schedules.map((s, i) => (
                      <span key={i}>
                        {s.days}: {s.hours}
                        {i < branch.Schedules!.length - 1 && <br />}
                      </span>
                    ))}
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-brand-900 px-5 py-5 text-center text-xs text-brand-200 md:px-8">
        © {new Date().getFullYear()} GenSA Kidz. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
