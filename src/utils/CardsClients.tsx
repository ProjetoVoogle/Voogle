import React, { useState, useEffect } from "react";

const cards = [
  {
    text: "Título 1",
    description:
      "Fechar meu seguro pela empresa foi ótimo! O processo foi rápido e fácil, e encontrei um plano perfeito para o que eu estava buscando.",
    author: "Luana - 32 Anos / São Paulo",
    stars: 1,
  },
  {
    text: "Título 2",
    description:
      "A empresa me deu diversas opções de seguro para o meu carro e o atendimento foi excepcional e muito rápido.",
    author: "Fausto - 46 Anos / Ribeirão Preto",
    stars: 5,
  },
  {
    text: "Título 3",
    description:
      "O site da empresa facilitou muito a escolha do meu seguro. A comparação de preços foi clara e economizei bastante.",
    author: "Gerson - 55 Anos / Rio de Janeiro",
    stars: 4,
  },
  {
    text: "Título 4",
    description:
      "O atendimento foi excelente e me ajudou muito na decisão final.",
    author: "Camila - 29 Anos / Curitiba",
    stars: 3,
  },
];

const ClientesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2; 


  const extendedCards = [...cards, ...cards];

  useEffect(() => {
    const timer = setInterval(() => {
      nextCard();
    }, 3000); 
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= extendedCards.length ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extendedCards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full flex justify-center items-center mt-8 mb-20">
      {/* Botão Anterior */}
      <button
        onClick={prevCard}
        className="absolute left-4 text-2xl font-bold text-gray-600 hover:text-gray-800 z-10"
      >
        &lt;
      </button>

      {/* Contêiner do Carrossel */}
      <div className="overflow-hidden w-[80%]">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex % cards.length) * (100 / visibleCards)}%)`,
          }}
        >
          {extendedCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 w-[calc(50%-1.5rem)] flex-shrink-0 text-center"
            >
              {/* Estrelas */}
              <div className="text-yellow-400 mb-2">
                {"⭐".repeat(card.stars)}
              </div>
              {/* Descrição */}
              <p className="text-gray-700 mb-4">{card.description}</p>
              {/* Autor */}
              <h4 className="font-bold text-gray-900">{card.author}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Próximo */}
      <button
        onClick={nextCard}
        className="absolute right-4 text-2xl font-bold text-gray-600 hover:text-gray-800 z-10"
      >
        &gt;
      </button>
    </div>
  );
};

export default ClientesCarousel;
