import { combineReducers } from "redux";
import users from "./users";
import lastfm from "./lastfm";

export default combineReducers({
	users,
	lastfm
});
