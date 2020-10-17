import React, { Component } from "react";
import tree from "./tree.js";
import Node from "./Node";
import "./TreeGUI.css";
//4 layers article:
// https://hackernoon.com/architecting-single-page-applications-b842ea633c2e

const NodeContainer = props => {
  const descendents = props.node.children.map(ch => (
    <NodeContainer
      key={ch.name}
      node={ch}
      addChild={props.addChild}
      removeChild={props.removeChild}
      editName={props.editName}
    />
  ));

  return (
    <div className="node-container">
      <Node {...props} />
      <div className="node-row">{descendents}</div>
    </div>
  );
};

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: tree("S"),
      traverse: "",
      strFormatting: ({
        nodeStartStr: ".{",
        nodeEndStr: "}",
        indentStr: "    ",
        childrenStartStr: "[",
        childrenEndStr: "]"
      })
    };
  }

  addChild = (ancestor, newName, newPosition) => {
    this.setState(prevState => ({
      treeData: prevState.treeData.addChild(ancestor, newName, newPosition),
      traverse: this.state.treeData.dfTraverseTex(undefined, undefined, this.state.strFormatting)
    }));
  };

  removeChild = (node) => {
    this.setState(prevState => ({
      treeData: prevState.treeData.removeChild(node),
      traverse: this.state.treeData.dfTraverseTex(undefined, undefined, this.state.strFormatting)
    }));
  }

  editName = (node) => {
    const newName = prompt("New name?");
    this.setState(({ treeData }) => ({
      treeData: treeData.editName(node, newName),
      traverse: this.state.treeData.dfTraverseTex(undefined, undefined, this.strFormatting)
    }));
  }

  render() {
    return (
      <div className="tree-container">
        <NodeContainer
          key={this.state.treeData.root.id}
          node={this.state.treeData.root}
          addChild={this.addChild}
          removeChild={this.removeChild}
          editName={this.editName}
        />
        <div align="left">
          <pre>
            <code>{this.state.traverse}</code>
          </pre>
        </div>
      </div>
    );
  }
}

class TreeGUI extends Component {
  render() {
    return (
      <div className="container">
        <Tree />
      </div>
    );
  }
}

export default TreeGUI;
