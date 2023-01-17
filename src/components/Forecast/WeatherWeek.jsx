import React from "react";
import HourlyDisplay from "./HourlyDisplay";
// import conversion from "../utils/Conversion";

const WeatherWeek = ({ isLoading, weekData, units }) => {
  return (
    <div>
      <h2>5 Day Forecast</h2>
      {isLoading && <div className="info">Loading...</div>}
      {!isLoading && (
        <div className="main-weather-info">
          <HourlyDisplay weekData={weekData} units={units}></HourlyDisplay>
        </div>
      )}
    </div>
  );
};

export default WeatherWeek;
