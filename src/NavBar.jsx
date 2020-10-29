import React, { useState } from "react";
import "./NavBar.css";

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={props.close} />
      <div className="modal-content" onClick={null}>
        <h1>MODAL</h1>
      </div>
    </div>
  )
}

export const NavBar = props => {
  const [displayModal, toggleModal] = useState(false);

  return (
    <div className="navbar">
      <button type="button" onClick={() => toggleModal(!displayModal)}>About</button>
      <button type="button">Guide</button>
      <button type="button">Preferences</button>
      {displayModal && <Modal close={() => toggleModal(!displayModal)} />}
    </div>
  );
};

export default NavBar;
