import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/chatapp.png"
          title="Real-time ChatApp"
          description="Full-stack application enabling real-time messaging with JWT authentication, built with the MERN stack and Socket.io."
        />
        <ProjectCard
          src="/ailandingpage.png"
          title="AI Landing Page"
          description="A Fully Responsive Website with Modern UI/UX in React JS with Tailwind."
        />
        <ProjectCard
         src="/portfolio.png"
          title="Animated Space Theme Portfolio"
          description="An engaging animated portfolio website using Next.js and Framer Motion, combining the power of React-based server-side rendering with seamless motion animations for a dynamic user experience"
        />

         <ProjectCard
          src="/crowdfunding.png"
          title="Web3 Crowdfuning App"
          description="With a stunning design, connected to the blockchain, metamask pairing, interaction with smart contracts, sending Ethereum through the blockchain network, writing solidity code, and, most importantly, the ability to create create, view, and donate to crowdfunding campaigns directly through the blockchain; this course is perfect to fully understand how web3, blockchain, Solidity, and smart contracts truly work behind the scenes."
        />
        
      </div>

      
    </div>
  );
};

export default Projects;