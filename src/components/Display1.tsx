import React from "react";
import {ValueInput} from "./ValueInput";
import {Button} from "./Button";


type Display1Type = {
    valueMax: number
    setValueMax: (valueMax: number) => void
    valueStart: number
    setValueStart: (valueStart: number) => void
}
export const Display1: React.FC<Display1Type> = ({valueMax,
                                                 setValueMax,
                                                 valueStart,
                                                 setValueStart}
) => {


    return (
        <div className={"windows"}>
            <div className={'big-window'}>
                <ValueInput
                    name={"max value:"}
                    value={valueMax}
                    callbackInput={setValueMax}
                />
                <ValueInput
                    name={'start value:'}
                    value={valueStart}
                    callbackInput={setValueStart}
                />
            </div>
            <div className={'small-window'}>
                <Button
                    name={'set'}
                    callbackButton={() => {
                    }}
                    disabled={true}
                />
            </div>
        </div>
    )
}