import React, { Component } from "react";
import "./App.css";
import TreeInterface from "./TreeInterface/TreeInterface.jsx";
import NavBar from "./NavBar.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TreeInterface />
      </div>
    );
  }
}

export default App;
