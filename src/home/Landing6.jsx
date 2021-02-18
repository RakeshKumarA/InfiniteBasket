import React, { useEffect } from "react";
import { scrollTo } from "utils";
import Intro6 from "./sections/Intro6";
import TopBar6 from "./sections/TopBar6";
import Services2 from "./sections/Services2";
import Marketing1 from "./sections/Marketing1";
import Intro5 from "./sections/Intro5";
import Footer1 from "./sections/Footer1";
import CallToAction1 from "./sections/CallToAction1";
import Contact3 from "./sections/Contact3";

const Landing6 = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar6 />
      <Intro6 />
      <Services2 />
      <Marketing1 />
      <Intro5 />
      <CallToAction1 />
      <Contact3 />
      <Footer1 />
    </div>
  );
};

export default Landing6;
