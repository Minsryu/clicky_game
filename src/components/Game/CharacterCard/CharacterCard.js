import React from "react";

const CharacterCard = props => (
  <div className = "click_image" id={props.character.id} onClick={()=>props.checkImage()} >
      <img src={props.character.image}></img>
  </div>
);

export default CharacterCard;