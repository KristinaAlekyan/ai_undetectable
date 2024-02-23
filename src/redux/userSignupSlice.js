import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
  'userSignup/userSignup',
  async (formData, thunkAPI) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/signup`, {
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
export const userSignupForm = createSlice({
  name: 'userSignup',
  initialState: '',
  reducers: {
    userSignup: (state, action) => {
      state = action.payload;
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state = action.payload
      return state
    })
  }
})

export const { userSignup } = userSignupForm.actions;

export default userSignupForm.reducer;