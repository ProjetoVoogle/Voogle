import Banner from "../components/Banner/Banner.tsx";
import FeatureCard from "../components/Card/FeatureCard.tsx";
import Footer from "../components/Footer/Footer.tsx";
import NavBar from "../components/Navbar/Navbar.tsx";
import useFavicon from "../hooks/useFavicon.ts";
import useDocumentTitle from "../hooks/useTitle.ts";
import MultiCardCarousel from "../components/Carousel/Carousel.tsx";
import Button from "../components/Button/Button.tsx";
import SeguroCarousel from "../utils/CardsSeguros.tsx";
import ClientesCarousel from "../utils/CardsClients.tsx";

function Home() {
  useDocumentTitle("Home");
  useFavicon("https://img.icons8.com/m_rounded/200/FFFFFF/home.png");

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen pl-40 pr-40 bg-[#E1E7F8] overflow-x-hidden"
      id="main"
    >
      <NavBar></NavBar>

      {/*Seção do banner inicial*/}

      <div
        className="flex-grow flex items-center justify-center pt-20 w-[100%]"
        id="Titulo"
      >
        <Banner />
      </div>

      {/*Seção dos Seguros Primarios*/}

      <section
        className="flex flex-wrap justify-center gap-16 mt-[6%]"
        id="CardContainer"
      >
        {/* Seguro 1 */}
        <div id="Seguro1">
          <div className="flex w-full mb-5">
            <h1 className="text-4xl my-2 font-bold text-[#1D2745]">
              Seguro de Automóveis
            </h1>
          </div>

          <div className="flex w-full gap-6 item-center">
            {/* Card */}
            <div className="w-full md:w-[60%] h-[250px] shadow-lg" id="card">
              <FeatureCard
                text="Título do Card 1"
                description="Esta é a descrição do primeiro card."
                image="https://via.placeholder.com/150"
                onButtonClick={() => alert("Você clicou no Card 1!")}
                className="max-w-[100%] min-h-[100%]"
              />
            </div>

            {/* Informações */}
            <div
              className="w-full md:w-[40%] flex flex-col gap-3 justify-between"
              id="info"
            >
              <p className="text-lg leading-relaxed text-[#44537A]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                fugit velit distinctio debitis! Eos sequi voluptatibus laudantium
                molestias, impedit libero blanditiis praesentium quam, nemo in amet
                iste debitis ea quisquam.
              </p>
              <Button
                label="Saiba Mais"
                className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]"
              />
            </div>
          </div>
        </div>

        {/* Seguro 2 */}
        <div id="Seguro2">
          <div className="flex w-full mb-5 justify-end">
            <h1 className="text-4xl my-2 font-bold text-[#1D2745]">
              Seguro de Saúde
            </h1>
          </div>

          <div className="flex w-full gap-6 item-center">


            {/* Informações */}
            <div
              className="w-full md:w-[40%] flex flex-col gap-3 justify-between items-end"
              id="info"
            >
              <p className="text-lg leading-relaxed text-[#44537A] text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                fugit velit distinctio debitis! Eos sequi voluptatibus laudantium
                molestias, impedit libero blanditiis praesentium quam, nemo in amet
                iste debitis ea quisquam.
              </p>
              <Button
                label="Saiba Mais"
                className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]"
              />
            </div>

            {/* Card */}
            <div className="w-full md:w-[60%] h-[250px] shadow-lg" id="card">
              <FeatureCard
                text="Título do Card 2"
                description="Esta é a descrição do segundo card."
                image="https://via.placeholder.com/150"
                onButtonClick={() => alert("Você clicou no Card 2!")}
                className="max-w-[100%] min-h-[100%]"
              />
            </div>
          </div>
        </div>

        {/* Seguro 3 */}
        <div id="Seguro3">
          <div className="flex w-full mb-5">
            <h1 className="text-4xl my-2 font-bold text-[#1D2745]">
              Seguro de Vida
            </h1>
          </div>

          <div className="flex w-full gap-6 item-center">
            {/* Card */}
            <div className="w-full md:w-[60%] h-[250px] shadow-lg" id="card">
              <FeatureCard
                text="Título do Card 3"
                description="Esta é a descrição do terceiro card."
                image="https://via.placeholder.com/150"
                onButtonClick={() => alert("Você clicou no Card 3!")}
                className="max-w-[100%] min-h-[100%]"
              />
            </div>

            {/* Informações */}
            <div
              className="w-full md:w-[40%] flex flex-col gap-3 justify-between"
              id="info"
            >
              <p className="text-lg leading-relaxed text-[#44537A]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                fugit velit distinctio debitis! Eos sequi voluptatibus laudantium
                molestias, impedit libero blanditiis praesentium quam, nemo in amet
                iste debitis ea quisquam.
              </p>
              <Button
                label="Saiba Mais"
                className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]"
              />
            </div>
          </div>
        </div>

        {/* Seguro 4 */}
        <div id="Seguro4">
          <div className="flex w-full mb-5 justify-end">
            <h1 className="text-4xl my-2 font-bold text-[#1D2745]">
              Financiamentos e Consórcios
            </h1>
          </div>

          <div className="flex w-full gap-6 item-center">


            {/* Informações */}
            <div
              className="w-full md:w-[40%] flex flex-col gap-3 justify-between items-end"
              id="info"
            >
              <p className="text-lg leading-relaxed text-[#44537A] text-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                fugit velit distinctio debitis! Eos sequi voluptatibus laudantium
                molestias, impedit libero blanditiis praesentium quam, nemo in amet
                iste debitis ea quisquam.
              </p>
              <Button
                label="Saiba Mais"
                className="bg-[#44537A] text-[#ffffff] hover:bg-[#E1E7F8] hover:!text-[#44537A]"
              />
            </div>

            {/* Card */}
            <div className="w-full md:w-[60%] h-[250px] shadow-lg" id="card">
              <FeatureCard
                text="Título do Card 4"
                description="Esta é a descrição do quarto card."
                image="https://via.placeholder.com/150"
                onButtonClick={() => alert("Você clicou no Card 4!")}
                className="max-w-[100%] min-h-[100%]"
              />
            </div>

          </div>
        </div>
      </section>


      {/*Seção das Vantagens da Plataforma*/}

      <section className="mt-[7%]" id="SecaoVantagens">
      <h1 className="text-4xl font-bold text-center mb-8 mt-8">
          Vantagens da Voogle
        </h1>
      </section>

      {/*Seção dos Seguros Secundarios*/}

      <section className="mt-[7%]" id="SecaoCarrossel">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">
          Qual seguro você precisa?
        </h1>

        <SeguroCarousel />

      </section>

      {/*Seção dos Depoimentos de Clientes*/}

      <section className="mt-[7%]" id="SecaoDepoimentos">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">O que nossos clientes falam sobre a Voogle</h1>
        <ClientesCarousel />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
