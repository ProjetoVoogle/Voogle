import React from "react";
import MultiCardCarousel from "../components/Carousel/Carousel";

const cards = [
  {
    text: "Título 1",
    description: "Esta é a descrição do card 1.",
    image: "https://via.placeholder.com/150",
    buttonLabel: "Saiba Mais",
  },
  {
    text: "Título 2",
    description: "Esta é a descrição do card 2.",
    image: "https://via.placeholder.com/150",
    buttonLabel: "Saiba Mais",
  },
  {
    text: "Título 3",
    description: "Esta é a descrição do card 3.",
    image: "https://via.placeholder.com/150",
    buttonLabel: "Saiba Mais",
  },
  {
    text: "Título 3",
    description: "Esta é a descrição do card 3.",
    image: "https://via.placeholder.com/150",
    buttonLabel: "Saiba Mais",
  },
  {
    text: "Título 3",
    description: "Esta é a descrição do card 3.",
    image: "https://via.placeholder.com/150",
    buttonLabel: "Saiba Mais",
  },
  {
    text: "Título 3",
    description: "Esta é a descrição do card 3.",
    image: "https://via.placeholder.com/150",
    buttonLabel: "Saiba Mais",
  },
];

const ClientesCarousel: React.FC = () => {
  // Array de cards com o formato tipado

  return(
    <div>
      <MultiCardCarousel cardsData={cards}/>
    </div>
  )
};

export default ClientesCarousel;