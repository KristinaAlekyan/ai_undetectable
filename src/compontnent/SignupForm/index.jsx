import { Link } from "react-router-dom";
import React  from "react"
import { useForm } from "react-hook-form";

import { ButtonUI } from "../../shared/ButtonUI";
import InputUI from "../../shared/InputUI";
import { submitSignupForm } from "../../helpers/api"

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit = async(data) => {
    const formResult = await submitSignupForm(data)
  };

  function confirmPasswordValidate(value) {
    const password = getValues("password");
    if (password !== value) {
     return "Password mismatch*"
    }
    return true
  }

  return (
    <>
      <section className="flex justify-center items-center h-full py-[140px]">
        <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col items-center min-w-[348px] sm:min-w-[600px] lg:min-w-[954px] gap-[20px] sm:gap-[30px] bg-[#A8ACC7] sm:bg-[#F0F1F9]  rounded-[20px] pt-[84px] sm:pt-[20px] lg:pt-[84px] pb-[87px] sm:pb-[32px] lg:pb-[99px] px-[49px] sm:px-[82px] ">
          <span className="text-[#3B457B] font-medium text-2xl sm:text-4xl">Sign Up</span>
          <InputUI placeholder="Username" register={{ ...register("username", { required: "Username is required" }) }} errors={errors} inputName="username" />
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
            className="w-[750px]"
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
            placeholder="Password" 
            errors={errors}
            type="password"
            inputName="password" />
          <InputUI errors={errors} register={{
            ...register("confirmpassowrd", {
              required: "Confirm password is required",
              validate: confirmPasswordValidate,
              minLength: {
                value: 2,
                message: "Confirm password must be at least 8 characters long",
              },
              // pattern: {
              //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
              //   message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              // },
            })
          }}             
            placeholder="Confirm Password"
            type="password"
            inputName="confirmpassowrd" 
          />
          <ButtonUI title="Sign up" className="text-base sm:text-2xl text-[#F0F1F9] bg-[#3B457B] rounded-[10px] sm:rounded-[20px] px-[96px] py-[10px] sm:px-[82px] sm:py-[15px] lg:px-[93px] lg:py-[10px]" />
          <div className="flex flex-col items-center gap-[15px]">
            <span className="text-base sm:text-2xl text-[#3B457B]"> Resend Email Verification </span>
            <Link to="/signup">
              <span className="text-sm sm:text-2xl text-[#3B457B]"> Don’t have an acoount? Sign Up Now </span>
            </Link>
          </div>
        </form>
      </section>
    </>
  )
}

export default SignupForm
