import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
const ContactMe = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <motion.div
      initial={{ x: -200, opacity: 0, scale: 0.5 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-3">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need. Let's Talk.
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]/40" />
            <p className="text-2xl">910723748</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]/40" />
            <p className="md:text-xl text-md">moraisalexandre01@hotmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]/40" />
            <p className="text-2xl">Pinhal Novo</p>
          </div>
        </div>
        <form
          onSubmit={() =>
            (window.location = `mailto:moraisartic01@gmail.com?subject=${subject}&body=${message}`)
          }
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input className="contactInput" placeholder="Name" type="text" />
            <input className="contactInput" placeholder="Email" type="text" />
          </div>
          <input
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="contactInput"
            type="text"
          />
          <textarea
            placeholder="Message"
            className="contactInput"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
