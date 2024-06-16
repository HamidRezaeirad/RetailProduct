import React from "react";
import "./Spinner.css";

/**
 *
 * @returns Spinner react component
 */
const Spinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center Backdrop text-light">
      <div
        className="spinner-border m-auto"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
