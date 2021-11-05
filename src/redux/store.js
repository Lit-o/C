import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import exchangeReducer from "./exchangeReducer";

let reducers = combineReducers({
        exchangePage: exchangeReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunk))

export default store;