import React from "react";

function Footer() {
    return (
        <div className="relative bg-gray-900 text-white mt-auto w-screen overflow-x-hidden ">
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
            <div className="pt-16 pb-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center sm:text-left bg-gray-900 pl-40 pr-40">
                {/* Coluna 1 */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-blue-500">Sobre a Voogle</h2>
                    <ul>
                        <li>Quem Somos</li>
                        <li>Fale Conosco</li>
                    </ul>
                </div>

                {/* Coluna 2 */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-blue-500">Redes Sociais</h2>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>

                {/* Coluna 3 */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-blue-500">Tipos de Seguro</h2>
                    <ul>
                        <li>Seguro 1</li>
                        <li>Seguro 2</li>
                        <li>Seguro 3</li>
                        <li>Seguro 4</li>
                    </ul>
                </div>

                {/* Coluna 4 */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-blue-500">Privacidade</h2>
                    <ul>
                        <li>Política de Segurança</li>
                        <li>Segurança</li>
                        <li>Termos de Uso</li>
                    </ul>
                </div>

                {/* Coluna 5 */}
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-blue-500">Sobre a plataforma</h2>
                    <ul>
                        <li>Perguntas Frequentes</li>
                    </ul>
                </div>
            </div>

            {/* Rodapé com Copyright */}
            <div className="relative text-center py-4 bg-gray-900">
                <p>&copy; 2024 Voogle. Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;
