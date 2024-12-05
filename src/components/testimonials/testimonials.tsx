import React from "react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="relative py-14 overflow-hidden bg-primary-600 font-sans">
      <div className="container px-4 mx-auto">
        <div className="mb-10 md:max-w-3xl justify-center items-center flex flex-col gap-6 text-center mx-auto">
          <h2 className="font-ebGaramond text-7xl lg:text-8xl text-white tracking-tighter-xl">
            Histórias reais e um investimento com propósito
          </h2>
          <h3 className="text-white text-2xl max-w-lg ">
            Veja o impacto da Comunidade PaterCast na vida de outros homens:
          </h3>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-5 ">
            <div className="px-9 py-10 h-full bg-gradient-radial-dark bg-primary-400 rounded-3xl">
              <div className="flex justify-start gap-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-[#E8A755] w-8 h-8"
                  >
                    <path d="M12 .587l3.668 7.429 8.2 1.193-5.932 5.778 1.4 8.163L12 18.896l-7.336 3.854 1.4-8.163L.132 9.209l8.2-1.193z" />
                  </svg>
                ))}
              </div>
              <h3 className=" text-2xl text-white tracking-tighter leading-tight">
                “A Comunidade tem sido um divisor de águas para minha formação
                como homem e futuro pai. Meu relacionamento e minha visão de
                paternidade foram transformados!”
              </h3>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-5 ">
            <div className="px-9 py-10 h-full bg-gradient-radial-dark bg-primary-400  rounded-3xl">
              <div className="flex justify-start gap-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="text-[#E8A755] w-8 h-8"
                  >
                    <path d="M12 .587l3.668 7.429 8.2 1.193-5.932 5.778 1.4 8.163L12 18.896l-7.336 3.854 1.4-8.163L.132 9.209l8.2-1.193z" />
                  </svg>
                ))}
              </div>
              <h3 className="  text-2xl text-white tracking-tighter leading-tight">
                "Aprendi ferramentas para ser um marido melhor e desenvolver
                minha família de forma profunda, sem perder a individualidade de
                cada um.”
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
