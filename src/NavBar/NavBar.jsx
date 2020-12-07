import React, {useState} from "react";
import "./NavBar.css";
import About from "./NavBarPages/About.jsx";
import Guide from "./NavBarPages/Guide.jsx";
import LatexResources from "./NavBarPages/LatexResources.jsx";
import Preferences from "./NavBarPages/Preferences.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal.jsx";

export const NavBar = (props) => {
  const [displayModal, toggleModal] = useState(false);
  const pages = [
    {name: "About", page: <About />},
    {name: "Guide", page: <Guide />},
    {name: "Latex Resources", page: <LatexResources />},
    {name: "Preferences", page: <Preferences {...props} />},
  ];

  return (
    <div className="navbar">
      {pages.map(({name, page}) => {
        return (
          <button
            className="nav-button"
            type="button"
            onClick={() => toggleModal(page)}
          >
            {name}
          </button>
        );
      })}

      <a
        className="nav-button github"
        href="https://github.com/holdenout/tree2tex"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="fa-icon" icon={faGithub} />
      </a>

      {displayModal && (
        <Modal close={() => toggleModal(false)}>{displayModal}</Modal>
      )}
    </div>
  );
};

export default NavBar;
