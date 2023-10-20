import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import NavSection from "./NavSection";
import RotateImage from "./RotateImage";

export default function NavBar() {
  return (
    <div className="w-[20%] lg:block fixed p-6 lg:bg-cyan-950 items-center justify-between hidden md:bg-red-500 h-screen">
      <RotateImage />
      <p className="text-3xl mt-4 ml-8 text-white font-semibold">AMIT MANDAL</p>
      <ul className="flex items-center justify-center m-4">
        <a
          href="https://github.com/amit-mandal-kgce?tab=repositories"
          className="text-4xl gap-4 p-3 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amit-mandal-82685a227"
          className="text-4xl gap-4 p-3 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/Matrix0Amit?t=tWWaaG-gUArP_kgzZPJ_Bg&s=09"
          className="text-4xl gap-4 p-3 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://instagram.com/its_me__otis?igshid=MzNlNGNkZWQ4Mg=="
          className="text-4xl gap-4 p-3 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100009147136594&mibextid=ZbWKwL"
          className="text-4xl gap-4 p-3 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillFacebook />
        </a>
      </ul>
      <a
        href="https://drive.google.com/file/d/1eMa_Zv5qXvWObpwKH8KDlRy8nWmTj3vH/view?usp=drive_link"
        className="items-center justify-center mt-6 text-xl text-white bg-green-800 hover:bg-teal-300 hover:text-black p-3 ml-16 rounded-md transition duration-300"
      >
        My Reasume
      </a>
      <NavSection />
      <p className="text-white mt-36 ml-14">
        Desigined by <span className="text-blue-500">React Js</span>
      </p>
    </div>
  );
}
