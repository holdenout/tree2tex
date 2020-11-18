import React from "react";
import Node from "./Node";
import "./TreeGUI.css";

const NodeContainer = props => {
  const descendents = props.node.children.map(ch => (
    <NodeContainer
      key={ch.id}
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

export const TreeGUI = props => {
    return (
      <div className="treegui-container">
        <NodeContainer
          className="root-node"
          key={props.treeData.root.id}
          node={props.treeData.root}
          addChild={props.addChild}
          removeChild={props.removeChild}
          editName={props.editName}
        />
      </div>
    );
}

export default TreeGUI;
