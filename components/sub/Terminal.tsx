"use client";

import React, { useState, useEffect, useRef } from "react";

const codeSnippets = [
  `Welcome to the portfolio of Andrew Ashraf`,
  `const title = "Software Engineer";`,
  `const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind"];`,
  `const frontendSkills = ["HTML5", "CSS3", "JavaScript (ES6+)"];`,
  `const backendSkills = ["Node.js", "Express", "MongoDB"];`,
   `const backendSkills = ["PostgreSQL", "REST APIs", "JWT Auth"];`,
  `const aboutMe = () => "Building clean, scalable web apps.";`,
  `if (you.likeMyWork) contact("Andrew.Ashraf.Amin@gmail.com");`,
  `console.log("Hi, I'm Andrew. Let's build something awesome!");`,
];

const Terminal = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typeSnippet = () => {
      const currentSnippet = codeSnippets[snippetIndex];
      let charIndex = 0;
      
      setIsTyping(true);
      setDisplayedCode("");

      typingIntervalRef.current = setInterval(() => {
        if (charIndex < currentSnippet.length) {
          setDisplayedCode(currentSnippet.substring(0, charIndex + 1));
          charIndex++;
        } else {
          // Done typing this snippet
          clearInterval(typingIntervalRef.current!);
          setIsTyping(false);
          
          // Wait before moving to next snippet
          setTimeout(() => {
            setSnippetIndex((prevIndex) => (prevIndex + 1) % codeSnippets.length);
          }, 2000);
        }
      }, 50);
    };

    // Clear any existing interval
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    typeSnippet();

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [snippetIndex]);

  return (
    <div className="bg-black border border-[#333] text-green-400 font-mono text-sm p-4 rounded-md shadow-lg w-full max-w-[600px]">
      {/* Terminal header */}
      <div className="flex space-x-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
        <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
      </div>

      {/* Code block */}
      <div className="flex items-center font-mono text-green-400 leading-relaxed whitespace-pre-wrap">
  <span className="text-green-500 mr-1">$</span>
  <span>{displayedCode}</span>
  {isTyping && <span className="animate-blink inline-block w-[1ch]">|</span>}
</div>

    </div>
  );
};

export default Terminal;