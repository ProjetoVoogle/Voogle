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
      className="flex flex-col items-center justify-center min-h-screen pl-40 pr-40 bg-[#E1E7F8]"
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
        className="flex flex-wrap justify-center gap-6"
        id="CardContainer"
      >
        <div id="Seguro1">
        <div className="flex w-full">
          <h1 className="text-4xl my-2 font-bold text-[#1D2745]">
            Seguro de Automóveis
          </h1>
        </div>
        {/*Card*/}

        <div className="flex w-full gap-6 item-center">
          <div className="w-full md:w-[70%] shadow-lg" id="card">
            <FeatureCard
              text="Título do Card 1"
              description="Esta é a descrição do primeiro card."
              image="https://via.placeholder.com/150"
              buttonLabel="Saiba Mais"
              onButtonClick={() => alert("Você clicou no Card 1!")}
              className="w-full"
            />
          </div>

          {/*Informacoes*/}

          <div
            className="w-full md:w-[30%] flex flex-col justify-center gap-3"
            id="info"
          >
            <p className="text-lg leading-relaxed text-[#44537A]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              fugit velit distinctio debitis! Eos sequi voluptatibus laudantium
              molestias, impedit libero blanditiis praesentium quam, nemo in
              amet iste debitis ea quisquam.
            </p>

            {/*Precisa colocar a funcao de onClick*/}
            <Button label="Saiba Mais" 
            className="bg-[#44537A] text-[#ffffff] hover:text-[#44537A] hover:bg-[#ffffff]"/>
          </div>
        </div>
        </div>

        {/*Informacoes*/}

        <div className="flex w-full gap-6" id="Seguro2">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl my-2">Seguro de Saúde </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              fugit velit distinctio debitis! Eos sequi voluptatibus laudantium
              molestias, impedit libero blanditiis praesentium quam, nemo in
              amet iste debitis ea quisquam.
            </p>

            {/*Precisa colocar a funcao de onClick*/}
            <Button label="Saiba Mais" 
            className="bg-[#44537A] text-[#ffffff] hover:text-[#44537A] hover:bg-[#ffffff]"/>
          </div>

          {/*Card*/}

          <div className="w-full md:w-1/2">
            <FeatureCard
              text="Título do Card 1"
              description="Esta é a descrição do primeiro card."
              image="https://via.placeholder.com/150"
              buttonLabel="Saiba Mais"
              onButtonClick={() => alert("Você clicou no Card 1!")}
            />
          </div>
        </div>

        <div className="flex w-full gap-6" id="Seguro3">
          {/*Card*/}

          <div className="w-full md:w-1/2">
            <FeatureCard
              text="Título do Card 1"
              description="Esta é a descrição do primeiro card."
              image="https://via.placeholder.com/150"
              buttonLabel="Saiba Mais"
              onButtonClick={() => alert("Você clicou no Card 1!")}
            />
          </div>

          {/*Informacoes*/}

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl my-2">Seguro de Vida</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              fugit velit distinctio debitis! Eos sequi voluptatibus laudantium
              molestias, impedit libero blanditiis praesentium quam, nemo in
              amet iste debitis ea quisquam.
            </p>

            {/*Precisa colocar a funcao de onClick*/}
            <Button label="Saiba Mais" 
            className="bg-[#44537A] text-[#ffffff] hover:text-[#44537A] hover:bg-[#ffffff]"/>
          </div>
        </div>

        <div className="flex w-full gap-6" id="Seguro4">
          {/*Informacoes*/}

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl my-2"> Financiamentos e consórcios </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              fugit velit distinctio debitis! Eos sequi voluptatibus laudantium
              molestias, impedit libero blanditiis praesentium quam, nemo in
              amet iste debitis ea quisquam.
            </p>

            {/*Precisa colocar a funcao de onClick*/}
            <Button label="Saiba Mais" 
            className="bg-[#44537A] text-[#ffffff] hover:text-[#44537A] hover:bg-[#ffffff]"/>
          </div>

          {/*Card*/}

          <div className="w-full md:w-1/2">
            <FeatureCard
              text="Título do Card 1"
              description="Esta é a descrição do primeiro card."
              image="https://via.placeholder.com/150"
              buttonLabel="Saiba Mais"
              onButtonClick={() => alert("Você clicou no Card 1!")}
            />
          </div>
        </div>
      </section>

      {/*Seção das Vantagens da Plataforma*/}

      <section id="SecaoVantagens"></section>

      {/*Seção dos Seguros Secundarios*/}

      <section id="SecaoCarrossel">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">
            Qual Seguro Você precisa?
            <SeguroCarousel/>
        </h1>
      </section>

      {/*Seção dos Depoimentos de Clientes*/}

      <section id="SecaoDepoimentos">
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">O que nossos clientes falam sobre a Voogle</h1>
        <ClientesCarousel/>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
