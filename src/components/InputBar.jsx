import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { WeatherDispatchContext, WeatherContext } from "../context/MainContext";

export default function InputBar() {
  const dispatch = useContext(WeatherDispatchContext);
  const state = useContext(WeatherContext);
  let { input } = state;

  function onChange(e) {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
    if (e.target.value === "") {
      dispatch({ type: "SET_EXPAND", payload: false });
    } else {
      dispatch({ type: "SET_EXPAND", payload: true });
    }
  }
  return (
    <>
      <Form.Control
        onChange={(e) => onChange(e)}
        placeholder="London, GB"
        aria-label="Text input with dropdown button"
        value={input}
      />
    </>
  );
}
