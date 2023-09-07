import React, { useReducer } from "react";
import { WeatherContext, WeatherDispatchContext } from "../context/MainContext";
import { initialState, appReducer } from "../reducer/appReducer";

export default function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <WeatherContext.Provider value={state}>
      <WeatherDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherDispatchContext.Provider>
    </WeatherContext.Provider>
  );
}
