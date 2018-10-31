import React from 'react';
import classes from './User.module.scss';

const UserInput = (props) => {
   return (
    <div className={classes.User}>
       <input
           type="text"
           onChange={props.change}
           value={props.username} />
    </div>

   )

}

export default UserInput;
