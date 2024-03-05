import Link from "next/link";
import Image from "next/image";
import { MdOutlinePhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import Nav from "./Nav/page";
import logoBlue from "./About/Zpsc-logo-2.png"


export default function Home() {
  return (
    <main className=" flex-col items-center justify-between ">
      <div className="">
        
        {/* HERO CONTAINER */}

<div className="flex h-screen justify-center items-center flex-col">
    <div 
        className="w-full h-screen bg-[url('/hero.jpg')] bg-cover bg-center">
          <Nav/>
        <div className="w-full h-full  items-center backdrop-brightness-50 pt-20">
                <div className="text-white text-4xl w-1/2 text-center m-auto">A youth-led Non-Governmental Organizationcommitted to saving the
              Ocean Planet through behavioral change and environmental
              education.</div> <br />
                          <button className="border-4 p-2 mt-24 m-auto block rounded-xl bg-white">Join Us</button>

        </div>

    </div>
</div>

        {/* <div className="flex h-96 px-20  ">
          <div className=" bg-blue-950 m-auto h-full pt-20 p-8 w-3/6 text-white ">
            <h4 className="text-2xl w-auto ">
              A youth-led Non-Governmental Organizationcommitted to saving the
              Ocean Planet through behavioral change and environmental
              education.
            </h4>

            <button className="border-4 p-2  mt-4 rounded-xl">Join Us</button>
          </div>

          <div className="bg-hero bg-cover w-3/6"></div>
        </div> */}

          <div>
          <svg
            className="px-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#172554"
              fill-opacity="1"
              d="M0,160L80,144C160,128,320,96,480,117.3C640,139,800,213,960,229.3C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div> 

        {/* SECTION 2 */}
        <div className="flex px-24 py-20 justify-between h-full">
          <div className="border-4 border-sky-500 w-auto h-auto p-4 ">
            <p className="">WHAT WE DO?</p>
            <h2 className="text-2xl font-extrabold">
              We help protect the world’s tropical forests.
            </h2>
          </div>

          <div className=" h-auto w-auto m-4 pt-10 border-t-8">
            <h3 className="font-extrabold text-2xl">Mission</h3>
            <p>
              To stop the single-use of plastic straws and create awareness
              about Climate Crisis in Nigeria
            </p>
          </div>
          <div className="h-auto w-auto m-4 pt-10 border-t-8">
            <h3 className="font-extrabold text-2xl">Our vision</h3>
            <p>
              To eradicate pollution especially single-use plastics and bring
              solutions to Climate issues.
            </p>
          </div>
        </div>

        {/* SECTION 3 */}

        <div className="flex px-24 h-80 mt-16">
          <div className="bg-sky-950 p-5">
            <h2 className="text-2xl my-3 text-white">Become a Volunteer</h2>
            <p className="text-white">
              You can take a bigger step by joining our organization, taking a
              step to learn more about the environment, taking a step to educate
              others about the environment and so many more. We are open to new
              members.
            </p>
            <button className="border-4 p-2 bg-white mt-4 w-35 rounded-xl">
              Register
            </button>
          </div>
          <div className="bg-cyan-900 p-4">
            <h2 className="text-2xl my-3 text-white">View Our Events</h2>
            <p className="text-white">
              At ZPSC, We prioritize Environmental education. In the community,
              we have frequent sessions/teachings on matters of the environment
              and climate issues.
            </p>
            <button className="border-4 p-2 bg-white mt-4 w-30 rounded-xl">
              View Events
            </button>
          </div>
          <div className="bg-sky-950 p-4">
            {" "}
            <h2 className="text-2xl my-3 text-white">Start Donating Now</h2>
            <p className="text-white">
              Our Mission is to stop the single use of plastic straws and create
              awareness about Climate Crisis in Nigeria. Our Vision is to
              eradicate pollution especially Single use Plastics and bring
              solutions to climate issues.
            </p>
            <button className="border-4 p-2 bg-white mt-4 rounded-xl">
              Donate
            </button>
          </div>
        </div>
       

        {/* FOOTER */}

        <div className="flex px-24 py-20 text-sky-950">
          <div className="mr-20">
            <Image
              className="mb-4"
              src={logoBlue}
              width={100}
              height={100}
              alt="logo"
            />

            <input className="border-b-2 border-black" type="text" />

            <button className="block bg-sky-950 text-white p-2 my-2 rounded-2xl ">
              Subscribe
            </button>
          </div>
          <div className="flex mr-20">
            <ol className="mr-20">
              <span className="text-3xl mb-8">Helpful Links</span>
              <li>
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>About Us</Link>
              </li>
              <li>
                <Link href={""}>Donate</Link>
              </li>
            </ol>

            <ol>
              <span className="text-3xl my-2">Our Services</span>
              <li>
                <Link href={""}>ZPSC T-shirt</Link>
              </li>
              <li>
                <Link href={""}>Bamboo Straw</Link>
              </li>
              <li>
                <Link href={""}>Bamboo Tooth Brush</Link>
              </li>
              <li>
                <Link href={""}>Glass Straw</Link>
              </li>
              <li>
                <Link href={""}>Metalic Straw</Link>
              </li>
            </ol>
          </div>
          <div className="mr-20">
            <span className="text-3xl">Contact Us</span>

            <p>
              {" "}
              <MdOutlinePhone className="inline mr-2" /> +234 916 170 9421
            </p>

            <p>
              <IoIosMail className="inline mr-2" /> zpsc@gmail.com
            </p>

            <div className="flex pt-4">
              <FaLinkedin className="text-3xl mr-2"  />
              <RiTiktokLine className="text-3xl mr-2" />
              <FaFacebook className="text-3xl mr-2" />
            </div>
          </div>
        </div>
        <div className="pb-4">
          <hr className="block h-2 border-sky-950" />
          <p className="text-center">Copyright © 2024 Zero Plastic Straw Community</p>
        </div>
      </div>
    </main>
  );
}
