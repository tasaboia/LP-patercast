import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <section className="py-20 overflow-hidden bg-primary-600">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <div className="max-w-max mx-auto">
                <Image
                  src="/images/TEAM.png"
                  width={560}
                  height={752.88}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-12 text-lg font-sans">
              <h2 className="mb-6 text-8xl font-ebGaramond md:text-10xl text-white tracking-tighter">
                Sobre os <span className="text-orange-500">Criadores</span>
              </h2>
              <p className="mb-10 text-white md:max-w-sm text-justify">
                Somos homens que acreditam no poder transformador de uma
                <strong>paternidade ativa</strong> e de uma{" "}
                <strong>hombridade saudável.</strong>
              </p>
              <p className="mb-10 text-white md:max-w-sm text-justify">
                Nossa missão é <strong>equipar pais para mudar o mundo</strong>,
                começando dentro de suas próprias casas.
              </p>
            </div>
            <div className="w-full justify-center items-center flex">
              <Link
                className="w-full flex justify-center items-center max-w-sm text-center gap-4  p-2 tracking-tighter border- bg-[#4D765E] hover:bg-orange-400  text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
                href="#"
              >
                <Image src="/icons/icon.png" width={30} height={30} alt="" />
                ⁠7 dias de cancelamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
