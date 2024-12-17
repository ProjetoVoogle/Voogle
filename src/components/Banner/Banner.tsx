import Button from "../Button/Button";

function Banner() {
  return (
    <div className="mx-auto my-8 bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 ">
      
      {/* Conteúdo do Banner (Texto e Título) */}
      <div className="p-6 flex flex-col justify-center mt-[6%]">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Título do Banner
        </h1>
        <p className="text-gray-600 mb-4">
          Esta é uma descrição do banner, onde você pode colocar um texto
          explicativo ou qualquer outro conteúdo relevante para chamar a atenção
          do usuário. O conteúdo pode ser ajustado conforme a necessidade.
        </p>
        {/* Botão de ação */}
        <div className="flex bottom-0 left-0 mt-auto">
        <Button 
            label="Saiba Mais"
            className="bg-[#E1E7F8] hover:text[#E1E7F8] !border-0"
        />
        </div>
      </div>
      
      {/* Imagem do Banner */}
      <div>
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Imagem do Banner"
          className="w-full h-56 sm:h-64 md:h-80 object-cover"
        />
      </div>
      
    </div>
  );
}

export default Banner;