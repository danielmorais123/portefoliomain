import React from "react";
import { motion } from "framer-motion";
import ubereats from "../img/ubereats.png";
const Projects = () => {
  const projects = [
    {
      title: "Uber Eats",
      image: ubereats,
      description: "This project was a Uber Eats clone",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects.map((project, idx) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <img src={project.image}  className="object-cover w-[800px]" />
            <div className="text-center ">
              <h4 className="font-semibold text-lg md:text-3xl ">
                Project {idx + 1} of {projects.length}: {project.title}
              </h4>
              <p className=" text-center md:text-left text-sm md:text-md">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
};

export default Projects;
