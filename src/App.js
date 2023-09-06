import { Container } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Section from "./components/Section";
import { useReducer } from "react";
import { appReducer, initialState } from "./reducer/appReducer";

import EmptyTemplate from "./components/EmptyTemplate";

export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  let { currentWeather, isLoading } = state;

  return (
    <div className="bg-img">
      <Container fluid="md">
        <h1 style={{ textAlign: "center" }}>see diffrent cities weather</h1>
        <SearchBar appDispatch={dispatch} />

        {Object.keys(currentWeather).length ? (
          <Section payload={{ isLoading, currentWeather }} />
        ) : (
          <EmptyTemplate payload={{ isLoading }} />
        )}
      </Container>
    </div>
  );
}
