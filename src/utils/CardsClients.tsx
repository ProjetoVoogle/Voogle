import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardsClients = ({ items, visibleCards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: visibleCards,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: visibleCards > 2 ? 2 : visibleCards,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto py-5 overflow-hidden cursor-pointer space-x-4 ">
      <Slider
        {...settings}
        className="carouselCardsCliente"
      >

        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#E0F0FF] rounded-xl shadow-lg p-6 flex-shrink-0 text-center border border-gray-200 flex flex-col h-[20rem] mb-[3rem] justify-between relative"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}
          >
            {/* Ícone de citação */}
            <div className="text-4xl text-gray-400 mb-4 font-serif">“</div>

            {/* Descrição */}
            <p className="text-gray-600 text-sm leading-relaxed my-4 flex-grow">
              {item.description}
            </p>

            {/* Linha divisória e autor (fixados no fundo do card) */}
            <div className="mt-auto">
              <div className="w-full border-t border-gray-300 my-4"></div>
              <div className="flex flex-row gap-3 items-center justify-start">
                <img
                  src={item.image}
                  alt="Usuário"
                  className="w-12 h-12 rounded-full"
                />
                <h4 className="font-bold text-gray-800 text-sm text-start">
                  {item.author.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h4>
              </div>
            </div>
          </div>
        ))}

      </Slider >
    </div >


  );
};

export default CardsClients;
