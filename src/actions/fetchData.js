import cityApi from "../api/cityApi";
import weatherApi from "../api/weatherApi";

export const fetchCity = async ({ action, payload }) => {
  let { dispatch } = action;
  let { input } = payload;
  try {
    let response = await cityApi.get("", {
      params: {
        q: input,
      },
    });
    if (response && response.data) {
      dispatch({
        type: "SET_WEATHER_LIST",
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: "ERROR",
      payload: JSON.stringify(e.message),
    });
  }
};

export const fetchWeather = async ({ action, payload }) => {
  let { dispatch } = action;
  let { lat, lon } = payload;
  try {
    let response = await weatherApi.get("", {
      params: {
        lat,
        lon,
      },
    });
    if (response && response.data) {
      dispatch({
        type: "SET_WEATHER",
        payload: response.data,
      });
    }
  } catch (e) {
    dispatch({
      type: "ERROR",
      payload: JSON.stringify(e.message),
    });
  }
};
