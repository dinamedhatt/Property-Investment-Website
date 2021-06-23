import { combineReducers } from "redux";
import { faqs } from "./faqs.js";
import { users } from "./users";
import { properties } from "./properties";

export default combineReducers({
  faqs,
  users,
  properties,
});
