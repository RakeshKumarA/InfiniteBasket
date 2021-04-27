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

const HealthService = () => {
  const classes = useStyles();
  const processList = [
    {
      header: 'Case Study 1',
      content:
        'Ravindra, aged 38, was an employee in one of the top MNC.  The company had given a health insurance of 8 lakhs to cover his spouse, kid and parents.  However, due to obligation from a relative, he had also purchased personal health insurance policy for his entire family to the tune of 25 lakhs. After 7 years of taking the policy, his mother was diagnosed with Cancer.  The medical expenses exceeded beyond 12 lakhs in one and half year.  At that time, the personal health policy came to the rescue.  ',
    },
    {
      header: 'Case Study 2',
      content:
        'Umesh, aged 32 years was working for a pvt company.  His company had provided a health insurance cover of 3 lakhs for his family of 3 (spouse and kid).  Since he was young and healthy, he did not see the necessity to invest in a personal health insurance policy. Unfortunately, at the age of 36 years, he met with a major accident and had a brain injury.  The medical bill was approximately 15 lakhs for two surgeries over a period of 6 months. Family had to pay the from their savings.',
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

export default HealthService;
