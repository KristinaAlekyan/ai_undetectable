import React from "react";

export const ButtonUi = ({ className, title , type}) => {
    return (
        <button type={type} className={`${className && className} `}>
            {title}
        </button>
    )
}