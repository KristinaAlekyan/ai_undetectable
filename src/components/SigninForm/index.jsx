import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ButtonUI } from "../../shared/ButtonUI";
import InputUI from "../../shared/InputUI";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/userLoginSlice";
import { getUserStorage } from "../../helpers";
import { fetchResendEmail } from "../../redux/resendEmailSlice";
import { LoaderSpinner } from "../../shared/LoaderSpinerUI";

function SigninForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.loginUser);
  const [status, setStatus] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (userState?.user && getUserStorage()) {
      navigate('/ai-undetectable')
    }
    if (userState?.error) {
      setStatus('rejected')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userState])

  const onSubmit = (data) => {
    setStatus('pending');
    dispatch(loginUser(data))
  }

  const onResendEmail = () => {
    const email = watch('email')
    if (email) {
      dispatch(fetchResendEmail(email))
    } else {

    }
  }

  return (
    <section className="flex justify-center items-center h-full py-[60px] sm:py-[140px]">
      {status === "pending" && <LoaderSpinner />}
      <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col items-center sm:w-[600px] lg:w-[954px] gap-[20px] sm:gap-[30px] bg-[#A8ACC7] sm:bg-[#F0F1F9]  rounded-[20px] pt-[84px] sm:pt-[20px] lg:pt-[84px] pb-[87px] sm:pb-[32px] lg:pb-[99px] mx-[50px] px-[50px] sm:px-[80px]">
        {status === "rejected" && <div className="absolute p-[40px] text-[#872C2C] text-sm">{userState?.error}</div>}
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
              value: 6,
              message: "Password must be at least 6 characters long",
            }
          })
        }}
          inputName="password"
          errors={errors}
          type="password"
          placeholder="Password"
        />

        <ButtonUI type="submit" title="Login" className="text-base sm:text-2xl text-[#F0F1F9] bg-[#3B457B] rounded-[10px] sm:rounded-[20px] px-[96px] py-[10px] sm:px-[82px] sm:py-[15px] lg:px-[93px] lg:py-[10px]" />
        <div className="flex flex-col items-center gap-[15px]">
          <span className="text-base sm:text-2xl text-[#3B457B] cursor-pointer	" onClick={() => { onResendEmail() }}>Resend Email Verification</span>
          <Link to="/signup" replace>
            <span className="flex text-center text-sm sm:text-2xl text-[#3B457B]">Don’t have an account? Sign Up Now</span>
          </Link>
        </div>
      </form>
    </section>
  )
}

export default SigninForm