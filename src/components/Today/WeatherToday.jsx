import React from "react";
import "../../styles/Today.css";
import CurrentDisplay from "./CurrentDisplay";
import TodayInfo from "./TodayInfo";
import feelslike from "../../assets/feelslike.png";
import cloud from "../../assets/cloud.png";
import wind from "../../assets/wind.png";
import humidity from "../../assets/humidity.png";
import { getCurrentTime } from "../../utils/GetCurrentTime";

const WeatherToday = ({ isLoading, data, units, weekData }) => {
  return (
    <div>
      <div className="today-top-container">
        <CurrentDisplay
          data={data}
          isLoading={isLoading}
          units={units}
        ></CurrentDisplay>
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
      <div className="today-bottom-container">
        <div className="hourly-container">
          <div className="today-info">
            {isLoading && (
              <div className="loading" style={{ placeSelf: "center" }}>
                Loading...
              </div>
            )}
            {!isLoading && (
              <div className="flex-column">
                <h2>Sunrise:</h2>
                <div> {getCurrentTime(data.sys.sunrise)}</div>
                <h2>Sunset:</h2>
                <div>{getCurrentTime(data.sys.sunset)}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
