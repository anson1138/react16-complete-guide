import React from 'react';
import classes from './User.module.scss';

const UserOutput = (props) => {
    return (
        <div className={classes.User}>
        <p onClick={props.click}> I am {props.username} and {props.age} years old </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.username} />
       </div>
        );

}

export default UserOutput;
