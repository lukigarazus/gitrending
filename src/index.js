import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./reducers";
import { getCookie } from "./utils";
import githubService from "./services/githubService";
import * as serviceWorker from "./serviceWorker";

const cookies = ["language", "since", "starSort"].reduce(
  (acc, name) => ({ ...acc, [name]: getCookie(name) }),
  {}
);

const store = createStore(
  rootReducer,
  { ...cookies, repos: [], loading: true },
  applyMiddleware(githubService)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch({ type: "GET_REPOS" });

serviceWorker.unregister();
