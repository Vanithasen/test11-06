import React from 'react';
import { useState } from 'react';


function Counter() {
    const [counter, setCounter] = useState(0);
    const [name,setName]=useState('jhon');
    const userNameChanged=(e)=>{
       
        setName(e.target.value);
        console.log(e.target.value);

    };

    const increment = () => {
        setCounter(counter + 1);
        //console.log(counter);
    };
    const decrement = () => {
        setCounter(counter - 1);
    };
    const reset = () => {
        setCounter(0);

    };
    return (
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h1>Counter Application</h1>
                <input placeholder='Enter your name' onChange={userNameChanged} />

            <h2>Count: {counter}</h2>
            <h1>{name}</h1>

            <button onClick={increment}>
                Increment
            </button>

            <button
                onClick={decrement}
                style={{ marginLeft: "10px" }}>
                Decrement
            </button>

            <button
                onClick={reset}
                style={{ marginLeft: "10px" }}
            >
                Reset
            </button>
        </div>
    );
}
export default Counter;
