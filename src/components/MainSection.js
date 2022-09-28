import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

const MainSection = () => {
  const [text, count] = useTypewriter({
    words: ['Programming', 'Learn'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://scontent.flis11-2.fna.fbcdn.net/v/t1.6435-9/125310022_1652899404882858_6815665546785122466_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Aqkh56BfusQAX_V-goX&_nc_ht=scontent.flis11-2.fna&oh=00_AT_lllQzhuIpir8Bgj7vNkdSNUgNIKzMcOEM7ReOLyRvrQ&oe=63593740"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10 ">
          <span className="mr-3"> {text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="infoButtons">About</button>
          </a>
          <a href="#experience">
            <button className="infoButtons">Experience</button>
          </a>
          <a href="#skills">
            <button className="infoButtons">Skills</button>
          </a>
          <a href="#projects">
            <button className="infoButtons">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
