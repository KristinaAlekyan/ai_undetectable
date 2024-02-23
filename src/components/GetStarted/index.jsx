import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


import { ButtonUI } from "../../shared/ButtonUI";
import homeIcon from "../../../src/assets/home_icon.svg";

function GetStarted() {
  const location = useLocation();
  const userState = useSelector(state=>state.loginUser);

  if (location.pathname === "/") return null;

  return (
    <div className="flex lg:hidden sm:px-[50px] pt-[35px] sm:pt-[30px] justify-center sm:justify-between">
      <div className="hidden sm:flex  px-[47px] py-[7px] bg-[#A4ABD9] rounded-[10px]" >
        <Link to="/">
          <img className="w-[60px] h-[27px] fill-[#3B457B]" src={homeIcon} alt="" />
        </Link>
      </div>
      {( userState?.user) ?
          <Link to="/ai-undetectable">
            <ButtonUI title="Get Started" className="flex lg:hidden text-xl text-[#F0F1F9] bg-[#A4ABD9] rounded-[10px] px-10 py-1" />
          </Link>
          :
          <Link to="/signup">
            <ButtonUI title="Get Started" className="flex lg:hidden text-xl text-[#F0F1F9] bg-[#A4ABD9] rounded-[10px] px-10 py-1" />
          </Link>
        }
    </div>
  )
}

export default GetStarted
