import React from "react"
import { useClickOutside } from "../hooks/useClickOutSide";
import { useState } from "react";
import downIcon from "../../src/assets/down_1.svg";
import upIcon from "../../src/assets/up.svg";

const DropdownUI = ({ title, answer, isWide = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const { ref: dropdownRef, labelRef } = useClickOutside(closeDropdown);

  return (
    <div className="relative">
      <button ref={labelRef} className={`label flex flex-row text-[#F0F1F9] text-xs sm:text-sm font-medium p-[10px] ${isOpen? "rounded-t-[10px]" : "rounded-[10px]"} bg-[#3B457B] w-[280px] ${isWide ? "lg:min-w-[380px] sm:min-w-[350px] py-[12px] sm:px-[40px]" : ""}`}
        onClick={toggleDropdown}>{title}
        <img src={isOpen?upIcon:downIcon} alt="down" className="absolute right-[20px] top-4" width="18px" height="12px"/>
      </button>
      {isOpen && (
        <div 
          ref={dropdownRef} 
          className={`bg-[#3B457B] p-2 rounded-b-[10px] absolute left-0 top-[40px] z-20 text-[#F0F1F9] w-[280px] 
            ${isWide ? "lg:min-w-[380px] sm:min-w-[350px] py-[12px] px-[40px]" : ""}
            ${isOpen? "border-b-[1px] border-t-[1px] border-solid border-[white]" : ""}
          `}>
          {answer}
        </div>
      )}
    </div>
  )
}

export default DropdownUI




