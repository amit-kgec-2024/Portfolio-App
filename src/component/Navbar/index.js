import React, { useState } from 'react'
import { BsFilterRight } from "react-icons/bs";
import App from '../../App';
import Contact from '../Contact';
import Projects from '../Projects';


const Navbar = () => {
  const [activeNav, setActiveNav] = useState(null);
  const handelActiveClick = (toggleNav)=> {
    setActiveNav(toggleNav);
  }
  const handelResume = () => {
    window.open("https://drive.google.com/file/d/1Sveit8xThDaGdmEehTu_2OoPaGMU__YI/view?usp=drive_link", "_blank");
  };
  return (
    <div className="">
      <div
        className={`absolute w-full h-screen  bg-dark1 drop-shadow-2xl ${
          activeNav ? "hidden" : ""
        }`}
      >
        <div className="flex flex-row justify-between items-center p-4">
          <p className="navigation-button text-xl text-end py-3 font-bold text-slate-400">
            Portfo<span className="text-whitmix1">lio.</span>
          </p>
          <button className="navigation-button my-4 mx-4 text-3xl text-slate-400">
            <BsFilterRight />
          </button>
        </div>
        <div className="flex md:flex-row text-slate-400 py-4 px-6 md:px-12 justify-between text-center ">
          <div className="hidden w-full md:flex flex-col justify-between py-16 pl-12">
            <div className="text-start">
              <h1 className="navigation-button text-7xl font-extrabold uppercase">
                Amit Mandal
              </h1>
              <h2 className="text-xl font-light uppercase">
                Kolkata, West bengal
              </h2>
              <h3 className="text-xl font-light uppercase">india</h3>
            </div>
            <div className="text-start">
              <h2 className="text-lg font-light">+91 8513089660</h2>
              <h3 className="text-lg font-light">amitmandalbetai@gmail.com</h3>
            </div>
            <h1 className="text-start text-xl font-light uppercase">
              Open for client projects
            </h1>
          </div>
          <div className="text-6xl py-20 md:py-20 md:text-8xl w-full gap-4 md:gap-6 font-extrabold flex flex-col items-center md:items-end">
            <button
              onClick={() => handelActiveClick("home")}
              className="navigation-button uppercase"
            >
              Home
            </button>
            <button
              onClick={() => handelActiveClick("projects")}
              className="navigation-button uppercase"
            >
              Projects
            </button>
            <button
              onClick={handelResume}
              className="navigation-button uppercase"
            >
              Resume
            </button>
            <button
              onClick={() => handelActiveClick("contact")}
              className="navigation-button uppercase"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      {activeNav === "home" && <App />}
      {activeNav === "contact" && <Contact />}
      {activeNav === 'projects' && <Projects/>}
    </div>
  );
}

export default Navbar
