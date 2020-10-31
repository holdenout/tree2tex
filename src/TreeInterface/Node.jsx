import React from "react";
import AddNodeMenu from "./AddNodeMenu";

export const Node = ({ node, addChild, removeChild, editName }) => {
  return (
    <div className={`node${node.id} node`}>
      <button id="delete" onClick={() => removeChild(node)}>
        &times;
      </button>
        <span className="node-name">{node.name}</span>
      <button onClick={() => editName(node)}>edit</button>
      <AddNodeMenu node={node} addChild={addChild} />
    </div>
  );
};

export default Node;
