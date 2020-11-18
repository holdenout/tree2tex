import React, {useState, useEffect} from "react";
import "./NavBar.css";
import About from "./NavBarPages/About.jsx";
import Guide from "./NavBarPages/Guide.jsx";
import LatexResources from "./NavBarPages/LatexResources.jsx";
import Preferences from "./NavBarPages/Preferences.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Modal = ({children, close}) => {
  const handleKeyPress = e => {
    if (e.key === "Escape") {
      close();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={close} />
      <div className="modal-content" onClick={null}>
        <button id="close" title="close" onClick={close}>
          <FontAwesomeIcon
            className="fa-icon"
            style={{height: "1em", width: "1em"}} // Needed to override fa defaults
            icon={faTimes}
          />
        </button>
        {children}
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
      <a className="nav-button github" href="https://github.com/holdenout/tree2tex" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa-icon" icon={faGithub} /></a>
      {displayModal &&
      <Modal close={() => toggleModal(false)}>
        {displayModal}
      </Modal>}
    </div>
  );
};

export default NavBar;
