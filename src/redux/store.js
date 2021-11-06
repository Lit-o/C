import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import exchangeReducer from "./exchangeReducer";
import converterReducer from "./converterReducer";

let reducers = combineReducers({
        exchangePage: exchangeReducer,
        converterPage: converterReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunk))

export default store;