import { combineReducers } from "redux";
import authData from "./auth";
import userData from "./users";
import likeData from "./likes";
import matchData from "./matches";

const rootReducer = combineReducers({ authData, userData, likeData, matchData });

export default rootReducer;
