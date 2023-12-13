import React from "react"

import { Link } from "react-router-dom";
import facebookIcon from "../../../src/assets/facebook_icon.svg";
import instagramIcon from "../../../src/assets/instagram_icon.svg";
import twitterIcon from "../../../src/assets/twitter_icon.svg";
import youtubeIcon from "../../../src/assets/youtube_icon.svg";

function Footer() {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between bg-[#F0F1F9] sm:py-[25px] sm:px-[65px] lg:py-[55px] lg:px-[120px]">
      <div className="flex items-center justify-center gap-[30px] pt-[30px] sm:pt-0 pb-[16px] sm:pb-0">
        <Link to="https://www.facebook.com" target="_blank">
          <img
            src={facebookIcon}
            alt="facebook icon"
            className="w-[24px] h-[24px] lg:w-[44px] lg:h-[44px]"
          />
        </Link>
        <Link to="https://www.intagram.com" target="_blank">
          <img
            src={instagramIcon}
            alt="instagram icon"
            className="w-[24px] h-[24px] lg:w-[44px] lg:h-[44px]"
          />
        </Link>
        <Link to="https://www.twitter.com" target="_blank">
          <img
            src={twitterIcon}
            alt="twitter icon"
            className="w-[24px] h-[24px] lg:w-[44px] lg:h-[44px]"
          />
        </Link>
        <Link to="https://www.youtube.com" target="_blank">
          <img
            src={youtubeIcon}
            alt="youtube icon"
            className="w-[24px] lg:w-[44px] h-[18px] lg:h-[32px]"
          />
        </Link>
      </div>

      <ul className="flex gap-[30px] text-sm sm:text-xl text-[#3B457B] font-medium sm:gap-[15px] lg:gap-[15px] justify-center items-center pt-[15px] sm:pt-0">
        <li>
          <span>Blog</span>
        </li>
        <li>
          <span>Support</span>
        </li>
        <li>
          <span>Privacy</span>
        </li>
        <li>
          <span>Terms</span>
        </li>
      </ul>
    </div>
  )
}

export default Footer



