import React from "react";

export default function item({text, remove, update}) {
  return (
    <div className="item">
      <div className="text">{text}</div>
      <div className="icons">
        <i className="fa-solid fa-pencil" onClick={update}></i>
        <i className="fa-solid fa-trash" onClick={remove}></i>
      </div>
    </div>
  );
}
