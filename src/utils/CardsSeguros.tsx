import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardSeguroType } from "../types/CardSeguro/CardSeguroType";

const categories = ["Recomendados", "Veículos", "Casa", "Financeiro", "Saúde"];

const SeguroCarousel: React.FC<CardSeguroType> = ({ allCards }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Recomendados");

  // Filtra os cards com base na categoria selecionada
  const filteredCards =
    selectedCategory === "Recomendados"
      ? allCards
      : allCards.filter((card) => card.category === selectedCategory);

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            // Para monitores maiores (acima de 1920px)
            breakpoint: 1920,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            // Para monitores padrão (1024px a 1920px)
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            // Para monitores menores ou tablets (768px a 1024px)
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            // Para tablets menores ou smartphones grandes (576px a 768px)
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            // Para smartphones pequenos (abaixo de 576px)
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true, // Foca no slide central
              centerPadding: "20px"
            },
          },
        ],
      };

  return (
    <div className="w-full max-w-screen-sm md:max-w-screen-md lg:max-w-none mt-8">
      {/* Filtros */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-[8px] border ${selectedCategory === category
                ? "bg-[#E0F0FF] text-[#0056B3] font-bold"
                : "bg-[#F5F5F5] text-[#333]"
              } hover:bg-[#E0F0FF] transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carrossel */}
      <div className="px-4 md:px-20 lg:px-40 space-x-4 sm:space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8 ">
        <Slider {...settings} className="flex !gap-[5rem] py-6 h-auto">
          {filteredCards.map((card, index) => (
            <Link to={`/paginaSeguro/${card.id}`} key={index}>
              <div
                className="bg-white mb-10 shadow-lg w-[300px] max-w-full flex-shrink-0 text-left flex flex-col relative rounded-[12px] border border-[#E0E0E0] overflow-hidden cursor-pointer group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={`${index * 250}`}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.play();
                    const maxTime = 5;
                    video.ontimeupdate = () => {
                      if (video.currentTime > maxTime) {
                        video.currentTime = 0;
                      }
                    };
                  }
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) video.pause();
                }}
              >
                <div className="flex relative">
                  {/* Imagem fixa e vídeo no hover */}
                  <img
                    src={card.image}
                    alt={card.text}
                    className="w-full h-[150px] object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <video
                    src={card.video}
                    className="w-full h-[150px] object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    muted
                    loop
                  />
                </div>
                <div className="px-4 pt-3 flex-grow">
                  <h2 className="text-lg font-bold text-[#000] mb-2 truncate">
                    {card.text}
                  </h2>
                  <p className="text-sm text-[#555] leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>
                <div className="bg-[#E6F4E6] text-[#44537A] font-bold text-sm rounded-md p-2 mx-4 mb-4 flex items-center gap-2">
                  <span className="">
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </span>
                  12 meses de anuidade grátis.
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SeguroCarousel;