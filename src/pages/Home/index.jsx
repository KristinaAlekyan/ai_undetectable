import React from "react"

import playIcon from "../../../src/assets/play.svg";
import robot_ilustration from "../../../src/assets/robot_mobile_ilustration.svg";
import { ButtonUi } from "../../shared/ButtonUi";

function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col items-center gap-[30px] px-9 py-[30px] lg:py-[60px] ">
        <div className="flex justify-center border-[1px] border-[#F0F1F9] items-center rounded-[20px] min-w-[300px] min-h-[160px] sm:min-w-[610px] sm:min-h-[300px] lg:min-w-[1000px] lg:min-h-[600px]">
          <img className="w-[49px] h-[49px] sm:w-[88px] sm:h-[88px] lg:w-[100px] lg:h-[100px]" src={playIcon} alt=""  />
        </div>
        <ButtonUi title="Blog" className="text-sm sm:text-xl text-[#F0F1F9] bg-[#5F6CB4] px-[58px] sm:px-[76px] rounded-[10px] lg:rounded-[20px]"/>
      </section>

      <section className="flex flex-col gap-[30px] items-center bg-[#F0F1F9] px-[21px] pt-[27px] pb-[46px] text-center text-[#3B457B]">
        <div className="text-xl	sm:text-[28px] font-medium text-[#3B457B]">100% Undetectable AI</div>
        <div className="">
          <div className="text-sm">AI Undetectable is a cutting-edge platform dedicated to helping students and professionls seamlessly integrate AI-generated content into their academic and professional projects. We offer tools and resources to transform AI-written essays into undetectable compositions that can bypass AI detectors, ensuring a seamless submission process. Our mission is to empower users to harness the power of AI-generated content, while maintaining discretion and successfully navigating the challanges posed by AI detection systems.</div>
          <div>
            <img className="hidden sm:flex w-[124px] h-[192px] " src={robot_ilustration} alt="robot ilustration"  />
          </div>
        </div>
      </section>

      <section className="">
        BB
      </section>
    </main>
  )
}

export default Home
