import React from "react";
import HourlyCard from "./HourlyCard";

const HourlyDisplay = ({ weekData, units }) => {
  return (
    <div className="hourly display">
      {weekData && (
        <div className="hour-display">
          {weekData.list
            .filter((data, index) => index % 8 === 0)
            .map((data, key) => (
              <HourlyCard key={key} data={data} units={units}></HourlyCard>
            ))}
        </div>
      )}
    </div>
  );
};

export default HourlyDisplay;
