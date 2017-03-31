import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import Counter from "./counter"

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
    , document.querySelector("#container"))
