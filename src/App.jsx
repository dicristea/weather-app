import "./styles/App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WeatherToday from "./components/Today/WeatherToday";
import WeatherWeek from "./components/Forecast/WeatherWeek";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [weekData, setWeekData] = useState(null);
  const [weekLoading, setWeekLoading] = useState(true);
  const [weekError, setWeekError] = useState(null);

  const [isMetric, setIsMetric] = useState(false);
  const [userLocation, setUserLocation] = useState("Los Angeles");

  const updateLocation = (newLocation) => {
    if (newLocation) {
      setUserLocation(newLocation);
    } else {
      console.log("No Location provided");
    }
  };

  const changeUnits = (toggle) => {
    setIsMetric(toggle);
  };

  useEffect(() => {
    const getTodayData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&APPID=f712ca0d0609a5a2b7368dcc5e968c4b`,
          { mode: "cors" }
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getTodayData();
  }, [userLocation]);

  useEffect(() => {
    const getWeekData = () => {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${userLocation}&limit=1&appid=f712ca0d0609a5a2b7368dcc5e968c4b`,
        { mode: "cors" }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((response) => {
          return fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${response[0].lat}&lon=${response[0].lon}&appid=f712ca0d0609a5a2b7368dcc5e968c4b`,
            { mode: "cors" }
          );
        })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((response) => {
          setWeekData(response);
          setWeekError(null);
        })
        .catch((err) => {
          console.log(err);
          setWeekError(err.message);
          setWeekData(null);
        })
        .finally(() => {
          setWeekLoading(false);
        });
    };
    getWeekData();
  }, [userLocation]);

  return (
    <div className="App-bg">
      <div className="App">
        <Header
          isLoading={loading}
          onChange={(toggle) => changeUnits(toggle)}
          onClick={updateLocation}
        ></Header>
        {isMetric}
        <div className="card">
          {error}
          <WeatherToday
            isLoading={loading}
            data={data}
            units={isMetric}
            weekData={weekData}
          ></WeatherToday>
        </div>
        <div className="card">
          {weekError}
          <WeatherWeek
            isLoading={weekLoading}
            weekData={weekData}
            units={isMetric}
          ></WeatherWeek>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
