import React from 'react'
import ProfeSkillCard from './ProfeSkillCard';

function AboutProfSkill() {
  return (
    <div className="container p-6 mt-24 bg-emerald-50">
      <h2 className="text-3xl font-semibold">
        Prof<span className='text-accent'>ession</span>al Skills
      </h2>
      <div className="border-2 w-28 mt-4 border-sky-400" />
      <p className="text-gray-500 text-xl mt-6">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <ProfeSkillCard />
    </div>
  );
}

export default AboutProfSkill
