import React from "react";

const TestimonialCard = ({avatarSrc, authorName, review}) => {
  return (
    <div className="container px-1 px-lg-4">
      <div className="avatar_card">
        <img className="avatar" src={avatarSrc} alt="Avatar" />
        <h3 className="author">{authorName}</h3>
      </div>
      <div>
        <q>{review}</q>
      </div>
    </div>
  );
};

export default TestimonialCard;
