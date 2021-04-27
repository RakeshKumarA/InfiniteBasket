import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: 'relative',
    background:
      'url(./assets/images/Termplans.jpg) center center/cover no-repeat',
    padding: '2.5rem 0rem',
  },
  lightWhiteBG: {
    position: 'absolute',
    display: 'block',
    top: 0,
    bottom: 0,
    left: 0,
    right: 'calc(50% - 395px)', // 1170*(1-5/7)
    minWidth: 800,
    background: 'rgba(255,255,255,0.25)',
    clipPath: 'polygon(0 0, 100% 0%, 75% 100%, 0% 100%)',

    '&:before': {
      content: '" "',
      position: 'absolute',
      display: 'block',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      marginRight: 100,
      minWidth: 800,
      background: 'rgba(255,255,255,0.75)',
      clipPath: 'polygon(0 0, 100% 0%, 75% 100%, 0% 100%)',
      zIndex: -1,
    },

    [theme.breakpoints.down('xs')]: {
      right: 0,
      clipPath: 'none',
      background: 'rgba(255,255,255,0.7)',
    },
  },
  intro: {
    position: 'relative',
    padding: '5rem 0rem',
    maxWidth: 500,
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 0rem',
    },
    zIndex: 5,
  },
}));

const TermplanIntro = () => {
  const classes = useStyles();

  return (
    <section className="section pb-0" id="intro9">
      <div className={classes.introWrapper}>
        <div className="container">
          <div className={classes.intro}>
            <h1 className="font-medium text-48 text-primary mt-0">
              Term Plans
            </h1>
            <p className="mb-16">
              Term insurance is a type of life insurance policy that provides
              coverage for a certain period of time or a specified "term" of
              years. If the insured expires during the time period specified in
              the policy and the policy is active, or in force, a death benefit
              will be paid. It provides maximum coverage at reasonable premium
              payouts.
            </p>
          </div>
          <div className={classes.lightWhiteBG}></div>
        </div>
      </div>
    </section>
  );
};

export default TermplanIntro;
