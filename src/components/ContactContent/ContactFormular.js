import { formularFields } from "../../utils";
import React, { useState } from "react";
import TextField from "../Tools/TextField";

const ContactFormular = () => {
  const [comp, setComp] = useState("");
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

  const getStates = (fieldName) => {
    let values = {};

    if (fieldName === "name") {
      values = { value: comp, doChange: setComp };
    } else if (fieldName === "email") {
      values = { value: email, doChange: setEmail };
    } else if (fieldName === "subject") {
      values = { value: subject, doChange: setSubject };
    } else if (fieldName === "message") {
      values = { value: message, doChange: setMessage };
    }

    return values;
  };

  const validateFields = (valuesToSend) => {
    let errorsObj = [];

    formularFields.forEach(({ name, required, validOptions }) => {
      if (required) {
        const { empty, includes, minSigns } = validOptions;

        if (empty && !valuesToSend[name]) {
          errorsObj.push({ error: name, value: "empty" });
        } else if (includes && !valuesToSend[name].includes(includes)) {
          errorsObj.push({ error: name, value: "includes" });
        } else if (minSigns && valuesToSend[name].length < minSigns) {
          errorsObj.push({ error: name, value: "minSigns" });
        }
      }
    });

    return errorsObj;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valuesToSend = {
      name: comp,
      email,
      subject,
      message
    };

    const shouldSend = validateFields(valuesToSend);
    if (shouldSend && shouldSend.length === 0) {
      errors && setErrors(null);
      console.log("you can send this");
    } else {
      setErrors(shouldSend);
    }
  };

  return (
    <div className="contact__formular">
      <form onSubmit={handleSubmit}>
        {formularFields &&
          formularFields.map((field) => {
            const states = getStates(field.name);
            const error = getError(field.name);

            return (
              <TextField key={field.id} {...error} {...states} {...field} />
            );
          })}
      </form>
    </div>
  );
};

export default ContactFormular;
