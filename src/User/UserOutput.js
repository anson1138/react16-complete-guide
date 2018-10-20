import React from 'react'
import './User.css'

const UserOutput = (props) => {
    return (
        <p className="User">{props.username}</p>
        );

}

export default UserOutput
