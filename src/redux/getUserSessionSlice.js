import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { addUserLocalStorage } from "../helpers";

export const getUserSeSS = createAsyncThunk(
  'getUser/getUser',
  async (formData, thunkAPI) => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}/user`, {
      withCredentials: true
    })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      })
     
    return {};
  }
)
export const getUserRefresh = createAsyncThunk(
  'getUser/refresh',
  async (formData, thunkAPI) => {    

    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/updateuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();

    return data;
  }
)

export const getUserSession = createSlice({
  name: 'getUser',
  initialState: '',
  reducers: {
    getUser: (state, action) => {
      state = action.payload;
      return state
    },
    refresh: (state, action) => {
      state = action.payload;
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserSeSS.fulfilled, (state, action) => {
      state = action.payload
      return state
    });
    builder.addCase(getUserRefresh.fulfilled, (state, action) => {
      addUserLocalStorage("user",action.payload.user)
      state = action.payload
      return state
    });

  }
})

export const { getUser } = getUserSession.actions;

export default getUserSession.reducer;

