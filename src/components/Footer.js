import React from 'react';
import { IoLogoLinkedin, IoLogoGithub} from 'react-icons/io5';
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-neutral-800 to-black text-white py-4">
      <div className="container mx-auto px-4 w-3/4 ">
        <div className="flex justify-between items-center">
          <p>Made with 💙 in India - 2024</p>
          <div className="flex justify-start my-5 space-x-4">
            <a href="https://www.linkedin.com/in/rajeshwari-g-5bab95202/" target="_blank" rel="noopener noreferrer" className='hover:text-teal-500'><IoLogoLinkedin size={32} /></a>
            <a href='https://github.com/rajeshwari2538' target="_blank" rel="noopener noreferrer" className='hover:text-teal-500'><IoLogoGithub size={32} /></a>
            <a href='mailto:rajeshwarigadagi06@gmail.com' className='hover:text-teal-500'><BiLogoGmail size={32} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
