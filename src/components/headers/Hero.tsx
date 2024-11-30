import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative flex flex-wrap  lg:pl-20 lg:py-0  overflow-hidden bg-primary-600">
      <div className=" w-full lg:w-1/2 lg:h-screen px-12 pt-10">
        <div className="w-full h-full lg:py-10 gap-6 md:gap-0 lg:gap-0 lg:justify-around flex flex-col ">
          <h1 className="font-ebGaramond font-bold text-4xl md:text-5xl lg:text-8xl xl:text-10xl text-white tracking-tighter">
            Junte-se{" "}
            <span className="text-orange-500 ">Comunidade PaterCast</span>
          </h1>
          <p className="text-base lg:text-lg text-white font-sans  lg:max-w-[80%] text-justify">
            Descubra um espaço onde você pode se fortalecer como homem e pai.
            Aqui, você terá acesso a conteúdos transformadores, encontros ao
            vivo que inspiram e uma rede de homens dedicados a construir
            famílias sólidas e saudáveis.
          </p>
          <Link
            className="inline-block   lg:w-1/2 text-center  p-2 tracking-tighter border- bg-orange-500 hover:bg-orange-400  text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
            href="#"
          >
            Quero fazer parte agora
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-auto">
        <Image
          src="/images/background-hero-cut.png"
          alt="Hero Image"
          width={950}
          height={700}
        />
      </div>
    </section>
  );
}
