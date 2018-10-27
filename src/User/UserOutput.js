import React from 'react';
import Radium from 'radium';
import './User.css';

const UserOutput = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div>
        <p onClick={props.click}
           className="User"
           style={style} >
           My name is: {props.username}
       </p>
       </div>
        );

}

export default Radium(UserOutput);
