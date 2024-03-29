import { Link } from "react-router-dom";

import homeIcon from "../../../src/assets/home_icon.svg";
import burgerIcon from "../../../src/assets/burger_icon.svg";
import profileIcon from "../../../src/assets/profile_small.svg";
import { ButtonUI } from "../../shared/ButtonUI";
import { getUserStorage, setStorageItemHandler } from "../../helpers";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const userState = useSelector(state => state.loginUser)

  const [open, setOpen] = useState(false)
  const openHandler = () => setOpen(true);
  const userData = getUserStorage();
  return (
    <header className="flex justify-between items-center border-b-[1px] border-[#F0F1F9] px-5 sm:px-[50px] lg:px-[70px] py-[30px] h-[90px] sm:h-[100px]">
      {open && <MobileMenu open={open} setOpen={setOpen} />}
      <div className="flex items-center gap-[30px]">
        <div className="flex sm:hidden" onClick={openHandler}>
          <img className="w-[40px] h-[23px] " src={burgerIcon} alt="" />
        </div>
        <div className="hidden lg:flex px-[47px] py-[7px] bg-[#A4ABD9] rounded-[20px]" >
          <Link to="/">
            <img className="w-[60px] h-[27px] fill-[#3B457B]" src={homeIcon} alt="" />
          </Link>
        </div>
        <div className="text-base sm:text-[16px] lg:text-xl text-[#F0F1F9] sm:ml-0 ml-[14px]">
          <Link to="/ai-undetectable">AI Undetectable</Link>
        </div>
      </div>
      <ul className="flex items-center gap-[15px]">
        <li className="hidden sm:flex text-base sm:text-[16px] lg:text-xl text-[#F0F1F9]">
          <Link onClick={setStorageItemHandler("blog")} to="/">
            <span>Blog</span>
          </Link>
        </li>
        <li className="hidden sm:flex text-base sm:text-[16px] lg:text-xl text-[#F0F1F9]">
          <Link to="/about">
            <span>About Us</span>
          </Link>
        </li>

        <li className="hidden sm:flex text-base sm:text-[16px] lg:text-xl text-[#F0F1F9] font-normal" >
          <Link to="/pricing" >
            <span>Pricing</span>
          </Link>
        </li>
        <li className="hidden sm:flex text-base sm:text-[16px] lg:text-xl text-[#F0F1F9]">
          <Link onClick={setStorageItemHandler("faq")} to="/" >
            <span>FAQ</span>
          </Link>
        </li>
        <li>
          {(userData) ?
            <Link to="/ai-undetectable">
              <ButtonUI title="Get Started" className="hidden lg:flex text-xl text-[#3B457B] bg-[#A4ABD9] rounded-[20px] px-[47px] py-[7px]" />
            </Link>
            :
            <Link to="/signup">
              <ButtonUI title="Get Started" className="hidden lg:flex text-xl text-[#3B457B] bg-[#A4ABD9] rounded-[20px] px-[47px] py-[7px]" />
            </Link>
          }
        </li>

        <li className="text-base sm:text-[16px] lg:text-xl text-[#F0F1F9]">

          {(userData)
            ?
            <Link to="/profile">
              <img className="w-[40px] h-[40px] " src={profileIcon} alt="" />
            </Link>
            :
            <Link to="/login">
              <span>Login</span>
            </Link>}
        </li>

      </ul>
    </header>
  )
}

export default Header