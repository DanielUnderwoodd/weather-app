import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function WeatherDropdown(props) {
  let { expand, weatherList } = props.payload;
  let { dispatch, getCurrentWeather } = props.action;
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
