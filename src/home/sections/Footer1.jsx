import React from "react";
import { Grid, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  footerSection: {
    "& h4:after": {
      content: '" "',
      position: "absolute",
      bottom: -8,
      left: 0,
      height: 2,
      width: 64,
      background: palette.secondary.main,
    },
  },
  socialstyle: {
    paddingTop: "2rem",
  },
}));

const Footer1 = () => {
  const classes = useStyles();

  return (
    <div className={clsx("bg-light-dark", classes.footerSection)} id="footer1">
      <div className="container">
        <Grid container>
          <Grid item lg={6} md={6} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">About Us</h4>
              <p className="text-inherit">
                InsureLeague is a brand committed to making your long term goals
                for your family and business “a reality” during your presence
                and absence.
              </p>
              <Button variant="contained" color="secondary">
                <a href="tel:+919900600661">Contact Us</a>
              </Button>
              <div className={classes.socialstyle}>
                <a
                  href="https://www.linkedin.com/"
                  className="px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-24 w-24"
                    src="./assets/images/social-linkedin.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-24 w-24"
                    src="./assets/images/social-twitter.png"
                    alt=""
                  />
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="px-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="h-24 w-24"
                    src="./assets/images/social-facebook.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">Contact</h4>
              <div className="px-4 my-8 flex items-center mx--4">
                <Icon className="text-secondary">mail</Icon>
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Email</h5>
                  <p className="m-0 p-0 text-inherit">
                    infinitebasketimf@gmail.com
                  </p>
                </div>
              </div>
              <div className="px-4 mt-8 flex items-center mx--4">
                <Icon className="text-secondary">location_on</Icon>
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Registered Address</h5>
                  <p className="m-0 p-0 text-inherit">
                    Infinite Basket Insurance Marketing Pvt. Ltd. 10/106, 11th A
                    Cross, 10th Main Malleswaram, Bangalore – 560 003,
                    Karnataka, India
                  </p>
                  <p className="m-0 p-0 text-inherit">
                    Landline: +91 080 23560205 Mobile: + 91 98452 31663 / 99006
                    00661
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer1;
