// NOTE: Testimoni di bawah ini adalah contoh placeholder.
// Ganti dengan testimoni asli dari orang tua pasien GenSA Kidz sebelum publish.
const TESTIMONIALS = [
  {
    name: "Ibu R.",
    role: "Orang tua pasien terapi wicara",
    quote:
      "Perkembangan bicara anak saya terlihat jelas setelah beberapa bulan terapi rutin di sini. Terapisnya sabar dan komunikatif.",
  },
  {
    name: "Ibu S.",
    role: "Orang tua pasien terapi okupasi",
    quote:
      "Prosesnya jelas dari asesmen sampai terapi. Anak saya jadi lebih percaya diri memegang alat tulis sendiri.",
  },
  {
    name: "Bapak D.",
    role: "Orang tua pasien stimulasi anak",
    quote:
      "Lokasinya nyaman untuk anak-anak, tim di sini juga selalu update perkembangan setiap sesi.",
  },
];

export default function Testimonials() {
  return (
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
  );
}
