import React, { useLayoutEffect, useRef } from "react"
import { Link } from "react-router-dom";
import home_ilustration from "../../assets/home_ilustration.png";
import logoIcon from "../../assets/logo.svg";
import { useSelector } from "react-redux";
import robot_ilustration from "../../../src/assets/robot_mobile_ilustration.svg";
import { ButtonUI } from "../../shared/ButtonUI";
import DropdownUI from "../../shared/DropdownUI";
import ContainerUI from "../../shared/ContainerUI";
import PriceUI from "../../shared/PriceUI";
import { useNavigate } from "react-router-dom";
import { setStorageItemHandler } from "../../helpers"
import postData from "../Posts/data";

function Home() {
  const faqRef = useRef();
  const blogRef = useRef();
  const userState = useSelector(state=>state.loginUser)

  const navigate = useNavigate();

  const priceNavigateHandler = () => navigate("/pricing");

  useLayoutEffect(() => {
    const faqScrolling = sessionStorage.getItem("faq");
    const blogScrolling = sessionStorage.getItem("blog");

    if (faqScrolling) {
      faqRef.current.scrollIntoView();
      sessionStorage.removeItem("faq");
    }
    if (blogScrolling) {
      blogRef.current.scrollIntoView();
      sessionStorage.removeItem("blog");
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <section className="flex flex-col items-center gap-[30px] w-full mx-auto ">
        <div className="flex flex-col justify-center items-center w-full pb-[30px]">
          <div className="flex justify-center py-[30px]">
            <img src={logoIcon} alt="logo" className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] " />
          </div>

          <div className="bg-[#3B457B] flex flex-col gap-2 sm:gap-[20px] lg:gap-[30px] px-[30px] items-center text-[#FFF] text-center mx-auto w-full ">
            <h1 className="text-sm sm:leading-10 sm:text-[28px] lg:text-[40px] font-medium ">Embrace the future of AI Excellence</h1>
            <p className="text-xs sm:text-base lg:text-2xl sm:max-w-[80%] ">A cutting-edge platform dedicated to helping students and professionals seamlessly integrate AI-generated content into their academic and professional projects.</p>
            {( userState?.user) ?
          <Link to="/ai-undetectable">
            <ButtonUI title="Get Started" className="flex text-xs sm:text-base text-[#3B457B] bg-[#A4ABD9] rounded-[10px] px-5 sm:px-10 py-1 sm:py-2" />
          </Link>
          :
          <Link to="/signup">
            <ButtonUI title="Get Started" className="text-xl text-[#3B457B] bg-[#A4ABD9] rounded-[20px] px-[47px] py-[7px]" />
          </Link>
        }
          </div>
          <div className="flex justify-center py-[30px] ">
            <img src={home_ilustration} alt="home" className="rounded-[12px] min-w-[250px] max-w-[90%] sm:min-w-[615px] sm:max-w-[90%] lg:w-[953px] lg:h-[478px]" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[30px] px-[30px] sm:px-[60px] lg:px-[120px]  lg:items-center lg:justify-center sm:items-start bg-[#F0F1F9] w-full pt-[27px] pb-[46px] text-center text-[#3B457B]">
        <div className="flex flex-col items-center sm:flex-row lg:flex-row-reverse gap-[30px] lg:gap-[60px]">
          <div className="flex flex-col gap-[30px] lg:max-w-[60%]">
            <div className="text-xl	sm:text-[28px] text-center sm:text-left lg:text-[32px] font-medium text-[#3B457B]">100% Undetectable AI</div>
            <div className="text-sm sm:text-xl text-center sm:text-left	">AI Undetectable is a cutting-edge platform dedicated to helping students and professionls seamlessly integrate AI-generated content into their academic and professional projects. We offer tools and resources to transform AI-written essays into undetectable compositions that can bypass AI detectors, ensuring a seamless submission process. Our mission is to empower users to harness the power of AI-generated content, while maintaining discretion and successfully navigating the challanges posed by AI detection systems.</div>
          </div>
          <div className="flex justify-center lg:px-[130px] lg:py-[30px] lg:border-[#FOF1F9] lg:border-[1px] lg:rounded-[20px]">
            <img className="min-w-[124px] lg:min-w-[210px]" src={robot_ilustration} alt="robot ilustration" />
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="flex flex-col px-5 py-[60px] sm:px-[20px] gap-[20px]">
        <div className="flex flex-col items-center gap-[20px] text-center">
          <h1 className="text-[#F0F1F9] text-xl sm:text-[28px] mb-6 lg:text-[32px] font-medium ">
            Unlock Undetectable Unlimited
          </h1>
        </div>
        <div className="flex flex-col items-center gap-[20px]">
          <div className="flex flex-col sm:flex-row gap-[20px] lg:gap-[60px]">
            <PriceUI
              about="Regular"
              title="Regular Words"
              price={5.99}
              isExpandable={true}
              priceNavigateHandler={priceNavigateHandler}
              buttonActions={priceNavigateHandler}
              contentArr={[
                "10K Words",
                "ByPass AI Detectors",
                "No Ads",
                "Super Fast Conversion.",
              ]}
            />
            <PriceUI
              about="Premium"
              title="Premium Words"
              price={9.99}
              isExpandable={true}
              priceNavigateHandler={priceNavigateHandler}
              buttonActions={priceNavigateHandler}
              contentArr={[
                "10К Premium Words",
                "ByPass AI Detectors",
                "No Ads",
                "Fast Conversion",
                "Languages"
              ]}
            />
            <PriceUI
              about="Professional"
              title="Bundle Words"
              price={19.99}
              isExpandable={true}
              priceNavigateHandler={priceNavigateHandler}
              buttonActions={priceNavigateHandler}
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
        </div>
      </section>

      {/* FAQ section */}
      <section id="faq" ref={faqRef} className="flex flex-col justify-between px-[30px] sm:px-[60px] lg:px-[120px] sm:flex-row bg-[#F0F1F9] w-full sm:py-[60px] py-[40px] gap-[30px] sm:gap-[20px] lg:gap-[100px]">
          <div className="flex flex-col justify-center gap-[20px]">
            <h1 className="text-[#3B457B] text-xl sm:text-2xl lg:text-[32px] font-medium text-center">Frequently Asked Questions</h1>
            <p className="text-[#3B457B] text-sm sm:text-xl m-[5px] text-center">Need more insights? We got you covered with some of the most asked questions</p>
            <Link onClick={setStorageItemHandler("support")} to="/about" className="mx-auto">
              <ButtonUI title="Ask a Question" className="bg-[#5F6CB4] rounded-[10px] lg:rounded-[20px] px-[20px] lg:px-[50px] p-[10px] text-[#FFFF]" />
            </Link>
          </div>
        
        <div className="flex flex-col items-center gap-[15px] sm:gap-p[25px] lg:gap-[30px] sm:py-0">
          <DropdownUI
            isWide={true}
            title="Does AI Undetectable have a Free Trial?"
            answer="Yes, AI Undetectable offers 250 free words upon signing up."
          />
          <DropdownUI
            isWide={true}
            title="Is the Content Plagiarism Free?"
            answer="Yes, all content rewritten is completely original."
          />
          <DropdownUI
            isWide={true}
            title="Can AI Humanize Other Languages?"
            answer="Yes, our premium words can be used to convert from other languages listed in the dropdown."
          />
        </div>
      </section>

      {/* Blog section */}
      <section ref={blogRef} className="flex flex-col items-center py-[27px] px-[30px] sm:px-[60px] lg:px-[120px] sm:py-[60px] gap-[30px] w-full ">
        <h1 className="text-xl sm:text-2xl lg:text-[32px] font-medium text-[#F0F1F9]">Recent posts</h1>
        <div className="flex flex-col items-start rounded-[10px] lg:rounded-[20px] bg-[#F0F1F9] gap-[14px] py-[10px] px-[15px]">
          {
            postData.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`posts/${item.id}`}>
                    <ContainerUI
                      imgUrl={`/post_${item.id}.png`}
                      title={item.title}
                      description={item.description}
                    />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Home
