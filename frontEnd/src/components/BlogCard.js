import React from "react";
import { Card, Button } from "react-bootstrap";

function BlogCard() {

  const cardInfo = [
    { image: "", title: "aaa", text: ""},
    { image: "", title: "bbb", text: ""},
    { image: "", title: "ccc", text: ""},
    { image: "", title: "ddd", text: ""},
  ]

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div>
      {cardInfo.map(renderCard)}
    </div>
  );
}

export default BlogCard;
