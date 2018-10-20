import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput.js';
import UserOutput from './User/UserOutput.js';

class App extends Component {
  state = {
    persons: [
      { username: "anson" },
      { username: "lilian" }
    ],
    shouldShowUser: false
  }

  userHandler = () => {
    const doUsers = this.state.shouldShowUser;
    this.setState({shouldShowUser: !doUsers})


  }

  userInputHandler = (event) => {
    this.setState({
      persons: [
        { username: "anson" },
        { username: event.target.value }
      ]
    })

  }

  render() {

    let users = null

    if (this.state.shouldShowUser) {
      users= (
          <div>
            <button style={style} onClick={this.userHandler}>Switch Button</button>
            <UserOutput username={this.state["persons"][0]["username"]} />
            <UserOutput username={this.state["persons"][1]["username"]} />
            <UserInput
              username={this.state["persons"][1]["username"]}
              change={this.userInputHandler} />
          </div>
      )
    };
    const style = {
      padding: '8px',
      border: '1x solid blue',
    }
    return (

      <div>
            <button style={style} onClick={this.userHandler}>Switch Button</button>
            {users}
      </div>

    );
  }
}

export default App;
