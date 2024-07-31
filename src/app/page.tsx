import Image from "next/image";
import mainImage from "/public/images/main/m-main-3.jpg";
import mainAboutImage from "/public/images/about/m-about.jpg";
import mainAboutImage2 from "/public/images/about/m-about-3.jpg";
import bgTeste from "/public/bg-teste.png";

export default function Home() {
  return (
    <div>
      {/* Main Section */}
      <section
        id="main"
        className="h-screen grid grid-cols-1 md:grid-cols-2 bg-cover bg-center px-20 overflow-hidden relative bg-gray-200"
      >
        <aside className="w-full md:h-auto md:mr-8 flex items-center">
          <div>
            <Image
              src={mainImage}
              width={500}
              height={500}
              alt="Foto principal da modelo"
              className="object-cover max-h-fit polaroid saturate-red brightness-150 saturate-125 max-w-full"
            />
          </div>
        </aside>

        <div className="md:h-screen h-auto text-center flex items-start md:items-center justify-center md:text-left">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-textMain leading-tight tracking-wider font-primary">
              <span className="text-primary">M</span>ary{" "}
              <span className="text-primary">M</span>endes
            </h1>
            <p className="text-2xl text-textSecondary mt-4 max-w-lg leading-relaxed">
              <span className="text-3xl text-primary">M</span>
              odelo e <span className="">criadora de conteúdo</span>, apaixonada
              por <span className="text-primary">m</span>oda, desfiles, edição
              de vídeos!
            </p>
          </div>
        </div>

        <div className="w-full h-full absolute grayscale">
          <Image
            src={bgTeste}
            width={500}
            height={500}
            alt="Bg"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-auto md:h-screen grid grid-cols-1 md:grid-cols-3 bg-gray-100 overflow-hidden"
      >
        {/* Texto sobre a modelo */}
        <div className="md:h-screen text-center flex items-start md:items-center justify-center md:text-left px-20 mb-16 md:mb-0 ml-0 md:p-4 md:ml-20 md:order-1 order-2">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-textMain leading-tight tracking-wider font-primary">
              Sobre <span className="text-primary">M</span>im
            </h2>
            <p className="text-md md:text-lg mb-6 text-textSecondary mt-4 max-w-lg leading-relaxed">
              Mary Mendes é uma modelo profissional com vasta experiência em
              campanhas publicitárias, desfiles de moda e fotos editoriais. Com
              um estilo único e presença marcante, Mary encanta em cada trabalho
              que realiza.
            </p>
            <p className="text-md md:text-lg text-textSecondary mt-4 max-w-lg leading-relaxed">
              Fora das câmeras, Mary gosta de viajar, praticar yoga e se dedicar
              à filantropia.
            </p>
          </div>
        </div>

        {/* Imagem polaroide da modelo */}
        <div className="h-full flex justify-center md:justify-end items-center md:order-2 order-1 md:py-0 py-16">
          <div className="w-2/3">
            <Image
              src={mainAboutImage2}
              width={300}
              height={300}
              alt="Foto Sobre da modelo"
              className="object-cover polaroid"
            />
          </div>
        </div>

        {/* Imagem Bg sobre da modelo */}
        <div className="flex items-center justify-center md:order-3 order-3 md:grid hidden">
          <div className="w-full h-full">
            <Image
              src={mainAboutImage}
              width={500}
              height={500}
              alt="Foto Sobre da modelo"
              className="object-cover"
            />
          </div>
        </div>

        {/* <Image
          src={bgTeste}
          width={500}
          height={500}
          alt="Bg"
          className="object-cover w-full h-full absolute grayscale"
        /> */}
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="h-screen flex items-center justify-center bg-cover bg-center py-16 relative"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Portfólio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4">
              <img
                src="/images/mary-photo1.jpg"
                alt="Mary Photo 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="p-4">
              <img
                src="/images/mary-photo2.jpg"
                alt="Mary Photo 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Adicione mais fotos conforme necessário */}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="h-screen flex items-center justify-center bg-cover bg-center py-16 bg-gray-100"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Experiência</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-4xl">
            <li className="text-lg mb-4">
              Campanha Publicitária para Marca X - 2023
            </li>
            <li className="text-lg mb-4">
              Desfile de Moda para Estilista Y - 2022
            </li>
            <li className="text-lg mb-4">
              Editorial de Moda para Revista Z - 2021
            </li>
            {/* Adicione mais experiências conforme necessário */}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-cover bg-center py-16"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contato</h2>
          <p className="text-lg mb-6">
            Para mais informações ou para agendar um trabalho, entre em contato:
          </p>
          <p className="text-lg mb-6">Email: mary@example.com</p>
          <p className="text-lg">Telefone: (12) 3456-7890</p>
          <div className="mt-8">
            <a
              href="https://www.instagram.com/mary"
              className="text-blue-500 underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
