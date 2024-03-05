import React from "react";
import Link from "next/link";
import Image from "next/image";
import h from "../About/Zpsc-logo-white.png"
function Nav() {
  return (
    <>
      {/* NAV BAR */}
      <div className="h-16 p-4 px-20 text-white ">
        <Image className="inline" src={h} width={100} height={100} alt="logo" />

        <ul className=" flex m-auto relative bottom-10 justify-center text-lg bold ">
          <li className="hover:bg-slate-400 p-2 mx-4">
            <Link href={"./"}>Home</Link>
          </li>
          <li className="hover:bg-slate-400 p-2 mx-4">
            <Link href={"./About"}>About Us</Link>
          </li>
          <li className="hover:bg-slate-400 p-2 mx-4">
            {" "}
            <Link href={"./"}>Donate</Link>
          </li>
          <li className="hover:bg-slate-400 p-2 mx-4">
            {" "}
            <Link href={"./"}>Team</Link>
          </li>
          <li className="hover:bg-slate-400 p-2 mx-4">
            {" "}
            <Link href={"./"}>Contact us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
