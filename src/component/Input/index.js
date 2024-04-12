import React from 'react'

const Input = ({
  label = "",
  id = "",
  name = "",
  type = "",
  className = "",
  placeholder = "",
  isRequired = true,
  value = "",
  onChange = () => {},
}) => {
  return (
    <div className="flex flex-row gap-6 py-4 items-center w-full">
      <label htmlFor={name} className="block text-xl lg:text-3xl font-extrabold">
        {label}
      </label>
      <div className="border-b-2 border-black p-2 w-full">
        <input
          type={type}
          id={id}
          name={name}
          className={`bg-pink-200 text-Black text-xl lg:text-2xl ${className}`}
          placeholder={placeholder}
          required={isRequired}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input
