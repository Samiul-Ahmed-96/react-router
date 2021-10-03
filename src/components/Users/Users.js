import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data=> setUsers(data))
    },[])
    return (
        <div>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    );
};

export default Users;