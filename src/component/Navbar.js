import React from "react";

const Navbar = ({ handelContactClick }) => {

  const handelResume = () => {
    window.open(
      "https://drive.google.com/drive/folders/1T0zDAeHFH_IF4Z0i0pbjp3Se99ILUftW?usp=drive_link",
      "_blank"
    );
  };
  return (
    <div className="">
      <div
        className={`w-full bg-dark1 shadow-2xl`}
      >
        <div className="flex md:flex-row text-slate-400 py-4 px-6 md:px-12 justify-between text-center ">
          <div className="hidden w-full md:flex flex-col justify-between py-16 pl-12">
            <div className="text-start">
              <h1 className="navigation-button text-7xl font-extrabold uppercase animate-text-color-left-to-right">
                Amit Mandal
              </h1>
              <h2 className="text-xl font-light uppercase">
                Kolkata, West bengal
              </h2>
              <h3 className="text-xl font-light uppercase">india</h3>
            </div>
            <div className="text-start">
              <h2 className="text-lg font-light">+91 8513089660</h2>
              <h3 className="text-lg font-light">amit.kgec.2024@gmail.com</h3>
            </div>
            <h1 className="text-start text-xl font-light uppercase animate-text-colorone-left-to-right">
              Open for client projects
            </h1>
          </div>
          <div className="text-6xl py-20 md:py-20 md:text-8xl w-full gap-4 md:gap-6 font-extrabold flex flex-col items-center md:items-end">
            <button
              onClick={() => handelContactClick("home")}
              className="navigation-button uppercase animate-text-colorone-left-to-right"
            >
              Home
            </button>
            <button
              onClick={() => handelContactClick("projects")}
              className="navigation-button uppercase animate-text-colorone-left-to-right"
            >
              Projects
            </button>
            <button
              onClick={handelResume}
              className="navigation-button uppercase animate-text-colorone-left-to-right"
            >
              Resume
            </button>
            <button
              onClick={() => handelContactClick("contact")}
              className="navigation-button uppercase animate-text-colorone-left-to-right"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
           .animate-text-color-left-to-right {
            background: linear-gradient(to right, red, yellow, green, blue, purple);
            -webkit-background-clip: text;
            color: transparent;
            background-size: 200% auto;
            animation: text-color-left-to-right 4s linear infinite;
        }

        @keyframes text-color-left-to-right {
            0% {
                background-position: 0% 0;
            }
            100% {
                background-position: 100% 0;
            }
        }
           .animate-text-colorone-left-to-right {
            background: linear-gradient(to right, white, dodgerblue, white, white);
            -webkit-background-clip: text;
            color: transparent;
            background-size: 200% auto;
            animation: text-colorone-left-to-right 4s linear infinite;
        }

        @keyframes text-colorone-left-to-right {
            0% {
                background-position: 0% 0;
            }
            100% {
                background-position: 100% 0;
            }
        }
        `}
      </style>
    </div>
  );
};

export default Navbar;
