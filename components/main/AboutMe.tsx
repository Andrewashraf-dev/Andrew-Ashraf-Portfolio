import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto text-center"
    id='about-me'>
                
      <h2 className="text-3xl font-bold mb-6 text-white underline underline-offset-4 decoration-blue-500">
        About Me
      </h2>
      
      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-6 text-left space-y-4">

      <h2 className="flex items-center text-2xl font-bold mb-6 text-white underline underline-offset-4 decoration-blue-500 space-x-3">
  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9.003 9.003 0 0112 15c2.14 0 4.096.75 5.879 2.004M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  <span>Professional Profile</span>
</h2>
      
        <p className="text-white leading-relaxed">
          As a proactive and solution-oriented Junior Backend Engineer, 
          I focus on designing and developing reliable, scalable, and secure server-side applications. 
          My experience spans across Java, Spring Boot, C++, and C#, with strong foundations in database management, API development, and system optimization. 
          I enjoy working with backend architectures that ensure performance, maintainability, and smooth integration with frontend systems.
          </p>

        <p className="text-white leading-relaxed">
          I am passionate about continuous learning and keeping up with modern backend practices, from RESTful API design to database optimization and deployment strategies. 
          My goal is to contribute to building backend solutions that drive efficiency, support business growth, and deliver seamless experiences for end users.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
