import React, { Component } from 'react';
import classes from './App.module.scss';
import UserInput from './User/UserInput.js';
import UserOutput from './User/UserOutput.js';

class App extends Component {
  state = {
    persons: [
      {
        username: "anson",
        id: "skdjfk33"
      },
      {
        username: "lilian",
        id: "skdjfkj"
      }

    ],
    shouldShowUser: false
  }

  userHandler = () => {
    const doUsers = this.state.shouldShowUser;
    this.setState({shouldShowUser: !doUsers})
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
    let buttonStyle = ''

    if (this.state.shouldShowUser) {
      users = (
        <div>
          {
            this.state.persons.map((person, index) => {
            return  (<UserOutput
              username={person["username"]}
              click={() => { this.deleteUser(index)}}
              key={person["id"]}
              />
              )
            })
          }
          {
            this.state.persons.map(person => {
              return (
                 <UserInput
                   change={(event) => {this.userInputHandler(event, person["id"])}}
                   username={person["username"]}
                   key={person["id"]}
                 />
                )
            })
          }
        </div>
        )

      buttonStyle = classes.Red

    };

    const dynamic_classes = [];

    if (this.state.persons.length <= 2) {
      dynamic_classes.push(classes.red)
    }

    if (this.state.persons.length <= 1) {
      dynamic_classes.push(classes.bold)
    }

    return (
      <div className={classes.App}>
            <p className={dynamic_classes.join(' ')}>This is really working! </p>
            <button className={buttonStyle} onClick={this.userHandler}>Switch Button</button>
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
