import React from 'react'
import './User.css'

const UserOutput = (props) => {
    return (
        <div>
        <p onClick={props.click}
           className="User" >
           My name is: {props.username}
       </p>
       </div>
        );

}

export default UserOutput
