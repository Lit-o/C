import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

let reducers = combineReducers({

    }
)

let store = createStore(reducers, applyMiddleware(thunk))

export default store;