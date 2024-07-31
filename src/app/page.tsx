import Image from "next/image";
import mainImage from "/public/images/main/m-main-3.jpg";
import bgTeste from "/public/bg-teste.png";

export default function Home() {
  return (
    <div>
      {/* Main Section */}
      <section
        id="main"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center p-4 overflow-hidden  relative"
      >
        <aside className="w-full md:w-1/2 h-64 md:h-auto mb-8 md:mb-0 md:mr-8">
          <div>
            <Image
              src={mainImage}
              width={500}
              height={500}
              alt="Foto principal da modelo"
              className="object-cover max-h-fit border-4 border-red-500 neon-border saturate-red brightness-150 saturate-125"
            />
          </div>
        </aside>
        <div className="text-center md:text-left">
          <h1 className="text-6xl font-bold text-textMain leading-tight tracking-wider font-primary">
            Mary Mendes
          </h1>
          <p className="text-2xl text-textSecondary mt-4 max-w-lg leading-relaxed">
            <span>Modelo</span> e <span>criadora de conteúdo</span>, apaixonada
            por moda, desfiles, edição de vídeos e música.
          </p>
        </div>
        <Image
          src={bgTeste}
          width={500}
          height={500}
          alt="Bg"
          className="object-cover w-full h-ful absolute"
        />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex items-center justify-center bg-cover bg-center py-16 bg-gray-100"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>
          <p className="text-lg mb-6">
            Mary Mendes é uma modelo profissional com vasta experiência em
            campanhas publicitárias, desfiles de moda e fotos editoriais. Com um
            estilo único e presença marcante, Mary encanta em cada trabalho que
            realiza.
          </p>
          <p className="text-lg">
            Fora das câmeras, Mary gosta de viajar, praticar yoga e se dedicar à
            filantropia.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="h-screen flex items-center justify-center bg-cover bg-center py-16"
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
