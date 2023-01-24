import React from "react";


const User = ({user}) => {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}

const UserList = () => {
    const users = [
        {
            id: 1,
            username: 'a',
            email: 'a@gmail.com'
        },
        {
            id: 2,
            username: 'b',
            email: 'b@gmail.com'
        },
        {
            id: 3,
            username: 'c',
            email: 'c@gmail.com'
        }
    ];

    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>{users[0].email}</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>{users[1].email}</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>{users[2].email}</span>
            </div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
            <div>
                {users.map((user, index) => (
                    <User key={index} user={user}/>
                ))}
            </div>
        </div>
    )
}

export default UserList;