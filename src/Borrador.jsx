function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [currentWeather, setCurrentWeather] = useState({});
  const [nextdays, setNextdays] = useState([]);
  const [city, setCity] = useState("10001");
  const currentWeatherURL =
    "https://api.weatherapi.com/v1/current.json?key=" + API_KEY + "&q=" + city;
  const forecastURL =
    "https://api.weatherapi.com/v1/forecast.json?key=" + API_KEY + "&q=" + city + "&days=3";

  const searchLocation = () => {
    axios
      .get(currentWeatherURL)
      .then((response) => {
        setCurrentWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("There was a problem fetching data:", error);
      });
