import { useState } from "react";

export default function Team() {
    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: "2px solid purple",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        color: team > 10 ? "green" : team < 11 ? "red" : "gray",
    };

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={() => setTeam(team + 1)}>Increment</button>
            <button onClick={() => setTeam(team - 1)}>Decrement</button>
        </div>
    );
}