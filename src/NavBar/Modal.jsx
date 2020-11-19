import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

export const Modal = ({children, close}) => {
  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      close();
    }
  };

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
  );
};

export default Modal;
