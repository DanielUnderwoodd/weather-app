import React, { useContext } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { WeatherContext, WeatherDispatchContext } from "../context/MainContext";

export default function WeatherDropdown(props) {
  const dispatch = useContext(WeatherDispatchContext);
  const state = useContext(WeatherContext);
  let { expand, weatherList } = state;
  let { getCurrentWeather } = props;
  return (
    <DropdownButton
      variant="outline-secondary"
      title=""
      id="input-group-dropdown-1"
      bsPrefix="customize-dropdown"
      show={expand}
      onToggle={() => dispatch({ type: "SET_EXPAND", payload: !expand })}>
      {weatherList.map((list, i) => {
        if (i + 1 === weatherList.length) {
          return (
            <Dropdown.Item onClick={() => getCurrentWeather(list)}>
              {list.name + " ," + list.country}
            </Dropdown.Item>
          );
        } else {
          return (
            <>
              <Dropdown.Item
                role="menu"
                onClick={() => getCurrentWeather(list)}>
                {list.name + " ," + list.country}
              </Dropdown.Item>
              <Dropdown.Divider />
            </>
          );
        }
      })}
    </DropdownButton>
  );
}
