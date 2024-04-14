import React from 'react';
import profileImage from '../assets/photo.jpeg';

const About = () => {
  return (
    <div className='bg-gradient-to-bl from-neutral-800 to-black min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='text-teal-500 text-3xl font-bold mb-4'>About Me</div>
      <div className='border-b-4 rounded-full border-white w-16 h-1 mb-8'></div>
      <div className='flex flex-col md:flex-row items-center justify-center w-full md:w-[60%]'>
        <img className='h-64 md:h-80 rounded-2xl border-x-8 border-teal-400 mb-8 md:mb-0' src={profileImage} alt='Rajeshwari Gadagi'/>
        <div className='text-white text-[22px] font-light md:ml-10 mx-4 md:mr-0'>
          <p className='mb-4'>
            <span className='italic text-2xl md:text-3xl font-semibold text-teal-500'>Hey! I'm Rajeshwari Gadagi</span> from Bengaluru, India. As a Frontend Developer specializing in React JS, I'm responsible for designing and implementing user interfaces for websites and applications. I leverage my skills in HTML, CSS, JavaScript, React JS, and Redux to create visually appealing, intuitive, and functional interfaces that deliver an optimal user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
