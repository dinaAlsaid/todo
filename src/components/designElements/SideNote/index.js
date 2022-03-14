import React from "react";
import "./styles.scss";

const SideNote = ({ children, show,onClose }) => {
  const sideNotestyle = {
    position: "absolute",
    left: "100%",
    transform: "rotate(-2deg)",
    height: "30vw",
    width: "19vw",
  };
  return (
    <>
      {show && (

        <div className="paper" style={sideNotestyle}>
          <div onClick={onClose} className="closeBtn">{"<"}</div>
          {children}
        </div>
      )}
    </>
  );
};

export default SideNote;
