export const initialState = {
  input: "",
  expand: false,
  weatherList: [],
  error: [],
  isLoading: false,
};

export function mainReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_EXPAND":
      return { ...state, expand: action.payload };
    case "SET_WEATHER_LIST":
      return { ...state, weatherList: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
  }
}
