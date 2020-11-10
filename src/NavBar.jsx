import React, { useState } from "react";
import "./NavBar.css";
import {about} from "./infoText/about.jsx";
import {guide} from "./infoText/guide.jsx";
import {latexResources} from "./infoText/latexResources.jsx";
import {preferences} from "./infoText/preferences.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={props.close} />
      <div className="modal-content" onClick={null}>
        {props.page}
      </div>
    </div>
  )
}

export const NavBar = props => {
  const [displayModal, toggleModal] = useState(false);

  return (
    <div className="navbar">
      <button className="nav-button" type="button" onClick={() => toggleModal(about)}>About</button>
      <button className="nav-button" type="button" onClick={() => toggleModal(guide)}>Guide</button>
      <button className="nav-button" type="button" onClick={() => toggleModal(latexResources)}>LaTeX Resources</button>
      <button className="nav-button" type="button" onClick={() => toggleModal(preferences)}>Preferences</button>
      <a className="nav-button github" href="https://github.com/holdenout/tree2tex" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
      {displayModal && <Modal page={displayModal} close={() => toggleModal(false)} />}
    </div>
  );
};

export default NavBar;
