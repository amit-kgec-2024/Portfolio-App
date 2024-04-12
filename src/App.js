import "./App.css";
import React, { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import Navbar from './component/Navbar';
import { LuMoveUpRight } from "react-icons/lu";
import { IoLogoVercel } from "react-icons/io5";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import Contact from "./component/Contact";
import Projects from "./component/Projects";


function App() {
  const [isContact, setIsContact] = useState(null);
  const handelContactClick = (toggleContact) => {
    setIsContact(toggleContact);
  };
  const handelGithub = () => {
    window.open(
      "https://github.com/amit-mandal-kgce?tab=repositories",
      "_blank"
    );
  };
  const handelLinkdin = () => {
    window.open("https://www.linkedin.com/in/amit-mandal-82685a227", "_blank");
  };
  const handelTwiter = () => {
    window.open(
      "https://twitter.com/Matrix0Amit?t=tWWaaG-gUArP_kgzZPJ_Bg&s=09",
      "_blank"
    );
  };
  const handelInstgram = () => {
    window.open(
      "https://instagram.com/its_me__otis?igshid=MzNlNGNkZWQ4Mg==",
      "_blank"
    );
  };
  const handelFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100009147136594&mibextid=ZbWKwL",
      "_blank"
    );
  };
  const handelVercel = () => {
    window.open("https://vercel.com/amit-mandals-projects", "_blank");
  };
  return (
    <div className="">
      <div className={`bg-dark1 w-full h-screen ${isContact ? "hidden" : ""}`}>
        <div className="w-full bg-dark1 flex flex-col drop-shadow-2xl z-40">
          <div className="flex flex-row justify-between items-center p-4">
            <p className="navigation-button text-xl text-end py-3 font-bold text-slate-400">
              Portfo<span className="text-whitmix1">lio.</span>
            </p>
            <button
              className="navigation-button my-4 mx-4 text-3xl text-slate-400"
              onClick={() => handelContactClick("navbar")}
            >
              <BsFilterRight />
            </button>
          </div>
        </div>
        <div className="text-white bg-dark1 flex flex-col justify-around">
          <div className="p-4 py-10 flex flex-col sm:flex-row-reverse w-full sm:justify-between sm:items-center">
            <div className="w-28 h-28 rounded-full overflow-hidden">
              <img src="about.jpg" alt="Bird" />
            </div>
            <h1 className="navigation-button text-4xl md:text-7xl md:pl-10 py-2 uppercase font-extrabold">
              amit Mandal
            </h1>
          </div>
          <div className="flex flex-col-reverse sm:my-20 md:flex-row md:justify-between md:items-center w-full gap-8 px-6 sm:px-10 lg:px-20  text-white">
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-3xl uppercase font-extrabold">
                Frontend + Backend
              </h1>
              <h2 className="text-3xl uppercase font-extrabold">Development</h2>
              <button className="text-sm font-bold uppercase flex items-center gap-4">
                <h1>Creative identity and ui/ux</h1>
                <LuMoveUpRight className="text-4xl" />
              </button>
              <button className="text-sm font-bold uppercase flex items-center gap-4">
                <h1>Website development</h1>
                <LuMoveUpRight className="text-4xl" />
              </button>
              <button className="text-sm font-bold uppercase flex items-center gap-4">
                <h1>Blockchain application development</h1>
                <LuMoveUpRight className="text-4xl" />
              </button>
              <button className="text-sm font-bold uppercase flex items-center gap-4">
                <h1>Native application development</h1>
                <LuMoveUpRight className="text-4xl" />
              </button>
            </div>
            <div className="flex flex-col justify-between w-full">
              <p className="text-sm font-bold uppercase">
                PaSSIONaTE CREaTIVE DESIGNER aND SKILLED SOFTWaRE ENGINEER,
                CRaFTING INNOVaTIVE SOLUTIONS THROUGH SEaMLESS DESIGN aND
                IMPaCTFUL CODE. LET'S CREaTE TOGETHER.
              </p>
              <button className="text-sm font-bold uppercase flex items-center py-6 gap-4">
                <h1>See my experience</h1>
                <LuMoveUpRight className="text-4xl" />
              </button>
              <div className="flex flex-row w-full justify-around">
                <button
                  onClick={handelGithub}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillGithub />
                </button>
                <button
                  onClick={handelLinkdin}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillLinkedin />
                </button>
                <button
                  onClick={handelTwiter}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillTwitterCircle />
                </button>
                <button
                  onClick={handelInstgram}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillInstagram />
                </button>
                <button
                  onClick={handelFacebook}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillFacebook />
                </button>
                <button
                  onClick={handelVercel}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <IoLogoVercel />
                </button>
              </div>
            </div>
            <div className="sm:flex flex-col hidden justify-between w-full">
              <h1 className="text-3xl font-extrabold uppercase">
                8+ different Works
              </h1>
              <button
                onClick={() => handelContactClick('projects')}
                className="text-sm font-bold uppercase flex items-center py-14 gap-4"
              >
                <h1>See my projects</h1>
                <LuMoveUpRight className="text-4xl" />
              </button>
              <h2 className="font-bold text-sm uppercase">
                amitmandal@gmail.com
              </h2>
            </div>
          </div>
          <div className="uppercase py-5 sm:py-10 lg:py-16 px-3 w-full text-center">
            <h1 className="naviget-text text-3xl sm:text-5xl lg:text-7xl font-extrabold ">
              Work experience
            </h1>
            <p className="navigation-button uppercase text-3xl sm:text-5xl lg:text-7xl font-extrabold ">
              the chisel shaping the sculpture of expertise, refining skills
              with every stroke, carving a path to mastery.
            </p>
          </div>
          <div className="flex flex-col justify-center w-full">
            <h1 className="naviget-text uppercase text-3xl md:text-6xl text-center font-extrabold">
              The world infront of you is more than what you see!
            </h1>
            <div className="w-full flex justify-center py-4">
              <button className="px-5 md:px-10 py-3 font-extrabold uppercase border">
                See more projects
              </button>
            </div>
          </div>
          <div className="px-8 md:px-20">
            <h1 className="text-7xl py-4 sm:py-0 md:text-9xl uppercase font-extrabold">
              drop
            </h1>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-7xl py-4 sm:py-0 md:text-9xl uppercase font-extrabold">
                me
              </h1>
              <div className="hidden sm:block">
                <h1 className="uppercase text-end">
                  IF YOU HAVE ANY IMPROVISATION REGARDING THIS WEBSITE
                </h1>
                <h1 className="uppercase text-end">
                  FEEL FREE TO REACH ME-ALSO OPEN FOR CREATIVE{" "}
                </h1>
                <h1 className="uppercase text-end">PROJECTS AND DESIGN</h1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between sm:items-center gap-8 md:gap-14">
              <h1 className="text-7xl py-4 sm:py-0 md:text-9xl uppercase font-extrabold">
                A
              </h1>
              <div className="">
                <p className="py-3">
                  Don't be shy to send me a few words - I will get back to you
                  DEFINITELY
                </p>
                <button
                  onClick={() => handelContactClick("contact")}
                  className="px-5 md:px-10 py-3 font-extrabold uppercase border"
                >
                  send message
                </button>
              </div>
              <h1 className="text-7xl py-4 sm:py-0 md:text-9xl uppercase font-extrabold">
                line
              </h1>
            </div>
            <div className="flex flex-col py-5 border-t-2 md:flex-row justify-around items-center w-full">
              <h1 className="font-bold">Copyright@amitmandal2024</h1>
              <div className="flex flex-row py-5 md:py-0 gap-4 md:gap-10 justify-around">
                <button
                  onClick={handelGithub}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillGithub />
                </button>
                <button
                  onClick={handelLinkdin}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillLinkedin />
                </button>
                <button
                  onClick={handelTwiter}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillTwitterCircle />
                </button>
                <button
                  onClick={handelInstgram}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillInstagram />
                </button>
                <button
                  onClick={handelFacebook}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <AiFillFacebook />
                </button>
                <button
                  onClick={handelVercel}
                  className="text-2xl my-2 hover:text-blue-200 text-teal-500 transition duration-300"
                >
                  <IoLogoVercel />
                </button>
              </div>
              <h2 className="font-bold">amitmandalbetai@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
      {isContact === "navbar" && <Navbar />}
      {isContact === "contact" && <Contact />}
      {isContact === 'projects' && <Projects/>}
    </div>
  );
}

export default App;
