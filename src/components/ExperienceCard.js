import React from "react";
import { motion } from "framer-motion";
import reactlogo from "../img/react.png";

const ExperienceCard = ({
  image,
  company,
  points,
  startDate,
  endDate,
  type,
  languages,
}) => {
  return (
    <article className="flex flex-col rounded-lg mt-10 items-center space-y-7 flex-shrink-0 w-full sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-10 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32  rounded-full xl:w-[200px]  object-contain object-center"
        src={image}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{company}</h4>
        <p className="font-bold text-2xl mt-1">{type}</p>
        <div className="flex space-x-2 my-2">
          {languages.map((l, index) => (
            <img key={index} className="h-10 w-10 rounded-full" src={l} />
          ))}
          <img className="h-10 w-10 rounded-full" src={reactlogo} />
        </div>
        <p className="uppercase py-5 text-gray-300">
          {startDate} - {endDate}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
