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
import bannerImg02 from "../imgs/bannerImg2.jpg";
import bannerImg04 from "../imgs/bannerImg4.jpg"
import Logo from "../imgs/Logo.png";
import useScrolled from "../hooks/useScrolled.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"; // Exemplo de ícone sólido
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";


function Home() {
  useDocumentTitle("Home");
  useFavicon("https://img.icons8.com/m_rounded/200/FFFFFF/home.png");
  const isScrolled = useScrolled();

  const number = import.meta.env.VITE_WPP_NUMBER;
  const message = import.meta.env.VITE_WPP_MESSAGE;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true,     // Se `true`, animação ocorre apenas uma vez ao rolar a página
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#ffffff] overflow-x-hidden"
      id="main"
    >
      <NavBar />

      {/*Seção do banner inicial*/}

      <section className="bg-gradient-to-b from-blue-700 to-white min-h-screen relative">
        {/* Tela de boas-vindas com logo */}
        <div
          className="flex flex-col items-center justify-center h-screen w-screen"
          data-aos="fade-in">
          <img
            src={Logo}
            alt="Logo Voogle"
            className="h-auto mb-6"
            loading="lazy"
            data-aos="zoom-in"
          />
          <div className="animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-aos="fade-down"
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
          <div className="text-center mb-8" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-[#FFF9Fc] drop-shadow-lg">
              Bem-vindo à <span className="text-[#44437A]">Voogle</span>
            </h1>
            <p className="text-[#FFF9Fc] text-lg mt-3 opacity-90 font-medium">
              Descubra as melhores<span className="text-[#44437A] font-medium text-lg mt-3 opacity-90"> soluções</span> em seguros, financiamentos e consórcios sob medida para você.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
            data-aos="fade-up"
          >
            {/* Card 1 - Proteção para seu Veículo */}
            <div
              className=""
              data-aos="fade-right"
              style={{ position: "relative", width: "100%", height: "35rem", overflow: "hidden", borderRadius: "10px" }}>
              {/* Imagem de fundo */}
              <img
                src="https://i0.wp.com/catagua.com.br/wp-content/uploads/2021/09/adobestock-645776860.jpeg?fit=1024%2C683&ssl=1"
                alt="Imagem do card"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Camada preta semitransparente */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",// Fundo preto com opacidade
                  zIndex: 1,
                }}
              ></div>

              {/* Título */}
              <h2
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: "10px",
                  color: "white",
                  zIndex: 2,
                  fontSize: "36px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontWeight: "bolder"
                }}
              >
                Financeiro
              </h2>

              <div className="">
                <p className="hover:text-blue-200 hover:scale-x-105 transition-transform duration 0.3 cursor-pointer"
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "12px",
                    color: "lightBlue",
                    zIndex: 2,
                    fontSize: "16px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontWeight: "bolder"
                  }}>
                  Saiba Mais <span className="text-white ml-1 ">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </span>
                </p>
              </div>
            </div>


            {/* Card 2 - Financeiro */}
            <div
              className=""
              data-aos="fade-up"
              style={{ position: "relative", width: "100%", height: "35rem", overflow: "hidden", borderRadius: "10px" }}>
              {/* Imagem de fundo */}
              <img
                src={bannerImg04}
                alt="Imagem do card"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Camada preta semitransparente */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",// Fundo preto com opacidade
                  zIndex: 1,
                }}
              ></div>

              {/* Título */}
              <h2
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: "10px",
                  color: "white",
                  zIndex: 2,
                  fontSize: "36px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontWeight: "bolder"
                }}
              >
                Familiar
              </h2>

              <div >
                <p className="hover:text-blue-200 hover:scale-x-105 transition-transform duration 0.3 cursor-pointer"
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "12px",
                    color: "lightBlue",
                    zIndex: 2,
                    fontSize: "16px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontWeight: "bolder"
                  }}>
                  Saiba Mais <span className="text-white">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </span>
                </p>
              </div>
            </div>

            {/* Card 3 - Suas Finanças */}
            <div
              className=""
              data-aos="fade-left"
              style={{ position: "relative", width: "100%", height: "35rem", overflow: "hidden", borderRadius: "10px" }}>
              {/* Imagem de fundo */}
              <img
                src={bannerImg02}
                alt="Imagem do card"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Camada preta semitransparente */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",// Fundo preto com opacidade
                  zIndex: 1,
                }}
              ></div>

              {/* Título */}
              <h2
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: "10px",
                  color: "white",
                  zIndex: 2,
                  fontSize: "36px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontWeight: "bolder"
                }}
              >
                Veicular
              </h2>

              <div >
                <p className="hover:text-blue-200 hover:scale-x-105 transition-transform duration 0.3 cursor-pointer"
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "12px",
                    color: "lightBlue",
                    zIndex: 2,
                    fontSize: "16px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontWeight: "bolder"
                  }}>
                  Saiba Mais <span className="text-white">
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Seção dos Seguros Primarios*/}

      <section
        className="flex flex-col gap-16 mt-[6%] pl-8 pr-8 lg:pl-40 lg:pr-40 md:pl-15 md:pr-15 sm:pl-8 sm:pr-8 sm:mt-[10%] justify-center"
        id="CardContainer"
      >
        {/* Seguro 1 */}
        <div
          id="Seguro1"
          className="flex flex-col md:flex-row gap-6 items-center justify-center"
          data-aos="fade-up-right"
        >
          {/* Imagem */}
          <div className="w-full md:w-[60%] h-[250px] md:h-[350px] shadow-lg bg-gray-100">
            <img
              src={seguroVeiculoImg}
              alt="Seguro de Automóveis"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Informações */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 px-4 sm:px-6 justify-between">
            <h1 className="text-2xl font-bold text-[#1D2745] sm:text-3xl md:text-4xl">
              Seguro de Automóveis
            </h1>
            <p className="text-base sm:text-lg text-justify text-[#44537A] leading-relaxed font-medium">
              Proteja seu veículo contra roubo, acidentes e danos com as
              melhores condições do mercado. Cobertura completa e assistência
              24h.
            </p>
            <p className="text-base sm:text-lg text-justify text-[#44537A] leading-relaxed font-medium">
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
          className="flex flex-col md:flex-row-reverse gap-6 items-center justify-center"
          data-aos="fade-up-left"
        >
          {/* Imagem */}
          <div className="w-full md:w-[60%] h-[250px] md:h-[350px] shadow-lg bg-gray-100">
            <img
              src={seguroSaudeImg}
              alt="Seguro de Saúde"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Informações */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 px-4 sm:px-6 text-end items-end">
            <h1 className="text-2xl font-bold text-[#1D2745] sm:text-3xl md:text-4xl">
              Seguro de Saúde
            </h1>
            <p
              style={{ textAlignLast: "right" }}
              className="text-base sm:text-lg text-justify text-[#44537A] leading-relaxed font-medium"
            >

              Garanta a sua saúde e a de sua família com uma cobertura médica completa e de qualidade.
              Oferecemos planos personalizados, totalmente adaptados às suas necessidades.
            </p>
            <p
              style={{ textAlignLast: "right" }}
              className="text-base sm:text-lg text-justify text-[#44537A] leading-relaxed font-medium"
            >
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
          className="flex flex-col md:flex-row gap-6 items-center justify-center"
          data-aos="fade-up-right"
        >
          {/* Imagem */}
          <div className="w-full md:w-[60%] h-[250px] md:h-[350px] shadow-lg bg-gray-100">
            <img
              src={seguroVidaImg}
              alt="Seguro de Vida"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Informações */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 px-4 sm:px-6">
            <h1 className="text-2xl font-bold text-[#1D2745] sm:text-3xl md:text-4xl">
              Seguro de Vida
            </h1>
            <p className="text-base sm:text-lg text-justify text-[#44537A] leading-relaxed font-medium">
              Proporcione segurança financeira à sua família em momentos
              inesperados. Cobertura ideal para imprevistos.
            </p>
            <p className="text-base sm:text-lg text-justify text-[#44537A] leading-relaxed font-medium">
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
          className="flex flex-col md:flex-row-reverse gap-6 items-center justify-center"
          data-aos="fade-up-left"
        >
          {/* Imagem */}
          <div className="w-full md:w-[60%] h-[250px] md:h-[350px] shadow-lg bg-gray-100">
            <img
              src={financiamentoEConsorcioImg}
              alt="Financiamentos e Consórcios"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Informações */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 px-4 sm:px-6 text-end items-end">
            <h1 className="text-2xl font-bold text-[#1D2745] sm:text-3xl md:text-4xl">
              Financiamentos e Consórcios
            </h1>
            <p style={{ textAlignLast: "right" }} className="text-base sm:text-lg text-justify md:text-end text-[#44537A] leading-relaxed font-medium">
              Realize seus sonhos com as melhores opções de financiamento e
              consórcio. Flexibilidade e facilidade para seu orçamento.
            </p>
            <p style={{ textAlignLast: "right" }} className="text-base sm:text-lg text-justify md:text-end text-[#44537A] leading-relaxed font-medium">
              Adquira seu imóvel ou veículo com parcelas que cabem no bolso.
            </p>
            <Button
              label="Saiba Mais"
              className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A] hover:scale-105"
            />
          </div>
        </div>

      </section>

      {/* Seção das Vantagens da Plataforma */}
      <section className="mt-[10%] px-4 sm:px-8 md:px-16 lg:px-40" id="SecaoVantagens">
        <h1 className="text-[24px] lg:text-4x1 sm:text-3xl md:text-4xl font-bold text-center mb-8 mt-8 text-[#1D2745]" data-aos="fade-up"
          data-aos-duration="1000"
        >
          Vantagens da Voogle
        </h1>

        <section className="flex flex-col items-center mt-8 md:mt-16 mb-8 md:mb-16">
          <div className="flex flex-wrap md:flex-nowrap bg-[#E0F0FF] rounded-3xl shadow-lg w-full max-w-[1200px] overflow-hidden justify-center" data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {/* Conteúdo de Texto */}
            <div className="flex flex-col justify-center p-4 sm:p-8 md:w-1/2" data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2745] mb-4">
                Porque cotar com a{" "}
                <span className="text-[#44537A]">Voogle?</span>
              </h2>
              <p className="text-sm sm:text-base text-justify text-[#44537A] leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo
                suscipit repellat ratione blanditiis officia earum et, odit assumenda
              </p>
              <p className="text-sm sm:text-base text-justify text-[#44537A] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                perspiciatis maiores pariatur ea eaque ullam, magni at ipsam accusantium
                ut. Dolorem, pariatur!
              </p>
            </div>

            {/* Imagem e Benefícios */}
            <div className="relative flex items-center md:w-1/2 bg-[#E0F0FF] " data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* Imagem Principal */}
              <div className="relative z-0">
                <img
                  src="https://img.freepik.com/fotos-gratis/homem-maduro-feliz-tendo-consultas-com-um-medico-sobre-apolice-de-seguro-de-saude-durante-uma-reuniao-na-clinica_637285-1869.jpg"
                  alt="Homem feliz usando notebook"
                  className="lg:rounded-tl-[2rem] lg:rounded-bl-[2rem] md:rounded-tl-[2rem] md:rounded-bl-[2rem] w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </section>



      {/*Seção dos Seguros Secundarios*/}

      {/* Seção dos Seguros Secundários */}
      <section className="mt-[7%] px-4 sm:px-8 md:px-16 lg:px-40 relative items-center" id="SecaoCarrossel">
        <h1
          className="text-2xl font-bold text-center mb-8 mt-8 text-[#1D2745] lg:text-4x1 sm:text-3xl md:text-4xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Qual seguro você precisa?
        </h1>

        <div data-aos="zoom-in" data-aos-duration="1000">
          <SeguroCarousel />
        </div>
      </section>


      {/*Seção dos Depoimentos de Clientes*/}

      <section
        className="mt-[7%] mb-[7%] px-4 md:px-20 lg:px-40 w-[90%] text-justify"
        id="SecaoDepoimentos"
      >
        <h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 mt-8 text-[#1D2745]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          O que nossos clientes falam sobre a Voogle
        </h1>
        <div className="flex flex-col lg:flex-row">
          {/* Coluna de texto */}
          <div
            className="w-full lg:w-[40%] flex flex-col gap-6 mt-[32px] mb-[40px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <p className="text-base md:text-lg leading-relaxed text-[#44537A] font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti
              quos adipisci, mollitia earum maxime quam excepturi, rem autem ipsam
              molestiae reprehenderit minus, officiis distinctio sequiqu culpa
              voluptas? Veritatis, ipsa!
            </p>

            <p className="text-base md:text-lg leading-relaxed text-[#44537A] font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
              illum explicabo voluptates id beatae dolores asperiores fugiat ipsam
              reprehenderit esse, recusandae magnam assumenda quos in autem
              laboriosam, excepturi non alias.
            </p>

            <div className="mt-4 lg:mt-auto flex justify-center lg:justify-start">
              <Button
                label="Contrate-nos"
                onBtnClick={() => envioMsg({ number, message })}
              />
            </div>
          </div>

          {/* Carrossel de clientes */}
          <div
            className="w-[100%] ml-[-5%] lg:ml-[0] lg:w-[60%] mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
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
