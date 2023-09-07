import { Container } from "react-bootstrap";
import "./App.css";
import SearchWeather from "./components/SearchWeather";
import WeatherProvider from "./Provider/WeatherProvider";
export default function App() {
  return (
    <div className="bg-img">
      <Container fluid="md">
        <h1 style={{ textAlign: "center" }}>see diffrent cities weather</h1>
        <WeatherProvider>
          <SearchWeather />
        </WeatherProvider>
      </Container>
    </div>
  );
}
