import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Hi React App, I'm Jack</h1>
        <Person name="Jack" age="25">
          My Hobbies: Sleeping
        </Person>
        <Person name="Rane" age="25" />
        <Person name="Will" age="27" />
      </div>
    );
  }
}

export default App;
