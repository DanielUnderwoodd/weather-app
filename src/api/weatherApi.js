import axios from "axios";
axios.defaults.withCredentials = false;

export default axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/weather?appid=96c4a9454b5950ee36e59454486c034c",
});
