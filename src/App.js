import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./redux/index"

function App(props) {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return <div className="App">
  Hi! I'm Increment decrement app.
  <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
  </div>;
}

export default App;
