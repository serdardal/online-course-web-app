import React from "react";

import Counter from "./Pages/counter";

import { store } from "./store/store";

import { Provider } from "react-redux";

function App() {
  return <Counter></Counter>;
}

export default () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);
