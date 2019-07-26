import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Jack", age: 25 },
      { name: "Rane", age: 25 },
      { name: "Will", age: 27 }
    ]
  };

  switchNameHandler = () => {
    // console.log("was clicked");
    // DONT DO THIS this.state.persons[0].name = "Jackkkkkk";
    this.setState({
      persons: [
        { name: "Jackkkkk", age: 25 },
        { name: "Raneeeee", age: 25 },
        { name: "Willllll", age: 27 }
      ]
    });
  };

  render() {
    return ( 
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Hi React App, I'm Jack</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
