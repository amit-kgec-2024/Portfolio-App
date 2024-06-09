import React, { useEffect, useState } from "react";
import { LuMoveUpRight } from "react-icons/lu";
import Loader from "./Loader";
import Socialmedia from "./Socialmedia";

const Home = ({ handelContactClick }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="text-white bg-dark1 flex flex-col justify-around">
          <div className="p-4 py-10 flex flex-col sm:flex-row-reverse w-full sm:justify-around sm:items-center">
            <div className="p-3 shadow-2xl bg-gradient-to-r from-blue-400 via-red-500 to-yellow-400 rounded-full animate-rotate-left-to-right">
              <div className="w-28 h-28 rounded-full shadow-2xl overflow-hidden animate-rotate-right-to-left">
                <img src="about.jpg" alt="Bird" />
              </div>
            </div>
            <h1 className="navigation-button text-4xl md:text-7xl md:pl-10 py-2 uppercase font-extrabold animate-text-color-left-to-right">
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
                <LuMoveUpRight className="h-10 animate-text-small-to-big" />
              </button>
              <button className="text-sm font-bold uppercase flex items-center gap-4">
                <h1>Website development</h1>
                <LuMoveUpRight className="h-10 animate-text-small-to-big" />
              </button>
              <button className="text-sm font-bold uppercase flex items-center gap-4">
                <h1>Blockchain application development</h1>
                <LuMoveUpRight className="h-10 animate-text-small-to-big" />
              </button>
              <button className="text-sm font-bold uppercase flex items-center gap-4">
                <h1>Native application development</h1>
                <LuMoveUpRight className="h-10 animate-text-small-to-big" />
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
                <LuMoveUpRight className="h-10 animate-text-small-to-big" />
              </button>
              <Socialmedia />
            </div>
            <div className="sm:flex flex-col hidden justify-between w-full">
              <h1 className="text-3xl font-extrabold uppercase">
                8+ different Works
              </h1>
              <button
                onClick={() => handelContactClick("projects")}
                className="text-sm font-bold uppercase flex items-center py-14 gap-4"
              >
                <h1>See my projects</h1>
                <LuMoveUpRight className="h-10 animate-text-small-to-big" />
              </button>
              <h2 className="font-bold text-sm uppercase">
                amit.kgec.2024@gmail.com
              </h2>
            </div>
          </div>
          <div className="uppercase py-5 sm:py-10 lg:py-14 px-3 w-full text-center">
            <h1 className="naviget-text text-3xl sm:text-5xl lg:text-7xl font-extrabold ">
              Work experience
            </h1>
            <p className="navigation-button uppercase text-3xl sm:text-5xl lg:text-7xl font-extrabold ">
              the chisel shaping the sculpture of expertise, refining skills
              with every stroke, carving a path to mastery.
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <button
              onClick={() => handelContactClick("skills")}
              className="px-5 md:px-10 py-3 font-extrabold uppercase border"
            >
              see my skills
            </button>
          </div>
          <div className="flex flex-col justify-center w-full">
            <h1 className="naviget-text uppercase text-3xl md:text-6xl py-8 text-center font-extrabold">
              The world infront of you is more than what you see!
            </h1>
            <div className="w-full flex justify-center py-4">
              <button
                onClick={() => handelContactClick("homeproject")}
                className="px-5 md:px-10 py-3 font-extrabold uppercase border"
              >
                See more projects
              </button>
            </div>
          </div>
          <div className="px-8 md:px-20">
            <h1 className="text-7xl py-4 sm:py-0 md:text-9xl uppercase font-extrabold animate-text-colorone-left-to-right">
              drop
            </h1>
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-7xl py-4 sm:py-0 md:text-9xl uppercase font-extrabold animate-text-color-left-to-right">
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
              <h1 className="text-7xl py-4 sm:py-0 md:text-9xl uppercase font-extrabold animate-text-colorone-left-to-right">
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
              <h1 className="text-7xl py-4 sm:py-0 md:text-9xl uppercase font-extrabold animate-text-color-left-to-right">
                line
              </h1>
            </div>
            <div className="flex flex-col py-5 border-t-2 md:flex-row justify-around items-center w-full">
              <h1 className="font-bold">Copyright@amit.kgec.2024</h1>
              <div className="w-[30%]">
                <Socialmedia />
              </div>
              <h2 className="font-bold">amit.kgec.2024@gmail.com</h2>
            </div>
          </div>
        </div>
      )}
      <style>{`
      animate-rotate-left-to-right {
    animation: rotate-left-to-right 4s linear infinite;
}
.animate-rotate-right-to-left {
    animation: rotate-right-to-left 4s linear infinite;
}

@keyframes rotate-left-to-right {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotate-right-to-left {
    0% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
    /* Animation for increasing text size */
.animate-text-small-to-big {
    animation: text-small-to-big 3s linear infinite;
}

@keyframes text-small-to-big {
    0% {
        font-size: 10px;
    }

    100% {
        font-size: 30px;
    }
}
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
      `}</style>
    </div>
  );
};

export default Home
