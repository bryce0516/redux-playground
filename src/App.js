import logo from "./logo.svg";
import "./App.css";

import { createSlice, configureStore } from "@reduxjs/toolkit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Views/Home";
import Users from "./Views/Users";
import About from "./Views/About";
import Counter from "./Views/Counter";
import counterReducer from "./redux/Counter";
//example toolkit
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     incremented: (state) => {
//       state.value += 1;
//     },
//     decremented: (state) => {
//       state.value -= 1;
//     },
//   },
// });
// export const { incremented, decremented } = counterSlice.actions;

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(incremented());

// store.dispatch(incremented());

// store.dispatch(decremented());

const store = configureStore({ reducer: counterReducer });

function App() {
  // let store = createStore(counterReducer);

  // store.subscribe(() => console.log(store.getState()));

  // store.dispatch({ type: "counter/incremented" });

  // store.dispatch({ type: "counter/decremented" });

  // store.dispatch({ type: "counter/decremented" });

  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
