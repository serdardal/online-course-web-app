import React from "react";

import { Deneme } from "./Pages/Deneme/deneme";

import { store } from "./store/store";

import { Provider } from "react-redux";

function App() {
  return <Deneme></Deneme>;
}

export default () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);
