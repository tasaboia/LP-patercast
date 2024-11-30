import React from "react";
import Image from "next/image";
export default function IndexSectionPricing5() {
  return (
    <React.Fragment>
      <>
        <section className="py-24 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="mb-20 md:max-w-2xl text-center mx-auto">
              <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                Nightsable Card
              </span>
              <h2 className="font-heading mb-8 text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl">
                Compare our plans
              </h2>
              <p className="mb-12 text-gray-300 max-w-sm mx-auto">
                Nightsable is a strategic branding agency focused on brand
                creation, rebrands, and brand
              </p>
              <div className="relative p-1 max-w-max mx-auto bg-gradient-radial-dark-light rounded-full">
                <input
                  className="opacity-0 absolute top-0 left-0 z-10 w-full h-full"
                  type="checkbox"
                />
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full sm:w-auto">
                    <a
                      className="block py-5 px-9 text-center bg-white text-black focus:ring-4 focus:ring-white focus:ring-opacity-40 font-medium rounded-full transition-all duration-200"
                      href="#"
                    >
                      Monthly billing
                    </a>
                  </div>
                  <div className="relative flex-1">
                    <a
                      className="flex flex-wrap items-center justify-center py-3.5 px-9 text-center rounded-full transition-all duration-200"
                      href="#"
                    >
                      <p className="mr-2.5 text-gray-300 font-medium">
                        Annual billing
                      </p>
                      <span className="px-3 py-1.5 text-sm font-medium text-center text-green-400 uppercase border border-green-400 rounded-full">
                        Save 20%
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="w-full md:w-1/2 p-4">
                <div className="px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl">
                  <div className="flex flex-wrap items-center -m-2 mb-7">
                    <div className="w-full md:w-1/2 p-2">
                      <p className="mb-2 text-xl text-white font-light">
                        Basic
                      </p>
                      <p className="text-gray-300">
                        During this phase the design is developed to meet the
                        required technical standards to
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                      <div className="max-w-max md:ml-auto">
                        <p className="flex flex-col text-white font-medium text-5xl">
                          <span className="mb-1.5">$10</span>
                          <span className="text-base font-medium text-gray-300">
                            / month
                          </span>
                          <span className="hidden mb-1.5">$20</span>
                          <span className="hidden text-base font-medium text-gray-300">
                            / year
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-6 text-xs text-gray-300 font-light uppercase">
                    What's includes
                  </p>
                  <ul className="flex flex-wrap mb-10">
                    <li className="flex items-center w-full sm:w-1/2 mb-4">
                      <div className="w-auto">
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src="nightsable-assets/images/modals/check.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white">Core engagement survey</p>
                      </div>
                    </li>
                    <li className="flex items-center w-full sm:w-1/2 mb-4">
                      <div className="w-auto">
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src="nightsable-assets/images/modals/check.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white">
                          Custom topic-based assessments
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center w-full sm:w-1/2 mb-4 md:mb-0">
                      <div className="w-auto">
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src="nightsable-assets/images/modals/check.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white">Topic-based assessments</p>
                      </div>
                    </li>
                    <li className="flex items-center w-full sm:w-1/2">
                      <div className="w-auto">
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src="nightsable-assets/images/modals/check.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white">
                          Filterable heatmap &amp; analytics
                        </p>
                      </div>
                    </li>
                  </ul>
                  <a
                    className="relative z-10 block px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                    href="#"
                  >
                    Start now
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl">
                  <div className="flex flex-wrap items-center -m-2 mb-7">
                    <div className="w-full md:w-1/2 p-2">
                      <p className="mb-2 text-xl text-white font-light">
                        Bussines Plan
                      </p>
                      <p className="text-gray-300">
                        During this phase the design is developed to meet the
                        required technical standards to
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 p-2">
                      <div className="max-w-max md:ml-auto">
                        <p className="flex flex-col text-white font-medium text-5xl">
                          <span className="mb-1.5">$25</span>
                          <span className="text-base font-medium text-gray-300">
                            / month
                          </span>
                          <span className="hidden mb-1.5">$50</span>
                          <span className="hidden text-base font-medium text-gray-300">
                            / year
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-6 text-xs text-gray-300 font-light uppercase">
                    What's includes
                  </p>
                  <ul className="flex flex-wrap mb-10">
                    <li className="flex items-center w-full sm:w-1/2 mb-4">
                      <div className="w-auto">
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src="nightsable-assets/images/modals/check.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white">Core engagement survey</p>
                      </div>
                    </li>
                    <li className="flex items-center w-full sm:w-1/2 mb-4">
                      <div className="w-auto">
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src="nightsable-assets/images/modals/check.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white">
                          Custom topic-based assessments
                        </p>
                      </div>
                    </li>
                    <li className="flex items-center w-full sm:w-1/2 mb-4 md:mb-0">
                      <div className="w-auto">
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src="nightsable-assets/images/modals/check.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white">Topic-based assessments</p>
                      </div>
                    </li>
                    <li className="flex items-center w-full sm:w-1/2">
                      <div className="w-auto">
                        <div className="flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full">
                          <Image
                            width={500}
                            height={500}
                            src="nightsable-assets/images/modals/check.svg"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white">
                          Filterable heatmap &amp; analytics
                        </p>
                      </div>
                    </li>
                  </ul>
                  <a
                    className="relative z-10 block px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                    href="#"
                  >
                    Start now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
