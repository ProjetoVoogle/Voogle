import Footer from "../components/Footer/Footer.tsx";
import NavBar from "../components/Navbar/Navbar.tsx";
import useFavicon from "../hooks/useFavicon.ts";
import useDocumentTitle from "../hooks/useTitle.ts";
import Button from "../components/Button/Button.tsx";
import SeguroCarousel from "../utils/CardsSeguros.tsx";
import ClientesCarousel from "../utils/CardsClients.tsx";
import { envioMsg } from "../utils/envioMsg.ts";
import seguroSaudeImg from "../imgs/seguroSaude.png";
import seguroVeiculoImg from "../imgs/seguroVeiculo.jpeg";
import seguroVidaImg from "../imgs/seguroVida.png";
import financiamentoEConsorcioImg from "../imgs/financiamentoEConsorcio.jpeg";
import bannerImg01 from "../imgs/bannerImg1.jpg";
import bannerImg02 from "../imgs/bannerImg2.jpg";
import bannerImg04 from "../imgs/bannerImg4.jpg";
import bannerImg05 from "../imgs/bannerImg5.jpg";
import bannerImg06 from "../imgs/bannerImg6.jpg";
import bannerImg07 from "../imgs/bannerImg7.jpg";
import bannerImg08 from "../imgs/bannerImg8.jpg";
import bannerImg09 from "../imgs/bannerImg9.jpg"
import logo from "../imgs/Logo.png";
import useScrolled from "../hooks/useScrolled.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"; // Exemplo de ícone sólido

function Home() {
  useDocumentTitle("Home");
  useFavicon("https://img.icons8.com/m_rounded/200/FFFFFF/home.png");
  const isScrolled = useScrolled();

  const number = import.meta.env.VITE_WPP_NUMBER;
  const message = import.meta.env.VITE_WPP_MESSAGE;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#ffffff] overflow-x-hidden"
      id="main"
    >
      <NavBar />

      {/*Seção do banner inicial*/}

      <section className="bg-gradient-to-b from-blue-700 to-white min-h-screen relative">
        {/* Tela de boas-vindas com logo */}
        <div className="flex flex-col items-center justify-center h-screen">
          <img
            src={logo}
            alt="Logo Voogle"
            className="h-auto mb-6"
            loading="lazy"
          />
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div id="main-content" className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#003366]">
              Bem-vindo à Voogle
            </h1>
            <p className="text-gray-700 mt-2">
              Encontre as melhores soluções de seguros, financiamentos e
              consórcios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Card 1 - Proteção para seu Veículo */}
            <div className="bg-white rounded-lg p-5 shadow-md max-h-fit">
              <h2 className="text-lg font-bold text-[#003366] mb-4 !text-start">
                Proteção para seu Veículo
              </h2>
              <div className="flex gap-4 justify-center">
                <img
                  src={bannerImg01}
                  alt="Proteção Veículo 1"
                  className="rounded-lg object-cover w-1/2"
                  loading="lazy"
                />
                <img
                  src={bannerImg02}
                  alt="Proteção Veículo 2"
                  className="rounded-lg object-cover w-1/2"
                  loading="lazy"
                />
              </div>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline mt-4 block text-start"
              >
                Conheça o seguro veicular
              </a>
            </div>

            {/* Card 2 - Seguro para Família */}
            <div className="bg-white rounded-lg p-5 shadow-md max-h-fit">
              <h2 className="text-lg font-bold text-[#003366] mb-4 text-start">
                Financeiro
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-start">
                  <p className="text-sm text-gray-600">Seguro 01</p>
                  <img
                    src={bannerImg06}
                    className="rounded-lg object-cover w-full mb-2"
                  /> 
                </div>
                <div className="text-start">
                   <p className="text-sm text-gray-600">Seguro 02</p>
                  <img
                    src={bannerImg09}
                    className="rounded-lg object-cover w-full mb-2"
                  />
                 
                </div>
                <div className="text-start">
                  <p className="text-sm text-gray-600">Seguro 03</p>
                  <img
                    src={bannerImg08}
                    className="rounded-lg object-cover w-full mb-2"
                  />
                  
                </div>
                <div className="text-start">
              
                  <p className="text-sm text-gray-600">Seguro 04</p>
                  <img
                    src={bannerImg07}
                    className="rounded-lg object-cover w-full mb-2"
                  />
                  
                </div>
              </div>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline mt-4 block text-start"
              >
                Aproveite
              </a>
            </div>

            {/* Card 3 - Suas Finanças */}
            <div className="bg-white rounded-lg p-5 shadow-md max-h-fit">
              <h2 className="text-lg font-bold text-[#003366] mb-4 text-start">
                Garanta um Seguro para Sua Família
              </h2>
              <div className="space-y-4">
                <img
                  src={bannerImg04}
                  className="rounded-lg w-full object-cover"
                  alt="Seguro Família"
                  loading="lazy"
                />
              </div>
              <img
                src={bannerImg05}
                className="rounded-lg mt-4 w-full object-cover"
                alt="Seguro Extra"
                loading="lazy"
              />
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline mt-4 block text-start"
              >
                Visualizar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*Seção dos Seguros Primarios*/}

      <section
        className="flex flex-col gap-16 mt-[6%] pl-40 pr-40"
        id="CardContainer"
      >
        {/* Seguro 1 */}
        <div
          id="Seguro1"
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Imagem */}
          <div className="md:w-[60%] w-full h-[350px] shadow-lg bg-gray-100">
            <img
              src={seguroVeiculoImg}
              alt="Seguro de Automóveis"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Informações */}
          <div className="md:w-[40%] !h-full w-full flex flex-col gap-3 pl-6 pr-6 justify-between">
            <h1 className="text-4xl font-bold text-[#1D2745]">
              Seguro de Automóveis
            </h1>
            <p className="text-lg text-[#44537A] leading-relaxed font-medium">
              Proteja seu veículo contra roubo, acidentes e danos com as
              melhores condições do mercado. Cobertura completa e assistência
              24h.
            </p>
            <p className="text-lg text-[#44537A] leading-relaxed font-medium">
              Escolha o seguro ideal para seu perfil e viaje com tranquilidade.
            </p>
            <Button
              label="Saiba Mais"
              className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A] hover:scale-105"
            />
          </div>
        </div>

        {/* Seguro 2 */}
        <div
          id="Seguro2"
          className="flex flex-col md:flex-row-reverse gap-6 items-center"
        >
          {/* Imagem */}
          <div className="md:w-[60%] w-full h-[350px] shadow-lg bg-gray-100">
            <img
              src={seguroSaudeImg}
              alt="Seguro de Saúde"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Informações */}
          <div className="md:w-[40%] w-full flex flex-col gap-3 pl-6 pr-6 text-end items-end">
            <h1 className="text-4xl font-bold text-[#1D2745]">
              Seguro de Saúde
            </h1>
            <p className="text-lg text-[#44537A] leading-relaxed font-medium">
              Garanta sua saúde e de sua família com cobertura médica completa.
              Planos adaptados às suas necessidades.
            </p>
            <p className="text-lg text-[#44537A] leading-relaxed font-medium">
              Tenha acesso a consultas, exames e internações com total
              comodidade e rapidez.
            </p>
            <Button
              label="Saiba Mais"
              className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A] hover:scale-105"
            />
          </div>
        </div>

        {/* Seguro 3 */}
        <div
          id="Seguro3"
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          {/* Imagem */}
          <div className="md:w-[60%] w-full h-[350px] shadow-lg bg-gray-100">
            <img
              src={seguroVidaImg}
              alt="Seguro de Vida"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Informações */}
          <div className="md:w-[40%] w-full flex flex-col gap-3 pl-6 pr-6">
            <h1 className="text-4xl font-bold text-[#1D2745]">
              Seguro de Vida
            </h1>
            <p className="text-lg text-[#44537A] leading-relaxed font-medium">
              Proporcione segurança financeira à sua família em momentos
              inesperados. Cobertura ideal para imprevistos.
            </p>
            <p className="text-lg text-[#44537A] leading-relaxed font-medium">
              Planos flexíveis para atender suas prioridades e objetivos de
              vida.
            </p>
            <Button
              label="Saiba Mais"
              className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A] hover:scale-105"
            />
          </div>
        </div>

        {/* Seguro 4 */}
        <div
          id="Seguro4"
          className="flex flex-col md:flex-row-reverse gap-6 items-center"
        >
          {/* Imagem */}
          <div className="md:w-[60%] w-full h-[350px] shadow-lg bg-gray-100">
            <img
              src={financiamentoEConsorcioImg}
              alt="Financiamentos e Consórcios"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Informações */}
          <div className="md:w-[40%] w-full flex flex-col gap-3 pl-6 pr-6 text-end items-end">
            <h1 className="text-4xl font-bold text-[#1D2745]">
              Financiamentos e Consórcios
            </h1>
            <p className="text-lg text-[#44537A] leading-relaxed font-medium">
              Realize seus sonhos com as melhores opções de financiamento e
              consórcio. Flexibilidade e facilidade para seu orçamento.
            </p>
            <p className="text-lg text-[#44537A] leading-relaxed font-medium">
              Adquira seu imóvel ou veículo com parcelas que cabem no bolso.
            </p>
            <Button
              label="Saiba Mais"
              className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A] hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/*Seção das Vantagens da Plataforma*/}

      <section className="mt-[7%] pl-40 pr-40" id="SecaoVantagens">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8 text-[#1D2745]">
          Vantagens da Voogle
        </h1>

        <section className="flex justify-center items-center mt-16 mb-16 px-8">
          <div className="flex flex-wrap md:flex-nowrap bg-[#FFF8F0] rounded-3xl shadow-lg w-full max-w-[1200px] overflow-hidden">
            {/* Conteúdo de Texto */}
            <div className="flex flex-col justify-center p-8 md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1D2745] mb-4">
                Porque cotar com a{" "}
                <span className="text-[#44537A]">Voogle?</span>
              </h2>
              <p className="text-[#44537A] leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                explicabo suscipit repellat ratione blanditiis officia earum et,
                odit assumenda
              </p>
              <p className="text-[#44537A] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                perspiciatis maiores pariatur ea eaque ullam, magni at ipsam
                accusantium ut. Dolorem, pariatur!
              </p>
            </div>

            {/* Imagem e Benefícios */}
            <div className="relative flex items-center md:w-1/2 bg-[#FFF8F0]">
              {/* Benefícios com Ícones 
              <div className="absolute top-0 left-0 flex flex-wrap justify-start p-8 gap-6 z-10">
                <div className="flex flex-col items-center text-center text-[#44537A] font-semibold">
                  <span className="text-3xl mb-2">🛡️</span>
                  <p className="text-sm">Vantagem 1</p>
                </div>
                <div className="flex flex-col items-center text-center text-[#44537A] font-semibold">
                  <span className="text-3xl mb-2">🔖</span>
                  <p className="text-sm">Vantagem 2</p>
                </div>
                <div className="flex flex-col items-center text-center text-[#44537A] font-semibold">
                  <span className="text-3xl mb-2">👨‍👩‍👧‍👦</span>
                  <p className="text-sm">Vantagem 3</p>
                </div>
                <div className="flex flex-col items-center text-center text-[#44537A] font-semibold">
                  <span className="text-3xl mb-2">⏰</span>
                  <p className="text-sm">Vantagem 4</p>
                </div>
                <div className="flex flex-col items-center text-center text-[#44537A] font-semibold">
                  <span className="text-3xl mb-2">🛠️</span>
                  <p className="text-sm">Vantagem 5</p>
                </div>
                <div className="flex flex-col items-center text-center text-[#44537A] font-semibold">
                  <span className="text-3xl mb-2">📋</span>
                  <p className="text-sm">Vantagem 6</p>
                </div>
              </div>
*/}
              {/* Imagem Principal */}
              <div className="relative z-0">
                <img
                  src="https://img.freepik.com/fotos-gratis/homem-maduro-feliz-tendo-consultas-com-um-medico-sobre-apolice-de-seguro-de-saude-durante-uma-reuniao-na-clinica_637285-1869.jpg"
                  alt="Homem feliz usando notebook"
                  className="rounded-tl-[5rem] rounded-bl-[5rem] w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/*Seção dos Seguros Secundarios*/}

      <section className="mt-[7%]" id="SecaoCarrossel">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8 text-[#1D2745]">
          Qual seguro você precisa?
        </h1>

        <SeguroCarousel />
      </section>

      {/*Seção dos Depoimentos de Clientes*/}

      <section className="mt-[7%] mb-[7%] pl-40 pr-40" id="SecaoDepoimentos">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8 text-[#1D2745]">
          O que nossos clientes falam sobre a Voogle
        </h1>
        <div className="flex flex-row">
          <div className="w-[40%] justify-between flex flex-col mt-[32px] mb-[80px]">
            <p className="text-lg leading-relaxed text-[#44537A] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              corrupti quos adipisci, mollitia earum maxime quam excepturi, rem
              autem ipsam molestiae reprehenderit minus, officiis distinctio s
              equi culpa voluptas? Veritatis, ipsa!
            </p>

            <p className="text-lg leading-relaxed text-[#44537A] font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur illum explicabo voluptates id beatae dolores asperiores
              fugiat ipsam reprehenderit esse, recusandae magnam assumenda quos
              in autem laboriosam, excepturi non alias.
            </p>
            <div className="mt-100%">
              <Button
                label="Contrate-nos"
                onBtnClick={() => envioMsg({ number, message })}
              />
            </div>
          </div>

          <div className="w-[60%]">
            <ClientesCarousel />
          </div>
        </div>
      </section>

      {isScrolled && (
        <div
          className="fixed bottom-10 right-4 bg-blue-500 text-white p-3 rounded-full  shadow-lg cursor-pointer hover:bg-blue-600"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FontAwesomeIcon icon={faHome} />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;
