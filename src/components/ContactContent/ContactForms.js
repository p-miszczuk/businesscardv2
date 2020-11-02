import { contactForms } from "../../utils";
import React from "react";

const ContactForms = () => {
  const displayContent = ({ image, link, name, target, text }) => (
    <a href={link} target={target} rel="noopener noreferrer">
      <span>
        <img src={image} alt={name} />
      </span>
      <span className="contact__forms-form-name">{text}</span>
    </a>
  );

  return (
    <div className="contact__forms">
      {contactForms.map((item) => (
        <div key={item.id} className="contact__forms-form">
          {displayContent(item)}
        </div>
      ))}
    </div>
  );
};

export default ContactForms;
