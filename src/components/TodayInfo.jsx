import React from "react";
import conversion from "../utils/Conversion";
import PlaceholderImage from "../assets/weather-app.png";

const TodayInfo = ({ title, isLoading, data, units }) => {
  return (
    <div className="card small">
      <div className="card-header">
        <div>
          <strong>{title}</strong>
        </div>
      </div>
      <div className="display">
        {isLoading && <div className="loading">Loading...</div>}
        {!isLoading && (
          <div className="today-main">
            <div className="small img-container">
              <img src={PlaceholderImage} alt="Icon for weather" />
            </div>
            <div className="display-info small">
              {conversion(units, data.main.feels_like)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayInfo;
