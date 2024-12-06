import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-8s overflow-hidden bg-primary-500">
      <div className="container p-8 lg:p-0 mx-auto">
        <div>
          <div className="flex justify-between flex-wrap-reverse lg:flex-wrap lg:items-center ">
            <div className="lg:-m-8">
              <Image
                width={600}
                height={400}
                className="rounded-3xl"
                src="/images/img-calltoaction.png"
                alt="image"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 lg:p-12 lg:m-12">
              <h2 className="mb-6 text-6xl md:text-8xl text-white tracking-tighter">
                Por que criamos esta comunidade?
              </h2>
              <p className="mb-10 text-white max-w-lg text-lg font-sans">
                Para homens que querem ser pais melhores, maridos mais presentes
                e líderes em seus lares. Se você deseja crescer e se conectar
                com uma rede que compartilha os mesmos valores, este é o seu
                lugar.
              </p>
              <Link
                className="inline-block   text-center px-4 py-2 lg:px-8 lg:py-4 tracking-tighter border- bg-orange-500 hover:bg-orange-400  text-primary-500 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-40 font-sans font-bold text-md lg:text-xl uppercase rounded-full transition duration-300"
                href="#"
              >
                EU ME ENCAIXO NESSE GRUPO DE HOMENS!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
