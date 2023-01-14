import React from "react";
import "../styles/Today.css";
import CurrentDisplay from "./CurrentDisplay";
import TodayInfo from "./TodayInfo";
import feelslike from "../assets/feelslike.png";
import cloud from "../assets/cloud.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";

const WeatherToday = ({ isLoading, data, units }) => {
  return (
    <div>
      <div className="today-top-container">
        <CurrentDisplay data={data} isLoading={isLoading}></CurrentDisplay>
        <div className="today-grid">
          <TodayInfo
            title={"Feels Like"}
            isLoading={isLoading}
            data={data}
            units={units}
            src={feelslike}
          ></TodayInfo>
          <TodayInfo
            title={"Humidity"}
            isLoading={isLoading}
            data={data}
            units={units}
            src={humidity}
          ></TodayInfo>
          <TodayInfo
            title={"Cloudiness"}
            isLoading={isLoading}
            data={data}
            units={units}
            src={cloud}
          ></TodayInfo>
          <TodayInfo
            title={"Winds"}
            isLoading={isLoading}
            data={data}
            units={units}
            src={wind}
          ></TodayInfo>
        </div>
      </div>
      <hr className="card-section-line" />
      <div className="hourly">
        {/* Image wheel or something here */}
        div.
        <CurrentDisplay data={data} isLoading={isLoading}></CurrentDisplay>
      </div>
    </div>
  );
};

export default WeatherToday;
