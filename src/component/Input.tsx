import React from "react";

interface InputProps {
  type: string;
  id: string;
}

const Input = ({ type, id }: InputProps) => {
  return (
    <div className={`flex flex-col my-1 w-3/6`}>
      <label className="my-2">{id}</label>
      <input className="h-10 border-2 rounded" type={type}></input>
    </div>
  );
};

export default Input;
