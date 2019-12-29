import React from "react";
import { Button, Card } from "react-bootstrap";

export function CartPageItemFooter(props) {
  return (
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
      <div className="sepet-buton">
        <Button variant="danger" onClick={() => props.handle(props.course)}>
          Sepetten Çıkar
          <i className=" fas fa-cart-plus"></i>
        </Button>
      </div>
    </Card.Footer>
  );
}
