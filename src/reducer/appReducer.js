export const initialState = {
  isLoading: false,
  currentWeather: "",
};

export function appReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_WEATHER":
      return { ...state, currentWeather: action.payload };
  }
}
