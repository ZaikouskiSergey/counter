import React, { useState} from "react";
import {Button} from "./Button";



export const Display2 = () => {
    const [visibleValue, setVisibleValue] = useState<number>(0)


    const incOnClickButtonHandler=()=> {
        setVisibleValue(visibleValue+1)
    }
    const resetOnClickButtonHandler=()=> {
        setVisibleValue(0)
    }



    return (
        <div className={"windows"}>
            <div className={'big-window'}>
                <input
                    type="text"
                    value={visibleValue}
                />
            </div>
            <div className={'small-window'}>
                <Button
                    name={"inc"}
                    callbackButton={incOnClickButtonHandler}
                    disabled={false}
                />
                <Button
                    name={"reset"}
                    callbackButton={resetOnClickButtonHandler}
                    disabled={true}
                />
            </div>
        </div>
    )
}