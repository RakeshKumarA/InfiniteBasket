import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: 'relative',
    background:
      'url(./assets/images/nriinvest.jpg) center center/cover no-repeat',
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

const NriIntro = () => {
  const classes = useStyles();

  return (
    <section className="section pb-0" id="intro9">
      <div className={classes.introWrapper}>
        <div className="container">
          <div className={classes.intro}>
            <h1 className="font-medium text-48 text-primary mt-0">
              Investment for NRIs
            </h1>
            <p className="mb-16">
              Today, India is ideally poised to become a globally dominant
              player and the Indian market offers immense business scope.
              Developed economies have widely acknowledged this and have become
              key investors in India’s growth story. Many investors who have
              invested in Indian business segments or are planning to do so are
              NRIs with credible stakes here in India.
            </p>
            <p className="mb-16">
              <a href="https://youtu.be/ELixoFd9-2c">
                {' '}
                <strong> More on NRI Investment</strong>{' '}
              </a>
            </p>
          </div>
          <div className={classes.lightWhiteBG}></div>
        </div>
      </div>
    </section>
  );
};

export default NriIntro;
