import React from "react";

import PageNavbar from "./Pages/GeneralComponents/Navbar/navbar";

import { store } from "./store/store";

import { Provider } from "react-redux";

function App() {
  return <PageNavbar></PageNavbar>;
}

export default () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);
