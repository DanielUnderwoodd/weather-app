import cityApi from "../api/cityApi";
import weatherApi from "../api/weatherApi";

export const fetchCity = async (dispatch, payload) => {
  try {
    let response = await cityApi.get("", {
      params: {
        q: payload.input,
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
  let { appDispatch, dispatch } = action;
  let { lat, lon } = payload.list;
  try {
    let response = await weatherApi.get("", {
      params: {
        lat,
        lon,
      },
    });
    if (response && response.data) {
      appDispatch({
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
