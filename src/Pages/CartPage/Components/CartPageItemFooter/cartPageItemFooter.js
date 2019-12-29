import React from "react";
import { Button, Card } from "react-bootstrap";

export function CartPageItemFooter(props) {
  return (
    <Card.Footer>
      <h5 style={{ display: "inline-block" }}>Price: </h5>
      <h5 style={{ display: "inline-block" }} className="">
        {props.course.price} TL
      </h5>
      <div className="sepet-buton">
        <Button variant="danger" onClick={() => props.handle(props.course)}>
          <i style={{ marginRight: 10 }} class="far fa-trash-alt"></i>
          Sepetten Çıkar
        </Button>
      </div>
    </Card.Footer>
  );
}
