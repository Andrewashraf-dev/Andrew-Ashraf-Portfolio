import AboutMe from "@/components/main/AboutMe";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import SkillsAndTools from "@/components/main/SkillsAndTools";
import CertificationsSection from "@/components/main/CertificationsSection";

import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <SkillsAndTools />
        <Encryption />
        <Projects />
        <CertificationsSection />
        <AboutMe/>
      </div>
    </main>
  );
}
