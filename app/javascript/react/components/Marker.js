import React from 'react';

const mystyle = {
      position: "absolute",
      backgroundColor: "#000",
      top: "50%",
      left: "50%",
      width: "18px",
      height: "18px",
      transform: "translate(-50%, -50%)",
      border: "2px solid #fff",
      borderRadius: "100%",
      userSelect: "none",
      "&:hover": {
        zIndex: "1"
      },
      cursor: "pointer"

    };

const Marker = props => (
  <div
    style={mystyle}
    alt={props.text}
    {...props.onClick ? { onClick: props.onClick } : {}}
  />
);

export default Marker;
