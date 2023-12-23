import React from "react";

export const ButtonUI = ({ className, title , type, onClick, svg="", disabled}) => {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {title}
            {svg && <img src={svg} alt={title}/>}
        </button>
    )
}