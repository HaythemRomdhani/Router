import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import "./MovieCard.css";
function MovieCard({movie}) {
  return (
    <div className="Card">
      <Card>
        <Card.Img variant="top" src={movie.posterURL} style = {{width:"200px",height:"300px"}} />
        <Card.Body>
          <Card.Title className="Card-title">{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <StarRatingComponent  name="rate" starCount={5} value={movie.rate}  />
        </Card.Body>
        
      </Card>
    </div>
  );
}

export default MovieCard;
