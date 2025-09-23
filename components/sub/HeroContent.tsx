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
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
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
