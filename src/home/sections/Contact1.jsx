import React, { useEffect, useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Fab, Icon } from "@material-ui/core";

const Contact1 = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    contactNumber: "",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  const handleSubmit = (event) => {
    console.log("submitted");
    console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  let { name, email, subject, message, contactNumber } = state;

  return (
    <div className="section section-contact1 bg-light-gray" id="contact1">
      <div className="container">
        <div className="section__header">
          <h2>Send Us an Email</h2>
          <p>
            Send us all your requests or questions by submitting the below form.
          </p>
        </div>
        {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
        <ValidatorForm
          onSubmit={handleSubmit}
          onError={(errors) => null}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextValidator
            className="mb-4 w-full"
            label="Name"
            onChange={handleChange}
            name="name"
            value={name}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <TextValidator
            className="my-4 w-full"
            label="Email"
            onChange={handleChange}
            name="email"
            multiline
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <TextValidator
            className="my-4 w-full"
            label="Contact Number"
            onChange={handleChange}
            name="contactNumber"
            multiline
            value={contactNumber}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <TextValidator
            className="my-4 w-full"
            label="Subject"
            onChange={handleChange}
            name="subject"
            value={subject}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <TextValidator
            className="my-4 mb-8 w-full"
            label="Message"
            onChange={handleChange}
            name="message"
            multiline
            value={message}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <Fab color="primary" type="submit">
            <Icon>send</Icon>
          </Fab>
        </ValidatorForm>
      </div>
    </div>
  );
};

export default Contact1;
