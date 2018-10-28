import React from 'react';
import classes from './User.module.scss';

const UserOutput = (props) => {
    return (
        <div>
        <p onClick={props.click}
           className={classes.User} >
           My name is: {props.username}
       </p>
       </div>
        );

}

export default UserOutput;
