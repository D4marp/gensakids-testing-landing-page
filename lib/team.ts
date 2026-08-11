import type { StaticImageData } from "next/image";
import octarianan from "@/public/images/Terapis 2026/Octarianan Psikolog Anak.jpeg";
import risfa from "@/public/images/Terapis 2026/Risfa Terapis Wicara.jpeg";
import eka from "@/public/images/Terapis 2026/Eka Okupasional Terapis.jpeg";
import haya from "@/public/images/Terapis 2026/Haya Okupasional Terapis.png";
import janu from "@/public/images/Terapis 2026/Janu Okupasional Terapis.jpeg";
import nova from "@/public/images/Terapis 2026/Nova Orthopedagogic.jpeg";
import dewi from "@/public/images/Terapis 2026/Dewi Fisioterapis.jpeg";

export type TeamMember = { name: string; role: string; photo: StaticImageData };

export const TEAM: TeamMember[] = [
  { name: "Octariana P., M.Psi., Psikolog", role: "Psikolog Anak", photo: octarianan },
  { name: "Risfa, A.Md.TW", role: "Terapis Wicara", photo: risfa },
  { name: "Eka Nur Novitasari, S.Tr.OT", role: "Terapis Okupasi", photo: eka },
  { name: "Haya, S.Tr.OT", role: "Terapis Okupasi", photo: haya },
  { name: "Janu C. Tyas, A.Md.OT", role: "Terapis Okupasi", photo: janu },
  { name: "Novianan L., S.Pd. PLB.", role: "Guru Ortopedagogik", photo: nova },
  { name: "Dewi L. Fauzia, A.Md.Fis", role: "Fisioterapis", photo: dewi },
];
