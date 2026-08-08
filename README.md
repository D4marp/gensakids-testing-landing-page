# GenSA Kidz — Website

Website untuk **gensakidz.com**, dibangun dengan **Next.js 15 (App Router)**, **React 19**,
**TypeScript**, dan **Tailwind CSS v4**.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

```
app/
  page.tsx           -> Beranda
  tentang/page.tsx   -> Tentang Kami + FAQ
  layanan/page.tsx   -> Detail 8 layanan
  kontak/page.tsx    -> Form kontak + peta
  layout.tsx         -> Header, Footer, tombol WhatsApp mengambang
  globals.css        -> Design tokens (warna, font) — @theme Tailwind v4
components/          -> Komponen UI (Hero, ServiceCard, FAQAccordion, dst.)
lib/services.ts      -> Data 8 layanan (judul, deskripsi, ikon)
```

## Konsep Desain

- **Warna**: hijau tua/teal (`brand`) untuk kesan tepercaya & klinis, marigold hangat
  untuk aksen energik, latar sage-off-white agar lembut di mata orang tua & anak.
- **Tipografi**: `Fraunces` (display, hangat & berkarakter) + `Plus Jakarta Sans` (body,
  mudah dibaca semua usia).
- **Elemen signature**: motif "jalur tumbuh" (garis lengkung putus-putus) sebagai
  metafora visual perjalanan tumbuh kembang anak — muncul di hero dan menghubungkan
  4 langkah alur pendaftaran.

## Yang perlu diisi/diganti sebelum publish

- [ ] Nomor WhatsApp & telepon — masih memakai data yang Anda berikan, cek ulang keakuratannya.
- [ ] Testimoni di `components/Testimonials.tsx` masih **placeholder** — ganti dengan testimoni asli.
- [ ] Foto/gambar nyata (tim, layanan, kegiatan anak) — saat ini masih pakai foto stok.
- [ ] Statistik di beranda (tahun berdiri, jumlah layanan) sudah faktual dari data yang
      Anda berikan; tambahkan jumlah pasien/sesi jika ada datanya.
- [ ] Sesuaikan jam operasional layanan di section "Jadwal & Lokasi" (belum ada info jam pasti).

## Catatan teknis

- Proyek ini dibuat filenya secara manual (belum di-`npm install`/build di sandbox ini
  karena sandbox tidak punya akses internet ke registry npm). Jalankan `npm install`
  di komputer Anda untuk memverifikasi build sebelum deploy.
- Form kontak saat ini mengarahkan ke WhatsApp (belum ada backend/database).
# gensakids-testing-landing-page
