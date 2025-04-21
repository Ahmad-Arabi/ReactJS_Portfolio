import React from "react";
import TestimonialCard from "./TestimonialCard";
import MaleAvatar from "../../../assets/images/avatarfemale2.svg";
import FemaleAvatar from "../../../assets/images/avatarmale.svg";
import "./style.css";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <article className="testimonial_title">
        <h2>Testimonial</h2>
      </article>
      <article className="testimonial_list">
        <TestimonialCard
          avatarSrc={MaleAvatar}
          authorName="Michael Smith"
          review="Ahmad's seamless integration of technologies made our project a success."
        />
        <TestimonialCard
          avatarSrc={FemaleAvatar}
          authorName="Reem Al-Masri"
          review="Ahmad's dedication and technical prowess made our project a success. Highly recommended."
        />
        <TestimonialCard
          avatarSrc={MaleAvatar}
          authorName="Zainab Al-Hassan"
          review="Ahmad's comprehensive skills ensured our smooth product launch."
        />
      </article>
    </section>
  );
};

export default Testimonials;
