export const initialState = {
  input: "",
  expand: false,
  weatherList: [],
  error: [],
  isLoading: false,
  currentWeather: "",
};

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_WEATHER":
      return { ...state, currentWeather: action.payload };
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_EXPAND":
      return { ...state, expand: action.payload };
    case "SET_WEATHER_LIST":
      return { ...state, weatherList: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_INPUT_LOADING":
      return { ...state, ...action.payload };
    case "SET_EXPAND_LOADING":
      return { ...state, ...action.payload };
  }
}
