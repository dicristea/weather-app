import React from "react";
import { getCurrentDate } from "../../utils/GetCurrentDate";
import conversion from "../../utils/Conversion";
import Graphic from "../Graphic";

const HourlyCard = ({ data, units }) => {
  const short = true;

  return (
    <div className="hourly-card card">
      <div className="date card-header">
        <strong>{getCurrentDate(data.dt, short)}</strong>
      </div>
      <Graphic data={data.weather[0].icon}></Graphic>
      <div className="high-low">
        <div>{`H: ${conversion(units, data.main.temp_max)}`}</div>
        <div>{`L: ${conversion(units, data.main.temp_min)}`}</div>
      </div>
    </div>
  );
};

export default HourlyCard;
