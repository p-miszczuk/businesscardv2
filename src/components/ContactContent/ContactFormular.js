import { formularFields } from "../../utils";
import classnames from "classnames";
import React, { useState, useEffect } from "react";
import TextField from "../Tools/TextField";

const url = "http://localhost:3010/sendEmail";

const ContactFormular = () => {
  const [comp, setComp] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(null);
  const [sendMsg, setSendMsg] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if ((comp || email || subject || message) && sendMsg) {
      setSendMsg(null);
    }
  }, [comp, email, subject, message, sendMsg]);

  const getError = (name) => {
    if (errors && errors.length > 0) {
      const error = errors.find(({ error }) => error === name);
      if (error) {
        return { error: error.value };
      }
    }

    return {};
  };

  const getSendMsg = (value) => {
    const classSend = classnames("contact__send-message", {
      "contact__send--error": value.includes("błąd")
    });

    return <p className={classSend}>{value}</p>;
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

  const setMessageInfo = (value) => {
    subject && setSubject("");
    setComp("");
    setEmail("");
    setMessage("");
    setDisableButton(false);
    setSendMsg(value.error || value.msg);
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
    sendMsg && setSendMsg(null);

    const valuesToSend = {
      name: comp,
      email,
      subject,
      message
    };

    const shouldSend = validateFields(valuesToSend);

    if (shouldSend && shouldSend.length === 0) {
      errors && setErrors(null);
      setDisableButton(true);

      fetch(url, {
        method: "POST",
        // mode: "cors",
        // cache: "no-cache",
        // credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
          //'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(valuesToSend)
      })
        .then((resp) => resp.json())
        .then((data) => setMessageInfo(data))
        .catch((error) => {
          console.error(error);
          setDisableButton(false);
        });
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
              <TextField
                key={field.id}
                disableButton={disableButton}
                {...error}
                {...states}
                {...field}
              />
            );
          })}
        {sendMsg && getSendMsg(sendMsg)}
      </form>
    </div>
  );
};

export default ContactFormular;
