// eslint-disable-next-line no-unused-vars
import redux, { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export function increment() {
  // return (dispatch) => {
  //     // Do all sorts of async stuff first,
  //     // THEN use dispatch({type: "INCREMENT"})
//   setTimeout(() => {
            
// }, 1500)
  // }
  return {
    type: "INCREMENT",
  };
}

export function decrement() {
  return {
    type: "DECREMENT",
  };
}

function reducer(count = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
export default store;
