import { combineReducers } from "redux"
import {
    INCREMENT,
    DECREMENT,
} from "./actions"

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return ++state
        case DECREMENT:
            return --state
        default:
            return state
    }
}

const rootReducer = combineReducers({
    count: countReducer
})

export default rootReducer