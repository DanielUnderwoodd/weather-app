export const initialState = {
  input: "",
  expand: false,
};

export function mainReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };
    case "SET_EXPAND":
      return { ...state, expand: action.payload };
  }
}
