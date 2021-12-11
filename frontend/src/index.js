import React from "react";
import ReactDOM from "react-dom";
import AuthOrApp from "./main/authOrApp";

import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./main/reducers";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthOrApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
