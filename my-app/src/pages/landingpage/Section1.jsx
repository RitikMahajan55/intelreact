import React from "react";
import LandingPage from "../../component/main/LandingPage";
import Cubes from "../../component/cubes/Cubes";
import Logoslider from "../../component/logo/Logoslider";
import WhoweAre from "../../component/whoweare/WhoweAre";
import ServiceSec1 from "../../component/ourservices/ServiceSec1";
import BadgesLogo from "../../Badges/BadgesLogo";
import Event from "../../Eventheighlight/Event";
function Section1() {
  return (
    <>
      <LandingPage />
      <Logoslider />
      <WhoweAre />
      <ServiceSec1 />
      <BadgesLogo />
      <Event />
    </>
  );
}

export default Section1;

