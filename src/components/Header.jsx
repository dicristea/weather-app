import React from "react";
import { useState } from "react";
import ToggleButton from "./UserFields/ToggleButton";
import logo from "../assets/weather-app.png";
import "../styles/Header.css";

const Header = ({ isLoading, onChange, onClick, invalidLocation }) => {
  const [value, setValue] = useState("");

  const changeMeasurement = (toggle) => {
    if (typeof onChange === "function") {
      onChange(toggle);
    }
  };

  const handleSubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onClick(value);
    }
  };

  return (
    <div className="card">
      <header className="App-header">
        <div className="headline">
          <img src={logo} alt="Weather App Logo" className="App-logo" />
          <h1>Weather Forecast</h1>
          <ToggleButton
            onChange={(toggle) => changeMeasurement(toggle)}
          ></ToggleButton>
        </div>
        {invalidLocation && (
          <div className="error-popup" style={{ color: "var(--red-accent)" }}>
            {" "}
            Please Enter a valid city
          </div>
        )}
        <div className="form-container">
          <form className="location-form" role="search">
            <label htmlFor="search">Search for a city</label>
            <input
              id="search"
              type="text"
              placeholder="Search city..."
              // why is this pattern not working?
              pattern="^[a-zA-Z0-9_.+-]*(?:[a-zA-Z][a-zA-Z0-9_.+-]*){2,}$"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleSubmit}
              autoFocus
            ></input>
            <button id="submitBtn" type="button" onClick={() => onClick(value)}>
              Go
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
