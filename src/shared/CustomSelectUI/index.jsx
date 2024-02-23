import { useState } from "react";

import CustomOptions from "./Options";
import { useClickOutside } from "../../hooks/useClickOutSide";
import downIcon from "../../assets/down.svg";
import upIcon from "../../assets/up_1.svg";

const CustomSelect = ({ selectOptions, withObjectOptions = false, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(true);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const { ref: dropdownRef, labelRef } = useClickOutside(closeDropdown);
  return (
    <>
      <div className="relative">
        <button ref={labelRef} className='flex items-center gap-[15px] text-[#3B457B] text-sm font-medium py-[10px] rounded-[10px] bg-[#F0F1F9] pl-[37px] pr-[45px] '
          onClick={toggleDropdown}>
          <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)} />
          <p className="pointer-events-none">Humanize </p>
          <img src={isOpen ? upIcon : downIcon} alt="down" className="pointer-events-none absolute right-[20px] top-4" width="18px" height="12px" />
        </button>

        {isOpen && (
          <div ref={dropdownRef} className="mt-1 bg-[#F0F1F9] p-2 min-w-[250px] rounded-[10px] absolute right-0 z-20">
            {
              selectOptions.map((item) => {
                return (
                  <div key={`${item.id} 'id'`}>
                    <CustomOptions withObjectOptions={withObjectOptions} id={item.id} options={item.options} handleChange={handleSelect} />
                    <br/>
                  </div>
                )
              })
            }
          </div>
        )}
      </div>
    </>
  )
}

export default CustomSelect