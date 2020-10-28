import React from "react";
import "./NavBar.css";

export const NavBar = props => {
  return (
    <div className="navbar">
      <button type="button">About</button>
      <button type="button">Guide</button>
      <button type="button">Preferences</button>
    </div>
  );
};

export default NavBar;
