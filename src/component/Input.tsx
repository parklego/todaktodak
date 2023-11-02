import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  value: string;
  id: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, value, id, placeholder, onChange }: InputProps) => {
  return (
    <div className={`flex flex-col my-1 min-w-[50%]`}>
      <label className="my-2">{id}</label>
      <input
        className="h-10 border-2 rounded p-2"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Input;
