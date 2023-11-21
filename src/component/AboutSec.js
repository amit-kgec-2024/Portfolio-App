import AboutCart from "./AboutCart";
import React from "react";
import AboutSkils from "./AboutSkils";
import AboutProfSkill from "./AboutProfSkill";

function AboutSec() {
  return (
    <main
      className="w-full lg:w-[80%] lg:ml-[20%] top-[44px] lg:top-0 relative"
      id="about"
    >
      <div className="container p-8">
        <AboutCart />
        <AboutSkils />
        <AboutProfSkill />
      </div>
    </main>
  );
}

export default AboutSec;
