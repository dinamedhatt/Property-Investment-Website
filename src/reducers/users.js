export function users(state = {}, action) {
  switch (action.type) {
    case "user_add":
      return { ...state, list: action.data };

    case "user_Login":
      return { ...state, list: action.data };

    case "user_details":
      return { ...state, list: action.payload };

    case "user_update":
      return { ...state, list: action.payload };

    case "Wishlist_user":
      return { ...state, list: action.payload };

    case "unlike_user":
      return { ...state, list: action.payload };

    case "user_wishlist":
      return { ...state, list: action.payload };

    case "add_applylist":
      return { ...state, list: action.payload };

    case "user_applylist":
      return { ...state, applylist: action.payload };

    default:
      return state;
  }
}
