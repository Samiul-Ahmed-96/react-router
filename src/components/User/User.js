import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const User = (props) => {
    const {name, email,phone,id} = props.user;
    const history  = useHistory();
    console.log(props.user)
    const handleBtn = () => {
        history.push(`/user/${id}`);
    }
    return (
        <div>
            <h2>{name}</h2>
            <small>{phone}</small>
            <p>{id}</p>
            <h4>{email}</h4>
            <Link to={`/user/${id}`}>User Details</Link>
            <br />
            <button onClick={handleBtn}>See Detail</button>
        </div>
    );
};

export default User;