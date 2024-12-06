import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative flex flex-wrap overflow-hidden  animated-background h-screen bg-gradient-to-r from-primary-600 via-primary-400 to-primary-500">
      <div className=" lg:h-screen px-8 lg:w-[40%] w-full lg:pl-32 pt-10 lg:pt-0 ">
        <div className=" h-full  gap-6 w-full justify-center items-center flex flex-col ">
          <h1 className="font-ebGaramond font-bold text-4xl md:text-5xl sm:text-5xl lg:text-7xl xl:text-8xl text-white tracking-tighter  ">
            Junte-se{" "}
            <span className="text-orange-500 ">Comunidade PaterCast</span>
          </h1>
          <p className="text-base max-w-lg lg:text-lg text-white font-sans text-justify">
            Descubra um espaço onde você pode se fortalecer como homem e pai.
            Aqui, você terá acesso a conteúdos transformadores, encontros ao
            vivo que inspiram e uma rede de homens dedicados a construir
            famílias sólidas e saudáveis.
          </p>
          <Link
            className="flex max-w-lg  text-center  px-8 py-2 tracking-tighter border- bg-orange-500 hover:bg-orange-400  text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-2xl uppercase rounded-full transition duration-300"
            href="#"
          >
            Quero fazer parte agora
          </Link>
        </div>
      </div>
      <div className="relative w-full lg:w-3/5 h-screen lg:absolute lg:right-0 lg:top-0 lg:translate-x-0 lg:translate-y-0 flex justify-center items-center lg:items-start lg:justify-end">
        <div className="absolute ml-20 inset-0 z-0 bg-gradient-to-br from-[#0d5838] via-white/10 to-transparent rounded-full blur-3xl"></div>

        {/* Imagem 1 (lines.svg) */}
        <Image
          src="https://static.shuffle.dev/components/preview/697340ff-5445-426e-84bf-57e856b9afbf/assets/public/nightsable-assets/images/headers/lines.svg"
          alt="Hero Image 1"
          width={1680}
          height={1260}
          quality={100}
          className="absolute w-full h-auto object-contain z-10"
        />

        <div className="absolute w-full h-full z-20">
          <Image
            src="/images/bg-hero.png"
            alt="Hero Image 2"
            width={1680}
            height={1260}
            quality={100}
            className="w-full h-full object-cover"
          />
          {/* Gradiente para escurecer o topo */}
          <div className="absolute inset-0  rounded-full blur-3xl bg-gradient-to-t from-gray-800 via-transparent to-transparent "></div>
        </div>
      </div>
    </section>
  );
}
