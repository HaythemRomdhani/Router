import React from "react";
import {Card,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import "./MovieCard.css";
import { Link } from "react-router-dom";
function MovieCard({movie}) {
  return (
    <div className="Card">
      <Card>
      <Link to={`/description/${movie.id}`}>
        <Card.Img variant="top" src={movie.posterURL} style = {{width:"200px",height:"300px"}} />
        <Card.Body>
          <Card.Title className="Card-title">{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <StarRatingComponent  name="rate" starCount={5} value={movie.rate}  />
          <Button
            variant="primary"
            onClick={() => movie.deleteMovie(movie.id)}>
            Remove
          </Button>
        </Card.Body>
        </Link> 
      </Card>
    </div>
  );
}

export default MovieCard;
