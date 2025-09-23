"use client";

import React, { useState, useEffect } from "react";

const codeSnippets = [
  `console.log("Hello, world!");`,
  `const sum = (a, b) => a + b;`,
  `async function fetchData() {\n  const res = await fetch("/api");\n  return res.json();\n}`,
  `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
  `function greet(name) {\n  return \`Hello, \${name}!\`;\n}`,
  `if (user.isAdmin) {\n  grantAccess();\n}`,
];

const Terminal = () => {
  const [currentCode, setCurrentCode] = useState(codeSnippets[0]);
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    // Change the code snippet every 8 seconds
    const changeInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * codeSnippets.length);
      setCurrentCode(codeSnippets[randomIndex]);
    }, 5000);

    return () => clearInterval(changeInterval);
  }, []);

  useEffect(() => {
    setDisplayedCode(""); // reset displayed code

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < currentCode.length) {
        setDisplayedCode((prev) => prev + currentCode[i]);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // typing speed: 30ms per character

    return () => clearInterval(typingInterval);
  }, [currentCode]);

  return (
    <div className="bg-black border border-[#333] text-green-400 font-mono text-sm p-4 rounded-md shadow-lg w-full max-w-[600px]">
  {/* Terminal header */}
  <div className="flex space-x-2 mb-3">
    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
  </div>
      {/* Code block with typing */}
      <pre className="whitespace-pre-wrap overflow-y-auto max-h-[160px] leading-relaxed scrollbar-none">
        {displayedCode}
        <span className="animate-blink">|</span>
      </pre>
    </div>
  );
};

export default Terminal;
