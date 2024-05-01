"use client"
import React from "react";
import { GiWaterfall } from "react-icons/gi";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdAir } from "react-icons/md";

function Page() {
  return (
    <>
      <section className="bg-green-blue text-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">
              Making The World a Better place, One Space at a Time
            </h1>
            <p className="mb-8 text-lg font-normal  lg:text-xl ">
              Zero Plastic Straw Community is a Non-Governmental Organization
              that educates people about the effects of Plastic Pollution
              especially plastic straws in our environment..
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 "
              >
                Get Involved
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <iframe
              className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=WbdrUEriTHKjA2HT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-cover bg-no-repeat bg-[url('/abt.jpg')] bg-gray-700 bg-blend-multiply max-[600px]:bg-center">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We are ZPSC members, Saving the planet to make it better...
          </h1>

          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <GiWaterfall className="text-white text-6xl" />
              <p className="mb-8 text-2xl font-normal text-gray-300 lg:text-xl sm:px-4 lg:px-10">
                Protect the Ocean
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
<FaEarthAmericas className="text-white text-6xl" />
              <p className="mb-8 text-2xl font-normal text-gray-300 lg:text-xl sm:px-4 lg:px-10">
                Protect the Earth
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdAir className="text-white text-6xl"/>
              <p className="mb-8 text-2xl font-normal text-gray-300 lg:text-xl sm:px-4 lg:px-10">
                Protect the Air
              </p>
            </div>
          </div>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at ZPSC we focus on sustatainable and environmental friendly actions and preserving the plate for generation to come
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
}

export default Page;
