import React from "react";

const TextInput = ({ type = "text", label,placeholder="Enter your input here" ,value,onChangeHandler}) => {
  return (
    <div>
      <span className="text-gray-700">{label}</span>
      <input
        type={type}
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default TextInput;
