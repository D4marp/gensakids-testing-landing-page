// Best-effort visual fallbacks for content that hasn't had a photo uploaded
// through the dashboard yet. Matched by slug/name/caption against the
// photos that were already curated on this site before the backend existed
// — once someone uploads a real photo via /admin, the API's own ImagePath
// takes over automatically (see lib/api.ts's backendImage()).
import type { StaticImageData } from "next/image";
import { SERVICE_IMAGES } from "./serviceImages";
import { ARTICLES } from "./articles";
import { ARTICLE_IMAGES } from "./articleImages";
import { FACILITIES } from "./facilities";
import { TEAM } from "./team";
import { AKTIVITAS_PHOTOS, FASILITAS_PHOTOS } from "./gallery";

export function fallbackServiceImage(slug: string): StaticImageData | undefined {
  return SERVICE_IMAGES[slug];
}

export function fallbackArticleImage(slug: string): StaticImageData | undefined {
  const article = ARTICLES.find((a) => a.slug === slug);
  return article ? ARTICLE_IMAGES[article.imageKey] : undefined;
}

export function fallbackFacilityImage(title: string): StaticImageData | undefined {
  return FACILITIES.find((f) => f.title === title)?.photo;
}

export function fallbackTeamImage(name: string): StaticImageData | undefined {
  return TEAM.find((t) => t.name === name)?.photo;
}

export function fallbackGalleryImage(
  category: string,
  caption: string
): StaticImageData | undefined {
  const list = category === "fasilitas" ? FASILITAS_PHOTOS : AKTIVITAS_PHOTOS;
  return list.find((p) => p.caption === caption)?.src;
}
