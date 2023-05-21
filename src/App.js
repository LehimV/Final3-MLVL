import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Components/Dashboard/Dashboard";
import Highlights from "./Components/Highlights/Highlights";
import NextDays from "./Components/NextDays/NextDays";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [currentWeather, setCurrentWeather] = useState({});
  const [nextdays, setNextdays] = useState([]);
  const [city, setCity] = useState("10001");
  const url = "https://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + city;

  const searchLocation = () => {
    axios
      .get(url)
      .then((response) => {
        setCurrentWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("There was a problem fetching data:", error);
      });
  };

  useEffect(() => {
    searchLocation();
  }, []);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  };

  return (
    <div className="App w-[90%] mx-auto bg-[#1E213A]">
      <div className="flex flex-col lg:flex-row max-h-full">
        <Dashboard
          currentWeather={currentWeather}
          setCity={setCity}
          temperatureFormat="c"
          setTemperatureFormat={() => {}}
          onSearch={handleSearch}
        />
        <div className="flex flex-col min-w-[70%] max-h-full bg-[#100E1D]">
          <NextDays nextdays={nextdays} temperatureFormat="c" />
          <Highlights currentWeather={currentWeather} />
        </div>
      </div>
    </div>
  );
}

export default App;
