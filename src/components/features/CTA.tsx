import React from "react";
import Image from "next/image";
export default function CTA() {
  return (
    <section className="pt-20 pb-24 md:pb-32 overflow-hidden  bg-primary-600">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <h2 className="font-heading mb-6 text-7xl text-white tracking-tighter-xl">
                O que você encontra na{" "}
                <span className="text-orange-500">Comunidade PaterCast</span>
              </h2>
              <p className="mb-8 text-white text-opacity-60">
                E ainda um bônus especial para você!
              </p>
            </div>
            <div className="w-full  md:w-1/2">
              <div className="border-1 border-orange-500">
                <p>
                  Na Comunidade PaterCast, você terá acesso a pilares essenciais
                  que transformarão sua jornada:
                </p>
              </div>
              <div className="bg-primary-400 p-8 rounded-4xl ">
                <div className="flex gap-6">
                  <div>
                    <Image
                      src="/icons/heart-icon.png"
                      alt=""
                      width={71}
                      height={58}
                    />
                  </div>
                  <div>
                    Estratégias aplicáveis: Técnicas práticas para fortalecer
                    sua liderança no lar e sua conexão com seus filhos.
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
