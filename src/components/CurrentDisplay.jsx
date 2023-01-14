import React from "react";
import { getCurrentDate } from "../utils/GetCurrentDate";
import { getCurrentTime } from "../utils/GetCurrentTime";
import conversion from "../utils/Conversion";
import Graphic from "./Graphic";

const CurrentDisplay = ({ isLoading, data, units }) => {
  return (
    <div className="current display">
      {isLoading && (
        <div className="loading" style={{ placeSelf: "center" }}>
          Loading...
        </div>
      )}
      {!isLoading && (
        <div className="today-info">
          <h2>
            {data.name}, {data.sys.country}
          </h2>
          <div className="date">{getCurrentDate()}</div>
          <h3>Today, {!isLoading && getCurrentTime(data)}</h3>
          <div className="description">{`${
            data.weather[0].description.charAt(0).toUpperCase() +
            data.weather[0].description.slice(1)
          }`}</div>
          <Graphic data={data}></Graphic>
          <div className="display-info">
            {conversion(units, data.main.temp)}
          </div>
          {`${conversion(units, data.main.temp_max)} / 
              ${conversion(units, data.main.temp_min)}`}
        </div>
      )}
    </div>
  );
};

export default CurrentDisplay;
