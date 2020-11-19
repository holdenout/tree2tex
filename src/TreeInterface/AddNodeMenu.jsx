import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export const AddNodeMenu = ({node, addChild}) => {
  const [newNode, setNewNode] = useState({
    newName: "",
    newPosition: node.children.length,
  });

  const handleChange = (event) => {
    let {name, value} = event.target;
    if (name === "newPosition") value = parseInt(value);
    setNewNode({...newNode, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let {newName, newPosition} = newNode;
    if (newName === "") newName = undefined;
    addChild(node, newName, newPosition);
    setNewNode({newName: "", newPosition: node.children.length + 1});
  };

  const radioInputs = node.children
    .map((ch, index) => (
      <label key={"pos" + index}>
        <input
          type="radio"
          name="newPosition"
          value={index}
          checked={newNode.newPosition === index}
          onChange={handleChange}
        />
        <label>{ch.name}</label>
      </label>
    ))
    .concat([
      <label key={"pos" + node.children.length}>
        <input
          type="radio"
          name="newPosition"
          value={node.children.length}
          onChange={handleChange}
          checked={newNode.newPosition === node.children.length}
        />
      </label>,
    ]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="newName"
        type="text"
        placeholder="New node name"
        value={newNode.newName}
        onChange={handleChange}
      />
      <br />
      {radioInputs}
      <br />
      <button type="submit">
        <FontAwesomeIcon className="fa-icon" icon={faPlus} />
      </button>
    </form>
  );
};

export default AddNodeMenu;
