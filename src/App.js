import "./App.css";
import React, { useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import HomeProjects from "./component/HomeProjects";
import Home from "./component/Home";
import Skill from "./component/Skill";

function App() {
  const [isContact, setIsContact] = useState("home");
  const handelContactClick = (toggleContact) => {
    setIsContact(toggleContact);
  };
  return (
    <div className="">
        <div className="w-full bg-dark6 flex flex-col shadow-2xl fixed z-50">
          <div className="flex flex-row justify-between items-center px-4">
            <p className="navigation-button w-32 text-center text-xl py-3 font-bold text-slate-400 animate-text-big-to-small">
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
      <div className="bg-dark1 w-full h-screen pt-16">
      {isContact === "home" && <Home handelContactClick={handelContactClick}/>}
      {isContact === "navbar" && <Navbar handelContactClick={handelContactClick}/>}
      {isContact === "contact" && <Contact />}
      {isContact === "projects" && <Projects />}
      {isContact === "homeproject" && <HomeProjects />}
      {isContact === "skills" && <Skill/>}
      </div>
      <style>
        {`
        .animate-rotate-left-to-right {
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

/* Animation for decreasing text size */
.animate-text-big-to-small {
    animation: text-big-to-small 5s linear infinite;
}
@keyframes text-big-to-small {
    0% {
        font-size: 25px;
    }
        5%{
        transform: rotate(-10deg);
        }
        10%{
        transform: rotate(10deg);
        }
        15%{
        transform: rotate(0deg);
        }

    100% {
        font-size: 15px;
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
        `}
      </style>
    </div>
  );
}

export default App;
