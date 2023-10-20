import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

  const naviGate = useNavigate()

  const goToHome = () => {
    naviGate("/");
  }
  return (
    <main className="w-[80%] left-[20%] relative">
    <div className="container w-full flex p-8 text-center justify-center text-xl bg-emerald-300 text-white">
      <h1>
        Desigin October 2023 <span className="text-black">By</span> | Amit
        Mandal <span className="text-black">(KGEC)</span>
      </h1>
      <AiOutlineArrowUp 
      className='ml-32 p-1 cursor-pointer text-white bg-red-400 text-3xl rounded-md'
      onClick={goToHome}
      />
    </div>
    </main>
  );
}
