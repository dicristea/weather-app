import "./styles/App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WeatherToday from "./components/WeatherToday";
import WeatherWeek from "./components/WeatherWeek";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [coordinates, setCoordinates] = useState(null);
  const [coordinatesLoading, setCoordinatesLoading] = useState(true);
  const [coordinatesError, setCoordinatesError] = useState(null);

  const [weekData, setWeekData] = useState(null);
  const [weekLoading, setWeekLoading] = useState(true);
  const [weekError, setWeekError] = useState(null);

  const [isMetric, setIsMetric] = useState(false);
  const [userLocation, setUserLocation] = useState("Los Angeles, usa");

  const updateLocation = (newLocation) => {
    if (newLocation === "") {
      console.log("No Location provided");
    } else {
      setUserLocation(newLocation);
    }
  };

  const changeUnits = (toggle) => {
    setIsMetric(toggle);
  };

  useEffect(() => {
    const getTodayData = async () => {
      try {
        console.log(userLocation);
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${userLocation}&APPID=f712ca0d0609a5a2b7368dcc5e968c4b`
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
    const getLocationCoords = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${userLocation}&limit=&appid=f712ca0d0609a5a2b7368dcc5e968c4b`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();

        console.log(`lat=${actualData[0].lat}&lon=${actualData[0].lon}`);
        setCoordinates(`lat=${actualData[0].lat}&lon=${actualData[0].lon}`);
        setCoordinatesError(null);
      } catch (err) {
        setCoordinatesError(err.message);
        setCoordinates(null);
      } finally {
        setCoordinatesLoading(false);
      }
    };
    getLocationCoords();
  }, [userLocation]);

  useEffect(() => {
    const getWeekData = async () => {
      try {
        const response = await fetch(
          `api.openweathermap.org/data/2.5/forecast?${coordinates}&appid=f712ca0d0609a5a2b7368dcc5e968c4b`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setWeekData(actualData);
        setWeekError(null);
      } catch (err) {
        setWeekError(err.message);
        setWeekData(null);
      } finally {
        setWeekLoading(false);
      }
    };
    getWeekData();
  }, [coordinates]);

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
