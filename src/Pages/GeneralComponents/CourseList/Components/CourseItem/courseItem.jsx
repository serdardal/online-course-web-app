import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import { connect } from "react-redux";
import "./courseItem.css";
import { addToCart } from "../../../../../store/Actions/userActions";

export function CourseItem(props) {
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
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          <div className="sepet-buton">
            {props.buttons}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
