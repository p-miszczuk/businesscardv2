import { formularFields } from "../utils";
import React, { useState } from "react";
import ContactIcon from "../images/contact.png";
import TextField from "../components/Tools/TextField";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(null);

  const getError = (name) => {
    if (errors && errors.length > 0) {
      const error = errors.find(({ error }) => error === name);
      if (error) {
        return { error: error.value };
      }
    }

    return {};
  };

  const getStates = (name) => {
    let values = {};
    if (name === "email") {
      values = { value: email, doChange: setEmail };
    } else if (name === "subject") {
      values = { value: subject, doChange: setSubject };
    } else if (name === "message") {
      values = { value: message, doChange: setMessage };
    }

    return values;
  };

  const validateFields = (valuesToSend) => {
    let errorsObj = [];

    formularFields.forEach(({ name, required, validOptions }) => {
      if (required) {
        const { empty, includes } = validOptions;

        if (empty && !valuesToSend[name]) {
          errorsObj.push({ error: name, value: 1 });
        } else if (includes && !valuesToSend[name].includes(includes)) {
          errorsObj.push({ error: name, value: 2 });
        }
      }
    });
    return errorsObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valuesToSend = {
      email,
      subject,
      message
    };

    const shouldSend = validateFields(valuesToSend);
    if (shouldSend && shouldSend.length === 0) {
      console.log("you can send this");
    } else {
      setErrors(shouldSend);
    }
  };

  return (
    <div className="contact">
      <header className="projects__header">
        <span />
        <span />
        <img src={ContactIcon} alt="contact icon" />
        <h2>Formularz kontaktowy</h2>
      </header>
      <div className="contact__content">
        <div className="contact__formular">
          <form onSubmit={handleSubmit}>
            {formularFields &&
              formularFields.map((field) => {
                const states = getStates(field.name);
                const error = getError(field.name);

                return (
                  <TextField
                    key={field.id}
                    v
                    {...error}
                    {...states}
                    {...field}
                  />
                );
              })}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
