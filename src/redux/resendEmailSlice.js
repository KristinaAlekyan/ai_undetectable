import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const fetchResendEmail = createAsyncThunk(
  'resendEmail/resendEmail',
  async (formData, thunkAPI) => {
      const data = { email: formData };
      const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/send-email`, {
          method: "POST",
          headers: {
              'Content-Type': "application/json",
          },
          body: JSON.stringify(data),
      });
  
      const responseText = await response.text();
      
      if (!response.ok) {
          throw new Error(responseText); 
      }     
    return responseText
  });



export const resendEmailSlice = createSlice({
  name: 'resendEmail',
  initialState: '',
  reducers: {
    resendEmail: (state, action) => {
      state = action.payload;
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchResendEmail.fulfilled, (state, action) => {
      state=action.payload
      return state
    })
  }
})

export const { resendEmail } = resendEmailSlice.actions;

export default resendEmailSlice.reducer;
