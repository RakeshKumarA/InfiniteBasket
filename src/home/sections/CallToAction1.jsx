import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import icici from "../../home/common/icicilomb.jpg";
import max from "../../home/common/max.jpg";
import star from "../../home/common/star.jpeg";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  sectionBG: ({ bg }) => ({
    background: `url(${
      bg || "./assets/images/greenbg.jpg"
    }) center center/cover no-repeat`,
  }),
  imgsize: {
    width: "150px",
    height: "50px",
    paddingRight: "20px",
  },
}));

const CallToAction1 = ({ bg }) => {
  const classes = useStyles({ bg });

  return (
    <div className={clsx("section text-white", classes.sectionBG)} id="cta1">
      <div className="container">
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="center"
        >
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <h2>Our Key Partners</h2>
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <img src={icici} alt="Mastercard" className={classes.imgsize} />
          </Grid>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <img src={max} alt="Mastercard" className={classes.imgsize} />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={star} alt="ICICI Lombard" className={classes.imgsize} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CallToAction1;
