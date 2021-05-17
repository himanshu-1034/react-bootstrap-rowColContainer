import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
export default function CardBootstrap(props) {
  return (
    <Card style={{ background: "yellow" }}>
      <Card.Img
        alt="img"
        style={{ height: props.height, width: props.width }}
      ></Card.Img>
      <Card.Body>
        <Card.Title>This is a title</Card.Title>
      </Card.Body>
    </Card>
  );
}

//"150px"
// "318px"
