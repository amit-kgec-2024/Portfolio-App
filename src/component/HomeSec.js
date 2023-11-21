import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AboutSec from "./AboutSec";
import ResumeSec from "./ResumeSec";
import ContactSec from "./ContactSec";

function HomeSec() {
  const [text] = useTypewriter({
    words: ["Fronted Web Developer", "Web Designer", "Backend Web Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <main style={{ backgroundImage: `url(${"7615017.svg"})` }} className="bg-fixed">
      <div
        className="lg:w-[80%] lg:ml-[20%] border-2  mt-16 lg:mt-0 "
        id="home"
      >
        <div className="p-4 lg:p-16 bg-gradient-to-r from-indigo-400 from-10% via-sky-100 via-30% to-emerald-500 to-90%">
          <div className="p-5 lg:p-10 bg-gradient-to-r from-indigo-300 via-purple-100 to-pink-200">
            <img src="images3.jpg" alt="img" className="opacity-80 w-full" />
          </div>
        </div>
        <div className="absolute top-[30%] sm:top-[65%] lg:top-[90%] left-[11%] lg:left-[30%]">
          <h3 className="lg:text-3xl font-bold text-pink-600">
            Hello, my name is
          </h3>
          <h1 className="text-3xl lg:text-5xl py-2 text-green-700 font-bold">
            Amit Mandal
          </h1>
          <h2 className="font-bold text-xl lg:text-4xl text-white">
            And I'm a <span className=" text-red-500">{text}</span>
            <span className="text-red-500 font-bold">
              <Cursor />
            </span>
          </h2>
        </div>
      </div>
      <AboutSec />
      <ResumeSec />
      <ContactSec />
    </main>
  );
}
export default HomeSec;
