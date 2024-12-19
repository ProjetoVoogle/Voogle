import React from "react";

function Footer() {
  return (
    <div className="relative bg-gray-900 text-white mt-auto w-screen overflow-x-hidden">
      {/* Onda Superior */}
      <div className="relative -top-1">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[80px]"
        >
          <path
            d="M0,0V46.29c120,22,240,22,360,0S600,2,720,24s240,22,360,0S1200,2,1200,2V0Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>

      {/* Conteúdo do Footer */}
      <div className="pt-16 pb-8 px-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text sm:text-start bg-gray-900 lg:px-20 xl:px-40">
        {/* Coluna 1 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-blue-500">Sobre a Voogle</h2>
          <ul className="space-y-1">
            <li className="hover:text-blue-400 cursor-pointer">Quem Somos</li>
            <li className="hover:text-blue-400 cursor-pointer">Fale Conosco</li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-blue-500">Redes Sociais</h2>
          <ul className="space-y-1">
            <li className="hover:text-blue-400 cursor-pointer">Instagram</li>
            <li className="hover:text-blue-400 cursor-pointer">Facebook</li>
            <li className="hover:text-blue-400 cursor-pointer">Twitter</li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-blue-500">Tipos de Seguro</h2>
          <ul className="space-y-1">
            <li className="hover:text-blue-400 cursor-pointer">Seguro 1</li>
            <li className="hover:text-blue-400 cursor-pointer">Seguro 2</li>
            <li className="hover:text-blue-400 cursor-pointer">Seguro 3</li>
            <li className="hover:text-blue-400 cursor-pointer">Seguro 4</li>
          </ul>
        </div>

        {/* Coluna 4 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-blue-500">Privacidade</h2>
          <ul className="space-y-1">
            <li className="hover:text-blue-400 cursor-pointer">Política de Segurança</li>
            <li className="hover:text-blue-400 cursor-pointer">Segurança</li>
            <li className="hover:text-blue-400 cursor-pointer">Termos de Uso</li>
          </ul>
        </div>

        {/* Coluna 5 */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-blue-500">Sobre a plataforma</h2>
          <ul className="space-y-1">
            <li className="hover:text-blue-400 cursor-pointer">Perguntas Frequentes</li>
          </ul>
        </div>
      </div>

      {/* Rodapé com Copyright */}
      <div className="relative text-center py-4 bg-gray-900">
        <p className="text-sm">&copy; 2024 Voogle. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;