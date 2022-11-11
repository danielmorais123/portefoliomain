import React from "react";
import { motion } from "framer-motion";
import daniel from "../img/daniel.jpg";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={daniel}
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F34A]">little</span>{" "}
          background{" "}
        </h4>
        <p className="text-base">
          I'm Daniel, I'm 21 years old and I am a Front-End Developer/ Full
          Stack Developer. I studied in Polytechnic Institute of Setubal in
          Software Engineering. I have a lot of experience in React and Tailwind
          CSS due to my personal projects in which I learned a lot about those
          frameworks in order to make my skills better and better. My main
          Programming skills are: React, Tailwind CSS, Java, C#,
          Next.JS,Javascript, HTML,CSS. I love programming and I want to learn
          every day new ways to get better and learn new languages, for
          instance, python.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
