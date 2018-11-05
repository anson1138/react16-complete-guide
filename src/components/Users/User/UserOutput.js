import React, { Component } from 'react';
import classes from './User.module.scss';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class UserOutput extends Component {
    render() {
        return (
            <Aux>
            <p onClick={this.props.click}> I am {this.props.username} and {this.props.age} years old </p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.username} />
            </Aux>
        );
    }
}

export default withClass(UserOutput, classes.User);
