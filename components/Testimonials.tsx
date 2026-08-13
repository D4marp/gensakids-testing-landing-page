import { getTestimonials } from "@/lib/api";

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  if (testimonials.length === 0) return null;

  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.ID}
            className="flex flex-col justify-between rounded-3xl bg-surface p-6 shadow-[0_10px_30px_-15px_rgba(31,78,69,0.2)]"
          >
            <blockquote className="font-display text-[17px] italic leading-relaxed text-brand-900">
              “{t.Quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="block font-semibold text-ink">{t.Name}</span>
              <span className="text-ink-faint">{t.Role}</span>
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
