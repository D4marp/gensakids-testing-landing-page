// Central fetch layer for the GenSA Kidz dashboard backend. All content that
// can be edited from /admin (services, jobs, articles, facilities, gallery,
// team, branches, testimonials, site text) is read from here at request
// time instead of the old hardcoded lib/*.ts files.

export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://gensakidz-dashboard-be.paas.hcm-lab.id";

// Revalidate every 5 minutes — content changes in the dashboard don't need
// to be instant, and this keeps the site fast without being fully static.
const REVALIDATE_SECONDS = 300;

async function apiGet<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${BACKEND_URL}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    // Backend unreachable (deploy hiccup, DNS, etc.) — fail soft so the
    // site keeps rendering instead of crashing the page.
    return fallback;
  }
}

/** Prefixes an uploaded-photo path (e.g. "/uploads/xyz.jpg") with the backend origin. */
export function backendImage(path: string | undefined | null): string | null {
  if (!path) return null;
  return `${BACKEND_URL}${path}`;
}

export type ApiFAQItem = { q: string; a: string };
export type ApiService = {
  ID: number;
  Slug: string;
  Title: string;
  Icon: string;
  Short: string;
  Detail: string[];
  ForWho: string;
  Signs: string[];
  Goal: string;
  Process: string[];
  Duration: string;
  Professionals: string;
  WhatToBring: string[];
  ExtraFAQ: ApiFAQItem[] | null;
  ImagePath: string;
  SortOrder: number;
};

export type ApiJob = {
  ID: number;
  Slug: string;
  Title: string;
  Branch: string;
  Type: string;
  Status: string;
  Description: string;
  Requirements: string[];
  ImagePath: string;
  SortOrder: number;
};

export type ApiArticle = {
  ID: number;
  Slug: string;
  Title: string;
  Category: string;
  Excerpt: string;
  Content: string[];
  ImagePath: string;
  SortOrder: number;
};

export type ApiFacility = {
  ID: number;
  Title: string;
  Description: string;
  Icon: string;
  ImagePath: string;
  SortOrder: number;
};

export type ApiGalleryPhoto = {
  ID: number;
  Category: "aktivitas" | "fasilitas";
  Caption: string;
  ImagePath: string;
  SortOrder: number;
};

export type ApiTeamMember = {
  ID: number;
  Name: string;
  Role: string;
  ImagePath: string;
  SortOrder: number;
};

export type ApiScheduleItem = { days: string; hours: string };
export type ApiBranch = {
  ID: number;
  Slug: string;
  Name: string;
  Address: string;
  WhatsApp: string;
  Phone: string;
  MapsQuery: string;
  MapsURL: string;
  Schedules: ApiScheduleItem[] | null;
};

export type ApiTestimonial = {
  ID: number;
  Name: string;
  Role: string;
  Quote: string;
  SortOrder: number;
};

export type ApiSettings = Record<string, string>;

export const getServices = () => apiGet<ApiService[]>("/api/services", []);
export const getJobs = () => apiGet<ApiJob[]>("/api/jobs", []);
export const getArticles = () => apiGet<ApiArticle[]>("/api/articles", []);
export const getFacilities = () => apiGet<ApiFacility[]>("/api/facilities", []);
export const getGallery = () => apiGet<ApiGalleryPhoto[]>("/api/gallery", []);
export const getTeam = () => apiGet<ApiTeamMember[]>("/api/team", []);
export const getBranches = () => apiGet<ApiBranch[]>("/api/branches", []);
export const getTestimonials = () => apiGet<ApiTestimonial[]>("/api/testimonials", []);
export const getSettings = () => apiGet<ApiSettings>("/api/settings", {});

/** Splits the "misi" setting (one point per line) into a clean array. */
export function misiToList(misi: string): string[] {
  return misi
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}
