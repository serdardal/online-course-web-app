import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./courseItem.css";

export function CourseItem(props) {
  let footersWithCourse;
  if (props.children !== undefined) {
    footersWithCourse = React.cloneElement(props.children, {
      course: props.course
    });
  } else {
    footersWithCourse = null;
  }
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Card>
        <Card.Img
          className="card-image"
          variant="top"
          src={require("../../../../../StaticFiles" + props.course.url)}
        />
        <Card.Body>
          <Card.Title>{props.course.name}</Card.Title>
          <Card.Text>{props.course.description}</Card.Text>
        </Card.Body>
        {footersWithCourse}
      </Card>
    </div>
  );
}
