import serviceAsesmen from "@/public/images/foto terapis/ASS 2.png";
import serviceSpeech from "@/public/images/foto terapis/PD 1.jpeg";
import serviceOccupational from "@/public/images/foto terapis/ASS 1.png";
import serviceFisioterapi from "@/public/images/Foto Dayli GenSA Kidz/Gensa kidz Lamongan/Foto3.jpg";
import servicePerilaku from "@/public/images/foto terapis/PD 4.jpg";
import serviceOrtopedagogik from "@/public/images/foto terapis/PD 3.jpg";
import servicePsikologi from "@/public/images/foto terapis/PD 5.jpg";
import serviceStimulasi from "@/public/images/Foto Dayli GenSA Kidz/Gensa kidz Babat/Foto6.jpg";

export const SERVICE_IMAGES: Record<string, typeof serviceSpeech> = {
  "asesmen-tumbuh-kembang": serviceAsesmen,
  "terapi-wicara": serviceSpeech,
  "terapi-okupasi": serviceOccupational,
  fisioterapi: serviceFisioterapi,
  "terapi-perilaku": servicePerilaku,
  ortopedagogik: serviceOrtopedagogik,
  "psikologi-anak": servicePsikologi,
  "stimulasi-anak": serviceStimulasi,
};
