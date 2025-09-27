"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";
import StarsCanvas from "./StarBackground"; // adjust if needed

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full overflow-hidden" id="home">
      
      {/* 🎥 Video background - base layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-[-340px] h-full w-full left-0 z-0 object-cover rotate-180"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* 🌌 StarsCanvas - layered above video */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <StarsCanvas />
      </div>

      {/* 🔤 Foreground content - on top */}
      <div className="relative z-20">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
