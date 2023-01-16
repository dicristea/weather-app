import React from "react";

const Graphic = ({ data }) => {
  return (
    <div className="img-container">
      <img src={`http://openweathermap.org/img/wn/${data}@2x.png`} alt="" />
    </div>
  );
};

export default Graphic;
