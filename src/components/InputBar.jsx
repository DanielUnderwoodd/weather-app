import React from "react";
import { Form } from "react-bootstrap";

export default function InputBar(props) {
  const { input } = props.payload;
  const { dispatch } = props.action;

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
