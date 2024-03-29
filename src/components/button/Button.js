import "./button.css";
import React from "react";

export default function Button({ name, type }) {
  return (
    <button type={type} className="btn">
      <span>{name}</span>
    </button>
  );
}
