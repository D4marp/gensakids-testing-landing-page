import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticles, getBranches, backendImage } from "@/lib/api";
import { fallbackArticleImage } from "@/lib/imageFallbacks";
import ConsultationButton from "@/components/ConsultationButton";

export const dynamicParams = true;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.Slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articles = await getArticles();
  const article = articles.find((a) => a.Slug === slug);
  if (!article) return {};
  return {
    title: `${article.Title} — GenSA Kidz`,
    description: article.Excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [articles, branches] = await Promise.all([getArticles(), getBranches()]);
  const article = articles.find((a) => a.Slug === slug);
  if (!article) notFound();

  const image = backendImage(article.ImagePath) || fallbackArticleImage(article.Slug);
  const related = articles.filter((a) => a.Slug !== article.Slug).slice(0, 2);

  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/artikel"
            className="text-sm font-semibold text-brand-800 underline decoration-marigold-500 decoration-2 underline-offset-4"
          >
            ← Semua Artikel
          </Link>
          <span className="mt-5 block w-fit rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
            {article.Category}
          </span>
          <h1 className="mt-3 font-display text-3xl font-semibold text-brand-950 md:text-5xl">
            {article.Title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-14 md:px-8">
        {image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] shadow-[0_25px_50px_-20px_rgba(31,78,69,0.35)]">
            <Image
              src={image}
              alt={article.Title}
              fill
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-10 flex flex-col gap-5">
          {article.Content.map((paragraph, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-line bg-surface-2 p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] font-medium text-ink">
            Ada kekhawatiran soal tumbuh kembang si kecil? Konsultasikan langsung dengan tim kami.
          </p>
          <ConsultationButton
            branches={branches}
            className="whitespace-nowrap rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand-700"
          />
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-xl font-semibold text-brand-950">
              Artikel Lainnya
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {related.map((r) => {
                const rImage = backendImage(r.ImagePath) || fallbackArticleImage(r.Slug);
                return (
                  <Link
                    key={r.Slug}
                    href={`/artikel/${r.Slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow hover:shadow-[0_14px_30px_-15px_rgba(31,78,69,0.25)]"
                  >
                    {rImage && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={rImage}
                          alt={r.Title}
                          fill
                          sizes="(min-width: 640px) 340px, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-display text-base font-semibold leading-snug text-brand-900">
                        {r.Title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
