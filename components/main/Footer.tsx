"use client";

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[50] relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>


            <a
              href="https://github.com/AndrewAshraf-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a
              href="https://instagram.com/iamandrewashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a
              href="https://twitter.com/iamandrewashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter / X</span>
            </a>

            <a
              href="https://linkedin.com/in/andrewashraf-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>

          {/* About */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <a
              href="#"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
            >
              <span className="text-[15px] ml-[6px]">Learning About Me</span>
            </a>

            <a
              href="mailto:Andrew.Ashraf.Amin@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:underline"
            >
              <span className="text-[15px] ml-[6px]">Andrew.Ashraf.Amin@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Andrew Ashraf 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
