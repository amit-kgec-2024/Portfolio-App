import React from "react";
import { IoLogoVercel } from "react-icons/io5";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import NavSection from "./NavSection";
import RotateImage from "./RotateImage";
import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function NavBarLg() {

  const [text] = useTypewriter({
    words: [
      "AMIT MANDAL"
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <div className="hidden w-[20%] lg:block lg:fixed p-6 lg:bg-slate-100 items-center justify-between md:bg-red-500 h-screen border-r-8 border-cyan-200">
      <RotateImage />
      <h2 className="font-semibold text-xl text-green-600 py-3">
        <span className=" text-green-700">{text}</span>
        <span className="text-green-700 font-bold">
          <Cursor />
        </span>
      </h2>
      <ul className="grid grid-cols-3 mx-6 my-6">
        <a
          href="https://github.com/amit-mandal-kgce?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amit-mandal-82685a227"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/Matrix0Amit?t=tWWaaG-gUArP_kgzZPJ_Bg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://instagram.com/its_me__otis?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100009147136594&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://vercel.com/amit-mandals-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <IoLogoVercel />
        </a>
      </ul>
      <div className="text-center">
        <a
          href="https://drive.google.com/file/d/1eMa_Zv5qXvWObpwKH8KDlRy8nWmTj3vH/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-2 px-4 text-sm bg-cyan-300 hover:bg-cyan-400 rounded-md transition duration-300"
        >
          Reasume
        </a>
      </div>
      <NavSection />
      <p className="font-bold text-lg text-center">
        Desigined by <span className="text-blue-500">React Js</span>
      </p>
    </div>
  );
}
