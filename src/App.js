import React from "react";

import PageNavbar from "./Pages/GeneralComponents/Navbar/navbar";
import { store } from "./store/store";

import ListPage from "./Pages/ListPage/listPage";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage/cartPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <PageNavbar></PageNavbar>
        <Route exact path="/">
          <ListPage></ListPage>
        </Route>
        <Route path="/cart">
          <CartPage></CartPage>
        </Route>
        <Route path="/user-courses">
          <DenemeCom2></DenemeCom2>
        </Route>
      </Router>
    </React.Fragment>
  );
}

function DenemeCom() {
  return <h1>denemeee</h1>;
}
function DenemeCom2() {
  return <h1>denemeee2</h1>;
}

export default () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);
