import { combineReducers, configureStore } from '@reduxjs/toolkit';
import statusReducer from './activeStatusSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  activeBtnStatus: statusReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
