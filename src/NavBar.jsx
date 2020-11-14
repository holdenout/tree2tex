import React, { useState } from "react";
import "./NavBar.css";
import About from "./NavBarPages/About.jsx";
import Guide from "./NavBarPages/Guide.jsx";
import LatexResources from "./NavBarPages/LatexResources.jsx";
import Preferences from "./NavBarPages/Preferences.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={props.close} />
      <div className="modal-content" onClick={null}>
        {props.children}
      </div>
    </div>
  )
}

export const NavBar = props => {
  const [displayModal, toggleModal] = useState(false);

  return (
    <div className="navbar">
      <button className="nav-button" type="button" onClick={() => toggleModal(<About />)}>About</button>
      <button className="nav-button" type="button" onClick={() => toggleModal(<Guide />)}>Guide</button>
      <button className="nav-button" type="button" onClick={() => toggleModal(<LatexResources />)}>LaTeX Resources</button>
      <button className="nav-button" type="button" onClick={() => toggleModal(<Preferences {...props} />)}>Preferences</button>
      <a className="nav-button github" href="https://github.com/holdenout/tree2tex" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      {displayModal &&
      <Modal close={() => toggleModal(false)}>
        {displayModal}
      </Modal>}
    </div>
  );
};

export default NavBar;
