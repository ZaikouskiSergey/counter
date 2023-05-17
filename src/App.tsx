import React, {useState} from 'react';
import './App.css';
import {Display1} from "./components/Display1";
import {Display2} from "./components/Display2";

function App() {
    const [valueMax, setValueMax]=useState<number>(0)
    const [valueStart, setValueStart]=useState<number>(0)

    return (
        <div className="App">
            <Display1
                valueMax={valueMax}
                setValueMax={setValueMax}
                valueStart={valueStart}
                setValueStart={setValueStart}
            />
            <Display2/>
        </div>
    );
}
export default App;
