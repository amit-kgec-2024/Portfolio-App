import React from "react";

const Input = ({ label, type, name, className }) => {
  return (
    <div className="flex flex-col my-2">
      <label className="text-lg font-bold text-slate-300">{label}</label>
      <input
        type={type}
        name={name}
        className={`p-2 border-2 border-slate-400 outline-none text-slate-200 bg-dark6 ${className}`}
      />
    </div>
  );
};

export default Input;
