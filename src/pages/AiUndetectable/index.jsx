import React from "react"
import { ButtonUi } from "../../shared/ButtonUi"
import TextareaUi from "../../shared/TextareaUi"
import copyIcon from "../../assets/copy.svg"
import deleteIcon from "../../assets/delete.svg"

function AiUndetectable() {
  return (
    <main>
      <section className="px-[40px] p-[30px]">
        <div className="flex flex-col justify-center items-center px-[25px] gap-[30px]">
          <p className="border-[1px] border-[#F0F1F9] text-sm font-lights text-[#FFF] p-[10px] rounded-[10px]">Regular words remaining: 0</p>
          <div className="flex items-center rounded-[10px] border-[1px] border-[#F0F1F9] gap-[35px] px-[10px] py-[5px]">
            <p className="text-sm text-[#FFFFFF] font-light">Language</p>
            <select name="lang" id="lang" className="rounded-[10px] bg-[#F0F1F9] border-none px-[39px] py-[5px] text-[#3B457B]">
              <option value="English">English</option>
              <option value="Portuguese">Portuguese</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col items-center pt-[30px] gap-[30px]">
          <ButtonUi type="button" title="Purchase Words" className="bg-[#F0F1F9] text-[#3B457B] py-[10px] rounded-[10px] w-[195px]"/>
          <div className="text-[#3B457B] text-base	p-[10px] rounded-[10px] bg-[#F0F1F9]">
            Humanize
          </div>
          <div className="text-[#3B457B] text-sm font-medium p-[10px] rounded-[10px] bg-[#F0F1F9]">
            Premium word remaining: 0
          </div>
        </div>

        <div className="flex flex-col items-center gap-[15px] py-[30px]">
          <h1 className="flex justify-center text-[#FFF] text-2xl font-medium">Your Essay</h1>
          <TextareaUi className="p-[20px] " icon={deleteIcon}/>
          <div className="flex items-center gap-[10px]  ">
            <ButtonUi title="Submit" className="bg-[#A4ABD9] px-[44px] py-[10px] justify-center text-[#F0F1F9] text-sm rounded-[20px]"/>
            <p className="text-[#FFF]">Word count: 0</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[15px] w-full	min-h-[300px] py-[30px]">
          <h1 className="flex justify-center text-[#FFF] text-2xl font-medium">Undetectable Version</h1>
          <TextareaUi className="p-[20px] " icon={copyIcon}/>
          <div className="flex items-center ">
            <p className="text-[#FFF]">Word count: 0</p>
          </div>
        </div>

        <div class="flex items-center justify-center px-[40px] py-[10px] rounded-[20px] border-[1px] border-[#F0F1F9] gap-[7px]">
          <input id="default-checkbox" type="checkbox" value="" class="focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          <label for="default-checkbox" class="text-[#FFF] text-xl	font-light text-gray-900 dark:text-gray-300">Enable Premium</label>
        </div>
      </section>
    </main>
  )
}

export default AiUndetectable
