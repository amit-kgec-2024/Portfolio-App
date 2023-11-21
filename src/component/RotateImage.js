import React from 'react'

export default function RotateImage() {
  return (
    <div className="w-[180px] h-[180px] my-2 mx-1 p-5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full ">
      <div className="w-[140px] h-[140px] border-8 border-teal-300 rounded-full overflow-hidden">
        <img src="abou.jpg" alt="About" />
      </div>
    </div>
  );
}
