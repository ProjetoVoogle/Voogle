import React from 'react';
import Button from '../Button/Button';

export interface FeatureCardProps {
  text: string;
  description: string;
  image?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
  category?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  text,
  description,
  image,
  buttonLabel,
  onButtonClick,
  className,
}) => {
  return (
    <div
      className={`flex max-w-96 bg-[#FFF8F0] shadow-lg p-4 hover:shadow-2xl transition duration-300 ${className}`}
    >
      {/* Conteúdo Esquerdo (Texto e Botão) */}
      <div className="flex-1 flex flex-col space-y-4 pr-4">
        <h1 className="text-xl font-bold">{text}</h1>
        <p className="text-gray-600">{description}</p>
        {buttonLabel ? (
          <Button
            label={buttonLabel}
            onBtnClick={onButtonClick ? onButtonClick : undefined}
          />

        ) : undefined}
      </div>
      {/* Imagem Opcional */}
      {image && (
        <img
          src={image}
          alt={text}
          className="w-32 h-24 object-cover rounded-lg"
        />
      )}
    </div>
  );
};

export default FeatureCard;
