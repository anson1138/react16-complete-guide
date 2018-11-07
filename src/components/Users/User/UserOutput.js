import React, { Component } from 'react';
import classes from './User.module.scss';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import { AuthContext} from '../../../containers/App'

class UserOutput extends Component {
    constructor(props) {
        super(props);
        console.log('[UserOutput.js] Inside constructor', props);
        this.inputElement = React.createRef();

    }
    componentDidMount() {
        console.log('[UserOutput.js] Inside componentDidMount()')
        if (this.props.index === 0) {
            this.inputElement.current.focus()
        }
    }
    render() {
        return (
            <Aux>
            <AuthContext.Consumer>
            {auth => auth ? <p>I am authenticated</p> : null}
            </AuthContext.Consumer>
            <p onClick={this.props.click}> I am {this.props.username} and {this.props.age} years old </p>
            <p>{this.props.children}</p>
            <input
                ref={this.inputElement}
                index={this.props.index}
                type="text"
                onChange={this.props.changed}
                value={this.props.username} />
            </Aux>
        );
    }
}

UserOutput.propTypes = {
    click: PropTypes.func,
    username: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

}

export default withClass(UserOutput, classes.User);
