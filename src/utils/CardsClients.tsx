import React, { useState, useEffect } from "react";
import usuarioPng from "../imgs/usuario.png"

const cards = [
  {
    text: "Título 1",
    description:
      "Fechar meu seguro pela empresa foi ótimo! O processo foi rápido e fácil, e encontrei um plano perfeito para o que eu estava buscando.",
    image: usuarioPng,
    author: "Usuário 01 \n| Empresa de Seguro",
  },
  {
    text: "Título 2",
    description:
      "A empresa me deu diversas opções de seguro para o meu carro e o atendimento foi excepcional e muito rápido.",
    image: usuarioPng,
    author: "Usuário 02 \n| Empresa de Seguro",
  },
  {
    text: "Título 3",
    description:
      "O site da empresa facilitou muito a escolha do meu seguro. A comparação de preços foi clara e economizei bastante.",
    image: usuarioPng,
    author: `Usuário 03 \n| Empresa de Seguro`,
  },
  {
    text: "Título 4",
    description:
      "O atendimento foi excelente e me ajudou muito na decisão final.",
    image: usuarioPng,
    author: "Usuário 04 \n| Empresa de Seguro",
  },
];

const ClientesCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3; // Mostra 3 cards por vez
  const extendedCards = [...cards, ...cards]; // Loop infinito

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
        ←
      </button>

      {/* Carrossel */}
      <div className="overflow-hidden w-[90%]">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex % cards.length) * (100 / visibleCards)}%)`,
          }}
        >
          {extendedCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#E0F0FF] rounded-xl shadow-lg p-6 w-[calc(33.33%-1.5rem)] flex-shrink-0 text-center border border-gray-200 flex flex-col justify-between"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200}`}

            >
              <div className="">
                {/* Ícone de citação */}
                <div className="text-4xl text-gray-400 mb-4 font-serif">“</div>

                {/* Descrição */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>
              <div className="">
                {/* Linha divisória */}
                <div className="w-full border-t border-gray-300 my-4"></div>

                {/* Autor */}
                <div className="flex flex-row mb-auto gap-3">
                  <img src={card.image} alt="Usuário" className="w-12 h-12" />
                  <h4 className="font-bold text-gray-800 text-sm text-start ">
                    {card.author.split("\n").map((line, idx) => (
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
        </div>
      </div>

      {/* Botão Próximo */}
      <button
        onClick={nextCard}
        className="absolute right-4 text-2xl font-bold text-gray-600 hover:text-gray-800 z-10"
      >
        →
      </button>
    </div>
  );
};

export default ClientesCarousel;
