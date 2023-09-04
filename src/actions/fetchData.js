import cityApi from "../api/cityApi";
import weatherApi from "../api/weatherApi";

export const fetchCity = async (city) => {
  if (!city) {
    return {
      type: "success",
      payload: [],
    };
  } else {
    try {
      let response = await cityApi.get("", {
        params: {
          q: city,
        },
      });
      if (response && response.data) {
        return {
          type: "success",
          payload: response.data,
        };
      }
    } catch (e) {
      return {
        type: "error",
        payload: [],
        e,
      };
    }
  }
};

export const fetchWeather = async ({ lat, lon }) => {
  try {
    let response = await weatherApi.get("", {
      params: {
        lat,
        lon,
      },
    });
    if (response && response.data) {
      return response.data;
    }
  } catch (e) {}
};
