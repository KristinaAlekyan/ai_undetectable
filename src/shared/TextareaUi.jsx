import React from "react";

function TextareaUI({ className, icon, onChange, placeholder, disabled = false, value="", onClick}) {
  return (
    <div className="relative w-full">
      <textarea placeholder={placeholder} className={`${className}  w-full	min-h-[300px] rounded-[20px] resize-none outline-0`} value={value}  onChange={onChange}/>
      <img onClick={onClick} className="cursor-pointer hover:opacity-75 absolute bottom-[20px] right-[20px]" alt="" src={icon}></img>
    </div>
  )
}

export default TextareaUI;