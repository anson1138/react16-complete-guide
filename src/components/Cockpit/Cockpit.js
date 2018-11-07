import React from 'react';
import classes from './Cockpit.module.scss';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';

const cockpit =(props) => {
    const assignedClasses = []
    let buttonStyle = classes.Button;
    if (props.showUsers) {
        buttonStyle = [classes.Button, classes.Button.Red].join(' ');
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }
    return (
        <Aux>
            <h1> Hi, I'm a React App and { props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working! </p>
            <button
                className={buttonStyle}
                onClick={props.clicked}>Toggle Users</button>
            <button onClick={props.login}>Login Button</button>
        </Aux>
        );
};

export default withClass(cockpit, classes.Cockpit)
