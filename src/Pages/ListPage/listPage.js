import React from "react";
import { CourseList } from "../GeneralComponents/CourseList/courseList";
import { connect } from "react-redux";
import ListPageItemFooter from "./Components/ListPageItemFooter/listPageItemFooter";
import { addToCart } from "../../store/Actions/userActions";

function ListPage(props) {
  function handleCartButton(course) {
    if (props.currentUser !== "") {
      props.addToCart(course);
    } else {
      //uyarı göster
      console.log("sepete eklemek giriş yapılmalı!");
    }
  }

  return (
    <CourseList courses={props.courses}>
      <ListPageItemFooter handle={handleCartButton}></ListPageItemFooter>
    </CourseList>
  );
}

const mapStateToProps = state => {
  return {
    courses: state.courseReducer.courses,
    currentUser: state.userReducer.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: course => dispatch(addToCart(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
