import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchLogout = createAsyncThunk(
  'logoutUser/logoutUser',
  async (formData, thunkAPI) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/logout`, {
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

export const logoutUserSlice = createSlice({
  name: 'logoutUSer',
  initialState: '',
  reducers: {
    logoutUSer: (state, action) => {
      state = action.payload;
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogout.fulfilled, (state, action) => {
      state=action.payload
      return state
    })
  }
})

export const { logoutUSer } = logoutUserSlice.actions;

export default logoutUserSlice.reducer;
