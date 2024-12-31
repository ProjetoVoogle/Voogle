import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allCards } from '../../utils/CardsSeguros'; // Importar a lista de seguros
import { FeatureCardProps } from '../Card/FeatureCard';
import Button from '../Button/Button';

const SeguroPage: React.FC = () => {
    const { id } = useParams(); // Pega o parâmetro de URL (id do seguro)
    const [card, setCard] = useState<FeatureCardProps | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const selectedCard = allCards.find((card: { text: string; }) => card.text.toLowerCase() === id?.toLowerCase());
        if (selectedCard) {
            setCard(selectedCard);
        } else {
            navigate('/'); // Redireciona para a página inicial se o seguro não for encontrado
        }
    }, [id, navigate]);

    if (!card) return <div>Carregando...</div>;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Seção do Vídeo */}
            <div className="relative h-[60vh]">
                <div className='p-8 absolute z-10'>
                    <Button label="Voltar" onBtnClick={() => navigate("/")} className='' />
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
                <div className="absolute bottom-0 z-10 flex flex-col items-start p-8 text-white">
                    <h1 className="text-4xl font-bold mb-4">{card.text}</h1>
                    <p className="text-lg mb-6">{card.description}</p>
                </div>
            </div>

            {/* Informações abaixo do vídeo */}
            <div className="relative z-20 flex-grow p-8 bg-gray-100 text-gray-900">

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
