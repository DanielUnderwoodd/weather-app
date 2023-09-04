
import axios from 'axios'
axios.defaults.withCredentials = false

export default axios.create({
    baseURL: "http://api.openweathermap.org/geo/1.0/direct?limit=5&appid=96c4a9454b5950ee36e59454486c034c",

})



