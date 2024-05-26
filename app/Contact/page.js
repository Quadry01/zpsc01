import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className=" animate-fade-up  py-16" id="contact">
      <div className="  container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="relative  h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('/contact.jpg')]"></div>
          <div className=" container px-6 md:px-12">
            <div className=" bg-green-blue text-white block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <form>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none "
                        id="exampleInput90"
                        placeholder="Name"
                      />
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className=" border-2 block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none    "
                        id="exampleInput91"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        class="  border-2 peer block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                        rows="3"
                        placeholder="Your message"
                      ></textarea>
                    </div>

                    <button
                      type="button"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="mb-6 text-white bg-gray-blue inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100  text-primary">
                            <FaSquareFacebook className="text-4xl" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold ">
                            Zero Plastic straw community
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100  text-primary">
                            <FaLinkedin className="text-4xl" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold ">
                            Zero Plastic straw community
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100  text-primary">
                            <FaTiktok className="text-4xl" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold ">
                            {" "}
                            Zero Plastic straw community
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
                      <div className="align-start flex">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-primary-100  text-primary">
                            <FaYoutube className="text-4xl" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className=" font-bold ">
                            Zero Plastic straw community
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
