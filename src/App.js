import React from "react";

import PageNavbar from "./Pages/GeneralComponents/Navbar/navbar";
import { store } from "./store/store";

import ListPage from "./Pages/ListPage/listPage";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage/cartPage";

import { Footer } from "./Pages/GeneralComponents/Footer/footer";

import EnrolledCoursesPage from "./Pages/EnrolledCoursesPage/enrolledCoursesPage";

import SignPage from "./Pages/SignInPage/signInPage";

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
          <EnrolledCoursesPage></EnrolledCoursesPage>
        </Route>
        <Route path="/sign-in">
          <SignPage></SignPage>
        </Route>
      </Router>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);
