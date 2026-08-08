// Testimoni asli dari Highlight Instagram "Kata Parents" @gensakidz.
const TESTIMONIALS = [
  {
    name: "Fany R.",
    role: "Orang tua pasien terapi wicara",
    quote:
      "Alhamdulillah setelah terapi 1 bulan di GenSA Kidz, Esa banyak sekali perubahannya — lebih cepat menangkap, konsentrasinya mulai bagus, dan kosakatanya lebih banyak. Saya sebagai orang tua juga dapat banyak ilmu dari terapisnya yang baik dan sabar.",
  },
  {
    name: "Ika C.",
    role: "Orang tua pasien terapi perilaku",
    quote:
      "GenSA Kidz the best! Anak saya yang awalnya hiperaktif dan susah diajak komunikasi, sekarang hipernya mulai menurun dan mulai mengerti kalau dikasih tahu. Baru 3 kali pertemuan sudah kelihatan hasilnya.",
  },
  {
    name: "Mega K.",
    role: "Orang tua pasien fisioterapi",
    quote:
      "Awalnya putri kami sangat minim motorik, sensori, dan belum kuat secara postural. Setelah 2 bulan belajar di GenSA Kidz, banyak sekali kemajuan yang ditunjukkan. Terima kasih GenSA Kidz.",
  },
  {
    name: "Sinta D.",
    role: "Orang tua pasien terapi wicara",
    quote:
      "Anak saya sudah terapi selama sebulan dan perubahannya signifikan — dari yang tadinya dipanggil tidak merespons, sekarang sudah mengerti kalau dipanggil namanya.",
  },
  {
    name: "Maria U.",
    role: "Orang tua pasien stimulasi anak",
    quote:
      "Bersyukur sekali dipertemukan dengan GenSA Kidz. Anak kami yang awalnya kontak mata tidak ada dan konsentrasi minim, sekarang sudah cerewet, suka bercerita, dan konsentrasinya mulai terbentuk.",
  },
  {
    name: "Orang tua Sheryl",
    role: "Orang tua pasien terapi okupasi",
    quote:
      "Sheryl awalnya tipe anak yang tidak mau dipegang orang lain, tapi terapisnya super sabar sampai Sheryl mau diarahkan belajar motorik kasar dan halusnya. Sekarang gerakannya lebih kalem dan konsentrasinya lebih dapat.",
  },
];

export default function Testimonials() {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-3xl bg-surface p-6 shadow-[0_10px_30px_-15px_rgba(31,78,69,0.2)]"
          >
            <blockquote className="font-display text-[17px] italic leading-relaxed text-brand-900">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="block font-semibold text-ink">{t.name}</span>
              <span className="text-ink-faint">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-ink-faint">
        Sumber: Highlight Instagram{" "}
        <a
          href="https://www.instagram.com/gensakidz/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-ink"
        >
          “Kata Parents” @gensakidz
        </a>
      </p>
    </div>
  );
}
