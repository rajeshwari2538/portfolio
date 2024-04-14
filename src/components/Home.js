import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import profileImage from "../assets/photo.jpeg";
import resumePdf from "../assets/resume.pdf"; 

const Home = () => {
  return (
    <div className='bg-gradient-to-bl from-neutral-800 to-black min-h-screen flex justify-center items-center'>
      <div className='max-w-6xl mx-auto px-8 py-12 rounded-lg text-white'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          
          <div className='md:order-2 mb-8 md:mb-0 md:ml-10 md:mt-0 mt-8'>
            <img className='md:h-[20rem] md:w-[38rem] h-52 w-52 rounded-full border-t-8 border-b-8 border-teal-500' src={profileImage} alt="Rajeshwari Gadagi" />
          </div>
          
          <div className='text-left md:order-1'>
            <p className='text-3xl md:text-4xl font-semibold'>Hello 👋</p>
            <p className='my-3 text-3xl md:text-3xl font-semibold'>I'm <span className='text-teal-600 md:text-5xl text-4xl italic'>Rajeshwari Gadagi</span></p>
            <p className='text-gray-600 my-3 italic text-lg md:text-2xl'>Frontend Developer</p>
            <p className='md:text-[22px] text-lg font-light mt-2'>Passionate frontend developer skilled in crafting responsive and visually engaging web experiences. Proficient in HTML, CSS, JavaScript, React js and Redux.</p>
            <div className='flex justify-start mt-5 mb-10 space-x-4'>
              <a href="https://www.linkedin.com/in/rajeshwari-g-5bab95202/" target="_blank" rel="noopener noreferrer" className='hover:text-teal-500'><IoLogoLinkedin size={32} /></a>
              <a href='https://github.com/rajeshwari2538' target="_blank" rel="noopener noreferrer" className='hover:text-teal-500'><IoLogoGithub size={32} /></a>
              <a href='mailto:rajeshwarigadagi06@gmail.com' className='hover:text-teal-500'><BiLogoGmail size={32} /></a>
            </div>
            <a href={resumePdf} download className='px-8 my-5 py-3 rounded-lg bg-teal-600 font-bold text-xl hover:bg-teal-500 transition duration-300'>Resume</a> {/* Added download attribute */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
