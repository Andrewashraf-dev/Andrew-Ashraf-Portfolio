"use client";
import Terminal from "@/components/sub/Terminal";
import React from "react";
import { motion, Variants } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";

// Updated slideInFromRight with bounce effect
const slideInFromRight = (duration: number = 0.9): Variants => ({
  hidden: {
    opacity: 0,
    x: '100%', // Start off-screen to the right
  },
  visible: {
    opacity: 1,
    x: [50, 0, -10, 0], // Bounce effect
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 25,
      duration: duration, // Duration of the entire animation
    },
  },
});

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* Left Section */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Name + Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 max-w-[600px] w-auto h-auto"
        >
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Andrew Ashraf
          </h1>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-2xl text-white"
          >
            Software Engineer
          </motion.p>
        </motion.div>
        <motion.div
      variants={slideInFromLeft(0.8)}
      initial="hidden"
      animate="visible"
      className="flex items-center text-neon-blue text-sm"
      style={{
        color: '#00f0ff',
        textShadow: `
          0 0 5px #00f0ff,
          0 0 10px #00f0ff,
          0 0 20px #00f0ff,
          0 0 40px #00f0ff,
          0 0 80px #00f0ff
        `
      }}
    >
      {/* Neon Location pin icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#00f0ff"
        strokeWidth={2}
        style={{
          filter: 'drop-shadow(0 0 4px #00f0ff) drop-shadow(0 0 10px #00f0ff)'
        }}
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

        <motion.div variants={slideInFromLeft(0.8)} className="max-w-[600px] w-full">
          <Terminal />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Detail-oriented Junior Software Engineer specializing in backend
          development. Experienced in building scalable APIs, optimizing system
          performance, and delivering reliable software solutions. Passionate
          about solving complex problems and contributing to innovative
          projects.
        </motion.p>

        {/* CTA Button */}
        <motion.a
  href="/Andrew Ashraf Amin SWE.pdf"
  target="_blank"
  rel="noopener noreferrer"
  variants={slideInFromLeft(1)}
  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-center gap-2"
>
  {/* Eye icon SVG */}
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

      {/* Right Section - Image with Neon Effect */}
      <motion.div
        variants={slideInFromRight(0.8)} // Applying the bounce effect here
        initial="hidden"
        animate="visible"
        className="w-full h-full flex justify-center items-center relative"
      >
        {/* Image with Neon Glow */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-60 rounded-xl"></div>
        
        <Image
          src="/Andrew.jpg"
          alt="Andrew Ashraf"
          height={550}
          width={450}
          className="rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:rounded-3xl"
          style={{ imageRendering: 'crisp-edges' }} // Ensures sharp edges for the image
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
