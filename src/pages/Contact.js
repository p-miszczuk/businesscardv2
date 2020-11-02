import ContactFormular from "../components/ContactContent/ContactFormular";
import ContactForms from "../components/ContactContent/ContactForms";
import React from "react";
import ContactIcon from "../images/contact.png";

const Contact = () => {
  return (
    <div className="contact">
      <header className="projects__header">
        <span />
        <span />
        <img src={ContactIcon} alt="contact icon" />
        <h2>Formularz kontaktowy</h2>
      </header>
      <div className="contact__content">
        <ContactFormular />
        <ContactForms />
      </div>
    </div>
  );
};

export default Contact;
