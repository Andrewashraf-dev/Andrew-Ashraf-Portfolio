"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaDocker,
  FaPython,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostman,
  SiVercel,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGraphql,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiJira,
  SiWebpack,
  SiBabel,
  SiSass,
  SiJest,
  SiEslint,
  SiCircleci,
  SiNetlify,
  SiFirebase,
  SiGooglechrome,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiEmberdotjs,
  SiBackbone,
  SiBootstrap,
  
} from "react-icons/si";

import * as Tooltip from "@radix-ui/react-tooltip";

type Category = "Frontend" | "Backend" | "Tools";

type SkillOrTool = {
  name: string;
  icon: JSX.Element;
  category: Category;
  description?: string;
};

const items: SkillOrTool[] = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 />, category: "Frontend", description: "Semantic HTML structure" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Frontend", description: "Responsive styling" },
  { name: "JavaScript", icon: <FaJs />, category: "Frontend", description: "ES6+, DOM, async" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Frontend", description: "Static typing" },
  { name: "React", icon: <FaReact />, category: "Frontend", description: "Hooks, Components" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend", description: "SSR, Routing" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Frontend", description: "Utility-first CSS framework" },
  { name: "Vue.js", icon: <SiVuedotjs />, category: "Frontend", description: "Progressive JavaScript framework" },
  { name: "Angular", icon: <SiAngular />, category: "Frontend", description: "Full-featured TypeScript framework" },
  { name: "Bootstrap", icon: <SiBootstrap />, category: "Frontend", description: "CSS framework for responsive design" },

  // Backend
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend", description: "Runtime environment" },
  { name: "Express", icon: <SiExpress />, category: "Backend", description: "Backend routing" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Backend", description: "NoSQL Database" },
  { name: "GraphQL", icon: <SiGraphql />, category: "Backend", description: "API query language" },
  { name: "Python", icon: <FaPython />, category: "Backend", description: "General purpose programming language" },
  { name: "Django", icon: <SiDjango />, category: "Backend", description: "Python web framework" },
  { name: "Flask", icon: <SiFlask />, category: "Backend", description: "Lightweight Python framework" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Backend", description: "Relational database" },
  { name: "MySQL", icon: <SiMysql />, category: "Backend", description: "Relational database" },
  { name: "Redis", icon: <SiRedis />, category: "Backend", description: "In-memory data store" },
  { name: "AWS", icon: <FaAws />, category: "Backend", description: "Cloud services platform" },
  { name: "REST APIs", icon: <FaNodeJs />, category: "Backend", description: "API design standard" },
  { name: "Microservices", icon: <FaDocker />, category: "Backend", description: "Service architecture style" },

  // Tools
  { name: "GitHub", icon: <FaGithub />, category: "Tools", description: "Version control" },
  { name: "VS Code", icon: <FaGithub />, category: "Tools", description: "Code editor" },
  { name: "Postman", icon: <SiPostman />, category: "Tools", description: "API testing" },
  { name: "Figma", icon: <FaFigma />, category: "Tools", description: "Design collaboration" },
  { name: "Vercel", icon: <SiVercel />, category: "Tools", description: "App deployment" },
  { name: "Docker", icon: <FaDocker />, category: "Tools", description: "Containerization" },
  { name: "Jira", icon: <SiJira />, category: "Tools", description: "Project management" },
  { name: "Webpack", icon: <SiWebpack />, category: "Tools", description: "Module bundler" },
  { name: "Jest", icon: <SiJest />, category: "Tools", description: "JavaScript testing" },
  { name: "Firebase", icon: <SiFirebase />, category: "Tools", description: "Backend-as-a-Service" },
  { name: "Google Chrome DevTools", icon: <SiGooglechrome />, category: "Tools", description: "Browser debugging tools" }
];

// Animation variants for container and cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillsAndTools: React.FC = () => {
  const grouped = {
    Frontend: items.filter((i) => i.category === "Frontend"),
    Backend: items.filter((i) => i.category === "Backend"),
    Tools: items.filter((i) => i.category === "Tools"),
  };

  return (
    <Tooltip.Provider>
<section id="skillsandtools" className="relative z-10 py-16 px-4 max-w-6xl mx-auto text-center">
  <div className="text-center mb-10"> 
    <h2 className="text-[30px] font-bold text-white underline underline-offset-2 decoration-blue-500">
      Skills
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        {" "} & {" "}
      </span>
      Tools
    </h2>
  </div>





        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {(Object.keys(grouped) as Category[]).map((category) => (
            <motion.div
              key={category}
              className="rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl w-full max-w-sm md:max-w-md cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">{category}</h3>

              <motion.div className="flex flex-wrap gap-3" variants={containerVariants}>
                {grouped[category].map((item) => (
                  <motion.div key={item.name} variants={cardVariants}>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white bg-white/10 border border-white/20 cursor-default select-none neon-glow-hover">                          <span className="text-lg">{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="z-50 bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg"
                          side="top"
                          sideOffset={6}
                        >
                          {item.description}
                          <Tooltip.Arrow className="fill-black" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Tooltip.Provider>
  );
};

export default SkillsAndTools;
