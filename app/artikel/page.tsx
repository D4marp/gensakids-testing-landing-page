import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticles, backendImage } from "@/lib/api";
import { fallbackArticleImage } from "@/lib/imageFallbacks";

export const metadata: Metadata = {
  title: "Artikel Tumbuh Kembang — GenSA Kidz",
  description:
    "Bacaan seputar tumbuh kembang anak: bicara & bahasa, motorik, psikologi anak, fisioterapi, dan terapi okupasi dari tim GenSA Kidz.",
};

export default async function ArtikelPage() {
  const articles = await getArticles();

  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Artikel
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-brand-950 md:text-5xl">
            Bacaan Seputar Tumbuh Kembang Anak
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Kumpulan artikel dari tim GenSA Kidz untuk membantu orang tua memahami tahapan
            tumbuh kembang, tanda-tanda yang perlu diwaspadai, dan cara mendukung
            perkembangan anak sehari-hari.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const image = backendImage(article.ImagePath) || fallbackArticleImage(article.Slug);
            return (
              <Link
                key={article.Slug}
                href={`/artikel/${article.Slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(31,78,69,0.3)]"
              >
                {image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={article.Title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="w-fit rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
                    {article.Category}
                  </span>
                  <h2 className="font-display text-lg font-semibold leading-snug text-brand-950">
                    {article.Title}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-soft">{article.Excerpt}</p>
                  <span className="mt-auto pt-2 text-sm font-semibold text-brand-800 underline decoration-marigold-500 decoration-2 underline-offset-4">
                    Baca selengkapnya
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
