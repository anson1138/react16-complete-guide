import React, { Component } from 'react';
import classes from './App.module.scss';
import Cockpit from '../components/Cockpit/Cockpit'
import Users from '../components/Users/Users';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
//import UserOutput from '../components/Users/User/UserOutput.js';

export const AuthContext = React.createContext(false);

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
    showUsers: false,
    authenticated: false,
    toggleClicked: 0
  }

  userHandler = () => {
    const doUsers = this.state.showUsers;
    this.setState((prevState, props) => {
      return {
        showUsers: !doUsers,
        toggleClicked: prevState.toggleClicked +1

      }
    })
  }

  loginHandler = () => {
    this.setState({authenticated: true})
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
      <Aux>
        <Cockpit
          appTitle={this.props.title}
          showUsers={this.state.showUsers}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.userHandler} />
          <AuthContext.Provider value={this.state.authenticated}>
          {users}
          </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);


          //<UserInput
          //  username={this.state["persons"][0]["username"]}
          //  change={this.userInputHandler}
          //  key={this.state["persons"][0]["id"]}
          ///>
