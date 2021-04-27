import React from 'react';
import { Grid } from '@material-ui/core';

const Marketing1 = () => {
  return (
    <section className="section" id="marketing1">
      <div className="container">
        <Grid container spacing={4}>
          <Grid item lg={6} md={12} container spacing={3}>
            <Grid item container direction="column">
              <Grid item>
                <h2>Our Mission</h2>
              </Grid>
              <Grid item>
                <p>
                  InsureLeague is a brand committed to making your long term
                  goals for your family and business “a reality” during your
                  presence and absence. We strive to provide your family the
                  safety net of financial security, and provide you the freedom
                  to follow your dreams.
                </p>
              </Grid>
              <Grid item>
                <h2>Our Vision</h2>
              </Grid>
              <Grid item>
                <p>
                  We empower and educate business organization and individuals,
                  on the requirement for sufficient insurance cover to mitigate
                  risk in both business and personal life.
                </p>
              </Grid>
              <Grid item>
                <h2>Our Values</h2>
              </Grid>
              <Grid item>
                <p>
                  Our team’s focus is to be customer centric, unbiased,
                  transparent, solution oriented, timely and provide prompt pre
                  and post issuance service.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={12} container spacing={3}>
            <Grid item container direction="column">
              <Grid item>
                <h2>What sets us apart</h2>
              </Grid>
              <Grid item>
                <p>
                  InsureLeague is the brand of Infinite Basket Insurance
                  Marketing Pvt. Ltd., a Bangalore based Insurance Regulatory
                  Development Authority of India (IRDAI) approved venture
                  Securing lives. We leverage the experience of our team members
                  and are backed by a strong team of qualified advisory members.
                  Our key focus is to provide our clients the tools - to
                  mitigate risk, secure their future and plan for their goals -
                  through customized insurance advisory.
                </p>
                <p>
                  Over the last few years, we have catered to the requirements
                  of 120+ clientele including MSME & NRIs. InsureLeague team
                  provides complete information of the insurance plans, unbiased
                  advice, ethical conduct, support for claim settlement & full
                  disclosure of all information to our customers, to make an
                  informed decision. The transparency with which we advise our
                  clients has helped us build strong trust among our clients.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Marketing1;
