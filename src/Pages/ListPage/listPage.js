import React from "react";
import { CourseList } from "../GeneralComponents/CourseList/courseList";
import { connect } from "react-redux";
import ListScreenButtons from "./Components/listScreenButton/listScreenButtons";
import { addToCart } from "../../store/Actions/userActions";

function ListPage(props) {
  return (
    <CourseList
      courses={props.courses}
      buttons={
        <ListScreenButtons
          currentUser={props.currentUser}
          addToCart={props.addToCart}
        ></ListScreenButtons>
      }
    ></CourseList>
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
