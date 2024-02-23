import { combineReducers, configureStore } from "@reduxjs/toolkit";

import submitData from "./aiUndetectetableSlice";
import loginUserForm from "./userLoginSlice";
import getUserSession from "./getUserSessionSlice";
import userSignupForm from "./userSignupSlice";
import logoutUser from "./logoutSlice";
import resendEmail from "./resendEmailSlice";
import optionsData from "./optionSlice"

const rootReducer = combineReducers({
  submitTextAi: submitData,
  loginUser: loginUserForm,
  getUser: getUserSession,
  signupUser: userSignupForm,
  logoutUser: logoutUser,
  resendEmail: resendEmail,
  optionsData: optionsData
})

export const store = configureStore({
  reducer: rootReducer
})