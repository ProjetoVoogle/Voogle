import React, { useState, useRef } from "react";
import { FeatureCardProps } from "../components/Card/FeatureCard";
import Button from "../components/Button/Button";
import styles from "./style.css"

const cards: FeatureCardProps[] = [
  { text: "Título 1", description: "Esta é a descrição do card 1.", image: "https://i0.wp.com/mesclaseguros.com.br/wp-content/uploads/2024/05/Seguro-Transporte-Como-Escolher-A-Protecao-Ideal-Para-Empresas-De-Grande-Porte.png?fit=750%2C500&ssl=1", className: "" },
  { text: "Título 2", description: "Esta é a descrição do card 2.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxJdCgpfJdLb7Hf1Gw7zFL-rGTStDzzwyoA&s" },
  { text: "Título 3", description: "Esta é a descrição do card 3.", image: "https://www.seguroviagem.org/wp-content/uploads/2019/08/seguro-viagem-1-25.jpg" },
  { text: "Título 4", description: "Esta é a descrição do card 4.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwt1o9eCPLbakcW07fnC4Ig7HSYwXaTP3Cg&s" },
  { text: "Título 5", description: "Esta é a descrição do card 5.", image: "https://vendas.ololu.com.br/blog/imgs/artigo_5f9809d225e2bconsorcio.jpeg" },
];

const SeguroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4;
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const offsetX = useRef(0);

  // Avança para o próximo cartão
  const nextCards = () => {
    setCurrentIndex((prev) => (prev + 1 < cards.length - visibleCards + 1 ? prev + 1 : prev));
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
    <div className="relative w-full flex justify-center items-center mt-8">
      {/* Botão Esquerdo */}
      <button
        onClick={prevCards}
        className="absolute left-0 text-3xl font-bold text-gray-600 hover:text-gray-800 z-10"
      >
        &lt;
      </button>

      {/* Contêiner do Carrossel */}
      <div
        className="flex overflow-hidden w-[90%]"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          ref={containerRef}
          className="flex gap-6 transition-transform duration-500 h-[450px]"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg w-[calc(100%/4-1.5rem)] flex-shrink-0 text-center flex flex-col relative h-[350px] cursor-grab"
              style={{
                backgroundImage: `
        linear-gradient(to bottom, rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.6)),
        url(${card.image})
      `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Conteúdo principal: título e descrição */}
              <div className="flex-grow flex flex-col justify-end p-6 pb-14">
                <h2 className="text-2xl font-bold text-white mb-4">{card.text}</h2>
                <p className="text-sm leading-relaxed text-white">{card.description}</p>
              </div>

              {/* Botão: metade para fora do card */}
              <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2">
              <Button
                  label="Saiba Mais"
                  className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A] !px-3 py-2"
                />
              </div>
            </div>
          ))}


        </div>
      </div>

      {/* Botão Direito */}
      <button
        onClick={nextCards}
        className="absolute right-0 text-3xl font-bold text-gray-600 hover:text-gray-800 z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default SeguroCarousel;