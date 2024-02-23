import React from "react"
import { Link } from "react-router-dom";

import { ButtonUI } from "../../shared/ButtonUI"
import homeIcon from "../../../src/assets/home_icon.svg";

function GetStarted() {
  console.log(window.location.pathname,"location path name");

  const path = window.location.pathname;

  if(path ==="/"){
    return (
      <div className="flex flex-col gap-[30px] pt-[30px] lg:pb-[100px] px-[27px] sm:px-[88px] items-center text-[#FFF] text-center">
        <h1 className="text-xl sm:text-[28px] lg:text-[40px] font-medium">Embrace the future of AI Excellence</h1>
        <p className="text-base sm:text-xl lg:text-2xl">A cutting-edge platform dedicated to helping student and professionals seamlessly integrate AI-generated content into their academic and professional project.</p>
        <ButtonUI  title="Get Started" className="flex lg:hidden text-xl text-[#3B457B] bg-[#A4ABD9] rounded-[10px] px-10 py-1" />
      </div>
    )
  } else {
    return (
      <div className="flex lg:hidden sm:px-[85px] pt-[35px] sm:pt-[30px] justify-center sm:justify-between">
        <div className="hidden sm:flex  px-[47px] py-[7px] bg-[#A4ABD9] rounded-[20px]" >
          <Link to="/">
            <img className="w-[60px] h-[27px] fill-[#3B457B]" src={homeIcon} alt="" />
          </Link>
        </div>

        <ButtonUI  title="Get Started" className="flex lg:hidden text-xl text-[#3B457B] bg-[#A4ABD9] rounded-[10px] px-10 py-1" />
      </div>
    )
  }  
}

export default GetStarted
