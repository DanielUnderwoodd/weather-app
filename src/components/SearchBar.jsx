import React, { useEffect, useContext } from "react";
import { InputGroup } from "react-bootstrap";
import WeatherDropdown from "./WeatherDropdown";
import ErrorHandler from "./ErrorHandler";
import { fetchCity, fetchWeather } from "../actions/fetchData";
import InputBar from "./InputBar";
import { WeatherContext, WeatherDispatchContext } from "../context/MainContext";
export default function SearchBar() {
  const state = useContext(WeatherContext);
  const dispatch = useContext(WeatherDispatchContext);

  let { input, error } = state;

  async function getCurrentWeather(list) {
    console.log(list);
    dispatch({
      type: "SET_INPUT_LOADING",
      payload: {
        isLoading: true,
        input: list.name + " ," + list.country,
      },
    });
    setTimeout(async () => {
      await fetchWeather({
        action: { dispatch },
        payload: list,
      });
      dispatch({
        type: "SET_EXPAND_LOADING",
        payload: {
          expand: false,
          isLoading: false,
        },
      });
    }, 2000);
  }

  useEffect(() => {
    async function getCity() {
      if (input !== "") {
        await fetchCity({
          action: { dispatch },
          payload: { input },
        });
      }
    }
    getCity();
  }, [input]);

  return (
    <div className="frame">
      {error.length > 0 ? <ErrorHandler errors={error} /> : ""}

      <InputGroup>
        <InputBar />
        <WeatherDropdown getCurrentWeather={getCurrentWeather} />
      </InputGroup>
    </div>
  );
}
