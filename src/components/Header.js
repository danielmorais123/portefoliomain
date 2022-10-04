import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className="bg-[rgb(54,54,54)] sticky top-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          className="flex items-center p-3"
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <SocialIcon
            network="facebook"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <SocialIcon
            network="instagram"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <SocialIcon
            network="twitter"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
          />
          <SocialIcon
            network="linkedin"
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer"
          />
        </motion.div>
        <motion.div
          className="group flex items-center p-3 cursor-pointer text-gray-400 hover:text-white  "
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          onClick={() => window.location.href="#contact"}
        >
          
          <SocialIcon network="email" bgColor="transparent" fgColor="white" className='group-hover:!text-white' />
          <p className="hidden sm:inline-flex text-sm hover:scale-110 transition duration-500">Get in Touch</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
