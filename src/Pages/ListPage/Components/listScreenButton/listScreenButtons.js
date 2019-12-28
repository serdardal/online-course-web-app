import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function ListScreenItemFooters(props) {
  return (
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <div className="sepet-buton">
        <Button variant="secondary" onClick={() => props.handle(props.course)}>
          Sepete Ekle
          <i className=" fas fa-cart-plus"></i>
        </Button>
      </div>
    </Card.Footer>
  );
}
