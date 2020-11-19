import React, {Component} from "react";
import TreeGUI from "./TreeGUI.jsx";
import TreeTex from "./TreeTex.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedoAlt} from "@fortawesome/free-solid-svg-icons";
import tree from "./tree.js";
import "./TreeInterface.css";

class TreeInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {treeData: tree("Root")};
  }

  addChild = (ancestor, newName, newPosition) => {
    this.setState((prevState) => ({
      treeData: prevState.treeData.addChild(ancestor, newName, newPosition),
    }));
  };

  removeChild = (node) => {
    this.setState((prevState) => ({
      treeData: prevState.treeData.removeChild(node),
    }));
  };

  editName = (node, newName) => {
    if (typeof newName == "string") {
      this.setState((prevState) => ({
        treeData: prevState.treeData.editName(node, newName),
      }));
    }
  };

  reset = () => {
    this.setState({treeData: tree("Root")});
  };

  render() {
    return (
      <div className="tree-interface">
        <button className="reset-button" type="button" onClick={this.reset}>
          <FontAwesomeIcon className="fa-icon" icon={faRedoAlt} />
        </button>
        <TreeGUI
          treeData={this.state.treeData}
          addChild={this.addChild}
          removeChild={this.removeChild}
          editName={this.editName}
        />
        <TreeTex
          treeData={this.state.treeData}
          texFormatting={this.props.texFormatting}
        />
      </div>
    );
  }
}

export default TreeInterface;
