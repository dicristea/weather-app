import React from "react";
// import conversion from "../utils/Conversion";

const WeatherWeek = ({ isLoading, weekData, units }) => {
  return (
    <div>
      <div className="card-header">
        <h2>5 Day Forecast</h2>
      </div>
      {isLoading && <div className="info">Loading...</div>}
      {!isLoading && (
        <div className="main-weather-info">
          <h3>{console.log(weekData)}</h3>
          {/* <h3>{conversion(units, weekData.main.temp)}</h3> */}
        </div>
      )}
    </div>
  );
};

export default WeatherWeek;
