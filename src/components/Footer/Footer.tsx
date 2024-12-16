import React from "react";

function Footer() {
    return (
        <div className="bg-gray-800 text-white p-4 mt-auto w-screen">
            <h1>
                {/* Logo */}
            </h1>
            <div className="grid grid-flow-col gap-4 justify-around">
                <div>
                    <h2 className="text-2xl text-blue-500 mb-4">Sobre a Voogle</h2>
                    <ul className="space-y-2 flex flex-col items-center">
                        <li>Quem Somos</li>
                        <li>Fale Conosco</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-blue-500 mb-4">Redes Sociais</h2>
                    <ul className="space-y-2 flex flex-col items-center">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-blue-500 mb-4">Tipos de Seguro</h2>
                    <ul className="space-y-2 flex flex-col items-center">
                        <li>Seguro 1</li>
                        <li>Seguro 2</li>
                        <li>Seguro 3</li>
                        <li>Seguro 4</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-blue-500 mb-4">Privacidade</h2>
                    <ul className="space-y-2 flex flex-col items-center">
                        <li>Política de Segurança</li>
                        <li>Segurança</li>
                        <li>Termos de Uso</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-blue-500 mb-4">Sobre a plataforma</h2>
                    <ul className="space-y-2 flex flex-col items-center">
                        <li>Perguntas Frequentes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;