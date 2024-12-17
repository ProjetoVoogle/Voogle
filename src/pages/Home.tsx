import Banner from "../components/Banner/Banner.tsx";
import FeatureCard from "../components/Card/FeatureCard.tsx";
import Footer from "../components/Footer/Footer.tsx";
import NavBar from "../components/Navbar/Navbar.tsx";
import useFavicon from "../hooks/useFavicon.ts";
import useDocumentTitle from "../hooks/useTitle.ts";
import Button from "../components/Button/Button.tsx";
import SeguroCarousel from "../utils/CardsSeguros.tsx";
import ClientesCarousel from "../utils/CardsClients.tsx";
import Dropdown from "../components/DropDown/Dropdown.tsx";
import { envioMsg } from "../utils/envioMsg.ts";
import seguroSaudeImg from "../imgs/seguroSaude.png"
import seguroVeiculoImg from "../imgs/seguroVeiculo.jpeg"
import seguroVidaImg from "../imgs/seguroVida.png"
import financiamentoEConsorcioImg from "../imgs/financiamentoEConsorcio.jpeg"

function Home() {
  useDocumentTitle("Home");
  useFavicon("https://img.icons8.com/m_rounded/200/FFFFFF/home.png");

  const number = import.meta.env.VITE_WPP_NUMBER
  const message = import.meta.env.VITE_WPP_MESSAGE

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen pl-40 pr-40 bg-[#E1E7F8] overflow-x-hidden"
      id="main"
    >
      <NavBar />

      {/*Seção do banner inicial*/}

      <div
        className="flex-grow flex items-center justify-center pt-20 w-[100%]"
        id="Titulo"
      >
        <Banner />
      </div>

      {/*Seção dos Seguros Primarios*/}

      <section
  className="flex flex-col gap-16 mt-[6%]"
  id="CardContainer"
>
  {/* Seguro 1 */}
  <div id="Seguro1" className="flex flex-col md:flex-row gap-6 items-center">
    {/* Imagem */}
    <div className="md:w-[60%] w-full h-[350px] shadow-lg bg-gray-100">
      <img
        src={seguroVeiculoImg}
        alt="Seguro de Automóveis"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Informações */}
    <div className="md:w-[40%] !h-full w-full flex flex-col gap-3 pl-6 pr-6 justify-between">
      <h1 className="text-4xl font-bold text-[#1D2745]">Seguro de Automóveis</h1>
      <p className="text-lg text-[#44537A] leading-relaxed font-medium">
        Proteja seu veículo contra roubo, acidentes e danos com as melhores
        condições do mercado. Cobertura completa e assistência 24h.
      </p>
      <p className="text-lg text-[#44537A] leading-relaxed font-medium">
        Escolha o seguro ideal para seu perfil e viaje com tranquilidade.
      </p>
      <Button
        label="Saiba Mais"
        className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]"
      />
    </div>
  </div>

  {/* Seguro 2 */}
  <div id="Seguro2" className="flex flex-col md:flex-row-reverse gap-6 items-center">
    {/* Imagem */}
    <div className="md:w-[60%] w-full h-[350px] shadow-lg bg-gray-100">
      <img
        src={seguroSaudeImg}
        alt="Seguro de Saúde"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Informações */}
    <div className="md:w-[40%] w-full flex flex-col gap-3 pl-6 pr-6 text-end items-end">
      <h1 className="text-4xl font-bold text-[#1D2745]">Seguro de Saúde</h1>
      <p className="text-lg text-[#44537A] leading-relaxed font-medium">
        Garanta sua saúde e de sua família com cobertura médica completa.
        Planos adaptados às suas necessidades.
      </p>
      <p className="text-lg text-[#44537A] leading-relaxed font-medium">
        Tenha acesso a consultas, exames e internações com total comodidade e rapidez.
      </p>
      <Button
        label="Saiba Mais"
        className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]"
      />
    </div>
  </div>

  {/* Seguro 3 */}
  <div id="Seguro3" className="flex flex-col md:flex-row gap-6 items-center">
    {/* Imagem */}
    <div className="md:w-[60%] w-full h-[350px] shadow-lg bg-gray-100">
      <img
        src={seguroVidaImg}
        alt="Seguro de Vida"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Informações */}
    <div className="md:w-[40%] w-full flex flex-col gap-3 pl-6 pr-6">
      <h1 className="text-4xl font-bold text-[#1D2745]">Seguro de Vida</h1>
      <p className="text-lg text-[#44537A] leading-relaxed font-medium">
        Proporcione segurança financeira à sua família em momentos inesperados.
        Cobertura ideal para imprevistos.
      </p>
      <p className="text-lg text-[#44537A] leading-relaxed font-medium">
        Planos flexíveis para atender suas prioridades e objetivos de vida.
      </p>
      <Button
        label="Saiba Mais"
        className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]"
      />
    </div>
  </div>

  {/* Seguro 4 */}
  <div id="Seguro4" className="flex flex-col md:flex-row-reverse gap-6 items-center">
    {/* Imagem */}
    <div className="md:w-[60%] w-full h-[350px] shadow-lg bg-gray-100">
      <img
        src={financiamentoEConsorcioImg}
        alt="Financiamentos e Consórcios"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Informações */}
    <div className="md:w-[40%] w-full flex flex-col gap-3 pl-6 pr-6 text-end items-end">
      <h1 className="text-4xl font-bold text-[#1D2745]">Financiamentos e Consórcios</h1>
      <p className="text-lg text-[#44537A] leading-relaxed font-medium">
        Realize seus sonhos com as melhores opções de financiamento e consórcio.
        Flexibilidade e facilidade para seu orçamento.
      </p>
      <p className="text-lg text-[#44537A] leading-relaxed font-medium">
        Adquira seu imóvel ou veículo com parcelas que cabem no bolso.
      </p>
      <Button
        label="Saiba Mais"
        className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]"
      />
    </div>
  </div>
</section>




      {/*Seção das Vantagens da Plataforma*/}

      <section className="mt-[7%]" id="SecaoVantagens">


        <h1 className="text-4xl font-bold text-center mb-8 mt-8 text-[#1D2745]">
          Vantagens da Voogle
        </h1>

        <section className="flex justify-center items-center mt-16 mb-16 px-8">
          <div className="flex flex-wrap md:flex-nowrap bg-[#FFF8F0] rounded-3xl shadow-lg w-full max-w-[1200px] overflow-hidden">

            {/* Conteúdo de Texto */}
            <div className="flex flex-col justify-center p-8 md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1D2745] mb-4">
                Porque contar com a <span className="text-[#44537A]">Voogle?</span>
              </h2>
              <p className="text-[#44537A] leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo suscipit
                repellat ratione blanditiis officia earum et, odit assumenda
              </p>
              <p className="text-[#44537A] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae perspiciatis maiores pariatur ea eaque ullam, magni at ipsam accusantium ut.
                Dolorem, pariatur!
              </p>
            </div>

            {/* Imagem e Benefícios */}
            <div className="relative flex items-center md:w-1/2 bg-[#FFF8F0]">
              {/* Benefícios com Ícones */}
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

              {/* Imagem Principal */}
              <div className="relative z-0">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Homem feliz usando notebook"
                  className="rounded-tl-[5rem] rounded-bl-[5rem] w-full h-auto"
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

      <section className="mt-[7%] mb-[7%]" id="SecaoDepoimentos">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8 text-[#1D2745]">O que nossos clientes falam sobre a Voogle</h1>
        <div className="flex flex-row">


          <div className="w-[40%] justify-between flex flex-col mt-[32px] mb-[80px]">

            <p className="text-lg leading-relaxed text-[#44537A] font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Error corrupti quos adipisci, mollitia earum maxime quam excepturi,
              rem autem ipsam molestiae reprehenderit minus, officiis distinctio s
              equi culpa voluptas? Veritatis, ipsa!</p>

            <p className="text-lg leading-relaxed text-[#44537A] font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur illum explicabo voluptates id beatae dolores asperiores fugiat
              ipsam reprehenderit esse,
              recusandae magnam assumenda quos in autem laboriosam, excepturi non alias.</p>
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

      <Footer />
    </div>
  );
}

export default Home;
