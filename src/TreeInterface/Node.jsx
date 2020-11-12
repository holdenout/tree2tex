import React from "react";
import AddNodeMenu from "./AddNodeMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faEdit} from "@fortawesome/free-regular-svg-icons";

export const Node = ({ node, addChild, removeChild, editName }) => {
  return (
    <div className={`node${node.id} node`}>
      <div className="node-name">
        {node.name}
      </div>

      <button className="edit" onClick={() => editName(node)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <button id="delete" title="delete node" onClick={() => removeChild(node)}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>

      <AddNodeMenu node={node} addChild={addChild} />
    </div>
  );
};

export default Node;
