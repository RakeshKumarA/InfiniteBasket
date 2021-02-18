import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  containerHolder: {
    background: `linear-gradient(45deg, ${palette.primary.main} 0%,${palette.primary.light} 100%)`,
  },
  container: {
    paddingTop: "6rem !important",
    paddingBottom: "6rem !important",
  },
}));

const Intro6 = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleclick = () => {
    history.push("/about");
  };

  return (
    <section className="section" id="intro6">
      <div className={classes.containerHolder}>
        <div
          className={clsx(
            "container flex-column justify-center items-center text-white",
            classes.container
          )}
        >
          <h1 className="font-normal text-center text-48 mb-4 mt-0">
            InsureLeague
          </h1>
          <h2 className="font-normal">Securing Lives</h2>
          <p className="max-w-600 text-center text-inherit my-12">
            InsureLeague is a Corporate Insurance Advisory / Marketing firm with
            approval from IRDAI. With over 30 years of industry experience, we
            focus on giving tailor made insurance / investment/ risk mitigation
            solutions for MSME (Micro, Small & Medium Enterprises), HNI (High
            Networth Individuals) and NRI (Non - Resident Individuals) clients.
          </p>
          <Button
            variant="contained"
            color="primary"
            className="rounded px-6"
            onClick={handleclick}
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Intro6;
