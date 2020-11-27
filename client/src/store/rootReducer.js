import { combineReducers } from "redux";
import logo from "./logo/reducer";
import navbar from "./navbar/reducer";
import feedbackFormReducer from "./FeedbackForm/feedbackFormReducer"



const reducer = combineReducers({
    logo,
    navbar,
    feedbackFormReducer
});

export default reducer;
