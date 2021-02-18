import React, { useEffect, useState } from "react";
import { Card, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    position: "relative",
    overflow: "visible",
    "&:before": {
      content: '" "',
      position: "absolute",
      height: 350,
      width: 350,
      left: -450,
      top: "75%",
      background: "rgba(var(--primary), 0.1)",
      transform: "rotate(40deg)",
      transformOrigin: "top right",
      borderRadius: "15%",
      zIndex: -1,
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      height: 350,
      width: 350,
      right: -450,
      top: "25%",
      background: "rgba(var(--primary), 0.1)",
      transform: "rotate(-60deg)",
      transformOrigin: "top left",
      borderRadius: "15%",
      zIndex: -1,
    },
  },
}));

const inputProps = {
  style: {
    borderRadius: 8,
  },
};

const Contact3 = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <section className="section" id="contact1">
      <div className="container text-center">
        <h1 className="mt-0 font-normal text-44 mx-auto">Send Us an Email</h1>
        <p className="mb-16 max-w-400 mx-auto">
          Send us all your requests or questions by submitting the below form.
        </p>
        {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
        <Card
          className={clsx("py-10 px-6 max-w-550 mx-auto", classes.card)}
          elevation={3}
        >
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              className="mb-6 mr-4"
              label="Name"
              placeholder="First Name"
              size="small"
              name="name"
              variant="outlined"
              fullWidth
              InputProps={inputProps}
            />
            <div className="flex">
              <TextField
                className="mb-6 mr-4"
                label="Contact Number"
                name="contactNumber"
                placeholder="contactNumber"
                size="small"
                variant="outlined"
                fullWidth
                InputProps={inputProps}
              />
              <TextField
                className="mb-6"
                label="Email"
                placeholder="Your Email"
                size="small"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                InputProps={inputProps}
              />
            </div>

            <TextField
              className="mb-6 mr-4"
              label="Subject"
              name="subject"
              placeholder="subject"
              size="small"
              variant="outlined"
              fullWidth
              InputProps={inputProps}
            />

            <TextField
              className="mb-6"
              label="Description"
              name="message"
              placeholder="Description"
              size="small"
              multiline
              rows={8}
              variant="outlined"
              fullWidth
              InputProps={inputProps}
            />
            <Button
              className="w-full border-radius-8"
              variant="contained"
              color="primary"
              type="submit"
            >
              SUBMIT
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact3;
