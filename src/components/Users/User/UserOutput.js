import React, { Component } from 'react';
import classes from './User.module.scss';

class UserOutput extends Component {
    render() {
        return (
            <div className={classes.User}>
            <p onClick={this.props.click}> I am {this.props.username} and {this.props.age} years old </p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.username} />
            </div>
        );
    }
}

export default UserOutput;
