import React, { useEffect, useState } from "react";
import { Form, InputGroup, DropdownButton, Dropdown } from "react-bootstrap";
import ErrorHandler from "./ErrorHandler";
import { fetchCity, fetchWeather } from "../actions/fetchData";
export default function SearchBar({ setCurrentWeather, setLoading }) {
  const [error, setError] = useState([]);
  const [expand, setExpand] = useState(false);
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState([]);

  function onChange(e) {
    setInput(e.target.value);
    if (e.target.value === "") {
      setExpand(false);
    } else {
      setExpand(true);
    }
  }

  async function showForecast(list) {
    setLoading(true);
    setInput(list.name + " ," + list.country);

    setTimeout(async () => {
      let response = await fetchWeather(list);
      setCurrentWeather(response);
      setExpand(false);
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    async function fetchData() {
      let response = await fetchCity(input);
      if (response.type === "error") {
        setWeather(response.payload);
        setError((current) => {
          return [...current, JSON.stringify(response.e.message)];
        });
      } else {
        setWeather(response.payload);
      }
    }
    fetchData();
  }, [input]);

  return (
    <div className="frame">
      {error.length > 0 ? <ErrorHandler errors={error} /> : ""}

      <InputGroup>
        <Form.Control
          onChange={(e) => onChange(e)}
          placeholder="London, GB"
          aria-label="Text input with dropdown button"
          value={input}
        />

        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-1"
          bsPrefix="customize-dropdown"
          show={expand}
          onToggle={() => setExpand(!expand)}>
          {weather.map((list, i) => {
            if (i + 1 === weather.length) {
              return (
                <Dropdown.Item onClick={() => showForecast(list)}>
                  {list.name + " ," + list.country}
                </Dropdown.Item>
              );
            } else {
              return (
                <>
                  <Dropdown.Item role="menu" onClick={() => showForecast(list)}>
                    {list.name + " ," + list.country}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                </>
              );
            }
          })}
        </DropdownButton>
      </InputGroup>
    </div>
  );
}
