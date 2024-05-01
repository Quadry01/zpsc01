import React from 'react'
import logo from "../About/Zpsc-logo-white.png"
import Image from "next/image";


function Footer() {
  return (
    <div>
<footer className="bg-gray-blue text-white px-20 max-[600px]:px-4">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <Image src={logo} width={100} height={100} className=" me-3" alt="Zpsc Logo"></Image>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-2 text-sm font-semibold  uppercase ">Useful Links</h2>
                  <ul className="  font-medium">
                      <li className="">
                          <a href="" className="hover:underline">Home</a>
                      </li>
                      <li>
                          <a   href="/About" className="hover:underline">About Us</a>
                      </li>
                       <li>
                          <a href="" className="hover:underline">Donate</a>
                      </li>
                       <li>
                          <a href="" className="hover:underline">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-2 text-sm font-semibold  uppercase ">Products</h2>
                  <ul className="  font-medium">
                     <li>
                          <a href="" className="hover:underline">ZPSC Shirts</a>
                      </li>
                       <li>
                          <a href="" className="hover:underline">ZPSC Cap</a>
                      </li>
                      <li className="">
                          <a href="" className="hover:underline ">Glass Straw</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline">Bamboo straw</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-2 text-sm font-semibold  uppercase ">Others</h2>
                  <ul className=" font-medium">
                      <li className="">
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">ZPSC Oath</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">© 2023 <a href="/" class="hover:underline">ZPSC</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              Made with 💛 by Quadry
          </div>
      </div>
    </div>
</footer>



    </div>
  )
}

export default Footer