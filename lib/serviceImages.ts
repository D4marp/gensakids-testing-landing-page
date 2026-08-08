import serviceSpeech from "@/public/images/service-speech.jpg";
import serviceOccupational from "@/public/images/service-occupational.jpg";
import serviceFisioterapi from "@/public/images/service-fisioterapi.jpg";
import servicePerilaku from "@/public/images/service-perilaku.jpg";
import serviceOrtopedagogik from "@/public/images/service-ortopedagogik.jpg";
import servicePsikologi from "@/public/images/service-psikologi.jpg";
import serviceStimulasi from "@/public/images/service-stimulasi.jpg";
import serviceAsesmen from "@/public/images/service-asesmen.jpg";

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
