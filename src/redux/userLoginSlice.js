import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  'userLogin/userLogin',
  async (formData, thunkAPI) => {    

    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/login`, {
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
export const loginUserForm = createSlice({
  name: 'userLogin',
  initialState: '',
  reducers: {
    userLogin: (state, action) => {
      state = action.payload;
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state=action.payload
      localStorage.setItem('user',JSON.stringify(state))
      return state
    })
  }
})

export const { userLogin } = loginUserForm.actions;

export default loginUserForm.reducer;

