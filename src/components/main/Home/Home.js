import React, { Fragment } from "react";
import Navigation from "../../header/Navigation/Navigation";
import MostReviewedPlacesChart from "./MostReviewedPlacesChart";
import FeaturedPlaces from "./FeaturedPlaces";

import classes from "./Home.module.css";

function Home(props) {
  return (
    <Fragment>
      <Navigation />
      <MostReviewedPlacesChart />
      <FeaturedPlaces />
    </Fragment>
  );
}

export default Home;
