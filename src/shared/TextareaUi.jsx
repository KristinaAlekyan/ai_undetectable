import React from 'react'

function TextareaUi({ className, icon, onClick, value=""}) {
  return (
    <div className='relative w-full'>
      <textarea className={`${className} w-full	min-h-[300px] rounded-[20px]`} value={value}></textarea>
      <img onClick={onClick} class="absolute bottom-[20px] right-[20px]" src={icon}></img>
    </div>
  )
}

export default TextareaUi
