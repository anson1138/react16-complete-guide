import React from 'react';

import UserOutput from './User/UserOutput';

const users = (props) => props.persons.map((person, index) => {
    return <UserOutput
        click={() => props.clicked(index)}
        username={person.username}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)} />

    });

export default users;
