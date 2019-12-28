import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";
import "./courseItem.css";

export function CourseItem(props) {
  return (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Card>
        <Card.Img
          className="card-image"
          variant="top"
          src="https://secureservercdn.net/50.62.172.212/i4u.275.myftpupload.com/wp-content/uploads/2019/12/072F831A-E088-40B4-AE6F-071BD77C7523.png"
        />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
          <div className="sepet-buton">
            <Button variant="secondary">
              Sepete Ekle
              <i className=" fas fa-cart-plus"></i>
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
