import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { CourseItem } from "./Components/CourseItem/courseItem";

import {connect} from 'react-redux'

function CourseList(props) {
  if (props.courses.length === 0) {
    return <text>There is no course to show!</text>;
  }
  return <Container>{generateItems(props.courses)}</Container>;
}

function generateItems(courses) {
  const rowList = [];
  const remainderItemNumber = courses.length % 3;
  const fullRowNumber = (courses.length - remainderItemNumber) / 3;

  for (let i = 0; i < fullRowNumber; i++) {
    let colList = [];
    for (let j = 0; j < 3; j++) {
      colList.push(
        <Col>
          <CourseItem course={courses[3 * i + j]}></CourseItem>
        </Col>
      );
    }
    rowList.push(<Row>{colList}</Row>);
  }
  if (remainderItemNumber > 0) {
    let colList = [];
    for (let i = 0; i < 3; i++) {
      if (i < remainderItemNumber) {
        colList.push(
          <Col>
            <CourseItem course={courses[fullRowNumber * 3 + i]}></CourseItem>
          </Col>
        );
      } else {
        colList.push(<Col></Col>);
      }
    }
    rowList.push(<Row>{colList}</Row>);
  }

  return rowList;
}

const mapStateToProps = state => {
  return { courses: state.courseReducer.courses };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);