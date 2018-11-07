import React, { Component } from 'react';

import UserOutput from './User/UserOutput';

class Users extends Component {
    render() {
        return (
            this.props.persons.map((person, index) => {
                return <UserOutput
                    click={() => this.props.clicked(index)}
                    username={person.username}
                    index={index}
                    authenticated={this.props.isAuthenticated}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />
            })
        )
    }
}

export default Users;
