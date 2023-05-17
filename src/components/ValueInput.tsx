import React, {ChangeEvent} from "react";

type ValueInputType = {
    name: string
    value: number
    callbackInput: (inputTitle: number)=> void
}
export const ValueInput: React.FC<ValueInputType> = ({
                                                         name,
                                                         value,
                                                         callbackInput
                                                     }) => {
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        callbackInput(Number(e.currentTarget.value))
    }
    return (
        <div className={'value-input'}>
            <span>{name}</span>
            <input
                type="number"
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    )
}