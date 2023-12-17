
import { Link } from "react-router-dom";

import homeIcon from "../../../src/assets/home_icon.svg";
import burgerIcon from "../../../src/assets/burger_icon.svg";
import profileIcon from "../../../src/assets/profile_small.svg";
import { ButtonUi } from "../../shared/ButtonUi";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-[1px] border-[#F0F1F9] px-5 sm:px-[50px] lg:px-[70px] py-[30px] ">
      <div className="flex items-center gap-[30px]">
        <div className="flex sm:hidden" >
          <Link to="/" >
            <img className="w-[40px] h-[23px] " src={burgerIcon} alt="" />
          </Link>
        </div>
        <div className="hidden lg:flex px-[47px] py-[7px] bg-[#A4ABD9] rounded-[20px]" >
          <Link to="/">
            <img className="w-[60px] h-[27px] fill-[#3B457B]" src={homeIcon} alt="" />
          </Link>
        </div>
        <div className="text-xl text-[#F0F1F9] sm:ml-0 ml-[14px]">
          <Link to="/ai-undetectable">AI Undetectable</Link>
        </div>
      </div>
      <ul className="flex gap-[15px]">
        <li className="hidden sm:flex text-xl text-[#F0F1F9]">
          <Link to="/blog">
            <span>Blog</span>
          </Link>
        </li>
        <li className="hidden sm:flex text-xl text-[#F0F1F9]">
          <Link to="/about">
            <span>About Us</span>
          </Link>
        </li>

        <li className="hidden sm:flex text-xl text-[#F0F1F9] font-normal" >
          <span>Pricing</span>
        </li>
        <li className="hidden sm:flex text-xl text-[#F0F1F9]">
          <span>FAQ</span>
        </li>
        <li >
          <ButtonUi title="Get Started" className="hidden lg:flex text-xl text-[#3B457B] bg-[#A4ABD9] rounded-[20px] px-10 py-1" />
        </li>
        <li className="text-base sm:text-xl text-[#F0F1F9]">
          {true?<Link to="/login">
            <span>Login</span>
          </Link>:
          <Link to="/profile"> 
            <img className="w-[40px] h-[40px] " src={profileIcon} alt="" />
          </Link>
          }
        </li>
        
      </ul>
    </header>
  )
}


export default Header