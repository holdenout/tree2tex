import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import "./Preferences.css";

const ToggleSwitch = props => {
  const [isChecked, toggleChecked] = useState(props.texFormatting.indentStr === "\t");

  return (
    <span className="toggle-switch-container">
      {props.left}
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            toggleChecked(!isChecked);
            props.editTexFormatting("indentStr", (e.target.checked ? "\t" : "    "))}
          }
        />
        <span  className="toggle">
          <FontAwesomeIcon className="fa-icon toggle-control" icon={faArrowLeft} />
        </span>
      </label>
      {props.right}
    </span>
  );
}

export const Preferences = (props) => {
  return (
    <div>
      <h1>Preferences</h1>
      <div className="content">
        <span className="preference-title">Indent Style: </span>
        <ToggleSwitch left="Spaces" right="Tabs" {...props} />
        <p>In development...</p>
      </div>
    </div>
  );
}

export default Preferences;
