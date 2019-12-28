import React from "react";

import PageNavbar from "./Pages/GeneralComponents/Navbar/navbar";
import { store } from "./store/store";

import  CourseList  from "./Pages/GeneralComponents/CourseList/courseList";

import { Provider } from "react-redux";

function App() {
  return (
    <React.Fragment>
      <PageNavbar></PageNavbar>
      <CourseList></CourseList>
    </React.Fragment>
  );
}

export default () => (
  <Provider store={store}>
    <App></App>
  </Provider>
);
