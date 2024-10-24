import { useEffect, useState } from "react";

export default function Users() {
    // declare a state variable to hold the users
    const [users, setUsers] = useState([]);
    // useEffect with callback function and empty dependency array
    useEffect(() => {
        // fetch the users from the API to load data
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    );
}
