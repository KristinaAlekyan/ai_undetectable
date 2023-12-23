import React from "react"

const ContainerUI = ({ imgUrl, title, description, isExpandable = false }) => {
  return (
    <div className={`flex ${isExpandable?"flex-row-reverse lg:gap-[20px] gap-[10px] border-b-[1px] border-[#3B457B] lg:border-none":"justify-center gap-[15px]"} `}>
      <img src={imgUrl} alt="img" className={`${isExpandable?"min-w-[100px] max-w-[100px] max-h-[60px] min-h-[60px] sm:object-none sm:min-w-[240px] sm:min-h-[140px] sm:max-w-[240px] sm:max-h-[140px] lg:min-w-[400px] lg:min-h-[230px] lg:max-w-[400px] lg:max-h-[230px] flex-[20%]" : "min-w-[100px] max-w-[100px] max-h-[50px] min-h-[50px] object-none sm:min-w-[180px] sm:min-h-[100px] sm:max-w-[180px] sm:max-h-[100px]  lg:min-w-[300px] lg:min-h-[160px] lg:max-w-[300px] lg:max-h-[160px]"}  rounded-[10px] flex-[25%]`} />
      <div className={`text-[#3B457B] py pr-[16px] flex-[75%] flex flex-col lg:pt-2 lg:gap-[15px] ${isExpandable? "border-0 lg:border-b-[1px] lg:border-[#3B457B] pb-[12px] sm:pb-0 ":""}`}>
        <p className={`${isExpandable?"text-sm sm:text-xl lg:text-[32px] font-semibold sm:font-medium lg:font-semibold":"text-[10px] sm:text-lg"}`} >{title}</p>
        <p className={`pt-2 ${isExpandable?"text-[10px] sm:text-base lg:text-xl":"text-[8px] sm:text-xs"} sm:!leading-5 sm:pb-[10px]`}>{description}</p>
      </div>
    </div>
  )
}

export default ContainerUI;