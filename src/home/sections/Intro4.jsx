import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  themeText: {
    color: theme.palette.text.primary,
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  musicImageWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "80%",
      left: 0,
      right: 0,
      margin: "0 180px -50px -2000px",
      bottom: 0,
      borderRadius: "300px",
      background: theme.palette.primary.main,
      transformOrigin: "right bottom",
      transform: "rotate(45deg)",
      zIndex: -1,
      opacity: 0.1,
    },

    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "80%",
      marginTop: 32,
      left: "10%",
      opacity: 0.75,
      background:
        "radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);",
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
      "&::after": {
        display: "none",
      },
      "&::before": {
        display: "none",
      },
    },
  },
  topmargin: {
    paddingTop: "3rem",
  },
}));

const Intro4 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="marketing1">
      <div className="container">
        <Grid container spacing={3} justify="space-between" alignItems="center">
          <Grid item container direction="column">
            <Grid item className={classes.topmargin}>
              <h1 className="font-normal text-48 mt-0">InsureLeague</h1>
            </Grid>
            <Grid item>
              <p>
                InsureLeague is the brand of <strong>Infinite Basket</strong>{" "}
                Insurance Marketing Pvt. Ltd., an Insurance Regulatory
                Development Authority of India (IRDAI) approved venture
                impacting lives with over 30+ Years of industry experience. The
                firm leverages the experience of our team members and is backed
                by a strong team of qualified advisory members. Our key focus is
                to provide our clients the tools - to mitigate risk, secure
                their future and plan for their goals - through customized
                advisory. InsureLeague is a brand committed to making your long
                term goals for your family and business “a reality” during your
                presence and absence. To provide your family the safety net of
                financial security, providing you the freedom to follow your
                dreams.
              </p>
            </Grid>
            <Grid item>
              <p>
                We are a group of professionals, empowering and educating people
                at large, on the requirement for sufficient insurance cover. We
                provide reliable, unbiased solutions to mitigate risk in both
                personal life as well as in business. We assist in choosing the
                right kind of coverage and also provide exceptional pre and post
                issuance service. We also provide assistance for other financial
                requirements.
              </p>
            </Grid>
            <Grid item className={classes.topmargin}>
              <h3 className="font-normal text-32 mt-0">Our Story</h3>
            </Grid>
            <Grid item>
              <p>
                Having a loving family is a precious gift in life. We as social
                beings, work to provide security, stability and protection to
                our family both emotionally and financially. Insurance, hence,
                is the best option to attain these goals along with other
                financial products. Our team embraces this motive and has
                embarked on the journey to provide insurance literacy to our
                clients. We empower our clients with the right knowledge, so
                that they can choose the right kind of products to mitigate
                risks at various life stages. The brand InsureLeague is an
                emotion – for us, our customers and their families – and include
              </p>
              <ul>
                <li>Assurance</li>
                <li>Protection</li>
                <li>Guarantee</li>
                <li>Preparation</li>
                <li>Longevity</li>
                <li>Stability</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro4;
