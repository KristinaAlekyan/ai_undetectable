import React, {useState} from "react"

import { ButtonUi } from "../../shared/ButtonUi";
import TextareaUi from "../../shared/TextareaUi";
import copyIcon from "../../assets/copy.svg";
import deleteIcon from "../../assets/delete.svg";
import logoIcon from "../../assets/logo.svg";
import downIcon from "../../assets/down.svg";
import CustomSelect from "../../shared/CustomSelectUI";

const selectOptions = [{ id: 1, options: ["Humanize", "Improve Writing Quality"] }, { id: 2, options: ["High School Level", "Undergraduate Level", "PhD Level"]}, { id: 3, options: ["Increase Word Count", "Decrease Word Count"]  }]

function AiUndetectable() {
  const [text, setText] = useState("")
  const [aidata, setAidata] = useState("Text from AI")
  
  const onChange = (e)=>{
    setText(e.target.value)
  }
  return (
    <main>
      <section className="flex flex-col px-[40px] py-[30px] sm:px-[85px] gap-[30px]">
        <div className="flex justify-center lg:order-first">
          <img src={logoIcon} alt="logo" />
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-[25px]sm:px-0 gap-[30px]">
          <p className="border-[1px] border-[#F0F1F9] text-sm font-light text-[#FFF] p-[10px] rounded-[10px]">Regular words remaining: 0</p>
          <div className="flex items-center rounded-[10px] border-[1px] border-[#F0F1F9] gap-[25px] px-[10px] py-[5px] relative">
            <p className="text-sm text-[#FFFFFF] font-light">Language</p>
            <select name="lang" id="lang" className="rounded-[10px] bg-[#F0F1F9] border-none px-[39px] py-[5px] text-[#3B457B] appearance-none ">
              <option value="English" className="focus:bg-[#000] text-green">English</option>
              <option value="Portuguese">Portuguese</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
            <img src={downIcon} width="14px" height="10px" alt="down" className="absolute bottom-[15px] right-[55px]" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-center lg:justify-between	sm:flex-row  gap-[30px] items-center lg:order-first">
          <ButtonUi type="button" title="Purchase Words" className="bg-[#F0F1F9] text-[#3B457B] px-[43px] py-[10px] rounded-[10px] " />

          <div className="text-[#3B457B] text-sm font-medium p-[10px] rounded-[10px] bg-[#F0F1F9]">
            Premium word remaining: 0
          </div>
          <CustomSelect selectOptions={selectOptions} />
        </div>

        <div className="flex flex-col lg:flex-row items-center py-[30px] gap-[60px]">
          <div className="flex flex-col items-center gap-[15px] w-full ">
            <h1 className="flex justify-center text-[#FFF] text-2xl font-medium">Your Essay</h1>
            <TextareaUi className="p-[20px]" icon={deleteIcon} onChange={(e)=>onChange(e)} value={text}/>
            <div className="flex items-center gap-[10px]  ">
              <ButtonUi title="Submit" className="bg-[#A4ABD9] px-[44px] py-[10px] justify-center text-[#F0F1F9] text-sm rounded-[20px]" />
              <p className="text-[#FFF]">Word count: 0</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[15px] w-full ">
            <h1 className="flex justify-center text-[#FFF] text-2xl font-medium">Undetectable Version</h1>
            <TextareaUi className="p-[20px] " icon={copyIcon} value={aidata} onChange={(e)=>console.log(e)} />
            <div className="flex items-center">
              <p className="text-[#FFF] py-[7px]">Word count: 0</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="flex px-[40px] py-[10px] rounded-[20px] border-[1px] border-[#F0F1F9] gap-[7px]">
            <input id="default-checkbox" type="checkbox" value="" className="focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="default-checkbox" className="text-[#FFF] text-xl	font-light text-gray-900 dark:text-gray-300">Enable Premium</label>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AiUndetectable
