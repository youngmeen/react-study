import React, {useState} from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];
    const increase = () => {
        setNumber(number + 1)
        console.log('+1')
    }

    const decrease = () => {
        setNumber(number - 1)
        console.log('-1')
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}
export default Counter;