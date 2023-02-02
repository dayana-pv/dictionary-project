import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-volume-high"></i>
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
