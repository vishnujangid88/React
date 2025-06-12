import React, { useState } from "react";

const CounterComp = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count Component = {count}</p>
            <h6>Number is {count % 2 === 0 ? "Even" : "Odd"}</h6>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default CounterComp;