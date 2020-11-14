import React, { Component } from "react";
import TreeGUI from "./TreeGUI.jsx";
import TreeTex from "./TreeTex.jsx";
import tree from "./tree.js";
import "./TreeInterface.css";

class TreeInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {treeData: tree("S")}
  }

  addChild = (ancestor, newName, newPosition) => {
    this.setState(prevState => ({
      treeData: prevState.treeData.addChild(ancestor, newName, newPosition)
    }));
  };

  removeChild = (node) => {
    this.setState(prevState => ({
      treeData: prevState.treeData.removeChild(node),
    }));
  }

  editName = (node) => {
    const newName = prompt("New name?");
    if (typeof(newName) == "string") {
      this.setState(prevState => ({
        treeData: prevState.treeData.editName(node, newName),
      }));
    }
  }

  render() {
    return (
      <div className="tree-interface">
        <TreeGUI
          treeData={this.state.treeData}
          addChild={this.addChild}
          removeChild={this.removeChild}
          editName={this.editName}
        />
        <TreeTex treeData={this.state.treeData} texFormatting={this.props.texFormatting}/>
      </div>
    )
  }
}

export default TreeInterface;
