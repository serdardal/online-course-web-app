import React from "react";
import { Button, Card } from "react-bootstrap";

export default function EnrolledCoursesPageItemFooter(props) {
  return (
    <Card.Footer>
      <small className="text-muted">Last watched time: 3 days ago</small>
      <div className="sepet-buton">
        <Button onClick={() => props.handle(props.course)}>
          <i style={{marginRight:10}} class="fas fa-tv"></i>
          İzle
        </Button>
      </div>
    </Card.Footer>
  );
}
