export default function Friend(friend) {
    // console.log(friend);
    const { name, email } = friend.friend; // Destructuring

    return (
        <div className="friends-box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    );
}
