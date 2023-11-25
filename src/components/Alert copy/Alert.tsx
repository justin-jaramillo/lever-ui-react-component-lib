import React, { useState } from "react";

import { AlertProps } from "./Alert.types";
import "./Alert.css";

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const [show, setShow] = useState<boolean>(true);

  function handleShow() {
    setShow(false);
  }

  return (
    <>
      {show && (
        <div
          className={`alert alert-${type}`}
          role="alert"
          onClick={handleShow}
        >
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
          {message}
        </div>
      )}
    </>
  );
};

export default Alert;
