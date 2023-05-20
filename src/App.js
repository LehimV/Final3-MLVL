import { useEffect, useState } from "react";
import Dashboard from "./Components/Dashbaord/Dashboard";
import Hightlights from "./Components/Hightlights/Hightlights";
import NextDays from "./Components/NextDays/NextDays";
import axios from "axios";

function App() {
  const API_KEY = "f6ab6f930cd1fc8b5b2c2aeeef3d237d";
  const [currentWeather, setCurrentWeather] = useState({});
  const [nextdays, setNextdays] = useState([]);
  const [city, setCity] = useState("10001");
  const [temperatureFormat, setTemperatureFormat] = useState("c");

  const getCurrentWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${API_KEY}`;
    // Reemplaza {lat}, {lon} y {part} con los valores correspondientes a tu API call.

    try {
      const response = await axios.get(url);
      setCurrentWeather(response.data);
    } catch {
      console.log("there is a problem fetching data");
    }
  };

  const futureWeather = async () => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${API_KEY}`;
    // Reemplaza {lat}, {lon} y {part} con los valores correspondientes a tu API call.

    try {
      const response = await axios.get(url);
      setNextdays(response.data.forecast.forecastday);
    } catch {
      console.log("there is a problem with the API");
    }
  };

  useEffect(() => {
    getCurrentWeather(city);
    futureWeather();
  }, [city]);

  return (
    <div className="App w-[90%]  mx-auto  bg-[#1E213A] ">
      <div className="flex  flex-col lg:flex-row max-h-full ">
        <Dashboard
          currentWeather={currentWeather}
          setCity={setCity}
          temperatureFormat={temperatureFormat}
          setTemperatureFormat={setTemperatureFormat}
        />
        <div className="flex flex-col min-w-[70%] max-h-full bg-[#100E1D] ">
          <NextDays nextdays={nextdays} temperatureFormat={temperatureFormat} />
          <Hightlights currentWeather={currentWeather} />
        </div>
      </div>
    </div>
  );
}

export default App;
