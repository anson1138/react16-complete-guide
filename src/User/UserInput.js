import React from 'react';
import './User.css'

const UserInput = (props) => {
   return (
    <div className="User">
       <input type="text" value={props.username} onChange={props.change} />
    </div>

   )

}

export default UserInput
