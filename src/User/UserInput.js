import React from 'react';
import './User.css'

const UserInput = (props) => {
   return (
    <div className="User">
       <input
           type="text"
           onChange={props.change}
           value={props.username} />
    </div>

   )

}

export default UserInput
