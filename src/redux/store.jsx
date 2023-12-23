import { combineReducers, configureStore } from '@reduxjs/toolkit';
import submitData from './aiUndetectetableSlice';


const rootReducer = combineReducers({
  submitTextAi: submitData,
})

export const store = configureStore({
  reducer: rootReducer
})