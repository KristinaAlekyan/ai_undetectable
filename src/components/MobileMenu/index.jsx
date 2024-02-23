import React from "react";
import { Link } from "react-router-dom";

import { setStorageItemHandler } from "../../helpers"
import facebookMobileIcon from "../../assets/facebook_mobile_icon.svg";
import instagramMobileIcon from "../../assets/instagram_mobile_icon.svg";
import linkedinMobileIcon from "../../assets/linkedin_mobile_icon.svg";
import closeIcon from "../../assets/close.svg";
import { useClickOutside } from "../../hooks/useClickOutSide";

function MobileMenu({ open, setOpen }) {

  const closeHandler = () => setOpen(false);

  const { ref: dropdownRef } = useClickOutside(() => setOpen(false));

  const changeSection = (title) => {
    setStorageItemHandler(title)
    setOpen(false)
  }

  return (
    <div className={open ? " transition-all w-full h-screen z-[18] fixed top-0 bg-[#3B457B83]" : ""}>
      <div ref={dropdownRef} className={`sm:hidden  bg-[#3B457B] fixed h-full transition-all z-10 top-0 left-0`}>
        <div className="flex flex-col bg-[#3B457B] justify-between h-full pt-[30px]">
          <div className="flex flex-col">
            <div onClick={closeHandler} className="border-[1px] border-[#3B457B] border-b-[#F0F1F9] w-full ">
              <img src={closeIcon} alt="close" height="31px" width="31px" className="ml-[40px] mb-[26px]" />
            </div>
            <ul className="flex flex-col gap-[30px] text-xl	ml-[40px] mt-[30px]">
              <li className="text-xl text-[#F0F1F9]">
                <Link onClick={() => setOpen(false)} to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li className="text-xl text-[#F0F1F9]">
                <Link onClick={() => setOpen(false)} to="/about">
                  <span>About Us</span>
                </Link>
              </li>
              <li className="text-xl text-[#F0F1F9]">
                <Link onClick={() => changeSection('faq')} to="/" >
                  <span>FAQ</span>
                </Link>
              </li>
              <li className="text-[#F0F1F9]" >
                <Link onClick={() => setOpen(false)} to="/pricing" >
                  <span>Pricing</span>
                </Link>
              </li>
              <li className="text-xl text-[#F0F1F9]">
                <Link onClick={() => changeSection('blog')} to="/">
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-start gap-[30px] pt-[20px] pb-[25px] border-[1px] border-[#3B457B] border-t-[#F0F1F9] px-[40px]">
            <Link to="https://www.facebook.com/profile.php?id=61554500576831" target="_blank">
              <img
                src={facebookMobileIcon}
                alt="facebook"
                className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
              />
            </Link>
            <Link to="https://www.instagram.com/aiundetectable/" target="_blank">
              <img
                src={instagramMobileIcon}
                alt="instagram"
                className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
              />
            </Link>
            <Link to="https://www.linkedin.com/company/ai-undetectable/" target="_blank">
              <img
                src={linkedinMobileIcon}
                alt="linkedin"
                className="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu