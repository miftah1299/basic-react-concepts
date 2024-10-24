import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
    function handleClick() {
        alert("Button Clicked");
    }
    const handleClick2 = () => {
        alert("2nd Button Clicked");
    };

    return (
        // React Fragment
        <>
            <h3>React Core Concepts 2</h3>

            <Users></Users>
            <Friends></Friends>
            <Counter></Counter>
            <Team></Team>

            {/* <button onClick="handleClick()">Click Me</button> */}
            <button onClick={handleClick}>Button</button>
            <button onClick={handleClick2}>Button-2</button>
            <button
                onClick={() => {
                    alert("3rd Button clicked");
                }}
            >
                Button-3
            </button>
        </>
    );
}

export default App;
