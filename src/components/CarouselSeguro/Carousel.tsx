import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarouselSeguro = ({ items, customStyles }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`relative ${customStyles?.container}`}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className={`p-4 ${customStyles?.itemContainer}`}>
            <div className={`flex flex-col gap-4 p-6 rounded-lg text-start ${customStyles?.item}`}>
              {item.icon ? (
                <div className="h-32 flex justify-start items-center text-5xl ">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[13rem] object-cover rounded-[8px]"
                />
              )}
              <h3 className={`text-2xl font-bold mb-2  ${customStyles?.title}`}>{item.title}</h3>
              <p className={`text-gray-700 ${customStyles?.description}`}>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

};

export default CarouselSeguro;