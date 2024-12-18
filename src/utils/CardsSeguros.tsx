import React, { useState, useRef } from "react";
import { FeatureCardProps } from "../components/Card/FeatureCard";
import Button from "../components/Button/Button";
import styles from "./style.css";

const allCards: FeatureCardProps[] = [
  { text: "Título 1", description: "Esta é a descrição do card 1.", image: "https://i0.wp.com/mesclaseguros.com.br/wp-content/uploads/2024/05/Seguro-Transporte-Como-Escolher-A-Protecao-Ideal-Para-Empresas-De-Grande-Porte.png?fit=750%2C500&ssl=1", category: "Recomendados" },
  { text: "Título 2", description: "Esta é a descrição do card 2.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxJdCgpfJdLb7Hf1Gw7zFL-rGTStDzzwyoA&s", category: "Veículos" },
  { text: "Título 3", description: "Esta é a descrição do card 3.", image: "https://www.seguroviagem.org/wp-content/uploads/2019/08/seguro-viagem-1-25.jpg", category: "Casa" },
  { text: "Título 4", description: "Esta é a descrição do card 4.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwt1o9eCPLbakcW07fnC4Ig7HSYwXaTP3Cg&s", category: "Financeiro" },
  { text: "Título 5", description: "Esta é a descrição do card 5.", image: "https://vendas.ololu.com.br/blog/imgs/artigo_5f9809d225e2bconsorcio.jpeg", category: "Saúde" },
];

const categories = ["Recomendados", "Veículos", "Casa", "Financeiro", "Saúde"];

const SeguroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("Recomendados");
  const visibleCards = 3;
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
    <div className="relative w-full mt-8">
      {/* Filtros */}
      <div className="flex justify-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0); // Reseta o índice ao mudar o filtro
            }}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category
                ? "bg-[#E0F0FF] text-[#0056B3] font-bold"
                : "bg-[#F5F5F5] text-[#333]"
            } hover:bg-[#E0F0FF] transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carrossel */}
      <div className="flex justify-center items-center relative">
        <button
          onClick={prevCards}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-gray-600 hover:text-gray-800 z-10"
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
            className="flex gap-6 transition-transform duration-500 h-auto"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {filteredCards.map((card, index) => (
              <div
                key={index}
                className="bg-white shadow-lg w-[300px] h-[350px] flex-shrink-0 text-left flex flex-col relative rounded-[12px] border border-[#E0E0E0] hover:shadow-2xl overflow-hidden"
              >
                <div className="p-4">
                  <img
                    src={card.image}
                    alt={card.text}
                    className="w-full h-[150px] object-contain rounded-[8px]"
                  />
                </div>
                <div className="px-4 flex-grow">
                  <h2 className="text-lg font-bold text-[#000] mb-2 truncate">
                    {card.text}
                  </h2>
                  <p className="text-sm text-[#555] leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>
                <div className="bg-[#E6F4E6] text-[#44537A] font-bold text-sm rounded-md p-2 mx-4 mb-4 flex items-center gap-2">
                  <span className="inline-block w-5 h-5 bg-[#44537A] rounded-sm"></span>
                  12 meses de anuidade grátis.
                </div>
              </div>
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
