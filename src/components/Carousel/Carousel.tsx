import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import FeatureCard from "../Card/FeatureCard";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { FeatureCardProps } from "../Card/FeatureCard";

interface MultiCardCarouselProps {
    cardsData: FeatureCardProps[];
    showNavigation?: boolean;
  }

  const MultiCardCarousel: React.FC<MultiCardCarouselProps> = ({ cardsData, showNavigation =false }) => {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <Swiper
          modules={[Pagination, ...(showNavigation ? [Navigation] : [])]} 
          spaceBetween={20} // Espaço entre os slides
          slidesPerView={4}
          pagination={{ clickable: true }} // Paginação abaixo do carousel
          breakpoints={{
            0: { slidesPerView: 1 }, // 1 cartão em telas pequenas
            768: { slidesPerView: 2 }, // 2 cartões em telas médias
            1024: { slidesPerView: 4 }, // 4 cartões em telas grandes
          }}
        >
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <FeatureCard
                text={card.text}
                description={card.description}
                image={card.image}
                buttonLabel={card.buttonLabel}
                onButtonClick={card.onButtonClick}
                className={card.className}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {showNavigation && (
          <div className="flex justify-center space-x-8 mt-10">
            <button
              className="swiper-button-prev !text-[#44537A] text-white py-2 px-4 rounded"
              style={{ position: "relative" }}
            >
            </button>
            <button
              className="swiper-button-next !text-[#44537A] text-white py-2 px-4 rounded"
              style={{ position: "relative" }}
            >
            </button>
          </div>
        )}
      
      </div>
    );
  };
  
  export default MultiCardCarousel;