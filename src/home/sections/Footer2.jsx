import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Icon,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { darken } from "@material-ui/core/styles";
import FacebookIcon from "../common/icons/FacebookIcon";
import TwitterIcon from "../common/icons/TwitterIcon";
import InstagramIcon from "../common/icons/InstagramIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: "#011C3A",
    color: palette.primary.contrastText,
  },
  iconWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 4,
    marginRight: 12,
    border: `1px solid ${palette.primary.contrastText}`,
    cursor: "pointer",
  },
  link: {
    borderRadius: 4,
    "&:hover": {
      background: darken("#011C3A", 0.2),
    },
  },
}));

const Footer2 = () => {
  const classes = useStyles();

  return (
    <section className={`section ${classes.section}`} id="contact4">
      <div className="container">
        <Grid container spacing={3} justify="space-between">
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">About Us</h4>
              <p className="my-6 max-w-200 text-inherit">
                To provide your family the safety net of financial security,
                providing you the freedom to follow your dreams.
              </p>
              <div className="flex flex-wrap">
                <div className={classes.iconWrapper}>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon className="text-13" fontSize="small" />
                  </a>
                </div>
                <div className={classes.iconWrapper}>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon className="text-13" fontSize="small" />
                  </a>
                </div>
                <div className={classes.iconWrapper}>
                  <a
                    href="http://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="text-13" fontSize="small" />
                  </a>
                </div>
                <div className={classes.iconWrapper}>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="text-13" fontSize="small" />
                  </a>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Company</h4>
              <div className="mt-4 mb-6 ml--4">
                <div
                  className={clsx(
                    "flex items-center py-2 cursor-pointer px-4 w-full",
                    classes.link
                  )}
                >
                  <Icon>navigate_next</Icon>
                  <span>About Us</span>
                </div>
                <div
                  className={clsx(
                    "flex items-center py-2 cursor-pointer px-4 w-full",
                    classes.link
                  )}
                >
                  <Icon>navigate_next</Icon>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Newsletter</h4>
              <p className="my-6 text-inherit">Sign Up for the latest news</p>
              <TextField
                className="mb-4"
                size="small"
                placeholder="Your Email"
                variant="outlined"
                fullWidth
                inputProps={{
                  style: {
                    paddingLeft: 8,
                    color: "#fff",
                  },
                }}
                InputProps={{
                  style: {
                    paddingLeft: 4,
                  },
                  startAdornment: (
                    <InputAdornment position="end">
                      <Icon fontSize="small" className="text-white">
                        email
                      </Icon>
                    </InputAdornment>
                  ),
                }}
              />
              <Button className="w-full" variant="contained" color="primary">
                SUBSCRIBE
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Footer2;
