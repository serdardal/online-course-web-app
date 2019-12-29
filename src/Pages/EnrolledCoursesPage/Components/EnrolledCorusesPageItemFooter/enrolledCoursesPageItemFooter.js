import React from "react";
import { Button, Card } from "react-bootstrap";

export default function EnrolledCoursesPageItemFooter(props) {
  return (
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <div className="sepet-buton">
        <Button onClick={() => props.handle(props.course)}>
          İzle
          <i className=" fas fa-cart-plus"></i>
        </Button>
      </div>
    </Card.Footer>
  );
}
