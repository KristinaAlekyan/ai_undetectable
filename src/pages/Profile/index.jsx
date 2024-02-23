/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import profileIcon from "../../../src/assets/profile_icon.svg";
import robot_mobile_ilustration from "../../../src/assets/robot_mobile_ilustration.svg";
import robot_tablet_ilustration from "../../../src/assets/robot_tablet_ilustration.svg";
import { ButtonUI } from "../../shared/ButtonUI";
import { fetchLogout } from "../../redux/logoutSlice";
import { getUserSeSS } from "../../redux/getUserSessionSlice";
import { getUserStorage } from "../../helpers";
import { userLogin } from "../../redux/userLoginSlice";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ userInStorage, setUserInstorage ] = useState(null);
  const userState = useSelector((state) => state.loginUser);

  useEffect(() => {
    dispatch(getUserSeSS())
  },[]);

  useEffect(() => {
    const data = getUserStorage();
    setUserInstorage(data)
  },[userState]);

  const handleLogout = () => {
    dispatch(fetchLogout());
    localStorage.removeItem('user');
    navigate('/login');
    dispatch(userLogin({}))
  }

  return (
    <div className="px-[20px] sm:px-[85px] lg:px-[123px] py-[41px] flex justify-center items-center">
      <div className="flex flex-col gap-6 sm:flex-row justify-between bg-[#F0F1F9] rounded-[20px] px-[45px] sm:px-[30px] lg:px-[47px] pt-[50px] pb-[36px] sm:pb-[120px] lg:pb-[110px] min-w-[75%]">
        <div className="flex flex-col items-center sm:items-start gap-[15px]">
          <span className="text-base sm:text-xl font-medium text-[#3B457B]">Your Profile </span>
          <div className="flex pl-[12px] pt-[17px] pb-[17px] gap-[9px] border-[1px] border-[#3B457B] rounded-[20px] sm:pr-[50px] lg:pr-[130px] min-w-[200px] w-full">
            <div className=""> 
              <img className="w-[34px] h-[34px] min-w-[34px]" src={profileIcon} alt=""  />
            </div>

            <div className="border-l-[1px] h-[60px] border-[#3B457B]"> </div>
            <div className="flex flex-col gap-[5px] text-sm text-[#3B457B]">
              <span>{userInStorage?.username}</span>              
              <span>{userInStorage?.email}</span>
            </div>
          </div>
          <div>
            <ButtonUI onClick={handleLogout} title="Log out" className="flex text-base text-[#F0F1F9] bg-[#5F6CB4] rounded-[10px] px-[45px] py-[8px]" />
          </div>

        </div>
        <div className="xl:mr-[70px] mr-0"> 
          <img className="flex sm:hidden w-[440px] h-[440px] " src={robot_mobile_ilustration} alt="robot ilustration"  />
          <img className="hidden sm:flex w-[440px] h-[440px] " src={robot_tablet_ilustration} alt="robot ilustration"  />
        </div>
      </div>
    </div>
  )
}

export default Profile
