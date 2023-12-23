import PriceUI from "../../shared/PriceUI";

const Pricing = () => {
  return (
    <main>
      <section className="flex flex-col px-5 py-[30px] sm:px-[70px] lg:px-[120px] gap-[30px]">
        <div className="flex flex-col items-center gap-[30px] text-center">
          <h1 className="text-[#F0F1F9] text-xl sm:text-[28px] lg:text-[32px] font-medium ">
            Unlock Undetectable Unlimited
          </h1>
          <p className="text-[#FFF] text-sm font-medium">
            All users immediately get 250 free words upon signing up. For those
            who need more access, we offer a cost-effective, one-time purchase
            option to acquire additional words as needed. Rest assured, there
            are no subscriptions or hidden fees involved. We invite you to read
            genuine reviews of my website on Trustpilot for added assurance. For
            any inquiries or concerns, please don't hesitate to reach out to me
            at premium@aiundetectable.com. Premium words offers a more smooth,
            naturally written, and more human version of the essay, with a
            higher degree of undetectability. Premium words can also be used to
            humanize essays in other languages.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <p className="text-base text-[#F0F1F9] font-medium">
            One-Time Purchase!
          </p>
          <div className="flex flex-col sm:flex-row gap-[30px]">
            <PriceUI
              about="Regular"
              title="Regular Words"
              price="5.99"
              contentArr={[
                "10K Words",
                "No Ads",
                "ByPass AI Detectors",
                "Super Fast Conversion.",
              ]}
            />
            <PriceUI
              about="Premium"
              title="Preium Words"
              price="9,99"
              contentArr={[
                "10К Premium Words",
                "No Ads",
                "ByPass AI Detectors",
                "Fast Conversion",
                "Languages"
              ]}
            />
            <PriceUI
              about="Professional"
              title="Bundle Words"
              price="19,99"
              contentArr={[
                "50K Regular Words",
                "25K Premium Words",
                "No Ads",
                "Other Languages Available",
                "ByPass AI Detectors",
                "Plagiarism Free Guaranteed",
                "Fast Conversion"
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;