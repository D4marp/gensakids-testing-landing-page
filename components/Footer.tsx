import Link from "next/link";

const LAYANAN = [
  "Terapi Wicara",
  "Terapi Okupasi",
  "Fisioterapi",
  "Terapi Perilaku",
  "Ortopedagogik",
  "Psikologi Anak",
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-brand-950 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-marigold-500 font-display text-base font-semibold text-brand-950">
              G
            </span>
            <span className="font-display text-lg font-semibold text-surface">GenSA Kidz</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-200">
            Pusat layanan terapi dan stimulasi tumbuh kembang anak di Lamongan —
            one-stop solution untuk anak umum maupun anak berkebutuhan khusus (ABK), usia 0–16 tahun.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/gensakidz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-700 px-3 py-1.5 text-xs font-medium text-brand-100 hover:bg-brand-900"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/GenSAKidz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand-700 px-3 py-1.5 text-xs font-medium text-brand-100 hover:bg-brand-900"
            >
              Facebook
            </a>
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
              <Link href="/karir" className="hover:text-marigold-300">
                Karir
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-surface">Kontak</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-brand-200">
            <li>Ruko Tambakboyo Regency No. 01–02,<br />Tikung, Lamongan, Jawa Timur 62281</li>
            <li>
              <a href="https://wa.me/6281311992012" className="hover:text-marigold-300">
                WA: +62 813-1199-2012
              </a>
            </li>
            <li>
              <a href="tel:0322314966" className="hover:text-marigold-300">
                Telp: (0322) 314966
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-900 px-5 py-5 text-center text-xs text-brand-200 md:px-8">
        © {new Date().getFullYear()} GenSA Kidz. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
