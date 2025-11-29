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
    title: "CS50 Introduction to Computer Science",
    provider: "Harvard University",
    year: "2025",
    certificateUrl: "https://certificates.cs50.io/90df15b6-f3c4-48f0-bb73-9a9e7d5a0c67.pdf?size=letter",
    color: "from-red-800 to-red-600",
    icon: "/harverd.png ",
  }, 
  {
    title: "Asynchronous Web Development",
    provider: "ITI",
    year: "2025",
    certificateUrl: "/Asynchronous Web Development Course_Certificate_En.pdf",
    color: "from-red-800 to-red-600",
    icon: "/itii.png",
  }, 
  {
    title: "Building Dynamic Web Applications using Servlets and JSP",
    provider: "ITI",
    year: "2025",
    certificateUrl: "/Servlets and JSP Course_Certificate-En.pdf",
    color: "from-red-800 to-red-600",
    icon: "/itii.png",
  }, 
  {
    title: "Java Database Connectivity (JDBC)",
    provider: "ITI",
    year: "2025",
    certificateUrl: "/Java Database Connectivity Course_Certificate_En.pdf",
    color: "from-red-800 to-red-600",
    icon: "/itii.png",
  },
  {
    title: "Java SE Development",
    provider: "ITI",
    year: "2025",
    certificateUrl: "/Java Development SE Course_Certificate_En.pdf",
    color: "from-red-800 to-red-600",
    icon: "/itii.png",
  },
  {
    title: "Maven Essentials Training",
    provider: "ITI",
    year: "2025",
    certificateUrl: "/Maven Essentials Training Course_Certificate_En.pdf",
    color: "from-red-800 to-red-600",
    icon: "/itii.png",
  },
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
  { label: "Certifications", value: "8" },
  { label: "Verified", value: "100%" },
  //{ label: "Cloud Platforms", value: "3" },
  { label: "Latest Year", value: "2025" },
];
