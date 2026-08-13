import type { Metadata } from "next";
import GalleryTabs from "@/components/GalleryTabs";
import { getGallery, backendImage } from "@/lib/api";
import { fallbackGalleryImage } from "@/lib/imageFallbacks";

export const metadata: Metadata = {
  title: "Galeri — GenSA Kidz",
  description:
    "Galeri foto kegiatan terapi dan suasana ruang di GenSA Kidz Lamongan — momen asesmen, stimulasi, dan sesi terapi bersama tim kami.",
};

export default async function GaleriPage() {
  const gallery = await getGallery();

  const toPhoto = (item: (typeof gallery)[number]) => ({
    src: backendImage(item.ImagePath) || fallbackGalleryImage(item.Category, item.Caption) || "",
    caption: item.Caption,
  });

  const aktivitas = gallery.filter((g) => g.Category === "aktivitas" && (g.ImagePath || fallbackGalleryImage(g.Category, g.Caption))).map(toPhoto);
  const fasilitas = gallery.filter((g) => g.Category === "fasilitas" && (g.ImagePath || fallbackGalleryImage(g.Category, g.Caption))).map(toPhoto);

  return (
    <>
      <section className="bg-brand-100 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-marigold-600">
            Galeri
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-brand-950 md:text-5xl">
            Momen keseharian di GenSA Kidz
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
            Intip berbagai sesi terapi, stimulasi, dan suasana ruang di GenSA Kidz Lamongan.
            Setiap foto menyimpan cerita perjalanan tumbuh kembang anak bersama tim kami.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <GalleryTabs aktivitas={aktivitas} fasilitas={fasilitas} />
      </section>
    </>
  );
}
