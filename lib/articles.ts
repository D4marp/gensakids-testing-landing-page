export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  imageKey:
    | "bicara"
    | "deteksi-dini"
    | "motorik-halus"
    | "psikolog"
    | "fisioterapi"
    | "okupasi";
  content: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "tanda-keterlambatan-bicara-anak",
    title: "Tanda-tanda Keterlambatan Bicara pada Anak yang Perlu Diwaspadai",
    category: "Bicara & Bahasa",
    excerpt:
      "Setiap anak punya waktu berkembang yang berbeda, tapi ada beberapa tanda keterlambatan bicara yang sebaiknya tidak ditunda untuk dikonsultasikan.",
    imageKey: "bicara",
    content: [
      "Banyak orang tua bertanya-tanya, “Apakah wajar anak saya belum banyak bicara di usia ini?” Wajar jika setiap anak punya kecepatan berkembang yang berbeda, namun ada beberapa tanda yang sebaiknya tidak diabaikan.",
      "Di usia 12 bulan, anak umumnya sudah mulai mengoceh dengan pola suara yang bervariasi. Di usia 18 bulan, sebagian besar anak sudah mengucapkan beberapa kata sederhana seperti “mama” atau “papa”. Jika di usia 2 tahun anak belum mengucapkan kombinasi dua kata, ini bisa menjadi salah satu tanda yang perlu diperhatikan.",
      "Tanda lain yang perlu diwaspadai antara lain: anak tampak kesulitan memahami instruksi sederhana, jarang melakukan kontak mata saat diajak bicara, atau lebih banyak menunjuk dan merengek dibanding mencoba mengucapkan kata.",
      "Deteksi dini sangat penting karena semakin cepat ditangani, semakin besar peluang anak mengejar ketertinggalan perkembangan bahasanya. Terapi wicara yang dilakukan sejak dini terbukti membantu anak berkomunikasi lebih efektif seiring bertambahnya usia.",
      "Jika Anda mengamati salah satu tanda di atas pada si kecil, jangan ragu untuk berkonsultasi dengan evaluator perkembangan anak agar mendapatkan gambaran yang lebih jelas dan penanganan yang tepat.",
    ],
  },
  {
    slug: "pentingnya-deteksi-dini-tumbuh-kembang",
    title: "Kenapa Deteksi Dini Tumbuh Kembang Anak Itu Penting?",
    category: "Deteksi Dini",
    excerpt:
      "Semakin dini kondisi anak terdeteksi, semakin besar peluang penanganan berjalan optimal. Kenali kenapa deteksi dini jadi langkah krusial.",
    imageKey: "deteksi-dini",
    content: [
      "Masa 0–5 tahun sering disebut sebagai golden age karena pada periode ini otak anak berkembang sangat pesat. Inilah alasan mengapa deteksi dini terhadap potensi hambatan tumbuh kembang menjadi sangat penting dilakukan sesegera mungkin.",
      "Deteksi dini bukan berarti mencari-cari masalah, melainkan memastikan anak berkembang sesuai tahapannya dan segera mendapat stimulasi tambahan jika diperlukan. Banyak kondisi yang jika ditangani sejak dini, hasilnya jauh lebih optimal dibanding ditangani saat anak sudah lebih besar.",
      "Beberapa aspek yang perlu dipantau orang tua meliputi perkembangan motorik (kasar dan halus), bahasa dan komunikasi, kemampuan sosial-emosional, serta kemandirian sehari-hari sesuai usia anak.",
      "Pemeriksaan tumbuh kembang secara berkala, baik melalui posyandu, dokter anak, maupun pusat layanan tumbuh kembang, membantu orang tua mendapatkan gambaran objektif — bukan sekadar membandingkan dengan anak lain.",
      "Jika ada kekhawatiran mengenai perkembangan si kecil, konsultasi dan asesmen menyeluruh adalah langkah awal yang tepat untuk memastikan kebutuhan anak terpetakan dengan baik sebelum menyusun rencana stimulasi atau terapi.",
    ],
  },
  {
    slug: "stimulasi-motorik-halus-di-rumah",
    title: "5 Cara Sederhana Menstimulasi Motorik Halus Anak di Rumah",
    category: "Stimulasi Anak",
    excerpt:
      "Melatih motorik halus tidak harus dengan alat khusus. Berikut aktivitas sederhana di rumah yang bisa mendukung kemampuan menulis dan menggambar anak.",
    imageKey: "motorik-halus",
    content: [
      "Motorik halus adalah kemampuan menggunakan otot-otot kecil di tangan dan jari, yang penting untuk aktivitas seperti memegang pensil, mengancingkan baju, atau menggunakan sendok. Kemampuan ini bisa dilatih lewat aktivitas sederhana di rumah.",
      "1. Bermain plastisin atau adonan mainan — meremas dan membentuk adonan melatih kekuatan genggaman dan koordinasi jari anak.",
      "2. Meronce manik-manik — memasukkan tali ke lubang manik-manik melatih koordinasi mata-tangan sekaligus kesabaran anak.",
      "3. Menggunting kertas — dengan pengawasan orang tua, aktivitas ini melatih kontrol otot jari dan koordinasi dua tangan.",
      "4. Menuang air dari satu wadah ke wadah lain — aktivitas ini melatih kontrol gerakan dan konsentrasi.",
      "5. Mewarnai dan menggambar bebas — selain melatih motorik halus, aktivitas ini juga mendukung kreativitas anak.",
      "Jika anak tampak kesulitan signifikan dibanding teman sebayanya dalam aktivitas-aktivitas di atas, terapi okupasi dapat membantu melatih motorik halus secara lebih terarah dan terukur.",
    ],
  },
  {
    slug: "kapan-konsultasi-psikolog-anak",
    title: "Kapan Sebaiknya Orang Tua Membawa Anak ke Psikolog Anak?",
    category: "Psikologi Anak",
    excerpt:
      "Konsultasi ke psikolog anak bukan hanya untuk kondisi berat. Kenali situasi-situasi yang sebaiknya mendapat pendampingan profesional.",
    imageKey: "psikolog",
    content: [
      "Banyak orang tua menunda konsultasi ke psikolog anak karena menganggapnya hanya diperlukan untuk kondisi yang “berat”. Padahal, psikolog anak juga dapat membantu berbagai situasi yang lebih umum dalam keseharian.",
      "Beberapa situasi yang bisa dipertimbangkan untuk konsultasi antara lain: anak sulit mengendalikan emosi secara berlebihan untuk usianya, kesulitan beradaptasi di lingkungan baru, menunjukkan kecemasan berlebih, atau mengalami perubahan perilaku setelah kejadian tertentu.",
      "Konsultasi psikologi juga bermanfaat untuk kebutuhan seperti tes kesiapan sekolah, tes IQ, maupun tes minat bakat — membantu orang tua memahami potensi dan kebutuhan belajar anak secara lebih objektif.",
      "Sesi konsultasi awal biasanya berupa wawancara dengan orang tua dan observasi terhadap anak, untuk memahami konteks permasalahan sebelum menentukan langkah selanjutnya.",
      "Membawa anak ke psikolog bukan tanda kegagalan orang tua — justru sebaliknya, ini adalah bentuk perhatian untuk memastikan anak tumbuh dengan kesehatan mental yang baik.",
    ],
  },
  {
    slug: "peran-fisioterapi-tumbuh-kembang-anak",
    title: "Mengenal Peran Fisioterapi dalam Tumbuh Kembang Anak",
    category: "Fisioterapi",
    excerpt:
      "Fisioterapi anak tidak hanya untuk pemulihan cedera, tapi juga berperan penting dalam mendukung perkembangan motorik kasar anak.",
    imageKey: "fisioterapi",
    content: [
      "Ketika mendengar kata “fisioterapi”, banyak orang membayangkan penanganan untuk orang dewasa yang cedera. Padahal, fisioterapi juga memiliki peran penting dalam tumbuh kembang anak, khususnya pada aspek motorik kasar.",
      "Fisioterapi anak membantu menangani berbagai kondisi seperti keterlambatan duduk, merangkak, atau berjalan, gangguan keseimbangan dan koordinasi, hingga kelainan postur tubuh sejak usia dini.",
      "Melalui latihan yang dirancang sesuai usia dan kondisi anak, fisioterapis membantu melatih kekuatan otot, keseimbangan, dan koordinasi gerak — dengan pendekatan yang menyenangkan agar anak tetap nyaman menjalani sesi terapi.",
      "Penanganan sejak dini pada gangguan motorik kasar dapat mencegah kompensasi gerak yang keliru di kemudian hari, sehingga anak dapat beraktivitas dan bermain sesuai dengan tahapan usianya.",
      "Jika anak menunjukkan keterlambatan dalam pencapaian motorik kasar dibanding rentang usia normal, konsultasi dengan fisioterapis anak dapat membantu memastikan penanganan yang tepat sejak awal.",
    ],
  },
  {
    slug: "terapi-okupasi-untuk-anak-abk",
    title: "ABK dan Pentingnya Terapi Okupasi Sejak Dini",
    category: "Terapi Okupasi",
    excerpt:
      "Bagi anak berkebutuhan khusus, terapi okupasi berperan besar dalam melatih kemandirian dan kesiapan mengikuti aktivitas belajar.",
    imageKey: "okupasi",
    content: [
      "Bagi anak berkebutuhan khusus (ABK), kemandirian dalam aktivitas sehari-hari sering menjadi tantangan tersendiri — mulai dari makan sendiri, memakai baju, hingga memegang alat tulis. Di sinilah terapi okupasi berperan penting.",
      "Terapi okupasi berfokus pada melatih activity daily living skill (ADL) atau kemandirian sehari-hari, mengembangkan motorik halus, serta mempersiapkan anak mengikuti aktivitas belajar di sekolah.",
      "Pendekatan terapi disesuaikan dengan kondisi masing-masing anak — bisa melalui permainan sensorik, latihan menulis bertahap, atau aktivitas yang melatih koordinasi dan perhatian anak.",
      "Konsistensi menjadi kunci keberhasilan terapi okupasi. Selain sesi rutin bersama terapis, dukungan orang tua dengan melanjutkan latihan sederhana di rumah sangat membantu mempercepat perkembangan anak.",
      "Setiap anak berkebutuhan khusus memiliki potensi masing-masing. Dengan penanganan yang tepat dan konsisten, anak dapat mencapai kemandirian sesuai kemampuan optimalnya.",
    ],
  },
];
