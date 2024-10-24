import { useState } from "react";

export default function Counter() {
    // useState is a hook that allows you to have state variables in functional components
    // state variables preserve their values between renders
    const [count, setCount] = useState(0);

    const counterStyle = {
        border: "2px solid orange",
        padding: "10px",
        margin: "10px",
        color: count > 0 ? "green" : count < 0 ? "red" : "gray",
    };

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleSubtract = () => {
        setCount(count - 1);
    }

    return (
        <div style={counterStyle}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Increment</button>
            <button onClick={handleSubtract}>Decrement</button>
        </div>
    );
}
