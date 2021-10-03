import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetail = () => {
    const [user,setUser] = useState({});
    const {userId} = useParams();
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))

    },[])
    return (
        <div>
            <h3>{user.name}</h3>
            <h3>{user.phone}</h3>

        </div>
    );
};

export default UserDetail;