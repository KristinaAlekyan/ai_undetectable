import React from "react";
import { Link } from "react-router-dom";

import facebookIcon from "../../../src/assets/facebook_icon.svg";
import instagramIcon from "../../../src/assets/instagram_icon.svg";
import linkedinIcon from "../../../src/assets/linkedin_icon.svg";
import { setStorageItemHandler } from "../../helpers";

function Footer() {
  return (
    <footer className="flex flex-col-reverse sm:flex-row justify-between bg-[#F0F1F9] sm:py-[25px] sm:px-[65px] lg:py-[55px] lg:px-[120px]">
      <div className="flex items-center justify-center gap-[30px] pt-[30px] sm:pt-0 pb-[16px] sm:pb-0">
        <Link to="https://www.facebook.com/profile.php?id=61554500576831" target="_blank">
          <img
            src={facebookIcon}
            alt="facebook icon"
            className="w-[24px] h-[24px] lg:w-[44px] lg:h-[44px]"
          />
        </Link>
        <Link to="https://www.instagram.com/aiundetectable/" target="_blank">
          <img
            src={instagramIcon}
            alt="instagram icon"
            className="w-[24px] h-[24px] lg:w-[44px] lg:h-[44px]"
          />
        </Link>
        <Link to="https://www.linkedin.com/company/ai-undetectable/" target="_blank">
          <img
            src={linkedinIcon}
            alt="twitter icon"
            className="w-[24px] h-[24px] lg:w-[44px] lg:h-[44px]"
          />
        </Link>
      </div>

      <ul className="flex gap-[30px] text-sm sm:text-xl text-[#3B457B] font-medium sm:gap-[15px] lg:gap-[15px] justify-center items-center pt-[15px] sm:pt-0">
        <li>
          <Link onClick={setStorageItemHandler("blog")} to="/">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link onClick={setStorageItemHandler("support")} to="/about">
            <span>Support</span>
          </Link>
        </li>
        <li>
          <Link onClick={setStorageItemHandler("privacy")} to="/about">
            <span>Privacy</span>
          </Link>
        </li>
        <li>
          <Link onClick={setStorageItemHandler("terms")} to="/about">
            <span>Terms</span>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer