import React from "react";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const Experience = () => {
  const items = [
    {
      image:
        "https://static.miro-apps.com/community-profiles-service/4be6ed07-084b-4918-9443-355d1af9ccc8",
      company: "Build Up Labs",
      type: "Internship",
      startDate: "May, 30 2022",
      endDate: "August, 30 2022",
      points: [
        "Learned Meteor.js",
        "Got mastered on React, Tailwind CSS and MongoDB",
        "Team communication",
      ],
      languages: [
        "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
        "https://tailwindcss.com/_next/static/media/social-square.eab77323.jpg",
        "https://cdn-images-1.medium.com/max/800/1*Mn_mGNUGxK6gCROym_z8Bg.png",
      ],
    },
    {
      image: "https://www.estsetubal.ips.pt/Content/images/logo-ESTS-mob.png",
      company: "Polytechnic Institute of Setubal",
      type: "Bachelor",
      startDate: "September, 2019",
      endDate: "Finishing This Year",
      points: [
        "Java knowledges",
        "React, React Native king",
        "Team communication",
      ],
      languages: [
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/0a/8cd7f1b14344618b75142593bc7af8/JavaCupLogo800x800.png?auto=format%2Ccompress&dpr=1",
        "https://cdn-images-1.medium.com/max/800/1*Mn_mGNUGxK6gCROym_z8Bg.png",
      ],
    },
  ];

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
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-5 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {items.map((item, index) => (
          <ExperienceCard
            key={index}
            image={item.image}
            company={item.company}
            type={item.type}
            startDate={item.startDate}
            endDate={item.endDate}
            points={item.points}
            languages={item.languages}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
