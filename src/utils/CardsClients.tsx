import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardsClients = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Número padrão de slides exibidos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        // Para monitores padrão (1024px a 1920px)
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Para tablets e desktops menores
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Para tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Centraliza o slide ativo
          centerPadding: "20px", // Adiciona um padding para melhor visualização
        },
      },
      {
        breakpoint: 480, // Para smartphones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto py-5 overflow-hidden cursor-pointer">
      <Slider {...settings} className="carouselCardsCliente">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#E0F0FF] bg-opacity-[0.5] rounded-xl shadow-lg p-6 flex-shrink-0 text-center border border-gray-200 grid grid-rows-[auto_1fr_auto] h-[20rem] lg:h-[21rem] mb-[3rem] mx-2" // Adiciona margem horizontal
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}
          >
            <div className="flex flex-col h-full justify-between">
              {/* Ícone de citação */}
              <div className="text-4xl text-gray-400 font-serif">“</div>

              {/* Descrição */}
              <div className="flex items-center">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Linha divisória e autor (fixados no fundo do card) */}
              <div className="grid grid-rows-[auto_auto] items-center !bottom-0 !mt-0">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardsClients;