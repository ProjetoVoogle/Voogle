import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import FeatureCard from "../Card/FeatureCard";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import { FeatureCardProps } from "../Card/FeatureCard";

interface MultiCardCarouselProps {
    cardsData: FeatureCardProps[];
  }

  const MultiCardCarousel: React.FC<MultiCardCarouselProps> = ({ cardsData }) => {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20} // Espaço entre os slides
          slidesPerView={4} // Número de cartões visíveis simultaneamente
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
      </div>
    );
  };
  
  export default MultiCardCarousel;