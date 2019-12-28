import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function ListScreenItemFooters(props) {
  function handleCartButton() {
    if (props.currentUser !== "") {
      props.addToCart(props.course);
    } else {
      //uyarı göster
      console.log("sepete eklemek giriş yapılmalı!");
    }
  }

  return (
    <React.Fragment>
      <Button variant="secondary" onClick={() => handleCartButton()}>
        Sepete Ekle
        <i className=" fas fa-cart-plus"></i>
      </Button>
    </React.Fragment>
  );
}
