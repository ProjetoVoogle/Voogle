import React, { useState, useRef } from "react";
import { FeatureCardProps } from "../components/Card/FeatureCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons"; // Exemplo de ícone sólido
import { Link } from "react-router-dom";

export interface FeatureCardVideo extends FeatureCardProps{
  video: string
}

export const allCards: FeatureCardVideo[] = [
  {id:"seguroEletroeletronicos",text: "Seguro de Eletroeletrônicos", description: "Esta é a descrição do card 1.", image: "https://dicas.olx.com.br/wp-content/uploads/2024/05/ultimos-lancamentos-de-celular.jpg", category: "Recomendados", video:"https://videos.pexels.com/video-files/6558613/uhd_25fps.mp4" },
  {id:"seguroEmpresarial", text: "Seguro Empresarial", description: "Esta é a descrição do card 2.", image: "https://akadseguros.com.br/content/uploads/2023/06/seguro-empresarial-servicos-akad-1920x0-c-default.jpg", category: "Veículos", video:"https://videos.pexels.com/video-files/7149005/7149005-uhd_2560_1440_25fps.mp4" },
  {id:"seguroViagem", text: "Seguro de Viagem", description: "Esta é a descrição do card 3.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBP_FvJKm7U4P8YEU4EL6t37fE6lzadCM4Q&s", category: "Casa", video:"https://cdn.pixabay.com/video/2020/02/27/32945-395456395_large.mp4" },
  {id:"seguroGarantia", text: "Seguro de Garantia", description: "Esta é a descrição do card 4.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWcLIJe9VkWzpbdzuzYritc5nIuHg-TgGK-A&s", category: "Financeiro", video:"https://videos.pexels.com/video-files/5519942/5519942-uhd_2560_1440_30fps.mp4" },
  {id:"seguroObra", text: "Seguro de obras e locações", description: "Esta é a descrição do card 5.", image: "https://blog.docket.com.br/wp-content/uploads/2021/09/AdobeStock_712794701Resultado-1089x730.webp", category: "Casa", video:"https://videos.pexels.com/video-files/14550172/14550172-uhd_2560_1440_30fps.mp4" },
  {id:"seguroFinanceiro", text: "Seguro Financeiro", description: "Esta é a descrição do card 6.", image: "https://revistaapolice.com.br/wp-content/uploads/elementor/thumbs/financas-qg11k0kq8p3btpo39fbdte8ob3mh5at8pdl6lqenpk.jpg", category: "Financeiro", video:"https://videos.pexels.com/video-files/3196002/3196002-uhd_2560_1440_25fps.mp4" },
  {id:"financiamentoConsorcio", text: "Financiamentos e Consórcios", description: "Esta é a descrição do card 7.", image: "https://revistaapolice.com.br/wp-content/uploads/elementor/thumbs/financas-qg11k0kq8p3btpo39fbdte8ob3mh5at8pdl6lqenpk.jpg", category: "Financeiro", video:"https://videos.pexels.com/video-files/3196002/3196002-uhd_2560_1440_25fps.mp4" },
  {id:"seguroVida", text: "Seguro de Vida", description: "Esta é a descrição do card 8.", image: "https://revistaapolice.com.br/wp-content/uploads/elementor/thumbs/financas-qg11k0kq8p3btpo39fbdte8ob3mh5at8pdl6lqenpk.jpg", category: "Financeiro", video:"https://videos.pexels.com/video-files/3196002/3196002-uhd_2560_1440_25fps.mp4" },
  {id:"seguroSaude", text: "Seguro de Saúde", description: "Esta é a descrição do card 9.", image: "https://revistaapolice.com.br/wp-content/uploads/elementor/thumbs/financas-qg11k0kq8p3btpo39fbdte8ob3mh5at8pdl6lqenpk.jpg", category: "Financeiro", video:"https://videos.pexels.com/video-files/3196002/3196002-uhd_2560_1440_25fps.mp4" },
  {id:"seguroAuto", text: "Seguro de Automóveis", description: "Esta é a descrição do card 10.", image: "https://revistaapolice.com.br/wp-content/uploads/elementor/thumbs/financas-qg11k0kq8p3btpo39fbdte8ob3mh5at8pdl6lqenpk.jpg", category: "Financeiro", video:"https://videos.pexels.com/video-files/3196002/3196002-uhd_2560_1440_25fps.mp4" },

];

const categories = ["Recomendados", "Veículos", "Casa", "Financeiro", "Saúde"];

const SeguroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("Recomendados");
  const visibleCards = allCards.length > 3 ? 3 : allCards.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const offsetX = useRef(0);

  // Filtra os cards com base na categoria selecionada
  const filteredCards = selectedCategory === "Recomendados"
    ? allCards
    : allCards.filter((card) => card.category === selectedCategory);

  // Avança para o próximo cartão
  const nextCards = () => {
    setCurrentIndex((prev) => (prev + 1 < filteredCards.length - visibleCards + 1 ? prev + 1 : prev));
  };

  // Volta para o cartão anterior
  const prevCards = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Eventos de Drag
  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    if (containerRef.current) {
      containerRef.current.style.transition = "none";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX.current) {
      offsetX.current = e.clientX - startX.current;
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(calc(-${currentIndex * (100 / visibleCards)}% + ${offsetX.current}px))`;
      }
    }
  };

  const handleMouseUp = () => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.5s ease-in-out";
      if (Math.abs(offsetX.current) > 50) {
        if (offsetX.current > 0) {
          prevCards();
        } else {
          nextCards();
        }
      } else {
        containerRef.current.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
      }
    }
    startX.current = 0;
    offsetX.current = 0;
  };

  return (
    <div className="relative w-full max-w-[90%] mx-auto mt-8">
      {/* Filtros */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0); // Reseta o índice ao mudar o filtro
            }}
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
      <div className="flex justify-center items-center relative pl-10 pr-10">
        <button
          onClick={prevCards}
          className="absolute left-4 top-1/2 translate-y-1/2 text-3xl font-bold text-gray-600 hover:text-gray-800 z-10"
        >
          &lt;
        </button>

        <div
          className="flex overflow-hidden w-[90%]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            ref={containerRef}
            className="flex gap-6 py-6 transition-transform duration-500 h-auto cursor-grab "
            style={{
              transform: `translateX(-${currentIndex * (85 / visibleCards)}%)`,
            }}
          >
            {filteredCards.map((card, index) => (
               <Link to={`/paginaSeguro/${card.id}`}>
              <div
                key={index}
                className="bg-white shadow-lg w-[300px] max-w-full flex-shrink-0 text-left flex flex-col relative rounded-[12px] border border-[#E0E0E0] overflow-hidden cursor-pointer group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={`${index * 250}`}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) video.play();
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
                    src={card.gif}
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
          </div>


        </div>

        <button
          onClick={nextCards}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-gray-600 hover:text-gray-800 z-10"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SeguroCarousel;
