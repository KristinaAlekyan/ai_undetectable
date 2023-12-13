import React from "react"

import profileIcon from "../../../src/assets/profile_icon.svg";
import robot_mobile_ilustration from "../../../src/assets/robot_mobile_ilustration.svg";
import robot_tablet_ilustration from "../../../src/assets/robot_tablet_ilustration.svg";
import { ButtonUi } from "../../shared/ButtonUi";

function Profile() {
  return (
    <div className="px-[41px] sm:px-[85px] lg:px-[123px] py-[41px] sm:py-[150px] lg:py-[200px]">
      <div className="flex flex-col sm:flex-row items-center justify-around bg-[#F0F1F9] rounded-[20px] px-[45px] sm:px-[30px] lg:px-[47px] pt-[37px] sm:pt-[25px] lg:pt-[29px] pb-[36px] sm:pb-[120px] lg:pb-[110px]">
        <div className="flex flex-col items-center sm:items-start gap-[15px]">
          <span className="text-base sm:text-xl font-medium text-[#3B457B]">Your Profile </span>
          <div className="flex pl-[12px] pt-[17px] pb-[17px] gap-[9px] border-[1px] border-[#3B457B] rounded-[20px] pr-[10px] min-w-[210px] sm:min-w-[292px] w-full">
            <div className=""> 
              <img className="w-[34px] h-[34px] " src={profileIcon} alt=""  />
            </div>

            <div className="border-l-[1px] h-[60px] border-[#3B457B]"> </div>
            <div className="flex flex-col gap-[5px] text-sm text-[#3B457B]">
              <span>Username</span>              
              <span>Email</span>
            </div>
          </div>
          <div>
            <ButtonUi title="Log out" className="flex text-base text-[#F0F1F9] bg-[#5F6CB4] rounded-[10px] px-[45px] py-[8px]" />
          </div>

        </div>
        <div className=""> 
          <img className="flex sm:hidden w-[128px] h-[196px] " src={robot_mobile_ilustration} alt="robot ilustration"  />
          <img className="hidden sm:flex w-[289px] h-[246px] " src={robot_tablet_ilustration} alt="robot ilustration"  />
        </div>
      </div>
    </div>
  )
}

export default Profile
