"use client";

import React from "react";

const experiences = [

    {
    company: "MAXAB E-Commerce",
    role: "",
    duration: "March 2025 - Present",
    logo: "/MaxAB2.webp", // replace with your actual logo path
    description: [
 "Managed end-to-end onboarding and offboarding processes, ensuring a smooth employee experience and policy compliance.",
 "Maintained accurate, confidential HR records and ensured full compliance with Egyptian labor laws.",
 "Prepared and submitted official government documents such as Social Insurance Form 1 (new hire), Form 6 (termination), and the Employment Certificate ('Labour Office') on time and in accordance with regulations.",
 "Audited and organized over 1,000 employee files to ensure data integrity and documentation accuracy.",
],
  },

     {
    company: "CIB Bank",
    role: "Internship",
    duration: "September 2022 - December 2022",
    logo: "/cib.png", // replace with your actual logo path
    description: [
  "Built and managed client solutions with a product-focused mindset.",
  "Worked across teams to deliver tech-driven business insights.",
  "Leveraged software tools to streamline operations and scale systems.",
],
  },
  {
    company: "Bnaque Misr",
    role: "Internship",
    duration: "September 2022 - December 2022",
    logo: "/banque-misr-logo.png", // replace with your actual logo path
    description:[
  "Assisted in banking operations and customer service to understand end-user needs.",
  "Learned how financial transactions are processed securely within banking systems.",
  "Gained exposure to core banking workflows and how different departments interact digitally.",
  "Learned software requirements in banking systems.",
]
  },
 
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10 text-white text-center underline underline-offset-4 decoration-blue-500">
        Experience
      </h2>
      <div className="flex flex-col space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Logo */}
            <div className="flex-shrink-0 w-24 h-24 mb-4 md:mb-0 md:mr-6 flex items-center justify-center bg-gray-900 rounded-lg">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-blue-400 mb-2">{exp.company}</p>
              <p className="text-xs text-gray-400 italic mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
