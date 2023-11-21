import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <main className="w-screen lg:w-[80%] lg:ml-[20%] relative">
      <div className="w-full flex flex-col p-3 text-center justify-center text-sm lg:text-xl bg-emerald-300 text-white">
        <h1>
          Created by <span className="text-black">AMIT</span> | &copy; 2023 All
          rights reserved.
        </h1>
      </div>
      <Link
        to="/"
        className=" fixed bottom-[6%] right-[3%] text-white border-1 rounded-md bg-red-600 p-2 text-3xl"
      >
        <IoIosArrowUp />
      </Link>
    </main>
  );
}
