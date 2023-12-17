import CustomOptions from "./Options";
import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutSide";

const CustomSelect = ({ selectOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const dropdownRef = useClickOutside(closeDropdown);
  return <>
    <div>
      <button className='text-[#3B457B] text-sm font-medium p-[10px] rounded-[10px] bg-[#F0F1F9]'
        onClick={toggleDropdown}>Humanize</button>
      {isOpen && (
        <div ref={dropdownRef} className="bg-[#F0F1F9] p-2 rounded-[10px]">
          {selectOptions.map((item) => {
            return(
              <div key={`${item.id} 'id'`}>
                <CustomOptions  id={item.id} options={item.options} />
                <br/>
              </div>
            )
          })}
        </div>
      )}
    </div>
  </>
}

export default CustomSelect