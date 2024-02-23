import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signupUser } from "../../redux/userSignupSlice";
import { useDispatch, useSelector } from "react-redux";
import { ButtonUI } from "../../shared/ButtonUI";
import InputUI from "../../shared/InputUI";
import { LoaderSpinner } from "../../shared/LoaderSpinerUI";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const dispatch = useDispatch()
  const userState = useSelector(state => state.signupUser)
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (userState?.user) {

      setStatus('succes')
    }
    if (userState?.error) {
      setStatus('rejected')
    }

  }, [userState])

  const onSubmit = (data) => {
    setStatus('pending')
    dispatch(signupUser(data))
  }

  function confirmPasswordValidate(value) {
    const password = getValues("password");
    if (password !== value) {
      return "Password mismatch*"
    }
    return true
  }

  return (
    <section className="flex justify-center items-center h-full py-[60px] sm:py-[140px] relative">
      {status === "pending" && <LoaderSpinner />}
      <form style={{ filter: `blur(${status === "pending" ? 6 : 0}px)` }} onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col items-center sm:min-w-[600px] lg:min-w-[954px] gap-[20px] sm:gap-[30px] bg-[#A8ACC7] sm:bg-[#F0F1F9]  rounded-[20px] pt-[84px] sm:pt-[20px] lg:pt-[84px] pb-[87px] sm:pb-[32px] lg:pb-[99px] px-[49px] sm:px-[82px] ">

        <span className="text-[#3B457B] font-medium text-2xl sm:text-4xl">Sign Up</span>
        {status === "rejected" && <div className="absolute p-[40px] text-[#872C2C]">{userState?.error}</div>}
        {status === "succes" && <div className="absolute py-[30px] sm:p-[40px] text-[#2c8769] text-center text-[9px] sm:text-sm"> Account created successfully! Please check your email to validate your account</div>}
        <InputUI
          placeholder="Username"
          register={{ ...register("username", { required: "Username is required" }) }}
          errors={errors}
          inputName="username"
        />
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
              value: 6,
              message: "Password must be at least 6 characters long",
            }
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
              value: 6,
              message: "Confirm password",
            }
          })
        }}
          placeholder="Confirm Password"
          type="password"
          inputName="confirmpassowrd"
        />
        <ButtonUI title="Sign up" className="text-base sm:text-2xl text-[#F0F1F9] bg-[#3B457B] rounded-[10px] sm:rounded-[20px] px-[96px] py-[10px] sm:px-[82px] sm:py-[15px] lg:px-[93px] lg:py-[10px]" />
        <div className="flex flex-col items-center gap-[15px]">
          <Link to="/login">
            <span className="flex text-center text-base	 sm:text-2xl	text-[#3B457B]"> Already have an account? Log in </span>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default SignupForm
