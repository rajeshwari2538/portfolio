import React from 'react';
import Carousel from './Carousel';
import img1 from "../assets/fastEats.jpg";
import img2 from "../assets/netflix.jpg";

const Projects = () => {
  const slides = [
    {
      id: 1,
      img: img1,
      title: "FastEats - Food Delivery App",
      description: "Feeling hungry? Try out Fast Eats - where every craving meets its match with just a tap!",
      demoLink: "https://main--thriving-frangipane-0c1cec.netlify.app/"
    },
    {
      id: 2,
      img: img2,
      title: "Netflix Clone",
      description: "Watch your favorite movies and TV shows with Netflix Clone. Enjoy unlimited streaming anytime, anywhere.",
      demoLink: "https://netflix-gpt-new-dusky.vercel.app/"
    },
  ];

  return (
    <div className='bg-gradient-to-bl from-neutral-800 to-black min-h-screen py-12'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-teal-500 mb-4 text-center'>Projects</h1>
        <div className='border-b-4 rounded-full border-teal-500 w-10 mx-auto mb-8'></div>
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default Projects;
