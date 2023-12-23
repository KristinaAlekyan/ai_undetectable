import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUserById = createAsyncThunk(
  'submitTextAi/submitAiForm',
  async (formData, thunkAPI) => {
    const response = await fetch(
      "https://aiundetectable.com/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    
    console.log(data, "data from response", thunkAPI);
    return data;
  }
)
export const submitAiUndetectBale = createSlice({
  name: 'submitTextAi',
  initialState: '',
  reducers: {
    submitAiForm: (state, action) => {
      console.log(action, 'action')
      state = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log(state, 'state')
      console.log(action, 'actionnnn in creaete async thubkjh')
      return state
    })
  }
})

export const { submitAiForm } = submitAiUndetectBale.actions;

export default submitAiUndetectBale.reducer;

