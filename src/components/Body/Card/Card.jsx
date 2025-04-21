import React from "react";

const Card = ({imageClass, imageSrc, alt, title}) => {
  return (
    <div>
      <img
        className={`${imageClass} image-fluid`}
        src= { imageSrc}
        alt= { alt }
      />
      <h3>{ title }</h3>
    </div>
  )
}

export default Card;
