import Link from "next/link";
import Image from "next/image";
import { MdOutlinePhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import logoBlue from "./About/Zpsc-logo-2.png";

export default function Home() {
  return (
    <main className=" flex-col items-center justify-between ">
      <div className="">
        {/* HERO CONTAINER */}

        <section className=" animate-fade-down bg-center bg-no-repeat bg-[url('/about.jpg')] bg-cover bg-gray-700 bg-blend-multiply max-[600px]:bg-center">
          <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              ZERO PLASTIC STRAW COMMUNITY
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Zero Plastic Straw Community is a Non – Governmental Organization
              that educates people about the effects of Plastic Pollution
              especially plastic straws in our environment…
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Get started
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
                    strokeJinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <div id="mission" className=" pt-48 bg-gray-800 grid md:grid-cols-2 gap-8 text-white px-20 h-screen max-[600px]:px-4 max-[600px]:pt-10 max-[600px]:h-auto py-20">
          <div className="  border border-gray-200 bg-gray-blue rounded-3xl h-52 p-8 md:p-12">
            <h2 className=" text-3xl font-extrabold mb-2">Mission</h2>
            <p className="text-lg text-justify font-normal  mb-4">
              To stop the single-use of plastic straws and create awareness
              about Climate Crisis in Nigeria.
            </p>
          </div>
          <div className="  border border-gray-200 bg-gray-blue h-52 rounded-3xl p-8 md:p-12 max-[600px]:">
            <h2 className="  text-3xl font-extrabold mb-2">Vision</h2>
            <p className="text-lg text-justify font-normal   mb-4">
              To eradicate pollution especially single-use plastics and bring
              solutions to Climate issues.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}

        <div id="cta" className="grid md:grid-cols-3 gap-0  text-white h-screen px-20 max-[600px]:px-4 max-[600px]:h-auto max-[600px]:py-20 py-40">
          <div className="  border border-gray-200 bg-gray-blue h-96 rounded-lg p-12 max-[600px]:mt-4 ">
            <h2 className=" text-3xl font-extrabold mb-2">Become a Volunteer</h2>
            <p className="text-lg text-justify font-normal  mb-4">
              You can take a bigger step by joining our organization, taking a
              step to learn more about the environment, taking a step to educate
              others about the environment and so many more. We are open to new
              members.
            </p>
            <button className="border-4 p-2  bg-gray-blue mt-1 w-35 rounded-xl">
              Join Team
            </button>
          </div>
          <div className="  border border-gray-200 bg-gray-800 h-96 rounded-lg  p-12 max-[600px]:mt-4">
            <h2 className="  text-3xl font-extrabold mb-2">View Our Events</h2>
            <p className="text-lg text-justify font-normal   mb-4">
              At ZPSC, We prioritize Environmental education. In the community,
              we have frequent sessions/teachings on matters of the environment
              and climate issues.{" "}
            </p>{" "}
            <button className="border-4 p-2  bg-gray-800   mt-1 w-35 rounded-xl">
             Get Involved
            </button>
          </div>
          <div className="  border border-gray-200 bg-gray-blue h-96 rounded-lg  p-12 max-[600px]:mt-4">
            <h2 className="  text-3xl font-extrabold mb-2">
              Start Donating Now
            </h2>
            <p className="text-lg text-justify font-normal   mb-4">
              Our Mission is to stop the single use of plastic straws and create
              awareness about Climate Crisis in Nigeria. Our Vision is to
              eradicate pollution especially Single use Plastics and bring
              solutions to climate issues.{" "}
            </p>{" "}
            <button className="border-4 p-2 bg-gray-blue mt-1 w-35 rounded-xl">
              Donate Now
            </button>
          </div>
        </div>

       
      </div>
    </main>
  );
}
