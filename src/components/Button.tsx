import React from "react";

type ButtonType = {
    name: string
    callbackButton: () => void
    disabled: boolean
}
export const Button: React.FC<ButtonType> = ({
                                                 name,
                                                 callbackButton,
                                                 disabled
                                             }) => {

const onclickButtonHandler =()=>{
    callbackButton()
}
    return (
        <button onClick={onclickButtonHandler} disabled={disabled}>
            {name}
        </button>
    )
}