import React from "react";
import { connect } from "react-redux";
import { CourseList } from "../GeneralComponents/CourseList/courseList";
import EnrolledCoursesPageItemFooter from "./Components/EnrolledCorusesPageItemFooter/enrolledCoursesPageItemFooter";

function EnrolledCoursesPage(props) {
  return (
    <CourseList courses={props.enrolledCourses}>
      <EnrolledCoursesPageItemFooter
        handle={() => {}}
      ></EnrolledCoursesPageItemFooter>
    </CourseList>
  );
}

const mapStateToProps = state => {
  return {
    enrolledCourses: state.userReducer.enrolledCourses
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnrolledCoursesPage);
