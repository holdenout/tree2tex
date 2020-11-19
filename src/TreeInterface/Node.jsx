import React, {useState} from "react";
import AddNodeMenu from "./AddNodeMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faCheckCircle,
} from "@fortawesome/free-regular-svg-icons";
import {faBan} from "@fortawesome/free-solid-svg-icons";

const NameEdit = ({name, handleEdit, handleCancel}) => {
  const [newName, setNewName] = useState(name);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit(newName);
  };

  return (
    <div className="name-edit">
      <form onSubmit={handleSubmit}>
        <label>
          Name:&nbsp;
          <input
            type="text"
            id="name-input"
            value={newName}
            autoFocus
            onChange={handleChange}
          />
        </label>
        <button id="submit-name" type="submit">
          <FontAwesomeIcon className="fa-icon" icon={faCheckCircle} />
        </button>
        <button id="cancel" type="button" onClick={handleCancel}>
          <FontAwesomeIcon className="fa-icon" icon={faBan} />
        </button>
      </form>
    </div>
  );
};

const Name = ({name, setEditing}) => {
  return (
    <div className="name">
      <div className="node-name">{name}</div>
      <button className="edit" onClick={() => setEditing(true)}>
        <FontAwesomeIcon className="fa-icon" icon={faEdit} />
      </button>
    </div>
  );
};

export const Node = ({node, addChild, removeChild, editName}) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = (newName) => {
    setEditing(false);
    editName(node, newName);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div className={`node${node.id} node`}>
      {!editing ? (
        <Name name={node.name} setEditing={setEditing} />
      ) : (
        <NameEdit
          name={node.name}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
        />
      )}

      <button id="delete" title="delete node" onClick={() => removeChild(node)}>
        <FontAwesomeIcon className="fa-icon" icon={faTrashAlt} />
      </button>

      <AddNodeMenu node={node} addChild={addChild} />
    </div>
  );
};

export default Node;
