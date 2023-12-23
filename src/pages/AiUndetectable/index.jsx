import React, {useEffect, useState} from "react"

import { ButtonUI } from "../../shared/ButtonUI";
import TextareaUI from "../../shared/TextareaUI";
import copyIcon from "../../assets/copy.svg";
import deleteIcon from "../../assets/delete.svg";
import logoIcon from "../../assets/logo.svg";
import downIcon from "../../assets/down.svg";
import CustomSelect from "../../shared/CustomSelectUI";
import { useDispatch } from "react-redux";
import { fetchUserById } from "../../redux/aiUndetectetableSlice";

const selectOptions = [
  { 
    id: 1, 
    options: [
      {
        value: "Humanize",
        field: "humanize",
      },
      {
        value: "Improve Writing Quality",
        field: "improveWritingQuality",
      },
    ]
  }, 
  { 
    id: 2, 
    options: [
      {
        value: "High School Level",
        field: "highSchoolLevel",
      },
      {
        value: "Undergraduate Level",
        field: "undergraduateLevel",
      },
      {
        value: "PhD Level",
        field: "phdLevel",
      },
    ]
  }, 
  { 
    id: 3, 
    options: [
      {
        value: "Increase Word Count",
        field: "increaseWordCount",
      },
      {
        value: "Decrease Word Count",
        field: "decreaseWordCount",
      },
    ]
  }
];

function AiUndetectable() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState("");
  const [aidata, setAidata] = useState("")
  const [stateSelect, setStateSelect]=useState({
    humanize: false,
    improveWritingQuality: false,
    highSchoolLevel: false,
    undergraduateLevel: false,
    phdLevel: false,
    increaseWordCount: false,
    decreaseWordCount: false
  })
  const [submitData, setSubmitData]=useState(null)

  const onChange = (e) => setText(e.target.value);

  const handleSelect = (e)=>{
    const { checked, id } = e.target;

    if(checked){
      setStateSelect((prevState)=>{
        return {
          ...prevState,
          [id]: checked
        }
      })
    }
  }

  const handleDelete = () => setText("");

  const handleCopy = () => navigator.clipboard.writeText(aidata);

  const handleSubmit = () => {
    setDisabled(true);
    setSubmitData((prevState) => ({
      ...prevState,
      text,
      options: stateSelect
    }));
  }

  useEffect(() => {
    if (submitData) Promise.resolve(dispatch(fetchUserById(submitData))).finally(() => setDisabled(false));
  },[submitData])
  
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
          <ButtonUI type="button" title="Purchase Words" className="bg-[#F0F1F9] text-[#3B457B] px-[43px] py-[10px] rounded-[10px] " />

          <div className="text-[#3B457B] text-sm font-medium p-[10px] rounded-[10px] bg-[#F0F1F9]">
            Premium word remaining: 0
          </div>
          <CustomSelect selectOptions={selectOptions} withObjectOptions={true} handleSelect={handleSelect}/>
        </div>

        <div className="flex flex-col lg:flex-row items-center py-[30px] gap-[60px]">
          <div className="flex flex-col items-center gap-[15px] w-full ">
            <h1 className="flex justify-center text-[#FFF] text-2xl font-medium">Your Essay</h1>
            <TextareaUI onClick={handleDelete} className="p-[20px]" icon={deleteIcon} onChange={onChange} value={text}/>
            <div className="flex items-center gap-[10px]  ">
              <ButtonUI 
                title="Submit" 
                className={`${disabled || !text.trim() ? "bg-[#A4ABD9]" : "bg-[#3B457B]"} border px-[44px] py-[10px] justify-center text-[#F0F1F9] text-sm rounded-[20px]`} 
                onClick={handleSubmit}
                disabled={disabled || !text.trim()}
              />
              <p className="text-[#FFF]">Word count: 0</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[15px] w-full ">
            <h1 className="flex justify-center text-[#FFF] text-2xl font-medium">Undetectable Version</h1>

            <TextareaUI 
              onClick={handleCopy} 
              className="p-[20px]" 
              icon={copyIcon} 
              placeholder="Text from AI" 
              disabled={true} 
              value={aidata} 
              onChange={() => null} 
            />

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
