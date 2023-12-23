import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { submitLoginForm } from "../../helpers/api"
import { ButtonUI } from "../../shared/ButtonUI";
import InputUI from "../../shared/InputUI";

function SigninForm() {
  const [responseForm, setResponseForm] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data, event) => {
    const formResult = await submitLoginForm(data)
    setResponseForm(formResult)
  };

  return (
    <section className="flex justify-center items-center h-full py-[160px]">
      <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col items-center sm:w-[600px] lg:w-[954px] gap-[20px] sm:gap-[30px] bg-[#A8ACC7] sm:bg-[#F0F1F9]  rounded-[20px] pt-[84px] sm:pt-[20px] lg:pt-[84px] pb-[87px] sm:pb-[32px] lg:pb-[99px] mx-[50px] px-[50px] sm:px-[80px]">
        <span className="text-[#3B457B] font-medium text-2xl sm:text-4xl">Login</span>
        <InputUI register={{
          ...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            }
          })
        }}
          inputName="email"
          errors={errors}
          type="text"
          placeholder="User Email"
        />
        <InputUI register={{
          ...register("password", {
            required: "Password is required",
            minLength: {
              value: 2,
              message: "Password must be at least 8 characters long",
            },
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            //   message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            // },
          })
        }} 
          inputName="password"
          errors={errors}
          type="password"         
          placeholder="Password"
        />
        
        <ButtonUI type="submit" title="Login" className="text-base sm:text-2xl text-[#F0F1F9] bg-[#3B457B] rounded-[10px] sm:rounded-[20px] px-[96px] py-[10px] sm:px-[82px] sm:py-[15px] lg:px-[93px] lg:py-[10px]" />
        <div className="flex flex-col items-center gap-[15px]">
          <span className="text-base sm:text-2xl text-[#3B457B]">Resend Email Verification</span>
          <Link to="/signup">
            <span className="text-sm sm:text-2xl text-[#3B457B]">Don’t have an acoount? Sign Up Now</span>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default SigninForm