import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 ${className}`}
        onClick={onClick}
        style={{ ...props.style, fontSize: '24px' }} 
      >
        Prev
      </div>
    );
  }

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 ${className}`}
        onClick={onClick}
        style={{ ...props.style, fontSize: '24px' }}
      >
        Next
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: function(i) {
      return (
        <div className='mt-0 md:mt-14 w-[10px] h-[10px] rounded-[50%]'
          style={{
            backgroundColor: i === currentSlide ? 'teal' : 'white',
          }}
        ></div>
      );
    }
  };

  return (
    <div className='w-[70%] md:w-full mx-auto mt-20'>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="md:flex items-center">
              <img src={slide.img} alt={slide.title} className='w-full lg:w-[60%] h-72 rounded-lg md:order-first' />
              <div className="md:w-1/2 p-4 md:p-8" style={{ minHeight: '18rem' }}>
                <div className='text-white'>
                  <h2 className='text-2xl font-bold mb-4'>{slide.title}</h2>
                  <p className='font-light text-lg'>{slide.description}</p>
                  <a href={slide.demoLink} target='_blank' className='mt-4 inline-block px-4 py-2 bg-teal-500 text-white rounded-md'>Demo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
