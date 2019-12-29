import React from "react";
import { CourseList } from "../GeneralComponents/CourseList/courseList";
import { connect } from "react-redux";
import ListPageItemFooter from "./Components/ListPageItemFooter/listPageItemFooter";
import { addToCart } from "../../store/Actions/userActions";
import { message } from "antd";

function ListPage(props) {
  function handleCartButton(course) {
    if (props.currentUser !== "") {
      props.addToCart(course);
    } else {
      message.warning("You must be logged in to add this course to your cart!");
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
