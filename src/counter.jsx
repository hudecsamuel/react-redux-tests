import React, { Component } from 'react'
import { connect } from "react-redux"
import {increment, decrement} from "./actions"

class Counter extends Component {
    render() {
        const { count, increment, decrement } = this.props
        return (
            <div>
                Current Count: {`${count}`}
                <br/>
                <button onClick={increment}>
                    Increment
                </button>
                <button onClick={decrement}>
                    Decrement
                </button>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        count: state.count
    }
}, {
    increment, decrement
})(Counter)