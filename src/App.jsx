import React, { Component } from "react";
import "./App.css";
import TreeInterface from "./TreeInterface/TreeInterface.jsx";
import NavBar from "./NavBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texFormatting: ({
        treeDeclaration: "\\Tree",
        nodeStartStr: ".{",
        nodeEndStr: "}",
        indentStr: "    ",
        childrenStartStr: "[",
        childrenEndStr: "]"
      })
    }
  }

  editTexFormatting = (str, value) => {
    this.setState(prevState => ({
      texFormatting: {...prevState.texFormatting, [str]: value}
    }));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <TreeInterface texFormatting={this.state.texFormatting} />
      </div>
    );
  }
}

export default App;
