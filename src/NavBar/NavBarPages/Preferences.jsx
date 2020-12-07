import React from "react";
import {ArrowToggleSwitch} from "./ArrowToggleSwitch.jsx";
import "./Preferences.css";

export const Preferences = (props) => {
  return (
    <div>
      <h1>Preferences</h1>
      <div className="content">
        {/* Tabs vs spaces for indent */}
        <span className="preference-title">Indent Style: </span>
        <ArrowToggleSwitch
          leftOption="Spaces"
          rightOption="Tabs"
          checkedCondition={props.texFormatting.indentStr === "\t"}
          handleChange={(isChecked) => {
            props.editTexFormatting(
              "indentStr",
              isChecked ? "\t" : " ".repeat(4)
            );
          }}
        />
        <p>More preferences in development...</p>
      </div>
    </div>
  );
};

export default Preferences;
