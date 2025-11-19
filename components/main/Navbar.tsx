"use client";

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full fixed top-0 z-50 bg-[#03001417] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 px-6 md:px-10">
      <div className="flex justify-between items-center h-[65px]">
        {/* Logo Section */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/navlogo2.png"
            alt="Logo"
            width={40}
            height={40}
            unoptimized
            className="animate-spin-heartbeat neon-glow"
          />

          {/* Desktop Name + Title */}
          <div className="ml-3 hidden md:block">
            <span className="font-bold text-1xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent neon-glow">
              Andrew Ashraf
            </span>
            <div className="text-xs text-white animated-subtitle">Software Engineer</div>
          </div>

          {/* Mobile Name + Title (Centered) */}
          <div className="ml-3 block md:hidden text-center">
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent neon-glow">
                Andrew Ashraf
              </span>
              <div className="text-[11px] text-white animated-subtitle">Software Engineer</div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center justify-between gap-4 px-4 py-2 border border-[#7042f861] bg-[#0300145e] rounded-full text-gray-200">
          <Link href="#home" className="cursor-pointer link-underline">Home</Link>
          <Link href="#skillsandtools" className="cursor-pointer link-underline">Skills</Link>
          <Link href="#projects" className="cursor-pointer link-underline">Projects</Link>
          <Link href="#certifications" className="cursor-pointer link-underline">Certifications</Link>
          <Link href="#experience" className="cursor-pointer link-underline">Experience</Link>
          <Link href="#about-me" className="cursor-pointer link-underline">About Me</Link>
          <Link href="#contact" className="cursor-pointer link-underline">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          {Socials.map((social) => (
            <a
              href={social.href}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={social.src} alt={social.name} className="social-icon" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start bg-[#030014f5] px-4 py-4 rounded-lg text-gray-200 space-y-3 z-50">
          {[
            { href: "#home", label: "Home" },
            { href: "#skillsandtools", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#certifications", label: "Certifications" },
            { href: "#experience", label: "Experience" },
            { href: "#about-me", label: "About Me" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link href={href} key={href}>
              <span onClick={toggleMenu} className="cursor-pointer">
                {label}
              </span>
            </Link>
          ))}

          <div className="flex gap-4 mt-4">
            {Socials.map((social) => (
              <a
                href={social.href}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social.src} alt={social.name} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
