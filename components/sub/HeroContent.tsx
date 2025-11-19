"use client";
import Terminal from "@/components/sub/Terminal";
import React from "react";
import { motion, Variants } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const mobileImageAnimation = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
});

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 mt-16 sm:mt-20 lg:mt-32 w-full z-[20] min-h-[80vh] overflow-visible"
    >
      {/* Mobile Image Section */}
      <motion.div
        variants={mobileImageAnimation(0.3)}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[280px] sm:max-w-[320px] mb-6 lg:hidden flex justify-center items-center relative mx-auto"
      >
        <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-40 rounded-xl"></div>
        <Image
          src="/Andrew.jpg"
          alt="Andrew Ashraf"
          height={320}
          width={280}
          className="rounded-xl w-full h-auto"
          style={{ imageRendering: 'crisp-edges' }}
          priority
        />
      </motion.div>

      {/* Content Section - Fixed for mobile */}
      <div className="h-full w-full flex flex-col gap-3 sm:gap-4 justify-center m-auto text-center lg:text-start max-w-4xl">
        {/* Name + Title */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="flex flex-col gap-2 mb-2"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 leading-tight">
            Andrew Ashraf
          </h1>
          <motion.p
            variants={slideInFromLeft(0.5)}
            className="text-lg sm:text-xl lg:text-2xl text-white"
          >
            Software Engineer
          </motion.p>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex items-center justify-center lg:justify-start text-sm sm:text-base mb-2 sm:mb-3"
          style={{
            color: '#00f0ff',
            textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#00f0ff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
            />
          </svg>
          Cairo, Egypt
        </motion.div>

        {/* Terminal - Fixed width for mobile */}
        <motion.div 
          variants={slideInFromLeft(0.6)} 
          className="w-full max-w-full mb-3 sm:mb-4"
        >
          <Terminal />
        </motion.div>

        {/* Description - Fixed overflow */}
        <motion.p
          variants={slideInFromLeft(0.7)}
          className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5 leading-relaxed max-w-full overflow-visible px-2 sm:px-0"
        >
          Detail-oriented Junior Software Engineer specializing in backend
          development. Experienced in building scalable APIs, optimizing system
          performance, and delivering reliable software solutions. Passionate
          about solving complex problems and contributing to innovative
          projects.
        </motion.p>

        {/* CTA Button - Always visible */}
        <motion.a
          href="/Andrew Ashraf Amin.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variants={slideInFromLeft(0.8)}
          className="py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white cursor-pointer rounded-lg w-full max-w-[200px] mx-auto lg:mx-0 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 text-base font-medium shadow-lg hover:from-purple-700 hover:to-cyan-700 active:scale-95 mt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View CV
        </motion.a>
      </div>

      {/* Desktop Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden lg:flex justify-center items-center relative"
      >
        <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-60 rounded-xl"></div>
        <Image
          src="/Andrew.jpg"
          alt="Andrew Ashraf"
          height={550}
          width={450}
          className="rounded-xl"
          style={{ imageRendering: 'crisp-edges' }}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;