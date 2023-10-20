import AboutCart from "./AboutCart";
import React from "react";
import AboutSkils from "./AboutSkils";
import AboutProfSkill from "./AboutProfSkill";

function AboutSec() {
  return (
    <main className="w-[80%] left-[20%] relative">
      <div className="container p-8">
        <AboutCart />
        <AboutSkils />
        <AboutProfSkill />
      </div>
    </main>
  );
}

export default AboutSec;
