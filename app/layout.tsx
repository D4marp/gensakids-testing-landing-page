import type { Metadata } from "next";
import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { getBranches } from "@/lib/api";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GenSA Kidz — Pusat Terapi & Stimulasi Tumbuh Kembang Anak, Lamongan",
  description:
    "GenSA Kidz adalah pusat layanan terapi tumbuh kembang anak di Lamongan: terapi wicara, terapi okupasi, fisioterapi, terapi perilaku, ortopedagogik, psikologi anak, dan stimulasi anak usia 0–16 tahun.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const branches = await getBranches();
  return (
    <html lang="id" className={`${baloo.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">
        <Header branches={branches} />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
