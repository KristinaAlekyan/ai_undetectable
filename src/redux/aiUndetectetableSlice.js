import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchAiData = createAsyncThunk(
  'submitTextAi/submitAiForm',
  async (data, { rejectWithValue }) => {
    const { optionsData, apiEndpoint } = data
    try {
      if (apiEndpoint) {
        const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}${apiEndpoint}`, optionsData, {
          withCredentials: true
        }
        )
        const data = response
        return data ? data.data.text : '';
      }
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data.error)
    }
  }
)
const initialState = {
  loading: false,
  text: "",
  error: "",
}

export const submitAiUndetectBale = createSlice({
  name: 'submitTextAi',
  initialState,
  reducers: {
    submitAiForm: (state, action) => {
      state.text = action.payload
      return state
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAiData.fulfilled, (state, action) => {
      return { ...state, text: action.payload, loading: false }
    })
      .addCase(fetchAiData.pending, (state) => {
        return { ...state, loading: true }
      })
      .addCase(fetchAiData.rejected, (state, action) => {
        return { ...state, error: action.payload, loading: false }
      });
  }
})

export const { submitAiForm } = submitAiUndetectBale.actions;

export default submitAiUndetectBale.reducer;

