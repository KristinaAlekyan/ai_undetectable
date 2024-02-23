import { useState } from "react";
import PriceUI from "../../shared/PriceUI";
import { ToastContainer, toast } from 'react-toastify';

const Pricing = () => {
  const [isCheckPaymentRules, setIsCheckPaymentRules] = useState(false);
  const createOrder = (value) => (data = null, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
                currency_code: "USD",
                value,
            },
          },
        ],
      }).then((orderID) => {
        return orderID;
      });
  };

  const paymentErrorMessageHandler = () => toast.error("Something wrong happened, please try again");

  const cancelMessageHandler = () => toast.info("Operation cancelled by User request");

  const openInfoModal = () => {
     toast.info("You must agree to the terms and conditions");
  }
  return (
    <>
      <section className="flex flex-col px-5 py-[30px] sm:px-[70px] gap-[30px]">
        <div className="flex flex-col items-center gap-[30px] text-center">
          <h1 className="text-[#F0F1F9] text-xl sm:text-[28px] lg:text-[32px] font-medium ">
          Choose the Package that is Right for You!
          </h1>
          <p className="text-[#FFF] text-sm font-medium">
            Premium words offers a more smooth, naturally written, and more human version of the essay, with a higher degree of undetectability. Premium words can also be used to humanize essays in other languages.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <p className="text-base text-[#F0F1F9] font-medium">
            One-Time Purchase!
          </p>
          <div className="flex flex-col sm:flex-row gap-[30px] lg:gap-[60px]">            
            <PriceUI
              openInfoModal={openInfoModal}
              isCheckPaymentRules={isCheckPaymentRules}
              errorMessageHandler={paymentErrorMessageHandler}
              cancelMessageHandler={cancelMessageHandler}
              createOrder={createOrder}
              price={5.99}
              about="Regular"
              title="Regular Words"
              packageType="Regular"
              contentArr={[
                "10K Words",
                "ByPass AI Detectors",
                "No Ads",
                "Super Fast Conversion.",
              ]}
            />
            <PriceUI
              openInfoModal={openInfoModal}
              isCheckPaymentRules={isCheckPaymentRules}
              errorMessageHandler={paymentErrorMessageHandler}
              cancelMessageHandler={cancelMessageHandler}
              createOrder={createOrder}
              price={9.99}
              about="Premium"
              title="Premium Words"
              packageType="Premium"
              contentArr={[
                "10К Premium Words",
                "ByPass AI Detectors",
                "No Ads",
                "Fast Conversion",
                "Languages"
              ]}
            />
            <PriceUI
              openInfoModal={openInfoModal}
              isCheckPaymentRules={isCheckPaymentRules}
              errorMessageHandler={paymentErrorMessageHandler}
              cancelMessageHandler={cancelMessageHandler}
              createOrder={createOrder}
              price={19.99}
              about="Professional"
              title="Bundle Words"
              packageType="Bundle"
              contentArr={[
                "50K Regular Words",
                "ByPass AI Detectors",
                "25K Premium Words",
                "No Ads",
                "Other Languages Available",
                "Plagiarism Free Guaranteed",
                "Fast Conversion"
              ]}
            />
          </div>

          <div className="flex items-start py-[10px] gap-[4px] w-[250px] sm:w-full">
            <input
              id="default-checkbox"
              type="checkbox"
              defaultChecked={isCheckPaymentRules}
              className="mt-1 cursor-pointer"
              onChange={(e) => {setIsCheckPaymentRules(e.target.checked)}}
            />
            <label
              htmlFor="default-checkbox"
              className="flex flex-col text-center sm:text-start text-[#FFF] text-base	font-light cursor-pointer">
                I acknowledge that due to the unpredictable nature of AI writing detectors, it is impossible to guarantee a 100% undetectable version. There is no guaranteed refund offered in the event that the undetectable version is not satisfactory. By checking this box, I understand and accept these terms and conditions.</label>
          </div>
        </div>
      </section>

      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </>
  );
};

export default Pricing;