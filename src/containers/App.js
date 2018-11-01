import React, { Component } from 'react';
import classes from './App.module.scss';
import Cockpit from '../components/Cockpit/Cockpit'
import Users from '../components/Users/Users';
//import UserOutput from '../components/Users/User/UserOutput.js';

class App extends Component {
  state = {
    persons: [
      {
        username: "branden",
        age: 9,
        id: "1001"
      },
      {
        username: "joshua",
        age: 6,
        id: "1002"
      },
      {
        username: "cameron",
        age: 3,
        id: "1003"
      }

    ],
    showUsers: false
  }

  userHandler = () => {
    const doUsers = this.state.showUsers;
    this.setState({showUsers: !doUsers})
  }

  userInputHandler = (event, id) => {
    const userIndex = this.state.persons.findIndex( (p) => {
      return p["id"] === id;
    })

    const person = {...this.state.persons[userIndex]}
    person["username"] = event.target.value

    const persons = [...this.state.persons]
    persons[userIndex] = person

    this.setState({
      persons: persons
    })
  }

  deleteUser = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    console.log('hi delete', index, persons)
    this.setState({persons: persons})
  }

  render() {
    let users = null

    if (this.state.showUsers) {
      users = (
          <Users
            persons={this.state.persons}
            clicked={this.deleteUser}
            changed={this.userInputHandler}
           />
        )
    };

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle={this.props.title}
          showUsers={this.state.showUsers}
          persons={this.state.persons}
          clicked={this.userHandler} />

            {users}
      </div>
    );
  }
}

export default App;


          //<UserInput
          //  username={this.state["persons"][0]["username"]}
          //  change={this.userInputHandler}
          //  key={this.state["persons"][0]["id"]}
          ///>
