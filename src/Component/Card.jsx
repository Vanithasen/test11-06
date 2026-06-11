import React from "react";

function Card(props) {
  return (
     <div
      style={{
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "15px",
        margin: "15px",
        width: "250px",
        boxShadow: "0px 2px 5px lightgray",
      }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h4>Trainer: {props.trainer}</h4>
    </div>
  );
}

export default Card;