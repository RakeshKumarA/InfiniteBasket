import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import LinkedinIcon from 'home/common/icons/LinkedinIcon';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: 'relative',
    background:
      'url(./assets/images/FinalTeamBG.png) center center/cover no-repeat',
    height: '100%',
  },
  lightWhiteBG: {
    position: 'absolute',
    display: 'block',
    top: 0,
    bottom: 0,
    left: 0,
    right: 'calc(50% - 95px)', // 1170*(1-5/7)
    [theme.breakpoints.down('xs')]: {
      right: 0,
    },
    background: 'rgba(255,255,255,0.95)',
  },
  intro: {
    position: 'relative',
    padding: '5rem 0rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem 0rem',
    },
    zIndex: 5,
  },
}));

const Intro5 = () => {
  const classes = useStyles();

  return (
    <section id="intro5">
      <div className={classes.introWrapper}>
        <div className="container">
          <Grid container spacing={0} alignItems="center">
            <Grid item sm={7} xs={12}>
              <div className={classes.intro}>
                <h1 className="font-bold text-48 mt-0">The Team</h1>
                <h2 className="font-bold text-36 mt-0 pt-sm-24">
                  Jaisimha NS{' '}
                  <a
                    href="https://www.linkedin.com/in/jaisimha-n-s-686a719/
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <LinkedinIcon fontSize="small" color="primary" />
                    </IconButton>
                  </a>
                </h2>
                <p className="max-w-450 text-18 my-6">
                  With over 25 + Years experience in Banking & Finance, held
                  leadership roles with Lakshmi Vilas Bank, Axis Bank.{' '}
                </p>
                <h2 className="font-bold text-36 mt-0 pt-sm-24">
                  Indu Ramanujam{' '}
                  <a
                    href="https://www.linkedin.com/in/indu-ramanujam-3bb64423/
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <LinkedinIcon fontSize="small" color="primary" />
                    </IconButton>
                  </a>
                </h2>

                <p className="max-w-450 text-18 my-6">
                  Commerce graduate, with over 4+ Years experience as a
                  Financial advisor. Associated with Industry best Insurance
                  companies - Max Life, ICICI Lombard, Star Health.
                </p>
                <h2 className="font-bold text-36 mt-0 pt-sm-24">
                  Arun Kumar{' '}
                  <a
                    href="https://www.linkedin.com/in/indu-ramanujam-3bb64423/
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <LinkedinIcon fontSize="small" color="primary" />
                    </IconButton>
                  </a>
                </h2>

                <p className="max-w-450 text-18 my-6">
                  Arun is the Head – New Initiatives. Arun is a triple post
                  graduate, with degrees in Management, Psychology and Mass
                  Communication with overall experience of 20+ years
                </p>
              </div>
              <div className={classes.lightWhiteBG}></div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Intro5;
