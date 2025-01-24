import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarouselSeguro = ({ items, customStyles, customSettings }) => {
  const defaultSettings = {
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

  const settings = { ...defaultSettings, ...customSettings };

  return (
    <div className={`relative ${customStyles?.container}`}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className={`p-4 md:px-0 ${customStyles?.itemContainer}`}>
            <div className={`flex flex-col gap-4 p-6 rounded-lg text-center lg:text-start md:text-start sm:text-start ${customStyles?.item}`}>
              {item.icon ? (
                <div className="h-32 flex justify-center lg:justify-start md:justify-start sm:justify-start items-center text-5xl ">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-[13rem] object-cover rounded-[8px] ${customStyles?.img}`}
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