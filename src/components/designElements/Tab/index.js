import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { randomColorGenerator } from "../../../Util/randomColorGenerator";


const Tab = ({ title, onClick, width, color }) => {
  const [tabColor,setTabColor] = useState(randomColorGenerator())

  const tabStyle = {
    height: width,
    backgroundColor: tabColor,
    borderRadius: "0 5px 5px 0",
  };

  const titleStyles = {
    width: width,
    textOverflow: "ellipsis",
    transformOrigin: "top left",
    padding: 5,
    boxSizing: "border-box",
    textAlign: "center",
  };

  useEffect(()=>{
    if(color){
      setTabColor(color)
    }else{
      setTabColor(randomColorGenerator())
    }
  },[color])

  return (
    <div onClick={onClick} style={tabStyle} className="journalTab hover-pointer">
      <div style={titleStyles} className="journalTabTitle">
        {typeof title ==='function'? title(): title}
      </div>
    </div>
  );
};

export default Tab;
Tab.defaultProps = {
  title: "New Tab",
  width:100,
};

Tab.propTypes = {
  title: PropTypes.string || PropTypes.func,
  width:PropTypes.string || PropTypes.number
};
