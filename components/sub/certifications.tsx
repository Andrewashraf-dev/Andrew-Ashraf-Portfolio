export interface Certification {
  title: string;
  provider: string;
  year: string;
  certificateUrl: string;
  color: string;
  icon?: string;
}

export interface CertificationStat {
  label: string;
  value: string;
}

export const certifications: Certification[] = [
  {
    title: "Mastering Object-Oriented Programming (OOP) using C++",
    provider: "ITI",
    year: "2025",
    certificateUrl: "/cert1.pdf",
    color: "from-red-800 to-red-600",
    icon: "/itii.png",
  },
  {
    title: "Introduction to C++",
    provider: "Sololearn",
    year: "2025",
    certificateUrl: "/cert2.pdf",
    color: "from-yellow-300 to-orange-600",
    icon: "/cert2.png",
  },
  
];

export const certificationStats: CertificationStat[] = [
  { label: "Certifications", value: "2" },
  { label: "Verified", value: "100%" },
  //{ label: "Cloud Platforms", value: "3" },
  { label: "Latest Year", value: "2025" },
];
