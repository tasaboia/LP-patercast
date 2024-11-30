import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <section className="py-24 overflow-hidden bg-primary-600">
      <div className="container px-4 mx-auto bg-primary-400 rounded-6xl">
        <div className="py-14 bg-gradient-radial-dark rounded-6xl">
          <div className="md:max-w-2xl mx-auto text-center px-4">
            <h2 className="font-ebGaramond mb-6 text-4xl lg:text-6xl text-white tracking-5xl">
              Tudo o que a Comunidade PaterCast tem a oferecer:
            </h2>
          </div>

          <div className="flex  flex-col justify-center items-center w-full ">
            <div className=" flex flex-wrap justify-around w-[70%] pt-6">
              <div className="flex py-4 flex-col justify-center items-center text-center max-w-80">
                <Image
                  src="/icons/live-icon.png"
                  width={87}
                  height={93}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Encontros ao vivo:{" "}
                </p>
                <p className="text-lg font-sans text-white ">
                  Converse diretamente com os hosts e convidados do PaterCast.
                </p>
              </div>
              <div className="flex py-4 flex-col justify-center items-center text-center max-w-80">
                <Image
                  src="/icons/open-book-icon.png"
                  width={87}
                  height={93}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Ebooks exclusivos:
                </p>
                <p className="text-lg font-sans text-white  ">
                  Amplie sua visão e aprendizado com conteúdos autorais.
                </p>
              </div>
              <div className="flex py-4 flex-col justify-center items-center text-center max-w-80">
                <Image
                  src="/icons/book-list.png"
                  width={113}
                  height={88}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Sorteios mensais de livros:
                </p>
                <p className="text-lg font-sans text-white  ">
                  Receba materiais que edifiquem sua jornada.
                </p>
              </div>
            </div>
            <div className=" flex flex-wrap justify-around w-[50%] pt-6">
              <div className="flex py-4 flex-col justify-center items-center text-center max-w-80">
                <Image
                  src="/icons/call-icon.png"
                  width={117}
                  height={98}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Aulas transformadoras:
                </p>
                <p className="text-lg font-sans text-white  ">
                  Aprenda mensalmente sobre temas fundamentais para ser um pai e
                  líder melhor.
                </p>
              </div>
              <div className="flex py-4 flex-col justify-center items-center text-center max-w-80">
                <Image
                  src="/icons/all-hands.png"
                  width={112}
                  height={113}
                  alt=""
                  className="pb-4"
                />
                <p className="text-lg font-sans font-bold text-white">
                  Rede de apoio:
                </p>
                <p className="text-lg font-sans text-white  ">
                  Conecte-se com outros homens engajados e compartilhe
                  experiências valiosas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
