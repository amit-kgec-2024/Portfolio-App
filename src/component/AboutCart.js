import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoLogoVercel } from "react-icons/io5";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export default function AboutCart() {
  return (
    <main>
      <h2 className="text-2xl lg:text-4xl font-semibold">
        <span className="text-accent">A</span>bout
      </h2>
      <div className="border-2 w-14 mt-4 border-sky-400" />
      <p className="text-gray-500 my-4 text-md lg:text-2xl">
        I am Amit Mandal, Electronics and Communication Engineering student at
        Kalyani State Engineering College. I am a fast learner and I am looking
        for an opportunity to work in a challenging and satisfying work
        environment that will encourage me to develop and learn new skills and
        be encouraged by the organization to do my best to help myself and the
        company advance in the business world. I am determined to be an active
        partner, striving to use my knowledge and skills to achieve the best
        engineering.
      </p>
      <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-7 my-8">
        <img
          className="w-[70%] lg:w-[30%] mx-10 md:mx-36 lg:mx-0"
          src="images2.jpg"
          alt="Secr"
        />
        <div className="lg:mx-2 my-6 lg:my-0 ">
          <h2 className="text-2xl lg:text-4xl font-bold">
            UI/UX Designer & Web Developer.
          </h2>
          <p className="text-gray-500 py-4 text-md lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-x-40 my-2 text-gray-500 text-xl">
            <ul className="text-sm lg:text-xl">
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 lg:text-3xl" />
                <span className="text-black font-bold">Birthday: </span>8 Aug
                1998
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 lg:text-3xl" />
                <span className="text-black font-bold">Blood: </span>
                A+
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 lg:text-3xl" />
                <span className="text-black font-bold">Phone: </span>
                +918513089660
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 lg:text-3xl" />
                <span className="text-black font-bold">City: </span>
                Krishnanagar, Nadia
              </li>
            </ul>

            <ul className="text-sm lg:text-xl">
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 lg:text-3xl" />
                <span className="text-black font-bold">Age: </span>25 +
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 lg:text-3xl" />
                <span className="text-black font-bold">Degree:</span>
                Bachelor of Technology
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 lg:text-3xl" />
                <span className="text-black font-bold">Gmail Id: </span>
                amitmandalbetai@gmail.com
              </li>
              <li className="flex gap-3 mt-4">
                <AiOutlineRight className="text-sky-400 lg:text-3xl" />
                <span className="text-black font-bold">Freelance:</span>
                Available
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className=" text-center">
        <h1 className="text-2xl lg:text-4xl font-bold my-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-green-900">
          <span className="text-pink-500">My</span> Projects
        </h1>
        <p className="text-xl text-gray-500 font-semibold my-6">
          I'm a Web Developer, with knowledge of HTML, CSS, Javascript, Node Js,
          React Js, Next Js and MongoDB, I can make all kinds of static and
          dynamic web pages for any kind of clients.
        </p>
        <NavLink
          to="/projectsec"
          className="px-4 py-2 rounded-md bg-green-400 hover:bg-green-300 font-semibold text-lg my-6"
        >
          Know More!
        </NavLink>
      </div>
      <ul className="grid grid-cols-6 lg:hidden my-12">
        <a
          href="https://github.com/amit-mandal-kgce?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amit-mandal-82685a227"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/Matrix0Amit?t=tWWaaG-gUArP_kgzZPJ_Bg&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://instagram.com/its_me__otis?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100009147136594&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://vercel.com/amit-mandals-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
        >
          <IoLogoVercel />
        </a>
      </ul>
      <div className="text-center my-8 lg:hidden">
        <a
          href="https://drive.google.com/file/d/1eMa_Zv5qXvWObpwKH8KDlRy8nWmTj3vH/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-20 p-3 px-4 text-xl bg-cyan-300 hover:bg-cyan-400 rounded-md transition duration-300"
        >
          Reasume
        </a>
      </div>
    </main>
  );
}
