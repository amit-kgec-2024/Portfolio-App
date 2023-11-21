import React from 'react'
import ProfeSkillCard from './ProfeSkillCard';

function AboutProfSkill() {
  return (
    <div className="container p-6 mt-24 bg-emerald-50">
      <h2 className="text-xl md:text-3xl font-semibold">
        Prof<span className="text-accent">ession</span>al Skills
      </h2>
      <div className="border-2 w-28 mt-4 border-sky-400" />
      <p className="text-gray-500 text-md lg:text-2xl mt-6">
        I am a professional and versatile professional with a solid foundation
        in front-end and back-end development, as well as expertise in circuit
        design and MATLAB programming. I specialize in building modern,
        user-responsive applications using technologies such as React.js and
        Next.js, complete with backend development capabilities, including
        server development-side uses of Node.js and builds on RESTful APIs. My
        skills also extend to the hardware realm and I am good at designing
        electronics from concept to configuration using tools like Altium
        Designer.
      </p>
      <ProfeSkillCard />
    </div>
  );
}

export default AboutProfSkill
