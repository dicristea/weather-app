import React from "react";
import conversion from "../../utils/Conversion";

const TodayInfo = ({ title, isLoading, data, units, src }) => {
  return (
    <div className="card small">
      <div className="card-header">
        <strong>{title}</strong>
      </div>
      <div className="display">
        {isLoading && <div className="loading">Loading...</div>}
        {!isLoading && (
          <div className="flex-column">
            <div className="small img-container">
              <img src={src} alt="Icon for weather" />
            </div>
            <div className="display-info small">
              {title === "Feels Like" &&
                conversion(units, data.main.feels_like)}
              {title === "Humidity" && `${data.main.humidity}%`}
              {title === "Cloudiness" && `${data.clouds.all}`}
              {title === "Winds" &&
                `${data.wind.speed} ${units ? "mps" : "mph"}`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayInfo;
