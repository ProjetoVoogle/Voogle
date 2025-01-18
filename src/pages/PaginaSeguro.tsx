import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCards } from '../utils/CardsSeguros'; // Importar a lista de seguros
import { FeatureCardProps } from '../components/Card/FeatureCard';
import Button from '../components/Button/Button';
import CarouselSeguro from '../components/CarouselSeguro/Carousel';
import { carouselSecao1Data } from "../utils/CarouselData/CarouselSecao1Data"
import { carouselSecao2Data } from '../utils/CarouselData/CarouselSecao2Data';
import Faq from '../components/Faq/Faq';
import { faqSegurosData } from "../utils/FaqData/FaqSegurosData"
import CardList from "../components/CardList/CardList"
import { destaquesData } from '../utils/DestaquesData/DestaquesData';
import { acionarSeguroData } from '../utils/AcionarSeguroData/acionarSeguroData';


const SeguroPage: React.FC = () => {
    const { id } = useParams()
    console.log(id)
    const [card, setCard] = useState<FeatureCardProps | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const selectedCard = allCards.find((card: { id: string; }) => card.id === id);
        console.log(selectedCard)
        if (selectedCard) {
            setCard(selectedCard);
        } else {
            navigate('/');
        }
    }, [id, navigate]);

    if (!card) return <div>Carregando...</div>;

    const carouselSecao1Items = carouselSecao1Data[id] || [];
    const carouselSecao2Items = carouselSecao2Data[id] || [];
    const faqSeguros = faqSegurosData[id] || []
    const destaquesSeguros = destaquesData[id] || []
    const acionarSeguro = acionarSeguroData[id] || []

    return (
        <div className="flex flex-col min-h-screen">
            {/* Seção do Vídeo */}
            <div className="relative h-[60vh]">
                <div className='p-8 absolute z-10 right-0 pr-10 '>
                    <Button label="Voltar" onBtnClick={() => navigate("/")} className='bg-white bg-opacity-[0.8]' />
                </div>
                {/* Vídeo de fundo */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={card.video || "seu-video-padrao.mp4"} type="video/mp4" />
                </video>

                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Conteúdo no vídeo */}
                <div className="absolute bottom-0 z-10 flex flex-col items-start p-16 text-white">
                    <h1 className="text-4xl font-bold mb-4">{card.text}</h1>
                    <p className="text-lg mb-6">{card.description}</p>
                </div>
            </div>


            <section className='relative p-16 flex-grow-1'>
                <div>
                    <h2 className='text-[2rem] font-[400]'>Por que contratar o {card.text} da Voogle</h2>
                </div>
                <CarouselSeguro items={carouselSecao1Items} customStyles={{}} />
            </section >
            <section className='p-16'>
                <div>
                    <h2 className='text-[2rem]'>O que nosso {card.text} cobre</h2>

                </div>
                <CarouselSeguro items={carouselSecao2Items} customStyles={{
                  
                }} />
            </section >
            <section className='p-16'>
                <div>
                    <h2 className='text-[2rem]'>Precisa acionar o seguro?</h2>
                </div>
                <CardList items={acionarSeguro} customStyles={{}}/>
            </section >
            <section className='p-16'>
                <div>
                    <h2 className='text-[2rem]'>Perguntas Frequentes sobre o {card.text}</h2>
                </div>
                <Faq items={faqSeguros}/>
            </section >
            <section className='p-16'>
                <div>
                    <h2 className='text-[2rem]'>Você também pode gostar</h2>
                </div>
            </section>
            <section className='p-16'>
                <div>
                    <h2 className='text-[2rem]'>Destaques</h2>
                </div>
                <CardList items={destaquesSeguros} customStyles={{
                    title: "text-[1.7rem]"
                }} />
            </section>

            {/* Informações abaixo do vídeo */}
            <div className="relative z-20 flex-grow p-16 bg-gray-100 text-gray-900">

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Detalhes</h2>
                    <p className="text-sm mb-4">Categoria: {card.category}</p>
                    <div className="bg-[#E6F4E6] text-[#44537A] font-bold text-sm rounded-md p-2">
                        <span>12 meses de anuidade grátis.</span>
                    </div>
                </div>
                <Button label={`Quero um ${card.text}`}>
                </Button>
            </div>
        </div>


    );
};

export default SeguroPage;
