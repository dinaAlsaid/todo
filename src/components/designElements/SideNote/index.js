import React from "react";
import "./styles.scss";
import {HiChevronLeft} from "react-icons/all"
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

        <div className="paper side-note" style={sideNotestyle}>
          <div onClick={onClose} className="hover-pointer bullet-icons"><HiChevronLeft/></div>
          {children}
        </div>
      )}
    </>
  );
};

export default SideNote;
