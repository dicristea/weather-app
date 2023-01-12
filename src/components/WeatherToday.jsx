import React from "react";
import conversion from "../utils/Conversion";
import TodayInfo from "./TodayInfo";
import PlaceholderImage from "../assets/weather-app.png";
import "../styles/Today.css";
import { getCurrentDate } from "../utils/GetCurrentDate";
import { getCurrentTime } from "../utils/GetCurrentTime";

const WeatherToday = ({ isLoading, data, units }) => {
  return (
    <div className="weatherToday">
      <div className="today-top-container">
        <div className="current display">
          {isLoading && (
            <div className="loading" style={{ placeSelf: "center" }}>
              Loading...
            </div>
          )}
          {!isLoading && (
            <div className="today-main">
              <h2>
                {data.name}, {data.sys.country}
              </h2>
              <div className="date">{getCurrentDate()}</div>
              <h3>Today, {!isLoading && getCurrentTime(data)}</h3>
              <div className="img-container">
                <img src={PlaceholderImage} alt="Icon for weather" />
              </div>
              <div className="display-info">
                {conversion(units, data.main.temp)}
              </div>
            </div>
          )}
        </div>
        <div className="today-grid">
          <div className="grid-top">
            <TodayInfo
              title={"Feels Like"}
              isLoading={isLoading}
              data={data}
              units={units}
            ></TodayInfo>
            <TodayInfo
              title={"Humidity"}
              isLoading={isLoading}
              data={data}
              units={units}
            ></TodayInfo>
          </div>
          <div className="grid-bottom">
            <TodayInfo
              title={"Chance of Rain"}
              isLoading={isLoading}
              data={data}
              units={units}
            ></TodayInfo>
            <TodayInfo
              title={"Winds"}
              isLoading={isLoading}
              data={data}
              units={units}
            ></TodayInfo>
          </div>
        </div>
      </div>
      <div className="hourly">
        {/* Image wheel or something here */}
        <div className="display">
          {isLoading && <div className="loading">Loading...</div>}
          {!isLoading && (
            <div className="today-main">
              <h2>
                {data.name}, {data.sys.country}
              </h2>
              <div className="img-container">
                <img src={PlaceholderImage} alt="Icon for weather" />
              </div>
              <div className="display-info">
                {conversion(units, data.main.temp)}
                {units}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
