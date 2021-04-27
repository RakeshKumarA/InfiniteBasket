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

const KeymanService = () => {
  const classes = useStyles();
  const processList = [
    {
      header: 'Pvt Ltd Company turnover 340 Crores ',
      content:
        'In March 2020, one of the Directors of Pvt Ltd Company had been to Berlin to sign an IT Contract, but he passed away due to an accident.',
      point1:
        'In 2012, the Company had taken a Key Man Insurance policy for 24 Crores.',
      point2:
        'The Claim amount of Rs 24 Crores was credited to the company account.',
      point3:
        'The existing Director paid the amount to the wife of the deceased Director & took the control (shares) of the company.',
    },
    {
      header: 'Partnership Firm turnover of 46 Crores ',
      content:
        'In April 2020 a Businessman (Partnership firm) aged 35 Years passed away due to Corona Virus infection in Chennai.',
      point1:
        'Businessman had taken a loan for 8 Crores and his wife (Partner) is unable to run the business',
      point2: 'Businessman had a cover of 30 Lakhs insurance.',
      point3:
        'Lenders (Bankers) had to dispose off the property as the interest was mounting & business came to halt.',
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
                  <ul>
                    <li>{item.point1}</li>
                    <li>{item.point2}</li>
                    <li>{item.point3}</li>
                  </ul>

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

export default KeymanService;
