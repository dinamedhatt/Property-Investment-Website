export function properties(state = {}, action) {
  switch (action.type) {
    case "PROPERTIES_LIST":
      return { ...state, list: action.payload };

    case "prop_recommend":
      return { ...state, list: action.payload };

    case 'prop_details':
      return { ...state, list: action.payload };

    default:
      return state;
  }
}
