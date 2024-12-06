import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative flex flex-wrap overflow-hidden bg-primary-600">
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
            className="inline-block max-w-sm  text-center  p-2 tracking-tighter border- bg-orange-500 hover:bg-orange-400  text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
            href="#"
          >
            Quero fazer parte agora
          </Link>
        </div>
      </div>
      <div className="relative w-full lg:w-3/5 lg:h-screen lg:absolute lg:right-0 lg:top-0 lg:translate-x-0 lg:translate-y-0 flex justify-center items-center lg:items-start lg:justify-end">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1D342A] via-white/10 to-transparent rounded-full blur-3xl"></div>

        <Image
          src="/images/bg-hero.png"
          alt="Hero Image"
          width={1680}
          height={1260}
          quality={100}
          className="w-full h-full object-contain relative z-10"
        />
      </div>
    </section>
  );
}
