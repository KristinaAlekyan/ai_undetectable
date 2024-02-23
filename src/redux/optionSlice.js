import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  options: {
    humanize: false,
    improveWritingQuality: false,
    highSchoolLevel: false,
    undergraduateLevel: false,
    phdLevel: false,
    increaseWordCount: false,
    decreaseWordCount: false
  }
}

export const optionsData = createSlice({
  name: 'optionsData',
  initialState,
  reducers: {
    setOptionsData: (state, action) => {
      return { ...state, ...action.payload }
    }
  },
})

export const { setOptionsData } = optionsData.actions;

export default optionsData.reducer;
