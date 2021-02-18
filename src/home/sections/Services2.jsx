import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Icon } from "@material-ui/core";
import Carousel from "../common/Carousel";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    borderTop: "2px solid black",
    "& .icon": {
      fontSize: 64,
    },

    "&:hover": {
      borderTop: "2px solid rgba(var(--primary), 1)",
      "& .icon": {
        color: "rgba(var(--primary),1)",
      },
    },
  },
  heading: {
    paddingTop: "3rem",
  },
}));

const Services2 = () => {
  const classes = useStyles();

  const serviceList = [
    {
      icon: "vpn_key",
      title: "Key Man Insurance",
      text:
        "Insurance  policy taken out by a business, to compensate that business for financial losses that would arise from the death or extended incapacity of an important member of that business",
    },
    {
      icon: "calendar_today",
      title: "Term Plans",
      text:
        'Type of  life insurance  policy that provides coverage for a certain period of time or a specified "term" of years',
    },
    {
      icon: "flight",
      title: "NRI Insurance Investment Plans",
      text:
        "Allows NRIs to buy any plan that meets their requirements of protecting themselves and their family.",
    },
    {
      icon: "stay_primary_portrait",
      title: "Retirement Plans",
      text:
        "Insurance products which help you accumulate savings over a long period of time, providing financial security for your future.",
    },
    {
      icon: "favorite",
      title: "Health Insurance",
      text:
        "Type of  insurance  that offers  coverage  to the policy holder for medical  expenses in case of a  health  emergency",
    },
  ];

  return (
    <section className="section" id="service2">
      <div className="container">
        <div className="section__header">
          <h2 className={classes.heading}>Our Services</h2>
          <p>
            We cater to all kinds of insurance – Life & General Insurance. We
            also do all kinds of loan requirements from NBFCs and Banks.
          </p>
        </div>

        <Carousel carouselId="services-2">
          {serviceList.map((service, index) => (
            <Card key={index} className={clsx("card h-full", classes.card)}>
              <CardContent className="flex-column justify-between min-h-full">
                <div className="flex-grow">
                  <div className="text-center mb-4">
                    <Icon className="icon">{service.icon}</Icon>
                  </div>
                  <h3 className="font-light text-24">{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                {/* <div className="pt-4">
                  <Button>READ MORE</Button>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Services2;
