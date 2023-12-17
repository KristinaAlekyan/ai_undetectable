import { createSlice } from '@reduxjs/toolkit';

export const activeStatusSlice = createSlice({
  name: 'activeBtnStatus',
  initialState: '',
  reducers: {
    changeStatus: (state, action) => {
      state = action.payload;
      return state;
    }
  },
});

export const { changeStatus } = activeStatusSlice.actions;

export default activeStatusSlice.reducer;