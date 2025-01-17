import { useState } from "react";
import Button from "../Button/Button.tsx";
import useScrolled from "../../hooks/useScrolled.ts";
import { envioMsg } from "../../utils/envioMsg.ts";
import MenuLateral from "../MenuLateral/MenuLateral.tsx";

export default function NavBar() {
  const isScrolled = useScrolled();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("ParaVocê");

  const number = import.meta.env.VITE_WPP_NUMBER;
  const message = import.meta.env.VITE_WPP_MESSAGE;

  const renderContent = () => {
    if (activeTab === "ParaVocê") {
      return (
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <a href={`/paginaSeguro/seguroAuto`} className="hover:text-blue-500 block">Seguro Auto</a>
            <a href={`/paginaSeguro/seguroSaude`} className="hover:text-blue-500 block">Seguro Saúde</a>
            <a href={`/paginaSeguro/seguroVida`} className="hover:text-blue-500 block">Seguro de Vida</a>
            <a href={`/paginaSeguro/financiamentoConsorcio`} className="hover:text-blue-500 block">Financiamentos e Consórcios</a>
            
          </div>
          <div>
            <a href={`/paginaSeguro/seguroEletroeletronicos`} className="hover:text-blue-500 block">Seguro de Eletroeletrônicos</a>
            <a href={`/paginaSeguro/seguroViagem`} className="hover:text-blue-500 block">Seguro de Viagem</a>
            <a href={`/paginaSeguro/seguroFinanceiro`} className="hover:text-blue-500 block">Seguro Financeiro</a>
          </div>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <a href={`/paginaSeguro/seguroEmpresarial`} className="hover:text-blue-500 block">Seguro Empresarial</a>
          <a href={`/paginaSeguro/seguroGarantia`} className="hover:text-blue-500 block">Seguro de Garantia</a>
          <a href={`/paginaSeguro/seguroObra`} className="hover:text-blue-500 block">Seguro de Obras e Locações</a>
        </div>
        <div>
          <a href={`/paginaSeguro/MáquinasEEquipamentos`} className="hover:text-blue-500 block">Máquinas e Equipamentos</a>
          <a href={`/paginaSeguro/Eventos`} className="hover:text-blue-500 block">Eventos</a>
          <a href={`/paginaSeguro/Caminhão`} className="hover:text-blue-500 block">Caminhão</a>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`flex flex-wrap md:flex-nowrap lg:px-40 md:px-20 sm:px-8 px-8 gap-4 fixed top-0 w-full z-10 p-4 bg-[#ffffff] transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      {/* Botão de menu para dispositivos móveis */}
      <div
        className="md:hidden flex flex-col gap-1 cursor-pointer items-center justify-center"
        id="menuButton"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isMobileMenuOpen ? "rotate-45 absolute" : ""}`}
        ></span>
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isMobileMenuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isMobileMenuOpen ? "-rotate-45 absolute" : ""}`}
        ></span>
      </div>

      {/* Exibição do Menu Lateral */}
      {isMobileMenuOpen ? (
        <MenuLateral onClose={() => setIsMobileMenuOpen(false)} isOpen={true} />
      ) : (
        /* Menu Principal */
        <div
          className={`flex-col md:flex-row gap-16 items-center w-full hidden md:flex`}
        >
          <a
            href="/"
            className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
          >
            Home
          </a>

          <div
            className="relative"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <a
              href="#"
              className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
            >
              Seguros
            </a>

            {/* Dropdown para Seguros */}
            {isDropdownVisible && (
              <div
                className="absolute left-0 top-full w-[300px] md:w-[500px] bg-white shadow-lg border rounded-md"
              >
                {/* Tabs */}
                <div className="p-2 border-b flex gap-2">
                  <button
                    onClick={() => setActiveTab("ParaVocê")}
                    className={`p-2 rounded-md ${activeTab === "ParaVocê" ? "bg-blue-100 text-blue-600" : ""}`}
                  >
                    Para Você
                  </button>
                  <button
                    onClick={() => setActiveTab("ParaEmpresa")}
                    className={`p-2 rounded-md ${activeTab === "ParaEmpresa" ? "bg-blue-100 text-blue-600" : ""}`}
                  >
                    Para Empresa
                  </button>
                </div>
                {/* Conteúdo Dinâmico */}
                {renderContent()}
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
          >
            Sobre
          </a>
          <a
            href="/Contato"
            className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
          >
            Contato
          </a>
        </div>
      )}

      {/* Botão Direito */}
      <div className="ml-auto">
        <Button
          label="Contrate-nos"
          onBtnClick={() => envioMsg({ number, message })}
          className="whitespace-nowrap px-4 py-1"
        />
      </div>
    </div>
  );
}
