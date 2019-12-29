import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { CourseItem } from "./Components/CourseItem/courseItem";
import { message} from "antd";

export function CourseList(props) {
  function generateItems(courses) {
    const rowList = [];
    const remainderItemNumber = courses.length % 3;
    const fullRowNumber = (courses.length - remainderItemNumber) / 3;

    for (let i = 0; i < fullRowNumber; i++) {
      let colList = [];
      for (let j = 0; j < 3; j++) {
        colList.push(
          <Col>
            <CourseItem course={courses[3 * i + j]}>
              {props.children}
            </CourseItem>
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
              <CourseItem course={courses[fullRowNumber * 3 + i]}>
                {props.children}
              </CourseItem>
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

  if (props.courses.length === 0) {
    return (
      <div style={{ padding: 50 }}>
        <text>There is no course to show!</text>
      </div>
    );
  }

  return <Container>{generateItems(props.courses)}</Container>;
}
