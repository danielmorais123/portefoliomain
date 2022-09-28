import React from 'react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-5">
        <ExperienceCard
          image={
            'https://static.miro-apps.com/community-profiles-service/4be6ed07-084b-4918-9443-355d1af9ccc8'
          }
        />
        <ExperienceCard
          image={
            'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png'
          }
        />
        <ExperienceCard
          image={
            'https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png'
          }
        />
      </div>
    </motion.div>
  );
};

export default Experience;
