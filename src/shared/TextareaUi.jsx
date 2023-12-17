import React from 'react'

function TextareaUi({ className, icon, onChange, value=""}) {
  return (
    <div className='relative w-full'>
      <textarea className={`${className} w-full	min-h-[300px] rounded-[20px] resize-none outline-0`} value={value} onChange={onChange}/>
      <img className="absolute bottom-[20px] right-[20px]" src={icon} alt=""></img>
    </div>
  )
}

export default TextareaUi
