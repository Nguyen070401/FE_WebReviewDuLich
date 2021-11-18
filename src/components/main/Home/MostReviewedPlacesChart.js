import React, { useState, useEffect, useCallback, Fragment } from "react";
import classes from "./MostReviewedPlacesChart.module.css";

function PlacesChart(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const [mostReviewedPlaces, setMostReviewedPlaces] = useState([]);
  const getMostReviewedPlaces = useCallback(async function () {
    //useCallBack makes sure the function actually changes not because of Javascript
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch(""); //url for GET Method, it returns a promise
      if (!response.ok) {
        throw new Error(
          "Something went wrong on our end! Please refresh or try again later."
        );
      }
      const obtainedData = await response.json(); //use json() to resolve json to Javascript object

      const processedData = obtainedData.results.map((data) => {
        //change "results" if the json content is different
        return {
          placeID: data.id, //assune json returned has many fields including id, name, review, imagesrc, totalreview,... but we extract placeID, placeName, totalReviews
          placeName: data.name,
          totalReview: data.totalreview,
          placeImageSource: data.imagesrc,
        }; //processing json file
      });
      setMostReviewedPlaces(processedData);
    } catch (isError) {
      setIsError(isError.message);
    }

    setIsLoading(false); //done loading
  }, []);

  useEffect(() => {
    getMostReviewedPlaces();
  }, [getMostReviewedPlaces]); //makes sure it runs if the function changes and re-render Home

  return ( //styling by added in correspondent elements: className={classes.'set your class name'}
    <Fragment>
      {!isLoading && !isError && (mostReviewedPlaces.length > 0) && mostReviewedPlaces.map((mostReviewedPlace) => {
        return (
          <div>
            <p>{mostReviewedPlace.placeID}</p>{" "} {/*set ID from 1-5 as we get 5 most reviewed places only*/}
            <img
              src={mostReviewedPlace.placeImageSource}
              alt={`${mostReviewedPlace.placeName} example`}
            />
            <p>{mostReviewedPlace.placeName}</p>
            <p>{mostReviewedPlace.totalReview}</p>
          </div>
        );
      })}
      {!isLoading && !isError && (mostReviewedPlaces.length === 0) && <p>No data available!</p>}
      {isError && <p>{isError.message}</p>}
      {isLoading && !isError && <p>Hold on while we are loading data...</p>}
    </Fragment>
  );
}

export default PlacesChart;
