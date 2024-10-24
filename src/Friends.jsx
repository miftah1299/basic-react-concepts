import { useState, useEffect } from "react";
import "./Friends.css";
import Friend from "./Friend";

export default function Friends() {
    // useState to hold data
    const [friends, setFriends] = useState([]);
    // useEffect with dependency array
    useEffect(() => {
        // fetch data from API
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            // set data to state
            .then((data) => setFriends(data));
    }, []);
    return (
        <div className="friends-box">
            <h3>Friends: {friends.length}</h3>

            {friends.map(friend => (
                <Friend key={friend.id} friend={friend}></Friend>
            ))}
        </div>
    );
}
