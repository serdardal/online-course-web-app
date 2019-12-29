import React from "react";
import { Button, Card } from "react-bootstrap";

export default function ListPageItemFooter(props) {
  return (
    <Card.Footer>
      <h5 style={{ display: "inline-block" }}>Price: </h5>
      <h5 style={{ display: "inline-block" }} className="">
        {props.course.price} TL
      </h5>
      <div className="sepet-buton">
        <Button variant="secondary" onClick={() => props.handle(props.course)}>
          <i style={{ marginRight: 10 }} className=" fas fa-cart-plus"></i>
          Add To Cart
        </Button>
      </div>
    </Card.Footer>
  );
}
