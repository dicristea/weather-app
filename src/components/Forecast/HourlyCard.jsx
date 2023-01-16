import React from "react";
import { getCurrentDate } from "../../utils/GetCurrentDate";
import conversion from "../../utils/Conversion";
import Graphic from "../Graphic";

const HourlyCard = ({ data, units }) => {
  const short = true;
  console.log(data);
  // const formatDate = () => {
  //   console.log(data);
  //   let date = getCurrentDate();
  //   // console.log(date);
  // };

  return (
    <div className="hourly-card">
      <div className="flex-column">
        <div className="date">{getCurrentDate(data.dt, short)}</div>
        <Graphic data={data.weather[0].icon}></Graphic>
        <div>{conversion(units, data.main.temp)}</div>
      </div>
    </div>
  );
};

export default HourlyCard;
