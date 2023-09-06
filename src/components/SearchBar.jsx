import React, { useEffect, useReducer } from "react";
import { InputGroup } from "react-bootstrap";
import WeatherDropdown from "./WeatherDropdown";
import ErrorHandler from "./ErrorHandler";
import { fetchCity, fetchWeather } from "../actions/fetchData";
import InputBar from "./InputBar";
import { mainReducer, initialState } from "../reducer/mainReducer";
export default function SearchBar({ appDispatch }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  let { input, expand, weatherList, error } = state;

  async function getCurrentWeather(list) {
    appDispatch({
      type: "SET_LOADING",
      payload: true,
    });

    dispatch({
      type: "SET_INPUT",
      payload: list.name + " ," + list.country,
    });

    setTimeout(async () => {
      await fetchWeather({
        action: { appDispatch, dispatch },
        payload: { list },
      });
      dispatch({
        type: "SET_EXPAND",
        payload: false,
      });

      appDispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }, 2000);
  }

  useEffect(() => {
    async function fetch() {
      if (input !== "") {
        await fetchCity(dispatch, { input });
      }
    }
    fetch();
  }, [input]);

  return (
    <div className="frame">
      {error.length > 0 ? <ErrorHandler errors={error} /> : ""}

      <InputGroup>
        <InputBar action={{ dispatch }} payload={{ input }} />
        <WeatherDropdown
          action={{ dispatch, getCurrentWeather }}
          payload={{ weatherList, expand }}
        />
      </InputGroup>
    </div>
  );
}
