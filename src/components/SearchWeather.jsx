import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import Section from "./Section";
import EmptyTemplate from "./EmptyTemplate";
import { WeatherContext } from "../context/MainContext";

export default function SearchWeather() {
  const state = useContext(WeatherContext);
  let { isLoading, currentWeather } = state;
  return (
    <>
      <SearchBar />

      {Object.keys(currentWeather).length ? (
        <Section isLoading={isLoading} currentWeather={currentWeather} />
      ) : (
        <EmptyTemplate isLoading={isLoading} />
      )}
    </>
  );
}
