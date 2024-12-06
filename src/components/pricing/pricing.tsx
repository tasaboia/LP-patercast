import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Pricing() {
  return (
    <section className="py-16 overflow-hidden text-white bg-[#1D342A]">
      <div className="container px-4 mx-auto ">
        <div className="mb-12 md:max-w-2xl text-center mx-auto">
          <h2 className="font-sans  text-3xl lg:text-4xl text-white tracking-7xl lg:tracking-4xl font-semibold">
            Invista na transformação de sua vida e na construção de um legado
            duradouro:
          </h2>
        </div>
        <div className="mb-6 flex  px-8 justify-center items-center  flex-wrap -m-4 text-xl font-sans text-center   gap-8">
          <div className="w-full md:w-1/4 p-4 bg-[#151515] rounded-4xl flex flex-col gap-4">
            <p className="rounded-2xl bg-[#4D765E] text-center p-2">
              Assinatura <strong>Mensal</strong>
            </p>
            <p className="text-7xl font-bold pb-8">R$ 129 /m</p>
          </div>
          <div className="w-full md:w-1/4 p-4 bg-[#151515] rounded-4xl flex flex-col gap-4">
            <p className="rounded-2xl bg-[#4D765E] text-center p-2">
              Assinatura <strong>Anual</strong>
            </p>
            <p className="text-7xl font-bold pb-8">R$ 1.428 /a</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-xl justify-center items-center font-sans font-semibold text-center py-10">
          <p className="italic">
            Pense no impacto que isso terá em sua esposa, seus filhos e nas
            <br />
            próximas gerações. Não vale muito mais do que o valor investido?
          </p>
          <p className="italic font-light">
            Tenha tranquilidade ao se juntar a nós: se dentro de 30 dias você
            <br />
            decidir que a Comunidade não é para você, reembolsaremos o valor
            integral.{" "}
          </p>
          <Link
            className="inline-block max-w-md   lg:w-1/2 text-center px-8 py-4 tracking-tighter border- bg-orange-500 hover:bg-orange-400  text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
            href="#"
          >
            Quero fazer parte agora
          </Link>
        </div>
      </div>
    </section>
  );
}
