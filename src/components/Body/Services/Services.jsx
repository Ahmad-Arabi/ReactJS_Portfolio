import React from "react";
import Card from "../Card/Card";
import PhotoEditing from "../../../assets/images/ps.svg";
import Web from "../../../assets/images/web.svg";
import "./style.css";

const Services = () => {
  return (
    <section id="services">
      <article className="services_title">
        <h2>Services</h2>
      </article>
      <article className="services_list">
        <Card
            imageClass="services_img"
            imageSrc= {Web}
            alt="web design icon"
            title="Website Design"
        />
        <Card
            imageClass="services_img"
            imageSrc= {PhotoEditing}
            alt="photo editing iconn"
            title="Photo Editing"
        />
      </article>
    </section>
  );
};

export default Services;
