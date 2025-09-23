import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#home"
          className="h-auto w-auto flex flex-row items-center"
        >
         <div className="ml-[10px] hidden md:flex items-center space-x-2">
  {/* Logo with spin + heartbeat */}
  <img src="/Navlogo.png" alt="Logo" className="w-10 h-10 animate-spin-heartbeat neon-glow" />

  <div className="ml-[10px] hidden md:block">
    <span className="font-bold text-1xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent neon-glow">
      Andrew Ashraf
    </span>
    <div className="text-xs text-white animated-subtitle">
      Software Engineer
    </div>
  </div>
</div>

        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#home" className="cursor-pointer">
              Home
            </a>
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.name}>
              <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
