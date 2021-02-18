import React from "react";
import { Grid } from "@material-ui/core";

const Marketing1 = () => {
  return (
    <section className="section" id="marketing1">
      <div className="container">
        <Grid container spacing={3} justify="space-between" alignItems="center">
          <Grid item container direction="column">
            <Grid item>
              <h1 className="font-normal text-48 mt-0">What Sets Us Apart</h1>
            </Grid>
            <Grid item>
              <p>
                InsureLeague is the brand of Infinite Basket Insurance Marketing
                Pvt. Ltd., an Insurance Regulatory Development Authority of
                India (IRDAI) approved venture impacting lives with over 30+
                Years of industry experience. The firm leverages the experience
                of our team members and is backed by a strong team of qualified
                advisory members. Our key focus is to provide our clients the
                tools - to mitigate risk, secure their future and plan for their
                goals - through customized advisory.
              </p>
            </Grid>
            <Grid item>
              <p>
                Over the last few years, we have catered to the requirements of
                120+ clientele including corporates & NRIs. Infinite Basket
                offers professional and unbiased advice, ethical conduct,
                support for claim settlement & full disclosure of all
                information to our customers, to make an informed decision. The
                transparency with which we advise our clients has helped us
                build strong trust among our clients.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Marketing1;
