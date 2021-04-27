import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  themeText: {
    color: theme.palette.text.primary,
  },

  musicImage: {
    width: '362px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },

  musicImageWrapper: {
    position: 'relative',
    display: 'inline-block',
    '&::before': {
      content: '" "',
      position: 'absolute',
      display: 'block',
      height: '80%',
      left: 0,
      right: 0,
      margin: '0 180px -50px -2000px',
      bottom: 0,
      borderRadius: '300px',
      background: theme.palette.primary.main,
      transformOrigin: 'right bottom',
      transform: 'rotate(45deg)',
      zIndex: -1,
      opacity: 0.1,
    },

    '&::after': {
      content: '" "',
      position: 'absolute',
      display: 'block',
      height: 36,
      width: '80%',
      marginTop: 32,
      left: '10%',
      opacity: 0.75,
      background:
        'radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);',
    },

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      '&::after': {
        display: 'none',
      },
      '&::before': {
        display: 'none',
      },
    },
  },
  topmargin: {
    paddingTop: '3rem',
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
                Here at InsureLeague, we appreciate your love for your family.
                Life has its way of bringing twists and turns. That’s why we
                have embarked on a journey to create insurance awareness and
                empower you with the right knowledge, so that you can choose the
                right kind of insurance products to mitigate risks at various
                life stages.
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
                Here at InsureLeague, we appreciate your love for your family.
                Life has its way of bringing twists and turns. That’s why we
                have embarked on a journey to create insurance awareness and
                empower you with the right knowledge, so that you can choose the
                right kind of insurance products to mitigate risks at various
                life stages.
              </p>
              <p>Now, bridge the gaps and enjoy a secured LIFE!!!</p>
              <p>Why we do this?</p>
              <p>
                Seeing a near and dear one suffer due to an eventuality in life
                has been painful. Financial stability at all stages of life
                gives the strength to take LIFE Head-on. In our experience of 30
                years, we have witnessed families suffer due to lack of risk
                cover. Being a socially responsible team, we saw the gap in
                awareness and coverage. We saw an opportunity to be the reason
                for “A smile on the face of family members in times of
                distress”.
              </p>
              <p>
                The brand InsureLeague is an emotion – for us, our customers and
                their families – and includes
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
