import React from "react";
import {
  PayPalButtons,
} from "@paypal/react-paypal-js";
import { ButtonUI } from "./ButtonUI";
import paypalIcon from "../assets/paypal.svg"
import payIcon from "../assets/pay.svg"
import { toast } from "react-toastify";

const PriceUI = ({
  isCheckPaymentRules,
  packageType,
  errorMessageHandler,
  cancelMessageHandler,
  createOrder,
  about,
  title,
  price,
  contentArr,
  isExpandable,
  buttonActions,
  priceNavigateHandler,
  openInfoModal,
}) => {

  const onApprove = async (data = null, actions) => {
    // return fetch(`${process.env.REACT_APP_API_ENDPOINT}/capture-paypal-order`, {
    return fetch(`https://aiundetectable.com/api/capture-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderID: data.orderID,
        packageType
      })
    })
      .then(response => response.json())
      .then(orderData => {
        toast.success("Payment goes through succesfully");
       })
      .catch(error => {
        toast.error("Something goes wrong");
        console.error('Error capturing order:', error);
      });

    // Approve data from parameters after successful purchase to send in backend
    // data = {
    //   "orderID": "...",
    //   "payerID": "...",
    //   "paymentID": "...",
    //   "billingToken": null,
    //   "facilitatorAccessToken": "...",
    //   "paymentSource": "paypal"
    // }

    // return actions.order.capture().then(function (details) {
    //   const { payer } = details;
    // Payer data after successful purchase to send in backend
    // payer = {
    //   "email_address": "...@personal.example.com",
    //   "payer_id": "...",
    //   "address": {
    //       "country_code": "US"
    //   },
    //   "name": {
    //       "given_name": "...",
    //       "surname": "..."
    //   }
    // }
    // });
  };

  

  return (
    <div className="flex flex-col items-center bg-[#F0F1F9] py-4 px-4 sm:px-0 rounded-[20px] w-[200px] lg:w-[270px] relative" >
      {/* {!isPopupOpen && <div className="absolute bg-[#A4ABD9] p-[50px]">You must agree to the terms and conditions</div>} */}
      <div className="flex flex-col items-center pb-[15px] border-[#3B457B] border-b-[1px] w-full">
        <p className="text-[#3B457B] text-base font-medium ">{about}</p>
      </div>
      <div className={`flex flex-col pt-[15px] ${!isExpandable ? "gap-[50px]" : "gap-0"} w-full py-4 px-2 lg:px-4 grow`}>
        <div className="grow">
          <p className="flex justify-center text-[#3B457B] text-sm font-medium">{title}</p>
          <div className="flex flex-col  gap-[15px] pb-[25px]">
            <div className="flex justify-center p-[10px]  text-[#3B457B] text-xs font-medium">
              <p className="border-b-[1px] border-[#3B457B] p-[10px]">{`${price}$`}</p>
            </div>
            <ul className={`m-0 flex-col items-start gap-[15px] list-outside list-style-none ml-2 ${isExpandable ? "hidden sm:flex" : "flex"}`}>
              {contentArr.map(item => <li key={item} className="relative text-[#3B457B] leading-5 before:content-[''] before:rounded-full before:w-[12px] before:h-[12px] before:bg-[#3B457B] drop-shadow-md before:inline-block before:mr-1 before:ml-0.5 before:text-red-500">
                {item}
              </li>)}
            </ul>
            {isExpandable &&
              <div className="block sm:hidden">
                <ul className="m-0 flex flex-col items-start gap-[15px] list-outside list-style-none ml-2">
                  {contentArr.slice(0, 2).map(item => <li key={item} className="relative text-[#3B457B] leading-5 before:content-[''] before:rounded-full before:w-[12px] before:h-[12px] before:bg-[#3B457B] drop-shadow-md before:inline-block before:mr-1 before:ml-0.5 before:text-red-500">
                    {item}
                  </li>)}
                </ul>

                <div className="flex justify-center p-[10px]  text-[#3B457B] text-sm font-medium mt-2">
                  <p onClick={priceNavigateHandler} className="cursor-pointer border-b-[1px] border-[#3B457B]">More</p>
                </div>
              </div>}
          </div>
        </div>
        <div className="flex flex-col gap-[5px] mx-auto max-w-[150px]">
          {
            !buttonActions ?
              (isCheckPaymentRules ?
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                    color: "white",
                    height: 38,
                  }}
                  disabled={!isCheckPaymentRules}
                  createOrder={createOrder(price)}
                  onApprove={onApprove}
                  onCancel={cancelMessageHandler}
                  onError={errorMessageHandler}
                />
                :
                <ButtonUI svg={paypalIcon} onClick={openInfoModal} />
              )
              :
              (
                <>
                  <ButtonUI svg={paypalIcon} onClick={buttonActions} />
                  <ButtonUI svg={payIcon} onClick={buttonActions} />
                </>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default PriceUI;