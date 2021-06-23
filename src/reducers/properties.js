export function properties(state = {}, action) {
  if (action.type === "PROPERTIES_LIST") {
    return { ...state, list: action.payload };
  } else {
    return state;
  }
}
