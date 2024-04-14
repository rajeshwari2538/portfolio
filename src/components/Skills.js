import React from 'react';
import htmlIcon from '../assets/icons/HTML.png';
import cssIcon from '../assets/icons/css3.png';
import javascriptIcon from '../assets/icons/javascript.png';
import reactIcon from '../assets/icons/react.png';
import reduxIcon from '../assets/icons/redux.png';
import tailwindIcon from '../assets/icons/tailwindCss.png';
import bootstrapIcon from '../assets/icons/bootstrap.png';
import gitIcon from '../assets/icons/git.jpeg';
import jestIcon from '../assets/icons/jest.png';


const Skills = () => {
  const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'React.js', icon: reactIcon },
    { name: 'Redux', icon: reduxIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'Bootstrap', icon: bootstrapIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Jest', icon: jestIcon },
    
  ];

  return (
    <div className='bg-gradient-to-bl from-neutral-800 to-black text-white min-h-screen py-12'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold mb-4 text-teal-400'>Skills</h1>
        <div className='w-10 border-b-4 border-white rounded-lg mb-8'></div>
      </div>
      <div className="container w-[90%] mx-auto md:mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 bg-neutral-950 rounded-lg">
            <img src={skill.icon} alt={skill.name} className="h-16 mb-2" />
            <span className="text-lg text-white font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
