import React, { useState } from "react";
import "./NavBar.css";
import {about} from "./infoText/about.jsx";
import {guide} from "./infoText/guide.jsx";

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
      <button type="button" onClick={() => toggleModal(about)}>About</button>
      <button type="button" onClick={() => toggleModal(guide)}>Guide</button>
      <button type="button">Preferences</button>
      {displayModal && <Modal page={displayModal} close={() => toggleModal(false)} />}
    </div>
  );
};

export default NavBar;
