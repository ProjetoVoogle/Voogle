import React, { useState } from "react";

const cards = [
  { text: "Título 1", description: "Esta é a descrição do card 1.", image: "https://via.placeholder.com/150" },
  { text: "Título 2", description: "Esta é a descrição do card 2.", image: "https://via.placeholder.com/150" },
  { text: "Título 3", description: "Esta é a descrição do card 3.", image: "https://via.placeholder.com/150" },
  { text: "Título 4", description: "Esta é a descrição do card 4.", image: "https://via.placeholder.com/150" },
  { text: "Título 5", description: "Esta é a descrição do card 5.", image: "https://via.placeholder.com/150" },
];

const SeguroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const nextCards = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCards < cards.length ? prevIndex + 1 : 0
    );
  };

  const prevCards = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - visibleCards : prevIndex - 1
    );
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
      <div className="flex overflow-hidden w-[90%]">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 w-[calc(100%/3-1.5rem)] flex-shrink-0 text-center"
            >
              <img
                src={card.image}
                alt={card.text}
                className="w-24 h-24 rounded-lg mx-auto mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{card.text}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]">
                Saiba Mais
              </button>
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
