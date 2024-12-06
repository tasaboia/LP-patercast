import React from "react";
import Image from "next/image";
export default function CTA() {
  return (
    <section className="pt-20 pb-24 md:pb-32 overflow-hidden bg-primary-600 bg-[url('/images/background-child.png')] bg-no-repeat bg-bottom bg-cover">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap lg:items-center">
            <div className="w-full md:w-1/2 p-2 lg:p-12">
              <h2 className="mb-6 font-ebGaramond text-7xl text-white tracking-tighter-xl">
                O que você encontra na{" "}
                <span className="text-orange-500">Comunidade PaterCast</span>
              </h2>
              <p className="mb-8 font-heading italic text-3xl text-white max-w-xs">
                E ainda um bônus especial para você!
              </p>
            </div>
            <div className="w-full flex flex-col px-2 lg:p-0 gap-6 md:w-1/2">
              <div className="border rounded-xl p-4 text-white font-sans font-semibold  text-xl border-orange-500">
                <p>
                  Na Comunidade PaterCast, você terá acesso a pilares essenciais
                  que transformarão sua jornada:
                </p>
              </div>
              <div className="bg-primary-400 p-8 flex flex-col gap-6 text-white  font-sans rounded-4xl ">
                <div className="flex gap-6">
                  <div>
                    <Image
                      src="/icons/heart-icon.png"
                      alt=""
                      width={71}
                      height={58}
                      className="w-[71px] h-[58px] object-contain"
                    />
                  </div>
                  <div>
                    <strong>Estratégias aplicáveis:</strong>{" "}
                    <span className="font-light">
                      Técnicas práticas para fortalecer sua liderança no lar e
                      sua conexão com seus filhos.
                    </span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div>
                    <Image
                      src="/icons/network-icon.png"
                      alt=""
                      width={71}
                      height={58}
                      className="w-[71px] h-[58px] object-contain"
                    />
                  </div>
                  <div>
                    <strong>Exercícios e desafios:</strong>{" "}
                    <span className="font-light">
                      Atividades para inspirar sua jornada e criar laços com
                      outros membros.
                    </span>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div>
                    <Image
                      src="/icons/start-icon.png"
                      alt=""
                      width={71}
                      height={58}
                      className="w-[71px] h-[58px] object-contain"
                    />
                  </div>
                  <div>
                    <strong>Conteúdos únicos:</strong>{" "}
                    <span className="font-light">
                      Sorteios de livros e aulas exclusivas para enriquecer sua
                      visão sobre paternidade.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
