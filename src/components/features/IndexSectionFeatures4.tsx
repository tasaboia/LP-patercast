import React from "react";
import Image from "next/image";
export default function IndexSectionFeatures4() {
  return (
    <React.Fragment>
      <>
        <section className="pt-20 pb-24 md:pb-32 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap lg:items-center -m-8 lg:-m-12">
                <div className="w-full md:w-1/2 p-8 lg:p-12">
                  <div className="max-w-max mx-auto">
                    <Image
                      width={500}
                      height={500}
                      className="rounded-3xl"
                      src="nightsable-assets/images/abouts/about.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-8 lg:p-12">
                  <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                    Nightsable Card
                  </span>
                  <h2 className="font-heading mb-6 text-7xl text-white tracking-tighter-xl">
                    Making credit history
                  </h2>
                  <p className="mb-8 text-white text-opacity-60">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum i
                  </p>
                  <ul className="mb-8">
                    <li className="inline-flex mb-3.5">
                      <Image
                        width={500}
                        height={500}
                        className="mr-3.5"
                        src="nightsable-assets/images/features/checked.svg"
                        alt="image"
                      />
                      <span className="text-white">
                        Real-time usager, credits and running balance
                      </span>
                    </li>
                    <li className="inline-flex mb-3.5">
                      <Image
                        width={500}
                        height={500}
                        className="mr-3.5"
                        src="nightsable-assets/images/features/checked.svg"
                        alt="image"
                      />
                      <span className="text-white">
                        Webhooks to power alt="image"ering use cases for
                        customers
                      </span>
                    </li>
                    <li className="inline-flex">
                      <Image
                        width={500}
                        height={500}
                        className="mr-3.5"
                        src="nightsable-assets/images/features/checked.svg"
                        alt="image"
                      />
                      <span className="text-white">
                        Cost grouping functionality to organize invoices
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap -m-2">
                    <div className="w-auto p-2">
                      <a
                        className="inline-block px-8 py-4 tracking-tighter border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                        href="#"
                      >
                        Start now for free
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a
                        className="inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
                        href="#"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
