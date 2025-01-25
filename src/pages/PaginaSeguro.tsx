import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCards } from '../utils/CardsSeguros'; // Importar a lista de seguros
import { FeatureCardProps } from '../components/Card/FeatureCard';
import Button from '../components/Button/Button';
import CarouselSeguro from '../components/CarouselSeguro/Carousel';
import { carouselSecao1Data } from "../data/CarouselData/CarouselSecao1Data"
import { carouselSecao2Data } from '../data/CarouselData/CarouselSecao2Data';
import Faq from '../components/Faq/Faq';
import { faqSegurosData } from "../data/FaqData/FaqSegurosData"
import CardList from "../components/CardList/CardList"
import { destaquesData } from '../data/DestaquesData/DestaquesData';
import { acionarSeguroData } from '../data/AcionarSeguroData/acionarSeguroData';
import { propagandaData } from '../data/PropagandaData/propagandaData';


const SeguroPage: React.FC = () => {
    const { id } = useParams()
    console.log(id)
    const [card, setCard] = useState<FeatureCardProps | null>(null);
    const [relatedCards, setRelatedCards] = useState<FeatureCardProps[]>([]);
    const navigate = useNavigate();
    const [showCarouselBefore, setShowCarouselBefore] = useState<boolean>(true);

    useEffect(() => {
        const selectedCard = allCards.find((card: { id: string; }) => card.id === id);
        console.log(selectedCard)
        if (selectedCard) {
            setCard(selectedCard);

            const filteredCards = allCards.filter((item) => item.id !== id);
            const randomCards = filteredCards
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
            setRelatedCards(randomCards);
        } else {
            navigate('/');
        }

        setShowCarouselBefore(Math.random() < 0.5);
    }, [id, navigate]);

    if (!card) return <div>Carregando...</div>;

    const carouselSecao1Items = carouselSecao1Data[id] || [];
    const carouselSecao2Items = carouselSecao2Data[id] || [];
    const faqSeguros = faqSegurosData[id] || []
    const destaquesSeguros = destaquesData[id] || []
    const acionarSeguro = acionarSeguroData.steps
    const propagandas = propagandaData.propagandas 

    const carouselContent = (
        <section className="lg:p-16 md:p-16 sm:p-11 p-7">
            <div>
                <hr className='mb-[2rem]' />
            </div>

            <CarouselSeguro items={propagandas} customStyles={{
                container: "mx-auto cursor-pointer",
                itemContainer: "flex justify-center",
                item: "w-full",
                img: "min-h-[30rem]",
                title: "hidden",
                description: "hidden"
            }}

                customSettings={{
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2300,
                    pauseOnHover: true,
                    dots: true,
                    infinite: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                    ],
                }}
            />
        </section>
    );

    return (
        <div className="flex flex-col min-h-screen">
            {/* Seção do Vídeo */}
            <section className="relative h-[60vh]">
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
                <div className="absolute bottom-0 z-10 flex flex-col items-start p-7 lg:p-16 md:p-16 sm:p-16 text-white">
                    <h1 className="text-4xl font-bold mb-4">{card.text}</h1>
                    <p className="text-lg mb-6">{card.description}</p>
                </div>
            </section>


            <section className='relative lg:p-16 md:p-16 sm:p-11 p-7 flex-grow-1'>
                <div>
                    <h2 className='text-[2rem] font-[400] text-center lg:text-start md:text-start sm:text-center'>Por que contratar o {card.text} da Voogle</h2>
                </div>
                <CarouselSeguro items={carouselSecao1Items} customStyles={{}} customSettings={{}} />
            </section >

            <section className='lg:p-16 md:p-16 sm:p-11 p-7'>
                <div>
                    <h2 className='text-[2rem] text-center lg:text-start md:text-start sm:text-center'>O que nosso {card.text} cobre</h2>

                </div>
                <CarouselSeguro items={carouselSecao2Items} customStyles={{
                    
                }} customSettings={{}} />
            </section >

            {showCarouselBefore && carouselContent}

            <section className='lg:p-16 md:p-16 sm:p-11 p-7'>
                <div>
                    <h2 className='text-[2rem] text-center lg:text-start md:text-start sm:text-center'>Precisa acionar o seguro?</h2>
                </div>
                <CardList items={acionarSeguro} customStyles={{
                    title: "font-[600]"
                }} />
            </section >

            <section className='lg:p-16 md:p-16 sm:p-11 p-0'>
                <div>
                    <h2 className='px-3 text-[2rem] text-center lg:text-start md:text-start sm:text-center'>Perguntas Frequentes sobre o {card.text}</h2>
                </div>
                <Faq items={faqSeguros} />
            </section >

            {!showCarouselBefore && carouselContent}

            <section className='lg:p-16 md:p-16 sm:p-11 p-7'>
                <div>
                    <h2 className='text-[2rem] text-center lg:text-start md:text-start sm:text-center'>Você também pode gostar</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
                    {relatedCards.map((relatedCard) => (
                        <div key={relatedCard.id} className="rounded-lg shadow-lg">
                            <img
                                src={relatedCard.image}
                                alt={relatedCard.text}
                                className="w-full h-[200px] object-cover rounded-t-lg"
                            />
                            <div className='px-4 pb-5'>
                                <h3 className="text-lg font-semibold mt-2 pb-4">{relatedCard.text}</h3>
                                <p className="text-sm text-gray-600 pb-4">{relatedCard.description}</p>
                                <Button label='Saiba Mais' onBtnClick={() => navigate(`/paginaSeguro/${relatedCard.id}`)}></Button>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <section className='lg:p-16 md:p-16 sm:p-11 p-7 mb-[4rem]'>
                <div>
                    <h2 className='text-[2rem] text-center lg:text-start md:text-start sm:text-center'>Destaques</h2>
                </div>
                <CardList items={destaquesSeguros} customStyles={{
                    title: "!text-[1.7rem]"
                }} />
            </section>

            <section className='flex w-full bg-[#007fff] h-[5rem] items-center justify-center'>
                <h2 className='text-center text-white font-bold uppercase text-lg cursor-pointer hover:scale-[1.02] transition duration-200 ease-in-out'>Quero um {card.text}</h2>
            </section>



        </div>


    );
};

export default SeguroPage;
