const STEPS = [
  {
    n: "01",
    title: "Konsultasi Awal",
    desc: "Orang tua menghubungi kami via WhatsApp/telepon untuk menceritakan kekhawatiran atau tujuan awal.",
  },
  {
    n: "02",
    title: "Asesmen & Evaluasi",
    desc: "Evaluator perkembangan melakukan asesmen menyeluruh untuk memahami kondisi dan kebutuhan anak.",
  },
  {
    n: "03",
    title: "Rencana Terapi",
    desc: "Program terapi disusun secara personal — jenis terapi, frekuensi, dan target perkembangan anak.",
  },
  {
    n: "04",
    title: "Sesi Terapi Berjalan",
    desc: "Anak menjalani sesi terapi rutin bersama terapis, dengan evaluasi berkala bersama orang tua.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
      <svg
        viewBox="0 0 1000 40"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute left-0 top-8 hidden w-full md:block"
        style={{ height: "40px" }}
      >
        <path
          d="M 60 20 C 250 -10, 350 50, 500 20 S 750 -10, 940 20"
          fill="none"
          stroke="var(--color-brand-200)"
          strokeWidth="3"
          strokeDasharray="2 12"
          strokeLinecap="round"
        />
      </svg>

      {STEPS.map((step) => (
        <div key={step.n} className="relative flex flex-col items-start gap-3">
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-200 bg-surface font-display text-lg font-semibold text-brand-800">
            {step.n}
          </span>
          <h3 className="font-display text-lg font-semibold text-brand-900">{step.title}</h3>
          <p className="text-sm leading-relaxed text-ink-soft">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
