import React from 'react';
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    borderRadius: 8,
    '&:hover $cardHeader': {
      background: palette.primary.main,
      color: 'white',
    },
    '&:hover $largeText': {
      color: 'rgba(var(--primary),0.3)',
    },
  },
  cardHeader: {
    padding: '1.25rem 2rem',
    fontSize: '1rem',
    fontWeight: 500,
    background: 'rgba(var(--primary),0.3)',
    transition: 'all 250ms ease',
  },
  cardContent: {
    padding: '1.5rem 2rem',
  },
  largeText: {
    textAlign: 'right',
    fontSize: '8rem',
    fontWeight: 400,
    lineHeight: 1,
    marginTop: '1.5rem',
    color: 'rgba(var(--primary),0.1)',
    transition: 'all 250ms ease',
  },
}));

const TermplanService = () => {
  const classes = useStyles();
  const processList = [
    {
      header: 'Case Study 1',
      content:
        'Rajesh, an IT professional aged 35 years had an annual income of 18 lakhs.  In June 2019, he passed away due to dengue.  He had taken a term insurance to the tune of 3 Cr.  This amount was paid to the nominee (his wife).',
    },
  ];

  return (
    <section className="section" id="work-process1">
      <div className="container">
        <div>
          <h1 className="font-normal text-44 mt-0">Case Studies</h1>
        </div>

        <Grid container spacing={3}>
          {processList.map((item, ind) => (
            <Grid key={ind} item sm={4} xs={12}>
              <Card elevation={3} className={clsx(classes.card, 'card')}>
                <div className={classes.cardHeader}>{item.header}</div>
                <div className={classes.cardContent}>
                  <p className="mb-8 mt-0">{item.content}</p>

                  <div className={classes.largeText}>{ind + 1}</div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default TermplanService;
