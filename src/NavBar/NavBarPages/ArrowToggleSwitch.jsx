import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import "./ArrowToggleSwitch.css";

/* Built on a checkbox input.
 * Unchecked -> Left Option
 * Checked -> Right Option
 */

export const ArrowToggleSwitch = ({
  leftOption,
  rightOption,
  checkedCondition,
  handleChange,
}) => {
  const [isChecked, toggleChecked] = useState(checkedCondition);

  return (
    <span className="toggle-switch-container">
      {leftOption}
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            handleChange(!isChecked);
            toggleChecked(!isChecked);
          }}
        />
        <span className="toggle">
          <FontAwesomeIcon className="fa-icon toggle-icon" icon={faArrowLeft} />
        </span>
      </label>
      {rightOption}
    </span>
  );
};

export default ArrowToggleSwitch;
