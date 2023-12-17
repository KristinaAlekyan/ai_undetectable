import React from "react"

const InputUi = ({ register, errors, classN, placeholder, inputName = "", type }) => {
  return (
    <div className="">
      <input
        type={type}
        {...register}
        className={`${errors[inputName]?`border-2 border-[#872C2C]`:``}text-base sm:text-2xl w-full rounded-[10px] sm:rounded-[20px] p-[20px] sm:p-[30px] py-[10px] sm:py-[10px] lg:py-[15.5px]  bg-[#F0F1F9] sm:bg-[#A4ABD9] placeholder-[#3B457B] focus:outline-none focus:ring-[#A4ABD9] ${classN}`}
        placeholder={placeholder}
      />
      {errors[inputName] && <p className="text-[#872C2C]">{errors[inputName]?.message}</p>}
    </div>
  )
}

export default InputUi




