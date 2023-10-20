import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

function HomeSec() {

  const [text] = useTypewriter({
    words: ["Developer", "Desiginer", "Backend"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <main className="w-[80%] left-[20%] relative">
      <div className="container pl-0 pr-0">
        <img className="h-screen w-full" src="demoimg.jpg" alt="Amit" />
        <div className="absolute top-[50%] left-[30%] text-3xl text-white font-semibold">
          <h1 className="text-5xl">Amit Mandal</h1>
          <h2 className="mt-4 font-bold text-5xl">
            I'm a <span className=" text-accent">{text}</span>
            <span className="text-sky-500 font-bold">
              <Cursor />
            </span>
          </h2>
        </div>
      </div>
    </main>
  );
}
export default  HomeSec;