import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import { store} from './redux/store';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from "./App";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

const PaypalOptions = {
  clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
      <PayPalScriptProvider options={PaypalOptions}>
        <Provider store={store}>     
          <App />
        </Provider>
      </PayPalScriptProvider>
    </BrowserRouter>
);