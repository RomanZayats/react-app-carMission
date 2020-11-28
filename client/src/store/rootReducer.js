import { combineReducers } from "redux";
import logo from "./logo/reducer";
import navbar from "./navbar/reducer";
import socialNetworks from "./social-networks/reducer";




const reducer = combineReducers({
    logo,
    navbar,
    socialNetworks
});

export default reducer;
